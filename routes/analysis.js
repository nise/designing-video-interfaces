/*



*/


var 
	mongoose = require( 'mongoose' ),
	Portals  = mongoose.model( 'Portals' ),
	fs = require('node-fs'),
	csv = require('csv'),
	structs = require('./analysisStructs')
	;


/***************************************/
// ANALYSIS



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
				var index = structs.pattern_names.indexOf( docs[i].patterns[p] );
				if( index > -1 ){
					m[docs[i].name][index]=1;
				}
			}
		}
		var 	
			csv = 'portal,' + structs.pattern_names.toString(),
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
		var tsv = csv.replace(/,/g,'\t');
		write2file('patterns-portal-matrix.tsv', tsv);
	});
}




/*
	xxx
 **/
exports.usage = function(req,res){
	// determine usage of each pattern
	
	// get patterns for each portal and calc its number and cumulative usage
	
	
	
	// plot 
}  



/**************************************************************/
/* INTERRATER COMPARISON */
/*
Render a blanc matrix for interrater comparison on how two coderes rated a subset of portals
status: finished
**/
exports.kappe_blanc_matrix = function(req, res) {
	Portals.find().sort( 'id' ).lean().exec(function (err, docs) {
		var val = 0;
		// check wether there are more the two urls defined in the url field
		for(var i = 0; i < docs.length; i++){
			if( selectedPortalsSubset.indexOf(docs[i].name) != -1){ 
				for(var p = 0; p < docs[i].patterns.length; p++){
					if(selectedPortalsSubset.indexOf(docs[i].name) != -1 && docs[i].patterns[p] != ""){ 
						val = 1;	
					}else{
						val = 0;
					}
					if(pattern_arr[docs[i].patterns[p]] !== undefined){
						pattern_arr[docs[i].patterns[p]][Number(selectedPortalsSubset.indexOf(docs[i].name))]	= val;	
					}
				}
			}	
		}
		pattern_arr = stretch(pattern_arr);
		pattern_arr = transpose(pattern_arr);
		// print
		var
			ii = 0; 
			out = ','+ stretch(pattern_names).toString() + '\n';
		for(var i in pattern_arr){ 
			if(pattern_arr.hasOwnProperty(i)){
				out += selectedPortalsSubset[ii] +','+pattern_arr[i].toString() + '\n'; 
				ii++;
			}
		}
		//console.log(out);
		write2file('pattern-interrater_blanc.csv', out,'/home/abb/Documents/proj_001_doc/work/tables/');
	});
}



/*
information: https://en.wikipedia.org/wiki/Cohen%27s_kappa
status: finished
outou: latex table show the difference between two raters
 **/
exports.kappa = function(req,res){
	fs.readFile('/home/abb/Documents/proj_001_doc/work/tables/pattern-interrater_as.csv', function read(err, data) {
		if(err){
			console.log(err);
		}
		csv().from.string(data, {comment: '#'} )
			.to.array( function(data){
				var tmp=[];
				
				
				var kappa_solve = function(m, field){
					var 
						debug = false,
						korr = 0,
						po = 0,
						pe = 0,
						kappa = 0,
						sum = ( m[0][0] + m[0][1] + m[1][0] + m[1][1] ) + Math.abs(korr)
						;
					po = ( m[0][0] + m[1][1] + korr ) / sum;
					pe = ( m[0][0] + m[0][1] + Math.abs(korr) ) / sum; 
					pe = pe * ( ( m[1][0] + m[1][1] ) / sum );
					kappa = ( po - pe ) / ( 1 - pe );
					
					if(debug){
						console.log('compared points: '+ sum )
						console.log('po: '+po);
						console.log('pe: '+pe);
						console.log('KAPPA_'+field+': '+kappa);
						console.log('--------')
					}
					return kappa.toFixed(2);	
				}		
				
				//
				calc_kappa = function(a, b, field){
					var diff = 0, m = [], diff='';
					m[0]=[]; m[1]=[];	
					m[0][0]=0;m[1][0]=0;m[1][1]=0;m[0][1]=0;
						diff+='\\textsc{'+field+'}&';
						for(var j = 1; j < a.length; j++){
							if( a[j] === b[j] && a[j] === '1'){
								m[0][0]++; // aggreement positiv
								diff+= "\\csb &";
							}else if( a[j] === b[j] && a[j] === '0'){
								m[1][1]++; // agreement negative
								diff+= '\\csw &';
							}else if( a[j] === '0'){
								m[1][0]++; // dissagreement negative
								diff+= '-- &';
							}else{
								m[0][1]++; // disagreement positive
								diff+= '+ &';
							}
						}
						diff+= kappa_solve(m) +'\n';
						tmp.push( kappa_solve(m) );
						return diff;
						console.log(field, kappa_solve(m));
				}
				
				// calc kappa for patterns
				var a=[], b=[], tex='';
				for(var i = 1; i < data.length; i=i+1){  
					for(var j = 1; j < data[i].length; j=j+2){ 
						a.push(data[i][j]);
						b.push(data[i][j+1]);
					}
					calc_kappa( a, b, data[i][0]);
					a=[];b=[];
				} 
				var portal_kappas = tmp
				tmp = [];
				
				// calc kappa for portals
				var transp_data = transpose(data);
				for(var i = 1; i < transp_data.length; i=i+2){  
					tex += calc_kappa( transp_data[i], transp_data[i+1], transp_data[i][0]);
				}
				
				var paff = [];   
				piff = tex.split('\n'); 
				for(var i = 0;i<piff.length;i=i+1){
					paff[i] = piff[i] + '\\\\';
					
				}
				
				paff.push('\\hline');
				paff.push( '$\\kappa$ & \\rotatebox{90}{'+portal_kappas.toString().replace(/,/g,'~} &\\rotatebox{90}{')+'}\\\\' );
				paff.push('\\hline');
				paff = String(paff.toString().replace(/,/g,'\n')).replace(/\./g,',')
				console.log( paff );
				
				write2file('pattern-interrater_diff.tex', paff, '/home/abb/Documents/proj_001_doc/work/tables/');
				
			});
	});		
} 





