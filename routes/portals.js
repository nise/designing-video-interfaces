


exports.index = function (req, res) {
	res.render('portals', { title: 'Express Portals Example' });
};

//var utils    = require( '../utils' );
var
	mongoose = require('mongoose'),
	Portals = mongoose.model('Portals'),
	fs = require('node-fs'),
	csv = require('csv')
	;


/*
Import Portals data from csv
**/
exports.csvImport = function (req, res) {
	return;
	// load data
	fs.readFile(__dirname + '/../data/videoportals.csv', function read(err, data) {
		if (err) {
			console.log(err);
		}
		// get Video dataset in order to extract toc data
		var tags = [];
		// destroy dataset first
		Portals.remove({}, function (err) { console.log('collection removed') });
		csv().from.string(data, { comment: '#' })
			.to.array(function (data) {
				// define Portals for each line
				for (var i = 0; i < data.length; i++) {
					tags = [];

					if (data[i][10] != false) {
						tags.push("Video Learning Environment");
					}
					if (data[i][11] != false) {
						tags.push("Video Portal");
					}
					if (data[i][12] != false) {
						tags.push("Video Authoring Environment");
					}
					if (data[i][13] != false) {
						tags.push("Video Framework");
					}
					if (data[i][14] != false) {
						tags.push("Interactive Film");
					}
					if (data[i][15] != false) {
						tags.push("Online Environment");
					}
					if (data[i][16] != false) {
						tags.push("Desktop Environment");
					}
					if (data[i][17] != false) {
						tags.push("Research Prototype");
					}
					if (data[i][18] != false) {
						tags.push("Annotation Tool");
					}
					if (data[i][19] != false) {
						tags.push("Search Engine");
					}
					if (data[i][20] != false) {
						tags.push("Misc");
					}
					if (data[i][7] != false) {
						tags.push("Open Source");
					}
					new Portals({
						id: data[i][0],
						name: data[i][1],
						description: data[i][2],
						category: data[i][3],
						provider: data[i][4],
						url: data[i][5],
						accessible: data[i][6],  // xxx update necessary
						availability: data[i][9], // xxx update necessary
						tags: tags,
						patterns: String(data[i][8]).split(', '),

						updated_at: Date.now()
					}).save(function (err, todo, count) {
						//res.redirect( '/portals' );
					});
				}
			});// end array()	
		console.log('Imported videoportals.csv');
		console.log('......................')
	});// end fs				
};


/*
MAINTANANCE
*/

exports.maintain = function (req, res) {
	res.end();// xxx
	var up = require('../data/2016_08_25_backup_portals.json');
	aop = function (name) {
		for (var i = 0; i < up.length; i++) {
			if (up[i].name === name) {
				return up[i].availability;
			}
		}
	}
	Portals.find().exec(function (err, p) {
		if (err) { console.error(err); }
		for (var i = 0; i < p.length; i++) {
			p[i].usability = {};
			p[i].usability.open_source = p[i].tags.indexOf("Open Source") === -1 ? false : true;
			p[i].analysis = {};
			p[i].analysis.availability = aop(p[i].name);
			//console.log(p[i].usability.open_source)
			p[i].save();
		}
	});
};


/*
REST API CALL
**/
exports.getJSON = function (req, res) {
	Portals.find().sort('id').lean().exec(function (err, portals) {
		if (err) { console.error(err); }
		res.jsonp(portals);
	});
	/*var stream = Portals.find().sort( 'id' ).lean().stream();
	
	stream
		.on('data', function (docs) {
			//res.type('application/json');
			res.jsonp(docs);
			res.end('done');
		})
		.on('error', function (err) {
			console.log('stream error @ portals.js')
		});
		*/
};


/*
 * View a single portal
 **/
exports.view = function (req, res) {
	Portals.findOne({ _id: req.params.id }).exec(function (err, portal) {
		if (err) {
			console.log(err);
		} else {
			res.render('portals-single', { items: portal });
		}
	});
};


/*
**/
exports.getJSONPortalsOfPattern = function (req, res) {
	Portals.find({ patterns: String(req.params.id).replace(/-/g, ' ') }).sort('name').lean().exec(function (err, docs) {
		res.type('application/json');
		res.jsonp(docs);
		res.end('done');
	});
};

/***/
exports.getPortalsOfPattern = function (req, res) {
	Portals.find({ patterns: String(req.params.id).replace(/-/g, ' ') }).sort('id').lean().exec(function (err, docs) {
		res.render('portals', {
			title: docs.length + ' video learning environments containing the component or pattern <a href="/patterns/view/' + req.params.id + '" >' + req.params.id.replace(/-/, ' ') + '</a>',
			items: docs
		});
	});
};

/***/
exports.getPortalsOfTag = function (req, res) {
	Portals.find({ tags: String(req.params.id).replace(/-/g, ' ') }).sort('id').lean().exec(function (err, docs) {
		res.render('portals', {
			title: docs.length + ' video learning environments categorizes as "' + req.params.id + '"',
			items: docs
		});
	});
};


exports.getJSONPatterns = function (req, res) { res.end('done'); } // xxx


/*
**/
exports.getJSONPortalNames = function (req, res) {
	Portals
		.find({})
		.select('name -_id')
		.sort('name')
		.exec(function (err, portals) {
			var arr = [];
			for (var p in portals) {
				if (portals.hasOwnProperty(p)) {
					arr.push(portals[p].name);
				}
			}
			res.jsonp(arr);
		});
};







//
exports.create = function (req, res) {
	new Portals({
		name: req.body.name,
		description: req.body.description,
		category: '-99',//req.body.category;
		provider: req.body.provider,
		url: req.body.url,
		accessible: req.body.accessible,
		open_source: false,
		availability: req.body.availability,
		tags: req.body.tags,
		patterns: String(req.body.patterns).split(','),
		updated_at: Date.now()
	}).save(function (err, todo, count) {
		res.redirect('/portals');
	});
};


// query db for all todo items
exports.list = function (req, res) {
	Portals
		.find()
		.sort('name')
		.exec(function (err, docs) {
			res.render('portals', {
				title: 'Video Learning Environments (' + docs.length + ')',
				items: docs
			});
		});
};

// new 
exports.new_one = function (req, res) {
	Portals
		.find()
		.sort('number')
		.exec(function (err, todos) {
			res.render('portals-new', {
				title: 'Express Portals Example',
				todos: todos
			});
		});
};

// remove todo item by its id
exports.destroy = function (req, res) {
	Portals.findById(req.params.id, function (err, todo) {
		todo.remove(function (err, todo) {
			res.redirect('/portals');
		});
	});
};


exports.edit = function (req, res) {
	Portals.findOne({ _id: String(req.params.id) }, function (err, item) {
		if (err) {
			console.log(err);
		}
		res.render('portals-edit', {
			item: item,
			current: req.params.id
		});
	});
};


// redirect to index when finish
exports.update = function (req, res) {
	Portals.findById(req.params.id, function (err, portal) {
		name: req.body.name,
			portal.name = req.body.name;
		portal.description = req.body.description;
		portal.provider = req.body.provider;
		portal.url = req.body.url;
		portal.accessible = req.body.accessible;
		portal.availability = req.body.availability;
		portal.tags = String(req.body.tags).split(',');
		portal.patterns = String(req.body.patterns).split(',');
		portal.updated_at = Date.now();
		portal.save(function (err, ix, count) {
			if (err) { console.log(err); }
			res.redirect('/portals');
		});
	});
};






