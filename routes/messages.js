




var 
	mongoose = require( 'mongoose' ),
	Messages  = mongoose.model( 'Messages' )
	;






//
exports.create = function ( req, res ){ console.log(req.body)
  new Messages({
		type				: req.body.type,  // pattern, pattern-section or portal, general
		context			: req.body.context,
		author			: req.body.author,
		contact			: req.body.contact,
 		message			: req.body.message,
 		reply_to		: '',
 		updated_at 	: Date.now()	
  }).save( function( err, msg ){
    res.end();
  });
};



/****************************************
REST API CALL
**/

/*
REST call for all messages in JSON format
**/
exports.getJSON = function(req, res) {
	Messages.find().sort( 'update_at' ).lean().exec(function (err, docs) {
		res.jsonp(docs);
	});
};

/*
REST call for all messages by type in JSON format
**/
exports.getJSONbyType = function(req, res) {
	Messages.find({ type: req.params.type })
		.sort( 'update_at' )
		.lean()
		.exec(function (err, docs) {
			res.jsonp(docs);
		}
	);
};


/*
 * 
 **/
exports.getJSONbyPortal = function ( req, res ){
  Messages
  	.find({ type:'portal', context: req.params.portal.replace(/_/g, ' ') })
  	.sort('updated_at')
		.exec( function ( err, messages ){ 
			res.jsonp(messages);
		});
};

/*
 * 
 **/
exports.getJSONbyPattern = function ( req, res ){
  Messages
  	.find({ type:'pattern', context: req.params.pattern.replace(/_/g, ' ') })
  	.sort('updated_at')
		.exec( function ( err, messages ){ 
			res.jsonp(messages);
		});
};


/*
REST call
**/
exports.getJSONbyID = function(req, res) {
	Messages.findById( req.params.id, function ( err, doc ){
		res.jsonp(doc);
	});
};
