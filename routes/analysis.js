/*

Render D3 serverside

*/


var 
	mongoose = require( 'mongoose' ),
	Portals  = mongoose.model( 'Portals' ),
	fs = require('node-fs'),
	csv = require('csv')
	;


/***************************************/
// ANALYSIS

var pattern_dim = {
	"Basic Controls" 						: "Grundfunktionen",
	"Appropriate Delivery" 			: "Grundfunktionen",
	"Loading Indicator" 				: "Grundfunktionen",
	"Shortcut Commands" 				: "Grundfunktionen",
	"Search" 										: "Zugang zu zeitbasierter Information",
	"Table of Content" 					: "Zugang zu zeitbasierter Information",
	"Temporal Tags" 						: "Zugang zu zeitbasierter Information",
	"Temporal Bookmarks" 				: "Zugang zu zeitbasierter Information",
	"Playback Speed" 						: "Zugang zu zeitbasierter Information",
	"Playback Direction" 				: "Zugang zu zeitbasierter Information",
	"Zoom" 											: "Zugang zu zeitbasierter Information",
	"Visual Summary" 						: "Zugang zu zeitbasierter Information",
	"Annotated Timeline" 				: "Zugang zu zeitbasierter Information",
	"Transcript" 								: "Zugang zu zeitbasierter Information",
	"Closed Captions" 					: "Zugang zu zeitbasierter Information",
	"Skip Back" 								: "Zugang zu zeitbasierter Information",
	"Journaled Navigation" 			: "Zugang zu zeitbasierter Information",
	"Loop" 											: "Zugang zu zeitbasierter Information",
	"Add Video" 								: "Kontribution",
	"Annotations" 							: "Kontribution",
	"Comments" 									: "Kontribution",
	"Inline Drawing" 						: "Kontribution",
	"Polls" 										: "Kontribution",
	"Direct Authoring" 					: "Kontribution",
	"Remix" 										: "Kontribution",
	"Video Manipulation" 				: "Kontribution", 
	"Multi-Timeline Editing" 		: "Kontribution",
	"Video Manager" 						: "Strukturierung",
//	"Pyramid"										: "Strukturierung",
	"Sequential Media" 					: "Strukturierung",
	"Related Videos" 						: "Strukturierung",
	"Hyperlinks" 								: "Strukturierung",
	"Branching Videos" 					: "Strukturierung",
	"Detail on Demand" 					: "Strukturierung",
	"Media Fragments" 					: "Strukturierung",
	"Classified Marks" 					: "Strukturierung",
	"User Ratings" 							: "Strukturierung",
	"Viewing History" 					: "Selbstorganisation",
	"Playlist" 									: "Selbstorganisation",
	"Follow Revisions" 					: "Selbstorganisation",
	"User Notes"							  : "Selbstorganisation",
	"Assessment" 								: "Selbstorganisation",
	"Video Clip Quest" 					: "Selbstorganisation",
	"User Traces" 							: "Selbstorganisation",
	"Full Screen" 							: "Layout",
	"Simultaneous Media" 				: "Layout",
	"Synchronized Map" 					: "Layout",
	"Overlays" 									: "Layout",
	"Visual Highlighting" 			: "Layout",
	"Object Tracking" 					: "Layout",
	"Multi-Angle Video"					: "Layout",
	//"Alternative Views" 				: "null"
};

