/*
author: niels.seidel@nise81.com
module:
description: 

**/

module.exports = function(db, app) {
	var module = {};

	mongoose = require( 'mongoose' ),
	images = require('./images'),
	portals = require('./portals'),	
	patterns = require('./patterns'),	
	analysis = require('./analysis')
	users = require('./users'),
	messages = require('./messages')
	;
	

//if (req.isAuthenticated()) { return next(); }
//res.redirect('/login')
	
/* define routes **/


	

  // misc
  //app.get(	'/', function ( req, res ){ res.render( 'intro', { title : 'Designing Video Interfaces' }); });
	app.get(	'/', 						portals.list );
	app.get(	'/wizzard', function ( req, res ){ res.render( 'wizzard', { title : 'Pattern Wizzard' }); });
	app.get(	'/about', function ( req, res ){ res.render( 'about', { title : 'About' }); });
	app.get(	'/citation', function ( req, res ){ res.render( 'citation', { title : 'Citation' }); });
  app.get(	'/api', function ( req, res ){ res.render( 'api', { title : 'API' }); });
  app.get(	'/analysis', analysis.renderPortalDataLatex );
  
  
  app.get(	'/eval', function ( req, res ){ res.render( 'eval-pattern-buckets', { title : 'What do you think?' }); });

	// routes for portals
	app.get(	'/portals', 						portals.list );
	app.get(	'/portals/patterns/:id',portals.getPortalsOfPattern );
	app.get(	'/portals/tag/:id',			portals.getPortalsOfTag );
	app.get(	'/portals/new', 				portals.new_one );
	app.post(	'/portals/create', 			portals.create );
	app.get(	'/portals/destroy/:id',	portals.destroy );
	app.get(	'/portals/edit/:id', 		portals.edit );
	app.post(	'/portals/update/:id', 	portals.update );
	app.get(	'/json/portals', 				portals.getJSON );
	app.get(	'/json/portals/patterns/:id',portals.getJSONPortalsOfPattern );
	app.get(	'/json/pattern-names', 	portals.getJSONPatterns );
	app.get(	'/json/portals/name',		portals.getJSONPortalNames );
	
	// routes for images
	app.get( 	'/json/images/all' , 			images.getJSON );
	app.get( 	'/json/images/by-pattern/:pattern', images.getJSONImagePerPattern );
	app.get( 	'/json/images/by-portal/:portal', images.getJSONImagePerPortal );
	app.get( 	'/json/images/view/:filename' 		, images.getJSONImagePerFilename );
	app.get(	'/images', 						images.list );
	app.get(	'/images/edit', 			images.edit );
	app.get(	'/images/destroy/:id',images.destroy );
	app.post(	'/images/update/:id', images.update );
	
	// routes for patterns
	app.get( 	'/json/patterns' , 			patterns.getJSON );
	app.get(	'/json/patterns/name',	patterns.getJSONPatternNames );
	app.get(	'/patterns/list', 			patterns.list );
	app.get(	'/proto-patterns/list', patterns.listProtopatterns );
	app.get(	'/patterns/view/:name', patterns.listOne );
//	app.get(	'/patterns/view/:id', 	patterns.listOne );
	app.get(	'/patterns/edit/:id', 	patterns.edit );
//	app.get(	'/patterns/edit/:name', patterns.edit );
	app.post(	'/patterns/update/:id', patterns.update );
	
	
	// routes for messages
	app.get( 	'/json/messages/all' , 			messages.getJSON );
	app.get( 	'/json/messages/:type' , 		messages.getJSONbyType );


	
	// routes for system purpose	
	app.post('/log', function(req, res) {
		log.write(req.param('data'));	
		res.send('terminated logging');
	});
	app.get('/log', users.authCallback(['editor']), function(req, res) {
		//console.log(req.headers.toString()+'__________________'+String(req.headers['X-Forwarded-For']).split('-')[0]);
		//log.write(req.param('data'));	
		//res.type('text/text');
		res.send('terminated request');
	});	
	

	// routes related to User Management and Passport - Local Authentication
	app.get(	'/users/view/:username', 	users.show );// showAccountDetails);
	app.get(	'/admin/users/new', 						users.addUserForm ); // opens input form
	app.get(	'/users/register', 				users.registrationForm ); // opens input form
	app.post(	'/users/register', 				users.registerUser ); // saves user
	app.post(	'/users/create', 					users.create ); // saves user
	app.post(	'/users/update/:id', users.authCallback(['editor']),		users.update );//users.updateUsers);	
	app.get(	'/admin/users/destroy/:id',		users.destroy );
	app.get(	'/admin/users/edit/:username', 	users.edit );
	app.post(	'/users/online/:username', 	users.setOnlineStatus );
	app.get(	'/users/online/:username', 	users.getOnlineStatus );
	// api
	app.get('/json/users', users.ensureAuthenticated, users.getJSON);
	app.get('/json/user-data', users.getUserData );
	app.get('/json/group-data', users.getGroupData );

	// login
	app.get('/logout', users.ensureAuthenticated, users.handleLogout );
	app.get('/login', users.openLoginPage ); //curl -v -d "username=bob&password=secret" http://localhost:3000/login
	app.post('/login', users.authenticate );

	
	/*
	Logging
	**/
	var log = fs.createWriteStream('logfile.debug', {'flags': 'a'}); // use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file


} // end module
