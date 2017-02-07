


/*

**/
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

//
var Messages = new Schema({
		id					: Number,
		type				: String,  // pattern, pattern-section or portal, general
		context			: String, // e.g. name of the related pattern, portal or page
		author			: { type: String, trim: true },
		contact			: { type: String, trim: true },
 		message			: { type: String, trim: true },
 		reply_to		: Number,
 		updated_at 	: Date	
}); 
mongoose.model( 'Messages', Messages );		
 
// 
var Portals = new Schema({
		id					: Number,
		name				: String,
		description : String,
		category		: String,
		provider		: String,
		url					: String,
		analysis		: {
			accessible	: Boolean,	 // was it possible to access the portal during the analysis?
			availability: String     // how was it possible to access the portals? 				:
		},
		usability		: {
			accessible	: Boolean,	 // can I use the portal?
			open_source	: Boolean,   // can I use the source code?
			collaborative_work : Boolean,
			collaborative_work_desc : String,
			group_management: Boolean,
			group_management_desc : String
			
		},
		tags				: Array,
		patterns		:	Array,
//		screenshots : [{type: Schema.Types.ObjectId, ref: 'Images' }],
//		comments		: [{type: Schema.Types.ObjectId, ref: 'Messages' }],
    updated_at 	: Date
});
mongoose.model( 'Portals', Portals ); 
 
 
// 
var Images = new Schema({
		url 							: String,
		filename					: String,
		caption						: String,
		tags							: Array, // patterns
		portal						: String,
		file_modified_at 	: Date,
		file_created_at 	: Date,
    updated_at 				: Date
});
mongoose.model( 'Images', Images );

// 
var Patterns = new Schema({
	pattern_id				: Number,
	name 							: { type: String, trim: true },
	alias 						: String,
	synopsis 					: String,		
	confidence 				: { type: Number, min:0, max:3 }, 
	illustration 			: String,
	context						: String,
	problem						: { type: String, trim: true },
	forces						: String, 
	solution					: { type: String, trim: true },
	consequences 			: String,
	rationale 				: String,
	diagram						: String,
	example_description : String, // additional
	evidence					: [{      
		rational 				: String,
		example						: { type: String, trim: true }
	}],		
	literature				: String,
	implementation 		: String, 
	related 					: String,  
	related_patterns	:	[{
		type							: { type: String, enum: [ 'is-a', 'is-contained-by', 'contains' ] }, 
		pattern_id				: Number, 
		pattern_collection 				: String, 
		label 						: { type: String, trim: true },
		description				: { type: String, trim: true }
	}],				
	management				: {
		author						: String,
		credits						: String,
		editor_comment		: String,
		tags							: Array, // e.g. assessment-pattern, general-video, micro, macro, ...
		status						: { 		 // additional
													type: String, 
													enum: [ 'proto-pattern', 'pattern', 'workshoped-pattern' ] 
												},
		creation_date 		: Date,
		last_modified 		: Date,
		revision_number		: Number		
	}	
});


//Patterns.index({ name: 1, problem: 1, solution: 1, forces: 1 });	

//Patterns.index({'name': 'text', 'problem': 'text'});
//Patterns.index({'$**': 'text'});

// add a text index to the tags array
 
 mongoose.model( 'Patterns', Patterns );
 
 
 


// 
var Users = new Schema({
	id: Number,
  username: String,
  password: String,
  email: String,
  name: String,
  firstname: String,
  hs: String,
  role: String,
  status: {
  	online: Boolean,
  	location: String,
  	updated_at: Date
  },
  icon: String,
  trace: Boolean,
  experimental: Boolean,
  groups: [Schema.Types.Mixed],
  updated_at 	: Date
});
mongoose.model( 'Users', Users );