var pattern_names = [
	"Basic Controls", 
	"Appropriate Delivery",
	"Loading Indicator",
	"Shortcut Commands",
	"Search",
	"Table of Content",
	"Temporal Tags",
	"Temporal Bookmarks",
	"Playback Speed",
	"Playback Direction",
	"Zoom" 										,
	"Visual Summary" 					,
	"Annotated Timeline" 			,
	"Transcript" 							,
	"Closed Captions" 				,
	"Skip Back" 							,
	"Journaled Navigation" 		,
	"Loop" 										,
	"Add Video" 							,
	"Annotations" 						,
	"Comments" 								,
	"Inline Drawing" 					,
	"Polls" 									,
	"Direct Authoring" 				,
	"Remix" 									,
	"Video Manipulation" 			, 
	"Multi-Timeline Editing" 	,
	"Video Manager" 					,
//	"Pyramid"									,
	"Sequential Media" 				,
	"Related Videos" 					,
	"Hyperlinks" 							,
	"Branching Videos" 				,
	"Detail on Demand" 				,
	"Media Fragments" 				,
	"Classified Marks" 				,
	"User Ratings" 						,
	"Viewing History" 				,
	"Playlist" 								,
	"Follow Revisions" 				,
	"User Notes"							,
	"Assessment" 							,
	"Video Clip Quest" 				,
	"User Traces" 						,
	"Full Screen" 						,
	"Simultaneous Media" 			,
	"Synchronized Map" 				,
	"Overlays" 								,
	"Visual Highlighting" 		,
	"Object Tracking" 				,
	"Multi-Angle Video"				,
	//"Alternative Views" 			
];


portal_groups = [ 
						'Video Learning Environment',
						'Video Portal',
						'Video Authoring Environment',
						'Annotation Tool',
						'Research Prototype',
						'Interactive Film',
						'Search Engine',
						'Player',
						'Video Framework',
						'Open Source',
						'Desktop Environment',
						'Online Environment',
						'Misc'
	//					'xxx' 
];


exports.checkConsitency = function(req, res) {
	
	Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
		var 
			p_names = pattern_names;
			;
		console.log('');
		console.log('####### START CONSITENCY CHECK ########');	
		
		for(var i = 0; i < docs.length; i++){
			// check blanc patterns
			if( String(docs[i].patterns).split(',').indexOf('') !== -1){
				console.log('Portal includes a blanc pattern / has empty pattern name: '+docs[i].name);
			}
			// too many URLs annotated
			if((docs[i].url.match(/http/g) || []).length > 1){
				console.log('Portals with more than one URL: '+docs[i].name);
			}	
			// look for patterns that have not been mentioned/coded in any portal
			for(var p=0;p<docs[i].patterns.length;p++){
				var index = p_names.indexOf( docs[i].patterns[p] );
				if( index !== -1 ){
					p_names.splice(index, 1);
				}
			}
			
		}	
		console.log('Patterns that have not been mentioned: '+ p_names.toString() )
		console.log('---------------------------');
	});
}			



/*
Returns an array containing the number of patters for each portal
This can be used to plot a histogram
status. finisched
**/
exports.getPatternsPerPortals = function(req, res) {
	Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
		var 
			count_patterns_per_portal = '',
			m = {},
			mm = {}
			;
		for(var i = 0; i < docs.length; i++){
			count_patterns_per_portal += (String(docs[i].patterns).split(',').length+1)+',';
			//console.log(String(docs[i].patterns).split(',').length+1, docs[i].name);
			if( String(docs[i].patterns).split(',').indexOf('') !== -1){
				console.log('Portal includes blanc pattern: '+docs[i].name);
			}
			// pattern-portal-matrix
			m[docs[i].name]=[]; 
			// init with 0
			for(var j=0; j<50; j++){ m[docs[i].name][j]=0; }
			mm[docs[i].name]=docs[i].patterns.toString();
			// iterate patterns
			for(var p=0; p<docs[i].patterns.length;p++){
				var index = pattern_names.indexOf( docs[i].patterns[p] );
				if( index > -1 ){
					m[docs[i].name][index]=1;
				}
			}
		}
		var 	
			csv = 'portal,'+pattern_names.toString(),
			csv2 = csv;
			;
		for(i in m){ if(m.hasOwnProperty(i)){
			csv += i+','+m[i].toString()+",\n";
		}}
		for(i in mm){ if(mm.hasOwnProperty(i)){
			csv2 += i+','+mm[i].toString()+",\n";
		}}
		//console.log(csv2);
		//console.log(count_patterns_per_portal);
		write2file('patterns-portal-matrix.csv', csv);
	});
}