/******************************************************************************/
/* LaTeX-Lists */


var patternGroupStats = function(patterns){
	var stat = { "Grundfunktionen":0, "Zugang zu zeitbasierter Information": 0, "Kontribution":0, "Strukturierung":0, "Selbstorganisation":0, "Layout":0};
	var stat2 = {};
	for(var i=0; i < patterns.length; i++){
		stat[ structs.pattern_dim[ patterns[i] ] ]++;
	}

	var 
		s = [4,14,8,10,6,7],
		j =0,
		keys = Object.keys(stat);
		; 
	for(var i in stat){
		if(stat.hasOwnProperty(i)){
			stat2[ String(keys[j]).toLowerCase().replace(/\ /g,'-') ] = stat[i]/s[j]; 
			j++;
		}
	}
	return stat2;
}

/*
Render all portals as LaTeX and write it to file
- status: finished
**/
exports.renderPortalDataLatex = function(req, res) {
	Portals.find().sort( 'name' ).lean().exec(function (err, docs) {
		var 
			out_latex = '',
			out_fn_rate = '',
			out_patterns = []
			;
		// check wether there are more the two urls defined in the url field
		for(var i = 0; i < docs.length; i++){
			var fn_rate = docs[i].patterns.length / 50;
			out_latex += "\\item \\textbf{"+docs[i].name.toString().replace(/&/g,'\\&')+"}\\\\\nProvider: "+docs[i].provider.toString().replace(/&/g,'\\&')+"\\\\\nURL: \\href{"+docs[i].url+"}{"+docs[i].url.toString().replace(/\_/g,'\\_')+"} (abgerufen am 15.01.2016)\\\\\nGruppierung: "+docs[i].tags.toString().replace(/,/g,', ')+"\\\\\nPatterns: "+docs[i].patterns.toString().replace(/,/g,', ')+"\\\\\nFunktionalitätsrate: "+fn_rate +'\n';	
			
			out_fn_rate += docs[i].name + ',' + fn_rate + '\n';
			
			var stats = patternGroupStats( docs[i].patterns );
			var portal = { name: docs[i].name, stats: stats };
			for(var j=0; j < docs[i].patterns.length; j++){
				portal[ docs[i].patterns[j] ] = true;
			}
			out_patterns.push( portal );
		}
		// write function rate of each pattern to file
		// console.log(out_fn_rate)
		
		// write 
		console.log(out_patterns)
			// get headers
			var columns = []
			for(var i in structs.pattern_engagement_taxonomie){
				if( structs.pattern_engagement_taxonomie.hasOwnProperty(i) ){
					columns.push({head: i, cl: structs.pattern_engagement_taxonomie[i].toLowerCase().replace(/\ /g,'-'), html: i })
				}	
			}
			console.log(out_patterns)
		res.render('analysis_portal-pattern-table', { data: out_patterns, columns: columns });	
		
		// write list of all portals as LaTeX
		//console.log(out_latex);
		//write2file('anhang_verzeichnis_videosysteme.tex', out_latex, '/home/abb/Documents/proj_001_doc/work/chapter/');
	});
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
		obj = { tags: structs.portal_groups[ group ] };
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
					if(err){ return; }  
					var portals_per_pattern = '', absolute = [], sum_abs_frequency = 0, all = [];
					
					for(k in data){
						// typeof data[k].count === 'number' && 
						if( data.hasOwnProperty(k)	&& data[k]._id !== ''){
							//console.log('__'+structs.pattern_dim[data[k]._id]+'__')
							if( structs.pattern_dim[data[k]._id] === undefined){
								console.log('####'+data[k]._id+'___'+k)
							}
							if( structs.pattern_dim[data[k]._id] in absolute === false){ 
								absolute[ structs.pattern_dim[data[k]._id] ] = { 
									num_patterns:1, 
									abs_frequency: Number(data[k].count), 
									rel_frequency: 0, 
									values : []
								};
							}else{
								absolute[ structs.pattern_dim[data[k]._id]].num_patterns++;
								absolute[ structs.pattern_dim[data[k]._id]].abs_frequency += Number(data[k].count);
							}
							
							all.push( Number(data[k].count) );
							absolute[ structs.pattern_dim[data[k]._id]].values.push( Number(data[k].count) ); 
							sum_abs_frequency += Number(data[k].count);
						
							//console.log(data[k].count,data[k]._id);
							portals_per_pattern += data[k].count+',';
							percent = ((data[k].count / 121)*100).toFixed(2).toString().replace('.',',');
							var fill = data[k].count < 10 ? '~' : '';
							// print out latex code
							color = structs.micro_pattern_names.indexOf(  data[k]._id ) !== -1 ? 'light-gray' : 'dark-gray'
							console.log(''+ ( structs.dimensions.indexOf( structs.pattern_dim[ data[k]._id ] ) +1 ) +' & \\textsc{'+data[k]._id +'} & ' + data[k].count + ' & \\crule['+ color +']{' 	+ data[k].count + 'mm}{2mm}~ & '+percent+'\\,\\% \\\\');
							
						}// end else
					}// end for	
					
					
					// write output
							var out = "", sum_pattern = 0, sum_abs = 0;
							var groupp = structs.portal_groups[ group ] == undefined ? '' : 'in der Gruppe ' + structs.portal_groups[ group ].replace('Video ','');
							out += "{ } & \\multicolumn{5}{c}{Kategorien "+groupp+"} \\\\\\cline{2-6}\n";
							out += "& {Anzahl} & {abs. Häufigkeit} & rel. Häufigkeit/\\% & \\textit{ M} & \\textit{ SD}\\\\\\hline\n"

							for(var a in absolute){
								
								if(absolute.hasOwnProperty(a) ){	
									absolute[a].rel_frequency = ( ( absolute[a].abs_frequency / sum_abs_frequency ) * 100 ).toFixed(2); //console.log(a)
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
					
					//console.log(data);
					//console.log(out);
					write2file('pattern-ming-'+String(structs.portal_groups[ group ]).toLowerCase().replace(/\ /g,'-')+'.tex', out, '/home/abb/Documents/proj_001_doc/work/tables/');
					
					//console.log('histogramm portals per patter: '+portals_per_pattern);
					
				});
	//}// end for
};











