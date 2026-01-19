/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=8cd47cb817d1edc0498f)
 * Config saved to config.json and https://gist.github.com/8cd47cb817d1edc0498f
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.5",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.5",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.5",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.5",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.5",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);!function(a){function b(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function c(){var a=require("util");return"Markdown.mk_block( "+a.inspect(this.toString())+", "+a.inspect(this.trailing)+", "+a.inspect(this.lineNumber)+" )"}function d(a){for(var b=0,c=-1;-1!==(c=a.indexOf("\n",c+1));)b++;return b}function e(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function f(a){if("string"==typeof a)return e(a);var b=a.shift(),c={},d=[];for(!a.length||"object"!=typeof a[0]||a[0]instanceof Array||(c=a.shift());a.length;)d.push(f(a.shift()));var g="";for(var h in c)g+=" "+h+'="'+e(c[h])+'"';return"img"===b||"br"===b||"hr"===b?"<"+b+g+"/>":"<"+b+g+">"+d.join("")+"</"+b+">"}function g(a,b,c){var d;c=c||{};var e=a.slice(0);"function"==typeof c.preprocessTreeNode&&(e=c.preprocessTreeNode(e,b));var f=o(e);if(f){e[1]={};for(d in f)e[1][d]=f[d];f=e[1]}if("string"==typeof e)return e;switch(e[0]){case"header":e[0]="h"+e[1].level,delete e[1].level;break;case"bulletlist":e[0]="ul";break;case"numberlist":e[0]="ol";break;case"listitem":e[0]="li";break;case"para":e[0]="p";break;case"markdown":e[0]="html",f&&delete f.references;break;case"code_block":e[0]="pre",d=f?2:1;var h=["code"];h.push.apply(h,e.splice(d,e.length-d)),e[d]=h;break;case"inlinecode":e[0]="code";break;case"img":e[1].src=e[1].href,delete e[1].href;break;case"linebreak":e[0]="br";break;case"link":e[0]="a";break;case"link_ref":e[0]="a";var i=b[f.ref];if(!i)return f.original;delete f.ref,f.href=i.href,i.title&&(f.title=i.title),delete f.original;break;case"img_ref":e[0]="img";var i=b[f.ref];if(!i)return f.original;delete f.ref,f.src=i.href,i.title&&(f.title=i.title),delete f.original}if(d=1,f){for(var j in e[1]){d=2;break}1===d&&e.splice(d,1)}for(;d<e.length;++d)e[d]=g(e[d],b,c);return e}function h(a){for(var b=o(a)?2:1;b<a.length;)"string"==typeof a[b]?b+1<a.length&&"string"==typeof a[b+1]?a[b]+=a.splice(b+1,1)[0]:++b:(h(a[b]),++b)}function i(a,b){function c(a){this.len_after=a,this.name="close_"+b}var d=a+"_state",e="strong"===a?"em_state":"strong_state";return function(f){if(this[d][0]===b)return this[d].shift(),[f.length,new c(f.length-b.length)];var g=this[e].slice(),h=this[d].slice();this[d].unshift(b);var i=this.processInline(f.substr(b.length)),j=i[i.length-1];if(this[d].shift(),j instanceof c){i.pop();var k=f.length-j.len_after;return[k,[a].concat(i)]}return this[e]=g,this[d]=h,[b.length,b]}}function j(a){for(var b=a.split(""),c=[""],d=!1;b.length;){var e=b.shift();switch(e){case" ":d?c[c.length-1]+=e:c.push("");break;case"'":case'"':d=!d;break;case"\\":e=b.shift();default:c[c.length-1]+=e}}return c}var k={};k.mk_block=function(a,d,e){1===arguments.length&&(d="\n\n");var f=new String(a);return f.trailing=d,f.inspect=c,f.toSource=b,void 0!==e&&(f.lineNumber=e),f};var l=k.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};k.forEach=Array.prototype.forEach?function(a,b,c){return a.forEach(b,c)}:function(a,b,c){for(var d=0;d<a.length;d++)b.call(c||a,a[d],d,a)},k.isEmpty=function(a){for(var b in a)if(hasOwnProperty.call(a,b))return!1;return!0},k.extract_attr=function(a){return l(a)&&a.length>1&&"object"==typeof a[1]&&!l(a[1])?a[1]:void 0};var m=function(a){switch(typeof a){case"undefined":this.dialect=m.dialects.Gruber;break;case"object":this.dialect=a;break;default:if(!(a in m.dialects))throw new Error("Unknown Markdown dialect '"+String(a)+"'");this.dialect=m.dialects[a]}this.em_state=[],this.strong_state=[],this.debug_indent=""};m.dialects={};var n=m.mk_block=k.mk_block,l=k.isArray;m.parse=function(a,b){var c=new m(b);return c.toTree(a)},m.prototype.split_blocks=function(a){a=a.replace(/(\r\n|\n|\r)/g,"\n");var b,c=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,e=[],f=1;for(null!==(b=/^(\s*\n)/.exec(a))&&(f+=d(b[0]),c.lastIndex=b[0].length);null!==(b=c.exec(a));)"\n#"===b[2]&&(b[2]="\n",c.lastIndex--),e.push(n(b[1],b[2],f)),f+=d(b[0]);return e},m.prototype.processBlock=function(a,b){var c=this.dialect.block,d=c.__order__;if("__call__"in c)return c.__call__.call(this,a,b);for(var e=0;e<d.length;e++){var f=c[d[e]].call(this,a,b);if(f)return(!l(f)||f.length>0&&!l(f[0]))&&this.debug(d[e],"didn't return a proper array"),f}return[]},m.prototype.processInline=function(a){return this.dialect.inline.__call__.call(this,String(a))},m.prototype.toTree=function(a,b){var c=a instanceof Array?a:this.split_blocks(a),d=this.tree;try{for(this.tree=b||this.tree||["markdown"];c.length;){var e=this.processBlock(c.shift(),c);e.length&&this.tree.push.apply(this.tree,e)}return this.tree}finally{b&&(this.tree=d)}},m.prototype.debug=function(){var a=Array.prototype.slice.call(arguments);a.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,a),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log.apply(null,a)},m.prototype.loop_re_over_block=function(a,b,c){for(var d,e=b.valueOf();e.length&&null!==(d=a.exec(e));)e=e.substr(d[0].length),c.call(this,d);return e},m.buildBlockOrder=function(a){var b=[];for(var c in a)"__order__"!==c&&"__call__"!==c&&b.push(c);a.__order__=b},m.buildInlinePatterns=function(a){var b=[];for(var c in a)if(!c.match(/^__.*__$/)){var d=c.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");b.push(1===c.length?d:"(?:"+d+")")}b=b.join("|"),a.__patterns__=b;var e=a.__call__;a.__call__=function(a,c){return void 0!==c?e.call(this,a,c):e.call(this,a,b)}};var o=k.extract_attr;m.renderJsonML=function(a,b){b=b||{},b.root=b.root||!1;var c=[];if(b.root)c.push(f(a));else for(a.shift(),!a.length||"object"!=typeof a[0]||a[0]instanceof Array||a.shift();a.length;)c.push(f(a.shift()));return c.join("\n\n")},m.toHTMLTree=function(a,b,c){"string"==typeof a&&(a=this.parse(a,b));var d=o(a),e={};d&&d.references&&(e=d.references);var f=g(a,e,c);return h(f),f},m.toHTML=function(a,b,c){var d=this.toHTMLTree(a,b,c);return this.renderJsonML(d)};var p={};p.inline_until_char=function(a,b){for(var c=0,d=[];;){if(a.charAt(c)===b)return c++,[c,d];if(c>=a.length)return null;var e=this.dialect.inline.__oneElement__.call(this,a.substr(c));c+=e[0],d.push.apply(d,e.slice(1))}},p.subclassDialect=function(a){function b(){}function c(){}return b.prototype=a.block,c.prototype=a.inline,{block:new b,inline:new c}};var q=k.forEach,o=k.extract_attr,n=k.mk_block,r=k.isEmpty,s=p.inline_until_char,t={block:{atxHeader:function(a,b){var c=a.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!c)return void 0;var d=["header",{level:c[1].length}];return Array.prototype.push.apply(d,this.processInline(c[2])),c[0].length<a.length&&b.unshift(n(a.substr(c[0].length),a.trailing,a.lineNumber+2)),[d]},setextHeader:function(a,b){var c=a.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!c)return void 0;var d="="===c[2]?1:2,e=["header",{level:d},c[1]];return c[0].length<a.length&&b.unshift(n(a.substr(c[0].length),a.trailing,a.lineNumber+2)),[e]},code:function(a,b){var c=[],d=/^(?: {0,3}\t| {4})(.*)\n?/;if(!a.match(d))return void 0;a:for(;;){var e=this.loop_re_over_block(d,a.valueOf(),function(a){c.push(a[1])});if(e.length){b.unshift(n(e,a.trailing));break a}if(!b.length)break a;if(!b[0].match(d))break a;c.push(a.trailing.replace(/[^\n]/g,"").substring(2)),a=b.shift()}return[["code_block",c.join("\n")]]},horizRule:function(a,b){var c=a.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!c)return void 0;var d=[["hr"]];if(c[1]){var e=n(c[1],"",a.lineNumber);d.unshift.apply(d,this.toTree(e,[]))}return c[3]&&b.unshift(n(c[3],a.trailing,a.lineNumber+1)),d},lists:function(){function a(a){return new RegExp("(?:^("+i+"{0,"+a+"} {0,3})("+f+")\\s+)|"+"(^"+i+"{0,"+(a-1)+"}[ ]{0,4})")}function b(a){return a.replace(/ {0,3}\t/g,"    ")}function c(a,b,c,d){if(b)return a.push(["para"].concat(c)),void 0;var e=a[a.length-1]instanceof Array&&"para"===a[a.length-1][0]?a[a.length-1]:a;d&&a.length>1&&c.unshift(d);for(var f=0;f<c.length;f++){var g=c[f],h="string"==typeof g;h&&e.length>1&&"string"==typeof e[e.length-1]?e[e.length-1]+=g:e.push(g)}}function d(a,b){for(var c=new RegExp("^("+i+"{"+a+"}.*?\\n?)*$"),d=new RegExp("^"+i+"{"+a+"}","gm"),e=[];b.length>0&&c.exec(b[0]);){var f=b.shift(),g=f.replace(d,"");e.push(n(g,f.trailing,f.lineNumber))}return e}function e(a,b,c){var d=a.list,e=d[d.length-1];if(!(e[1]instanceof Array&&"para"===e[1][0]))if(b+1===c.length)e.push(["para"].concat(e.splice(1,e.length-1)));else{var f=e.pop();e.push(["para"].concat(e.splice(1,e.length-1)),f)}}var f="[*+-]|\\d+\\.",g=/[*+-]/,h=new RegExp("^( {0,3})("+f+")[ 	]+"),i="(?: {0,3}\\t| {4})";return function(f,i){function j(a){var b=g.exec(a[2])?["bulletlist"]:["numberlist"];return n.push({list:b,indent:a[1]}),b}var k=f.match(h);if(!k)return void 0;for(var l,m,n=[],o=j(k),p=!1,r=[n[0].list];;){for(var s=f.split(/(?=\n)/),t="",u="",v=0;v<s.length;v++){u="";var w=s[v].replace(/^\n/,function(a){return u=a,""}),x=a(n.length);if(k=w.match(x),void 0!==k[1]){t.length&&(c(l,p,this.processInline(t),u),p=!1,t=""),k[1]=b(k[1]);var y=Math.floor(k[1].length/4)+1;if(y>n.length)o=j(k),l.push(o),l=o[1]=["listitem"];else{var z=!1;for(m=0;m<n.length;m++)if(n[m].indent===k[1]){o=n[m].list,n.splice(m+1,n.length-(m+1)),z=!0;break}z||(y++,y<=n.length?(n.splice(y,n.length-y),o=n[y-1].list):(o=j(k),l.push(o))),l=["listitem"],o.push(l)}u=""}w.length>k[0].length&&(t+=u+w.substr(k[0].length))}t.length&&(c(l,p,this.processInline(t),u),p=!1,t="");var A=d(n.length,i);A.length>0&&(q(n,e,this),l.push.apply(l,this.toTree(A,[])));var B=i[0]&&i[0].valueOf()||"";if(!B.match(h)&&!B.match(/^ /))break;f=i.shift();var C=this.dialect.block.horizRule(f,i);if(C){r.push.apply(r,C);break}q(n,e,this),p=!0}return r}}(),blockquote:function(a,b){if(!a.match(/^>/m))return void 0;var c=[];if(">"!==a[0]){for(var d=a.split(/\n/),e=[],f=a.lineNumber;d.length&&">"!==d[0][0];)e.push(d.shift()),f++;var g=n(e.join("\n"),"\n",a.lineNumber);c.push.apply(c,this.processBlock(g,[])),a=n(d.join("\n"),a.trailing,f)}for(;b.length&&">"===b[0][0];){var h=b.shift();a=n(a+a.trailing+h,h.trailing,a.lineNumber)}var i=a.replace(/^> ?/gm,""),j=(this.tree,this.toTree(i,["blockquote"])),k=o(j);return k&&k.references&&(delete k.references,r(k)&&j.splice(1,1)),c.push(j),c},referenceDefn:function(a,b){var c=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!a.match(c))return void 0;o(this.tree)||this.tree.splice(1,0,{});var d=o(this.tree);void 0===d.references&&(d.references={});var e=this.loop_re_over_block(c,a,function(a){a[2]&&"<"===a[2][0]&&">"===a[2][a[2].length-1]&&(a[2]=a[2].substring(1,a[2].length-1));var b=d.references[a[1].toLowerCase()]={href:a[2]};void 0!==a[4]?b.title=a[4]:void 0!==a[5]&&(b.title=a[5])});return e.length&&b.unshift(n(e,a.trailing)),[]},para:function(a){return[["para"].concat(this.processInline(a))]}},inline:{__oneElement__:function(a,b,c){var d,e;b=b||this.dialect.inline.__patterns__;var f=new RegExp("([\\s\\S]*?)("+(b.source||b)+")");if(d=f.exec(a),!d)return[a.length,a];if(d[1])return[d[1].length,d[1]];var e;return d[2]in this.dialect.inline&&(e=this.dialect.inline[d[2]].call(this,a.substr(d.index),d,c||[])),e=e||[d[2].length,d[2]]},__call__:function(a,b){function c(a){"string"==typeof a&&"string"==typeof e[e.length-1]?e[e.length-1]+=a:e.push(a)}for(var d,e=[];a.length>0;)d=this.dialect.inline.__oneElement__.call(this,a,b,e),a=a.substr(d.shift()),q(d,c);return e},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(a){return this.dialect.inline.__escape__.exec(a)?[2,a.charAt(1)]:[1,"\\"]},"![":function(a){var b=a.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(b){b[2]&&"<"===b[2][0]&&">"===b[2][b[2].length-1]&&(b[2]=b[2].substring(1,b[2].length-1)),b[2]=this.dialect.inline.__call__.call(this,b[2],/\\/)[0];var c={alt:b[1],href:b[2]||""};return void 0!==b[4]&&(c.title=b[4]),[b[0].length,["img",c]]}return b=a.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),b?[b[0].length,["img_ref",{alt:b[1],ref:b[2].toLowerCase(),original:b[0]}]]:[2,"!["]},"[":function v(a){var b=String(a),c=s.call(this,a.substr(1),"]");if(!c)return[1,"["];var v,d,e=1+c[0],f=c[1];a=a.substr(e);var g=a.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(g){var h=g[1];if(e+=g[0].length,h&&"<"===h[0]&&">"===h[h.length-1]&&(h=h.substring(1,h.length-1)),!g[3])for(var i=1,j=0;j<h.length;j++)switch(h[j]){case"(":i++;break;case")":0===--i&&(e-=h.length-j,h=h.substring(0,j))}return h=this.dialect.inline.__call__.call(this,h,/\\/)[0],d={href:h||""},void 0!==g[3]&&(d.title=g[3]),v=["link",d].concat(f),[e,v]}return g=a.match(/^\s*\[(.*?)\]/),g?(e+=g[0].length,d={ref:(g[1]||String(f)).toLowerCase(),original:b.substr(0,e)},v=["link_ref",d].concat(f),[e,v]):1===f.length&&"string"==typeof f[0]?(d={ref:f[0].toLowerCase(),original:b.substr(0,e)},v=["link_ref",d,f[0]],[e,v]):[1,"["]},"<":function(a){var b;return null!==(b=a.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?b[3]?[b[0].length,["link",{href:"mailto:"+b[3]},b[3]]]:"mailto"===b[2]?[b[0].length,["link",{href:b[1]},b[1].substr("mailto:".length)]]:[b[0].length,["link",{href:b[1]},b[1]]]:[1,"<"]},"`":function(a){var b=a.match(/(`+)(([\s\S]*?)\1)/);return b&&b[2]?[b[1].length+b[2].length,["inlinecode",b[3]]]:[1,"`"]},"  \n":function(){return[3,["linebreak"]]}}};t.inline["**"]=i("strong","**"),t.inline.__=i("strong","__"),t.inline["*"]=i("em","*"),t.inline._=i("em","_"),m.dialects.Gruber=t,m.buildBlockOrder(m.dialects.Gruber.block),m.buildInlinePatterns(m.dialects.Gruber.inline);var u=p.subclassDialect(t),o=k.extract_attr,q=k.forEach;u.processMetaHash=function(a){for(var b=j(a),c={},d=0;d<b.length;++d)if(/^#/.test(b[d]))c.id=b[d].substring(1);else if(/^\./.test(b[d]))c["class"]=c["class"]?c["class"]+b[d].replace(/./," "):b[d].substring(1);else if(/\=/.test(b[d])){var e=b[d].split(/\=/);c[e[0]]=e[1]}return c},u.block.document_meta=function(a){if(a.lineNumber>1)return void 0;if(!a.match(/^(?:\w+:.*\n)*\w+:.*$/))return void 0;o(this.tree)||this.tree.splice(1,0,{});var b=a.split(/\n/);for(var c in b){var d=b[c].match(/(\w+):\s*(.*)$/),e=d[1].toLowerCase(),f=d[2];this.tree[1][e]=f}return[]},u.block.block_meta=function(a){var b=a.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!b)return void 0;var c,d=this.dialect.processMetaHash(b[2]);if(""===b[1]){var e=this.tree[this.tree.length-1];if(c=o(e),"string"==typeof e)return void 0;c||(c={},e.splice(1,0,c));for(var f in d)c[f]=d[f];return[]}var g=a.replace(/\n.*$/,""),h=this.processBlock(g,[]);c=o(h[0]),c||(c={},h[0].splice(1,0,c));for(var f in d)c[f]=d[f];return h},u.block.definition_list=function(a,b){var c,d,e=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,f=["dl"];if(!(d=a.match(e)))return void 0;for(var g=[a];b.length&&e.exec(b[0]);)g.push(b.shift());for(var h=0;h<g.length;++h){var d=g[h].match(e),i=d[1].replace(/\n$/,"").split(/\n/),j=d[2].split(/\n:\s+/);for(c=0;c<i.length;++c)f.push(["dt",i[c]]);for(c=0;c<j.length;++c)f.push(["dd"].concat(this.processInline(j[c].replace(/(\n)\s+/,"$1"))))}return[f]},u.block.table=function w(a){var b,c,d=function(a,b){b=b||"\\s",b.match(/^[\\|\[\]{}?*.+^$]$/)&&(b="\\"+b);for(var c,d=[],e=new RegExp("^((?:\\\\.|[^\\\\"+b+"])*)"+b+"(.*)");c=a.match(e);)d.push(c[1]),a=c[2];return d.push(a),d},e=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,f=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;if(c=a.match(e))c[3]=c[3].replace(/^\s*\|/gm,"");else if(!(c=a.match(f)))return void 0;var w=["table",["thead",["tr"]],["tbody"]];c[2]=c[2].replace(/\|\s*$/,"").split("|");var g=[];for(q(c[2],function(a){a.match(/^\s*-+:\s*$/)?g.push({align:"right"}):a.match(/^\s*:-+\s*$/)?g.push({align:"left"}):a.match(/^\s*:-+:\s*$/)?g.push({align:"center"}):g.push({})}),c[1]=d(c[1].replace(/\|\s*$/,""),"|"),b=0;b<c[1].length;b++)w[1][1].push(["th",g[b]||{}].concat(this.processInline(c[1][b].trim())));return q(c[3].replace(/\|\s*$/gm,"").split("\n"),function(a){var c=["tr"];for(a=d(a,"|"),b=0;b<a.length;b++)c.push(["td",g[b]||{}].concat(this.processInline(a[b].trim())));w[2].push(c)},this),[w]},u.inline["{:"]=function(a,b,c){if(!c.length)return[2,"{:"];var d=c[c.length-1];if("string"==typeof d)return[2,"{:"];var e=a.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!e)return[2,"{:"];var f=this.dialect.processMetaHash(e[1]),g=o(d);g||(g={},d.splice(1,0,g));for(var h in f)g[h]=f[h];return[e[0].length,""]},m.dialects.Maruku=u,m.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,m.buildBlockOrder(m.dialects.Maruku.block),m.buildInlinePatterns(m.dialects.Maruku.inline),a.Markdown=m,a.parse=m.parse,a.toHTML=m.toHTML,a.toHTMLTree=m.toHTMLTree,a.renderJsonML=m.renderJsonML}(function(){return window.markdown={},window.markdown}());/*!
	Colorbox v1.5.13 - 2014-08-04
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(I).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){!y&&e.body&&(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(I=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),F=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(F),t(e.body).append(v,y.append(x,M)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,I,R,F,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){F.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),F.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,F.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),F.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),i&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},I.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);/** @preserve
 * jquery-image-loader
 *
 * Created at: 2011-12-01 08:32:01 +0200
 * Author: Yves Van Broekhoven
 * Version: 1.2.0
 * https://github.com/mrhenry/jquery-image-loader
 *
 * How to use:
 *
 * HTML:
 *
 * <div class="wrapper">
 *   <img data-src="url-to-image.jpg">
 * </div>
 *
 *
 * JS:
 *
 * $('.wrapper').loadImages({
 *   imgLoadedClb: function(){},
 *   allLoadedClb: function(){},
 *   imgErrorClb:  function(){},
 *   noImgClb:     function(){},
 *   dataAttr:     'src'
 * });
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var _load,
      _callback,
      _removeData;

  $.fn.loadImages = function(options){
    options = $.extend({}, $.fn.loadImages.defaults, options);

    this.each(function(){
      var _this = this,
          $this = $(_this),
          $images;

      // Check if "this" is an image or an image container
      if ( $this.is('img') ) {
        $images = $this;
      } else {
        $images = $this.find('*[data-' + options.dataAttr + ']');
      }

      // If there are no images, exit immediately
      if ($images.length < 1) {
        if ($.isFunction(options.noImgClb)) {
          options.noImgClb.call(_this);
          return;
        }
      }

      // Attach dfd & options to our context element
      $this.data( 'dfd', $.Deferred() );
      $this.data( 'options', options );

      // Initialize counters
      $this.data('total_images_count', $images.length);
      $this.data('processed_count', 0);
      $this.data('failed_count', 0);

      // Async
      $.when( _load.call(_this, $images) )
       .then( function() {
          if ( $.isFunction( options.allLoadedClb ) ) {
            options.allLoadedClb.call(_this);
          }
       });

    });

    return this;
  };

  /*
   * Load image(s)
   * this [object] plugin selector object
   * @param $images [$object] $array of <img>
   */
  _load = function($images) {
    var _this   = this,
        $this   = $(_this),
        options = $this.data('options'),
        dfd     = $this.data('dfd');

    // Iterate images
    $images.each(function(){
      var $this = $(this),
          $img;

      if ( $this.is('img') ) {
        $img = $this;

      } else {
        $img = $('<img/>');

      }

      $img
        .load(function(){
          if ( !$this.is('img') ) {
            $this.css({
              'background-image': 'url("' + $this.data(options.dataAttr) + '")'
            });
          }
          _callback.call(_this, $this[0], 'success');
        })
        .error(function(){
          _callback.call(_this, $this[0], 'error');
        })
        .attr( 'src', $this.data(options.dataAttr) );
    });

    return dfd.promise();
  };


  /*
   * Callback after load/error
   *
   * this [object] plugin selector object
   * @param img    [object]  processed image object
   * @param status [string]  'success' or 'error'
   */
  _callback = function(img, status){
    var _this               = this,
        $this               = $(_this),
        dfd                 = $this.data('dfd'),
        options             = $this.data('options'),
        processed_count     = $this.data('processed_count') + 1,
        total_images_count  = $this.data('total_images_count');

    // Increase process count
    $this.data('processed_count', processed_count);

    // Image success callback
    if ( status === 'success' && $.isFunction(options.imgLoadedClb) ) {
      options.imgLoadedClb.call(img, processed_count, total_images_count);
    }

    // Image error callback
    if (status === 'error') {
      $this.data('failed_count', $this.data('failed_count') + 1);

      // Unbind load event to avoid triggering our load function again
      // when you for example add a fallback image
      $(this).unbind('load');

      if ( $.isFunction(options.imgErrorClb) ) {
        options.imgErrorClb.call(img, processed_count, total_images_count);
      }

    }

    // If all images are processed, resolve
    if ( processed_count === total_images_count ) {
      // If failed count equals image count, then reject
      // otherwise resolve
      if ( $this.data('failed_count') === total_images_count ) {
        if ( $.isFunction(options.noImgClb) ) {
          options.noImgClb.call(_this);
        }
        dfd.reject();

      } else {
        dfd.resolve();

      }
      _removeData.call(_this);

    }

  };

  /*
   * Remove all plugin temporary data
   * this [object] plugin selector object
   */
  _removeData = function() {
    $(this).removeData('dfd', 'options', 'total_images_count', 'processed_count', 'failed_count');
  };


  /*
   * Plugin defaults
   */
  $.fn.loadImages.defaults = {
    imgLoadedClb: false, /* callback when an image is loaded.
                            this [object] loaded image
                            @params processed [integer] processed images
                            @params total  [integer] total images
                         */
    allLoadedClb: false, /* callback when all images are loaded.
                            this [object] wrapper element
                         */
    imgErrorClb: false,  /* callback when an image fails loading.
                            this [object] failed image
                         */
    noImgClb: false,     /* callback when there are no images to be loaded,
                            or all are failed.
                            this [object] wrapper element
                         */
    dataAttr: 'src'       /* the data attribute that contains the src */

  };

}(jQuery));
/* ========================================================================
 * bootstrap-switch - v3.3.2
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function(){var t=[].slice;!function(e,i){"use strict";var n;return n=function(){function t(t,i){null==i&&(i={}),this.$element=e(t),this.options=e.extend({},e.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},i),this.$wrapper=e("<div>",{"class":function(t){return function(){var e;return e=[""+t.options.baseClass].concat(t._getClasses(t.options.wrapperClass)),e.push(t.options.state?""+t.options.baseClass+"-on":""+t.options.baseClass+"-off"),null!=t.options.size&&e.push(""+t.options.baseClass+"-"+t.options.size),t.options.disabled&&e.push(""+t.options.baseClass+"-disabled"),t.options.readonly&&e.push(""+t.options.baseClass+"-readonly"),t.options.indeterminate&&e.push(""+t.options.baseClass+"-indeterminate"),t.options.inverse&&e.push(""+t.options.baseClass+"-inverse"),t.$element.attr("id")&&e.push(""+t.options.baseClass+"-id-"+t.$element.attr("id")),e.join(" ")}}(this)()}),this.$container=e("<div>",{"class":""+this.options.baseClass+"-container"}),this.$on=e("<span>",{html:this.options.onText,"class":""+this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=e("<span>",{html:this.options.offText,"class":""+this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=e("<span>",{html:this.options.labelText,"class":""+this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",function(e){return function(){return e.options.onInit.apply(t,arguments)}}(this)),this.$element.on("switchChange.bootstrapSwitch",function(e){return function(){return e.options.onSwitchChange.apply(t,arguments)}}(this)),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch")}return t.prototype._constructor=t,t.prototype.state=function(t,e){return"undefined"==typeof t?this.options.state:this.options.disabled||this.options.readonly?this.$element:this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")?this.$element:(this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",e),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return"undefined"==typeof t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(""+this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(""+this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return"undefined"==typeof t?this.options.animate:(t=!!t,t===this.options.animate?this.$element:this.toggleAnimate())},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(""+this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return"undefined"==typeof t?this.options.disabled:(t=!!t,t===this.options.disabled?this.$element:this.toggleDisabled())},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(""+this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return"undefined"==typeof t?this.options.readonly:(t=!!t,t===this.options.readonly?this.$element:this.toggleReadonly())},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(""+this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return"undefined"==typeof t?this.options.indeterminate:(t=!!t,t===this.options.indeterminate?this.$element:this.toggleIndeterminate())},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(""+this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return"undefined"==typeof t?this.options.inverse:(t=!!t,t===this.options.inverse?this.$element:this.toggleInverse())},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(""+this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,"undefined"==typeof t?e:(null!=e&&this.$on.removeClass(""+this.options.baseClass+"-"+e),this.$on.addClass(""+this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,"undefined"==typeof t?e:(null!=e&&this.$off.removeClass(""+this.options.baseClass+"-"+e),this.$off.addClass(""+this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return"undefined"==typeof t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return"undefined"==typeof t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return"undefined"==typeof t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return"undefined"==typeof t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return"undefined"==typeof t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(){return this.options.baseClass},t.prototype.wrapperClass=function(t){return"undefined"==typeof t?this.options.wrapperClass:(t||(t=e.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return"undefined"==typeof t?this.options.radioAllOff:(t=!!t,t===this.options.radioAllOff?this.$element:(this.options.radioAllOff=t,this.$element))},t.prototype.onInit=function(t){return"undefined"==typeof t?this.options.onInit:(t||(t=e.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return"undefined"==typeof t?this.options.onSwitchChange:(t||(t=e.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return t=this.$element.closest("form"),t.length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,e;return t=this.$on.add(this.$off),t.add(this.$label).css("width",""),e="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(e),this.$label.width(function(t){return function(i,n){return"auto"!==t.options.labelWidth?t.options.labelWidth:e>n?e:n}}(this)),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(t,e){return null==t&&(t=this.options.state),this.$container.css("margin-left",function(e){return function(){var i;return i=[0,"-"+e._handleWidth+"px"],e.options.indeterminate?"-"+e._handleWidth/2+"px":t?e.options.inverse?i[1]:i[0]:e.options.inverse?i[0]:i[1]}}(this)),e?setTimeout(function(){return e()},50):void 0},t.prototype._init=function(){var t,e;return t=function(t){return function(){return t._width(),t._containerPosition(null,function(){return t.options.animate?t.$wrapper.addClass(""+t.options.baseClass+"-animate"):void 0})}}(this),this.$wrapper.is(":visible")?t():e=i.setInterval(function(n){return function(){return n.$wrapper.is(":visible")?(t(),i.clearInterval(e)):void 0}}(this),50)},t.prototype._elementHandlers=function(){return this.$element.on({"change.bootstrapSwitch":function(t){return function(i,n){var o;return i.preventDefault(),i.stopImmediatePropagation(),o=t.$element.is(":checked"),t._containerPosition(o),o!==t.options.state?(t.options.state=o,t.$wrapper.toggleClass(""+t.options.baseClass+"-off").toggleClass(""+t.options.baseClass+"-on"),n?void 0:(t.$element.is(":radio")&&e("[name='"+t.$element.attr("name")+"']").not(t.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),t.$element.trigger("switchChange.bootstrapSwitch",[o]))):void 0}}(this),"focus.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.addClass(""+t.options.baseClass+"-focused")}}(this),"blur.bootstrapSwitch":function(t){return function(e){return e.preventDefault(),t.$wrapper.removeClass(""+t.options.baseClass+"-focused")}}(this),"keydown.bootstrapSwitch":function(t){return function(e){if(e.which&&!t.options.disabled&&!t.options.readonly)switch(e.which){case 37:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!1);case 39:return e.preventDefault(),e.stopImmediatePropagation(),t.state(!0)}}}(this)})},t.prototype._handleHandlers=function(){return this.$on.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!1),t.$element.trigger("focus.bootstrapSwitch")}}(this)),this.$off.on("click.bootstrapSwitch",function(t){return function(e){return e.preventDefault(),e.stopPropagation(),t.state(!0),t.$element.trigger("focus.bootstrapSwitch")}}(this))},t.prototype._labelHandlers=function(){return this.$label.on({"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":function(t){return function(e){return t._dragStart||t.options.disabled||t.options.readonly?void 0:(e.preventDefault(),e.stopPropagation(),t._dragStart=(e.pageX||e.originalEvent.touches[0].pageX)-parseInt(t.$container.css("margin-left"),10),t.options.animate&&t.$wrapper.removeClass(""+t.options.baseClass+"-animate"),t.$element.trigger("focus.bootstrapSwitch"))}}(this),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":function(t){return function(e){var i;if(null!=t._dragStart&&(e.preventDefault(),i=(e.pageX||e.originalEvent.touches[0].pageX)-t._dragStart,!(i<-t._handleWidth||i>0)))return t._dragEnd=i,t.$container.css("margin-left",""+t._dragEnd+"px")}}(this),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":function(t){return function(e){var i;if(t._dragStart)return e.preventDefault(),t.options.animate&&t.$wrapper.addClass(""+t.options.baseClass+"-animate"),t._dragEnd?(i=t._dragEnd>-(t._handleWidth/2),t._dragEnd=!1,t.state(t.options.inverse?!i:i)):t.state(!t.options.state),t._dragStart=!1}}(this),"mouseleave.bootstrapSwitch":function(t){return function(){return t.$label.trigger("mouseup.bootstrapSwitch")}}(this)})},t.prototype._externalLabelHandler=function(){var t;return t=this.$element.closest("label"),t.on("click",function(e){return function(i){return i.preventDefault(),i.stopImmediatePropagation(),i.target===t[0]?e.toggleState():void 0}}(this))},t.prototype._formHandler=function(){var t;return t=this.$element.closest("form"),t.data("bootstrap-switch")?void 0:t.on("reset.bootstrapSwitch",function(){return i.setTimeout(function(){return t.find("input").filter(function(){return e(this).data("bootstrap-switch")}).each(function(){return e(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var i,n,o,s;if(!e.isArray(t))return[""+this.options.baseClass+"-"+t];for(n=[],o=0,s=t.length;s>o;o++)i=t[o],n.push(""+this.options.baseClass+"-"+i);return n},t}(),e.fn.bootstrapSwitch=function(){var i,o,s;return o=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],s=this,this.each(function(){var t,a;return t=e(this),a=t.data("bootstrap-switch"),a||t.data("bootstrap-switch",a=new n(this,o)),"string"==typeof o?s=a[o].apply(a,i):void 0}),s},e.fn.bootstrapSwitch.Constructor=n,e.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"ON",offText:"OFF",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);/*! showdown 06-02-2017 */