/*
Returns the patterns that are missing in a certain category
status: unfinished
-- could be rendered as venn diagram
**/
exports.getMissingPatterns = function(req, res) {
	Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
		var category = [];
		// initialize array for each category to store patterns in it	
		for(var c in portal_groups){
			if(portal_groups.hasOwnProperty(c))
				category[ portal_groups[c] ] = [];
		}
		
		// collect patterns per category
		for(var i = 0; i < docs.length; i++){
			//traverse tags
			for(var tagg in docs[i].tags){
				var tag = docs[i].tags[tagg];
				if( docs[i].tags.hasOwnProperty(tagg)){
					//travers patterns
					for(var p in docs[i].patterns){
						if( docs[i].patterns.hasOwnProperty(p)){
							//console.log(docs[i].patterns[p],category[tag])
							if(category[tag] != undefined ){
								if( category[tag].indexOf( docs[i].patterns[p] ) == -1 && docs[i].patterns[p] != 'Basic Controls'){
									category[tag].push(docs[i].patterns[p]);
								}
							}
						}	
					}
				}	
			}	
		}
		// substract patterns per category from all patterns
		for(var cc in category){
			if(category.hasOwnProperty(cc)){
				//console.log(cc);
				//console.log(pattern_names.diff( category[cc] ));
			}	
		}
		// match categories with dimensions of analysis
		for(var cc in category){
			if(category.hasOwnProperty(cc)){
				if( dim.indexOf( category[cc] ) == -1){
					//dim[ category[cc] ] = { basic: 0, access:}	
				}
				//dim[ category[cc] ][ ];
			}	
		}
	});
};

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};




/*
 **/
exports.usage = function(req,res){
	// determine usage of each pattern
	
	// get patterns for each portal and calc its number and cumulative usage
	
	
	
	// plot 
}  


// define subset for interrater reliability
var selectedPortalsSubset = [
	"Amazonie",
	"HyperCafe",
	"Hyperfilm",
	"Khan Academy",
	"Lecture2Go",
	"Lecturio",
	"lernfunk.de",
	"MediaSite",
	"MIT Video",
	"PHP Melody",
	"Plumi",
	"Timesheets.js",
	"transLectures",
	"Udacity",
	"Video-Wiki",
	"VideoAnt",
	"VideoLectures.NET",
	"videoNot.es",
	"Vimeo",
	"Yendif Player",
	"YouTube",
	"YoVisto",
	"zaption",
	"Zeugen der Shoa"
];

var pattern_arr = {
	"Add Video" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Annotated Timeline" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Annotations" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Appropriate Delivery" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Assessment" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Basic Controls" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Branching Videos" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Classified Marks" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Closed Captions" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Comments" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Detail on Demand" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Direct Authoring" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Discussion Prompt" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Follow Revisions" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Full Screen" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Hyperlinks" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Inline Drawing" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Journaled Navigation" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Shortcut Commands" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Loading Indicator" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Loop" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Media Fragments" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Object Tracking" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Overlays" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Playback Speed" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Playlist" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Polls" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Related Videos" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Remix" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Search" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Sequential Media" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Simultaneous Media" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Skip Back" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Synchronized Map" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Table of Content" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Temporal Bookmarks" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Temporal Tags" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Transcript" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"User Notes" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"User Ratings" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"User Traces" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Video Manager" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Video Manipulation" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Viewing History" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Visual Highlighting" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Visual Summary" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
	"Zoom" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
//	"Video Clip Quest" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
//	"Pyramid" : ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
	}
;

