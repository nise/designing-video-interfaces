

var
	mongoose = require('mongoose'),
	Patterns = mongoose.model('Patterns'),
	Images = mongoose.model('Images'),
	fs = require('node-fs'),
	path = require('path'),
	csv = require('csv')
	;

//
exports.maintain = function () {

	Patterns.findOne({ name: 'Skip ' }, function (err, pattern) {
		pattern.remove(function (err, patt) {
			res.redirect('/patterns/list');
		});
	});
	return;

	Patterns.find().exec(function (err, patterns) {
		Images.find().exec(function (err, img) {
			for (var i = 0; i < patterns.length; i++) {
				for (var j = 0; j < img.length; j++) {
					if (img[j].tags.indexOf(patterns[i].name) !== -1) {
						patterns[i].illustration = img[j].url;
						break;
					}

					//patterns[i].illustration = '/static/img/illustrations/' + patterns[i].name.replace(/\ /g, '-') + '.png'; 

					var t = getpp(patterns[i].name);
					if (t.context === undefined || t.problem === undefined || t.solution === undefined) {
						console.log(patterns[i].name);
					}

					if (t !== 0) {
						patterns[i].context = t.context;
						patterns[i].problem = t.problem;
						patterns[i].solution = t.solution;
						patterns[i].save();
					} else {
						console.log('_0_' + patterns[i].name);
					}
				}
			}
		});// end img		
	});// end pattern
}

var pp = require('../data/pattern-import.json');
getpp = function (name) {
	for (var i = 0; i < pp.length; i++) {
		if (pp[i].name === name) {
			return pp[i];
		}
	}
	return 0;
}

/*
Import Pattern data from LaTeX files
**/
exports.folderImport = function (req, res) {

	// flush database in order to reload the patterns later on
	//Patterns.remove({}, function(err) { console.log('collection of patterns removed') });

	// 
	var dir = './data/patterns';
	dir = '/home/abb/Documents/proj_001_doc/work/chapter/patterns/macro';
	var files = fs.readdirSync(dir);
	var name = '--';
	for (var i in files) {
		if (files.hasOwnProperty(i)) {
			name = dir + '/' + files[i];
			if (fs.statSync(name).isDirectory()) {
				//console.log('--found dir')
			} else if (files[i].slice(-1) === '~') {
				//console.log('--found tmp')
			} else {
				//console.log(files[i])
				fs.readFile(name, 'utf8', function (err, data) {
					if (err) {
						console.log(err);
					}
					error = false;

					// cleans inline comments
					var cl = function (str) {
						if (str == undefined) { return; }
						var arr = str.split(/\n/);
						for (var a = 0; a < arr.length; a++) {
							var matches = arr[a].match(/^(%)/gi);
							if (matches != null) {
								arr.splice(a, 1);
							}
							arr[a] = arr[a].split('%')[0].replace(/\t/gi, '');
						}
						return sc2links(arr.join(""));
					};
					/* handle: 
						citations, 
						href, 
						textit, 
						protect 
						footnotes in figures
						images in consequences ... detail on demand
						multiple images to one caption
					
						see: http://daringfireball.net/projects/markdown/syntax#link
				
					*/
					// handle textsc
					var sc2links = function (str) {
						return str
							.replace(/~/g, "")
							.replace(/\\item/g, "\n\n *  ")
							.replace(/\\end{itemize}/g, '\n\n')
							.replace(/\\begin{itemize}/g, '')
							.replace(/\\textsc\{(.*?)\}/g, "[$1](/patterns/view/$1)")
							.replace(/\\cite\{(.*?)\}/g, "[$1]")
							.replace(/\\citeN\{(.*?)\}/g, "[$1]")
							;
					};
					//
					var p = {};
					p.name = cl(data.split(/%%<name>%%%/g)[1]);
					p.name = p.name == undefined ? 'xx' : p.name;
					//p.alias = '';
					//p.synopsis = '';
					//p.confidence = '';
					//p.illustration = '';
					p.diagram = { image: cl(data.split(/%%<diagram-img>%%%/g)[1]), caption: cl(data.split(/%%<diagram-caption>%%%/g)[1]) };

					p.context = cl(data.split(/%%<context>%%%/g)[1]);
					p.problem = cl(data.split(/%%<problem>%%%/g)[1]);
					p.forces = cl(data.split(/%%<forces>%%%/g)[1]);
					p.solution = cl(data.split(/%%<solution>%%%/g)[1]);
					p.consequences = cl(data.split(/%%<consequences>%%%/g)[1]); // former consequences
					p.related_patterns = [];
					var related = data.split(/%%<related>%%%/g) != undefined ? cl(data.split(/%%<related>%%%/g)[1]) : '';
					if (related != undefined) {
						for (var i = 1; i < related.split(',').length; i++) {
							p.related_patterns.push(
								{
									type: 'is-a',//{ type: String, enum: [ 'is-a', 'is-contained-by', 'contains' ] }, 
									//patternID		: Schema.Types.Objectid, 
									//collection 	: String,
									label: related[i]
								}
							);
						}
					}

					//p.literature	=	'',
					//p.implementation = '',  
					// examples
					p.example_description = cl(data.split(/%%<example-text>%%%/g)[1]);
					p.evidence = [];
					var img = data.split(/%%<image>%%%/g);
					var caption = data.split(/%%<caption>%%%/g);
					if (img.length == caption.length) {
						for (var i = 1; i < img.length; i = i + 2) {
							p.evidence.push({
								example: img[i].replace("img/pattern-img/", "").replace(/\n/ig, '').replace(/\ /ig, '').replace(/%/g, ''),
								rational: cl(caption[i]).replace(/\n/ig, '')
							});
						}
					} else {
						console.log('## error_img/caption length @ ' + p.name);
					}
					// management
					p.management = {};
					p.management = {
						author: 'Niels Seidel',
						credits: '', // e.g. Shepherds
						editor_comment: cl(data.split(/%%<comment>%%%/g)[1]),
						status: 'pattern',
						creation_date: Date.now(),
						last_modified: Date.now(),
						revision_number: 1
					};


					// analysis for mathing forces
					//data.split(/%%<forces>%%%/g)[1]
					//.replace(/\\textsc\{(.*?)\}/g, "[$1](/patterns/$1)")

					// analyse missing fields
					for (var k in p) {
						if (p[k] == undefined) {
							console.warn('## error_Missing ' + k + ' in ' + p.name);
							//error = true;
						}
					}

					// store in database
					if (!error) {
						var pattern = new Patterns(p)
							.save(function (err, data, count) {
								console.log('saved pattern: ' + data.name + '/');
								//console.log(p.context);
							});
					}
				});// end fs
				//fs.close();
			}//end else
		}
	}//end for
};


