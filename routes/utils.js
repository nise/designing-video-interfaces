

/*
 * Helper: Adds a pattern to all portals
 **/
exports.addPattern = function (req, res) {

	Portals.find().exec(function (err, docs) {
		if (err) { res.end(); }
		//console.log(docs);
		for (var i = 0; i < docs.length; i++) {
			var portal = docs[i];

			portal.patterns = (String(docs[i].patterns).replace(/,Basic Controls/g, '') + ",Basic Controls").split(',');
			/*
			portal.save( function ( err ){
		  	if(err){ console.log(err); }
		  	console.log('updated '+portal.name)
		  	//res.end(portal);
		  });
		  */
		}
	});
}



exports.checkConsitency = function (req, res) {

	Portals.find().sort('id').lean().exec(function (err, docs) {
		var
			p_names = pattern_names,
			ppp = ''
			;
		console.log('');
		console.log('####### START CONSITENCY CHECK ########');

		for (var i = 0; i < docs.length; i++) {
			// check blanc patterns
			if (String(docs[i].patterns).split(',').indexOf('') !== -1) {
				console.log('Portal includes a blanc pattern / has empty pattern name: ' + docs[i].name);
			}
			// too many URLs annotated
			if ((docs[i].url.match(/http/g) || []).length > 1) {
				console.log('Portals with more than one URL: ' + docs[i].name);
			}
			// look for patterns that have not been mentioned/coded in any portal
			for (var p = 0; p < docs[i].patterns.length; p++) {
				var index = p_names.indexOf(docs[i].patterns[p]);
				if (index !== -1) {
					p_names.splice(index, 1);
				}

			}
			// patterns per portal
			ppp += docs[i].patterns.length + ',';
			console.log(docs[i].patterns.length, docs[i].name)
		}
		console.log('Patterns that have not been mentioned: ' + p_names.toString())
		console.log('---------------------------');
		console.log('patterns per portal ' + ppp)
	});
}



/*
Returns the patterns that are missing in a certain category
status: finished
-- could be rendered as venn diagram
**/
exports.getMissingPatterns = function (req, res) {
	Portals.find().sort('id').lean().exec(function (err, docs) {
		// initialize array for each category to store patterns in it
		var category = [];
		for (var c in portal_groups) {
			if (portal_groups.hasOwnProperty(c))
				category[portal_groups[c]] = '';
		}

		// collect patterns per category
		for (var i = 0; i < docs.length; i++) {
			if (docs[i].tags.length === 0 || docs[i].tags[0] === '' || docs[i].tags[0] === ' ') {
				console.log('empty tag: ' + docs[i].name)
			}
			// travers categories
			for (var j = 0; j < docs[i].tags.length; j++) {
				if (portal_groups.indexOf(docs[i].tags[j]) !== -1) {
					category[docs[i].tags[j]] += docs[i].patterns.toString() + ',';
				} else {
					console.log('unknown category ' + docs[i].name)
				}
			}
		}

		// remove duplicates for each category
		for (var cc in category) {
			if (category.hasOwnProperty(cc)) {
				category[cc] = uniq(category[cc].split(','));
				console.log(cc + '__' + (50 - category[cc].length) + '__')
				console.log(cc + '__' + pattern_names.diff(category[cc]));
			}
		}
	});
};


Array.prototype.diff = function (a) {
	return this.filter(function (i) { return a.indexOf(i) < 0; });
};