/*
Render a matrix of the patterns that are in a selected list of portals
status: unfinished
**/
exports.test2 = function(req, res) {
	Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
	
		// check wether there are more the two urls defined in the url field
		for(var i = 0; i < docs.length; i++){
			if( selectedPortalsSubset.indexOf(docs[i].name) != -1){ 
				for(var p = 0; p < docs[i].patterns.length; p++){
					if(selectedPortalsSubset.indexOf(docs[i].name) != -1 && docs[i].patterns[p] != ""){ 
						/*console.log(
							docs[i].patterns[p],
							selectedPortalsSubset.indexOf(docs[i].name)
							,pattern_arr[docs[i].patterns[p]][docs[i].patterns[p]]
						);*/
						pattern_arr[docs[i].patterns[p]][Number(selectedPortalsSubset.indexOf(docs[i].name))]	= "\\csb";	
					}else{}	
				}
			}	
		}
		//console.log(pattern_arr);
		//
		var latex_out = "";
		for (var pp in pattern_arr){
			latex_out += ""+ pp +"&"+ pattern_arr[pp].toString().replace(/,/g, '&').replace(/'-'/g,'-') + " &   \\\\\n";
		}
		// print LaTeX Output
		console.log(latex_out);
	});
}




/*
unfinished:: https://en.wikipedia.org/wiki/Cohen%27s_kappa
status: faulty because it acumulates the kappa value for multiple applications
 **/
exports.kappa = function(req,res){
	fs.readFile(__dirname+'/../data/pattern-interrater3.csv', function read(err, data) {
		if(err){
			console.log(err);
		}
		csv().from.string(data, {comment: '#'} )
			.to.array( function(data){
				var 
					po = 0,
					pe = 0,
					kappa = 0,
					m = [],
					rr=[];
					;
				m[0]=[]; m[1]=[];	
				m[0][0]=0;m[1][0]=0;m[1][1]=0;m[0][1]=0; 
				for(var i = 1; i < data.length; i++){  
					rr= data[i][0].split(';'); 	
					for(var j = 1; j < rr.length; j=j+2){
						//
						
						// alernative
						if( rr[j] === rr[j+1] && rr[j] === '1'){
							m[0][0]++;
						}else if( rr[j] === rr[j+1] && rr[j] === '0'){
							m[1][1]++;
						}else if( rr[j] === '0'){
							m[1][0]++;
						}else{
							m[0][1]++;
						}
					}
				}
				var 
					korr = -30,
					sum = ( m[0][0] + m[0][1] + m[1][0] + m[1][1] ) + Math.abs(korr)
					;
				po = ( m[0][0] + m[1][1] + korr ) / sum;
				pe = ( m[0][0] + m[0][1] + Math.abs(korr) ) / sum; 
				pe = pe * ( ( m[1][0] + m[1][1] ) / sum );
				kappa = ( po - pe ) / ( 1 - pe );
				console.log('compared points: '+ sum )
				console.log('po: '+po);
				console.log('pe: '+pe);
				console.log('KAPPA: '+kappa);
			});
	});		
} 




/*
Render all portals as LaTeX and write it to file
- status: finished
**/
exports.renderPortalDataLatex = function(req, res) {
	Portals.find().sort( 'name' ).lean().exec(function (err, docs) {
		var out = '';
		// check wether there are more the two urls defined in the url field
		for(var i = 0; i < docs.length; i++){
			out += "\\item \\textbf{"+docs[i].name.toString().replace(/&/g,'\\&')+"}\\\\\nProvider: "+docs[i].provider.toString().replace(/&/g,'\\&')+"\\\\\nURL: \\href{"+docs[i].url+"}{"+docs[i].url.toString().replace(/\_/g,'\\_')+"} (abgerufen am 15.02.2015)\\\\\nGruppierung: "+docs[i].tags.toString().replace(/,/g,', ')+"\\\\\nPatterns: "+docs[i].patterns.toString().replace(/,/g,', ')+"\n";	
		}
		//console.log(out);
		// write
		write2file('anhang_verzeichnis_videosysteme.tex', out, '/home/abb/Documents/proj_001_doc/work/chapter/');
	});
}