exports.init = function (req, res) {
	/*	Patterns.ensureIndex(
			{ "$**": "text" },
				{ name: "TextIndex" }
		);*/
};

// Search
exports.searchText = function (req, res) {
	console.log(req.params.query)

	Patterns
		.find({ $text: { $search: 'video' } })
		.skip(20)
		.limit(10)
		.exec(function (err, res) {
			if (err) {
				console.log(err);
			} else {
				res.jsonp(results);
			}
		});

	/*  
	   .find({$text: {$search: "image"}}) // , {score: {$meta: "textScore"}}
//		.sort({score:{$meta:"textScore"}})
	   .exec(function ( err, results ){ 
		   if(err){
			   console.log(err);
		   }else{
			   res.jsonp( results );
		   }	
	   });
	   */
	/*Patterns
		.find( { $text: { $search: req.params.query } } )
		.exec(function ( err, results ){ 
			if(err){
				console.log(err);
			}else{
				res.jsonp( results );
			}	
		});
	*/
}

/*
Returns all patterns that are no proto-patterns and calls the rendering engin ejs. to display them.
**/
exports.list = function (req, res) {
	Patterns
		.find()//{ $or:[ { 'management.status' : 'pattern' }, { 'management.status' : 'workshoped-pattern' } ] } )
		.sort('name')
		.exec(function (err, patterns) {
			res.render('patterns', {
				items: patterns
			});
		});
};

/*
**/
exports.listProtopatterns = function (req, res) {
	Patterns
		.find({ 'management.status': 'proto-pattern' })
		.sort('name')
		.exec(function (err, patterns) {
			res.render('patterns', {
				items: patterns
			});
		});
};

/*
Returns the Pattern document to the requested pattern name and renders through ejs
**/
exports.listOne = function (req, res) {
	Patterns
		.find({ name: String(req.params.name).replace(/-/g, ' ') })
		.exec(function (err, patterns) {
			res.render('patterns-single', {
				items: patterns[0]
			});
		});
};


/*
 * Creates a new Pattern
 **/
exports.create = function (req, res) {
	var item = {
		name: String(req.params.name).replace(/-/g, ' '),
		related_patterns: [],
		management: { tags: [], revision_number: 0 }
	};
	var pattern = new Patterns(item)
		.save(function (err, data, count) {
			console.log('saved pattern: ' + data.name + '/');
			//res.render( '/patterns/edit/'+req.params.name );
			res.render('patterns-edit', {
				items: data
			});
		});
};

/*
 * Updates data of an existing Pattern
 **/
exports.update = function (req, res) {
	var data = req.body;
	data.updated_at = Date.now();

	Patterns
		.findOneAndUpdate({ '_id': req.params.id }, data, { returnNewDocument: true }, function (err, pattern) {
			if (err) {
				console.error(err);
				res.end();
			} else {
				console.log('/patterns/view/' + String(pattern.name).replace(/ /g, '-'))
				res.redirect('/patterns/view/' + String(pattern.name).replace(/ /g, '-'));
			}
		});
};

/*
**/
exports.edit = function (req, res) {
	Patterns
		.find({ name: String(req.params.name).replace(/-/g, ' ') })
		.exec(function (err, items) {
			if (err) {
				console.log(err);
				res.end();
			} else {
				res.render('patterns-edit', {
					items: items[0]
				});
			}
		});
};

exports.editID = function (req, res) {
	Patterns
		.findOne({ _id: String(req.params.id).replace(/-/g, ' ') })
		.exec(function (err, items) {
			if (err) {
				console.log(err);
				res.end();
			} else {
				res.render('patterns-edit', {
					items: items
				});
			}
		});
};


// remove pattern
exports.destroy = function (req, res) {
	console.log(req.params.id)
	Patterns.findById(req.params.id, function (err, pattern) {
		pattern.remove(function (err, patt) {
			res.redirect('/patterns/list');
		});
	});
};




/*
 * REST API CALL
 **/
exports.getJSON = function (req, res) {
	Patterns.find().sort('name').lean().exec(function (err, docs) {
		res.jsonp(docs);
	});
};


/*
 * 
 **/
exports.getJSONPatternNames = function (req, res) {
	Patterns
		.find({ name: String(req.params.name).replace(/-/g, ' ') })
		.exec(function (err, pattern) {
			if (err) {
				res.end();
			}
			res.jsonp(pattern);
		});
};	
