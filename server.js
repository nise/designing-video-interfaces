/*
author: niels.seidel@nise81.com
titel: video pattern and application database
description: 
**/


require( './db' );

var
	compression = require('compression') 
	express = require('express'),
	expressValidator = require('express-validator'),
	app = express(),
	path = require('path'),
	flash = require('connect-flash'),
	server = require('http').createServer(app),
	fs = require('node-fs'),

	// database entities
	users = require('./routes/users'),
	images = require('./routes/images'),
	portals = require('./routes/portals'),
	patterns = require('./routes/patterns'),
	analysis = require('./routes/analysis')
	;
	

	
	//io.set('transports', ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']);
	var port = 3000;
	server.listen(port);
	server.setMaxListeners(0); // xxx: untested: unfinite number of listeners, default: 10;
	// http://nodejs.org/docs/latest/api/events.html#events_emitter_setmaxlisteners_n
	
console.log('\n\n************************************************');
console.log('Started server on port: '+ port);	
console.log('************************************************\n\n');

	
	exports.getServer = function ( req, res ){
		return server;
	};

/* configure application **/
  app.set('port', process.env.PORT || port);
  app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
	app.use(compression())
	
  app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/public/static/views');
	app.set('view engine', 'ejs');
	app.engine('ejs', require('ejs-locals'));
		
	var cookieParser = require('cookie-parser');
	app.use(cookieParser());
//	app.use(express.cookieSession({ secret: 'tobo!', maxAge: 360*5 }));
		
	var json = require('express-json');
	app.use( json());
	
	var bodyParser = require('body-parser');
	app.use(expressValidator());	
	app.use( bodyParser.urlencoded({ extended: true }));
	app.use( bodyParser.json());
		
	var methodOverride = require('method-override');
	app.use( methodOverride());
		
	var session = require('express-session');
	app.use(session({
	  secret: 'keyb22oar4d cat', 
	  saveUninitialized: true,
	  resave: true
    }));
	
	app.use(flash());
	app.use(users.passport.initialize());
	app.use(users.passport.session());
	//app.use(app.router);
	app.set("jsonp callback", true); // ?????

	


/* ACL */
//

var mongoose = require( 'mongoose' );
var conn = mongoose.connect( 'mongodb://localhost/video-patterns' , function(err, db){
	if(err){
		console.log(err);
	}else{
		//images.maintain();
		/*
		Import data
		**/
		
		// !!! do not!1 portals.maintain();
		// !!! do not!! portals.csvImport();
		//images.folderImport();
//images.validate();
		//patterns.folderImport();
//		utils.addPattern();

		// checks
		//analysis.checkConsitency();
		//analysis.getMissingPatterns();
		
		// ANALYSES
		//analysis.getInstancesOfPattern();
		/*
		analysis.getInstancesOfPattern(0);
		analysis.getInstancesOfPattern(1);
		analysis.getInstancesOfPattern(2);
		analysis.getInstancesOfPattern(3);
		analysis.getInstancesOfPattern(4);
		analysis.getInstancesOfPattern(5);
		analysis.getInstancesOfPattern(6);
		analysis.getInstancesOfPattern(7);
		analysis.getInstancesOfPattern(8);
		analysis.getInstancesOfPattern(9);*/
		
		//////analysis.getInstancesOfPattern();
		//analysis.getPatternsPerPortals();
		//analysis.getTagCoOccurences({},{});
		//analysis.getPatternCoOccurences({},{});
		//analysis.getPortalCoOccurences();
		
		// Kappa
		//analysis.kappe_blanc_matrix();
		//analysis.kappa();
		
		
		
		
		//users.csvImport();
		var maintainance = 0;
		if( !maintainance ){
		var ACL = require('./routes/aclrouts')(db, app);
		}else{
				app.get('/', function(req, res) {	
					res.send('<h1>Designing Video Interfaces</h1><ul><li>Interaction Design Patterns for Video Learning Environments</li><li>Database of video-based Learning Environments</li></ul>Page under maintainance due server updates.');
				});
				app.get('/portals', function(req, res) {	
					res.send('<h1>Designing Video Interfaces</h1><ul><li>Interaction Design Patterns for Video Learning Environments</li><li>Database of video-based Learning Environments</li></ul>Page under maintainance due server updates.');
				});
				app.get('/patterns', function(req, res) {	
					res.send('<h1>Designing Video Interfaces</h1><ul><li>Interaction Design Patterns for Video Learning Environments</li><li>Database of video-based Learning Environments</li></ul>Page under maintainance due server updates.');
				});
		}
	}	
});


// test: $ node process-2.js one two=three four
/*process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});*/