/*
Returns a tsv of the number of connections between co-occuring tags over all portals
This can be randered in a heatmap
- status: finished
**/
exports.getTagCoOccurences = function(req, res) {
		Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
			// collect array with all tags
			var c = [];
			var r = [];
			for(var i = 0; i < docs.length; i++){
				var tags = String(docs[i].tags).split(',');
				
				for(var j = 0; j < tags.length; j++){
					if(c.indexOf(tags[j]) === -1)
					c.push(tags[j]);
				}
			}
			// rearrange c
			c= portal_groups;
					
			// add tag relations, xxx bug .. covers only sequence
			var pos = '';
			for(var i = 0; i < docs.length; i++){
				var tags = String(docs[i].tags).split(',');
				// permute tags
				permuted_tags = combine(tags,2);
				
				for(t in permuted_tags){
					if(permuted_tags[t].length == 2 ){
						tags = permuted_tags[t];
						// start with the greatest number
						if(c.indexOf(tags[0]) > c.indexOf(tags[1])){
							pos =  c.indexOf(tags[0]) +' , '+ c.indexOf(tags[1]);
						}else{
							pos =  c.indexOf(tags[1]) +' , '+ c.indexOf(tags[0]);
						}
						//if(c.indexOf(tags[1]) === -1){ console.log(tags[1])}
						// increase count
						if(pos in r === false){
							r[ pos ] = 1;
						}else{
							r[ pos ]++;
						}	 
					}	
				}	
				
			}
			// print
			console.log('### Co-occurence of tags (= portal categories)')
			console.log('from	to	degree');
			for ( a in r){
				var aa = a.split(' , ');
				console.log(aa[0]+"\t"+aa[1]+"\t"+r[a])
			}
			//console.log(r);
	});
}



/*
Returns a tsv of the number of connections between co-occuring patterns over all portals
This can be randered in a heatmap (=> d3) or network graph (=> gephi)
example: patterns-co-occurance
status: finished
**/
exports.getPatternCoOccurences = function(req, res) {
		Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
			// collect array with all patterns
			var c = [];
			var r = [];
			for(var i = 0; i < docs.length; i++){
				var patterns = String(docs[i].patterns).split(',');
				
				for(var j = 0; j < patterns.length; j++){
					if(c.indexOf(patterns[j]) === -1 && patterns[j] !== ''){
						c.push(patterns[j]);
					}	
				}
			}
			// writes nodes as csv and json ({"nodes":[{"name":"Myriel","group":1})
			var out = "Id, Label\n";
			var json = {}; json.nodes = []; json.links = [];
			for ( a in c){
				if( c.hasOwnProperty( a ) ){
					out += a+","+c[a]+"\n";
					json.nodes.push({ name: c[a], group: String(pattern_dim[c[a]]).length });
				}	
			}
			//console.log(json)
			write2file('patterns-co-occurence_nodes.csv', out);
					
			// add patterns relations, 
			var pos = '';
			for(var i = 0; i < docs.length; i++){
				var patterns = String(docs[i].patterns).split(',');
				// get all combinations of patterns
				permuted_patterns = combine(patterns,2);
				
				for(t in permuted_patterns){
					if( permuted_patterns.hasOwnProperty(t) && permuted_patterns[t].length === 2 ){
						patterns = permuted_patterns[t];
						if( c.indexOf(patterns[1]) !== -1 && c.indexOf(patterns[0]) !== -1){ 
							// start with the greatest number
							if(c.indexOf(patterns[0]) > c.indexOf(patterns[1])){
								pos =  c.indexOf(patterns[0]) +' , '+ c.indexOf(patterns[1]);
							}else{
								pos =  c.indexOf(patterns[1]) +' , '+ c.indexOf(patterns[0]);
							}
							//if(c.indexOf(patterns[1]) === -1){ console.log(patterns[1])}
							// increase count
							if(pos in r === false){
								r[ pos ] = 1;
							}else{
								r[ pos ]++;
							}	 
						}	
					}	
				}	
				
			}
			//console.log(r);
			// print, write
			console.log('### Co-occurence of patterns (= portal categories)')
			console.log('from	to	degree');
			var out = "Source,Target,Type,Id,Label,Weight\n";
			var i = 0;
			for ( a in r){
				if( r.hasOwnProperty( a )){
					var aa = a.split(' , ');
					out += aa[0]+","+aa[1]+",Undirected,"+i+",,"+r[a]+"\n";
					//"links":[{"source":1,"target":0,"value":1}
					json.links.push({ source:aa[0],target:aa[1],value:r[a]});
					i++;
				}	
			}
			//console.log(json);
			write2file('patterns-co-occurence_edges.tsv', out);
			
			write2file('patterns-co-occurance2.json', JSON.stringify(json));
			
	});
}




