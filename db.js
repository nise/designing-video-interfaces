


/*

**/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//
var Messages = new Schema({
	id: Number,
	type: String,  // pattern, pattern-section or portal, general
	context: String, // e.g. name of the related pattern, portal or page
	author: { type: String, trim: true },
	contact: { type: String, trim: true },
	message: { type: String, trim: true },
	reply_to: Number,
	updated_at: Date
});
mongoose.model('Messages', Messages);

// 
var Portals = new Schema({
	id: Number,
	name: { type: String, trim: true, text: true },
	description: { type: String, trim: true, text: true },
	category: String,
	provider: { type: String, trim: true, text: true },
	url: String,
	analysis: {
		accessible: Boolean,	 // was it possible to access the portal during the analysis?
		availability: String     // how was it possible to access the portals? 				:
	},
	usability: {
		accessible: Boolean,	 // can I use the portal?
		open_source: Boolean,   // can I use the source code?
		collaborative_work: Boolean,
		collaborative_work_desc: String,
		group_management: Boolean,
		group_management_desc: String

	},
	tags: Array,
	patterns: Array,
	//		screenshots : [{type: Schema.Types.ObjectId, ref: 'Images' }],
	//		comments		: [{type: Schema.Types.ObjectId, ref: 'Messages' }],
	updated_at: Date
});
mongoose.model('Portals', Portals);


// 
var Images = new Schema({
	url: String,
	filename: String,
	caption: { type: String, trim: true, text: true },
	caption_length: { type: Number },
	tags: Array, // patterns
	portal: { type: String, trim: true, text: true },
	file_modified_at: Date,
	file_created_at: Date,
	updated_at: Date
});
mongoose.model('Images', Images);

// 
var Patterns = new Schema({
	pattern_id: Number,
	name: { type: String, trim: true, text: true },
	alias: String,
	synopsis: { type: String, trim: true, text: true },
	confidence: { type: Number, min: 0, max: 3 },
	illustration: String,
	context: { type: String, trim: true, text: true },
	problem: { type: String, trim: true, text: true },
	forces: { type: String, trim: true, text: true },
	solution: { type: String, trim: true, text: true },
	consequences: { type: String, trim: true, text: true },
	rationale: { type: String, trim: true, text: true },
	diagram: String,
	example_description: { type: String, trim: true, text: true }, // additional
	evidence: [{
		rational: { type: String, trim: true, text: true },
		example: { type: String, trim: true, text: true }
	}],
	literature: { type: String, trim: true, text: true },
	implementation: { type: String, trim: true, text: true },
	related: String,
	related_patterns: [{
		type: { type: String, enum: ['is-a', 'is-contained-by', 'contains'] },
		pattern_id: Number,
		pattern_collection: String,
		label: { type: String, trim: true },
		description: { type: String, trim: true }
	}],
	management: {
		author: String,
		credits: String,
		editor_comment: String,
		tags: Array, // e.g. assessment-pattern, general-video, micro, macro, ...
		status: { 		 // additional
			type: String,
			enum: ['proto-pattern', 'pattern', 'workshoped-pattern']
		},
		creation_date: Date,
		last_modified: Date,
		revision_number: Number
	}
});
mongoose.model('Patterns', Patterns);

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
	updated_at: Date
});
mongoose.model('Users', Users);