/***********************************************************/
/* COOCCURENCES */

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
			c= structs.portal_groups;
					
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
			if(err){ console.log(err); }
			// collect array with all patterns
			var 
				c = [],
				r = [],
				patterns_csv = ''
				; 
			for(var i = 0; i < docs.length; i++){
				var patterns = String(docs[i].patterns).split(',');
				//patterns_csv += '"'+String(docs[i].name).replace(/,/g,' ') +'",';
				patterns_csv += 'c('
				for(var j = 0; j < patterns.length; j++){
					patterns_csv += '"'+ patterns[j] +'",';
					if(c.indexOf(patterns[j]) === -1 && patterns[j] !== ''){
						c.push(patterns[j]);
					}	
				}
				patterns_csv = patterns_csv.slice(0, -1);
				patterns_csv += '),\n';
			}
			console.log(patterns_csv)
			// write patterns_csv to file
			write2file('portal_patterns.csv', patterns_csv);
			return;
			// writes nodes as csv and json ({"nodes":[{"name":"Myriel","group":1})
			var out = "Id, Label\n";
			var json = {}; json.nodes = []; json.links = [];
			for ( a in c){
				if( c.hasOwnProperty( a ) ){
					out += a+","+c[a]+"\n";
					json.nodes.push({ name: c[a], group: String( structs.pattern_dim[c[a]]).length });
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
var distance = require('ml-distance'); // see http://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf
var hamming = require( 'compute-hamming' );

exports.getPortalCoOccurences = function(req, res) {
	Portals.find().select('name patterns _id').lean().exec(function (err, portals) {		
				var 
					json = {},
					overlap = [],
					jaccard = [],
					str = ',',
					portal_names = '',
					out = []
					; 
				json.nodes = []; json.links = [];
				
				for(var i=0; i < portals.length; i++){
					json.nodes.push({ name: String(portals[i].name).replace("'",""), group: 1 });
					portal_names += '"'+String(portals[i].name).replace("'","") + '",'; 
					if(i==0){ for(k=0;k<portals.length;k++){ str += String(portals[k].name).replace("'","")+',';} str += '\n'; }
					for(var j=0; j < portals.length; j++){
						if(j==0){ str += String(portals[i].name).replace("'","")+','; }
						if(portals[i]._id !== portals[j]._id){
							// prepare pattern vector
							vi = getPatternVector(portals[i].patterns, structs.micro_pattern_names); // structs.macro_pattern_names
							vj = getPatternVector(portals[j].patterns, structs.micro_pattern_names);
							//euclidean_dist = distance([0,0,1,1,1], [1,0,0,0,0])
							//console.log(euclidean_dist)
							// prepare some subset/sets
							var intersection = portals[i].patterns.filter(function(n) {
									return portals[j].patterns.indexOf(n) != -1
							});
							var union = portals[i].patterns.concat(portals[j].patterns.filter(function (item) {
									return portals[i].patterns.indexOf(item) < 0;
							})); 
							// remove duplicates from union
							union = uniq(union);
							// construct matrix
							if( overlap[i] === undefined  ){
								overlap[i] = {}
							}
							if(overlap[i][j] === undefined ){
								overlap[i][j] = 0;
							}
							overlap[i][j] += intersection.length; 
							// Jaccard index
							if( jaccard[i] === undefined  ){
								jaccard[i] = []
							} 
							//jaccard[i][j] = intersection.length / union.length;
							jaccard[i][j] = hamming(vi, vj)*2;
							
							//str += (intersection.length / union.length).toFixed(4) +','; // jaccard
							//str += intersection.length +','; // intersection
							str += ( hamming(vi, vj) ) +','; // hamming distance
						}	
					}
					str += '\n';
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
				//console.log(str);
				write2file('portals-pattern-co-occurance.json', JSON.stringify(json));
				write2file('portals-pattern-co-occurance.csv', str);
				//console.log(portal_names)
				
				//Find clusters: It works by weighting each similarity using the distance of the similarity cell to the diagonal. The algorithm tries to minimize the sum of the weighted similarities in the similarity matrix by reordering the pre-computed clusters in a hierarchical clustering such as a dendrogram.
				
	});// end exec		
}






/*****************************************/
// UTILS



/*
 * 
 **/
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};



/*
 * Util: Returns all possible combinations of array elements
 * status: finished
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
 * Util: duplicates each column of an given array
 * status: finished
 */
function stretch(arr){
	var res = [];
	if( typeof arr[0] !== 'array'){
		for(var i in arr){ 
			if(arr.hasOwnProperty(i)){
				res.push(arr[i]);
				res.push(arr[i]);
			}
		}	
	}else{
		for(var i in arr){ 
			if(arr.hasOwnProperty(i)){
				res[i] = [];
				for(var j in arr[i]){ 
					if(arr[i].hasOwnProperty(j)){
						res[i].push(arr[i][j]);
						res[i].push(arr[i][j]);
					}
				}	
			}
		}
	}			
	return res;
}


/*
 * Util: remove duplicate entries in an array
 * status: finished
 **/
function uniq(a) {
  return a.sort().filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  })
}


/*
 * Util: Maps a given list of patterns of a portal to binary vector of equal length (n=50). Occurrances of pattern are represented by the value 1, a not occurring pattern results in a 0 in the corresponding vector dimension.
 * status: finished
 */
function getPatternVector(arr, base){
	if( base == undefined ){
		base = pattern_names
	}
	var pv = [];
	for(var i = 0; i < base.length; i++){
		if( arr.indexOf( base[i] ) === -1 ){
			pv[i] = 0;
		}else{
			pv[i] = 1;
		}	
	}
	return pv;
}


/*
 * Util: Hamming Distance for two vectors of equal size
 * status: finished and tested
 */
function hammingDistance(vi, vj){
	var di = 0;
	for(var v=0; v < vi.length;v++){
		if(vi[v] !== vj[v]){ di++; }
	}
	return di;	
} 



/*
 * Util: Transposes a matrix
 * status: finished
 */	
function transpose(a) {
  return Object.keys(a[0]).map(
      function (c) { return a.map(function (r) { return r[c]; }); }
      );
}


/*
 * Util: Writes file to disk
 * status: finished and tested
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