/*
Determines the similarity of portals regarding the number of common patterns or by its Jaccard Index.
@out: The result can be randered in a heatmap / adjacent matrix. For smal sets also as network graph in gephi
@status: finished
**/
exports.getPortalCoOccurences = function(req, res) {
	Portals.find().select('name patterns _id').lean().exec(function (err, portals) {		
				console.log(portals);
				console.log('-------------')
				var 
					json = {},
					overlap = [],
					jaccard = [],
					out = []
					; 
				json.nodes = []; json.links = [];
				
				for(var i=0; i < portals.length; i++){
					json.nodes.push({ name: String(portals[i].name).replace("'",""), group: 1 });
					for(var j=0; j < portals.length; j++){
						if(portals[i]._id !== portals[j]._id){
							var intersection = portals[i].patterns.filter(function(n) {
									return portals[j].patterns.indexOf(n) != -1
							});
							var union = portals[i].patterns.concat(portals[j].patterns.filter(function (item) {
									return portals[i].patterns.indexOf(item) < 0;
							}));
							if( overlap[i] === undefined  ){
								overlap[i] = {}
							}
							if(overlap[i][j] === undefined ){
								overlap[i][j] = 0;
							}
							overlap[i][j] += intersection.length; 
							// Jaccard index
							if( jaccard[i] === undefined  ){
								jaccard[i] = {}
							} 
							jaccard[i][j] = intersection.length / union.length
						}	
					}
				}
				// define wether to output the jaccard-index or the intersection of sets
				out = jaccard;
				//out = overlap
				for(var i in out){
					if( out.hasOwnProperty(i) ){
						for(var j in out[i]){
							if( out[i].hasOwnProperty(j) && out[i][j] > 0){
								json.links.push({ source: Number(i), target: Number(j), value:Number(out[i][j]) }); 
							}
						}
					}
					
				}	
				console.log(jaccard);
				write2file('portals-pattern-co-occurance.json', JSON.stringify(json));
				
				
				//json.links.push({ source:portals[i], target:portals[j], value:r[a]}); 
				/*
				var nodes = "Id, Label\n";
				var edges = "Source,Target,Type,Id,Label,Weight\n";
				//
				
				permuted_portals = [];//combine(data,2);
				var i = 0;
				for ( combi in permuted_portals){
					edges += permuted_portals[combi][0]+","+permuted_portals[combi][1]+",Undirected,"+i+",,"+1+"\n";
					console.log(permuted_portals[combi][0]+","+permuted_portals[combi][1]+",Undirected,"+i+",,"+1+"\n");
					i++;
				}	
					*/
				
				//console.log(nodes);
				//console.log(edges);
				// writes nodes
				//write2file('portals-pattern-connections_nodes.csv', nodes);
				//write edges
				//write2file('portals-pattern-connections_edges.tsv', edges);

	});// end exec		
}