(function(){function a(a){"use strict";var b={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"}};if(a===!1)return JSON.parse(JSON.stringify(b));var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d].defaultValue);return c}function b(){"use strict";var b=a(!0),c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=!0);return c}function c(a,b){"use strict";var c=b?"Error in "+b+" extension->":"Error in unnamed extension",d={valid:!0,error:""};e.helper.isArray(a)||(a=[a]);for(var f=0;f<a.length;++f){var g=c+" sub-extension "+f+": ",h=a[f];if("object"!=typeof h)return d.valid=!1,d.error=g+"must be an object, but "+typeof h+" given",d;if(!e.helper.isString(h.type))return d.valid=!1,d.error=g+'property "type" must be a string, but '+typeof h.type+" given",d;var i=h.type=h.type.toLowerCase();if("language"===i&&(i=h.type="lang"),"html"===i&&(i=h.type="output"),"lang"!==i&&"output"!==i&&"listener"!==i)return d.valid=!1,d.error=g+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',d;if("listener"===i){if(e.helper.isUndefined(h.listeners))return d.valid=!1,d.error=g+'. Extensions of type "listener" must have a property called "listeners"',d}else if(e.helper.isUndefined(h.filter)&&e.helper.isUndefined(h.regex))return d.valid=!1,d.error=g+i+' extensions must define either a "regex" property or a "filter" method',d;if(h.listeners){if("object"!=typeof h.listeners)return d.valid=!1,d.error=g+'"listeners" property must be an object but '+typeof h.listeners+" given",d;for(var j in h.listeners)if(h.listeners.hasOwnProperty(j)&&"function"!=typeof h.listeners[j])return d.valid=!1,d.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+j+" must be a function but "+typeof h.listeners[j]+" given",d}if(h.filter){if("function"!=typeof h.filter)return d.valid=!1,d.error=g+'"filter" must be a function, but '+typeof h.filter+" given",d}else if(h.regex){if(e.helper.isString(h.regex)&&(h.regex=new RegExp(h.regex,"g")),!(h.regex instanceof RegExp))return d.valid=!1,d.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof h.regex+" given",d;if(e.helper.isUndefined(h.replace))return d.valid=!1,d.error=g+'"regex" extensions must implement a replace string or function',d}}return d}function d(a,b){"use strict";var c=b.charCodeAt(0);return"¨E"+c+"E"}var e={},f={},g={},h=a(!0),i="vanilla",j={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:b()};e.helper={},e.extensions={},e.setOption=function(a,b){"use strict";return h[a]=b,this},e.getOption=function(a){"use strict";return h[a]},e.getOptions=function(){"use strict";return h},e.resetOptions=function(){"use strict";h=a(!0)},e.setFlavor=function(a){"use strict";if(!j.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=j[a];i=a;for(var c in b)b.hasOwnProperty(c)&&(h[c]=b[c])},e.getFlavor=function(){"use strict";return i},e.getFlavorOptions=function(a){"use strict";if(j.hasOwnProperty(a))return j[a]},e.getDefaultOptions=function(b){"use strict";return a(b)},e.subParser=function(a,b){"use strict";if(e.helper.isString(a)){if("undefined"==typeof b){if(f.hasOwnProperty(a))return f[a];throw Error("SubParser named "+a+" not registered!")}f[a]=b}},e.extension=function(a,b){"use strict";if(!e.helper.isString(a))throw Error("Extension 'name' must be a string");if(a=e.helper.stdExtName(a),e.helper.isUndefined(b)){if(!g.hasOwnProperty(a))throw Error("Extension named "+a+" is not registered!");return g[a]}"function"==typeof b&&(b=b()),e.helper.isArray(b)||(b=[b]);var d=c(b,a);if(!d.valid)throw Error(d.error);g[a]=b},e.getAllExtensions=function(){"use strict";return g},e.removeExtension=function(a){"use strict";delete g[a]},e.resetExtensions=function(){"use strict";g={}},e.validateExtension=function(a){"use strict";var b=c(a,null);return!!b.valid||(console.warn(b.error),!1)},e.hasOwnProperty("helper")||(e.helper={}),e.helper.isString=function(a){"use strict";return"string"==typeof a||a instanceof String},e.helper.isFunction=function(a){"use strict";var b={};return a&&"[object Function]"===b.toString.call(a)},e.helper.isArray=function(a){"use strict";return a.constructor===Array},e.helper.isUndefined=function(a){"use strict";return"undefined"==typeof a},e.helper.forEach=function(a,b){"use strict";if(e.helper.isUndefined(a))throw new Error("obj param is required");if(e.helper.isUndefined(b))throw new Error("callback param is required");if(!e.helper.isFunction(b))throw new Error("callback param must be a function/closure");if("function"==typeof a.forEach)a.forEach(b);else if(e.helper.isArray(a))for(var c=0;c<a.length;c++)b(a[c],c,a);else{if("object"!=typeof a)throw new Error("obj does not seem to be an array or an iterable object");for(var d in a)a.hasOwnProperty(d)&&b(a[d],d,a)}},e.helper.stdExtName=function(a){"use strict";return a.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},e.helper.escapeCharactersCallback=d,e.helper.escapeCharacters=function(a,b,c){"use strict";var e="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(e="\\\\"+e);var f=new RegExp(e,"g");return a=a.replace(f,d)};var k=function(a,b,c,d){"use strict";var e,f,g,h,i,j=d||"",k=j.indexOf("g")>-1,l=new RegExp(b+"|"+c,"g"+j.replace(/g/g,"")),m=new RegExp(b,j.replace(/g/g,"")),n=[];do for(e=0;g=l.exec(a);)if(m.test(g[0]))e++||(f=l.lastIndex,h=f-g[0].length);else if(e&&!--e){i=g.index+g[0].length;var o={left:{start:h,end:f},match:{start:f,end:g.index},right:{start:g.index,end:i},wholeMatch:{start:h,end:i}};if(n.push(o),!k)return n}while(e&&(l.lastIndex=f));return n};e.helper.matchRecursiveRegExp=function(a,b,c,d){"use strict";for(var e=k(a,b,c,d),f=[],g=0;g<e.length;++g)f.push([a.slice(e[g].wholeMatch.start,e[g].wholeMatch.end),a.slice(e[g].match.start,e[g].match.end),a.slice(e[g].left.start,e[g].left.end),a.slice(e[g].right.start,e[g].right.end)]);return f},e.helper.replaceRecursiveRegExp=function(a,b,c,d,f){"use strict";if(!e.helper.isFunction(b)){var g=b;b=function(){return g}}var h=k(a,c,d,f),i=a,j=h.length;if(j>0){var l=[];0!==h[0].wholeMatch.start&&l.push(a.slice(0,h[0].wholeMatch.start));for(var m=0;m<j;++m)l.push(b(a.slice(h[m].wholeMatch.start,h[m].wholeMatch.end),a.slice(h[m].match.start,h[m].match.end),a.slice(h[m].left.start,h[m].left.end),a.slice(h[m].right.start,h[m].right.end))),m<j-1&&l.push(a.slice(h[m].wholeMatch.end,h[m+1].wholeMatch.start));h[j-1].wholeMatch.end<a.length&&l.push(a.slice(h[j-1].wholeMatch.end)),i=l.join("")}return i},e.helper.encodeEmailAddress=function(a){"use strict";var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a=a.replace(/./g,function(a){if("@"===a)a=b[Math.floor(2*Math.random())](a);else{var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a})},"undefined"==typeof console&&(console={warn:function(a){"use strict";alert(a)},log:function(a){"use strict";alert(a)},error:function(a){"use strict";throw a}}),e.helper.regexes={asteriskAndDash:/([*_])/g},e.Converter=function(a){"use strict";function b(){a=a||{};for(var b in h)h.hasOwnProperty(b)&&(m[b]=h[b]);if("object"!=typeof a)throw Error("Converter expects the passed parameter to be an object, but "+typeof a+" was passed instead.");for(var c in a)a.hasOwnProperty(c)&&(m[c]=a[c]);m.extensions&&e.helper.forEach(m.extensions,d)}function d(a,b){if(b=b||null,e.helper.isString(a)){if(a=e.helper.stdExtName(a),b=a,e.extensions[a])return console.warn("DEPRECATION WARNING: "+a+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void f(e.extensions[a],a);if(e.helper.isUndefined(g[a]))throw Error('Extension "'+a+'" could not be loaded. It was either not found or is not a valid extension.');a=g[a]}"function"==typeof a&&(a=a()),e.helper.isArray(a)||(a=[a]);var d=c(a,b);if(!d.valid)throw Error(d.error);for(var h=0;h<a.length;++h){switch(a[h].type){case"lang":n.push(a[h]);break;case"output":o.push(a[h])}if(a[h].hasOwnProperty("listeners"))for(var i in a[h].listeners)a[h].listeners.hasOwnProperty(i)&&k(i,a[h].listeners[i])}}function f(a,b){"function"==typeof a&&(a=a(new e.Converter)),e.helper.isArray(a)||(a=[a]);var d=c(a,b);if(!d.valid)throw Error(d.error);for(var f=0;f<a.length;++f)switch(a[f].type){case"lang":n.push(a[f]);break;case"output":o.push(a[f]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function k(a,b){if(!e.helper.isString(a))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof a+" given");if("function"!=typeof b)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");p.hasOwnProperty(a)||(p[a]=[]),p[a].push(b)}function l(a){var b=a.match(/^\s*/)[0].length,c=new RegExp("^\\s{0,"+b+"}","gm");return a.replace(c,"")}var m={},n=[],o=[],p={},q=i;b(),this._dispatch=function(a,b,c,d){if(p.hasOwnProperty(a))for(var e=0;e<p[a].length;++e){var f=p[a][e](a,b,this,c,d);f&&"undefined"!=typeof f&&(b=f)}return b},this.listen=function(a,b){return k(a,b),this},this.makeHtml=function(a){if(!a)return a;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:n,outputModifiers:o,converter:this,ghCodeBlocks:[]};return a=a.replace(/¨/g,"¨T"),a=a.replace(/\$/g,"¨D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a=a.replace(/\u00A0/g," "),m.smartIndentationFix&&(a=l(a)),a="\n\n"+a+"\n\n",a=e.subParser("detab")(a,m,b),a=a.replace(/^[ \t]+$/gm,""),e.helper.forEach(n,function(c){a=e.subParser("runExtension")(c,a,m,b)}),a=e.subParser("hashPreCodeTags")(a,m,b),a=e.subParser("githubCodeBlocks")(a,m,b),a=e.subParser("hashHTMLBlocks")(a,m,b),a=e.subParser("hashCodeTags")(a,m,b),a=e.subParser("stripLinkDefinitions")(a,m,b),a=e.subParser("blockGamut")(a,m,b),a=e.subParser("unhashHTMLSpans")(a,m,b),a=e.subParser("unescapeSpecialChars")(a,m,b),a=a.replace(/¨D/g,"$$"),a=a.replace(/¨T/g,"¨"),e.helper.forEach(o,function(c){a=e.subParser("runExtension")(c,a,m,b)}),a},this.setOption=function(a,b){m[a]=b},this.getOption=function(a){return m[a]},this.getOptions=function(){return m},this.addExtension=function(a,b){b=b||null,d(a,b)},this.useExtension=function(a){d(a)},this.setFlavor=function(a){if(!j.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=j[a];q=a;for(var c in b)b.hasOwnProperty(c)&&(m[c]=b[c])},this.getFlavor=function(){return q},this.removeExtension=function(a){e.helper.isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){for(var c=a[b],d=0;d<n.length;++d)n[d]===c&&n[d].splice(d,1);for(var f=0;f<o.length;++d)o[f]===c&&o[f].splice(d,1)}},this.getAllExtensions=function(){return{language:n,output:o}}},e.subParser("anchors",function(a,b,c){"use strict";a=c.converter._dispatch("anchors.before",a,b,c);var d=function(a,b,d,f,g,h,i,j){e.helper.isUndefined(j)&&(j=""),a=b;var k=d,l=f.toLowerCase(),m=g,n=j;if(!m)if(l||(l=k.toLowerCase().replace(/ ?\n/g," ")),m="#"+l,e.helper.isUndefined(c.gUrls[l])){if(!(a.search(/\(\s*\)$/m)>-1))return a;m=""}else m=c.gUrls[l],e.helper.isUndefined(c.gTitles[l])||(n=c.gTitles[l]);m=m.replace(e.helper.regexes.asteriskAndDash,e.helper.escapeCharactersCallback);var o='<a href="'+m+'"';return""!==n&&null!==n&&(n=n.replace(/"/g,"&quot;"),n=n.replace(e.helper.regexes.asteriskAndDash,e.helper.escapeCharactersCallback),o+=' title="'+n+'"'),o+=">"+k+"</a>"};return a=a.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,d),a=a.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,d),a=a.replace(/(\[([^\[\]]+)])()()()()()/g,d),b.ghMentions&&(a=a.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(a,c,d,f,g){if("\\"===d)return c+f;if(!e.helper.isString(b.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var h=b.ghMentionsLink.replace(/\{u}/g,g);return c+'<a href="'+h+'">'+f+"</a>"})),a=c.converter._dispatch("anchors.after",a,b,c)}),e.subParser("autoLinks",function(a,b,c){"use strict";function d(a,c,d,e,f){var g=c,h="";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),b.excludeTrailingPunctuationFromURLs&&f&&(h=f),'<a href="'+c+'">'+g+"</a>"+h}function f(a,d,f){var g="mailto:";return d=d||"",f=e.subParser("unescapeSpecialChars")(f,b,c),b.encodeEmails?(g=e.helper.encodeEmailAddress(g+f),f=e.helper.encodeEmailAddress(f)):g+=f,d+'<a href="'+g+'">'+f+"</a>"}a=c.converter._dispatch("autoLinks.before",a,b,c);var g=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,h=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,j=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,k=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return a=a.replace(i,d),a=a.replace(k,f),b.simplifiedAutoLink&&(a=b.excludeTrailingPunctuationFromURLs?a.replace(h,d):a.replace(g,d),a=a.replace(j,f)),a=c.converter._dispatch("autoLinks.after",a,b,c)}),e.subParser("blockGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("blockGamut.before",a,b,c),a=e.subParser("blockQuotes")(a,b,c),a=e.subParser("headers")(a,b,c),a=e.subParser("horizontalRule")(a,b,c),a=e.subParser("lists")(a,b,c),a=e.subParser("codeBlocks")(a,b,c),a=e.subParser("tables")(a,b,c),a=e.subParser("hashHTMLBlocks")(a,b,c),a=e.subParser("paragraphs")(a,b,c),a=c.converter._dispatch("blockGamut.after",a,b,c)}),e.subParser("blockQuotes",function(a,b,c){"use strict";return a=c.converter._dispatch("blockQuotes.before",a,b,c),a=a.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,d){var f=d;return f=f.replace(/^[ \t]*>[ \t]?/gm,"¨0"),f=f.replace(/¨0/g,""),f=f.replace(/^[ \t]+$/gm,""),f=e.subParser("githubCodeBlocks")(f,b,c),f=e.subParser("blockGamut")(f,b,c),f=f.replace(/(^|\n)/g,"$1  "),f=f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"¨0"),c=c.replace(/¨0/g,"")}),e.subParser("hashBlock")("<blockquote>\n"+f+"\n</blockquote>",b,c)}),a=c.converter._dispatch("blockQuotes.after",a,b,c)}),e.subParser("codeBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("codeBlocks.before",a,b,c),a+="¨0";var d=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return a=a.replace(d,function(a,d,f){var g=d,h=f,i="\n";return g=e.subParser("outdent")(g,b,c),g=e.subParser("encodeCode")(g,b,c),g=e.subParser("detab")(g,b,c),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),b.omitExtraWLInCodeBlocks&&(i=""),g="<pre><code>"+g+i+"</code></pre>",e.subParser("hashBlock")(g,b,c)+h}),a=a.replace(/¨0/,""),a=c.converter._dispatch("codeBlocks.after",a,b,c)}),e.subParser("codeSpans",function(a,b,c){"use strict";return a=c.converter._dispatch("codeSpans.before",a,b,c),"undefined"==typeof a&&(a=""),a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,d,f,g){var h=g;return h=h.replace(/^([ \t]*)/g,""),h=h.replace(/[ \t]*$/g,""),h=e.subParser("encodeCode")(h,b,c),d+"<code>"+h+"</code>"}),a=c.converter._dispatch("codeSpans.after",a,b,c)}),e.subParser("detab",function(a,b,c){"use strict";return a=c.converter._dispatch("detab.before",a,b,c),a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"¨A¨B"),a=a.replace(/¨B(.+?)¨A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;e<d;e++)c+=" ";return c}),a=a.replace(/¨A/g,"    "),a=a.replace(/¨B/g,""),a=c.converter._dispatch("detab.after",a,b,c)}),e.subParser("encodeAmpsAndAngles",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeAmpsAndAngles.before",a,b,c),a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?$!])/gi,"&lt;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=c.converter._dispatch("encodeAmpsAndAngles.after",a,b,c)}),e.subParser("encodeBackslashEscapes",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeBackslashEscapes.before",a,b,c),a=a.replace(/\\(\\)/g,e.helper.escapeCharactersCallback),a=a.replace(/\\([`*_{}\[\]()>#+.!~=-])/g,e.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeBackslashEscapes.after",a,b,c)}),e.subParser("encodeCode",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeCode.before",a,b,c),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,e.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeCode.after",a,b,c)}),e.subParser("escapeSpecialCharsWithinTagAttributes",function(a,b,c){"use strict";a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",a,b,c);var d=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(d,function(a){return a.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=])/g,e.helper.escapeCharactersCallback)}),a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",a,b,c)}),e.subParser("githubCodeBlocks",function(a,b,c){"use strict";return b.ghCodeBlocks?(a=c.converter._dispatch("githubCodeBlocks.before",a,b,c),a+="¨0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,d,f){var g=b.omitExtraWLInCodeBlocks?"":"\n";return f=e.subParser("encodeCode")(f,b,c),f=e.subParser("detab")(f,b,c),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(d?' class="'+d+" language-"+d+'"':"")+">"+f+g+"</code></pre>",f=e.subParser("hashBlock")(f,b,c),"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:f})-1)+"G\n\n"}),a=a.replace(/¨0/,""),c.converter._dispatch("githubCodeBlocks.after",a,b,c)):a}),e.subParser("hashBlock",function(a,b,c){"use strict";return a=c.converter._dispatch("hashBlock.before",a,b,c),a=a.replace(/(^\n+|\n+$)/g,""),a="\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n",a=c.converter._dispatch("hashBlock.after",a,b,c)}),e.subParser("hashCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashCodeTags.before",a,b,c);var d=function(a,d,f,g){var h=f+e.subParser("encodeCode")(d,b,c)+g;return"¨C"+(c.gHtmlSpans.push(h)-1)+"C"};return a=e.helper.replaceRecursiveRegExp(a,d,"<code\\b[^>]*>","</code>","gim"),a=c.converter._dispatch("hashCodeTags.after",a,b,c)}),e.subParser("hashElement",function(a,b,c){"use strict";return function(a,b){var d=b;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n¨K"+(c.gHtmlBlocks.push(d)-1)+"K\n\n"}}),e.subParser("hashHTMLBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("hashHTMLBlocks.before",a,b,c);for(var d=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],f=function(a,b,d,e){var f=a;return d.search(/\bmarkdown\b/)!==-1&&(f=d+c.converter.makeHtml(b)+e),"\n\n¨K"+(c.gHtmlBlocks.push(f)-1)+"K\n\n"},g=0;g<d.length;++g)a=e.helper.replaceRecursiveRegExp(a,f,"^ {0,3}<"+d[g]+"\\b[^>]*>","</"+d[g]+">","gim");return a=a.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,e.subParser("hashElement")(a,b,c)),a=e.helper.replaceRecursiveRegExp(a,function(a){return"\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"},"^ {0,3}<!--","-->","gm"),a=a.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,e.subParser("hashElement")(a,b,c)),a=c.converter._dispatch("hashHTMLBlocks.after",a,b,c)}),e.subParser("hashHTMLSpans",function(a,b,c){"use strict";function d(a){return"¨C"+(c.gHtmlSpans.push(a)-1)+"C"}return a=c.converter._dispatch("hashHTMLSpans.before",a,b,c),a=a.replace(/<[^>]+?\/>/gi,function(a){return d(a)}),a=a.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<[^>]+?>/gi,function(a){return d(a)}),a=c.converter._dispatch("hashHTMLSpans.after",a,b,c)}),e.subParser("unhashHTMLSpans",function(a,b,c){"use strict";a=c.converter._dispatch("unhashHTMLSpans.before",a,b,c);for(var d=0;d<c.gHtmlSpans.length;++d){for(var e=c.gHtmlSpans[d],f=0;/¨C(\d+)C/.test(e);){var g=RegExp.$1;if(e=e.replace("¨C"+g+"C",c.gHtmlSpans[g]),10===f)break;++f}a=a.replace("¨C"+d+"C",e)}return a=c.converter._dispatch("unhashHTMLSpans.after",a,b,c)}),e.subParser("hashPreCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashPreCodeTags.before",a,b,c);var d=function(a,d,f,g){var h=f+e.subParser("encodeCode")(d,b,c)+g;return"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:h})-1)+"G\n\n"};return a=e.helper.replaceRecursiveRegExp(a,d,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),a=c.converter._dispatch("hashPreCodeTags.after",a,b,c)}),e.subParser("headers",function(a,b,c){"use strict";function d(a){var d;return d=e.helper.isString(b.prefixHeaderId)?b.prefixHeaderId+a:b.prefixHeaderId===!0?"section "+a:a,d=g?d.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():d.replace(/[^\w]/g,"").toLowerCase(),c.hashLinkCounts[d]?d=d+"-"+c.hashLinkCounts[d]++:c.hashLinkCounts[d]=1,d}a=c.converter._dispatch("headers.before",a,b,c);var f=isNaN(parseInt(b.headerLevelStart))?1:parseInt(b.headerLevelStart),g=b.ghCompatibleHeaderId,h=b.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=b.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;a=a.replace(h,function(a,g){var h=e.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+d(g)+'"',j=f,k="<h"+j+i+">"+h+"</h"+j+">";return e.subParser("hashBlock")(k,b,c)}),a=a.replace(i,function(a,g){var h=e.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+d(g)+'"',j=f+1,k="<h"+j+i+">"+h+"</h"+j+">";return e.subParser("hashBlock")(k,b,c)});var j=b.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return a=a.replace(j,function(a,g,h){var i=e.subParser("spanGamut")(h,b,c),j=b.noHeaderId?"":' id="'+d(h)+'"',k=f-1+g.length,l="<h"+k+j+">"+i+"</h"+k+">";return e.subParser("hashBlock")(l,b,c)}),a=c.converter._dispatch("headers.after",a,b,c)}),e.subParser("horizontalRule",function(a,b,c){"use strict";a=c.converter._dispatch("horizontalRule.before",a,b,c);var d=e.subParser("hashBlock")("<hr />",b,c);return a=a.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,d),a=a.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,d),a=a.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,d),a=c.converter._dispatch("horizontalRule.after",a,b,c)}),e.subParser("images",function(a,b,c){"use strict";function d(a,b,d,f,g,h,i,j){var k=c.gUrls,l=c.gTitles,m=c.gDimensions;if(d=d.toLowerCase(),j||(j=""),""===f||null===f){if(""!==d&&null!==d||(d=b.toLowerCase().replace(/ ?\n/g," ")),f="#"+d,e.helper.isUndefined(k[d]))return a;f=k[d],e.helper.isUndefined(l[d])||(j=l[d]),e.helper.isUndefined(m[d])||(g=m[d].width,h=m[d].height)}b=b.replace(/"/g,"&quot;").replace(e.helper.regexes.asteriskAndDash,e.helper.escapeCharactersCallback),f=f.replace(e.helper.regexes.asteriskAndDash,e.helper.escapeCharactersCallback);var n='<img src="'+f+'" alt="'+b+'"';return j&&(j=j.replace(/"/g,"&quot;").replace(e.helper.regexes.asteriskAndDash,e.helper.escapeCharactersCallback),n+=' title="'+j+'"'),g&&h&&(g="*"===g?"auto":g,h="*"===h?"auto":h,n+=' width="'+g+'"',n+=' height="'+h+'"'),n+=" />"}a=c.converter._dispatch("images.before",a,b,c);var f=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,g=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return a=a.replace(g,d),a=a.replace(f,d),a=c.converter._dispatch("images.after",a,b,c)}),e.subParser("italicsAndBold",function(a,b,c){"use strict";return a=c.converter._dispatch("italicsAndBold.before",a,b,c),b.literalMidWordUnderscores?(a=a.replace(/\b___(\S[\s\S]*)___\b/g,"<strong><em>$1</em></strong>"),a=a.replace(/\b__(\S[\s\S]*)__\b/g,"<strong>$1</strong>"),a=a.replace(/\b_(\S[\s\S]*?)_\b/g,"<em>$1</em>")):(a=a.replace(/___(\S[\s\S]*?)___/g,function(a,b){return/\S$/.test(b)?"<strong><em>"+b+"</em></strong>":a}),a=a.replace(/__(\S[\s\S]*?)__/g,function(a,b){return/\S$/.test(b)?"<strong>"+b+"</strong>":a}),a=a.replace(/_([^\s_][\s\S]*?)_/g,function(a,b){return/\S$/.test(b)?"<em>"+b+"</em>":a})),a=a.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(a,b){return/\S$/.test(b)?"<strong><em>"+b+"</em></strong>":a}),a=a.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(a,b){return/\S$/.test(b)?"<strong>"+b+"</strong>":a}),a=a.replace(/\*([^\s*][\s\S]*?)\*/g,function(a,b){return/\S$/.test(b)?"<em>"+b+"</em>":a}),a=c.converter._dispatch("italicsAndBold.after",a,b,c)}),e.subParser("lists",function(a,b,c){"use strict";function d(a,d){c.gListLevel++,a=a.replace(/\n{2,}$/,"\n"),a+="¨0";var f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!¨0)/.test(a);return b.disableForced4SpacesIndentedSublists&&(f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),a=a.replace(f,function(a,d,f,h,i,j,k){k=k&&""!==k.trim();var l=e.subParser("outdent")(i,b,c),m="";return j&&b.tasklists&&(m=' class="task-list-item" style="list-style-type: none;"',l=l.replace(/^[ \t]*\[(x|X| )?]/m,function(){var a='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return k&&(a+=" checked"),a+=">"})),l=l.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(a){return"¨A"+a}),d||l.search(/\n{2,}/)>-1?(l=e.subParser("githubCodeBlocks")(l,b,c),l=e.subParser("blockGamut")(l,b,c)):(l=e.subParser("lists")(l,b,c),l=l.replace(/\n$/,""),l=e.subParser("hashHTMLBlocks")(l,b,c),l=l.replace(/\n\n+/g,"\n\n"),l=l.replace(/\n\n/g,"¨B"),l=g?e.subParser("paragraphs")(l,b,c):e.subParser("spanGamut")(l,b,c),l=l.replace(/¨B/g,"\n\n")),l=l.replace("¨A",""),l="<li"+m+">"+l+"</li>\n"}),a=a.replace(/¨0/g,""),c.gListLevel--,d&&(a=a.replace(/\s+$/,"")),a}function f(a,c,e){var f=b.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=b.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h="ul"===c?f:g,i="";return a.search(h)!==-1?!function a(b){var j=b.search(h);j!==-1?(i+="\n<"+c+">\n"+d(b.slice(0,j),!!e)+"</"+c+">\n",c="ul"===c?"ol":"ul",h="ul"===c?f:g,a(b.slice(j))):i+="\n<"+c+">\n"+d(b,!!e)+"</"+c+">\n"}(a):i="\n<"+c+">\n"+d(a,!!e)+"</"+c+">\n",i}return a=c.converter._dispatch("lists.before",a,b,c),a+="¨0",a=c.gListLevel?a.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c){var d=c.search(/[*+-]/g)>-1?"ul":"ol";return f(b,d,!0)}):a.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c,d){var e=d.search(/[*+-]/g)>-1?"ul":"ol";return f(c,e,!1)}),a=a.replace(/¨0/,""),a=c.converter._dispatch("lists.after",a,b,c)}),e.subParser("outdent",function(a,b,c){"use strict";return a=c.converter._dispatch("outdent.before",a,b,c),a=a.replace(/^(\t|[ ]{1,4})/gm,"¨0"),a=a.replace(/¨0/g,""),a=c.converter._dispatch("outdent.after",a,b,c)}),e.subParser("paragraphs",function(a,b,c){"use strict";a=c.converter._dispatch("paragraphs.before",a,b,c),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var d=a.split(/\n{2,}/g),f=[],g=d.length,h=0;h<g;h++){var i=d[h];i.search(/¨(K|G)(\d+)\1/g)>=0?f.push(i):i.search(/\S/)>=0&&(i=e.subParser("spanGamut")(i,b,c),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",f.push(i))}for(g=f.length,h=0;h<g;h++){for(var j="",k=f[h],l=!1;/¨(K|G)(\d+)\1/.test(k);){var m=RegExp.$1,n=RegExp.$2;j="K"===m?c.gHtmlBlocks[n]:l?e.subParser("encodeCode")(c.ghCodeBlocks[n].text,b,c):c.ghCodeBlocks[n].codeblock,j=j.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,j),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(l=!0)}f[h]=k}return a=f.join("\n"),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c.converter._dispatch("paragraphs.after",a,b,c)}),e.subParser("runExtension",function(a,b,c,d){"use strict";if(a.filter)b=a.filter(b,d.converter,c);else if(a.regex){var e=a.regex;e instanceof RegExp||(e=new RegExp(e,"g")),b=b.replace(e,a.replace)}return b}),e.subParser("spanGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("spanGamut.before",a,b,c),a=e.subParser("codeSpans")(a,b,c),a=e.subParser("escapeSpecialCharsWithinTagAttributes")(a,b,c),a=e.subParser("encodeBackslashEscapes")(a,b,c),a=e.subParser("images")(a,b,c),a=e.subParser("anchors")(a,b,c),a=e.subParser("autoLinks")(a,b,c),a=e.subParser("italicsAndBold")(a,b,c),a=e.subParser("strikethrough")(a,b,c),a=e.subParser("hashHTMLSpans")(a,b,c),a=e.subParser("encodeAmpsAndAngles")(a,b,c),a=b.simpleLineBreaks?a.replace(/\n/g,"<br />\n"):a.replace(/  +\n/g,"<br />\n"),a=c.converter._dispatch("spanGamut.after",a,b,c)}),e.subParser("strikethrough",function(a,b,c){"use strict";return b.strikethrough&&(a=c.converter._dispatch("strikethrough.before",a,b,c),
a=a.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,"<del>$1</del>"),a=c.converter._dispatch("strikethrough.after",a,b,c)),a}),e.subParser("stripLinkDefinitions",function(a,b,c){"use strict";var d=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;return a+="¨0",a=a.replace(d,function(a,d,f,g,h,i,j){return d=d.toLowerCase(),c.gUrls[d]=e.subParser("encodeAmpsAndAngles")(f,b,c),i?i+j:(j&&(c.gTitles[d]=j.replace(/"|'/g,"&quot;")),b.parseImgDimensions&&g&&h&&(c.gDimensions[d]={width:g,height:h}),"")}),a=a.replace(/¨0/,"")}),e.subParser("tables",function(a,b,c){"use strict";function d(a){return/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""}function f(a,d){var f="";return a=a.trim(),b.tableHeaderId&&(f=' id="'+a.replace(/ /g,"_").toLowerCase()+'"'),a=e.subParser("spanGamut")(a,b,c),"<th"+f+d+">"+a+"</th>\n"}function g(a,d){var f=e.subParser("spanGamut")(a,b,c);return"<td"+d+">"+f+"</td>\n"}function h(a,b){for(var c="<table>\n<thead>\n<tr>\n",d=a.length,e=0;e<d;++e)c+=a[e];for(c+="</tr>\n</thead>\n<tbody>\n",e=0;e<b.length;++e){c+="<tr>\n";for(var f=0;f<d;++f)c+=b[e][f];c+="</tr>\n"}return c+="</tbody>\n</table>\n"}if(!b.tables)return a;var i=/^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;return a=c.converter._dispatch("tables.before",a,b,c),a=a.replace(i,function(a){var b,c=a.split("\n");for(b=0;b<c.length;++b)/^ {0,3}\|/.test(c[b])&&(c[b]=c[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[b])&&(c[b]=c[b].replace(/\|[ \t]*$/,""));var i=c[0].split("|").map(function(a){return a.trim()}),j=c[1].split("|").map(function(a){return a.trim()}),k=[],l=[],m=[],n=[];for(c.shift(),c.shift(),b=0;b<c.length;++b)""!==c[b].trim()&&k.push(c[b].split("|").map(function(a){return a.trim()}));if(i.length<j.length)return a;for(b=0;b<j.length;++b)m.push(d(j[b]));for(b=0;b<i.length;++b)e.helper.isUndefined(m[b])&&(m[b]=""),l.push(f(i[b],m[b]));for(b=0;b<k.length;++b){for(var o=[],p=0;p<l.length;++p)e.helper.isUndefined(k[b][p]),o.push(g(k[b][p],m[p]));n.push(o)}return h(l,n)}),a=c.converter._dispatch("tables.after",a,b,c)}),e.subParser("unescapeSpecialChars",function(a,b,c){"use strict";return a=c.converter._dispatch("unescapeSpecialChars.before",a,b,c),a=a.replace(/¨E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a=c.converter._dispatch("unescapeSpecialChars.after",a,b,c)});var l=this;"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){"use strict";return e}):l.showdown=e}).call(this);
//# sourceMappingURL=showdown.min.js.map
/*
* bootstrap-table - v1.8.1 - 2015-05-29
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2015 zhixin wen
* Licensed MIT License
*/
function alphanum(a,b){function c(a){for(var b,c,d=[],e=0,f=-1,g=0;b=(c=a.charAt(e++)).charCodeAt(0);){var h=46===b||b>=48&&57>=b;h!==g&&(d[++f]="",g=h),d[f]+=c}return d}var d=c(a),e=c(b);for(x=0;d[x]&&e[x];x++)if(d[x]!==e[x]){var f=Number(d[x]),g=Number(e[x]);return f==d[x]&&g==e[x]?f-g:d[x]>e[x]?1:-1}return d.length-e.length}!function(a){"use strict";var b=37,c=null,d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7XQMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII= ",g=function(a){var b=arguments,c=!0,d=1;return a=a.replace(/%s/g,function(){var a=b[d++];return"undefined"==typeof a?(c=!1,""):a}),c?a:""},h=function(b,c,d,e){var f="";return a.each(b,function(a,b){return b[c]===e?(f=b[d],!1):!0}),f},i=function(b,c){var d=-1;return a.each(b,function(a,b){return b.field===c?(d=a,!1):!0}),d},j=function(){if(null===c){var b,d,e=a("<p/>").addClass("fixed-table-scroll-inner"),f=a("<div/>").addClass("fixed-table-scroll-outer");f.append(e),a("body").append(f),b=e[0].offsetWidth,f.css("overflow","scroll"),d=e[0].offsetWidth,b===d&&(d=f[0].clientWidth),f.remove(),c=b-d}return c},k=function(b,c,d,e){var f=c;if("string"==typeof c){var h=c.split(".");h.length>1?(f=window,a.each(h,function(a,b){f=f[b]})):f=window[c]}return"object"==typeof f?f:"function"==typeof f?f.apply(b,d):!f&&"string"==typeof c&&g.apply(this,[c].concat(d))?g.apply(this,[c].concat(d)):e},l=function(a){return"string"==typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):a},m=function(b){var c=0;return b.children().each(function(){c<a(this).outerHeight(!0)&&(c=a(this).outerHeight(!0))}),c},n=function(a){for(var b in a){var c=b.split(/(?=[A-Z])/).join("-").toLowerCase();c!==b&&(a[c]=a[b],delete a[b])}return a},o=function(b,c){this.options=c,this.$el=a(b),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0,this.init()};o.DEFAULTS={classes:"table table-hover",height:void 0,undefinedText:"-",sortName:void 0,sortOrder:"asc",striped:!1,columns:[],data:[],method:"get",url:void 0,ajax:void 0,cache:!0,contentType:"application/json",dataType:"json",ajaxOptions:{},queryParams:function(a){return a},queryParamsType:"limit",responseHandler:function(a){return a},pagination:!1,sidePagination:"client",totalRows:0,pageNumber:1,pageSize:10,pageList:[10,25,50,100],paginationHAlign:"right",paginationVAlign:"bottom",paginationDetailHAlign:"left",paginationFirstText:"&laquo;",paginationPreText:"&lsaquo;",paginationNextText:"&rsaquo;",paginationLastText:"&raquo;",search:!1,searchAlign:"right",selectItemName:"btSelectItem",showHeader:!0,showFooter:!1,showColumns:!1,showPaginationSwitch:!1,showRefresh:!1,showToggle:!1,buttonsAlign:"right",smartDisplay:!0,minimumCountColumns:1,idField:void 0,uniqueId:void 0,cardView:!1,detailView:!1,detailFormatter:function(){return""},trimOnSearch:!0,clickToSelect:!1,singleSelect:!1,toolbar:void 0,toolbarAlign:"left",checkboxHeader:!0,sortable:!0,maintainSelected:!1,searchTimeOut:500,searchText:"",iconSize:void 0,iconsPrefix:"glyphicon",icons:{paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",toggle:"glyphicon-list-alt icon-list-alt",columns:"glyphicon-th icon-th"},rowStyle:function(){return{}},rowAttributes:function(){return{}},onAll:function(){return!1},onClickCell:function(){return!1},onDblClickCell:function(){return!1},onClickRow:function(){return!1},onDblClickRow:function(){return!1},onSort:function(){return!1},onCheck:function(){return!1},onUncheck:function(){return!1},onCheckAll:function(){return!1},onUncheckAll:function(){return!1},onCheckSome:function(){return!1},onUncheckSome:function(){return!1},onLoadSuccess:function(){return!1},onLoadError:function(){return!1},onColumnSwitch:function(){return!1},onPageChange:function(){return!1},onSearch:function(){return!1},onToggle:function(){return!1},onPreBody:function(){return!1},onPostBody:function(){return!1},onPostHeader:function(){return!1},onExpandRow:function(){return!1},onCollapseRow:function(){return!1}},o.LOCALES=[],o.LOCALES["en-US"]={formatLoadingMessage:function(){return"Loading, please wait..."},formatRecordsPerPage:function(a){return g("%s records per page",a)},formatShowingRows:function(a,b,c){return g("Showing %s to %s of %s rows",a,b,c)},formatSearch:function(){return"Search"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatRefresh:function(){return"Refresh"},formatToggle:function(){return"Toggle"},formatColumns:function(){return"Columns"},formatAllRows:function(){return"All"}},a.extend(o.DEFAULTS,o.LOCALES["en-US"]),o.COLUMN_DEFAULTS={radio:!1,checkbox:!1,checkboxEnabled:!0,field:void 0,title:void 0,"class":void 0,align:void 0,halign:void 0,falign:void 0,valign:void 0,width:void 0,sortable:!1,order:"asc",visible:!0,switchable:!0,clickToSelect:!0,formatter:void 0,footerFormatter:void 0,events:void 0,sorter:void 0,sortName:void 0,cellStyle:void 0,searchable:!0,cardVisible:!0},o.EVENTS={"all.bs.table":"onAll","click-cell.bs.table":"onClickCell","dbl-click-cell.bs.table":"onDblClickCell","click-row.bs.table":"onClickRow","dbl-click-row.bs.table":"onDblClickRow","sort.bs.table":"onSort","check.bs.table":"onCheck","uncheck.bs.table":"onUncheck","check-all.bs.table":"onCheckAll","uncheck-all.bs.table":"onUncheckAll","check-some.bs.table":"onCheckSome","uncheck-some.bs.table":"onUncheckSome","load-success.bs.table":"onLoadSuccess","load-error.bs.table":"onLoadError","column-switch.bs.table":"onColumnSwitch","page-change.bs.table":"onPageChange","search.bs.table":"onSearch","toggle.bs.table":"onToggle","pre-body.bs.table":"onPreBody","post-body.bs.table":"onPostBody","post-header.bs.table":"onPostHeader","expand-row.bs.table":"onExpandRow","collapse-row.bs.table":"onCollapseRow"},o.prototype.init=function(){this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initFooter(),this.initToolbar(),this.initPagination(),this.initBody(),this.initServer()},o.prototype.initContainer=function(){this.$container=a(['<div class="bootstrap-table">','<div class="fixed-table-toolbar"></div>',"top"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?'<div class="fixed-table-pagination" style="clear: both;"></div>':"",'<div class="fixed-table-container">','<div class="fixed-table-header"><table></table></div>','<div class="fixed-table-body">','<div class="fixed-table-loading">',this.options.formatLoadingMessage(),"</div>","</div>",'<div class="fixed-table-footer"><table><tr></tr></table></div>',"bottom"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?'<div class="fixed-table-pagination"></div>':"","</div>","</div>"].join("")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$container.find(".fixed-table-footer"),this.$toolbar=this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after('<div class="clearfix"></div>'),this.$el.addClass(this.options.classes),this.options.striped&&this.$el.addClass("table-striped"),-1!==a.inArray("table-no-bordered",this.options.classes.split(" "))&&this.$tableContainer.addClass("table-no-bordered")},o.prototype.initTable=function(){var b=this,c=[],d=[];this.$header=this.$el.find("thead"),this.$header.length||(this.$header=a("<thead></thead>").appendTo(this.$el)),this.$header.find("tr").length||this.$header.append("<tr></tr>"),this.$header.find("th").each(function(){var b=a.extend({},{title:a(this).html(),"class":a(this).attr("class")},a(this).data());c.push(b)}),this.options.columns=a.extend(!0,[],c,this.options.columns),a.each(this.options.columns,function(c,d){b.options.columns[c]=a.extend({},o.COLUMN_DEFAULTS,{field:c},d)}),this.options.data.length||(this.$el.find("tbody tr").each(function(){var c={};c._id=a(this).attr("id"),c._class=a(this).attr("class"),c._data=n(a(this).data()),a(this).find("td").each(function(d){var e=b.options.columns[d].field;c[e]=a(this).html(),c["_"+e+"_id"]=a(this).attr("id"),c["_"+e+"_class"]=a(this).attr("class"),c["_"+e+"_rowspan"]=a(this).attr("rowspan"),c["_"+e+"_data"]=n(a(this).data())}),d.push(c)}),this.options.data=d)},o.prototype.initHeader=function(){var c=this,d=[],e=[];this.header={fields:[],styles:[],classes:[],formatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],clickToSelects:[],searchables:[]},!this.options.cardView&&this.options.detailView&&(e.push('<th class="detail"><div class="fht-cell"></div></th>'),d.push({})),a.each(this.options.columns,function(a,b){var f="",h="",i="",j="",k=g(' class="%s"',b["class"]),l=(c.options.sortOrder||b.order,"px"),m=b.width;return b.visible?void((!c.options.cardView||b.cardVisible)&&(void 0===b.width||c.options.cardView||"string"==typeof b.width&&-1!==b.width.indexOf("%")&&(l="%"),b.width&&"string"==typeof b.width&&(m=b.width.replace("%","").replace("px","")),h=g("text-align: %s; ",b.halign?b.halign:b.align),i=g("text-align: %s; ",b.align),j=g("vertical-align: %s; ",b.valign),j+=g("width: %s%s; ",b.checkbox||b.radio?36:m,l),d.push(b),c.header.fields.push(b.field),c.header.styles.push(i+j),c.header.classes.push(k),c.header.formatters.push(b.formatter),c.header.events.push(b.events),c.header.sorters.push(b.sorter),c.header.sortNames.push(b.sortName),c.header.cellStyles.push(b.cellStyle),c.header.clickToSelects.push(b.clickToSelect),c.header.searchables.push(b.searchable),e.push("<th",b.checkbox||b.radio?g(' class="bs-checkbox %s"',b["class"]||""):k,g(' style="%s"',h+j),">"),e.push(g('<div class="th-inner %s">',c.options.sortable&&b.sortable?"sortable":"")),f=b.title,b.checkbox&&(!c.options.singleSelect&&c.options.checkboxHeader&&(f='<input name="btSelectAll" type="checkbox" />'),c.header.stateField=b.field),b.radio&&(f="",c.header.stateField=b.field,c.options.singleSelect=!0),e.push(f),e.push("</div>"),e.push('<div class="fht-cell"></div>'),e.push("</div>"),e.push("</th>"))):void(b.field===c.options.sortName&&c.header.fields.push(b.field))}),this.$header.find("tr").html(e.join("")),this.$header.find("th").each(function(b){a(this).data(d[b])}),this.$container.off("click",".th-inner").on("click",".th-inner",function(b){c.options.sortable&&a(this).parent().data().sortable&&c.onSort(b)}),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",b+"px"),this.getCaretHtml()),this.$selectAll=this.$header.find('[name="btSelectAll"]'),this.$container.off("click",'[name="btSelectAll"]').on("click",'[name="btSelectAll"]',function(){var b=a(this).prop("checked");c[b?"checkAll":"uncheckAll"]()})},o.prototype.initFooter=function(){!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()},o.prototype.initData=function(a,b){this.data="append"===b?this.data.concat(a):"prepend"===b?[].concat(a).concat(this.data):a||this.options.data,this.options.data="append"===b?this.options.data.concat(a):"prepend"===b?[].concat(a).concat(this.options.data):this.data,"server"!==this.options.sidePagination&&this.initSort()},o.prototype.initSort=function(){var b=this,c=this.options.sortName,d="desc"===this.options.sortOrder?-1:1,e=a.inArray(this.options.sortName,this.header.fields);-1!==e&&this.data.sort(function(f,g){b.header.sortNames[e]&&(c=b.header.sortNames[e]);var h=f[c],i=g[c],j=k(b.header,b.header.sorters[e],[h,i]);return void 0!==j?d*j:((void 0===h||null===h)&&(h=""),(void 0===i||null===i)&&(i=""),a.isNumeric(h)&&a.isNumeric(i)?(h=parseFloat(h),i=parseFloat(i),i>h?-1*d:d):h===i?0:("string"!=typeof h&&(h=h.toString()),-1===h.localeCompare(i)?-1*d:d))})},o.prototype.onSort=function(b){var c=a(b.currentTarget).parent(),d=this.$header.find("th").eq(c.index());return this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===c.data("field")?this.options.sortOrder="asc"===this.options.sortOrder?"desc":"asc":(this.options.sortName=c.data("field"),this.options.sortOrder="asc"===c.data("order")?"desc":"asc"),this.trigger("sort",this.options.sortName,this.options.sortOrder),c.add(d).data("order",this.options.sortOrder),this.getCaretHtml(),"server"===this.options.sidePagination?void this.initServer():(this.initSort(),void this.initBody())},o.prototype.initToolbar=function(){var b,c,d=this,e=[],f=0,h=0;this.$toolbar.html(""),"string"==typeof this.options.toolbar&&a(g('<div class="bars pull-%s"></div>',this.options.toolbarAlign)).appendTo(this.$toolbar).append(a(this.options.toolbar)),e=[g('<div class="columns columns-%s btn-group pull-%s">',this.options.buttonsAlign,this.options.buttonsAlign)],"string"==typeof this.options.icons&&(this.options.icons=k(null,this.options.icons)),this.options.showPaginationSwitch&&e.push(g('<button class="btn btn-default" type="button" name="paginationSwitch" title="%s">',this.options.formatPaginationSwitch()),g('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.paginationSwitchDown),"</button>"),this.options.showRefresh&&e.push(g('<button class="btn btn-default'+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+'" type="button" name="refresh" title="%s">',this.options.formatRefresh()),g('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.refresh),"</button>"),this.options.showToggle&&e.push(g('<button class="btn btn-default'+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+'" type="button" name="toggle" title="%s">',this.options.formatToggle()),g('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.toggle),"</button>"),this.options.showColumns&&(e.push(g('<div class="keep-open btn-group" title="%s">',this.options.formatColumns()),'<button type="button" class="btn btn-default'+(void 0==this.options.iconSize?"":" btn-"+this.options.iconSize)+' dropdown-toggle" data-toggle="dropdown">',g('<i class="%s %s"></i>',this.options.iconsPrefix,this.options.icons.columns),' <span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">'),a.each(this.options.columns,function(a,b){if(!(b.radio||b.checkbox||d.options.cardView&&!b.cardVisible)){var c=b.visible?' checked="checked"':"";b.switchable&&(e.push(g('<li><label><input type="checkbox" data-field="%s" value="%s"%s> %s</label></li>',b.field,a,c,b.title)),h++)}}),e.push("</ul>","</div>")),e.push("</div>"),(this.showToolbar||e.length>2)&&this.$toolbar.append(e.join("")),this.options.showPaginationSwitch&&this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click",a.proxy(this.togglePagination,this)),this.options.showRefresh&&this.$toolbar.find('button[name="refresh"]').off("click").on("click",a.proxy(this.refresh,this)),this.options.showToggle&&this.$toolbar.find('button[name="toggle"]').off("click").on("click",function(){d.toggleView()}),this.options.showColumns&&(b=this.$toolbar.find(".keep-open"),h<=this.options.minimumCountColumns&&b.find("input").prop("disabled",!0),b.find("li").off("click").on("click",function(a){a.stopImmediatePropagation()}),b.find("input").off("click").on("click",function(){var b=a(this);d.toggleColumn(i(d.options.columns,a(this).data("field")),b.prop("checked"),!1),d.trigger("column-switch",a(this).data("field"),b.prop("checked"))})),this.options.search&&(e=[],e.push('<div class="pull-'+this.options.searchAlign+' search">',g('<input class="form-control'+(void 0===this.options.iconSize?"":" input-"+this.options.iconSize)+'" type="text" placeholder="%s">',this.options.formatSearch()),"</div>"),this.$toolbar.append(e.join("")),c=this.$toolbar.find(".search input"),c.off("keyup drop").on("keyup drop",function(a){clearTimeout(f),f=setTimeout(function(){d.onSearch(a)},d.options.searchTimeOut)}),""!==this.options.searchText&&(c.val(this.options.searchText),clearTimeout(f),f=setTimeout(function(){c.trigger("keyup")},d.options.searchTimeOut)))},o.prototype.onSearch=function(b){var c=a.trim(a(b.currentTarget).val());this.options.trimOnSearch&&a(b.currentTarget).val()!==c&&a(b.currentTarget).val(c),c!==this.searchText&&(this.searchText=c,this.options.pageNumber=1,this.initSearch(),this.updatePagination(),this.trigger("search",c))},o.prototype.initSearch=function(){var b=this;if("server"!==this.options.sidePagination){var c=this.searchText&&this.searchText.toLowerCase(),d=a.isEmptyObject(this.filterColumns)?null:this.filterColumns;this.data=d?a.grep(this.options.data,function(a){for(var b in d)if(a[b]!==d[b])return!1;return!0}):this.options.data,this.data=c?a.grep(this.data,function(d,e){for(var f in d){f=a.isNumeric(f)?parseInt(f,10):f;var g=d[f],h=b.options.columns[i(b.options.columns,f)],j=a.inArray(f,b.header.fields);g=k(h,b.header.formatters[j],[g,d,e],g);var l=a.inArray(f,b.header.fields);if(-1!==l&&b.header.searchables[l]&&("string"==typeof g||"number"==typeof g)&&-1!==(g+"").toLowerCase().indexOf(c))return!0}return!1}):this.data}},o.prototype.initPagination=function(){if(!this.options.pagination)return void this.$pagination.hide();this.$pagination.show();var b,c,d,e,f,h,i,j,k,l=this,m=[],n=!1,o=this.getData();if("server"!==this.options.sidePagination&&(this.options.totalRows=o.length),this.totalPages=0,this.options.totalRows){if(this.options.pageSize===this.options.formatAllRows())this.options.pageSize=this.options.totalRows,n=!0;else if(this.options.pageSize===this.options.totalRows){var p="string"==typeof this.options.pageList?this.options.pageList.replace("[","").replace("]","").replace(/ /g,"").toLowerCase().split(","):this.options.pageList;p.indexOf(this.options.formatAllRows().toLowerCase())>-1&&(n=!0)}this.totalPages=~~((this.options.totalRows-1)/this.options.pageSize)+1,this.options.totalPages=this.totalPages}this.totalPages>0&&this.options.pageNumber>this.totalPages&&(this.options.pageNumber=this.totalPages),this.pageFrom=(this.options.pageNumber-1)*this.options.pageSize+1,this.pageTo=this.options.pageNumber*this.options.pageSize,this.pageTo>this.options.totalRows&&(this.pageTo=this.options.totalRows),m.push('<div class="pull-'+this.options.paginationDetailHAlign+' pagination-detail">','<span class="pagination-info">',this.options.formatShowingRows(this.pageFrom,this.pageTo,this.options.totalRows),"</span>"),m.push('<span class="page-list">');var q=[g('<span class="btn-group %s">',"top"===this.options.paginationVAlign||"both"===this.options.paginationVAlign?"dropdown":"dropup"),'<button type="button" class="btn btn-default '+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+' dropdown-toggle" data-toggle="dropdown">','<span class="page-size">',n?this.options.formatAllRows():this.options.pageSize,"</span>",' <span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">'],r=this.options.pageList;if("string"==typeof this.options.pageList){var s=this.options.pageList.replace("[","").replace("]","").replace(/ /g,"").split(",");r=[],a.each(s,function(a,b){r.push(b.toUpperCase()===l.options.formatAllRows().toUpperCase()?l.options.formatAllRows():+b)})}for(a.each(r,function(a,b){if(!l.options.smartDisplay||0===a||r[a-1]<=l.options.totalRows){var c;c=n?b===l.options.formatAllRows()?' class="active"':"":b===l.options.pageSize?' class="active"':"",q.push(g('<li%s><a href="javascript:void(0)">%s</a></li>',c,b))}}),q.push("</ul></span>"),m.push(this.options.formatRecordsPerPage(q.join(""))),m.push("</span>"),m.push("</div>",'<div class="pull-'+this.options.paginationHAlign+' pagination">','<ul class="pagination'+(void 0===this.options.iconSize?"":" pagination-"+this.options.iconSize)+'">','<li class="page-first"><a href="javascript:void(0)">'+this.options.paginationFirstText+"</a></li>",'<li class="page-pre"><a href="javascript:void(0)">'+this.options.paginationPreText+"</a></li>"),this.totalPages<5?(c=1,d=this.totalPages):(c=this.options.pageNumber-2,d=c+4,1>c&&(c=1,d=5),d>this.totalPages&&(d=this.totalPages,c=d-4)),b=c;d>=b;b++)m.push('<li class="page-number'+(b===this.options.pageNumber?" active":"")+'">','<a href="javascript:void(0)">',b,"</a>","</li>");m.push('<li class="page-next"><a href="javascript:void(0)">'+this.options.paginationNextText+"</a></li>",'<li class="page-last"><a href="javascript:void(0)">'+this.options.paginationLastText+"</a></li>","</ul>","</div>"),this.$pagination.html(m.join("")),e=this.$pagination.find(".page-list a"),f=this.$pagination.find(".page-first"),h=this.$pagination.find(".page-pre"),i=this.$pagination.find(".page-next"),j=this.$pagination.find(".page-last"),k=this.$pagination.find(".page-number"),this.options.pageNumber<=1&&(f.addClass("disabled"),h.addClass("disabled")),this.options.pageNumber>=this.totalPages&&(i.addClass("disabled"),j.addClass("disabled")),this.options.smartDisplay&&(this.totalPages<=1&&this.$pagination.find("div.pagination").hide(),(r.length<2||this.options.totalRows<=r[0])&&this.$pagination.find("span.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"]()),n&&(this.options.pageSize=this.options.formatAllRows()),e.off("click").on("click",a.proxy(this.onPageListChange,this)),f.off("click").on("click",a.proxy(this.onPageFirst,this)),h.off("click").on("click",a.proxy(this.onPagePre,this)),i.off("click").on("click",a.proxy(this.onPageNext,this)),j.off("click").on("click",a.proxy(this.onPageLast,this)),k.off("click").on("click",a.proxy(this.onPageNumber,this))},o.prototype.updatePagination=function(b){b&&a(b.currentTarget).hasClass("disabled")||(this.options.maintainSelected||this.resetRows(),this.initPagination(),"server"===this.options.sidePagination?this.initServer():this.initBody(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize))},o.prototype.onPageListChange=function(b){var c=a(b.currentTarget);c.parent().addClass("active").siblings().removeClass("active"),this.options.pageSize=c.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+c.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(b)},o.prototype.onPageFirst=function(a){this.options.pageNumber=1,this.updatePagination(a)},o.prototype.onPagePre=function(a){this.options.pageNumber--,this.updatePagination(a)},o.prototype.onPageNext=function(a){this.options.pageNumber++,this.updatePagination(a)},o.prototype.onPageLast=function(a){this.options.pageNumber=this.totalPages,this.updatePagination(a)},o.prototype.onPageNumber=function(b){this.options.pageNumber!==+a(b.currentTarget).text()&&(this.options.pageNumber=+a(b.currentTarget).text(),this.updatePagination(b))},o.prototype.initBody=function(b){var c=this,d=[],e=this.getData();this.trigger("pre-body",e),this.$body=this.$el.find("tbody"),this.$body.length||(this.$body=a("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=e.length);for(var f=this.pageFrom-1;f<this.pageTo;f++){var j,m=e[f],n={},o=[],p="",q={},r=[];if(n=k(this.options,this.options.rowStyle,[m,f],n),n&&n.css)for(j in n.css)o.push(j+": "+n.css[j]);if(q=k(this.options,this.options.rowAttributes,[m,f],q))for(j in q)r.push(g('%s="%s"',j,l(q[j])));m._data&&!a.isEmptyObject(m._data)&&a.each(m._data,function(a,b){"index"!==a&&(p+=g(' data-%s="%s"',a,b))}),d.push("<tr",g(" %s",r.join(" ")),g(' id="%s"',a.isArray(m)?void 0:m._id),g(' class="%s"',n.classes||(a.isArray(m)?void 0:m._class)),g(' data-index="%s"',f),g(' data-uniqueid="%s"',m[this.options.uniqueId]),g("%s",p),">"),this.options.cardView&&d.push(g('<td colspan="%s">',this.header.fields.length)),!this.options.cardView&&this.options.detailView&&d.push("<td>",'<a class="detail-icon" href="javascript:">','<i class="glyphicon glyphicon-plus icon-plus"></i>',"</a>","</td>"),a.each(this.header.fields,function(b,e){var j="",l=m[e],p="",q={},r="",s=c.header.classes[b],t="",u="",v=c.options.columns[i(c.options.columns,e)];if(n=g('style="%s"',o.concat(c.header.styles[b]).join("; ")),l=k(v,c.header.formatters[b],[l,m,f],l),m["_"+e+"_id"]&&(r=g(' id="%s"',m["_"+e+"_id"])),m["_"+e+"_class"]&&(s=g(' class="%s"',m["_"+e+"_class"])),m["_"+e+"_rowspan"]&&(u=g(' rowspan="%s"',m["_"+e+"_rowspan"])),q=k(c.header,c.header.cellStyles[b],[l,m,f],q),q.classes&&(s=g(' class="%s"',q.classes)),q.css){var w=[];for(var x in q.css)w.push(x+": "+q.css[x]);n=g('style="%s"',w.concat(c.header.styles[b]).join("; "))}m["_"+e+"_data"]&&!a.isEmptyObject(m["_"+e+"_data"])&&a.each(m["_"+e+"_data"],function(a,b){"index"!==a&&(t+=g(' data-%s="%s"',a,b))}),v.checkbox||v.radio?(p=v.checkbox?"checkbox":p,p=v.radio?"radio":p,j=[c.options.cardView?'<div class="card-view">':'<td class="bs-checkbox">',"<input"+g(' data-index="%s"',f)+g(' name="%s"',c.options.selectItemName)+g(' type="%s"',p)+g(' value="%s"',m[c.options.idField])+g(' checked="%s"',l===!0||l&&l.checked?"checked":void 0)+g(' disabled="%s"',!v.checkboxEnabled||l&&l.disabled?"disabled":void 0)+" />",c.options.cardView?"</div>":"</td>"].join(""),m[c.header.stateField]=l===!0||l&&l.checked):(l="undefined"==typeof l||null===l?c.options.undefinedText:l,j=c.options.cardView?['<div class="card-view">',c.options.showHeader?g('<span class="title" %s>%s</span>',n,h(c.options.columns,"field","title",e)):"",g('<span class="value">%s</span>',l),"</div>"].join(""):[g("<td%s %s %s %s %s>",r,s,n,t,u),l,"</td>"].join(""),c.options.cardView&&c.options.smartDisplay&&""===l&&(j="")),d.push(j)}),this.options.cardView&&d.push("</td>"),d.push("</tr>")}d.length||d.push('<tr class="no-records-found">',g('<td colspan="%s">%s</td>',this.$header.find("th").length,this.options.formatNoMatches()),"</tr>"),this.$body.html(d.join("")),b||this.scrollTo(0),this.$body.find("> tr > td").off("click").on("click",function(){var b=a(this),d=b.parent(),e=c.data[d.data("index")],f=b[0].cellIndex,h=c.$header.find("th:eq("+f+")"),i=h.data("field"),j=e[i];c.trigger("click-cell",i,j,e,b),c.trigger("click-row",e,d),c.options.clickToSelect&&c.header.clickToSelects[d.children().index(a(this))]&&d.find(g('[name="%s"]',c.options.selectItemName))[0].click()}),this.$body.find("> tr > td").off("dblclick").on("dblclick",function(){var b=a(this),d=b.parent(),e=c.data[d.data("index")],f=b[0].cellIndex,g=c.$header.find("th:eq("+f+")"),h=g.data("field"),i=e[h];c.trigger("dbl-click-cell",h,i,e,b),c.trigger("dbl-click-row",e,d)}),this.$body.find("> tr > td > .detail-icon").off("click").on("click",function(){var b=a(this),d=b.parent().parent(),e=d.data("index"),f=c.options.data[e];d.next().is("tr.detail-view")?(b.find("i").attr("class","glyphicon glyphicon-plus icon-plus"),d.next().remove(),c.trigger("collapse-row",e,f)):(b.find("i").attr("class","glyphicon glyphicon-minus icon-minus"),d.after(g('<tr class="detail-view"><td colspan="%s">%s</td></tr>',d.find("td").length,k(c.options,c.options.detailFormatter,[e,f],""))),c.trigger("expand-row",e,f,d.next().find("td"))),c.resetView()}),this.$selectItem=this.$body.find(g('[name="%s"]',this.options.selectItemName)),this.$selectItem.off("click").on("click",function(b){b.stopImmediatePropagation();var d=a(this).prop("checked"),e=c.data[a(this).data("index")];e[c.header.stateField]=d,c.options.singleSelect&&(c.$selectItem.not(this).each(function(){c.data[a(this).data("index")][c.header.stateField]=!1}),c.$selectItem.filter(":checked").not(this).prop("checked",!1)),c.updateSelected(),c.trigger(d?"check":"uncheck",e)}),a.each(this.header.events,function(b,d){if(d){"string"==typeof d&&(d=k(null,d)),!c.options.cardView&&c.options.detailView&&(b+=1);for(var e in d)c.$body.find("tr").each(function(){var f=a(this),g=f.find(c.options.cardView?".card-view":"td").eq(b),h=e.indexOf(" "),i=e.substring(0,h),j=e.substring(h+1),k=d[e];g.find(j).off(i).on(i,function(a){var d=f.data("index"),e=c.data[d],g=e[c.header.fields[b]];k.apply(this,[a,g,e,d])})})}}),this.updateSelected(),this.resetView(),this.trigger("post-body")},o.prototype.initServer=function(b,c){var d,e=this,f={},g={pageSize:this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,pageNumber:this.options.pageNumber,searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};(this.options.url||this.options.ajax)&&("limit"===this.options.queryParamsType&&(g={search:g.searchText,sort:g.sortName,order:g.sortOrder},this.options.pagination&&(g.limit=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,g.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1))),a.isEmptyObject(this.filterColumnsPartial)||(g.filter=JSON.stringify(this.filterColumnsPartial,null)),f=k(this.options,this.options.queryParams,[g],f),a.extend(f,c||{}),f!==!1&&(b||this.$tableLoading.show(),d=a.extend({},k(null,this.options.ajaxOptions),{type:this.options.method,url:this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(f):f,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(a){a=k(e.options,e.options.responseHandler,[a],a),e.load(a),e.trigger("load-success",a)},error:function(a){e.trigger("load-error",a.status)},complete:function(){b||e.$tableLoading.hide()}}),this.options.ajax?k(this,this.options.ajax,[d],null):a.ajax(d)))},o.prototype.getCaretHtml=function(){var b=this;a.each(this.$header.find("th"),function(c,g){a(g).data("field")===b.options.sortName?a(g).find(".sortable").css("background-image","url("+("desc"===b.options.sortOrder?f:d)+")"):a(g).find(".sortable").css("background-image","url("+e+")")})},o.prototype.updateSelected=function(){var b=this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",b),this.$selectItem.each(function(){a(this).parents("tr")[a(this).prop("checked")?"addClass":"removeClass"]("selected")})},o.prototype.updateRows=function(){var b=this;this.$selectItem.each(function(){b.data[a(this).data("index")][b.header.stateField]=a(this).prop("checked")})},o.prototype.resetRows=function(){var b=this;a.each(this.data,function(a,c){b.$selectAll.prop("checked",!1),b.$selectItem.prop("checked",!1),c[b.header.stateField]=!1})},o.prototype.trigger=function(b){var c=Array.prototype.slice.call(arguments,1);b+=".bs.table",this.options[o.EVENTS[b]].apply(this.options,c),this.$el.trigger(a.Event(b),c),this.options.onAll(b,c),this.$el.trigger(a.Event("all.bs.table"),[b,c])},o.prototype.resetHeader=function(){clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(a.proxy(this.fitHeader,this),this.$el.is(":hidden")?100:0)},o.prototype.fitHeader=function(){var b,c,d=this;return d.$el.is(":hidden")?void(d.timeoutFooter_=setTimeout(a.proxy(d.fitHeader,d),100)):(b=this.$tableBody.get(0),c=b.scrollWidth>b.clientWidth&&b.scrollHeight>b.clientHeight+this.$header.height()?j():0,this.$el.css("margin-top",-this.$header.height()),this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find('[name="btSelectAll"]'),this.$tableHeader.css({"margin-right":c}).find("table").css("width",this.$el.css("width")).html("").attr("class",this.$el.attr("class")).append(this.$header_),this.$header.find("th").each(function(b){d.$header_.find("th").eq(b).data(a(this).data())
}),this.$body.find("tr:first-child:not(.no-records-found) > *").each(function(b){d.$header_.find("div.fht-cell").eq(b).width(a(this).innerWidth())}),this.$tableBody.off("scroll").on("scroll",function(){d.$tableHeader.scrollLeft(a(this).scrollLeft())}),void d.trigger("post-header"))},o.prototype.resetFooter=function(){var b=this,c=b.getData(),d=[];this.options.showFooter&&!this.options.cardView&&(!this.options.cardView&&this.options.detailView&&d.push("<td></td>"),a.each(this.options.columns,function(a,e){var f="",h="",i=g(' class="%s"',e["class"]);e.visible&&(!b.options.cardView||e.cardVisible)&&(f=g("text-align: %s; ",e.falign?e.falign:e.align),h=g("vertical-align: %s; ",e.valign),d.push("<td",i,g(' style="%s"',f+h),">"),d.push(k(e,e.footerFormatter,[c],"&nbsp;")||"&nbsp;"),d.push("</td>"))}),this.$tableFooter.find("tr").html(d.join("")),clearTimeout(this.timeoutFooter_),this.timeoutFooter_=setTimeout(a.proxy(this.fitFooter,this),this.$el.is(":hidden")?100:0))},o.prototype.fitFooter=function(){var b,c,d;return clearTimeout(this.timeoutFooter_),this.$el.is(":hidden")?void(this.timeoutFooter_=setTimeout(a.proxy(this.fitFooter,this),100)):(c=this.$el.css("width"),d=c>this.$tableBody.width()?j():0,this.$tableFooter.css({"margin-right":d}).find("table").css("width",c).attr("class",this.$el.attr("class")),b=this.$tableFooter.find("td"),void this.$tableBody.find("tbody tr:first-child:not(.no-records-found) > td").each(function(c){b.eq(c).outerWidth(a(this).outerWidth())}))},o.prototype.toggleColumn=function(a,b,c){if(-1!==a&&(this.options.columns[a].visible=b,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var d=this.$toolbar.find(".keep-open input").prop("disabled",!1);c&&d.filter(g('[value="%s"]',a)).prop("checked",b),d.filter(":checked").length<=this.options.minimumCountColumns&&d.filter(":checked").prop("disabled",!0)}},o.prototype.toggleRow=function(b,c,d){-1!==b&&a(this.$body[0]).children().filter(g(c?'[data-uniqueid="%s"]':'[data-index="%s"]',b))[d?"show":"hide"]()},o.prototype.resetView=function(a){var c=0;if(a&&a.height&&(this.options.height=a.height),this.$selectAll.prop("checked",this.$selectItem.length>0&&this.$selectItem.length===this.$selectItem.filter(":checked").length),this.options.height){var d=m(this.$toolbar),e=m(this.$pagination),f=this.options.height-d-e;this.$tableContainer.css("height",f+"px")}return this.options.cardView?(this.$el.css("margin-top","0"),void this.$tableContainer.css("padding-bottom","0")):(this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),c+=b):(this.$tableHeader.hide(),this.trigger("post-header")),this.options.showFooter&&(this.resetFooter(),this.options.height&&(c+=b)),this.getCaretHtml(),void this.$tableContainer.css("padding-bottom",c+"px"))},o.prototype.getData=function(b){return!this.searchText&&a.isEmptyObject(this.filterColumns)&&a.isEmptyObject(this.filterColumnsPartial)?b?this.options.data.slice(this.pageFrom-1,this.pageTo):this.options.data:b?this.data.slice(this.pageFrom-1,this.pageTo):this.data},o.prototype.load=function(b){var c=!1;"server"===this.options.sidePagination?(this.options.totalRows=b.total,c=b.fixedScroll,b=b.rows):a.isArray(b)||(c=b.fixedScroll,b=b.data),this.initData(b),this.initSearch(),this.initPagination(),this.initBody(c)},o.prototype.append=function(a){this.initData(a,"append"),this.initSearch(),this.initPagination(),this.initBody(!0)},o.prototype.prepend=function(a){this.initData(a,"prepend"),this.initSearch(),this.initPagination(),this.initBody(!0)},o.prototype.remove=function(b){var c,d,e=this.options.data.length;if(b.hasOwnProperty("field")&&b.hasOwnProperty("values")){for(c=e-1;c>=0;c--)d=this.options.data[c],d.hasOwnProperty(b.field)&&-1!==a.inArray(d[b.field],b.values)&&this.options.data.splice(c,1);e!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initBody(!0))}},o.prototype.removeAll=function(){this.options.data.length>0&&(this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))},o.prototype.removeByUniqueId=function(a){var b,c,d=this.options.uniqueId,e=this.options.data.length;for(b=e-1;b>=0;b--)c=this.options.data[b],c.hasOwnProperty(d)&&("string"==typeof c[d]?a=a.toString():"number"==typeof c[d]&&(Number(c[d])===c[d]&&c[d]%1===0?a=parseInt(a):c[d]===Number(c[d])&&0!==c[d]&&(a=parseFloat(a))),c[d]===a&&this.options.data.splice(b,1));e!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initBody(!0))},o.prototype.insertRow=function(a){a.hasOwnProperty("index")&&a.hasOwnProperty("row")&&(this.data.splice(a.index,0,a.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))},o.prototype.updateRow=function(b){b.hasOwnProperty("index")&&b.hasOwnProperty("row")&&(a.extend(this.data[b.index],b.row),this.initSort(),this.initBody(!0))},o.prototype.showRow=function(a){a.hasOwnProperty("index")&&this.toggleRow(a.index,void 0===a.isIdField?!1:!0,!0)},o.prototype.hideRow=function(a){a.hasOwnProperty("index")&&this.toggleRow(a.index,void 0===a.isIdField?!1:!0,!1)},o.prototype.getRowsHidden=function(b){var c=a(this.$body[0]).children().filter(":hidden"),d=0;if(b)for(;d<c.length;d++)a(c[d]).show();return c},o.prototype.mergeCells=function(b){var c,d,e=b.index,f=a.inArray(b.field,this.header.fields),g=b.rowspan||1,h=b.colspan||1,i=this.$body.find("tr"),j=i.eq(e).find("td").eq(f);if(!this.options.cardView&&this.options.detailView&&(f+=1),j=i.eq(e).find("td").eq(f),!(0>e||0>f||e>=this.data.length)){for(c=e;e+g>c;c++)for(d=f;f+h>d;d++)i.eq(c).find("td").eq(d).hide();j.attr("rowspan",g).attr("colspan",h).show()}},o.prototype.updateCell=function(a){a.hasOwnProperty("rowIndex")&&a.hasOwnProperty("fieldName")&&a.hasOwnProperty("fieldValue")&&(this.data[a.rowIndex][a.fieldName]=a.fieldValue,this.initSort(),this.initBody(!0))},o.prototype.getOptions=function(){return this.options},o.prototype.getSelections=function(){var b=this;return a.grep(this.data,function(a){return a[b.header.stateField]})},o.prototype.getAllSelections=function(){var b=this;return a.grep(this.options.data,function(a){return a[b.header.stateField]})},o.prototype.checkAll=function(){this.checkAll_(!0)},o.prototype.uncheckAll=function(){this.checkAll_(!1)},o.prototype.checkAll_=function(a){var b;a||(b=this.getSelections()),this.$selectItem.filter(":enabled").prop("checked",a),this.updateRows(),this.updateSelected(),a&&(b=this.getSelections()),this.trigger(a?"check-all":"uncheck-all",b)},o.prototype.check=function(a){this.check_(!0,a)},o.prototype.uncheck=function(a){this.check_(!1,a)},o.prototype.check_=function(a,b){this.$selectItem.filter(g('[data-index="%s"]',b)).prop("checked",a),this.data[b][this.header.stateField]=a,this.updateSelected(),this.trigger(a?"check":"uncheck",this.data[b])},o.prototype.checkBy=function(a){this.checkBy_(!0,a)},o.prototype.uncheckBy=function(a){this.checkBy_(!1,a)},o.prototype.checkBy_=function(b,c){if(c.hasOwnProperty("field")&&c.hasOwnProperty("values")){var d=this,e=[];a.each(this.options.data,function(f,h){return h.hasOwnProperty(c.field)?void(-1!==a.inArray(h[c.field],c.values)&&(d.$selectItem.filter(g('[data-index="%s"]',f)).prop("checked",b),h[d.header.stateField]=b,e.push(h),d.trigger(b?"check":"uncheck",h))):!1}),this.updateSelected(),this.trigger(b?"check-some":"uncheck-some",e)}},o.prototype.destroy=function(){this.$el.insertBefore(this.$container),a(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"")},o.prototype.showLoading=function(){this.$tableLoading.show()},o.prototype.hideLoading=function(){this.$tableLoading.hide()},o.prototype.togglePagination=function(){this.options.pagination=!this.options.pagination;var a=this.$toolbar.find('button[name="paginationSwitch"] i');this.options.pagination?a.attr("class",this.options.iconsPrefix+" "+this.options.icons.paginationSwitchDown):a.attr("class",this.options.iconsPrefix+" "+this.options.icons.paginationSwitchUp),this.updatePagination()},o.prototype.refresh=function(a){a&&a.url&&(this.options.url=a.url,this.options.pageNumber=1),this.initServer(a&&a.silent,a&&a.query)},o.prototype.resetWidth=function(){this.options.showHeader&&this.options.height&&this.fitHeader(),this.options.showFooter&&this.fitFooter()},o.prototype.showColumn=function(a){this.toggleColumn(i(this.options.columns,a),!0,!0)},o.prototype.hideColumn=function(a){this.toggleColumn(i(this.options.columns,a),!1,!0)},o.prototype.filterBy=function(b){this.filterColumns=a.isEmptyObject(b)?{}:b,this.options.pageNumber=1,this.initSearch(),this.updatePagination()},o.prototype.scrollTo=function(a){return"string"==typeof a&&(a="bottom"===a?this.$tableBody[0].scrollHeight:0),"number"==typeof a&&this.$tableBody.scrollTop(a),"undefined"==typeof a?this.$tableBody.scrollTop():void 0},o.prototype.getScrollPosition=function(){return this.scrollTo()},o.prototype.selectPage=function(a){a>0&&a<=this.options.totalPages&&(this.options.pageNumber=a,this.updatePagination())},o.prototype.prevPage=function(){this.options.pageNumber>1&&(this.options.pageNumber--,this.updatePagination())},o.prototype.nextPage=function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())},o.prototype.toggleView=function(){this.options.cardView=!this.options.cardView,this.initHeader(),this.initBody(),this.trigger("toggle",this.options.cardView)};var p=["getOptions","getSelections","getAllSelections","getData","load","append","prepend","remove","removeAll","insertRow","updateRow","updateCell","removeByUniqueId","showRow","hideRow","getRowsHidden","mergeCells","checkAll","uncheckAll","check","uncheck","checkBy","uncheckBy","refresh","resetView","resetWidth","destroy","showLoading","hideLoading","showColumn","hideColumn","filterBy","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","togglePagination","toggleView"];a.fn.bootstrapTable=function(b){var c,d=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=a(this),f=e.data("bootstrap.table"),g=a.extend({},o.DEFAULTS,e.data(),"object"==typeof b&&b);if("string"==typeof b){if(a.inArray(b,p)<0)throw new Error("Unknown method: "+b);if(!f)return;c=f[b].apply(f,d),"destroy"===b&&e.removeData("bootstrap.table")}f||e.data("bootstrap.table",f=new o(this,g))}),"undefined"==typeof c?this:c},a.fn.bootstrapTable.Constructor=o,a.fn.bootstrapTable.defaults=o.DEFAULTS,a.fn.bootstrapTable.columnDefaults=o.COLUMN_DEFAULTS,a.fn.bootstrapTable.locales=o.LOCALES,a.fn.bootstrapTable.methods=p,a(function(){a('[data-toggle="table"]').bootstrapTable()})}(jQuery),function(a){"use strict";var b={sortOrder:"bs.table.sortOrder",sortName:"bs.table.sortName",pageNumber:"bs.table.pageNumber",pageList:"bs.table.pageList",columns:"bs.table.columns",searchText:"bs.table.searchText"},c=function(){return navigator.cookieEnabled?!0:!1},d=function(a,b,d,e,f,g){if(a.options.stateSave&&c()&&""!==a.options.stateSaveIdTable){var i=a.options.stateSaveIdTable,j=a.options.stateSaveExpire;return b=i+"."+b,!b||/^(?:expires|max\-age|path|domain|secure)$/i.test(b)?!1:(document.cookie=encodeURIComponent(b)+"="+encodeURIComponent(d)+h(j)+(f?"; domain="+f:"")+(e?"; path="+e:"")+(g?"; secure":""),!0)}},e=function(a,b){return b=a+"."+b,b?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(b).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},f=function(a){return a?new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},g=function(a,b,c,d){return b=a+"."+b,f(b)?(document.cookie=encodeURIComponent(b)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(d?"; domain="+d:"")+(c?"; path="+c:""),!0):!1},h=function(a){var b=a.replace(/[0-9]/,"");switch(a=a.replace(/[A-Za-z]/,""),b.toLowerCase()){case"s":a=+a;break;case"mi":a=60*a;break;case"h":a=60*a*60;break;case"d":a=24*a*60*60;break;case"m":a=30*a*24*60*60;break;case"y":a=365*a*30*24*60*60;break;default:a=void 0}return void 0===a?"":"; max-age="+a};a.extend(a.fn.bootstrapTable.defaults,{stateSave:!1,stateSaveExpire:"2h",stateSaveIdTable:""}),a.fn.bootstrapTable.methods.push("deleteCookie");var i=a.fn.bootstrapTable.Constructor,j=i.prototype.initTable,k=i.prototype.onSort,l=i.prototype.onPageNumber,m=i.prototype.onPageListChange,n=i.prototype.onPageFirst,o=i.prototype.onPagePre,p=i.prototype.onPageNext,q=i.prototype.onPageLast,r=i.prototype.toggleColumn,s=i.prototype.onSearch;i.prototype.initTable=function(){j.apply(this,Array.prototype.slice.apply(arguments)),this.initStateSave()},i.prototype.initStateSave=function(){if(this.options.stateSave&&c()&&""!==this.options.stateSaveIdTable){var d=e(this.options.stateSaveIdTable,b.sortOrder),f=e(this.options.stateSaveIdTable,b.sortName),g=e(this.options.stateSaveIdTable,b.pageNumber),h=e(this.options.stateSaveIdTable,b.pageList),i=JSON.parse(e(this.options.stateSaveIdTable,b.columns)),j=e(this.options.stateSaveIdTable,b.searchText);d&&(this.options.sortOrder=d,this.options.sortName=f),g&&(this.options.pageNumber=+g),h&&(this.options.pageSize=h===this.options.formatAllRows()?h:+h),i&&a.each(this.options.columns,function(a,b){b.visible=-1!==i.indexOf(a)}),j&&(this.options.searchText=j)}},i.prototype.onSort=function(){k.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.sortOrder,this.options.sortOrder),d(this,b.sortName,this.options.sortName)},i.prototype.onPageNumber=function(){l.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageNumber,this.options.pageNumber)},i.prototype.onPageListChange=function(){m.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageList,this.options.pageSize)},i.prototype.onPageFirst=function(){n.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageNumber,this.options.pageNumber)},i.prototype.onPagePre=function(){o.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageNumber,this.options.pageNumber)},i.prototype.onPageNext=function(){p.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageNumber,this.options.pageNumber)},i.prototype.onPageLast=function(){q.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.pageNumber,this.options.pageNumber)},i.prototype.toggleColumn=function(){r.apply(this,Array.prototype.slice.apply(arguments));var c=[];a.each(this.options.columns,function(a){this.visible&&c.push(a)}),d(this,b.columns,JSON.stringify(c))},i.prototype.onSearch=function(){s.apply(this,Array.prototype.slice.apply(arguments)),d(this,b.searchText,this.searchText)},i.prototype.deleteCookie=function(a){""!==a&&c()&&g(b[a])}}(jQuery),!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{editable:!0,onEditableInit:function(){return!1},onEditableSave:function(){return!1}}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"editable-init.bs.table":"onEditableInit","editable-save.bs.table":"onEditableSave"});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.initTable,d=b.prototype.initBody;b.prototype.initTable=function(){var b=this;c.apply(this,Array.prototype.slice.apply(arguments)),this.options.editable&&a.each(this.options.columns,function(a,c){if(c.editable){var d=c.formatter;c.formatter=function(a,e,f){var g=d?d(a,e,f):a;return['<a href="javascript:void(0)"',' data-name="'+c.field+'"',' data-pk="'+e[b.options.idField]+'"',' data-value="'+g+'"',"></a>"].join("")}}})},b.prototype.initBody=function(){var b=this;d.apply(this,Array.prototype.slice.apply(arguments)),this.options.editable&&(a.each(this.options.columns,function(c,d){d.editable&&b.$body.find('a[data-name="'+d.field+'"]').editable(d.editable).off("save").on("save",function(c,e){var f=b.getData(),g=a(this).parents("tr[data-index]").data("index"),h=f[g],i=h[d.field];h[d.field]=e.submitValue,b.trigger("editable-save",d.field,h,i,a(this))})}),this.trigger("editable-init"))}}(jQuery),function(a){"use strict";var b={json:"JSON",xml:"XML",png:"PNG",csv:"CSV",txt:"TXT",sql:"SQL",doc:"MS-Word",excel:"Ms-Excel",powerpoint:"Ms-Powerpoint",pdf:"PDF"};a.extend(a.fn.bootstrapTable.defaults,{showExport:!1,exportTypes:["json","xml","csv","txt","sql","excel"],exportOptions:{}});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.initToolbar;c.prototype.initToolbar=function(){if(this.showToolbar=this.options.showExport,d.apply(this,Array.prototype.slice.apply(arguments)),this.options.showExport){var c=this,e=this.$toolbar.find(">.btn-group"),f=e.find("div.export");if(!f.length){f=a(['<div class="export btn-group">','<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">','<i class="glyphicon glyphicon-export icon-share"></i> ','<span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">',"</ul>","</div>"].join("")).appendTo(e);var g=f.find(".dropdown-menu"),h=this.options.exportTypes;if("string"==typeof this.options.exportTypes){var i=this.options.exportTypes.slice(1,-1).replace(/ /g,"").split(",");h=[],a.each(i,function(a,b){h.push(b.slice(1,-1))})}a.each(h,function(a,c){b.hasOwnProperty(c)&&g.append(['<li data-type="'+c+'">','<a href="javascript:void(0)">',b[c],"</a>","</li>"].join(""))}),g.find("li").click(function(){c.$el.tableExport(a.extend({},c.options.exportOptions,{type:a(this).data("type"),escape:!1}))})}}}}(jQuery),!function(a){"use strict";var b=function(a){var b=arguments,c=!0,d=1;return a=a.replace(/%s/g,function(){var a=b[d++];return"undefined"==typeof a?(c=!1,""):a}),c?a:""},c=function(b,c){var d=-1;return a.each(b,function(a,b){return b.field===c?(d=a,!1):!0}),d},d=function(b,c,d,e){if("string"==typeof c){var f=c.split(".");f.length>1?(c=window,a.each(f,function(a,b){c=c[b]})):c=window[c]}return"object"==typeof c?c:"function"==typeof c?c.apply(b,d):e};a.extend(a.fn.bootstrapTable.defaults,{filterControl:!1,onColumnSearch:function(){return!1}}),a.extend(a.fn.bootstrapTable.COLUMN_DEFAULTS,{filterControl:void 0,filterData:void 0}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"column-search.bs.table":"onColumnSearch"});var e=a.fn.bootstrapTable.Constructor,f=e.prototype.initHeader,g=e.prototype.initBody,h=e.prototype.initSearch;e.prototype.initHeader=function(){if(f.apply(this,Array.prototype.slice.apply(arguments)),this.options.filterControl){var c,d,e=!1,g=this,h=0;a.each(this.options.columns,function(f,h){if(c="hidden",d=[],h.visible){if(h.filterControl)switch(d.push('<div style="margin: 0px 2px 2px 2px;" class="filterControl">'),h.filterControl&&h.searchable&&(e=!0,c="visible"),h.filterControl.toLowerCase()){case"input":d.push(b('<input type="text" class="form-control" style="width: 100%; visibility: %s">',c));break;case"select":d.push(b('<select class="%s form-control" style="width: 100%; visibility: %s"></select>',h.field,c))}else d.push('<div style="height: 34px;"></div>');if(g.$header.find(b('.th-inner:eq("%s")',f)).next().append(d.join("")),void 0!==h.filterData&&"column"!==h.filterData.toLowerCase()){var i=h.filterData.substring(0,3),j=h.filterData.substring(4,h.filterData.length),k=a("."+h.field);switch(k.append(a("<option></option>").attr("value","").text("")),i){case"url":a.ajax({url:j,dataType:"json",success:function(b){a.each(b,function(b,c){k.append(a("<option></option>").attr("value",b).text(c))})}});break;case"var":var l=window[j];for(var m in l)k.append(a("<option></option>").attr("value",m).text(l[m]))}}}}),e?(this.$header.off("keyup","input").on("keyup","input",function(a){clearTimeout(h),h=setTimeout(function(){g.onColumnSearch(a)},g.options.searchTimeOut)}),this.$header.off("change","select").on("change","select",function(a){clearTimeout(h),h=setTimeout(function(){g.onColumnSearch(a)},g.options.searchTimeOut)})):this.$header.find(".filterControl").hide()}},e.prototype.initBody=function(){g.apply(this,Array.prototype.slice.apply(arguments));for(var b=this,e=this.getData(),f=this.pageFrom-1;f<this.pageTo;f++){var h=e[f];a.each(this.header.fields,function(e,g){var i=h[g],j=b.options.columns[c(b.options.columns,g)];if(i=d(b.header,b.header.formatters[e],[i,h,f],i),!(j.checkbox&&j.radio||void 0===j.filterControl||"select"!==j.filterControl.toLowerCase()||!j.searchable||void 0!==j.filterData&&"column"!==j.filterData.toLowerCase())){var k,l=a("."+j.field),m=0,n=!1;if(void 0!==l)if(k=l.get(0).options,0===k.length)l.append(a("<option></option>").attr("value","").text("")),l.append(a("<option></option>").attr("value",i).text(i));else{for(;m<k.length;m++)if(k[m].value===i){n=!0;break}n||l.append(a("<option></option>").attr("value",i).text(i))}}})}},e.prototype.initSearch=function(){h.apply(this,Array.prototype.slice.apply(arguments));var b=this,c=a.isEmptyObject(this.filterColumnsPartial)?null:this.filterColumnsPartial;this.data=c?a.grep(this.data,function(e,f){for(var g in c){var h=c[g].toLowerCase(),i=e[g];if(i=d(b.header,b.header.formatters[a.inArray(g,b.header.fields)],[i,e,f],i),-1===a.inArray(g,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||-1===(i+"").toLowerCase().indexOf(h))return!1}return!0}):this.data},e.prototype.onColumnSearch=function(b){var c=a.trim(a(b.currentTarget).val()),d=a(b.currentTarget).parent().parent().parent().data("field");a.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),c?this.filterColumnsPartial[d]=c:delete this.filterColumnsPartial[d],this.options.pageNumber=1,this.onSearch(b),this.updatePagination(),this.trigger("column-search",d,c)}}(jQuery),!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{showFilter:!1});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.init,d=b.prototype.initSearch;b.prototype.init=function(){c.apply(this,Array.prototype.slice.apply(arguments));var b=this;this.$el.on("load-success.bs.table",function(){b.options.showFilter&&a(b.options.toolbar).bootstrapTableFilter({connectTo:b.$el})})},b.prototype.initSearch=function(){d.apply(this,Array.prototype.slice.apply(arguments)),"server"!==this.options.sidePagination&&"function"==typeof this.searchCallback&&(this.data=a.grep(this.options.data,this.searchCallback))},b.prototype.getData=function(){return this.searchText||this.searchCallback?this.data:this.options.data},b.prototype.getColumns=function(){return this.options.columns},b.prototype.registerSearchCallback=function(a){this.searchCallback=a},b.prototype.updateSearch=function(){this.options.pageNumber=1,this.initSearch(),this.updatePagination()},b.prototype.getServerUrl=function(){return"server"===this.options.sidePagination?this.options.url:!1},a.fn.bootstrapTable.methods.push("getColumns","registerSearchCallback","updateSearch","getServerUrl")}(jQuery),function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{flat:!1});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.initData;b.prototype.initData=function(a,b){this.options.flat&&(a=void 0===a?this.options.data:a,a=d.flatHelper(a)),c.apply(this,[a,b])};var d={flat:function(b){function c(b,e){if(Object(b)!==b)d[e]=b;else if(a.isArray(b))for(var f=0,g=b.length;g>f;f++)c(b[f],e?e+"."+f:""+f),0==g&&(d[e]=[]);else{var h=!0;for(var i in b)h=!1,c(b[i],e?e+"."+i:i);h&&(d[e]={})}}var d={};return c(b,""),d},flatHelper:function(b){var c=[],e=[];return a.isArray(b)||(e.push(b),b=e),a.each(b,function(a,b){c.push(d.flat(b))}),c}}}(jQuery),!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{keyEvents:!1});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.init;b.prototype.init=function(){c.apply(this,Array.prototype.slice.apply(arguments)),this.initKeyEvents()},b.prototype.initKeyEvents=function(){if(this.options.keyEvents){var b=this;a(document).off("keydown").on("keydown",function(a){var c=b.$toolbar.find(".search input"),d=b.$toolbar.find('button[name="refresh"]'),e=b.$toolbar.find('button[name="toggle"]'),f=b.$toolbar.find('button[name="paginationSwitch"]');if(document.activeElement===c.get(0))return!0;switch(a.keyCode){case 83:if(!b.options.search)return;return c.focus(),!1;case 82:if(!b.options.showRefresh)return;return d.click(),!1;case 84:if(!b.options.showToggle)return;return e.click(),!1;case 80:if(!b.options.showPaginationSwitch)return;return f.click(),!1;case 37:if(!b.options.pagination)return;return b.prevPage(),!1;case 39:if(!b.options.pagination)return;return void b.nextPage()}})}}}(jQuery),!function(a){"use strict";var b=function(a){(a.options.height||a.options.showFooter)&&setTimeout(a.resetView(),1)},c=function(a,c,h){a.options.minHeight?d(c,a.options.minWidth)&&d(h,a.options.minHeight)?f(a):e(c,a.options.minWidth)&&e(h,a.options.minHeight)&&g(a):d(c,a.options.minWidth)?f(a):e(c,a.options.minWidth)&&g(a),b(a)},d=function(a,b){return b>=a},e=function(a,b){return a>b},f=function(a){h(a,!1)},g=function(a){h(a,!0)},h=function(a,b){a.options.cardView=b,a.toggleView()};a.extend(a.fn.bootstrapTable.defaults,{mobileResponsive:!1,minWidth:562,minHeight:void 0,checkOnInit:!0,toggled:!1});var i=a.fn.bootstrapTable.Constructor,j=i.prototype.init;i.prototype.init=function(){if(j.apply(this,Array.prototype.slice.apply(arguments)),this.options.mobileResponsive&&this.options.minWidth){var b=this;a(window).resize(function(){c(b,a(this).width(),a(this).height())}),this.options.checkOnInit&&c(this,a(window).width(),a(window).height())}}}(jQuery),function(a){"use strict";var b=!1,c={asc:"Ascending",desc:"Descending"},d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII= ",f=function(b){if(!a("#sortModal").hasClass("modal")){var c='  <div class="modal fade" id="sortModal" tabindex="-1" role="dialog" aria-labelledby="sortModalLabel" aria-hidden="true">';c+='         <div class="modal-dialog">',c+='             <div class="modal-content">',c+='                 <div class="modal-header">',c+='                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',c+='                     <h4 class="modal-title" id="sortModalLabel">'+b.options.formatMultipleSort()+"</h4>",c+="                 </div>",c+='                 <div class="modal-body">',c+='                     <div class="bootstrap-table">',c+='                         <div class="fixed-table-toolbar">',c+='                             <div class="bars">',c+='                                 <div id="toolbar">',c+='                                     <button id="add" type="button" class="btn btn-default"><i class="'+b.options.iconsPrefix+" "+b.options.icons.plus+'"></i> '+b.options.formatAddLevel()+"</button>",c+='                                     <button id="delete" type="button" class="btn btn-default" disabled><i class="'+b.options.iconsPrefix+" "+b.options.icons.minus+'"></i> '+b.options.formatDeleteLevel()+"</button>",c+="                                 </div>",c+="                             </div>",c+="                         </div>",c+='                         <div class="fixed-table-container">',c+='                             <table id="multi-sort" class="table">',c+="                                 <thead>",c+="                                     <tr>",c+="                                         <th></th>",c+='                                         <th><div class="th-inner">'+b.options.formatColumn()+"</div></th>",c+='                                         <th><div class="th-inner">'+b.options.formatOrder()+"</div></th>",c+="                                     </tr>",c+="                                 </thead>",c+="                                 <tbody></tbody>",c+="                             </table>",c+="                         </div>",c+="                     </div>",c+="                 </div>",c+='                 <div class="modal-footer">',c+='                     <button type="button" class="btn btn-default" data-dismiss="modal">'+b.options.formatCancel()+"</button>",c+='                     <button type="button" class="btn btn-primary">'+b.options.formatSort()+"</button>",c+="                 </div>",c+="             </div>",c+="         </div>",c+="     </div>",a("body").append(a(c));var d=a("#sortModal"),e=d.find("tbody > tr");if(d.off("click","#add").on("click","#add",function(){var a=d.find(".multi-sort-name:first option").length,c=d.find("tbody tr").length;a>c&&(c++,b.addLevel(),b.setButtonStates())}),d.off("click","#delete").on("click","#delete",function(){var a=d.find(".multi-sort-name:first option").length,c=d.find("tbody tr").length;c>1&&a>=c&&(c--,d.find("tbody tr:last").remove(),b.setButtonStates())}),d.off("click",".btn-primary").on("click",".btn-primary",function(){var c=d.find("tbody > tr"),e=d.find("div.alert"),f=[],g=[];b.options.sortPriority=a.map(c,function(b){var c=a(b),d=c.find(".multi-sort-name").val(),e=c.find(".multi-sort-order").val();return f.push(d),{sortName:d,sortOrder:e}});for(var h=f.sort(),i=0;i<f.length-1;i++)h[i+1]==h[i]&&g.push(h[i]);g.length>0?0===e.length&&(e='<div class="alert alert-danger" role="alert"><strong>'+b.options.formatDuplicateAlertTitle()+"</strong> "+b.options.formatDuplicateAlertDescription()+"</div>",a(e).insertBefore(d.find(".bars"))):(1===e.length&&a(e).remove(),b.options.sortName="",b.onMultipleSort(),d.modal("hide"))}),null===b.options.sortPriority&&b.options.sortName&&(b.options.sortPriority=[{sortName:b.options.sortName,sortOrder:b.options.sortOrder}]),null!==b.options.sortPriority){if(e.length<b.options.sortPriority.length&&"object"==typeof b.options.sortPriority)for(var f=0;f<b.options.sortPriority.length;f++)b.addLevel(f,b.options.sortPriority[f])}else b.addLevel(0);b.setButtonStates()}};a.extend(a.fn.bootstrapTable.defaults,{showMultiSort:!1,sortPriority:null,onMultipleSort:function(){return!1}}),a.extend(a.fn.bootstrapTable.defaults.icons,{sort:"glyphicon-sort",plus:"glyphicon-plus",minus:"glyphicon-minus"}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"multiple-sort.bs.table":"onMultipleSort"}),a.extend(a.fn.bootstrapTable.locales,{formatMultipleSort:function(){return"Multiple Sort"},formatAddLevel:function(){return"Add Level"},formatDeleteLevel:function(){return"Delete Level"},formatColumn:function(){return"Column"},formatOrder:function(){return"Order"},formatSortBy:function(){return"Sort by"},formatThenBy:function(){return"Then by"},formatSort:function(){return"Sort"},formatCancel:function(){return"Cancel"},formatDuplicateAlertTitle:function(){return"Duplicate(s) detected!"},formatDuplicateAlertDescription:function(){return"Please remove or change any duplicate column."}}),a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales);var g=a.fn.bootstrapTable.Constructor,h=g.prototype.initToolbar;g.prototype.initToolbar=function(){this.showToolbar=!0;var c=this;if(h.apply(this,Array.prototype.slice.apply(arguments)),this.options.showMultiSort){var d=this.$toolbar.find(">.btn-group"),e=d.find("div.multi-sort");e.length||(e='  <button class="multi-sort btn btn-default'+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+'" type="button" data-toggle="modal" data-target="#sortModal" title="'+this.options.formatMultipleSort()+'">',e+='     <i class="'+this.options.iconsPrefix+" "+this.options.icons.sort+'"></i>',e+="</button>",d.append(e),f(c)),this.$el.one("sort.bs.table",function(){b=!0}),this.$el.on("multiple-sort.bs.table",function(){b=!1}),this.$el.on("load-success.bs.table",function(){b||null===c.options.sortPriority||"object"!=typeof c.options.sortPriority||c.onMultipleSort()}),this.$el.on("column-switch.bs.table",function(){c.options.sortPriority=null,a("#sortModal").remove(),f(c)})}},g.prototype.onMultipleSort=function(){var b=this,c=function(a,b){return a>b?1:b>a?-1:0
},d=function(d,e){for(var f=[],g=[],h=0;h<b.options.sortPriority.length;h++){var i="desc"===b.options.sortPriority[h].sortOrder?-1:1,j=d[b.options.sortPriority[h].sortName],k=e[b.options.sortPriority[h].sortName];(void 0===j||null===j)&&(j=""),(void 0===k||null===k)&&(k=""),a.isNumeric(j)&&a.isNumeric(k)&&(j=parseFloat(j),k=parseFloat(k)),"string"!=typeof j&&(j=j.toString()),f.push(i*c(j,k)),g.push(i*c(k,j))}return c(f,g)};this.data.sort(function(a,b){return d(a,b)}),this.initBody(),this.assignSortableArrows(),this.trigger("multiple-sort")},g.prototype.addLevel=function(b,d){var e=a("#sortModal"),f=0===b?this.options.formatSortBy():this.options.formatThenBy();e.find("tbody").append(a("<tr>").append(a("<td>").text(f)).append(a("<td>").append(a('<select class="form-control multi-sort-name">'))).append(a("<td>").append(a('<select class="form-control multi-sort-order">'))));var g=e.find(".multi-sort-name").last(),h=e.find(".multi-sort-order").last();this.options.columns.forEach(function(a){return a.sortable===!1||a.visible===!1?!0:void g.append('<option value="'+a.field+'">'+a.title+"</option>")}),a.each(c,function(a,b){h.append('<option value="'+a+'">'+b+"</option>")}),void 0!==d&&(g.find('option[value="'+d.sortName+'"]').attr("selected",!0),h.find('option[value="'+d.sortOrder+'"]').attr("selected",!0))},g.prototype.assignSortableArrows=function(){for(var b=this,c=b.$header.find("th"),f=0;f<c.length;f++)for(var g=0;g<b.options.sortPriority.length;g++)a(c[f]).data("field")===b.options.sortPriority[g].sortName&&a(c[f]).find(".sortable").css("background-image","url("+("desc"===b.options.sortPriority[g].sortOrder?e:d)+")")},g.prototype.setButtonStates=function(){var b=a("#sortModal"),c=b.find(".multi-sort-name:first option").length,d=b.find("tbody tr").length;d==c&&b.find("#add").attr("disabled","disabled"),d>1&&b.find("#delete").removeAttr("disabled"),c>d&&b.find("#add").removeAttr("disabled"),1==d&&b.find("#delete").attr("disabled","disabled")}}(jQuery),!function(a){"use strict";var b=function(b,c){var d=-1;return a.each(b,function(a,b){return b.field===c?(d=a,!1):!0}),d};a.extend(a.fn.bootstrapTable.defaults,{reorderableColumns:!1,maxMovingRows:10,onReorderColumn:function(){return!1}}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"reorder-column.bs.table":"onReorderColumn"});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.initHeader,e=c.prototype.toggleColumn,f=c.prototype.toggleView,g=c.prototype.resetView;c.prototype.initHeader=function(){d.apply(this,Array.prototype.slice.apply(arguments)),this.options.reorderableColumns&&this.makeRowsReorderable()},c.prototype.toggleColumn=function(){e.apply(this,Array.prototype.slice.apply(arguments)),this.options.reorderableColumns&&this.makeRowsReorderable()},c.prototype.toggleView=function(){f.apply(this,Array.prototype.slice.apply(arguments)),this.options.reorderableColumns&&(this.options.cardView||this.makeRowsReorderable())},c.prototype.resetView=function(){g.apply(this,Array.prototype.slice.apply(arguments)),this.options.reorderableColumns&&this.makeRowsReorderable()},c.prototype.makeRowsReorderable=function(){var c=this;try{a(this.$el).dragtable("destroy")}catch(d){}a(this.$el).dragtable({maxMovingRows:c.options.maxMovingRows,clickDelay:200,beforeStop:function(){var d=[],e=[],f=-1;c.$header.find("th").each(function(){d.push(a(this).data("field"))});for(var g=0;g<d.length;g++)f=b(c.options.columns,d[g]),-1!==f&&(e.push(c.options.columns[f]),c.options.columns.splice(f,1));c.options.columns=c.options.columns.concat(e),c.header.fields=d,c.resetView(),c.trigger("reorder-column",d)}})}}(jQuery),!function(a){"use strict";var b=function(a,b){return{id:"customId_"+b}};a.extend(a.fn.bootstrapTable.defaults,{reorderableRows:!1,onDragStyle:null,onDropStyle:null,onDragClass:"reorder_rows_onDragClass",dragHandle:null,useRowAttrFunc:!1,onReorderRowsDrag:function(){return!1},onReorderRowsDrop:function(){return!1},onReorderRow:function(){return!1}}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"reorder-row.bs.table":"onReorderRow"});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.init,e=c.prototype.initSearch;c.prototype.init=function(){if(d.apply(this,Array.prototype.slice.apply(arguments)),this.options.reorderableRows){var a=this;this.options.useRowAttrFunc&&(this.options.rowAttributes=b);var c=this.options.onPostBody;this.options.onPostBody=function(){setTimeout(function(){a.makeRowsReorderable(),c.apply()},1)}}},c.prototype.initSearch=function(){e.apply(this,Array.prototype.slice.apply(arguments)),!this.options.reorderableRows},c.prototype.makeRowsReorderable=function(){if(!this.options.cardView){var a=this;this.$el.tableDnD({onDragStyle:a.options.onDragStyle,onDropStyle:a.options.onDropStyle,onDragClass:a.options.onDragClass,onDrop:a.onDrop,onDragStart:a.options.onReorderRowsDrag,dragHandle:a.options.dragHandle})}},c.prototype.onDrop=function(b,c){for(var d=a(b),e=d.data("bootstrap.table"),f=d.data("bootstrap.table").options,c=null,g=[],h=0;h<b.tBodies[0].rows.length;h++)c=a(b.tBodies[0].rows[h]),g.push(f.data[c.data("index")]),c.data("index",h).attr("data-index",h);f.data=g,f.onReorderRowsDrop.apply(b,c),e.trigger("reorder-row",g)}}(jQuery),function(a){"use strict";var b=function(a){a.$el.colResizable({disable:!0}),a.$el.colResizable({liveDrag:a.options.liveDrag,fixed:a.options.fixed,headerOnly:a.options.headerOnly,minWidth:a.options.minWidth,hoverCursor:a.options.hoverCursor,dragCursor:a.options.dragCursor,onResize:a.onResize,onDrag:a.options.onResizableDrag})};a.extend(a.fn.bootstrapTable.defaults,{resizable:!1,liveDrag:!1,fixed:!0,headerOnly:!1,minWidth:15,hoverCursor:"e-resize",dragCursor:"e-resize",onResizableResize:function(){return!1},onResizableDrag:function(){return!1}});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.toggleView,e=c.prototype.resetView;c.prototype.toggleView=function(){d.apply(this,Array.prototype.slice.apply(arguments)),this.options.resizable&&this.options.cardView&&a(this.$el).colResizable({disable:!0})},c.prototype.resetView=function(){var a=this;e.apply(this,Array.prototype.slice.apply(arguments)),this.options.resizable&&setTimeout(function(){b(a)},100)},c.prototype.onResize=function(b){var c=a(b.currentTarget);c.bootstrapTable("resetView"),c.data("bootstrap.table").options.onResizableResize.apply(b)}}(jQuery),!function(a){"use strict";var b=!1,c=function(a){var b=arguments,c=!0,d=1;return a=a.replace(/%s/g,function(){var a=b[d++];return"undefined"==typeof a?(c=!1,""):a}),c?a:""},d=function(b,c,d,e){if("string"==typeof c){var f=c.split(".");f.length>1?(c=window,a.each(f,function(a,b){c=c[b]})):c=window[c]}return"object"==typeof c?c:"function"==typeof c?c.apply(b,d):e},e=function(b,d,e,g){if(a("#avdSearchModal").hasClass("modal"))a("#avdSearchModal").modal();else{var h='<div id="avdSearchModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">';h+='<div class="modal-dialog modal-xs">',h+=' <div class="modal-content">',h+='  <div class="modal-header">',h+='   <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>',h+=c('   <h4 class="modal-title">%s</h4>',d),h+="  </div>",h+='  <div class="modal-body modal-body-custom">',h+='   <div class="container-fluid" id="avdSearchModalContent" style="padding-right: 0px;padding-left: 0px;" >',h+="   </div>",h+="  </div>",h+="  </div>",h+=" </div>",h+="</div>",a("body").append(a(h));var i=f(b,e,g),j=0;a("#avdSearchModalContent").append(i.join("")),a("#"+g.options.idForm).off("keyup blur","input").on("keyup blur","input",function(a){clearTimeout(j),j=setTimeout(function(){g.onColumnAdvancedSearch(a)},g.options.searchTimeOut)}),a("#btnCloseAvd").click(function(){a("#avdSearchModal").modal("hide")}),a("#avdSearchModal").modal()}},f=function(a,b,d){var e=[];e.push(c('<form class="form-horizontal" id="%s" action="%s" >',d.options.idForm,d.options.actionForm));for(var f in a){var g=a[f];!g.checkbox&&g.visible&&g.searchable&&(e.push('<div class="form-group">'),e.push(c('<label class="col-sm-4 control-label">%s</label>',g.title)),e.push('<div class="col-sm-6">'),e.push(c('<input type="text" class="form-control input-md" name="%s" placeholder="%s" id="%s">',g.field,g.title,g.field)),e.push("</div>"),e.push("</div>"))}return e.push('<div class="form-group">'),e.push('<div class="col-sm-offset-9 col-sm-3">'),e.push(c('<button type="button" id="btnCloseAvd" class="btn btn-default" >%s</button>',b)),e.push("</div>"),e.push("</div>"),e.push("</form>"),e};a.extend(a.fn.bootstrapTable.defaults,{advancedSearch:!1,idForm:"advancedSearch",actionForm:"",idTable:void 0,onColumnAdvancedSearch:function(){return!1}}),a.extend(a.fn.bootstrapTable.defaults.icons,{advancedSearchIcon:"glyphicon-chevron-down"}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"column-advanced-search.bs.table":"onColumnAdvancedSearch"}),a.extend(a.fn.bootstrapTable.locales,{formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"}}),a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales);var g=a.fn.bootstrapTable.Constructor,h=g.prototype.initToolbar,i=g.prototype.load,j=g.prototype.initSearch;g.prototype.initToolbar=function(){if(h.apply(this,Array.prototype.slice.apply(arguments)),this.options.search&&this.options.advancedSearch){var a=this,b=[];b.push(c('<div class="columns columns-%s btn-group pull-%s" role="group">',this.options.buttonsAlign,this.options.buttonsAlign)),b.push(c('<button class="btn btn-default%s" type="button" name="advancedSearch" title="%s">',void 0===a.options.iconSize?"":" btn-"+a.options.iconSize,a.options.formatAdvancedSearch())),b.push(c('<i class="%s %s"></i>',a.options.iconsPrefix,a.options.icons.advancedSearchIcon)),b.push("</button></div>"),a.$toolbar.prepend(b.join("")),a.$toolbar.find('button[name="advancedSearch"]').off("click").on("click",function(){e(a.options.columns,a.options.formatAdvancedSearch(),a.options.formatAdvancedCloseButton(),a)})}},g.prototype.load=function(){if(i.apply(this,Array.prototype.slice.apply(arguments)),"undefined"!=typeof this.options.idTable&&!b){var c=parseInt(a(".bootstrap-table").height());c+=10,a("#"+this.options.idTable).bootstrapTable("resetView",{height:c}),b=!0}},g.prototype.initSearch=function(){j.apply(this,Array.prototype.slice.apply(arguments));var b=this,c=a.isEmptyObject(this.filterColumnsPartial)?null:this.filterColumnsPartial;this.data=c?a.grep(this.data,function(e,f){for(var g in c){var h=c[g].toLowerCase(),i=e[g];if(i=d(b.header,b.header.formatters[a.inArray(g,b.header.fields)],[i,e,f],i),-1===a.inArray(g,b.header.fields)||"string"!=typeof i&&"number"!=typeof i||-1===(i+"").toLowerCase().indexOf(h))return!1}return!0}):this.data},g.prototype.onColumnAdvancedSearch=function(b){var c=a.trim(a(b.currentTarget).val()),d=a(b.currentTarget)[0].id;a.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),c?this.filterColumnsPartial[d]=c:delete this.filterColumnsPartial[d],this.options.pageNumber=1,this.onSearch(b),this.updatePagination(),this.trigger("column-advanced-search",d,c)}}(jQuery);/*
* bootstrap-table - v1.8.1 - 2015-05-29
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2015 zhixin wen
* Licensed MIT License
*/
!function(a){"use strict";var b={json:"JSON",xml:"XML",png:"PNG",csv:"CSV",txt:"TXT",sql:"SQL",doc:"MS-Word",excel:"Ms-Excel",powerpoint:"Ms-Powerpoint",pdf:"PDF"};a.extend(a.fn.bootstrapTable.defaults,{showExport:!1,exportTypes:["json","xml","csv","txt","sql","excel"],exportOptions:{}});var c=a.fn.bootstrapTable.Constructor,d=c.prototype.initToolbar;c.prototype.initToolbar=function(){if(this.showToolbar=this.options.showExport,d.apply(this,Array.prototype.slice.apply(arguments)),this.options.showExport){var c=this,e=this.$toolbar.find(">.btn-group"),f=e.find("div.export");if(!f.length){f=a(['<div class="export btn-group">','<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">','<i class="glyphicon glyphicon-export icon-share"></i> ','<span class="caret"></span>',"</button>",'<ul class="dropdown-menu" role="menu">',"</ul>","</div>"].join("")).appendTo(e);var g=f.find(".dropdown-menu"),h=this.options.exportTypes;if("string"==typeof this.options.exportTypes){var i=this.options.exportTypes.slice(1,-1).replace(/ /g,"").split(",");h=[],a.each(i,function(a,b){h.push(b.slice(1,-1))})}a.each(h,function(a,c){b.hasOwnProperty(c)&&g.append(['<li data-type="'+c+'">','<a href="javascript:void(0)">',b[c],"</a>","</li>"].join(""))}),g.find("li").click(function(){c.$el.tableExport(a.extend({},c.options.exportOptions,{type:a(this).data("type"),escape:!1}))})}}}}(jQuery);/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=e.webkitRequestFileSystem,c=e.requestFileSystem||a||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},f="application/octet-stream",s=0,d=500,l=function(t){var o=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};e.chrome?o():setTimeout(o,d)},v=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(i){u(i)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["﻿",e],{type:e.type}):e},w=function(t,u,d){d||(t=p(t));var w,y,m,S=this,h=t.type,O=!1,R=function(){v(S,"writestart progress write writeend".split(" "))},b=function(){if((O||!w)&&(w=n().createObjectURL(t)),y)y.location.href=w;else{var o=e.open(w,"_blank");void 0==o&&"undefined"!=typeof safari&&(e.location.href=w)}S.readyState=S.DONE,R(),l(w)},g=function(e){return function(){return S.readyState!==S.DONE?e.apply(this,arguments):void 0}},E={create:!0,exclusive:!1};return S.readyState=S.INIT,u||(u="download"),r?(w=n().createObjectURL(t),o.href=w,o.download=u,void setTimeout(function(){i(o),R(),l(w),S.readyState=S.DONE})):(e.chrome&&h&&h!==f&&(m=t.slice||t.webkitSlice,t=m.call(t,0,t.size,f),O=!0),a&&"download"!==u&&(u+=".download"),(h===f||a)&&(y=e),c?(s+=t.size,void c(e.TEMPORARY,s,g(function(e){e.root.getDirectory("saved",E,g(function(e){var n=function(){e.getFile(u,E,g(function(e){e.createWriter(g(function(n){n.onwriteend=function(t){y.location.href=e.toURL(),S.readyState=S.DONE,v(S,"writeend",t),l(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=S["on"+e]}),n.write(t),S.abort=function(){n.abort(),S.readyState=S.DONE},S.readyState=S.WRITING}),b)}),b)};e.getFile(u,{create:!1},g(function(e){e.remove(),n()}),g(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},y=w.prototype,m=function(e,t,n){return new w(e,t,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(y.abort=function(){var e=this;e.readyState=e.DONE,v(e,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,m)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});/*The MIT License (MIT)

Copyright (c) 2014 https://github.com/kayalshri/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/

(function($){
        $.fn.extend({
            tableExport: function(options) {
                var defaults = {
						separator: ',',
						ignoreColumn: [],
						tableName:'yourTableName',
						type:'csv',
						pdfFontSize:14,
						pdfLeftMargin:20,
						escape:'true',
						htmlContent:'false',
						consoleLog:'false'
				};
                
				var options = $.extend(defaults, options);
				var el = this;
				
				if(defaults.type == 'csv' || defaults.type == 'txt'){
				
					// Header
					var tdData ="";
					$(el).find('thead').find('tr').each(function() {
					tdData += "\n";					
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									tdData += '"' + parseString($(this)) + '"' + defaults.separator;									
								}
							}
							
						});
						tdData = $.trim(tdData);
						tdData = $.trim(tdData).substring(0, tdData.length -1);
					});
					
					// Row vs Column
					$(el).find('tbody').find('tr').each(function() {
					tdData += "\n";
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									tdData += '"'+ parseString($(this)) + '"'+ defaults.separator;
								}
							}
						});
						//tdData = $.trim(tdData);
						tdData = $.trim(tdData).substring(0, tdData.length -1);
					});
					
					//output
					if(defaults.consoleLog == 'true'){
						console.log(tdData);
					}
					var base64data = "base64," + $.base64.encode(tdData);
					window.open('data:application/'+defaults.type+';filename=exportData;' + base64data);
				}else if(defaults.type == 'sql'){
				
					// Header
					var tdData ="INSERT INTO `"+defaults.tableName+"` (";
					$(el).find('thead').find('tr').each(function() {
					
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									tdData += '`' + parseString($(this)) + '`,' ;									
								}
							}
							
						});
						tdData = $.trim(tdData);
						tdData = $.trim(tdData).substring(0, tdData.length -1);
					});
					tdData += ") VALUES ";
					// Row vs Column
					$(el).find('tbody').find('tr').each(function() {
					tdData += "(";
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									tdData += '"'+ parseString($(this)) + '",';
								}
							}
						});
						
						tdData = $.trim(tdData).substring(0, tdData.length -1);
						tdData += "),";
					});
					tdData = $.trim(tdData).substring(0, tdData.length -1);
					tdData += ";";
					
					//output
					//console.log(tdData);
					
					if(defaults.consoleLog == 'true'){
						console.log(tdData);
					}
					
					var base64data = "base64," + $.base64.encode(tdData);
					window.open('data:application/sql;filename=exportData;' + base64data);
					
				
				}else if(defaults.type == 'json'){
				
					var jsonHeaderArray = [];
					$(el).find('thead').find('tr').each(function() {
						var tdData ="";	
						var jsonArrayTd = [];
					
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									jsonArrayTd.push(parseString($(this)));									
								}
							}
						});									
						jsonHeaderArray.push(jsonArrayTd);						
						
					});
					
					var jsonArray = [];
					$(el).find('tbody').find('tr').each(function() {
						var tdData ="";	
						var jsonArrayTd = [];
					
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									jsonArrayTd.push(parseString($(this)));									
								}
							}
						});									
						jsonArray.push(jsonArrayTd);									
						
					});
					
					var jsonExportArray =[];
					jsonExportArray.push({header:jsonHeaderArray,data:jsonArray});
					
					//Return as JSON
					//console.log(JSON.stringify(jsonExportArray));
					
					//Return as Array
					//console.log(jsonExportArray);
					if(defaults.consoleLog == 'true'){
						console.log(JSON.stringify(jsonExportArray));
					}
					var base64data = "base64," + $.base64.encode(JSON.stringify(jsonExportArray));
					window.open('data:application/json;filename=exportData;' + base64data);
				}else if(defaults.type == 'xml'){
				
					var xml = '<?xml version="1.0" encoding="utf-8"?>';
					xml += '<tabledata><fields>';

					// Header
					$(el).find('thead').find('tr').each(function() {
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){					
								if(defaults.ignoreColumn.indexOf(index) == -1){
									xml += "<field>" + parseString($(this)) + "</field>";
								}
							}
						});									
					});					
					xml += '</fields><data>';
					
					// Row Vs Column
					var rowCount=1;
					$(el).find('tbody').find('tr').each(function() {
						xml += '<row id="'+rowCount+'">';
						var colCount=0;
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){	
								if(defaults.ignoreColumn.indexOf(index) == -1){
									xml += "<column-"+colCount+">"+parseString($(this))+"</column-"+colCount+">";
								}
							}
							colCount++;
						});															
						rowCount++;
						xml += '</row>';
					});					
					xml += '</data></tabledata>'
					
					if(defaults.consoleLog == 'true'){
						console.log(xml);
					}
					
					var base64data = "base64," + $.base64.encode(xml);
					window.open('data:application/xml;filename=exportData;' + base64data);

				}else if(defaults.type == 'excel' || defaults.type == 'doc'|| defaults.type == 'powerpoint'  ){
					//console.log($(this).html());
					var excel="<table>";
					// Header
					$(el).find('thead').find('tr').each(function() {
						excel += "<tr>";
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){					
								if(defaults.ignoreColumn.indexOf(index) == -1){
									excel += "<td>" + parseString($(this))+ "</td>";
								}
							}
						});	
						excel += '</tr>';						
						
					});					
					
					
					// Row Vs Column
					var rowCount=1;
					$(el).find('tbody').find('tr').each(function() {
						excel += "<tr>";
						var colCount=0;
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){	
								if(defaults.ignoreColumn.indexOf(index) == -1){
									excel += "<td>"+parseString($(this))+"</td>";
								}
							}
							colCount++;
						});															
						rowCount++;
						excel += '</tr>';
					});					
					excel += '</table>'
					
					if(defaults.consoleLog == 'true'){
						console.log(excel);
					}
					
					var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:"+defaults.type+"' xmlns='http://www.w3.org/TR/REC-html40'>";
					excelFile += "<head>";
					excelFile += "<!--[if gte mso 9]>";
					excelFile += "<xml>";
					excelFile += "<x:ExcelWorkbook>";
					excelFile += "<x:ExcelWorksheets>";
					excelFile += "<x:ExcelWorksheet>";
					excelFile += "<x:Name>";
					excelFile += "{worksheet}";
					excelFile += "</x:Name>";
					excelFile += "<x:WorksheetOptions>";
					excelFile += "<x:DisplayGridlines/>";
					excelFile += "</x:WorksheetOptions>";
					excelFile += "</x:ExcelWorksheet>";
					excelFile += "</x:ExcelWorksheets>";
					excelFile += "</x:ExcelWorkbook>";
					excelFile += "</xml>";
					excelFile += "<![endif]-->";
					excelFile += "</head>";
					excelFile += "<body>";
					excelFile += excel;
					excelFile += "</body>";
					excelFile += "</html>";

					var base64data = "base64," + $.base64.encode(excelFile);
					window.open('data:application/vnd.ms-'+defaults.type+';filename=exportData.doc;' + base64data);
					
				}else if(defaults.type == 'png'){
					html2canvas($(el), {
						onrendered: function(canvas) {										
							var img = canvas.toDataURL("image/png");
							window.open(img);
							
							
						}
					});		
				}else if(defaults.type == 'pdf'){
	
					var doc = new jsPDF('p','pt', 'a4', true);
					doc.setFontSize(defaults.pdfFontSize);
					
					// Header
					var startColPosition=defaults.pdfLeftMargin;
					$(el).find('thead').find('tr').each(function() {
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){					
								if(defaults.ignoreColumn.indexOf(index) == -1){
									var colPosition = startColPosition+ (index * 50);									
									doc.text(colPosition,20, parseString($(this)));
								}
							}
						});									
					});					
				
				
					// Row Vs Column
					var startRowPosition = 20; var page =1;var rowPosition=0;
					$(el).find('tbody').find('tr').each(function(index,data) {
						rowCalc = index+1;
						
					if (rowCalc % 26 == 0){
						doc.addPage();
						page++;
						startRowPosition=startRowPosition+10;
					}
					rowPosition=(startRowPosition + (rowCalc * 10)) - ((page -1) * 280);
						
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){	
								if(defaults.ignoreColumn.indexOf(index) == -1){
									var colPosition = startColPosition+ (index * 50);									
									doc.text(colPosition,rowPosition, parseString($(this)));
								}
							}
							
						});															
						
					});					
										
					// Output as Data URI
					doc.output('datauri');
	
				}
				
				
				function parseString(data){
				
					if(defaults.htmlContent == 'true'){
						content_data = data.html().trim();
					}else{
						content_data = data.text().trim();
					}
					
					if(defaults.escape == 'true'){
						content_data = escape(content_data);
					}
					
					
					
					return content_data;
				}
			
			}
        });
    })(jQuery);
        
/*jslint adsafe: false, bitwise: true, browser: true, cap: false, css: false,
  debug: false, devel: true, eqeqeq: true, es5: false, evil: false,
  forin: false, fragment: false, immed: true, laxbreak: false, newcap: true,
  nomen: false, on: false, onevar: true, passfail: false, plusplus: true,
  regexp: false, rhino: true, safe: false, strict: false, sub: false,
  undef: true, white: false, widget: false, windows: false */
/*global jQuery: false, window: false */
//"use strict";

/*
 * Original code (c) 2010 Nick Galbreath
 * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 *
 * jQuery port (c) 2010 Carlo Zottmann
 * http://github.com/carlo/jquery-base64
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

/* base64 encode/decode compatible with window.btoa/atob
 *
 * window.atob/btoa is a Firefox extension to convert binary data (the "b")
 * to base64 (ascii, the "a").
 *
 * It is also found in Safari and Chrome.  It is not available in IE.
 *
 * if (!window.btoa) window.btoa = $.base64.encode
 * if (!window.atob) window.atob = $.base64.decode
 *
 * The original spec's for atob/btoa are a bit lacking
 * https://developer.mozilla.org/en/DOM/window.atob
 * https://developer.mozilla.org/en/DOM/window.btoa
 *
 * window.btoa and $.base64.encode takes a string where charCodeAt is [0,255]
 * If any character is not [0,255], then an exception is thrown.
 *
 * window.atob and $.base64.decode take a base64-encoded string
 * If the input length is not a multiple of 4, or contains invalid characters
 *   then an exception is thrown.
 */
 
jQuery.base64 = ( function( $ ) {
  
  var _PADCHAR = "=",
    _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _VERSION = "1.0";


  function _getbyte64( s, i ) {
    // This is oddly fast, except on Chrome/V8.
    // Minimal or no improvement in performance by using a
    // object with properties mapping chars to value (eg. 'A': 0)

    var idx = _ALPHA.indexOf( s.charAt( i ) );

    if ( idx === -1 ) {
      throw "Cannot decode base64";
    }

    return idx;
  }
  
  
  function _decode( s ) {
    var pads = 0,
      i,
      b10,
      imax = s.length,
      x = [];

    s = String( s );
    
    if ( imax === 0 ) {
      return s;
    }

    if ( imax % 4 !== 0 ) {
      throw "Cannot decode base64";
    }

    if ( s.charAt( imax - 1 ) === _PADCHAR ) {
      pads = 1;

      if ( s.charAt( imax - 2 ) === _PADCHAR ) {
        pads = 2;
      }

      // either way, we want to ignore this last block
      imax -= 4;
    }

    for ( i = 0; i < imax; i += 4 ) {
      b10 = ( _getbyte64( s, i ) << 18 ) | ( _getbyte64( s, i + 1 ) << 12 ) | ( _getbyte64( s, i + 2 ) << 6 ) | _getbyte64( s, i + 3 );
      x.push( String.fromCharCode( b10 >> 16, ( b10 >> 8 ) & 0xff, b10 & 0xff ) );
    }

    switch ( pads ) {
      case 1:
        b10 = ( _getbyte64( s, i ) << 18 ) | ( _getbyte64( s, i + 1 ) << 12 ) | ( _getbyte64( s, i + 2 ) << 6 );
        x.push( String.fromCharCode( b10 >> 16, ( b10 >> 8 ) & 0xff ) );
        break;

      case 2:
        b10 = ( _getbyte64( s, i ) << 18) | ( _getbyte64( s, i + 1 ) << 12 );
        x.push( String.fromCharCode( b10 >> 16 ) );
        break;
    }

    return x.join( "" );
  }
  
  
  function _getbyte( s, i ) {
    var x = s.charCodeAt( i );

    if ( x > 255 ) {
      throw "INVALID_CHARACTER_ERR: DOM Exception 5";
    }
    
    return x;
  }


  function _encode( s ) {
    if ( arguments.length !== 1 ) {
      throw "SyntaxError: exactly one argument required";
    }

    s = String( s );

    var i,
      b10,
      x = [],
      imax = s.length - s.length % 3;

    if ( s.length === 0 ) {
      return s;
    }

    for ( i = 0; i < imax; i += 3 ) {
      b10 = ( _getbyte( s, i ) << 16 ) | ( _getbyte( s, i + 1 ) << 8 ) | _getbyte( s, i + 2 );
      x.push( _ALPHA.charAt( b10 >> 18 ) );
      x.push( _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) );
      x.push( _ALPHA.charAt( ( b10 >> 6 ) & 0x3f ) );
      x.push( _ALPHA.charAt( b10 & 0x3f ) );
    }

    switch ( s.length - imax ) {
      case 1:
        b10 = _getbyte( s, i ) << 16;
        x.push( _ALPHA.charAt( b10 >> 18 ) + _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) + _PADCHAR + _PADCHAR );
        break;

      case 2:
        b10 = ( _getbyte( s, i ) << 16 ) | ( _getbyte( s, i + 1 ) << 8 );
        x.push( _ALPHA.charAt( b10 >> 18 ) + _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) + _ALPHA.charAt( ( b10 >> 6 ) & 0x3f ) + _PADCHAR );
        break;
    }

    return x.join( "" );
  }


  return {
    decode: _decode,
    encode: _encode,
    VERSION: _VERSION
  };
      
}( jQuery ) );

/**
 * jsPDF
 * (c) 2009 James Hall
 * 
 * Some parts based on FPDF.
 */

var jsPDF = function(){
	
	// Private properties
	var version = '20090504';
	var buffer = '';
	
	var pdfVersion = '1.3'; // PDF Version
	var defaultPageFormat = 'a4';
	var pageFormats = { // Size in mm of various paper formats
		'a3': [841.89, 1190.55],
		'a4': [595.28, 841.89],
		'a5': [420.94, 595.28],
		'letter': [612, 792],
		'legal': [612, 1008]
	};
	var textColor = '0 g';
	var page = 0;
	var objectNumber = 2; // 'n' Current object number
	var state = 0; // Current document state
	var pages = new Array();
	var offsets = new Array(); // List of offsets
	var lineWidth = 0.200025; // 2mm
	var pageHeight;
	var k; // Scale factor
	var unit = 'mm'; // Default to mm for units
	var fontNumber; // TODO: This is temp, replace with real font handling
	var documentProperties = {};
	var fontSize = 16; // Default font size
	var pageFontSize = 16;

	// Initilisation 
	if (unit == 'pt') {
		k = 1;
	} else if(unit == 'mm') {
		k = 72/25.4;
	} else if(unit == 'cm') {
		k = 72/2.54;
	} else if(unit == 'in') {
		k = 72;
	}
	
	// Private functions
	var newObject = function() {
		//Begin a new object
		objectNumber ++;
		offsets[objectNumber] = buffer.length;
		out(objectNumber + ' 0 obj');		
	}
	
	
	var putHeader = function() {
		out('%PDF-' + pdfVersion);
	}
	
	var putPages = function() {
		
		// TODO: Fix, hardcoded to a4 portrait
		var wPt = pageWidth * k;
		var hPt = pageHeight * k;

		for(n=1; n <= page; n++) {
			newObject();
			out('<</Type /Page');
			out('/Parent 1 0 R');	
			out('/Resources 2 0 R');
			out('/Contents ' + (objectNumber + 1) + ' 0 R>>');
			out('endobj');
			
			//Page content
			p = pages[n];
			newObject();
			out('<</Length ' + p.length  + '>>');
			putStream(p);
			out('endobj');					
		}
		offsets[1] = buffer.length;
		out('1 0 obj');
		out('<</Type /Pages');
		var kids='/Kids [';
		for (i = 0; i < page; i++) {
			kids += (3 + 2 * i) + ' 0 R ';
		}
		out(kids + ']');
		out('/Count ' + page);
		out(sprintf('/MediaBox [0 0 %.2f %.2f]', wPt, hPt));
		out('>>');
		out('endobj');		
	}
	
	var putStream = function(str) {
		out('stream');
		out(str);
		out('endstream');
	}
	
	var putResources = function() {
		putFonts();
		putImages();
		
		//Resource dictionary
		offsets[2] = buffer.length;
		out('2 0 obj');
		out('<<');
		putResourceDictionary();
		out('>>');
		out('endobj');
	}	
	
	var putFonts = function() {
		// TODO: Only supports core font hardcoded to Helvetica
		newObject();
		fontNumber = objectNumber;
		name = 'Helvetica';
		out('<</Type /Font');
		out('/BaseFont /' + name);
		out('/Subtype /Type1');
		out('/Encoding /WinAnsiEncoding');
		out('>>');
		out('endobj');
	}
	
	var putImages = function() {
		// TODO
	}
	
	var putResourceDictionary = function() {
		out('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]');
		out('/Font <<');
		// Do this for each font, the '1' bit is the index of the font
        // fontNumber is currently the object number related to 'putFonts'
		out('/F1 ' + fontNumber + ' 0 R');
		out('>>');
		out('/XObject <<');
		putXobjectDict();
		out('>>');
	}
	
	var putXobjectDict = function() {
		// TODO
		// Loop through images
	}
	
	
	var putInfo = function() {
		out('/Producer (jsPDF ' + version + ')');
		if(documentProperties.title != undefined) {
			out('/Title (' + pdfEscape(documentProperties.title) + ')');
		}
		if(documentProperties.subject != undefined) {
			out('/Subject (' + pdfEscape(documentProperties.subject) + ')');
		}
		if(documentProperties.author != undefined) {
			out('/Author (' + pdfEscape(documentProperties.author) + ')');
		}
		if(documentProperties.keywords != undefined) {
			out('/Keywords (' + pdfEscape(documentProperties.keywords) + ')');
		}
		if(documentProperties.creator != undefined) {
			out('/Creator (' + pdfEscape(documentProperties.creator) + ')');
		}		
		var created = new Date();
		var year = created.getFullYear();
		var month = (created.getMonth() + 1);
		var day = created.getDate();
		var hour = created.getHours();
		var minute = created.getMinutes();
		var second = created.getSeconds();
		out('/CreationDate (D:' + sprintf('%02d%02d%02d%02d%02d%02d', year, month, day, hour, minute, second) + ')');
	}
	
	var putCatalog = function () {
		out('/Type /Catalog');
		out('/Pages 1 0 R');
		// TODO: Add zoom and layout modes
		out('/OpenAction [3 0 R /FitH null]');
		out('/PageLayout /OneColumn');
	}	
	
	function putTrailer() {
		out('/Size ' + (objectNumber + 1));
		out('/Root ' + objectNumber + ' 0 R');
		out('/Info ' + (objectNumber - 1) + ' 0 R');
	}	
	
	var endDocument = function() {
		state = 1;
		putHeader();
		putPages();
		
		putResources();
		//Info
		newObject();
		out('<<');
		putInfo();
		out('>>');
		out('endobj');
		
		//Catalog
		newObject();
		out('<<');
		putCatalog();
		out('>>');
		out('endobj');
		
		//Cross-ref
		var o = buffer.length;
		out('xref');
		out('0 ' + (objectNumber + 1));
		out('0000000000 65535 f ');
		for (var i=1; i <= objectNumber; i++) {
			out(sprintf('%010d 00000 n ', offsets[i]));
		}
		//Trailer
		out('trailer');
		out('<<');
		putTrailer();
		out('>>');
		out('startxref');
		out(o);
		out('%%EOF');
		state = 3;		
	}
	
	var beginPage = function() {
		page ++;
		// Do dimension stuff
		state = 2;
		pages[page] = '';
		
		// TODO: Hardcoded at A4 and portrait
		pageHeight = pageFormats['a4'][1] / k;
		pageWidth = pageFormats['a4'][0] / k;
	}
	
	var out = function(string) {
		if(state == 2) {
			pages[page] += string + '\n';
		} else {
			buffer += string + '\n';
		}
	}
	
	var _addPage = function() {
		beginPage();
		// Set line width
		out(sprintf('%.2f w', (lineWidth * k)));
		
		// Set font - TODO
		// 16 is the font size
		pageFontSize = fontSize;
		out('BT /F1 ' + parseInt(fontSize) + '.00 Tf ET'); 		
	}
	
	// Add the first page automatically
	_addPage();	

	// Escape text
	var pdfEscape = function(text) {
		return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
	}
	
	return {
		addPage: function() {
			_addPage();
		},
		text: function(x, y, text) {
			// need page height
			if(pageFontSize != fontSize) {
				out('BT /F1 ' + parseInt(fontSize) + '.00 Tf ET');
				pageFontSize = fontSize;
			}
			var str = sprintf('BT %.2f %.2f Td (%s) Tj ET', x * k, (pageHeight - y) * k, pdfEscape(text));
			out(str);
		},
		setProperties: function(properties) {
			documentProperties = properties;
		},
		addImage: function(imageData, format, x, y, w, h) {
		
		},
		output: function(type, options) {
			endDocument();
			if(type == undefined) {
				return buffer;
			}
			if(type == 'datauri') {
				document.location.href = 'data:application/pdf;base64,' + Base64.encode(buffer);
			}
			// @TODO: Add different output options
		},
		setFontSize: function(size) {
			fontSize = size;
		}
	}

};
// i18next, v1.9.0
// Copyright (c)2015 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
(function(root) {

    // add indexOf to non ECMA-262 standard compliant browsers
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                if (n != n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }
    
    // add lastIndexOf to non ECMA-262 standard compliant browsers
    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = len;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) {
                    n = 0;
                } else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);
            for (; k >= 0; k--) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        };
    }
    
    // Add string trim for IE8.
    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, ''); 
        }
    }

    var $ = root.jQuery || root.Zepto
      , i18n = {}
      , resStore = {}
      , currentLng
      , replacementCounter = 0
      , languages = []
      , initialized = false
      , sync = {}
      , conflictReference = null;



    // Export the i18next object for **CommonJS**. 
    // If we're not in CommonJS, add `i18n` to the
    // global object or to jquery.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = i18n;
    } else {
        if ($) {
            $.i18n = $.i18n || i18n;
        }
        
        if (root.i18n) {
        	conflictReference = root.i18n;
        }
        root.i18n = i18n;
    }
    sync = {
    
        load: function(lngs, options, cb) {
            if (options.useLocalStorage) {
                sync._loadLocal(lngs, options, function(err, store) {
                    var missingLngs = [];
                    for (var i = 0, len = lngs.length; i < len; i++) {
                        if (!store[lngs[i]]) missingLngs.push(lngs[i]);
                    }
    
                    if (missingLngs.length > 0) {
                        sync._fetch(missingLngs, options, function(err, fetched) {
                            f.extend(store, fetched);
                            sync._storeLocal(fetched);
    
                            cb(null, store);
                        });
                    } else {
                        cb(null, store);
                    }
                });
            } else {
                sync._fetch(lngs, options, function(err, store){
                    cb(null, store);
                });
            }
        },
    
        _loadLocal: function(lngs, options, cb) {
            var store = {}
              , nowMS = new Date().getTime();
    
            if(window.localStorage) {
    
                var todo = lngs.length;
    
                f.each(lngs, function(key, lng) {
                    var local = f.localStorage.getItem('res_' + lng);
    
                    if (local) {
                        local = JSON.parse(local);
    
                        if (local.i18nStamp && local.i18nStamp + options.localStorageExpirationTime > nowMS) {
                            store[lng] = local;
                        }
                    }
    
                    todo--; // wait for all done befor callback
                    if (todo === 0) cb(null, store);
                });
            }
        },
    
        _storeLocal: function(store) {
            if(window.localStorage) {
                for (var m in store) {
                    store[m].i18nStamp = new Date().getTime();
                    f.localStorage.setItem('res_' + m, JSON.stringify(store[m]));
                }
            }
            return;
        },
    
        _fetch: function(lngs, options, cb) {
            var ns = options.ns
              , store = {};
            
            if (!options.dynamicLoad) {
                var todo = ns.namespaces.length * lngs.length
                  , errors;
    
                // load each file individual
                f.each(ns.namespaces, function(nsIndex, nsValue) {
                    f.each(lngs, function(lngIndex, lngValue) {
                        
                        // Call this once our translation has returned.
                        var loadComplete = function(err, data) {
                            if (err) {
                                errors = errors || [];
                                errors.push(err);
                            }
                            store[lngValue] = store[lngValue] || {};
                            store[lngValue][nsValue] = data;
    
                            todo--; // wait for all done befor callback
                            if (todo === 0) cb(errors, store);
                        };
                        
                        if(typeof options.customLoad == 'function'){
                            // Use the specified custom callback.
                            options.customLoad(lngValue, nsValue, options, loadComplete);
                        } else {
                            //~ // Use our inbuilt sync.
                            sync._fetchOne(lngValue, nsValue, options, loadComplete);
                        }
                    });
                });
            } else {
                // Call this once our translation has returned.
                var loadComplete = function(err, data) {
                    cb(null, data);
                };
    
                if(typeof options.customLoad == 'function'){
                    // Use the specified custom callback.
                    options.customLoad(lngs, ns.namespaces, options, loadComplete);
                } else {
                    var url = applyReplacement(options.resGetPath, { lng: lngs.join('+'), ns: ns.namespaces.join('+') });
                    // load all needed stuff once
                    f.ajax({
                        url: url,
                        cache: options.cache,
                        success: function(data, status, xhr) {
                            f.log('loaded: ' + url);
                            loadComplete(null, data);
                        },
                        error : function(xhr, status, error) {
                            f.log('failed loading: ' + url);
                            loadComplete('failed loading resource.json error: ' + error);
                        },
                        dataType: "json",
                        async : options.getAsync,
                        timeout: options.ajaxTimeout
                    });
                }    
            }
        },
    
        _fetchOne: function(lng, ns, options, done) {
            var url = applyReplacement(options.resGetPath, { lng: lng, ns: ns });
            f.ajax({
                url: url,
                cache: options.cache,
                success: function(data, status, xhr) {
                    f.log('loaded: ' + url);
                    done(null, data);
                },
                error : function(xhr, status, error) {
                    if ((status && status == 200) || (xhr && xhr.status && xhr.status == 200)) {
                        // file loaded but invalid json, stop waste time !
                        f.error('There is a typo in: ' + url);
                    } else if ((status && status == 404) || (xhr && xhr.status && xhr.status == 404)) {
                        f.log('Does not exist: ' + url);
                    } else {
                        var theStatus = status ? status : ((xhr && xhr.status) ? xhr.status : null);
                        f.log(theStatus + ' when loading ' + url);
                    }
                    
                    done(error, {});
                },
                dataType: "json",
                async : options.getAsync,
                timeout: options.ajaxTimeout
            });
        },
    
        postMissing: function(lng, ns, key, defaultValue, lngs) {
            var payload = {};
            payload[key] = defaultValue;
    
            var urls = [];
    
            if (o.sendMissingTo === 'fallback' && o.fallbackLng[0] !== false) {
                for (var i = 0; i < o.fallbackLng.length; i++) {
                    urls.push({lng: o.fallbackLng[i], url: applyReplacement(o.resPostPath, { lng: o.fallbackLng[i], ns: ns })});
                }
            } else if (o.sendMissingTo === 'current' || (o.sendMissingTo === 'fallback' && o.fallbackLng[0] === false) ) {
                urls.push({lng: lng, url: applyReplacement(o.resPostPath, { lng: lng, ns: ns })});
            } else if (o.sendMissingTo === 'all') {
                for (var i = 0, l = lngs.length; i < l; i++) {
                    urls.push({lng: lngs[i], url: applyReplacement(o.resPostPath, { lng: lngs[i], ns: ns })});
                }
            }
    
            for (var y = 0, len = urls.length; y < len; y++) {
                var item = urls[y];
                f.ajax({
                    url: item.url,
                    type: o.sendType,
                    data: payload,
                    success: function(data, status, xhr) {
                        f.log('posted missing key \'' + key + '\' to: ' + item.url);
    
                        // add key to resStore
                        var keys = key.split('.');
                        var x = 0;
                        var value = resStore[item.lng][ns];
                        while (keys[x]) {
                            if (x === keys.length - 1) {
                                value = value[keys[x]] = defaultValue;
                            } else {
                                value = value[keys[x]] = value[keys[x]] || {};
                            }
                            x++;
                        }
                    },
                    error : function(xhr, status, error) {
                        f.log('failed posting missing key \'' + key + '\' to: ' + item.url);
                    },
                    dataType: "json",
                    async : o.postAsync,
                    timeout: o.ajaxTimeout
                });
            }
        },
    
        reload: reload
    };
    // defaults
    var o = {
        lng: undefined,
        load: 'all',
        preload: [],
        lowerCaseLng: false,
        returnObjectTrees: false,
        fallbackLng: ['dev'],
        fallbackNS: [],
        detectLngQS: 'setLng',
        detectLngFromLocalStorage: false,
        ns: {
            namespaces: ['translation'],
            defaultNs: 'translation'
        },
        fallbackOnNull: true,
        fallbackOnEmpty: false,
        fallbackToDefaultNS: false,
        showKeyIfEmpty: false,
        nsseparator: ':',
        keyseparator: '.',
        selectorAttr: 'data-i18n',
        debug: false,
    
        resGetPath: 'locales/__lng__/__ns__.json',
        resPostPath: 'locales/add/__lng__/__ns__',
    
        getAsync: true,
        postAsync: true,
    
        resStore: undefined,
        useLocalStorage: false,
        localStorageExpirationTime: 7*24*60*60*1000,
    
        dynamicLoad: false,
        sendMissing: false,
        sendMissingTo: 'fallback', // current | all
        sendType: 'POST',
    
        interpolationPrefix: '__',
        interpolationSuffix: '__',
        defaultVariables: false,
        reusePrefix: '$t(',
        reuseSuffix: ')',
        pluralSuffix: '_plural',
        pluralNotFound: ['plural_not_found', Math.random()].join(''),
        contextNotFound: ['context_not_found', Math.random()].join(''),
        escapeInterpolation: false,
        indefiniteSuffix: '_indefinite',
        indefiniteNotFound: ['indefinite_not_found', Math.random()].join(''),
    
        setJqueryExt: true,
        defaultValueFromContent: true,
        useDataAttrOptions: false,
        cookieExpirationTime: undefined,
        useCookie: true,
        cookieName: 'i18next',
        cookieDomain: undefined,
    
        objectTreeKeyHandler: undefined,
        postProcess: undefined,
        parseMissingKey: undefined,
        missingKeyHandler: sync.postMissing,
        ajaxTimeout: 0,
    
        shortcutFunction: 'sprintf' // or: defaultValue
    };
    function _extend(target, source) {
        if (!source || typeof source === 'function') {
            return target;
        }
    
        for (var attr in source) { target[attr] = source[attr]; }
        return target;
    }
    
    function _deepExtend(target, source) {
        for (var prop in source)
            if (prop in target)
                _deepExtend(target[prop], source[prop]);
            else
                target[prop] = source[prop];
        return target;
    }
    
    function _each(object, callback, args) {
        var name, i = 0,
            length = object.length,
            isObj = length === undefined || Object.prototype.toString.apply(object) !== '[object Array]' || typeof object === "function";
    
        if (args) {
            if (isObj) {
                for (name in object) {
                    if (callback.apply(object[name], args) === false) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if (callback.apply(object[i++], args) === false) {
                        break;
                    }
                }
            }
    
        // A special, fast, case for the most common use of each
        } else {
            if (isObj) {
                for (name in object) {
                    if (callback.call(object[name], name, object[name]) === false) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if (callback.call(object[i], i, object[i++]) === false) {
                        break;
                    }
                }
            }
        }
    
        return object;
    }
    
    var _entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    
    function _escape(data) {
        if (typeof data === 'string') {
            return data.replace(/[&<>"'\/]/g, function (s) {
                return _entityMap[s];
            });
        }else{
            return data;
        }
    }
    
    function _ajax(options) {
    
        // v0.5.0 of https://github.com/goloroden/http.js
        var getXhr = function (callback) {
            // Use the native XHR object if the browser supports it.
            if (window.XMLHttpRequest) {
                return callback(null, new XMLHttpRequest());
            } else if (window.ActiveXObject) {
                // In Internet Explorer check for ActiveX versions of the XHR object.
                try {
                    return callback(null, new ActiveXObject("Msxml2.XMLHTTP"));
                } catch (e) {
                    return callback(null, new ActiveXObject("Microsoft.XMLHTTP"));
                }
            }
    
            // If no XHR support was found, throw an error.
            return callback(new Error());
        };
    
        var encodeUsingUrlEncoding = function (data) {
            if(typeof data === 'string') {
                return data;
            }
    
            var result = [];
            for(var dataItem in data) {
                if(data.hasOwnProperty(dataItem)) {
                    result.push(encodeURIComponent(dataItem) + '=' + encodeURIComponent(data[dataItem]));
                }
            }
    
            return result.join('&');
        };
    
        var utf8 = function (text) {
            text = text.replace(/\r\n/g, '\n');
            var result = '';
    
            for(var i = 0; i < text.length; i++) {
                var c = text.charCodeAt(i);
    
                if(c < 128) {
                        result += String.fromCharCode(c);
                } else if((c > 127) && (c < 2048)) {
                        result += String.fromCharCode((c >> 6) | 192);
                        result += String.fromCharCode((c & 63) | 128);
                } else {
                        result += String.fromCharCode((c >> 12) | 224);
                        result += String.fromCharCode(((c >> 6) & 63) | 128);
                        result += String.fromCharCode((c & 63) | 128);
                }
            }
    
            return result;
        };
    
        var base64 = function (text) {
            var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    
            text = utf8(text);
            var result = '',
                    chr1, chr2, chr3,
                    enc1, enc2, enc3, enc4,
                    i = 0;
    
            do {
                chr1 = text.charCodeAt(i++);
                chr2 = text.charCodeAt(i++);
                chr3 = text.charCodeAt(i++);
    
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
    
                if(isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if(isNaN(chr3)) {
                    enc4 = 64;
                }
    
                result +=
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = '';
                enc1 = enc2 = enc3 = enc4 = '';
            } while(i < text.length);
    
            return result;
        };
    
        var mergeHeaders = function () {
            // Use the first header object as base.
            var result = arguments[0];
    
            // Iterate through the remaining header objects and add them.
            for(var i = 1; i < arguments.length; i++) {
                var currentHeaders = arguments[i];
                for(var header in currentHeaders) {
                    if(currentHeaders.hasOwnProperty(header)) {
                        result[header] = currentHeaders[header];
                    }
                }
            }
    
            // Return the merged headers.
            return result;
        };
    
        var ajax = function (method, url, options, callback) {
            // Adjust parameters.
            if(typeof options === 'function') {
                callback = options;
                options = {};
            }
    
            // Set default parameter values.
            options.cache = options.cache || false;
            options.data = options.data || {};
            options.headers = options.headers || {};
            options.jsonp = options.jsonp || false;
            options.async = options.async === undefined ? true : options.async;
    
            // Merge the various header objects.
            var headers = mergeHeaders({
                'accept': '*/*',
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }, ajax.headers, options.headers);
    
            // Encode the data according to the content-type.
            var payload;
            if (headers['content-type'] === 'application/json') {
                payload = JSON.stringify(options.data);
            } else {
                payload = encodeUsingUrlEncoding(options.data);
            }
    
            // Specially prepare GET requests: Setup the query string, handle caching and make a JSONP call
            // if neccessary.
            if(method === 'GET') {
                // Setup the query string.
                var queryString = [];
                if(payload) {
                    queryString.push(payload);
                    payload = null;
                }
    
                // Handle caching.
                if(!options.cache) {
                    queryString.push('_=' + (new Date()).getTime());
                }
    
                // If neccessary prepare the query string for a JSONP call.
                if(options.jsonp) {
                    queryString.push('callback=' + options.jsonp);
                    queryString.push('jsonp=' + options.jsonp);
                }
    
                // Merge the query string and attach it to the url.
                queryString = queryString.join('&');
                if (queryString.length > 1) {
                    if (url.indexOf('?') > -1) {
                        url += '&' + queryString;
                    } else {
                        url += '?' + queryString;
                    }
                }
    
                // Make a JSONP call if neccessary.
                if(options.jsonp) {
                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = url;
                    head.appendChild(script);
                    return;
                }
            }
    
            // Since we got here, it is no JSONP request, so make a normal XHR request.
            getXhr(function (err, xhr) {
                if(err) return callback(err);
    
                // Open the request.
                xhr.open(method, url, options.async);
    
                // Set the request headers.
                for(var header in headers) {
                    if(headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header, headers[header]);
                    }
                }
    
                // Handle the request events.
                xhr.onreadystatechange = function () {
                    if(xhr.readyState === 4) {
                        var data = xhr.responseText || '';
    
                        // If no callback is given, return.
                        if(!callback) {
                            return;
                        }
    
                        // Return an object that provides access to the data as text and JSON.
                        callback(xhr.status, {
                            text: function () {
                                return data;
                            },
    
                            json: function () {
                                try {
                                    return JSON.parse(data)
                                } catch (e) {
                                    f.error('Can not parse JSON. URL: ' + url);
                                    return {};
                                }
                            }
                        });
                    }
                };
    
                // Actually send the XHR request.
                xhr.send(payload);
            });
        };
    
        // Define the external interface.
        var http = {
            authBasic: function (username, password) {
                ajax.headers['Authorization'] = 'Basic ' + base64(username + ':' + password);
            },
    
            connect: function (url, options, callback) {
                return ajax('CONNECT', url, options, callback);
            },
    
            del: function (url, options, callback) {
                return ajax('DELETE', url, options, callback);
            },
    
            get: function (url, options, callback) {
                return ajax('GET', url, options, callback);
            },
    
            head: function (url, options, callback) {
                return ajax('HEAD', url, options, callback);
            },
    
            headers: function (headers) {
                ajax.headers = headers || {};
            },
    
            isAllowed: function (url, verb, callback) {
                this.options(url, function (status, data) {
                    callback(data.text().indexOf(verb) !== -1);
                });
            },
    
            options: function (url, options, callback) {
                return ajax('OPTIONS', url, options, callback);
            },
    
            patch: function (url, options, callback) {
                return ajax('PATCH', url, options, callback);
            },
    
            post: function (url, options, callback) {
                return ajax('POST', url, options, callback);
            },
    
            put: function (url, options, callback) {
                return ajax('PUT', url, options, callback);
            },
    
            trace: function (url, options, callback) {
                return ajax('TRACE', url, options, callback);
            }
        };
    
    
        var methode = options.type ? options.type.toLowerCase() : 'get';
    
        http[methode](options.url, options, function (status, data) {
            // file: protocol always gives status code 0, so check for data
            if (status === 200 || (status === 0 && data.text())) {
                options.success(data.json(), status, null);
            } else {
                options.error(data.text(), status, null);
            }
        });
    }
    
    var _cookie = {
        create: function(name,value,minutes,domain) {
            var expires;
            if (minutes) {
                var date = new Date();
                date.setTime(date.getTime()+(minutes*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            else expires = "";
            domain = (domain)? "domain="+domain+";" : "";
            document.cookie = name+"="+value+expires+";"+domain+"path=/";
        },
    
        read: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },
    
        remove: function(name) {
            this.create(name,"",-1);
        }
    };
    
    var cookie_noop = {
        create: function(name,value,minutes,domain) {},
        read: function(name) { return null; },
        remove: function(name) {}
    };
    
    
    
    // move dependent functions to a container so that
    // they can be overriden easier in no jquery environment (node.js)
    var f = {
        extend: $ ? $.extend : _extend,
        deepExtend: _deepExtend,
        each: $ ? $.each : _each,
        ajax: $ ? $.ajax : (typeof document !== 'undefined' ? _ajax : function() {}),
        cookie: typeof document !== 'undefined' ? _cookie : cookie_noop,
        detectLanguage: detectLanguage,
        escape: _escape,
        log: function(str) {
            if (o.debug && typeof console !== "undefined") console.log(str);
        },
        error: function(str) {
            if (typeof console !== "undefined") console.error(str);
        },
        getCountyIndexOfLng: function(lng) {
            var lng_index = 0;
            if (lng === 'nb-NO' || lng === 'nn-NO' || lng === 'nb-no' || lng === 'nn-no') lng_index = 1;
            return lng_index;
        },
        toLanguages: function(lng) {
            var log = this.log;
    
            function applyCase(l) {
                var ret = l;
    
                if (typeof l === 'string' && l.indexOf('-') > -1) {
                    var parts = l.split('-');
    
                    ret = o.lowerCaseLng ?
                        parts[0].toLowerCase() +  '-' + parts[1].toLowerCase() :
                        parts[0].toLowerCase() +  '-' + parts[1].toUpperCase();
                } else {
                    ret = o.lowerCaseLng ? l.toLowerCase() : l;
                }
    
                return ret;
            }
    
            var languages = [];
            var whitelist = o.lngWhitelist || false;
            var addLanguage = function(language){
              //reject langs not whitelisted
              if(!whitelist || whitelist.indexOf(language) > -1){
                languages.push(language);
              }else{
                log('rejecting non-whitelisted language: ' + language);
              }
            };
            if (typeof lng === 'string' && lng.indexOf('-') > -1) {
                var parts = lng.split('-');
    
                if (o.load !== 'unspecific') addLanguage(applyCase(lng));
                if (o.load !== 'current') addLanguage(applyCase(parts[this.getCountyIndexOfLng(lng)]));
            } else {
                addLanguage(applyCase(lng));
            }
    
            for (var i = 0; i < o.fallbackLng.length; i++) {
                if (languages.indexOf(o.fallbackLng[i]) === -1 && o.fallbackLng[i]) languages.push(applyCase(o.fallbackLng[i]));
            }
            return languages;
        },
        regexEscape: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        regexReplacementEscape: function(strOrFn) {
            if (typeof strOrFn === 'string') {
                return strOrFn.replace(/\$/g, "$$$$");
            } else {
                return strOrFn;
            }
        },
        localStorage: {
            setItem: function(key, value) {
                if (window.localStorage) {
                    try {
                        window.localStorage.setItem(key, value);
                    } catch (e) {
                        f.log('failed to set value for key "' + key + '" to localStorage.');
                    }
                }
            },
            getItem: function(key, value) {
                if (window.localStorage) {
                    try {
                        return window.localStorage.getItem(key, value);
                    } catch (e) {
                        f.log('failed to get value for key "' + key + '" from localStorage.');
                        return undefined;
                    }
                }
            }
        }
    };
    function init(options, cb) {
    
        if (typeof options === 'function') {
            cb = options;
            options = {};
        }
        options = options || {};
    
        // override defaults with passed in options
        f.extend(o, options);
        delete o.fixLng; /* passed in each time */
    
        // override functions: .log(), .detectLanguage(), etc
        if (o.functions) {
            delete o.functions;
            f.extend(f, options.functions);
        }
    
        // create namespace object if namespace is passed in as string
        if (typeof o.ns == 'string') {
            o.ns = { namespaces: [o.ns], defaultNs: o.ns};
        }
    
        // fallback namespaces
        if (typeof o.fallbackNS == 'string') {
            o.fallbackNS = [o.fallbackNS];
        }
    
        // fallback languages
        if (typeof o.fallbackLng == 'string' || typeof o.fallbackLng == 'boolean') {
            o.fallbackLng = [o.fallbackLng];
        }
    
        // escape prefix/suffix
        o.interpolationPrefixEscaped = f.regexEscape(o.interpolationPrefix);
        o.interpolationSuffixEscaped = f.regexEscape(o.interpolationSuffix);
    
        if (!o.lng) o.lng = f.detectLanguage();
    
        languages = f.toLanguages(o.lng);
        currentLng = languages[0];
        f.log('currentLng set to: ' + currentLng);
    
        if (o.useCookie && f.cookie.read(o.cookieName) !== currentLng){ //cookie is unset or invalid
            f.cookie.create(o.cookieName, currentLng, o.cookieExpirationTime, o.cookieDomain);
        }
        if (o.detectLngFromLocalStorage && typeof document !== 'undefined' && window.localStorage) {
            f.localStorage.setItem('i18next_lng', currentLng);
        }
    
        var lngTranslate = translate;
        if (options.fixLng) {
            lngTranslate = function(key, options) {
                options = options || {};
                options.lng = options.lng || lngTranslate.lng;
                return translate(key, options);
            };
            lngTranslate.lng = currentLng;
        }
    
        pluralExtensions.setCurrentLng(currentLng);
    
        // add JQuery extensions
        if ($ && o.setJqueryExt) addJqueryFunct();
    
        // jQuery deferred
        var deferred;
        if ($ && $.Deferred) {
            deferred = $.Deferred();
        }
    
        // return immidiatly if res are passed in
        if (o.resStore) {
            resStore = o.resStore;
            initialized = true;
            if (cb) cb(lngTranslate);
            if (deferred) deferred.resolve(lngTranslate);
            if (deferred) return deferred.promise();
            return;
        }
    
        // languages to load
        var lngsToLoad = f.toLanguages(o.lng);
        if (typeof o.preload === 'string') o.preload = [o.preload];
        for (var i = 0, l = o.preload.length; i < l; i++) {
            var pres = f.toLanguages(o.preload[i]);
            for (var y = 0, len = pres.length; y < len; y++) {
                if (lngsToLoad.indexOf(pres[y]) < 0) {
                    lngsToLoad.push(pres[y]);
                }
            }
        }
    
        // else load them
        i18n.sync.load(lngsToLoad, o, function(err, store) {
            resStore = store;
            initialized = true;
    
            if (cb) cb(lngTranslate);
            if (deferred) deferred.resolve(lngTranslate);
        });
    
        if (deferred) return deferred.promise();
    }
    
    function isInitialized() {
        return initialized;
    }
    function preload(lngs, cb) {
        if (typeof lngs === 'string') lngs = [lngs];
        for (var i = 0, l = lngs.length; i < l; i++) {
            if (o.preload.indexOf(lngs[i]) < 0) {
                o.preload.push(lngs[i]);
            }
        }
        return init(cb);
    }
    
    function addResourceBundle(lng, ns, resources, deep) {
        if (typeof ns !== 'string') {
            resources = ns;
            ns = o.ns.defaultNs;
        } else if (o.ns.namespaces.indexOf(ns) < 0) {
            o.ns.namespaces.push(ns);
        }
    
        resStore[lng] = resStore[lng] || {};
        resStore[lng][ns] = resStore[lng][ns] || {};
    
        if (deep) {
            f.deepExtend(resStore[lng][ns], resources);
        } else {
            f.extend(resStore[lng][ns], resources);
        }
        if (o.useLocalStorage) {
            sync._storeLocal(resStore);
        }
    }
    
    function hasResourceBundle(lng, ns) {
        if (typeof ns !== 'string') {
            ns = o.ns.defaultNs;
        }
    
        resStore[lng] = resStore[lng] || {};
        var res = resStore[lng][ns] || {};
    
        var hasValues = false;
        for(var prop in res) {
            if (res.hasOwnProperty(prop)) {
                hasValues = true;
            }
        }
    
        return hasValues;
    }
    
    function getResourceBundle(lng, ns) {
        if (typeof ns !== 'string') {
            ns = o.ns.defaultNs;
        }
    
        resStore[lng] = resStore[lng] || {};
        return f.extend({}, resStore[lng][ns]);
    }
    
    function removeResourceBundle(lng, ns) {
        if (typeof ns !== 'string') {
            ns = o.ns.defaultNs;
        }
    
        resStore[lng] = resStore[lng] || {};
        resStore[lng][ns] = {};
        if (o.useLocalStorage) {
            sync._storeLocal(resStore);
        }
    }
    
    function addResource(lng, ns, key, value) {
        if (typeof ns !== 'string') {
            resource = ns;
            ns = o.ns.defaultNs;
        } else if (o.ns.namespaces.indexOf(ns) < 0) {
            o.ns.namespaces.push(ns);
        }
    
        resStore[lng] = resStore[lng] || {};
        resStore[lng][ns] = resStore[lng][ns] || {};
    
        var keys = key.split(o.keyseparator);
        var x = 0;
        var node = resStore[lng][ns];
        var origRef = node;
    
        while (keys[x]) {
            if (x == keys.length - 1)
                node[keys[x]] = value;
            else {
                if (node[keys[x]] == null)
                    node[keys[x]] = {};
    
                node = node[keys[x]];
            }
            x++;
        }
        if (o.useLocalStorage) {
            sync._storeLocal(resStore);
        }
    }
    
    function addResources(lng, ns, resources) {
        if (typeof ns !== 'string') {
            resource = ns;
            ns = o.ns.defaultNs;
        } else if (o.ns.namespaces.indexOf(ns) < 0) {
            o.ns.namespaces.push(ns);
        }
    
        for (var m in resources) {
            if (typeof resources[m] === 'string') addResource(lng, ns, m, resources[m]);
        }
    }
    
    function setDefaultNamespace(ns) {
        o.ns.defaultNs = ns;
    }
    
    function loadNamespace(namespace, cb) {
        loadNamespaces([namespace], cb);
    }
    
    function loadNamespaces(namespaces, cb) {
        var opts = {
            dynamicLoad: o.dynamicLoad,
            resGetPath: o.resGetPath,
            getAsync: o.getAsync,
            customLoad: o.customLoad,
            ns: { namespaces: namespaces, defaultNs: ''} /* new namespaces to load */
        };
    
        // languages to load
        var lngsToLoad = f.toLanguages(o.lng);
        if (typeof o.preload === 'string') o.preload = [o.preload];
        for (var i = 0, l = o.preload.length; i < l; i++) {
            var pres = f.toLanguages(o.preload[i]);
            for (var y = 0, len = pres.length; y < len; y++) {
                if (lngsToLoad.indexOf(pres[y]) < 0) {
                    lngsToLoad.push(pres[y]);
                }
            }
        }
    
        // check if we have to load
        var lngNeedLoad = [];
        for (var a = 0, lenA = lngsToLoad.length; a < lenA; a++) {
            var needLoad = false;
            var resSet = resStore[lngsToLoad[a]];
            if (resSet) {
                for (var b = 0, lenB = namespaces.length; b < lenB; b++) {
                    if (!resSet[namespaces[b]]) needLoad = true;
                }
            } else {
                needLoad = true;
            }
    
            if (needLoad) lngNeedLoad.push(lngsToLoad[a]);
        }
    
        if (lngNeedLoad.length) {
            i18n.sync._fetch(lngNeedLoad, opts, function(err, store) {
                var todo = namespaces.length * lngNeedLoad.length;
    
                // load each file individual
                f.each(namespaces, function(nsIndex, nsValue) {
    
                    // append namespace to namespace array
                    if (o.ns.namespaces.indexOf(nsValue) < 0) {
                        o.ns.namespaces.push(nsValue);
                    }
    
                    f.each(lngNeedLoad, function(lngIndex, lngValue) {
                        resStore[lngValue] = resStore[lngValue] || {};
                        resStore[lngValue][nsValue] = store[lngValue][nsValue];
    
                        todo--; // wait for all done befor callback
                        if (todo === 0 && cb) {
                            if (o.useLocalStorage) i18n.sync._storeLocal(resStore);
                            cb();
                        }
                    });
                });
            });
        } else {
            if (cb) cb();
        }
    }
    
    function setLng(lng, options, cb) {
        if (typeof options === 'function') {
            cb = options;
            options = {};
        } else if (!options) {
            options = {};
        }
    
        options.lng = lng;
        return init(options, cb);
    }
    
    function lng() {
        return currentLng;
    }
    
    function reload(cb) {
        resStore = {};
        setLng(currentLng, cb);
    }
    
    function noConflict() {
        
        window.i18next = window.i18n;
    
        if (conflictReference) {
            window.i18n = conflictReference;
        } else {
            delete window.i18n;
        }
    }
    function addJqueryFunct() {
        // $.t shortcut
        $.t = $.t || translate;
    
        function parse(ele, key, options) {
            if (key.length === 0) return;
    
            var attr = 'text';
    
            if (key.indexOf('[') === 0) {
                var parts = key.split(']');
                key = parts[1];
                attr = parts[0].substr(1, parts[0].length-1);
            }
    
            if (key.indexOf(';') === key.length-1) {
                key = key.substr(0, key.length-2);
            }
    
            var optionsToUse;
            if (attr === 'html') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.html($.t(key, optionsToUse));
            } else if (attr === 'text') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.text() }, options) : options;
                ele.text($.t(key, optionsToUse));
            } else if (attr === 'prepend') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.prepend($.t(key, optionsToUse));
            } else if (attr === 'append') {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.html() }, options) : options;
                ele.append($.t(key, optionsToUse));
            } else if (attr.indexOf("data-") === 0) {
                var dataAttr = attr.substr(("data-").length);
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.data(dataAttr) }, options) : options;
                var translated = $.t(key, optionsToUse);
                //we change into the data cache
                ele.data(dataAttr, translated);
                //we change into the dom
                ele.attr(attr, translated);
            } else {
                optionsToUse = o.defaultValueFromContent ? $.extend({ defaultValue: ele.attr(attr) }, options) : options;
                ele.attr(attr, $.t(key, optionsToUse));
            }
        }
    
        function localize(ele, options) {
            var key = ele.attr(o.selectorAttr);
            if (!key && typeof key !== 'undefined' && key !== false) key = ele.text() || ele.val();
            if (!key) return;
    
            var target = ele
              , targetSelector = ele.data("i18n-target");
            if (targetSelector) {
                target = ele.find(targetSelector) || ele;
            }
    
            if (!options && o.useDataAttrOptions === true) {
                options = ele.data("i18n-options");
            }
            options = options || {};
    
            if (key.indexOf(';') >= 0) {
                var keys = key.split(';');
    
                $.each(keys, function(m, k) {
                    if (k !== '') parse(target, k, options);
                });
    
            } else {
                parse(target, key, options);
            }
    
            if (o.useDataAttrOptions === true) ele.data("i18n-options", options);
        }
    
        // fn
        $.fn.i18n = function (options) {
            return this.each(function() {
                // localize element itself
                localize($(this), options);
    
                // localize childs
                var elements =  $(this).find('[' + o.selectorAttr + ']');
                elements.each(function() { 
                    localize($(this), options);
                });
            });
        };
    }
    function applyReplacement(str, replacementHash, nestedKey, options) {
        if (!str) return str;
    
        options = options || replacementHash; // first call uses replacement hash combined with options
        if (str.indexOf(options.interpolationPrefix || o.interpolationPrefix) < 0) return str;
    
        var prefix = options.interpolationPrefix ? f.regexEscape(options.interpolationPrefix) : o.interpolationPrefixEscaped
          , suffix = options.interpolationSuffix ? f.regexEscape(options.interpolationSuffix) : o.interpolationSuffixEscaped
          , unEscapingSuffix = 'HTML'+suffix;
    
        var hash = replacementHash.replace && typeof replacementHash.replace === 'object' ? replacementHash.replace : replacementHash;
        f.each(hash, function(key, value) {
            var nextKey = nestedKey ? nestedKey + o.keyseparator + key : key;
            if (typeof value === 'object' && value !== null) {
                str = applyReplacement(str, value, nextKey, options);
            } else {
                if (options.escapeInterpolation || o.escapeInterpolation) {
                    str = str.replace(new RegExp([prefix, nextKey, unEscapingSuffix].join(''), 'g'), f.regexReplacementEscape(value));
                    str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), f.regexReplacementEscape(f.escape(value)));
                } else {
                    str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), f.regexReplacementEscape(value));
                }
                // str = options.escapeInterpolation;
            }
        });
        return str;
    }
    
    // append it to functions
    f.applyReplacement = applyReplacement;
    
    function applyReuse(translated, options) {
        var comma = ',';
        var options_open = '{';
        var options_close = '}';
    
        var opts = f.extend({}, options);
        delete opts.postProcess;
    
        while (translated.indexOf(o.reusePrefix) != -1) {
            replacementCounter++;
            if (replacementCounter > o.maxRecursion) { break; } // safety net for too much recursion
            var index_of_opening = translated.lastIndexOf(o.reusePrefix);
            var index_of_end_of_closing = translated.indexOf(o.reuseSuffix, index_of_opening) + o.reuseSuffix.length;
            var token = translated.substring(index_of_opening, index_of_end_of_closing);
            var token_without_symbols = token.replace(o.reusePrefix, '').replace(o.reuseSuffix, '');
    
            if (index_of_end_of_closing <= index_of_opening) {
                f.error('there is an missing closing in following translation value', translated);
                return '';
            }
    
            if (token_without_symbols.indexOf(comma) != -1) {
                var index_of_token_end_of_closing = token_without_symbols.indexOf(comma);
                if (token_without_symbols.indexOf(options_open, index_of_token_end_of_closing) != -1 && token_without_symbols.indexOf(options_close, index_of_token_end_of_closing) != -1) {
                    var index_of_opts_opening = token_without_symbols.indexOf(options_open, index_of_token_end_of_closing);
                    var index_of_opts_end_of_closing = token_without_symbols.indexOf(options_close, index_of_opts_opening) + options_close.length;
                    try {
                        opts = f.extend(opts, JSON.parse(token_without_symbols.substring(index_of_opts_opening, index_of_opts_end_of_closing)));
                        token_without_symbols = token_without_symbols.substring(0, index_of_token_end_of_closing);
                    } catch (e) {
                    }
                }
            }
    
            var translated_token = _translate(token_without_symbols, opts);
            translated = translated.replace(token, f.regexReplacementEscape(translated_token));
        }
        return translated;
    }
    
    function hasContext(options) {
        return (options.context && (typeof options.context == 'string' || typeof options.context == 'number'));
    }
    
    function needsPlural(options, lng) {
        return (options.count !== undefined && typeof options.count != 'string'/* && pluralExtensions.needsPlural(lng, options.count)*/);
    }
    
    function needsIndefiniteArticle(options) {
        return (options.indefinite_article !== undefined && typeof options.indefinite_article != 'string' && options.indefinite_article);
    }
    
    function exists(key, options) {
        options = options || {};
    
        var notFound = _getDefaultValue(key, options)
            , found = _find(key, options);
    
        return found !== undefined || found === notFound;
    }
    
    function translate(key, options) {
        options = options || {};
    
        if (!initialized) {
            f.log('i18next not finished initialization. you might have called t function before loading resources finished.')
            return options.defaultValue || '';
        };
        replacementCounter = 0;
        return _translate.apply(null, arguments);
    }
    
    function _getDefaultValue(key, options) {
        return (options.defaultValue !== undefined) ? options.defaultValue : key;
    }
    
    function _injectSprintfProcessor() {
    
        var values = [];
    
        // mh: build array from second argument onwards
        for (var i = 1; i < arguments.length; i++) {
            values.push(arguments[i]);
        }
    
        return {
            postProcess: 'sprintf',
            sprintf:     values
        };
    }
    
    function _translate(potentialKeys, options) {
        if (options && typeof options !== 'object') {
            if (o.shortcutFunction === 'sprintf') {
                // mh: gettext like sprintf syntax found, automatically create sprintf processor
                options = _injectSprintfProcessor.apply(null, arguments);
            } else if (o.shortcutFunction === 'defaultValue') {
                options = {
                    defaultValue: options
                }
            }
        } else {
            options = options || {};
        }
    
        if (typeof o.defaultVariables === 'object') {
            options = f.extend({}, o.defaultVariables, options);
        }
    
        if (potentialKeys === undefined || potentialKeys === null || potentialKeys === '') return '';
    
        if (typeof potentialKeys === 'number') {
            potentialKeys = String(potentialKeys);
        }
    
        if (typeof potentialKeys === 'string') {
            potentialKeys = [potentialKeys];
        }
    
        var key = potentialKeys[0];
    
        if (potentialKeys.length > 1) {
            for (var i = 0; i < potentialKeys.length; i++) {
                key = potentialKeys[i];
                if (exists(key, options)) {
                    break;
                }
            }
        }
    
        var notFound = _getDefaultValue(key, options)
            , found = _find(key, options)
            , lngs = options.lng ? f.toLanguages(options.lng, options.fallbackLng) : languages
            , ns = options.ns || o.ns.defaultNs
            , parts;
    
        // split ns and key
        if (key.indexOf(o.nsseparator) > -1) {
            parts = key.split(o.nsseparator);
            ns = parts[0];
            key = parts[1];
        }
    
        if (found === undefined && o.sendMissing && typeof o.missingKeyHandler === 'function') {
            if (options.lng) {
                o.missingKeyHandler(lngs[0], ns, key, notFound, lngs);
            } else {
                o.missingKeyHandler(o.lng, ns, key, notFound, lngs);
            }
        }
    
        var postProcessorsToApply;
        if (typeof o.postProcess === 'string' && o.postProcess !== '') {
            postProcessorsToApply = [o.postProcess];
        } else if (typeof o.postProcess === 'array' || typeof o.postProcess === 'object') {
            postProcessorsToApply = o.postProcess;
        } else {
            postProcessorsToApply = [];
        }
    
        if (typeof options.postProcess === 'string' && options.postProcess !== '') {
            postProcessorsToApply = postProcessorsToApply.concat([options.postProcess]);
        } else if (typeof options.postProcess === 'array' || typeof options.postProcess === 'object') {
            postProcessorsToApply = postProcessorsToApply.concat(options.postProcess);
        }
    
        if (found !== undefined && postProcessorsToApply.length) {
            postProcessorsToApply.forEach(function(postProcessor) {
                if (postProcessors[postProcessor]) {
                    found = postProcessors[postProcessor](found, key, options);
                }
            });
        }
    
        // process notFound if function exists
        var splitNotFound = notFound;
        if (notFound.indexOf(o.nsseparator) > -1) {
            parts = notFound.split(o.nsseparator);
            splitNotFound = parts[1];
        }
        if (splitNotFound === key && o.parseMissingKey) {
            notFound = o.parseMissingKey(notFound);
        }
    
        if (found === undefined) {
            notFound = applyReplacement(notFound, options);
            notFound = applyReuse(notFound, options);
    
            if (postProcessorsToApply.length) {
                var val = _getDefaultValue(key, options);
                postProcessorsToApply.forEach(function(postProcessor) {
                    if (postProcessors[postProcessor]) {
                        found = postProcessors[postProcessor](val, key, options);
                    }
                });
            }
        }
    
        return (found !== undefined) ? found : notFound;
    }
    
    function _find(key, options) {
        options = options || {};
    
        var optionWithoutCount, translated
            , notFound = _getDefaultValue(key, options)
            , lngs = languages;
    
        if (!resStore) { return notFound; } // no resStore to translate from
    
        // CI mode
        if (lngs[0].toLowerCase() === 'cimode') return notFound;
    
        // passed in lng
        if (options.lngs) lngs = options.lngs;
        if (options.lng) {
            lngs = f.toLanguages(options.lng, options.fallbackLng);
    
            if (!resStore[lngs[0]]) {
                var oldAsync = o.getAsync;
                o.getAsync = false;
    
                i18n.sync.load(lngs, o, function(err, store) {
                    f.extend(resStore, store);
                    o.getAsync = oldAsync;
                });
            }
        }
    
        var ns = options.ns || o.ns.defaultNs;
        if (key.indexOf(o.nsseparator) > -1) {
            var parts = key.split(o.nsseparator);
            ns = parts[0];
            key = parts[1];
        }
    
        if (hasContext(options)) {
            optionWithoutCount = f.extend({}, options);
            delete optionWithoutCount.context;
            optionWithoutCount.defaultValue = o.contextNotFound;
    
            var contextKey = ns + o.nsseparator + key + '_' + options.context;
    
            translated = translate(contextKey, optionWithoutCount);
            if (translated != o.contextNotFound) {
                return applyReplacement(translated, { context: options.context }); // apply replacement for context only
            } // else continue translation with original/nonContext key
        }
    
        if (needsPlural(options, lngs[0])) {
            optionWithoutCount = f.extend({ lngs: [lngs[0]]}, options);
            delete optionWithoutCount.count;
            optionWithoutCount._origLng = optionWithoutCount._origLng || optionWithoutCount.lng || lngs[0];
            delete optionWithoutCount.lng;
            optionWithoutCount.defaultValue = o.pluralNotFound;
    
            var pluralKey;
            if (!pluralExtensions.needsPlural(lngs[0], options.count)) {
                pluralKey = ns + o.nsseparator + key;
            } else {
                pluralKey = ns + o.nsseparator + key + o.pluralSuffix;
                var pluralExtension = pluralExtensions.get(lngs[0], options.count);
                if (pluralExtension >= 0) {
                    pluralKey = pluralKey + '_' + pluralExtension;
                } else if (pluralExtension === 1) {
                    pluralKey = ns + o.nsseparator + key; // singular
                }
            }
    
            translated = translate(pluralKey, optionWithoutCount);
    
            if (translated != o.pluralNotFound) {
                return applyReplacement(translated, {
                    count: options.count,
                    interpolationPrefix: options.interpolationPrefix,
                    interpolationSuffix: options.interpolationSuffix
                }); // apply replacement for count only
            } else if (lngs.length > 1) {
                // remove failed lng
                var clone = lngs.slice();
                clone.shift();
                options = f.extend(options, { lngs: clone });
                options._origLng = optionWithoutCount._origLng;
                delete options.lng;
                // retry with fallbacks
                translated = translate(ns + o.nsseparator + key, options);
                if (translated != o.pluralNotFound) return translated;
            } else {
                optionWithoutCount.lng = optionWithoutCount._origLng;
                delete optionWithoutCount._origLng;
                translated = translate(ns + o.nsseparator + key, optionWithoutCount);
    
                return applyReplacement(translated, {
                    count: options.count,
                    interpolationPrefix: options.interpolationPrefix,
                    interpolationSuffix: options.interpolationSuffix
                });
            }
        }
    
        if (needsIndefiniteArticle(options)) {
            var optionsWithoutIndef = f.extend({}, options);
            delete optionsWithoutIndef.indefinite_article;
            optionsWithoutIndef.defaultValue = o.indefiniteNotFound;
            // If we don't have a count, we want the indefinite, if we do have a count, and needsPlural is false
            var indefiniteKey = ns + o.nsseparator + key + (((options.count && !needsPlural(options, lngs[0])) || !options.count) ? o.indefiniteSuffix : "");
            translated = translate(indefiniteKey, optionsWithoutIndef);
            if (translated != o.indefiniteNotFound) {
                return translated;
            }
        }
    
        var found;
        var keys = key.split(o.keyseparator);
        for (var i = 0, len = lngs.length; i < len; i++ ) {
            if (found !== undefined) break;
    
            var l = lngs[i];
    
            var x = 0;
            var value = resStore[l] && resStore[l][ns];
            while (keys[x]) {
                value = value && value[keys[x]];
                x++;
            }
            if (value !== undefined && (!o.showKeyIfEmpty || value !== '')) {
                var valueType = Object.prototype.toString.apply(value);
                if (typeof value === 'string') {
                    value = applyReplacement(value, options);
                    value = applyReuse(value, options);
                } else if (valueType === '[object Array]' && !o.returnObjectTrees && !options.returnObjectTrees) {
                    value = value.join('\n');
                    value = applyReplacement(value, options);
                    value = applyReuse(value, options);
                } else if (value === null && o.fallbackOnNull === true) {
                    value = undefined;
                } else if (value !== null) {
                    if (!o.returnObjectTrees && !options.returnObjectTrees) {
                        if (o.objectTreeKeyHandler && typeof o.objectTreeKeyHandler == 'function') {
                            value = o.objectTreeKeyHandler(key, value, l, ns, options);
                        } else {
                            value = 'key \'' + ns + ':' + key + ' (' + l + ')\' ' +
                                'returned an object instead of string.';
                            f.log(value);
                        }
                    } else if (valueType !== '[object Number]' && valueType !== '[object Function]' && valueType !== '[object RegExp]') {
                        var copy = (valueType === '[object Array]') ? [] : {}; // apply child translation on a copy
                        f.each(value, function(m) {
                            copy[m] = _translate(ns + o.nsseparator + key + o.keyseparator + m, options);
                        });
                        value = copy;
                    }
                }
    
                if (typeof value === 'string' && value.trim() === '' && o.fallbackOnEmpty === true)
                    value = undefined;
    
                found = value;
            }
        }
    
        if (found === undefined && !options.isFallbackLookup && (o.fallbackToDefaultNS === true || (o.fallbackNS && o.fallbackNS.length > 0))) {
            // set flag for fallback lookup - avoid recursion
            options.isFallbackLookup = true;
    
            if (o.fallbackNS.length) {
    
                for (var y = 0, lenY = o.fallbackNS.length; y < lenY; y++) {
                    found = _find(o.fallbackNS[y] + o.nsseparator + key, options);
    
                    if (found || (found==="" && o.fallbackOnEmpty === false)) {
                        /* compare value without namespace */
                        var foundValue = found.indexOf(o.nsseparator) > -1 ? found.split(o.nsseparator)[1] : found
                          , notFoundValue = notFound.indexOf(o.nsseparator) > -1 ? notFound.split(o.nsseparator)[1] : notFound;
    
                        if (foundValue !== notFoundValue) break;
                    }
                }
            } else {
                options.ns = o.ns.defaultNs;
                found = _find(key, options); // fallback to default NS
            }
            options.isFallbackLookup = false;
        }
    
        return found;
    }
    function detectLanguage() {
        var detectedLng;
        var whitelist = o.lngWhitelist || [];
        var userLngChoices = [];
    
        // get from qs
        var qsParm = [];
        if (typeof window !== 'undefined') {
            (function() {
                var query = window.location.search.substring(1);
                var params = query.split('&');
                for (var i=0; i<params.length; i++) {
                    var pos = params[i].indexOf('=');
                    if (pos > 0) {
                        var key = params[i].substring(0,pos);
                        if (key == o.detectLngQS) {
                            userLngChoices.push(params[i].substring(pos+1));
                        }
                    }
                }
            })();
        }
    
        // get from cookie
        if (o.useCookie && typeof document !== 'undefined') {
            var c = f.cookie.read(o.cookieName);
            if (c) userLngChoices.push(c);
        }
    
        // get from localStorage
        if (o.detectLngFromLocalStorage && typeof window !== 'undefined' && window.localStorage) {
            var lang = f.localStorage.getItem('i18next_lng');
            if (lang) {
                userLngChoices.push(lang);
            }
        }
    
        // get from navigator
        if (typeof navigator !== 'undefined') {
            if (navigator.languages) { // chrome only; not an array, so can't use .push.apply instead of iterating
                for (var i=0;i<navigator.languages.length;i++) {
                    userLngChoices.push(navigator.languages[i]);
                }
            }
            if (navigator.userLanguage) {
                userLngChoices.push(navigator.userLanguage);
            }
            if (navigator.language) {
                userLngChoices.push(navigator.language);
            }
        }
    
        (function() {
            for (var i=0;i<userLngChoices.length;i++) {
                var lng = userLngChoices[i];
    
                if (lng.indexOf('-') > -1) {
                    var parts = lng.split('-');
                    lng = o.lowerCaseLng ?
                        parts[0].toLowerCase() +  '-' + parts[1].toLowerCase() :
                        parts[0].toLowerCase() +  '-' + parts[1].toUpperCase();
                }
    
                if (whitelist.length === 0 || whitelist.indexOf(lng) > -1) {
                    detectedLng = lng;
                    break;
                }
            }
        })();
    
        //fallback
        if (!detectedLng){
          detectedLng = o.fallbackLng[0];
        }
        
        return detectedLng;
    }
    // definition http://translate.sourceforge.net/wiki/l10n/pluralforms
    
    /* [code, name, numbers, pluralsType] */
    var _rules = [
        ["ach", "Acholi", [1,2], 1],
        ["af", "Afrikaans",[1,2], 2],
        ["ak", "Akan", [1,2], 1],
        ["am", "Amharic", [1,2], 1],
        ["an", "Aragonese",[1,2], 2],
        ["ar", "Arabic", [0,1,2,3,11,100],5],
        ["arn", "Mapudungun",[1,2], 1],
        ["ast", "Asturian", [1,2], 2],
        ["ay", "Aymará", [1], 3],
        ["az", "Azerbaijani",[1,2],2],
        ["be", "Belarusian",[1,2,5],4],
        ["bg", "Bulgarian",[1,2], 2],
        ["bn", "Bengali", [1,2], 2],
        ["bo", "Tibetan", [1], 3],
        ["br", "Breton", [1,2], 1],
        ["bs", "Bosnian", [1,2,5],4],
        ["ca", "Catalan", [1,2], 2],
        ["cgg", "Chiga", [1], 3],
        ["cs", "Czech", [1,2,5],6],
        ["csb", "Kashubian",[1,2,5],7],
        ["cy", "Welsh", [1,2,3,8],8],
        ["da", "Danish", [1,2], 2],
        ["de", "German", [1,2], 2],
        ["dev", "Development Fallback", [1,2], 2],
        ["dz", "Dzongkha", [1], 3],
        ["el", "Greek", [1,2], 2],
        ["en", "English", [1,2], 2],
        ["eo", "Esperanto",[1,2], 2],
        ["es", "Spanish", [1,2], 2],
        ["es_ar","Argentinean Spanish", [1,2], 2],
        ["et", "Estonian", [1,2], 2],
        ["eu", "Basque", [1,2], 2],
        ["fa", "Persian", [1], 3],
        ["fi", "Finnish", [1,2], 2],
        ["fil", "Filipino", [1,2], 1],
        ["fo", "Faroese", [1,2], 2],
        ["fr", "French", [1,2], 9],
        ["fur", "Friulian", [1,2], 2],
        ["fy", "Frisian", [1,2], 2],
        ["ga", "Irish", [1,2,3,7,11],10],
        ["gd", "Scottish Gaelic",[1,2,3,20],11],
        ["gl", "Galician", [1,2], 2],
        ["gu", "Gujarati", [1,2], 2],
        ["gun", "Gun", [1,2], 1],
        ["ha", "Hausa", [1,2], 2],
        ["he", "Hebrew", [1,2], 2],
        ["hi", "Hindi", [1,2], 2],
        ["hr", "Croatian", [1,2,5],4],
        ["hu", "Hungarian",[1,2], 2],
        ["hy", "Armenian", [1,2], 2],
        ["ia", "Interlingua",[1,2],2],
        ["id", "Indonesian",[1], 3],
        ["is", "Icelandic",[1,2], 12],
        ["it", "Italian", [1,2], 2],
        ["ja", "Japanese", [1], 3],
        ["jbo", "Lojban", [1], 3],
        ["jv", "Javanese", [0,1], 13],
        ["ka", "Georgian", [1], 3],
        ["kk", "Kazakh", [1], 3],
        ["km", "Khmer", [1], 3],
        ["kn", "Kannada", [1,2], 2],
        ["ko", "Korean", [1], 3],
        ["ku", "Kurdish", [1,2], 2],
        ["kw", "Cornish", [1,2,3,4],14],
        ["ky", "Kyrgyz", [1], 3],
        ["lb", "Letzeburgesch",[1,2],2],
        ["ln", "Lingala", [1,2], 1],
        ["lo", "Lao", [1], 3],
        ["lt", "Lithuanian",[1,2,10],15],
        ["lv", "Latvian", [1,2,0],16],
        ["mai", "Maithili", [1,2], 2],
        ["mfe", "Mauritian Creole",[1,2],1],
        ["mg", "Malagasy", [1,2], 1],
        ["mi", "Maori", [1,2], 1],
        ["mk", "Macedonian",[1,2],17],
        ["ml", "Malayalam",[1,2], 2],
        ["mn", "Mongolian",[1,2], 2],
        ["mnk", "Mandinka", [0,1,2],18],
        ["mr", "Marathi", [1,2], 2],
        ["ms", "Malay", [1], 3],
        ["mt", "Maltese", [1,2,11,20],19],
        ["nah", "Nahuatl", [1,2], 2],
        ["nap", "Neapolitan",[1,2], 2],
        ["nb", "Norwegian Bokmal",[1,2],2],
        ["ne", "Nepali", [1,2], 2],
        ["nl", "Dutch", [1,2], 2],
        ["nn", "Norwegian Nynorsk",[1,2],2],
        ["no", "Norwegian",[1,2], 2],
        ["nso", "Northern Sotho",[1,2],2],
        ["oc", "Occitan", [1,2], 1],
        ["or", "Oriya", [2,1], 2],
        ["pa", "Punjabi", [1,2], 2],
        ["pap", "Papiamento",[1,2], 2],
        ["pl", "Polish", [1,2,5],7],
        ["pms", "Piemontese",[1,2], 2],
        ["ps", "Pashto", [1,2], 2],
        ["pt", "Portuguese",[1,2], 2],
        ["pt_br","Brazilian Portuguese",[1,2], 2],
        ["rm", "Romansh", [1,2], 2],
        ["ro", "Romanian", [1,2,20],20],
        ["ru", "Russian", [1,2,5],4],
        ["sah", "Yakut", [1], 3],
        ["sco", "Scots", [1,2], 2],
        ["se", "Northern Sami",[1,2], 2],
        ["si", "Sinhala", [1,2], 2],
        ["sk", "Slovak", [1,2,5],6],
        ["sl", "Slovenian",[5,1,2,3],21],
        ["so", "Somali", [1,2], 2],
        ["son", "Songhay", [1,2], 2],
        ["sq", "Albanian", [1,2], 2],
        ["sr", "Serbian", [1,2,5],4],
        ["su", "Sundanese",[1], 3],
        ["sv", "Swedish", [1,2], 2],
        ["sw", "Swahili", [1,2], 2],
        ["ta", "Tamil", [1,2], 2],
        ["te", "Telugu", [1,2], 2],
        ["tg", "Tajik", [1,2], 1],
        ["th", "Thai", [1], 3],
        ["ti", "Tigrinya", [1,2], 1],
        ["tk", "Turkmen", [1,2], 2],
        ["tr", "Turkish", [1,2], 1],
        ["tt", "Tatar", [1], 3],
        ["ug", "Uyghur", [1], 3],
        ["uk", "Ukrainian",[1,2,5],4],
        ["ur", "Urdu", [1,2], 2],
        ["uz", "Uzbek", [1,2], 1],
        ["vi", "Vietnamese",[1], 3],
        ["wa", "Walloon", [1,2], 1],
        ["wo", "Wolof", [1], 3],
        ["yo", "Yoruba", [1,2], 2],
        ["zh", "Chinese", [1], 3]
    ];
    
    var _rulesPluralsTypes = {
        1: function(n) {return Number(n > 1);},
        2: function(n) {return Number(n != 1);},
        3: function(n) {return 0;},
        4: function(n) {return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);},
        5: function(n) {return Number(n===0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5);},
        6: function(n) {return Number((n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2);},
        7: function(n) {return Number(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);},
        8: function(n) {return Number((n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3);},
        9: function(n) {return Number(n >= 2);},
        10: function(n) {return Number(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4) ;},
        11: function(n) {return Number((n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3);},
        12: function(n) {return Number(n%10!=1 || n%100==11);},
        13: function(n) {return Number(n !== 0);},
        14: function(n) {return Number((n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3);},
        15: function(n) {return Number(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2);},
        16: function(n) {return Number(n%10==1 && n%100!=11 ? 0 : n !== 0 ? 1 : 2);},
        17: function(n) {return Number(n==1 || n%10==1 ? 0 : 1);},
        18: function(n) {return Number(0 ? 0 : n==1 ? 1 : 2);},
        19: function(n) {return Number(n==1 ? 0 : n===0 || ( n%100>1 && n%100<11) ? 1 : (n%100>10 && n%100<20 ) ? 2 : 3);},
        20: function(n) {return Number(n==1 ? 0 : (n===0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2);},
        21: function(n) {return Number(n%100==1 ? 1 : n%100==2 ? 2 : n%100==3 || n%100==4 ? 3 : 0); }
    };
    
    var pluralExtensions = {
    
        rules: (function () {
            var l, rules = {};
            for (l=_rules.length; l-- ;) {
                rules[_rules[l][0]] = {
                    name: _rules[l][1],
                    numbers: _rules[l][2],
                    plurals: _rulesPluralsTypes[_rules[l][3]]
                }
            }
            return rules;
        }()),
    
        // you can add your own pluralExtensions
        addRule: function(lng, obj) {
            pluralExtensions.rules[lng] = obj;
        },
    
        setCurrentLng: function(lng) {
            if (!pluralExtensions.currentRule || pluralExtensions.currentRule.lng !== lng) {
                var parts = lng.split('-');
    
                pluralExtensions.currentRule = {
                    lng: lng,
                    rule: pluralExtensions.rules[parts[0]]
                };
            }
        },
    
        needsPlural: function(lng, count) {
            var parts = lng.split('-');
    
            var ext;
            if (pluralExtensions.currentRule && pluralExtensions.currentRule.lng === lng) {
                ext = pluralExtensions.currentRule.rule; 
            } else {
                ext = pluralExtensions.rules[parts[f.getCountyIndexOfLng(lng)]];
            }
    
            if (ext && ext.numbers.length <= 1) {
                return false;
            } else {
                return this.get(lng, count) !== 1;
            }
        },
    
        get: function(lng, count) {
            var parts = lng.split('-');
    
            function getResult(l, c) {
                var ext;
                if (pluralExtensions.currentRule && pluralExtensions.currentRule.lng === lng) {
                    ext = pluralExtensions.currentRule.rule; 
                } else {
                    ext = pluralExtensions.rules[l];
                }
                if (ext) {
                    var i;
                    if (ext.noAbs) {
                        i = ext.plurals(c);
                    } else {
                        i = ext.plurals(Math.abs(c));
                    }
                    
                    var number = ext.numbers[i];
                    if (ext.numbers.length === 2 && ext.numbers[0] === 1) {
                        if (number === 2) { 
                            number = -1; // regular plural
                        } else if (number === 1) {
                            number = 1; // singular
                        }
                    }//console.log(count + '-' + number);
                    return number;
                } else {
                    return c === 1 ? '1' : '-1';
                }
            }
                        
            return getResult(parts[f.getCountyIndexOfLng(lng)], count);
        }
    
    };
    var postProcessors = {};
    var addPostProcessor = function(name, fc) {
        postProcessors[name] = fc;
    };
    // sprintf support
    var sprintf = (function() {
        function get_type(variable) {
            return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
        }
        function str_repeat(input, multiplier) {
            for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
            return output.join('');
        }
    
        var str_format = function() {
            if (!str_format.cache.hasOwnProperty(arguments[0])) {
                str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
            }
            return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
        };
    
        str_format.format = function(parse_tree, argv) {
            var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
            for (i = 0; i < tree_length; i++) {
                node_type = get_type(parse_tree[i]);
                if (node_type === 'string') {
                    output.push(parse_tree[i]);
                }
                else if (node_type === 'array') {
                    match = parse_tree[i]; // convenience purposes only
                    if (match[2]) { // keyword argument
                        arg = argv[cursor];
                        for (k = 0; k < match[2].length; k++) {
                            if (!arg.hasOwnProperty(match[2][k])) {
                                throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
                            }
                            arg = arg[match[2][k]];
                        }
                    }
                    else if (match[1]) { // positional argument (explicit)
                        arg = argv[match[1]];
                    }
                    else { // positional argument (implicit)
                        arg = argv[cursor++];
                    }
    
                    if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
                        throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
                    }
                    switch (match[8]) {
                        case 'b': arg = arg.toString(2); break;
                        case 'c': arg = String.fromCharCode(arg); break;
                        case 'd': arg = parseInt(arg, 10); break;
                        case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
                        case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
                        case 'o': arg = arg.toString(8); break;
                        case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
                        case 'u': arg = Math.abs(arg); break;
                        case 'x': arg = arg.toString(16); break;
                        case 'X': arg = arg.toString(16).toUpperCase(); break;
                    }
                    arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
                    pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
                    pad_length = match[6] - String(arg).length;
                    pad = match[6] ? str_repeat(pad_character, pad_length) : '';
                    output.push(match[5] ? arg + pad : pad + arg);
                }
            }
            return output.join('');
        };
    
        str_format.cache = {};
    
        str_format.parse = function(fmt) {
            var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
            while (_fmt) {
                if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
                    parse_tree.push(match[0]);
                }
                else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
                    parse_tree.push('%');
                }
                else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                    if (match[2]) {
                        arg_names |= 1;
                        var field_list = [], replacement_field = match[2], field_match = [];
                        if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                            field_list.push(field_match[1]);
                            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                }
                                else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                }
                                else {
                                    throw('[sprintf] huh?');
                                }
                            }
                        }
                        else {
                            throw('[sprintf] huh?');
                        }
                        match[2] = field_list;
                    }
                    else {
                        arg_names |= 2;
                    }
                    if (arg_names === 3) {
                        throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
                    }
                    parse_tree.push(match);
                }
                else {
                    throw('[sprintf] huh?');
                }
                _fmt = _fmt.substring(match[0].length);
            }
            return parse_tree;
        };
    
        return str_format;
    })();
    
    var vsprintf = function(fmt, argv) {
        argv.unshift(fmt);
        return sprintf.apply(null, argv);
    };
    
    addPostProcessor("sprintf", function(val, key, opts) {
        if (!opts.sprintf) return val;
    
        if (Object.prototype.toString.apply(opts.sprintf) === '[object Array]') {
            return vsprintf(val, opts.sprintf);
        } else if (typeof opts.sprintf === 'object') {
            return sprintf(val, opts.sprintf);
        }
    
        return val;
    });
    // public api interface
    i18n.init = init;
    i18n.isInitialized = isInitialized;
    i18n.setLng = setLng;
    i18n.preload = preload;
    i18n.addResourceBundle = addResourceBundle;
    i18n.hasResourceBundle = hasResourceBundle;
    i18n.getResourceBundle = getResourceBundle;
    i18n.addResource = addResource;
    i18n.addResources = addResources;
    i18n.removeResourceBundle = removeResourceBundle;
    i18n.loadNamespace = loadNamespace;
    i18n.loadNamespaces = loadNamespaces;
    i18n.setDefaultNamespace = setDefaultNamespace;
    i18n.t = translate;
    i18n.translate = translate;
    i18n.exists = exists;
    i18n.detectLanguage = f.detectLanguage;
    i18n.pluralExtensions = pluralExtensions;
    i18n.sync = sync;
    i18n.functions = f;
    i18n.lng = lng;
    i18n.addPostProcessor = addPostProcessor;
    i18n.applyReplacement = f.applyReplacement;
    i18n.options = o;
    i18n.noConflict = noConflict;

})(typeof exports === 'undefined' ? window : exports);//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>23?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){return b._isUTC?tb(a).zone(b._offset||0):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"X":return Xb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return Yb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===tb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Nb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),pc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Db]<12&&(a._a[Db]+=12),a._isPm===!1&&12===a._a[Db]&&(a._a[Db]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c=b._i,d=b._f;return b._locale=b._locale||tb.localeData(b._l),null===c||d===a&&""===c?tb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),tb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):bb(b),new k(b)))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.3",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+(\.\d{1,3})?/,Yb=/\d{1,2}/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=tb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):+this.clone().startOf(b)>+tb(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):+this.clone().startOf(b)<+tb(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+qb(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);