/*
Returns the number of instances for each pattern and writes some latex table output to file
- status: buggy => does not show all categories
**/
exports.getInstancesOfPattern = function(group) {
	var gauss = require('gauss');
	var obj = {};
	if(group === undefined){
		obj = {};
	}else{
		obj = { tags: portal_groups[ group ] };
	}
	
	Portals.aggregate([
					{
							"$match" 	:	obj
					},
					{
						  "$unwind" :  "$patterns" 
					},
					{
						  "$group" : {
						      "_id" : "$patterns",
						      "count" : {
						          "$sum" : 1
						      }//,
						      //"name" : "$name" 
						  }
					},
					{
						  "$sort" : {
						      "count" : -1
						  }
					}
			]).exec(function(err, data){  
					var portals_per_pattern = '', absolute = [], sum_abs_frequency = 0, all = [];
					
					for(k in data){
						
						if( typeof data[k].count != 'number' && ! data.hasOwnProperty(k)	&& pattern_dim[data[k]._id] == undefined){
							//console.log(data[k]._id,data[k].count);
						}else{
							if( pattern_dim[data[k]._id] in absolute === false){
								absolute[pattern_dim[data[k]._id]] = { 
									num_patterns:1, 
									abs_frequency: Number(data[k].count), 
									rel_frequency: 0, 
									values : []
								};
							}else{
								absolute[pattern_dim[data[k]._id]].num_patterns++;
								absolute[pattern_dim[data[k]._id]].abs_frequency += Number(data[k].count);
							}
							all.push( Number(data[k].count) );
							absolute[pattern_dim[data[k]._id]].values.push( Number(data[k].count) ); 
							sum_abs_frequency += Number(data[k].count);
						
							//console.log(data[k].count,data[k]._id);
							portals_per_pattern += data[k].count+',';
							percent = ((data[k].count / 118)*100).toFixed(2);
							var fill = data[k].count < 10 ? '~' : '';
							console.log('\\textsc{'+data[k]._id +'} & ' + data[k].count + ' & \\crule[gray]{' 	+ data[k].count + 'mm}{2mm}~ & '+percent+'\\,\\% \\\\');
							
						}// end else
					}// end for	
					
					
					// write output
							var out = "", sum_pattern = 0, sum_abs = 0;
							var groupp = portal_groups[ group ] == undefined ? '' : 'in der Gruppe' +portal_groups[ group ];
							out += "{ } & \\multicolumn{5}{c}{Kategorien "+groupp+"} \\\\\\cline{2-6}\n";
							out += "& {Anzahl} & {abs. Häufigkeit} & rel. Häufigkeit/\\% & \\textit{ M} & \\textit{ SD}\\\\\\hline\n"

							for(var a in absolute){
								if(absolute.hasOwnProperty(a) && a != "undefined"){	
									absolute[a].rel_frequency = ( ( absolute[a].abs_frequency / sum_abs_frequency ) * 100 ).toFixed(2);
									var g = new gauss.Vector( absolute[a].values );
									absolute[a].mean = g.mean().toFixed(2);
									absolute[a].std = g.stdev().toFixed(2);
									out += a+' & '+absolute[a].num_patterns+' & '+absolute[a].abs_frequency+' & '+absolute[a].rel_frequency+' & '+absolute[a].mean+' & '+absolute[a].std+'\\\\\n';
									sum_pattern += absolute[a].num_patterns;
								}
								
							} //end for
							out += '\\hline\\\\';
							out += 'Gesamt & '+sum_pattern+' & '+sum_abs_frequency+' & 100 & '+ (new gauss.Vector(all).mean()).toFixed(2) +' & '+ new gauss.Vector(all).stdev().toFixed(2)+'\\\\\n';
							out += '\\hline\\\\\n';
					
					console.log(data);
					console.log(out);
					write2file('pattern-ming-'+String(portal_groups[ group ]).toLowerCase().replace(/\ /g,'-')+'.tex', out, '/home/abb/Documents/proj_001_doc/work/tables/');
					console.log(portals_per_pattern);
					
				});
	//}// end for
};





/*****************************************/
// UTILS

/*
Returns all possible combinations of array elements
- status: finished
**/
var combine = function(a, min, max) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    return all;
}



/*
Writes file to disk
- status: finished
**/
write2file = function(filename, dataset, new_path){
	var path = '/home/abb/Documents/proj_001_doc/work/img/data-viz/';
	if(new_path != undefined){
		path = new_path;
	}
	if(!filename || ! dataset){
		console.log('No data or file to write'); return;
	}
//	fs.writeFile(__dirname+'/results/data/'+filename, dataset, function(err){
	fs.writeFile(path+filename, dataset, function(err){
	 if(err) {
	      console.log(err);
	  } else {
	  	 console.log('Data generated: '+filename);
		}	
	});
}	
