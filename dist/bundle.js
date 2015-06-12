/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// libraries
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(11);

	__webpack_require__(1);

	__webpack_require__(13);

	// config

	var _configJs = __webpack_require__(15);

	// user

	var _user = __webpack_require__(134);

	var user = _interopRequireWildcard(_user);

	// modals

	var _modals = __webpack_require__(138);

	var _modals2 = _interopRequireDefault(_modals);

	exports['default'] = _angular2['default'].module('wbt', ['restangular', 'ui.router', 'ui.router.stateHelper', 'ui.bootstrap', 'ngMessages', 'ngAria', 'ngAnimate', 'ngSanitize', 'ncy-angular-breadcrumb', 'ngStorage', 'oc.lazyLoad']).config(_configJs.config).run(_configJs.run).factory('userInterceptor', user.interceptor).service('user', user.model).directive('userCheck', user.validator).service('modals', _modals2['default']).name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(3))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/*! ngstorage 0.3.4 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){\"use strict\";return\"function\"==typeof define&&define.amd?void define(\"ngStorage\",[\"angular\"],function(a){return b(a)}):b(a)}(\"undefined\"==typeof angular?null:angular,function(a){\"use strict\";function b(b){return[\"$rootScope\",\"$window\",\"$log\",\"$timeout\",function(c,d,e,f){function g(a){var b=d[a];if(b&&\"localStorage\"===a){var c=\"__\"+Math.round(1e7*Math.random());try{localStorage.setItem(c,c),localStorage.removeItem(c)}catch(e){b=!1}}return b}var h,i,j=g(b)||(e.warn(\"This browser does not support Web Storage!\"),{setItem:function(){},getItem:function(){}}),k={$default:function(b){for(var c in b)a.isDefined(k[c])||(k[c]=b[c]);return k},$reset:function(a){for(var b in k)\"$\"===b[0]||delete k[b];return k.$default(a)}};try{j=d[b],j.length}catch(l){e.warn(\"This browser does not support Web Storage!\"),j={}}for(var m,n=0,o=j.length;o>n;n++)(m=j.key(n))&&\"ngStorage-\"===m.slice(0,10)&&(k[m.slice(10)]=a.fromJson(j.getItem(m)));return h=a.copy(k),c.$watch(function(){var b;i||(i=f(function(){if(i=null,!a.equals(k,h)){b=a.copy(h),a.forEach(k,function(c,d){a.isDefined(c)&&\"$\"!==d[0]&&j.setItem(\"ngStorage-\"+d,a.toJson(c)),delete b[d]});for(var c in b)j.removeItem(\"ngStorage-\"+c);h=a.copy(k)}},100,!1))}),\"localStorage\"===b&&d.addEventListener&&d.addEventListener(\"storage\",function(b){\"ngStorage-\"===b.key.slice(0,10)&&(b.newValue?k[b.key.slice(10)]=a.fromJson(b.newValue):delete k[b.key.slice(10)],h=a.copy(k),c.$apply())}),k}]}a.module(\"ngStorage\",[]).factory(\"$localStorage\",b(\"localStorage\")).factory(\"$sessionStorage\",b(\"sessionStorage\"))});"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(6))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/**\n * State-based routing for AngularJS\n * @version v0.2.15\n * @link http://angular-ui.github.com/\n * @license MIT License, http://www.opensource.org/licenses/MIT\n */\n\"undefined\"!=typeof module&&\"undefined\"!=typeof exports&&module.exports===exports&&(module.exports=\"ui.router\"),function(a,b,c){\"use strict\";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error(\"Cyclic dependency: \"+r.join(\" -> \"));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error(\"'invocables' must be an object\");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error(\"'locals' must be an object\")}else d=k;if(f){if(!o(f))throw new Error(\"'parent' must be a promise returned by $resolve.resolve()\")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:\"text/html\"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\\w+(-+\\w+)*(?:\\[\\])?$/.test(b))throw new Error(\"Invalid parameter name '\"+b+\"' in pattern '\"+a+\"'\");if(p[b])throw new Error(\"Duplicate parameter name '\"+b+\"' in pattern '\"+a+\"'\");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=[\"\",\"\"],f=a.replace(/[\\\\\\[\\]\\^$*+?.()|{}]/g,\"\\\\$&\");if(!b)return f;switch(c){case!1:e=[\"(\",\")\"+(d?\"?\":\"\")];break;case!0:e=[\"?(\",\")?\"];break;default:e=[\"(\"+c+\"|\",\")?\"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||(\"*\"==e[1]?\".*\":null),j=P.type(h||\"string\")||d(P.type(\"string\"),{pattern:new RegExp(h,b.caseInsensitive?\"i\":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\\w\\[\\]]+)|\\{([\\w\\[\\]]+)(?:\\:((?:[^{}\\\\]+|\\\\.|\\{(?:[^{}\\\\]+|\\\\.)*\\})+))?\\}/g,k=/([:]?)([\\w\\[\\]-]+)|\\{([\\w\\[\\]-]+)(?:\\:((?:[^{}\\\\]+|\\\\.|\\{(?:[^{}\\\\]+|\\\\.)*\\})+))?\\}/g,l=\"^\",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf(\"?\")>=0));)s=f(r.id,r.type,r.cfg,\"path\"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf(\"?\");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,\"search\"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch=\"\";l+=g(t)+(b.strict===!1?\"/?\":\"\")+\"$\",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?\"i\":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\\//g,\"%2F\"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,\"/\"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error(\"You cannot override a type's .pattern at runtime.\");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||\"string\"==typeof a},pattern:/[^/]*/},\"int\":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),(\"0\"+(a.getMonth()+1)).slice(-2),(\"0\"+a.getDate()).slice(-2)].join(\"-\"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error(\"Injectable functions cannot be called at configuration time\");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error(\"Invalid squash policy: \"+a+\". Valid policies: false, true, arbitrary-string\");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error(\"A type named '\"+a+\"' has already been defined.\");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=[\"$injector\",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,\"value\")&&-1===h(b,\"type\")&&-1===h(b,\"squash\")&&-1===h(b,\"array\");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error(\"Param '\"+a+\"' has two type configurations.\");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):\"config\"===d?u.any:u.string}function k(){var b={array:\"search\"===e?\"auto\":!1},c=a.match(/\\[\\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error(\"Invalid squash policy: '\"+c+\"'. Valid policies: false, true, or arbitrary string\")}function p(a,b,d,e){var f,g,i=[{from:\"\",to:d||b?c:\"\"},{from:null,to:d||b?c:\"\"}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error(\"Injectable functions cannot be called at configuration time\");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error(\"Default value (\"+a+\") for parameter '\"+w.id+\"' is not an instance of Type (\"+w.type.name+\")\");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return\"{Param:\"+a+\" \"+b+\" squash: '\"+z+\"' optional: \"+y+\"}\"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,\"search\"===e):b,\"string\"!==b.name||x||\"path\"!==e||d.value!==c||(d.value=\"\");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\\^((?:\\\\[^a-zA-Z0-9]|[^\\\\\\[\\]\\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\\\(.)/g,\"$1\"):\"\"}function f(a,b){return a.replace(/\\$(\\$|\\d{1,2})/,function(a,c){return b[\"$\"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return\"/\"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on(\"$locationChangeSuccess\",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b[\"#\"]&&(f+=\"#\"+b[\"#\"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i=\"#\"+a.hashPrefix()+i),null!==i&&e&&e[\"#\"]&&(i+=\"#\"+e[\"#\"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?\"/\":\"\",k=d.port();return k=80===k||443===k?\"\":\":\"+k,[d.protocol(),\"://\",d.host(),k,j,i].join(\"\")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error(\"'rule' must be a function\");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error(\"'rule' must be a function\");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error(\"invalid 'handler' in when()\");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=[\"$match\",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:\"\"})},regex:function(a,b){if(a.global||a.sticky)throw new Error(\"when() RegExp must not be global or sticky\");return h&&(c=b,b=[\"$match\",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error(\"invalid 'what' in when()\")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=[\"$location\",\"$rootScope\",\"$injector\",\"$browser\"]}function v(a,e){function f(a){return 0===a.indexOf(\".\")||0===a.indexOf(\"^\")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error(\"No reference point given for path '\"+e+\"'\");b=m(b);for(var h=e.split(\".\"),i=0,j=h.length,k=b;j>i;i++)if(\"\"!==h[i]||0!==i){if(\"^\"!==h[i])break;if(!k.parent)throw new Error(\"Path '\"+e+\"' not valid for state '\"+b.name+\"'\");k=k.parent}else k=b;h=h.slice(i).join(\".\"),e=k.name+(k.name&&h?\".\":\"\")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf(\"@\")>=0)throw new Error(\"State must have a valid name\");if(z.hasOwnProperty(c))throw new Error(\"State '\"+c+\"'' is already defined\");var e=-1!==c.indexOf(\".\")?c.substring(0,c.lastIndexOf(\".\")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:\"\";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,[\"$match\",\"$stateParams\",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf(\"*\")>-1}function s(a){for(var b=a.split(\".\"),c=y.$current.name.split(\".\"),d=0,e=b.length;e>d;d++)\"*\"===b[d]&&(c[d]=\"*\");return\"**\"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift(\"**\")),\"**\"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push(\"**\")),b.length!=c.length?!1:c.join(\"\")===b.join(\"\")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast(\"$stateNotFound\",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||\"\"}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error(\"transition superseded\")),C=e.reject(new Error(\"transition prevented\")),D=e.reject(new Error(\"transition aborted\")),E=e.reject(new Error(\"transition failed\"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c[\"#\"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error(\"No such state '\"+b+\"'\");throw new Error(\"Could not resolve '\"+b+\"' from state '\"+f.relative+\"'\")}}if(q[B])throw new Error(\"Cannot transition to abstract state '\"+b+\"'\");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error(\"Invalid reload state object\");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error(\"No such reload state '\"+(J(f.reload)?f.reload:f.reload.name)+\"'\");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c[\"#\"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:\"replace\"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast(\"$stateChangeStart\",b.self,c,j.self,l).defaultPrevented)return a.$broadcast(\"$stateChangeCancel\",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c[\"#\"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:\"replace\"===f.location}),f.notify&&a.$broadcast(\"$stateChangeSuccess\",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast(\"$stateChangeError\",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat(\"#\"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return\"search\"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B=\"abstract\",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return\"^\"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error(\"Invalid url '\"+b+\"' in state '\"+a+\"'\")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,\"config\"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{\"\":a},function(c,d){d.indexOf(\"@\")<0&&(d+=\"@\"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:\"\",url:\"^\",views:null,\"abstract\":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=[\"$rootScope\",\"$q\",\"$view\",\"$injector\",\"$resolve\",\"$stateParams\",\"$urlRouter\",\"$location\",\"$urlMatcherFactory\"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast(\"$viewContentLoading\",d),e}}}this.$get=a,a.$inject=[\"$rootScope\",\"$templateFactory\"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=[\"$anchorScroll\",\"$timeout\",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h(\"$animator\"),j=h(\"$animate\"),k={restrict:\"ECA\",terminal:!0,priority:400,transclude:\"element\",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit(\"$viewContentAnimationEnded\"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit(\"$viewContentLoaded\"),n.$eval(p)}}var l,m,n,o,p=i.onload||\"\",q=i.autoscroll,r=g(i,c);c.$on(\"$stateChangeSuccess\",function(){k(!1)}),c.$on(\"$viewContentLoading\",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:\"ECA\",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data(\"$uiView\",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data(\"$ngControllerController\",m),g.children().data(\"$ngControllerController\",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||\"\")(a),f=c.inheritedData(\"$uiView\");return e.indexOf(\"@\")>=0?e:e+\"@\"+(f?f.state.name:\"\")}function B(a,b){var c,d=a.match(/^\\s*({[^}]*})\\s*$/);if(d&&(a=b+\"(\"+d[1]+\")\"),c=a.replace(/\\n/g,\" \").match(/^([^(]+?)\\s*(\\((.*)\\))?$/),!c||4!==c.length)throw new Error(\"Invalid state ref '\"+a+\"'\");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData(\"$uiView\");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=[\"location\",\"inherit\",\"reload\",\"absolute\"];return{restrict:\"A\",require:[\"?^uiSrefActive\",\"?^uiSrefActiveEq\"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l=\"[object SVGAnimatedString]\"===Object.prototype.toString.call(f.prop(\"href\"))?\"xlink:href\":\"href\",m=null,n=\"A\"===f.prop(\"tagName\").toUpperCase(),o=\"FORM\"===f[0].nodeName,p=o?\"action\":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind(\"click\",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr(\"target\"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:\"A\",controller:[\"$scope\",\"$element\",\"$attrs\",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return\"undefined\"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||\"\",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on(\"$stateChangeSuccess\",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module(\"ui.router.util\",[\"ng\"]),b.module(\"ui.router.router\",[\"ui.router.util\"]),b.module(\"ui.router.state\",[\"ui.router.router\",\"ui.router.util\"]),b.module(\"ui.router\",[\"ui.router.state\"]),b.module(\"ui.router.compat\",[\"ui.router\"]),p.$inject=[\"$q\",\"$injector\"],b.module(\"ui.router.util\").service(\"$resolve\",p),q.$inject=[\"$http\",\"$templateCache\",\"$injector\"],b.module(\"ui.router.util\").service(\"$templateFactory\",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split(\"\").reverse().join(\"\")}function c(a){return a.replace(/\\\\-/g,\"-\")}var d=b(a).split(/-(?!\\\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error(\"Unbalanced capture group in route '\"+this.source+\"'\");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return\"%5C%\"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join(\"-\"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\\/$/)?/\\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join(\"&\"+l+\"=\"),j+=(g?\"&\":\"?\")+(l+\"=\"+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return\"{Type:\"+this.name+\"}\"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return\"auto\"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,\"encode\")),this.decode=h(d(a,\"decode\")),this.is=h(d(a,\"is\"),!0),this.equals=i(d(a,\"equals\")),this.pattern=a.pattern,this.$normalize=h(d(a,\"$normalize\")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if(\"auto\"===a&&!b)throw new Error(\"'auto' array mode is for query parameters only\");return new d(this,a)},b.module(\"ui.router.util\").provider(\"$urlMatcherFactory\",t),b.module(\"ui.router.util\").run([\"$urlMatcherFactory\",function(a){}]),u.$inject=[\"$locationProvider\",\"$urlMatcherFactoryProvider\"],b.module(\"ui.router.router\").provider(\"$urlRouter\",u),v.$inject=[\"$urlRouterProvider\",\"$urlMatcherFactoryProvider\"],b.module(\"ui.router.state\").value(\"$stateParams\",{}).provider(\"$state\",v),w.$inject=[],b.module(\"ui.router.state\").provider(\"$view\",w),b.module(\"ui.router.state\").provider(\"$uiViewScroll\",x),y.$inject=[\"$state\",\"$injector\",\"$uiViewScroll\",\"$interpolate\"],z.$inject=[\"$compile\",\"$controller\",\"$state\",\"$interpolate\"],b.module(\"ui.router.state\").directive(\"uiView\",y),b.module(\"ui.router.state\").directive(\"uiView\",z),D.$inject=[\"$state\",\"$timeout\"],E.$inject=[\"$state\",\"$stateParams\",\"$interpolate\"],b.module(\"ui.router.state\").directive(\"uiSref\",D).directive(\"uiSrefActive\",E).directive(\"uiSrefActiveEq\",E),F.$inject=[\"$state\"],G.$inject=[\"$state\"],b.module(\"ui.router.state\").filter(\"isState\",F).filter(\"includedByState\",G)}(window,window.angular);"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(8))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "angular.module(\"ui.router.stateHelper\",[\"ui.router\"]).provider(\"stateHelper\",[\"$stateProvider\",function(e){function t(e){e.parent&&(e.name=(angular.isObject(e.parent)?e.parent.name:e.parent)+\".\"+e.name)}function a(e){e.children.forEach(function(e,t,a){a[t+1]&&(e.nextSibling=a[t+1].name),a[t-1]&&(e.previousSibling=a[t-1].name)})}var n=this;this.state=function(r){var i=Array.prototype.slice.apply(arguments),l={keepOriginalNames:!1,siblingTraversal:!1};return\"boolean\"==typeof i[1]?l.keepOriginalNames=i[1]:\"object\"==typeof i[1]&&angular.extend(l,i[1]),l.keepOriginalNames||t(r),e.state(r),r.children&&r.children.length&&(r.children.forEach(function(e){e.parent=r,n.state(e,l)}),l.siblingTraversal&&a(r)),n},this.setNestedState=this.state,n.$get=angular.noop}]);"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(10))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/*\n * angular-ui-bootstrap\n * http://angular-ui.github.io/bootstrap/\n\n * Version: 0.13.0 - 2015-05-02\n * License: MIT\n */\nangular.module(\"ui.bootstrap\",[\"ui.bootstrap.tpls\",\"ui.bootstrap.collapse\",\"ui.bootstrap.accordion\",\"ui.bootstrap.alert\",\"ui.bootstrap.bindHtml\",\"ui.bootstrap.buttons\",\"ui.bootstrap.carousel\",\"ui.bootstrap.dateparser\",\"ui.bootstrap.position\",\"ui.bootstrap.datepicker\",\"ui.bootstrap.dropdown\",\"ui.bootstrap.modal\",\"ui.bootstrap.pagination\",\"ui.bootstrap.tooltip\",\"ui.bootstrap.popover\",\"ui.bootstrap.progressbar\",\"ui.bootstrap.rating\",\"ui.bootstrap.tabs\",\"ui.bootstrap.timepicker\",\"ui.bootstrap.transition\",\"ui.bootstrap.typeahead\"]),angular.module(\"ui.bootstrap.tpls\",[\"template/accordion/accordion-group.html\",\"template/accordion/accordion.html\",\"template/alert/alert.html\",\"template/carousel/carousel.html\",\"template/carousel/slide.html\",\"template/datepicker/datepicker.html\",\"template/datepicker/day.html\",\"template/datepicker/month.html\",\"template/datepicker/popup.html\",\"template/datepicker/year.html\",\"template/modal/backdrop.html\",\"template/modal/window.html\",\"template/pagination/pager.html\",\"template/pagination/pagination.html\",\"template/tooltip/tooltip-html-popup.html\",\"template/tooltip/tooltip-html-unsafe-popup.html\",\"template/tooltip/tooltip-popup.html\",\"template/tooltip/tooltip-template-popup.html\",\"template/popover/popover-template.html\",\"template/popover/popover.html\",\"template/progressbar/bar.html\",\"template/progressbar/progress.html\",\"template/progressbar/progressbar.html\",\"template/rating/rating.html\",\"template/tabs/tab.html\",\"template/tabs/tabset.html\",\"template/timepicker/timepicker.html\",\"template/typeahead/typeahead-match.html\",\"template/typeahead/typeahead-popup.html\"]),angular.module(\"ui.bootstrap.collapse\",[]).directive(\"collapse\",[\"$animate\",function(a){return{link:function(b,c,d){function e(){c.removeClass(\"collapse\").addClass(\"collapsing\"),a.addClass(c,\"in\",{to:{height:c[0].scrollHeight+\"px\"}}).then(f)}function f(){c.removeClass(\"collapsing\"),c.css({height:\"auto\"})}function g(){c.css({height:c[0].scrollHeight+\"px\"}).removeClass(\"collapse\").addClass(\"collapsing\"),a.removeClass(c,\"in\",{to:{height:\"0\"}}).then(h)}function h(){c.css({height:\"0\"}),c.removeClass(\"collapsing\"),c.addClass(\"collapse\")}b.$watch(d.collapse,function(a){a?g():e()})}}}]),angular.module(\"ui.bootstrap.accordion\",[\"ui.bootstrap.collapse\"]).constant(\"accordionConfig\",{closeOthers:!0}).controller(\"AccordionController\",[\"$scope\",\"$attrs\",\"accordionConfig\",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on(\"$destroy\",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive(\"accordion\",function(){return{restrict:\"EA\",controller:\"AccordionController\",transclude:!0,replace:!1,templateUrl:\"template/accordion/accordion.html\"}}).directive(\"accordionGroup\",function(){return{require:\"^accordion\",restrict:\"EA\",transclude:!0,replace:!0,templateUrl:\"template/accordion/accordion-group.html\",scope:{heading:\"@\",isOpen:\"=?\",isDisabled:\"=?\"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch(\"isOpen\",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive(\"accordionHeading\",function(){return{restrict:\"EA\",transclude:!0,template:\"\",replace:!0,require:\"^accordionGroup\",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive(\"accordionTransclude\",function(){return{require:\"^accordionGroup\",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(\"\"),b.append(a))})}}}),angular.module(\"ui.bootstrap.alert\",[]).controller(\"AlertController\",[\"$scope\",\"$attrs\",function(a,b){a.closeable=\"close\"in b,this.close=a.close}]).directive(\"alert\",function(){return{restrict:\"EA\",controller:\"AlertController\",templateUrl:\"template/alert/alert.html\",transclude:!0,replace:!0,scope:{type:\"@\",close:\"&\"}}}).directive(\"dismissOnTimeout\",[\"$timeout\",function(a){return{require:\"alert\",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module(\"ui.bootstrap.bindHtml\",[]).directive(\"bindHtmlUnsafe\",function(){return function(a,b,c){b.addClass(\"ng-binding\").data(\"$binding\",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||\"\")})}}),angular.module(\"ui.bootstrap.buttons\",[]).constant(\"buttonConfig\",{activeClass:\"active\",toggleEvent:\"click\"}).controller(\"ButtonsController\",[\"buttonConfig\",function(a){this.activeClass=a.activeClass||\"active\",this.toggleEvent=a.toggleEvent||\"click\"}]).directive(\"btnRadio\",function(){return{require:[\"btnRadio\",\"ngModel\"],controller:\"ButtonsController\",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive(\"btnCheckbox\",function(){return{require:[\"btnCheckbox\",\"ngModel\"],controller:\"ButtonsController\",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module(\"ui.bootstrap.carousel\",[]).controller(\"CarouselController\",[\"$scope\",\"$interval\",\"$animate\",function(a,b,c){function d(a){if(angular.isUndefined(k[a].index))return k[a];{var b;k.length}for(b=0;b<k.length;++b)if(k[b].index==a)return k[b]}function e(){f();var c=+a.interval;!isNaN(c)&&c>0&&(h=b(g,c))}function f(){h&&(b.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(b,d){function f(){m||(angular.extend(b,{direction:d,active:!0}),angular.extend(j.currentSlide||{},{direction:d,active:!1}),c.enabled()&&!a.noTransition&&b.$element&&(a.$currentTransition=!0,b.$element.one(\"$animate:close\",function(){a.$currentTransition=null})),j.currentSlide=b,l=g,e())}var g=j.indexOfSlide(b);void 0===d&&(d=g>j.getCurrentIndex()?\"next\":\"prev\"),b&&b!==j.currentSlide&&f()},a.$on(\"$destroy\",function(){m=!0}),j.getCurrentIndex=function(){return j.currentSlide&&angular.isDefined(j.currentSlide.index)?+j.currentSlide.index:l},j.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:k.indexOf(a)},a.next=function(){var b=(j.getCurrentIndex()+1)%k.length;return a.$currentTransition?void 0:j.select(d(b),\"next\")},a.prev=function(){var b=j.getCurrentIndex()-1<0?k.length-1:j.getCurrentIndex()-1;return a.$currentTransition?void 0:j.select(d(b),\"prev\")},a.isActive=function(a){return j.currentSlide===a},a.$watch(\"interval\",e),a.$on(\"$destroy\",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){angular.isDefined(a.index)&&k.sort(function(a,b){return+a.index>+b.index});var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive(\"carousel\",[function(){return{restrict:\"EA\",transclude:!0,replace:!0,controller:\"CarouselController\",require:\"carousel\",templateUrl:\"template/carousel/carousel.html\",scope:{interval:\"=\",noTransition:\"=\",noPause:\"=\"}}}]).directive(\"slide\",function(){return{require:\"^carousel\",restrict:\"EA\",transclude:!0,replace:!0,templateUrl:\"template/carousel/slide.html\",scope:{active:\"=?\",index:\"=?\"},link:function(a,b,c,d){d.addSlide(a,b),a.$on(\"$destroy\",function(){d.removeSlide(a)}),a.$watch(\"active\",function(b){b&&d.select(a)})}}}).animation(\".item\",[\"$animate\",function(a){return{beforeAddClass:function(b,c,d){if(\"active\"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g=\"next\"==f?\"left\":\"right\";return b.addClass(f),a.addClass(b,g).then(function(){e||b.removeClass(g+\" \"+f),d()}),function(){e=!0}}d()},beforeRemoveClass:function(b,c,d){if(\"active\"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g=\"next\"==f?\"left\":\"right\";return a.addClass(b,g).then(function(){e||b.removeClass(g),d()}),function(){e=!0}}d()}}}]),angular.module(\"ui.bootstrap.dateparser\",[]).service(\"dateParser\",[\"$locale\",\"orderByFilter\",function(a,b){function c(a){var c=[],d=a.split(\"\");return angular.forEach(f,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(\"\"),d[f]=\"(\"+b.regex+\")\",a[f]=\"$\";for(var g=f+1,h=f+e.length;h>g;g++)d[g]=\"\",a[g]=\"$\";a=a.join(\"\"),c.push({index:f,apply:b.apply})}}),{regex:new RegExp(\"^\"+d.join(\"\")+\"$\"),map:b(c,\"index\")}}function d(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var e=/[\\\\\\^\\$\\*\\+\\?\\|\\[\\]\\(\\)\\.\\{\\}]/g;this.parsers={};var f={yyyy:{regex:\"\\\\d{4}\",apply:function(a){this.year=+a}},yy:{regex:\"\\\\d{2}\",apply:function(a){this.year=+a+2e3}},y:{regex:\"\\\\d{1,4}\",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join(\"|\"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join(\"|\"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:\"0[1-9]|1[0-2]\",apply:function(a){this.month=a-1}},M:{regex:\"[1-9]|1[0-2]\",apply:function(a){this.month=a-1}},dd:{regex:\"[0-2][0-9]{1}|3[0-1]{1}\",apply:function(a){this.date=+a}},d:{regex:\"[1-2]?[0-9]{1}|3[0-1]{1}\",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join(\"|\")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join(\"|\")},HH:{regex:\"(?:0|1)[0-9]|2[0-3]\",apply:function(a){this.hours=+a}},H:{regex:\"1?[0-9]|2[0-3]\",apply:function(a){this.hours=+a}},mm:{regex:\"[0-5][0-9]\",apply:function(a){this.minutes=+a}},m:{regex:\"[0-9]|[1-5][0-9]\",apply:function(a){this.minutes=+a}},sss:{regex:\"[0-9][0-9][0-9]\",apply:function(a){this.milliseconds=+a}},ss:{regex:\"[0-5][0-9]\",apply:function(a){this.seconds=+a}},s:{regex:\"[0-9]|[1-5][0-9]\",apply:function(a){this.seconds=+a}}};this.parse=function(b,f,g){if(!angular.isString(b)||!f)return b;f=a.DATETIME_FORMATS[f]||f,f=f.replace(e,\"\\\\$&\"),this.parsers[f]||(this.parsers[f]=c(f));var h=this.parsers[f],i=h.regex,j=h.map,k=b.match(i);if(k&&k.length){var l,m;l=g?{year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:{year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0};for(var n=1,o=k.length;o>n;n++){var p=j[n-1];p.apply&&p.apply.call(l,k[n])}return d(l.year,l.month,l.date)&&(m=new Date(l.year,l.month,l.date,l.hours,l.minutes,l.seconds,l.milliseconds||0)),m}}}]),angular.module(\"ui.bootstrap.position\",[]).factory(\"$position\",[\"$document\",\"$window\",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return\"static\"===(c(a,\"position\")||\"static\")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop(\"offsetWidth\"),height:g.height||b.prop(\"offsetHeight\"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop(\"offsetWidth\"),height:d.height||c.prop(\"offsetHeight\"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split(\"-\"),j=i[0],k=i[1]||\"center\";e=d?this.offset(a):this.position(a),f=b.prop(\"offsetWidth\"),g=b.prop(\"offsetHeight\");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case\"right\":h={top:m[k](),left:l[j]()};break;case\"left\":h={top:m[k](),left:e.left-f};break;case\"bottom\":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module(\"ui.bootstrap.datepicker\",[\"ui.bootstrap.dateparser\",\"ui.bootstrap.position\"]).constant(\"datepickerConfig\",{formatDay:\"dd\",formatMonth:\"MMMM\",formatYear:\"yyyy\",formatDayHeader:\"EEE\",formatDayTitle:\"MMMM yyyy\",formatMonthTitle:\"yyyy\",datepickerMode:\"day\",minMode:\"day\",maxMode:\"year\",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller(\"DatepickerController\",[\"$scope\",\"$attrs\",\"$parse\",\"$interpolate\",\"$timeout\",\"$log\",\"dateFilter\",\"datepickerConfig\",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=[\"day\",\"month\",\"year\"],angular.forEach([\"formatDay\",\"formatMonth\",\"formatYear\",\"formatDayHeader\",\"formatDayTitle\",\"formatMonthTitle\",\"minMode\",\"maxMode\",\"showWeeks\",\"startingDay\",\"yearRange\",\"shortcutPropagation\"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach([\"minDate\",\"maxDate\"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.maxMode=i.maxMode,a.uniqueId=\"datepicker-\"+a.$id+\"-\"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: \"ng-model\" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity(\"date\",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity(\"date-disabled\",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:\"enter\",32:\"space\",33:\"pageup\",34:\"pagedown\",35:\"end\",36:\"home\",37:\"left\",38:\"up\",39:\"right\",40:\"down\"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on(\"datepicker.focus\",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),\"enter\"===c||\"space\"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||\"up\"!==c&&\"down\"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode(\"up\"===c?1:-1),k())}}]).directive(\"datepicker\",function(){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/datepicker.html\",scope:{datepickerMode:\"=?\",dateDisabled:\"&\",customClass:\"&\",shortcutPropagation:\"&?\"},require:[\"datepicker\",\"?^ngModel\"],controller:\"DatepickerController\",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive(\"daypicker\",[\"dateFilter\",function(a){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/day.html\",require:\"^datepicker\",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+\"-\"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,\"EEEE\")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=(11-e.startingDay)%7,p=b.rows.length,q=0;p>q;q++)b.weekNumbers.push(h(b.rows[q][o].date))}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if(\"left\"===a)b-=1;else if(\"up\"===a)b-=7;else if(\"right\"===a)b+=1;else if(\"down\"===a)b+=7;else if(\"pageup\"===a||\"pagedown\"===a){var c=e.activeDate.getMonth()+(\"pageup\"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else\"home\"===a?b=1:\"end\"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive(\"monthpicker\",[\"dateFilter\",function(a){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/month.html\",require:\"^datepicker\",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+\"-\"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if(\"left\"===a)b-=1;else if(\"up\"===a)b-=3;else if(\"right\"===a)b+=1;else if(\"down\"===a)b+=3;else if(\"pageup\"===a||\"pagedown\"===a){var c=e.activeDate.getFullYear()+(\"pageup\"===a?-1:1);e.activeDate.setFullYear(c)}else\"home\"===a?b=0:\"end\"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive(\"yearpicker\",[\"dateFilter\",function(){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/year.html\",require:\"^datepicker\",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+\"-\"+c});a.title=[b[0].label,b[f-1].label].join(\" - \"),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();\"left\"===a?b-=1:\"up\"===a?b-=5:\"right\"===a?b+=1:\"down\"===a?b+=5:\"pageup\"===a||\"pagedown\"===a?b+=(\"pageup\"===a?-1:1)*d.step.years:\"home\"===a?b=e(d.activeDate.getFullYear()):\"end\"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant(\"datepickerPopupConfig\",{datepickerPopup:\"yyyy-MM-dd\",html5Types:{date:\"yyyy-MM-dd\",\"datetime-local\":\"yyyy-MM-ddTHH:mm:ss.sss\",month:\"yyyy-MM\"},currentText:\"Today\",clearText:\"Clear\",closeText:\"Done\",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive(\"datepickerPopup\",[\"$compile\",\"$parse\",\"$document\",\"$position\",\"dateFilter\",\"dateParser\",\"datepickerPopupConfig\",function(a,b,c,d,e,f,g){return{restrict:\"EA\",require:\"ngModel\",scope:{isOpen:\"=?\",currentText:\"@\",clearText:\"@\",closeText:\"@\",dateDisabled:\"&\",customClass:\"&\"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return\"-\"+a.toLowerCase()})}function m(a){if(angular.isNumber(a)&&(a=new Date(a)),a){if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=f.parse(a,o,h.date)||new Date(a);return isNaN(b)?void 0:b}return void 0}return null}function n(a,b){var c=a||b;if(angular.isNumber(c)&&(c=new Date(c)),c){if(angular.isDate(c)&&!isNaN(c))return!0;if(angular.isString(c)){var d=f.parse(c,o)||new Date(c);return!isNaN(d)}return!1}return!0}var o,p=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,q=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+\"Text\"]||g[a+\"Text\"]};var r=!1;if(g.html5Types[j.type]?(o=g.html5Types[j.type],r=!0):(o=j.datepickerPopup||g.datepickerPopup,j.$observe(\"datepickerPopup\",function(a){var b=a||g.datepickerPopup;if(b!==o&&(o=b,k.$modelValue=null,!o))throw new Error(\"datepickerPopup must have a date format specified.\")})),!o)throw new Error(\"datepickerPopup must have a date format specified.\");if(r&&j.datepickerPopup)throw new Error(\"HTML5 date input types do not support custom formats.\");var s=angular.element(\"<div datepicker-popup-wrap><div datepicker></div></div>\");s.attr({\"ng-model\":\"date\",\"ng-change\":\"dateSelection()\"});var t=angular.element(s.children()[0]);if(r&&\"month\"==j.type&&(t.attr(\"datepicker-mode\",'\"month\"'),t.attr(\"min-mode\",\"month\")),j.datepickerOptions){var u=h.$parent.$eval(j.datepickerOptions);u.initDate&&(h.initDate=u.initDate,t.attr(\"init-date\",\"initDate\"),delete u.initDate),angular.forEach(u,function(a,b){t.attr(l(b),a)})}h.watchData={},angular.forEach([\"minDate\",\"maxDate\",\"datepickerMode\",\"initDate\",\"shortcutPropagation\"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),t.attr(l(a),\"watchData.\"+a),\"datepickerMode\"===a){var d=c.assign;h.$watch(\"watchData.\"+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&t.attr(\"date-disabled\",\"dateDisabled({ date: date, mode: mode })\"),j.showWeeks&&t.attr(\"show-weeks\",j.showWeeks),j.customClass&&t.attr(\"custom-class\",\"customClass({ date: date, mode: mode })\"),r?k.$formatters.push(function(a){return h.date=a,a}):(k.$$parserName=\"date\",k.$validators.date=n,k.$parsers.unshift(m),k.$formatters.push(function(a){return h.date=a,k.$isEmpty(a)?a:e(a,o)})),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a);var b=h.date?e(h.date,o):\"\";i.val(b),k.$setViewValue(b),p&&(h.isOpen=!1,i[0].focus())},k.$viewChangeListeners.push(function(){h.date=f.parse(k.$viewValue,o,h.date)||new Date(k.$viewValue)});var v=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},w=function(a){h.keydown(a)};i.bind(\"keydown\",w),h.keydown=function(a){27===a.which?(a.preventDefault(),h.isOpen&&a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch(\"isOpen\",function(a){a?(h.$broadcast(\"datepicker.focus\"),h.position=q?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop(\"offsetHeight\"),c.bind(\"click\",v)):c.unbind(\"click\",v)}),h.select=function(a){if(\"today\"===a){var b=new Date;angular.isDate(h.date)?(a=new Date(h.date),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var x=a(s)(h);s.remove(),q?c.find(\"body\").append(x):i.after(x),h.$on(\"$destroy\",function(){x.remove(),i.unbind(\"keydown\",w),c.unbind(\"click\",v)})}}}]).directive(\"datepickerPopupWrap\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,templateUrl:\"template/datepicker/popup.html\",link:function(a,b){b.bind(\"click\",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module(\"ui.bootstrap.dropdown\",[\"ui.bootstrap.position\"]).constant(\"dropdownConfig\",{openClass:\"open\"}).service(\"dropdownService\",[\"$document\",\"$rootScope\",function(a,b){var c=null;this.open=function(b){c||(a.bind(\"click\",d),a.bind(\"keydown\",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind(\"click\",d),a.unbind(\"keydown\",e))};var d=function(a){if(c&&(!a||\"disabled\"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getElement();a&&\"outsideClick\"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which&&(c.focusToggleElement(),d())}}]).controller(\"DropdownController\",[\"$scope\",\"$attrs\",\"$parse\",\"dropdownConfig\",\"dropdownService\",\"$animate\",\"$position\",\"$document\",function(a,b,c,d,e,f,g,h){var i,j=this,k=a.$new(),l=d.openClass,m=angular.noop,n=b.onToggle?c(b.onToggle):angular.noop,o=!1;this.init=function(d){j.$element=d,b.isOpen&&(i=c(b.isOpen),m=i.assign,a.$watch(i,function(a){k.isOpen=!!a})),o=angular.isDefined(b.dropdownAppendToBody),o&&j.dropdownMenu&&(h.find(\"body\").append(j.dropdownMenu),d.on(\"$destroy\",function(){j.dropdownMenu.remove()}))},this.toggle=function(a){return k.isOpen=arguments.length?!!a:!k.isOpen},this.isOpen=function(){return k.isOpen},k.getToggleElement=function(){return j.toggleElement},k.getAutoClose=function(){return b.autoClose||\"always\"},k.getElement=function(){return j.$element},k.focusToggleElement=function(){j.toggleElement&&j.toggleElement[0].focus()},k.$watch(\"isOpen\",function(b,c){if(o&&j.dropdownMenu){var d=g.positionElements(j.$element,j.dropdownMenu,\"bottom-left\",!0);j.dropdownMenu.css({top:d.top+\"px\",left:d.left+\"px\",display:b?\"block\":\"none\"})}f[b?\"addClass\":\"removeClass\"](j.$element,l),b?(k.focusToggleElement(),e.open(k)):e.close(k),m(a,b),angular.isDefined(b)&&b!==c&&n(a,{open:!!b})}),a.$on(\"$locationChangeSuccess\",function(){k.isOpen=!1}),a.$on(\"$destroy\",function(){k.$destroy()})}]).directive(\"dropdown\",function(){return{controller:\"DropdownController\",link:function(a,b,c,d){d.init(b)}}}).directive(\"dropdownMenu\",function(){return{restrict:\"AC\",require:\"?^dropdown\",link:function(a,b,c,d){d&&(d.dropdownMenu=b)}}}).directive(\"dropdownToggle\",function(){return{require:\"?^dropdown\",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass(\"disabled\")||c.disabled||a.$apply(function(){d.toggle()})};b.bind(\"click\",e),b.attr({\"aria-haspopup\":!0,\"aria-expanded\":!1}),a.$watch(d.isOpen,function(a){b.attr(\"aria-expanded\",!!a)}),a.$on(\"$destroy\",function(){b.unbind(\"click\",e)})}}}}),angular.module(\"ui.bootstrap.modal\",[]).factory(\"$$stackedMap\",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive(\"modalBackdrop\",[\"$timeout\",function(a){function b(b){b.animate=!1,a(function(){b.animate=!0})}return{restrict:\"EA\",replace:!0,templateUrl:\"template/modal/backdrop.html\",compile:function(a,c){return a.addClass(c.backdropClass),b}}}]).directive(\"modalWindow\",[\"$modalStack\",\"$q\",function(a,b){return{restrict:\"EA\",scope:{index:\"@\",animate:\"=\"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||\"template/modal/window.html\"},link:function(c,d,e){d.addClass(e.windowClass||\"\"),c.size=e.size,c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&\"static\"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,\"backdrop click\"))},c.$isRendered=!0;var f=b.defer();e.$observe(\"modalRender\",function(a){\"true\"==a&&f.resolve()}),f.promise.then(function(){c.animate=!0;var b=d[0].querySelectorAll(\"[autofocus]\");b.length?b[0].focus():d[0].focus();var e=a.getTop();e&&a.modalRendered(e.key)})}}}]).directive(\"modalAnimationClass\",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.modalAnimationClass)}}}]).directive(\"modalTransclude\",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory(\"$modalStack\",[\"$animate\",\"$timeout\",\"$document\",\"$compile\",\"$rootScope\",\"$$stackedMap\",function(a,b,c,d,e,f){function g(){for(var a=-1,b=o.keys(),c=0;c<b.length;c++)o.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find(\"body\").eq(0),d=o.get(a).value;o.remove(a),j(d.modalDomEl,d.modalScope,function(){b.toggleClass(n,o.length()>0),i()})}function i(){if(l&&-1==g()){var a=m;j(l,m,function(){a=null}),l=void 0,m=void 0}}function j(c,d,f){function g(){g.done||(g.done=!0,c.remove(),d.$destroy(),f&&f())}d.animate=!1,c.attr(\"modal-animation\")&&a.enabled()?c.one(\"$animate:close\",function(){e.$evalAsync(g)}):b(g)}function k(a,b,c){return!a.value.modalScope.$broadcast(\"modal.closing\",b,c).defaultPrevented}var l,m,n=\"modal-open\",o=f.createNew(),p={};return e.$watch(g,function(a){m&&(m.index=a)}),c.bind(\"keydown\",function(a){var b;27===a.which&&(b=o.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){p.dismiss(b.key,\"escape key press\")})))}),p.open=function(a,b){var f=c[0].activeElement;o.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var h=c.find(\"body\").eq(0),i=g();if(i>=0&&!l){m=e.$new(!0),m.index=i;var j=angular.element('<div modal-backdrop=\"modal-backdrop\"></div>');j.attr(\"backdrop-class\",b.backdropClass),b.animation&&j.attr(\"modal-animation\",\"true\"),l=d(j)(m),h.append(l)}var k=angular.element('<div modal-window=\"modal-window\"></div>');k.attr({\"template-url\":b.windowTemplateUrl,\"window-class\":b.windowClass,size:b.size,index:o.length()-1,animate:\"animate\"}).html(b.content),b.animation&&k.attr(\"modal-animation\",\"true\");var p=d(k)(b.scope);o.top().value.modalDomEl=p,o.top().value.modalOpener=f,h.append(p),h.addClass(n)},p.close=function(a,b){var c=o.get(a);return c&&k(c,b,!0)?(c.value.deferred.resolve(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismiss=function(a,b){var c=o.get(a);return c&&k(c,b,!1)?(c.value.deferred.reject(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},p.getTop=function(){return o.top()},p.modalRendered=function(a){var b=o.get(a);b&&b.value.renderDeferred.resolve()},p}]).provider(\"$modal\",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:[\"$injector\",\"$rootScope\",\"$q\",\"$templateRequest\",\"$controller\",\"$modalStack\",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))\n}),c}var j={};return j.open=function(b){var e=d.defer(),j=d.defer(),k=d.defer(),l={result:e.promise,opened:j.promise,rendered:k.promise,close:function(a){return g.close(l,a)},dismiss:function(a){return g.dismiss(l,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error(\"One of template or templateUrl options is required.\");var m=d.all([h(b)].concat(i(b.resolve)));return m.then(function(a){var d=(b.scope||c).$new();d.$close=l.close,d.$dismiss=l.dismiss;var h,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=l,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),h=f(b.controller,i),b.controllerAs&&(d[b.controllerAs]=h)),g.open(l,{scope:d,deferred:e,renderDeferred:k,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),m.then(function(){j.resolve(!0)},function(a){j.reject(a)}),l},j}]};return a}),angular.module(\"ui.bootstrap.pagination\",[]).controller(\"PaginationController\",[\"$scope\",\"$attrs\",\"$parse\",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch(\"totalItems\",function(){a.totalPages=d.calculateTotalPages()}),a.$watch(\"totalPages\",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+\"Text\"]||d.config[b+\"Text\"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant(\"paginationConfig\",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:\"First\",previousText:\"Previous\",nextText:\"Next\",lastText:\"Last\",rotate:!0}).directive(\"pagination\",[\"$parse\",\"paginationConfig\",function(a,b){return{restrict:\"EA\",scope:{totalItems:\"=\",firstText:\"@\",previousText:\"@\",nextText:\"@\",lastText:\"@\"},require:[\"pagination\",\"?ngModel\"],controller:\"PaginationController\",templateUrl:\"template/pagination/pagination.html\",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,\"...\",!1);c.unshift(j)}if(b>e){var m=g(e+1,\"...\",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant(\"pagerConfig\",{itemsPerPage:10,previousText:\"« Previous\",nextText:\"Next »\",align:!0}).directive(\"pager\",[\"pagerConfig\",function(a){return{restrict:\"EA\",scope:{totalItems:\"=\",previousText:\"@\",nextText:\"@\"},require:[\"pager\",\"?ngModel\"],controller:\"PaginationController\",templateUrl:\"template/pagination/pager.html\",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module(\"ui.bootstrap.tooltip\",[\"ui.bootstrap.position\",\"ui.bootstrap.bindHtml\"]).provider(\"$tooltip\",function(){function a(a){var b=/[A-Z]/g,c=\"-\";return a.replace(b,function(a,b){return(b?c:\"\")+a.toLowerCase()})}var b={placement:\"top\",animation:!0,popupDelay:0,useContentExp:!1},c={mouseenter:\"mouseleave\",click:\"click\",focus:\"blur\"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=[\"$window\",\"$compile\",\"$timeout\",\"$document\",\"$position\",\"$interpolate\",function(e,f,g,h,i,j){return function(e,k,l,m){function n(a){var b=a||m.trigger||l,d=c[b]||b;return{show:b,hide:d}}m=angular.extend({},b,d,m);var o=a(e),p=j.startSymbol(),q=j.endSymbol(),r=\"<div \"+o+'-popup title=\"'+p+\"title\"+q+'\" '+(m.useContentExp?'content-exp=\"contentExp()\" ':'content=\"'+p+\"content\"+q+'\" ')+'placement=\"'+p+\"placement\"+q+'\" popup-class=\"'+p+\"popupClass\"+q+'\" animation=\"animation\" is-open=\"isOpen\"origin-scope=\"origScope\" ></div>';return{restrict:\"EA\",compile:function(){var a=f(r);return function(b,c,d){function f(){E.isOpen?l():j()}function j(){(!D||b.$eval(d[k+\"Enable\"]))&&(s(),E.popupDelay?A||(A=g(o,E.popupDelay,!1),A.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return A=null,z&&(g.cancel(z),z=null),(m.useContentExp?E.contentExp():E.content)?(q(),x.css({top:0,left:0,display:\"block\"}),E.$digest(),F(),E.isOpen=!0,E.$apply(),F):angular.noop}function p(){E.isOpen=!1,g.cancel(A),A=null,E.animation?z||(z=g(r,500)):r()}function q(){x&&r(),y=E.$new(),x=a(y,function(a){B?h.find(\"body\").append(a):c.after(a)}),y.$watch(function(){g(F,0,!1)}),m.useContentExp&&y.$watch(\"contentExp()\",function(a){!a&&E.isOpen&&p()})}function r(){z=null,x&&(x.remove(),x=null),y&&(y.$destroy(),y=null)}function s(){t(),u(),v()}function t(){E.popupClass=d[k+\"Class\"]}function u(){var a=d[k+\"Placement\"];E.placement=angular.isDefined(a)?a:m.placement}function v(){var a=d[k+\"PopupDelay\"],b=parseInt(a,10);E.popupDelay=isNaN(b)?m.popupDelay:b}function w(){var a=d[k+\"Trigger\"];G(),C=n(a),C.show===C.hide?c.bind(C.show,f):(c.bind(C.show,j),c.bind(C.hide,l))}var x,y,z,A,B=angular.isDefined(m.appendToBody)?m.appendToBody:!1,C=n(void 0),D=angular.isDefined(d[k+\"Enable\"]),E=b.$new(!0),F=function(){if(x){var a=i.positionElements(c,x,E.placement,B);a.top+=\"px\",a.left+=\"px\",x.css(a)}};E.origScope=b,E.isOpen=!1,E.contentExp=function(){return b.$eval(d[e])},m.useContentExp||d.$observe(e,function(a){E.content=a,!a&&E.isOpen&&p()}),d.$observe(\"disabled\",function(a){a&&E.isOpen&&p()}),d.$observe(k+\"Title\",function(a){E.title=a});var G=function(){c.unbind(C.show,j),c.unbind(C.hide,l)};w();var H=b.$eval(d[k+\"Animation\"]);E.animation=angular.isDefined(H)?!!H:m.animation;var I=b.$eval(d[k+\"AppendToBody\"]);B=angular.isDefined(I)?I:B,B&&b.$on(\"$locationChangeSuccess\",function(){E.isOpen&&p()}),b.$on(\"$destroy\",function(){g.cancel(z),g.cancel(A),G(),r(),E=null})}}}}}]}).directive(\"tooltipTemplateTransclude\",[\"$animate\",\"$sce\",\"$compile\",\"$templateRequest\",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit(\"$includeContentLoaded\",b)}},function(){g===l&&(m(),e.$emit(\"$includeContentError\",b))}),e.$emit(\"$includeContentRequested\",b)):m()}),e.$on(\"$destroy\",m)}}}]).directive(\"tooltipClasses\",function(){return{restrict:\"A\",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive(\"tooltipPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-popup.html\"}}).directive(\"tooltip\",[\"$tooltip\",function(a){return a(\"tooltip\",\"tooltip\",\"mouseenter\")}]).directive(\"tooltipTemplatePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\",originScope:\"&\"},templateUrl:\"template/tooltip/tooltip-template-popup.html\"}}).directive(\"tooltipTemplate\",[\"$tooltip\",function(a){return a(\"tooltipTemplate\",\"tooltip\",\"mouseenter\",{useContentExp:!0})}]).directive(\"tooltipHtmlPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-html-popup.html\"}}).directive(\"tooltipHtml\",[\"$tooltip\",function(a){return a(\"tooltipHtml\",\"tooltip\",\"mouseenter\",{useContentExp:!0})}]).directive(\"tooltipHtmlUnsafePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-html-unsafe-popup.html\"}}).value(\"tooltipHtmlUnsafeSuppressDeprecated\",!1).directive(\"tooltipHtmlUnsafe\",[\"$tooltip\",\"tooltipHtmlUnsafeSuppressDeprecated\",\"$log\",function(a,b,c){return b||c.warn(\"tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.\"),a(\"tooltipHtmlUnsafe\",\"tooltip\",\"mouseenter\")}]),angular.module(\"ui.bootstrap.popover\",[\"ui.bootstrap.tooltip\"]).directive(\"popoverTemplatePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{title:\"@\",contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\",originScope:\"&\"},templateUrl:\"template/popover/popover-template.html\"}}).directive(\"popoverTemplate\",[\"$tooltip\",function(a){return a(\"popoverTemplate\",\"popover\",\"click\",{useContentExp:!0})}]).directive(\"popoverPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{title:\"@\",content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/popover/popover.html\"}}).directive(\"popover\",[\"$tooltip\",function(a){return a(\"popover\",\"popover\",\"click\")}]),angular.module(\"ui.bootstrap.progressbar\",[]).constant(\"progressConfig\",{animate:!0,max:100}).controller(\"ProgressController\",[\"$scope\",\"$attrs\",\"progressConfig\",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c){e||c.css({transition:\"none\"}),this.bars.push(b),b.$watch(\"value\",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on(\"$destroy\",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive(\"progress\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,controller:\"ProgressController\",require:\"progress\",scope:{},templateUrl:\"template/progressbar/progress.html\"}}).directive(\"bar\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,require:\"^progress\",scope:{value:\"=\",max:\"=?\",type:\"@\"},templateUrl:\"template/progressbar/bar.html\",link:function(a,b,c,d){d.addBar(a,b)}}}).directive(\"progressbar\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,controller:\"ProgressController\",scope:{value:\"=\",max:\"=?\",type:\"@\"},templateUrl:\"template/progressbar/progressbar.html\",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module(\"ui.bootstrap.rating\",[]).constant(\"ratingConfig\",{max:5,stateOn:null,stateOff:null}).controller(\"RatingController\",[\"$scope\",\"$attrs\",\"ratingConfig\",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive(\"rating\",function(){return{restrict:\"EA\",require:[\"rating\",\"ngModel\"],scope:{readonly:\"=?\",onHover:\"&\",onLeave:\"&\"},controller:\"RatingController\",templateUrl:\"template/rating/rating.html\",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module(\"ui.bootstrap.tabs\",[]).controller(\"TabsetController\",[\"$scope\",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on(\"$destroy\",function(){d=!0})}]).directive(\"tabset\",function(){return{restrict:\"EA\",transclude:!0,replace:!0,scope:{type:\"@\"},controller:\"TabsetController\",templateUrl:\"template/tabs/tabset.html\",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive(\"tab\",[\"$parse\",\"$log\",function(a,b){return{require:\"^tabset\",restrict:\"EA\",replace:!0,templateUrl:\"template/tabs/tab.html\",transclude:!0,scope:{active:\"=?\",heading:\"@\",onSelect:\"&select\",onDeselect:\"&deselect\"},controller:function(){},compile:function(c,d,e){return function(c,d,f,g){c.$watch(\"active\",function(a){a&&g.select(c)}),c.disabled=!1,f.disable&&c.$parent.$watch(a(f.disable),function(a){c.disabled=!!a}),f.disabled&&(b.warn('Use of \"disabled\" attribute has been deprecated, please use \"disable\"'),c.$parent.$watch(a(f.disabled),function(a){c.disabled=!!a})),c.select=function(){c.disabled||(c.active=!0)},g.addTab(c),c.$on(\"$destroy\",function(){g.removeTab(c)}),c.$transcludeFn=e}}}}]).directive(\"tabHeadingTransclude\",[function(){return{restrict:\"A\",require:\"^tab\",link:function(a,b){a.$watch(\"headingElement\",function(a){a&&(b.html(\"\"),b.append(a))})}}}]).directive(\"tabContentTransclude\",function(){function a(a){return a.tagName&&(a.hasAttribute(\"tab-heading\")||a.hasAttribute(\"data-tab-heading\")||\"tab-heading\"===a.tagName.toLowerCase()||\"data-tab-heading\"===a.tagName.toLowerCase())}return{restrict:\"A\",require:\"^tabset\",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module(\"ui.bootstrap.timepicker\",[]).constant(\"timepickerConfig\",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0}).controller(\"TimepickerController\",[\"$scope\",\"$attrs\",\"$parse\",\"$log\",\"$locale\",\"timepickerConfig\",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?\"0\"+a:a.toString()}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity(\"time\",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours=\"h\"===b?c:i(c),\"m\"!==b&&(a.minutes=i(d)),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render,o.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind(\"mousewheel wheel\",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind(\"mousewheel wheel\",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind(\"keydown\",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind(\"keydown\",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity(\"time\",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j(\"h\")):d(!0)},b.bind(\"blur\",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j(\"m\")):d(void 0,!0)},c.bind(\"blur\",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$viewValue;isNaN(a)?(o.$setValidity(\"time\",!1),d.error('Timepicker directive: \"ng-model\" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive(\"timepicker\",function(){return{restrict:\"EA\",require:[\"timepicker\",\"?^ngModel\"],controller:\"TimepickerController\",replace:!0,scope:{},templateUrl:\"template/timepicker/timepicker.html\",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find(\"input\"))}}}),angular.module(\"ui.bootstrap.transition\",[]).value(\"$transitionSuppressDeprecated\",!1).factory(\"$transition\",[\"$q\",\"$timeout\",\"$rootScope\",\"$log\",\"$transitionSuppressDeprecated\",function(a,b,c,d,e){function f(a){for(var b in a)if(void 0!==h.style[b])return a[b]}e||d.warn(\"$transition is now deprecated. Use $animate from ngAnimate instead.\");var g=function(d,e,f){f=f||{};var h=a.defer(),i=g[f.animation?\"animationEndEventName\":\"transitionEndEventName\"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(e)?d.addClass(e):angular.isFunction(e)?e(d):angular.isObject(e)&&d.css(e),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject(\"Transition cancelled\")},h.promise},h=document.createElement(\"trans\"),i={WebkitTransition:\"webkitTransitionEnd\",MozTransition:\"transitionend\",OTransition:\"oTransitionEnd\",transition:\"transitionend\"},j={WebkitTransition:\"webkitAnimationEnd\",MozTransition:\"animationend\",OTransition:\"oAnimationEnd\",transition:\"animationend\"};return g.transitionEndEventName=f(i),g.animationEndEventName=f(j),g}]),angular.module(\"ui.bootstrap.typeahead\",[\"ui.bootstrap.position\",\"ui.bootstrap.bindHtml\"]).factory(\"typeaheadParser\",[\"$parse\",function(a){var b=/^\\s*([\\s\\S]+?)(?:\\s+as\\s+([\\s\\S]+?))?\\s+for\\s+(?:([\\$\\w][\\$\\w\\d]*))\\s+in\\s+([\\s\\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of \"_modelValue_ (as _label_)? for _item_ in _collection_\" but got \"'+c+'\".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive(\"typeahead\",[\"$compile\",\"$parse\",\"$q\",\"$timeout\",\"$document\",\"$position\",\"typeaheadParser\",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:\"ngModel\",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on(\"$destroy\",function(){x.$destroy()});var y=\"typeahead-\"+x.$id+\"-\"+Math.floor(1e4*Math.random());j.attr({\"aria-autocomplete\":\"list\",\"aria-expanded\":!1,\"aria-owns\":y});var z=angular.element(\"<div typeahead-popup></div>\");z.attr({id:y,matches:\"matches\",active:\"activeIdx\",select:\"select(activeIdx)\",query:\"query\",position:\"position\"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr(\"template-url\",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr(\"aria-expanded\",!1)},B=function(a){return y+\"-option-\"+a};x.$watch(\"activeIdx\",function(a){0>a?j.removeAttr(\"aria-activedescendant\"):j.attr(\"aria-activedescendant\",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c&&c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop(\"offsetHeight\"),j.attr(\"aria-expanded\",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity(\"editable\",!1):(l.$setValidity(\"editable\",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return p||l.$setValidity(\"editable\",!0),s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity(\"editable\",!0),l.$setValidity(\"parse\",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind(\"keydown\",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind(\"blur\",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind(\"click\",G),i.$on(\"$destroy\",function(){e.unbind(\"click\",G),t&&H.remove(),z.remove()});var H=a(z)(x);t?e.find(\"body\").append(H):j.after(H)}}}]).directive(\"typeaheadPopup\",function(){return{restrict:\"EA\",scope:{matches:\"=\",query:\"=\",active:\"=\",position:\"=\",select:\"&\"},replace:!0,templateUrl:\"template/typeahead/typeahead-popup.html\",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive(\"typeaheadMatch\",[\"$templateRequest\",\"$compile\",\"$parse\",function(a,b,c){return{restrict:\"EA\",scope:{index:\"=\",match:\"=\",query:\"=\"},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||\"template/typeahead/typeahead-match.html\";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter(\"typeaheadHighlight\",function(){function a(a){return a.replace(/([.?*+^$[\\]\\\\(){}|-])/g,\"\\\\$1\")}return function(b,c){return c?(\"\"+b).replace(new RegExp(a(c),\"gi\"),\"<strong>$&</strong>\"):b}}),angular.module(\"template/accordion/accordion-group.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/accordion/accordion-group.html\",'<div class=\"panel panel-default\">\\n  <div class=\"panel-heading\">\\n    <h4 class=\"panel-title\">\\n      <a href=\"javascript:void(0)\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{\\'text-muted\\': isDisabled}\">{{heading}}</span></a>\\n    </h4>\\n  </div>\\n  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\\n\t  <div class=\"panel-body\" ng-transclude></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/accordion/accordion.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/accordion/accordion.html\",'<div class=\"panel-group\" ng-transclude></div>')}]),angular.module(\"template/alert/alert.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/alert/alert.html\",'<div class=\"alert\" ng-class=\"[\\'alert-\\' + (type || \\'warning\\'), closeable ? \\'alert-dismissable\\' : null]\" role=\"alert\">\\n    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\\n        <span aria-hidden=\"true\">&times;</span>\\n        <span class=\"sr-only\">Close</span>\\n    </button>\\n    <div ng-transclude></div>\\n</div>\\n')}]),angular.module(\"template/carousel/carousel.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/carousel/carousel.html\",'<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\\n    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\\n        <li ng-repeat=\"slide in slides | orderBy:\\'index\\' track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\\n    </ol>\\n    <div class=\"carousel-inner\" ng-transclude></div>\\n    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\\n    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\\n</div>\\n')}]),angular.module(\"template/carousel/slide.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/carousel/slide.html\",'<div ng-class=\"{\\n    \\'active\\': active\\n  }\" class=\"item text-center\" ng-transclude></div>\\n')}]),angular.module(\"template/datepicker/datepicker.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/datepicker.html\",'<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\\n  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\\n  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\\n  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\\n</div>')}]),angular.module(\"template/datepicker/day.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/day.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n    <tr>\\n      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\\n      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"dt.customClass\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-muted\\': dt.secondary, \\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')}]),angular.module(\"template/datepicker/month.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/month.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')}]),angular.module(\"template/datepicker/popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/popup.html\",'<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && \\'block\\') || \\'none\\', top: position.top+\\'px\\', left: position.left+\\'px\\'}\" ng-keydown=\"keydown($event)\">\\n\t<li ng-transclude></li>\\n\t<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\\n\t\t<span class=\"btn-group pull-left\">\\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select(\\'today\\')\">{{ getText(\\'current\\') }}</button>\\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText(\\'clear\\') }}</button>\\n\t\t</span>\\n\t\t<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText(\\'close\\') }}</button>\\n\t</li>\\n</ul>\\n')}]),angular.module(\"template/datepicker/year.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/year.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')\n}]),angular.module(\"template/modal/backdrop.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/modal/backdrop.html\",'<div class=\"modal-backdrop\"\\n     modal-animation-class=\"fade\"\\n     ng-class=\"{in: animate}\"\\n     ng-style=\"{\\'z-index\\': 1040 + (index && 1 || 0) + index*10}\"\\n></div>\\n')}]),angular.module(\"template/modal/window.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/modal/window.html\",'<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\\n    modal-animation-class=\"fade\"\\n\tng-class=\"{in: animate}\" ng-style=\"{\\'z-index\\': 1050 + index*10, display: \\'block\\'}\" ng-click=\"close($event)\">\\n    <div class=\"modal-dialog\" ng-class=\"size ? \\'modal-\\' + size : \\'\\'\"><div class=\"modal-content\" modal-transclude></div></div>\\n</div>\\n')}]),angular.module(\"template/pagination/pager.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/pagination/pager.html\",'<ul class=\"pager\">\\n  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText(\\'previous\\')}}</a></li>\\n  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText(\\'next\\')}}</a></li>\\n</ul>')}]),angular.module(\"template/pagination/pagination.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/pagination/pagination.html\",'<ul class=\"pagination\">\\n  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1, $event)\">{{getText(\\'first\\')}}</a></li>\\n  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText(\\'previous\\')}}</a></li>\\n  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\\n  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText(\\'next\\')}}</a></li>\\n  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages, $event)\">{{getText(\\'last\\')}}</a></li>\\n</ul>')}]),angular.module(\"template/tooltip/tooltip-html-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-html-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-html-unsafe-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-html-unsafe-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-template-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-template-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\"\\n    tooltip-template-transclude=\"contentExp()\"\\n    tooltip-template-transclude-scope=\"originScope()\"></div>\\n</div>\\n')}]),angular.module(\"template/popover/popover-template.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover-template.html\",'<div class=\"popover\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\\n      <div class=\"popover-content\"\\n        tooltip-template-transclude=\"contentExp()\"\\n        tooltip-template-transclude-scope=\"originScope()\"></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/popover/popover-window.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover-window.html\",'<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen, fade: animation }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\\n      <div class=\"popover-content\" tooltip-template-transclude></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/popover/popover.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover.html\",'<div class=\"popover\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\\n      <div class=\"popover-content\" ng-bind=\"content\"></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/progressbar/bar.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/bar.html\",'<div class=\"progress-bar\" ng-class=\"type && \\'progress-bar-\\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \\'%\\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\\n')}]),angular.module(\"template/progressbar/progress.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/progress.html\",'<div class=\"progress\" ng-transclude></div>')}]),angular.module(\"template/progressbar/progressbar.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/progressbar.html\",'<div class=\"progress\">\\n  <div class=\"progress-bar\" ng-class=\"type && \\'progress-bar-\\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \\'%\\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\\n</div>\\n')}]),angular.module(\"template/rating/rating.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/rating/rating.html\",'<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\\n    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || \\'glyphicon-star\\') || (r.stateOff || \\'glyphicon-star-empty\\')\">\\n        <span class=\"sr-only\">({{ $index < value ? \\'*\\' : \\' \\' }})</span>\\n    </i>\\n</span>')}]),angular.module(\"template/tabs/tab.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tabs/tab.html\",'<li ng-class=\"{active: active, disabled: disabled}\">\\n  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\\n</li>\\n')}]),angular.module(\"template/tabs/tabset.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tabs/tabset.html\",'<div>\\n  <ul class=\"nav nav-{{type || \\'tabs\\'}}\" ng-class=\"{\\'nav-stacked\\': vertical, \\'nav-justified\\': justified}\" ng-transclude></ul>\\n  <div class=\"tab-content\">\\n    <div class=\"tab-pane\" \\n         ng-repeat=\"tab in tabs\" \\n         ng-class=\"{active: tab.active}\"\\n         tab-content-transclude=\"tab\">\\n    </div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/timepicker/timepicker.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/timepicker/timepicker.html\",'<table>\\n\t<tbody>\\n\t\t<tr class=\"text-center\">\\n\t\t\t<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\\n\t\t\t<td>&nbsp;</td>\\n\t\t\t<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\\n\t\t\t<td ng-show=\"showMeridian\"></td>\\n\t\t</tr>\\n\t\t<tr>\\n\t\t\t<td class=\"form-group\" ng-class=\"{\\'has-error\\': invalidHours}\">\\n\t\t\t\t<input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\\n\t\t\t</td>\\n\t\t\t<td>:</td>\\n\t\t\t<td class=\"form-group\" ng-class=\"{\\'has-error\\': invalidMinutes}\">\\n\t\t\t\t<input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\\n\t\t\t</td>\\n\t\t\t<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\\n\t\t</tr>\\n\t\t<tr class=\"text-center\">\\n\t\t\t<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\\n\t\t\t<td>&nbsp;</td>\\n\t\t\t<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\\n\t\t\t<td ng-show=\"showMeridian\"></td>\\n\t\t</tr>\\n\t</tbody>\\n</table>\\n')}]),angular.module(\"template/typeahead/typeahead-match.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/typeahead/typeahead-match.html\",'<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>')}]),angular.module(\"template/typeahead/typeahead-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/typeahead/typeahead-popup.html\",'<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+\\'px\\', left: position.left+\\'px\\'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\\n    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\\n        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\\n    </li>\\n</ul>\\n')}]),!angular.$$csp()&&angular.element(document).find(\"head\").prepend('<style type=\"text/css\">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(12))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/*! angular-breadcrumb - v0.4.0\n* http://ncuillery.github.io/angular-breadcrumb\n* Copyright (c) 2015 Nicolas Cuillery; Licensed MIT */\n!function(a,b,c){\"use strict\";function d(a,c){return b.equals(a.length,c.length)?a>c:a.length>c.length}function e(a){var b=a.replace(/\\n/g,\" \").match(/^([^(]+?)\\s*(\\((.*)\\))?$/);if(!b||4!==b.length)throw new Error(\"Invalid state ref '\"+a+\"'\");return{state:b[1],paramExpr:b[3]||null}}function f(){var a={prefixStateName:null,template:\"bootstrap3\",templateUrl:null,includeAbstract:!1};this.setOptions=function(c){b.extend(a,c)},this.$get=[\"$state\",\"$stateParams\",\"$rootScope\",function(b,f,g){var h=g;g.$on(\"$viewContentLoaded\",function(a){d(a.targetScope.$id,h.$id)&&(h=a.targetScope)});var i=function(a){var b=a.parent||(/^(.+)\\.[^.]+$/.exec(a.name)||[])[1],c=\"object\"==typeof b;return c?b.name:b},j=function(c,d){for(var g,i,j=e(d),k=!1,l=!1,m=0,n=c.length;n>m;m+=1)if(c[m].name===j.state)return;g=b.get(j.state),g.ncyBreadcrumb&&(g.ncyBreadcrumb.force&&(k=!0),g.ncyBreadcrumb.skip&&(l=!0)),g[\"abstract\"]&&!a.includeAbstract&&!k||l||(j.paramExpr&&(i=h.$eval(j.paramExpr)),g.ncyBreadcrumbLink=b.href(j.state,i||f||{}),c.unshift(g))},k=function(a){var c=e(a),d=b.get(c.state);if(d.ncyBreadcrumb&&d.ncyBreadcrumb.parent){var f=\"function\"==typeof d.ncyBreadcrumb.parent,g=f?d.ncyBreadcrumb.parent(h):d.ncyBreadcrumb.parent;if(g)return g}return i(d)};return{getTemplate:function(b){return a.templateUrl?null:b[a.template]?b[a.template]:a.template},getTemplateUrl:function(){return a.templateUrl},getStatesChain:function(c){for(var d=[],e=b.$current.self.name;e;e=k(e))if(j(d,e),c&&d.length)return d;return a.prefixStateName&&j(d,a.prefixStateName),d},getLastStep:function(){var a=this.getStatesChain(!0);return a.length?a[0]:c},$getLastViewScope:function(){return h}}}]}function g(a,c,d){var e={bootstrap2:'<ul class=\"breadcrumb\"><li ng-repeat=\"step in steps\" ng-switch=\"$last || !!step.abstract\" ng-class=\"{active: $last}\"><a ng-switch-when=\"false\" href=\"{{step.ncyBreadcrumbLink}}\">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when=\"true\">{{step.ncyBreadcrumbLabel}}</span><span class=\"divider\" ng-hide=\"$last\">/</span></li></ul>',bootstrap3:'<ol class=\"breadcrumb\"><li ng-repeat=\"step in steps\" ng-class=\"{active: $last}\" ng-switch=\"$last || !!step.abstract\"><a ng-switch-when=\"false\" href=\"{{step.ncyBreadcrumbLink}}\">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when=\"true\">{{step.ncyBreadcrumbLabel}}</span></li></ol>'};return{restrict:\"AE\",replace:!0,scope:{},template:c.getTemplate(e),templateUrl:c.getTemplateUrl(),link:{post:function(e){var f=[],g=function(){l(f),f=[];var d=c.$getLastViewScope();e.steps=c.getStatesChain(),b.forEach(e.steps,function(b){if(b.ncyBreadcrumb&&b.ncyBreadcrumb.label){var c=a(b.ncyBreadcrumb.label);b.ncyBreadcrumbLabel=c(d),k(f,c,d,b)}else b.ncyBreadcrumbLabel=b.name})};d.$on(\"$viewContentLoaded\",function(){g()}),g()}}}}function h(a,b,c){return{restrict:\"A\",scope:{},template:\"{{ncyBreadcrumbLabel}}\",compile:function(d,e){var f=d.attr(e.$attr.ncyBreadcrumbLast);return f&&d.html(f),{post:function(d){var e=[],f=function(){l(e),e=[];var c=b.$getLastViewScope(),f=b.getLastStep();if(f)if(d.ncyBreadcrumbLink=f.ncyBreadcrumbLink,f.ncyBreadcrumb&&f.ncyBreadcrumb.label){var g=a(f.ncyBreadcrumb.label);d.ncyBreadcrumbLabel=g(c),k(e,g,c,d)}else d.ncyBreadcrumbLabel=f.name};c.$on(\"$viewContentLoaded\",function(){f()}),f()}}}}}function i(a,c,d){return{restrict:\"A\",scope:{},template:\"{{ncyBreadcrumbChain}}\",compile:function(e,f){var g=e.attr(f.$attr.ncyBreadcrumbText);g&&e.html(g);var h=e.attr(f.$attr.ncyBreadcrumbTextSeparator)||\" / \";return{post:function(e){var f=[],g=function(a,c,d){b.forEach(j(c),function(b){var c=d.$watch(b,function(a,b){a!==b&&i()});a.push(c)})},i=function(){l(f),f=[];var d=c.$getLastViewScope(),i=c.getStatesChain(),j=[];b.forEach(i,function(b){if(b.ncyBreadcrumb&&b.ncyBreadcrumb.label){var c=a(b.ncyBreadcrumb.label);j.push(c(d)),g(f,c,d)}else j.push(b.name)}),e.ncyBreadcrumbChain=j.join(h)};d.$on(\"$viewContentLoaded\",function(){i()}),i()}}}}}var j=function(a){if(a.expressions)return a.expressions;var c=[];return b.forEach(a.parts,function(a){b.isFunction(a)&&c.push(a.exp)}),c},k=function(a,c,d,e){b.forEach(j(c),function(b){var f=d.$watch(b,function(){e.ncyBreadcrumbLabel=c(d)});a.push(f)})},l=function(a){b.forEach(a,function(a){a()})};g.$inject=[\"$interpolate\",\"$breadcrumb\",\"$rootScope\"],h.$inject=[\"$interpolate\",\"$breadcrumb\",\"$rootScope\"],i.$inject=[\"$interpolate\",\"$breadcrumb\",\"$rootScope\"],b.module(\"ncy-angular-breadcrumb\",[\"ui.router.state\"]).provider(\"$breadcrumb\",f).directive(\"ncyBreadcrumb\",g).directive(\"ncyBreadcrumbLast\",h).directive(\"ncyBreadcrumbText\",i)}(window,window.angular);"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(14))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/**\n * oclazyload - Load modules on demand (lazy load) with angularJS\n * @version v1.0.1\n * @link https://github.com/ocombe/ocLazyLoad\n * @license MIT\n * @author Olivier Combe <olivier.combe@gmail.com>\n */\n!function(e,n){\"use strict\";var r=[\"ng\",\"oc.lazyLoad\"],o={},t=[],i=[],a=[],s=e.noop,u={},c=[],l=e.module(\"oc.lazyLoad\",[\"ng\"]);l.provider(\"$ocLazyLoad\",[\"$controllerProvider\",\"$provide\",\"$compileProvider\",\"$filterProvider\",\"$injector\",\"$animateProvider\",function(l,d,g,p,m,v){function y(n,o,t){if(o){var i,a,l,d=[];for(i=o.length-1;i>=0;i--)if(a=o[i],e.isString(a)||(a=j(a)),a&&-1===c.indexOf(a)){var f=-1===r.indexOf(a);if(l=h(a),f&&(r.push(a),y(n,l.requires,t)),l._runBlocks.length>0)for(u[a]=[];l._runBlocks.length>0;)u[a].push(l._runBlocks.shift());e.isDefined(u[a])&&(f||t.rerun)&&(d=d.concat(u[a])),$(n,l._invokeQueue,a,t.reconfig),$(n,l._configBlocks,a,t.reconfig),s(f?\"ocLazyLoad.moduleLoaded\":\"ocLazyLoad.moduleReloaded\",a),o.pop(),c.push(a)}var g=n.getInstanceInjector();e.forEach(d,function(e){g.invoke(e)})}}function L(n,r){function t(n){return e.isArray(n)?D(n.toString()):e.isObject(n)?D(z(n)):e.isDefined(n)&&null!==n?D(n.toString()):n}var i=n[2][0],a=n[1],u=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][a])&&(o[r][a]={});var c=function(e,n){o[r][a].hasOwnProperty(e)||(o[r][a][e]=[]),-1===o[r][a][e].indexOf(n)&&(u=!0,o[r][a][e].push(n),s(\"ocLazyLoad.componentLoaded\",[r,a,e]))};if(e.isString(i))c(i,t(n[2][1]));else{if(!e.isObject(i))return!1;e.forEach(i,function(n,r){e.isString(n)?c(n,t(i[1])):c(r,t(n))})}return u}function $(n,r,o,i){if(r){var a,s,u,c;for(a=0,s=r.length;s>a;a++)if(u=r[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error(\"unsupported provider \"+u[0]);c=n[u[0]]}var l=L(u,o);if(\"invoke\"!==u[1])l&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var d=function(n){var r=t.indexOf(\"\"+o+\"-\"+n);(-1===r||i)&&(-1===r&&t.push(\"\"+o+\"-\"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))d(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&d(u[2][0][f])}}}}function j(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty(\"name\")&&e.isString(n.name)&&(r=n.name),r}function E(n){if(!e.isString(n))return!1;try{return h(n)}catch(r){if(/No module/.test(r)||r.message.indexOf(\"$injector:nomod\")>-1)return!1}}var _={},w={$controllerProvider:l,$compileProvider:g,$filterProvider:p,$provide:d,$injector:m,$animateProvider:v},O=!1,b=!1,x=[];x.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){_[e.name]=e}):_[n.modules.name]=n.modules),e.isDefined(n.debug)&&(O=n.debug),e.isDefined(n.events)&&(b=n.events)},this._init=function(o){if(0===i.length){var t=[o],s=[\"ng:app\",\"ng-app\",\"x-ng-app\",\"data-ng-app\"],u=/\\sng[:\\-]app(:\\s*([\\w\\d_]+);?)?\\s/,c=function(e){return e&&t.push(e)};e.forEach(s,function(n){s[n]=!0,c(document.getElementById(n)),n=n.replace(\":\",\"\\\\:\"),o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll(\".\"+n),c),e.forEach(o[0].querySelectorAll(\".\"+n+\"\\\\:\"),c),e.forEach(o[0].querySelectorAll(\"[\"+n+\"]\"),c))}),e.forEach(t,function(n){if(0===i.length){var r=\" \"+o.className+\" \",t=u.exec(r);t?i.push((t[2]||\"\").replace(/\\s+/g,\",\")):e.forEach(n.attributes,function(e){0===i.length&&s[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error(\"No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.\");var l=function d(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);$(null,o._invokeQueue,n),$(null,o._configBlocks,n),e.forEach(o.requires,d)}};e.forEach(i,function(e){l(e)}),i=[],a.pop()};var z=function(n){var r=[];return JSON.stringify(n,function(n,o){if(e.isObject(o)&&null!==o){if(-1!==r.indexOf(o))return;r.push(o)}return o})},D=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=[\"$log\",\"$rootElement\",\"$rootScope\",\"$cacheFactory\",\"$q\",function(n,o,t,u,l){function d(e){var r=l.defer();return n.error(e.message),r.reject(e),r.promise}var g,p=u(\"ocLazyLoad\");return O||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),w.getInstanceInjector=function(){return g?g:g=o.data(\"$injector\")||e.injector()},s=function(e,r){b&&t.$broadcast(e,r),O&&n.info(e,r)},{_broadcast:s,_$log:n,_getFilesCache:function(){return p},toggleWatch:function(e){e?a.push(!0):a.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error(\"You need to give the name of the module to get\");return _[n]?e.copy(_[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error(\"You need to give the module config object to set\");return _[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!E(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error(\"You need to define the module(s) name(s)\")},_getModuleName:j,_getModule:function(e){try{return h(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf(\"$injector:nomod\")>-1)&&(n.message='The module \"'+z(e)+'\" that you are trying to load does not exist. '+n.message),n}},moduleExists:E,_loadDependencies:function(n,r){var o,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return l.when();try{o=s._getModule(n)}catch(u){return d(u)}return t=s.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=s.getModuleConfig(o);if(null===t)return void x.push(o);o=t}if(s.moduleExists(o.name))return i=o.files.filter(function(e){return s.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module \"',n,'\" attempted to redefine configuration for dependency. \"',o.name,'\"\\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)})):d(new Error(\"Error: New dependencies need to be loaded from external files (\"+o.files+\"), but no loader has been defined.\"));if(e.isArray(o)?o={files:o}:e.isObject(o)&&o.hasOwnProperty(\"name\")&&o.name&&(s.setModuleConfig(o),x.push(o.name)),e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(s.filesLoader))return d(new Error('Error: the module \"'+o.name+'\" is defined in external files ('+o.files+\"), but no loader has been defined.\"));a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)}))}}),l.all(a)},inject:function(n){var r=void 0===arguments[1]?{}:arguments[1],o=this,t=l.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var a=[];return e.forEach(n,function(e){a.push(o.inject(e))}),l.all(a)}o._addToLoadList(o._getModuleName(n),!0)}if(i.length>0){var s=i.slice(),u=function d(e){x.push(e),o._loadDependencies(e,r).then(function(){try{c=[],y(w,x,r)}catch(e){return o._$log.error(e.message),void t.reject(e)}i.length>0?d(i.shift()):t.resolve(s)},function(e){t.reject(e)})};u(i.shift())}else t.resolve();return t.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:$,_registerInvokeList:L,_register:y,_addToLoadList:f}}],this._init(e.element(n.document))}]);var d=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){f(e,!0)}),d(n,r,o)};var f=function(n,r){(a.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&i.push(n)},h=e.module;e.module=function(e,n,r){return f(e),h(e,n,r)}}(angular,window),function(e){\"use strict\";e.module(\"oc.lazyLoad\").directive(\"ocLazyLoad\",[\"$ocLazyLoad\",\"$compile\",\"$animate\",\"$parse\",function(n,r,o,t){return{restrict:\"A\",terminal:!0,priority:1e3,compile:function(i){var a=i[0].innerHTML;return i.html(\"\"),function(s,u,c){var l=t(c.ocLazyLoad);s.$watch(function(){return l(s)||c.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){o.enter(a,u);var n=i.contents();e.forEach(n,function(e){3!==e.nodeType&&r(e)(s)})})},!0)}}}}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",\"$window\",\"$interval\",function(n,r,o,t){var i=!1,a=!1,s=o.document.getElementsByTagName(\"head\")[0]||o.document.getElementsByTagName(\"body\")[0];return n.buildElement=function(u,c,l){var d,f,h=r.defer(),g=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf(\"?\")>=0?\"&\"===e.substring(0,e.length-1)?\"\"+e+\"_dc=\"+n:\"\"+e+\"&_dc=\"+n:\"\"+e+\"?_dc=\"+n};switch(e.isUndefined(g.get(c))&&g.put(c,h.promise),u){case\"css\":d=o.document.createElement(\"link\"),d.type=\"text/css\",d.rel=\"stylesheet\",d.href=l.cache===!1?p(c):c;break;case\"js\":d=o.document.createElement(\"script\"),d.src=l.cache===!1?p(c):c;break;default:g.remove(c),h.reject(new Error('Requested type \"'+u+'\" is not known. Could not inject \"'+c+'\"'))}d.onload=d.onreadystatechange=function(){d.readyState&&!/^c|loade/.test(d.readyState)||f||(d.onload=d.onreadystatechange=null,f=1,n._broadcast(\"ocLazyLoad.fileLoaded\",c),h.resolve())},d.onerror=function(){g.remove(c),h.reject(new Error(\"Unable to load \"+c))},d.async=l.serie?0:1;var m=s.lastChild;if(l.insertBefore){var v=e.element(e.isDefined(window.jQuery)?l.insertBefore:document.querySelector(l.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(d,m),\"css\"==u){if(!i){var y=o.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(o.navigator.platform)){var L=o.navigator.appVersion.match(/OS (\\d+)_(\\d+)_?(\\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join(\".\"));a=6>$}else if(y.indexOf(\"android\")>-1){var j=parseFloat(y.slice(y.indexOf(\"android\")+8));a=4.4>j}else if(y.indexOf(\"safari\")>-1){var E=y.match(/version\\/([\\.\\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{d.sheet.cssRules,t.cancel(w),d.onload()}catch(e){--_<=0&&d.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.filesLoader=function(o){var t=void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,o);var d=function(r){var o,d=null;if(e.isObject(r)&&(d=r.type,r=r.path),c=l.get(r),e.isUndefined(c)||t.cache===!1){if(null!==(o=/^(css|less|html|htm|js)?(?=!)/.exec(r))&&(d=o[1],r=r.substr(o[1].length+1,r.length)),!d)if(null!==(o=/[.](css|less|html|htm|js)?((\\?|#).*)?$/.exec(r)))d=o[1];else{if(n.jsLoader.hasOwnProperty(\"ocLazyLoadLoader\")||!n.jsLoader.hasOwnProperty(\"load\"))return void n._$log.error(\"File type could not be determined. \"+r);d=\"js\"}\"css\"!==d&&\"less\"!==d||-1!==i.indexOf(r)?\"html\"!==d&&\"htm\"!==d||-1!==a.indexOf(r)?\"js\"===d||-1===s.indexOf(r)?s.push(r):n._$log.error(\"File type is not valid. \"+r):a.push(r):i.push(r)}else c&&u.push(c)};if(t.serie?d(t.files.shift()):e.forEach(t.files,function(e){d(e)}),i.length>0){var f=r.defer();n.cssLoader(i,function(r){e.isDefined(r)&&n.cssLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),f.reject(r)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=r.defer();n.templatesLoader(a,function(r){e.isDefined(r)&&n.templatesLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),h.reject(r)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var g=r.defer();n.jsLoader(s,function(r){e.isDefined(r)&&n.jsLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),g.reject(r)):g.resolve()},t),u.push(g.promise)}if(0===u.length){var p=r.defer(),m=\"Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.\";return n._$log.error(m),p.reject(m),p.promise}return t.serie&&t.files.length>0?r.all(u).then(function(){return n.filesLoader(o,t)}):r.all(u)[\"finally\"](function(e){return n.toggleWatch(!1),e})},n.load=function(o){var t,i=void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=r.defer(),l=e.copy(o),d=e.copy(i);if(e.isArray(l))return e.forEach(l,function(e){u.push(a.load(e,d))}),r.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l),s||(s={files:[l]})):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var f=a._getModuleName(l);return t='Module \"'+(f||\"unknown\")+'\" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},d,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.cssLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement(\"css\",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.jsLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement(\"js\",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$templateCache\",\"$q\",\"$http\",function(n,r,o,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=o.defer();u.push(i.promise),t.get(n,s).success(function(o){e.isString(o)&&o.length>0&&e.forEach(e.element(o),function(e){\"SCRIPT\"===e.nodeName&&\"text/ng-template\"===e.type&&r.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file \"'+n+'\": '+e))})}),o.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('\"this\" is null or not defined');var o=Object(this),t=o.length>>>0;if(0===t)return-1;var i=+n||0;if(1/0===Math.abs(i)&&(i=0),i>=t)return-1;for(r=Math.max(i>=0?i:t-Math.abs(i),0);t>r;){if(r in o&&o[r]===e)return r;r++}return-1});\n//# sourceMappingURL=ocLazyLoad.min.js.map"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;
	exports.run = run;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _main = __webpack_require__(16);

	var _main2 = _interopRequireDefault(_main);

	/*@ngInject*/
	function config($locationProvider, $compileProvider, $httpProvider, stateHelperProvider, $urlRouterProvider, RestangularProvider) {
	  $locationProvider.html5Mode(true);
	  $compileProvider.debugInfoEnabled(false);
	  $httpProvider.interceptors.push('userInterceptor');
	  $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
	  RestangularProvider.setBaseUrl('api');
	  RestangularProvider.setRestangularFields({
	    id: '_id'
	  });
	  stateHelperProvider.state(_main2['default']);
	  $urlRouterProvider.otherwise('/home');
	}
	config.$inject = ["$locationProvider", "$compileProvider", "$httpProvider", "stateHelperProvider", "$urlRouterProvider", "RestangularProvider"];

	/*@ngInject*/
	function run($rootScope) {
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    console.error(error);
	  });
	}
	run.$inject = ["$rootScope"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mainJade = __webpack_require__(17);

	var _mainJade2 = _interopRequireDefault(_mainJade);

	var _mainControllerJs = __webpack_require__(18);

	var _mainControllerJs2 = _interopRequireDefault(_mainControllerJs);

	var _home = __webpack_require__(22);

	var _home2 = _interopRequireDefault(_home);

	var _contact = __webpack_require__(24);

	var _contact2 = _interopRequireDefault(_contact);

	var _software = __webpack_require__(26);

	var _software2 = _interopRequireDefault(_software);

	var _content = __webpack_require__(28);

	var _content2 = _interopRequireDefault(_content);

	var _download = __webpack_require__(110);

	var _download2 = _interopRequireDefault(_download);

	var _register = __webpack_require__(113);

	var _register2 = _interopRequireDefault(_register);

	var _author = __webpack_require__(116);

	var _author2 = _interopRequireDefault(_author);

	exports['default'] = {
	  name: 'main',
	  url: '',
	  abstract: true,
	  template: _mainJade2['default'],
	  controller: _mainControllerJs2['default'],
	  controllerAs: 'main',
	  children: [_home2['default'], _contact2['default'], _software2['default'], _content2['default'], _download2['default'], _register2['default'], _author2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<nav role="navigation" class="navbar navbar-inverse navbar-static-top"><div class="container-fluid"><div class="navbar-header"><button type="button" data-ng-click="main.menuCollapse=!main.menuCollapse" aria-controls="mainnav" aria-expanded="{{!main.menuCollapse}}" aria-label="{{main.menuCollapse ? \'Men\xFC ausklappen\' : \'Men\xFC einklappen\'}}" class="navbar-toggle collapsed"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a data-ui-sref=".home" class="navbar-brand"><span class="fa fa-home"></span> Statistik f\xFCr Jedermann</a></div><div id="mainnav" data-collapse="main.menuCollapse" class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"><li data-ui-sref-active="active"><a data-ui-sref=".content"><span class="fa fa-book"></span> Inhalte</a></li><li data-ui-sref-active="active"><a data-ui-sref=".author">Authorenmodus</a></li><li data-ui-sref-active="active"><a data-ui-sref=".download"><span class="fa fa-download"></span> Download</a></li><li data-ui-sref-active="active"><a data-ui-sref=".software"><span class="fa fa-calculator"></span> Statistiksoftware</a></li><li data-ui-sref-active="active"><a data-ui-sref=".contact"><span class="fa fa-support"></span> Kontakt</a></li></ul><ul ng-if="!main.user.authenticated" class="nav navbar-nav navbar-right"><li><button type="button" data-ng-click="main.modals.login()"><span class="fa fa-sign-in"></span> Anmelden</button></li><li data-ui-sref-active="active"><a data-ui-sref=".register"><span class="fa fa-user-plus"></span> registrieren</a></li></ul><ul data-ng-if="main.user.authenticated" class="nav navbar-nav navbar-right"><li><span class="fa fa-user"></span> {{main.user.data.profile.nickname||main.user.data.email}}</li><li><button type="button" data-ng-click="::main.user.inauthenticate()"><span aria-hidden="true" class="fa fa-sign-out"></span> Abmelden</button></li></ul></div></div></nav><div ui-view class="container"></div>'

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _modalsLogin = __webpack_require__(19);

	var _modalsLogin2 = _interopRequireDefault(_modalsLogin);

	/*@ngInject*/
	var MainCtrl = function MainCtrl($state, $stateParams, user, modals, $modal) {
	  _classCallCheck(this, MainCtrl);

	  this.$state = $state;
	  this.$stateParams = $stateParams;
	  this.user = user;
	  this.modals = modals;
	  this.ngModelOptions = {
	    updateOn: 'default blur',
	    debounce: {
	      'default': 500,
	      blur: 0
	    }
	  };
	};
	MainCtrl.$inject = ["$state", "$stateParams", "user", "modals", "$modal"];

	exports['default'] = MainCtrl;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _loginJade = __webpack_require__(20);

	var _loginJade2 = _interopRequireDefault(_loginJade);

	var _loginControllerJs = __webpack_require__(21);

	var _loginControllerJs2 = _interopRequireDefault(_loginControllerJs);

	exports['default'] = {
	  template: _loginJade2['default'],
	  controller: _loginControllerJs2['default'],
	  controllerAs: 'login',
	  animation: false
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<div class="modal-header"><h3>Anmelden</h3></div><div class="modal-body"><form id="login-form" novalidate name="loginForm" role="form" class="form-horizontal"><div data-ng-class="{\'has-success\': loginForm.email.$valid, \'has-error\': loginForm.email.$invalid&&loginForm.email.$touched}" class="form-group"><label for="email-input" class="col-xs-2 control-label">E-Mail-Adresse</label><div class="col-xs-10"><input type="email" name="email" id="email-input" class="form-control" placeholder="name@provider.com" data-ng-model="login.name" required maxlength="20" user-check="exists" data-ng-model-options="{debounce: 500}"><span data-ng-show="loginForm.email.$touched&&loginForm.email.$invalid" data-ng-messages="loginForm.email.$error" class="help-block"><span data-ng-message="required">Bitte gib eine E-Mail-Adresse an.</span><span data-ng-message="email">Das ist keine g\xFCltige E-mail-Adresse.</span><span data-ng-message="userExists">Dieser User existiert nicht.</span></span><span aria-live="assertive" data-ng-show="loginForm.email.$touched" class="help-block"><span ng-if="loginForm.email.$valid">Dieser User existiert.</span><span ng-if="loginForm.email.$pending">Pr\xFCfe Verf\xFCgbarkeit</span></span></div></div><div data-ng-class="{\'has-success\': loginForm.password.$valid, \'has-error\': loginForm.password.$invalid&&loginForm.password.$touched}" class="form-group"><label for="password-input" class="col-xs-2 control-label">Passwort</label><div class="col-xs-10"><input type="password" name="password" id="password-input" class="form-control" ng-model="login.pass" required minlength="8" placeholder="unl\xF6sbar"><span data-ng-switch="login.message" aria-live="assertive" class="help-block"><span data-ng-switch-when="incorrect password">Das Passwort ist nicht korrekt.</span><span data-ng-switch-when="incorrect username">Der Benutzer existiert nicht.</span></span></div></div></form></div><div class="modal-footer"><input type="button" value="abbrechen" data-ng-click="login.cancel()" class="btn btn-default"><input type="button" data-ng-class="{\'btn-primary\': loginForm.$valid, \'btn-danger\': loginForm.$invalid}" value="anmelden" data-ng-click="login.login()" class="btn"></div>'

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var LoginCtrl = (function () {
	  function LoginCtrl(user, $modalInstance, $q) {
	    _classCallCheck(this, LoginCtrl);

	    this.user = user;
	    this.$q = $q;
	    this.$modalInstance = $modalInstance;
	    this.name = '';
	    this.pass = '';
	    this.message = '';
	  }

	  _createClass(LoginCtrl, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;

	      return this.user.authenticate(this.name, this.pass).then(function () {
	        return _this.user.init().then(function () {
	          _this.$modalInstance.close();
	        });
	      })['catch'](function (e) {
	        _this.message = e.data;return e;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss('lala');
	    }
	  }]);

	  return LoginCtrl;
	})();

	exports['default'] = LoginCtrl;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _homeJade = __webpack_require__(23);

	var _homeJade2 = _interopRequireDefault(_homeJade);

	exports['default'] = {
	  name: 'home',
	  url: '/home',
	  template: _homeJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<div class="jumbo-tron"><h2>Willkommen!</h2><h3>Das erwartet dich hier</h3><p>Hier kannst du die Grundlagen der psychologischen Statistik kennenlernen und dir eine Vorstellung davon erschlie\xDFen, wie und warum Statistik in der Forschung eingesetzt wird, was sie Leisten kann und was ihre Grenzen sind.. Falls du einfach nur die Inhalte deiner Statistikvorlesung etwas wiederholen m\xF6chtest oder gerade in der Klausur durchgefallen bist, laden wir dich genauso herzlich ein wie die Statistikanf\xE4nger.</p><p>Es gibt hier Lernkapitel, die sich jeweils mit einem bestimmten Themengebiet besch\xE4ftigen. Es gibt keine festgelegte Reihenfolge bei der Bearbeitung und du brauchst nicht alles von Anfang bis Ende durchzulesen, was hier zu finden ist. Manche Kapitel haben jedoch andere als Abh\xE4ngigkeiten. Bearbeite am besten zuerst die Abh\xE4ngigkeiten, bevor du ein solches Kapitel bearbeitest. Ein Kapitel besteht aus den Kernartikeln, die jeweils durch Zus\xE4tze erg\xE4nzt sind . Du kannst relativ flexibel entscheiden, ob und welche Zus\xE4tze du lesen m\xF6chtest.</p><dl class="dl-horizontal"><dt>Aufgaben</dt><dd>Die Einheit ist abgeschlossen, wenn du alle Aufgaben bearbeitet hast.</dd><dt>Beispiele</dt><dd>Wenn du mehr Hilfestellung oder Veranschaulichung brauchst, kannst du dir die Beispiele ansehen.</dd><dt>Extras</dt><dd>theoretischere Hintergrundinformationen, f\xFCr den Fall, dass du noch Luft hast und es genauer wissen m\xF6chtest</dd></dl><h3>Deine Mitarbeit ist gefragt</h3><p>Du hast die M\xF6glichkeit, Kapitel kurz mittels Rating zu bewerten, die du abgeschlossen hast. Mache bitte gro\xDFz\xFCgigen Gebrauch davon. Die Ratings k\xF6nnen beliebig oft ge\xE4ndert werden, du kannst also frei von der Leber weg bewerten.</p><p>Wir m\xF6chten nachvollziehen, ob und wie sich deine Selbsteinsch\xE4tzung deiner Statistikkenntnisse durch die Benutzung dieser Webseite ver\xE4ndert. Deswegen kannst du nicht nur Bewertungen abgeben, sondern auch deine aktuellen Statistikkenntnisse einsch\xE4tzen. Tue dies z.B., wenn du gerade ein Kapitel beendet hast oder wenn es dir gerade einf\xE4llt.</p><p ng-if="!main.user.authenticated"><a data-ui-sref="^.register" class="btn btn-primary">jetzt registrieren und anfangen.</a></p></div>'

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contactJade = __webpack_require__(25);

	var _contactJade2 = _interopRequireDefault(_contactJade);

	exports['default'] = {
	  name: 'contact',
	  url: '/contact',
	  template: _contactJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h2>Kontakt</h2><p>Anfragen zu inhaltlichen Themen, technischen Schwierigkeiten, Feedback/Kritik und Anregungen sind bitte an <a href="mailto:webmaster@t-cook.de">webmaster@t-cook.de </a>zu richten. Ich werde mich dann bald des Problems annehmen. Es kann den Vorgang beschleunigen, den Nutzernamen mit anzugeben oder die Anfrage mit der E-Mail-Adresse zu schicken, die im Profil angegeben wurde.</p>'

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _softwareJade = __webpack_require__(27);

	var _softwareJade2 = _interopRequireDefault(_softwareJade);

	exports['default'] = {
	  name: 'software',
	  url: '/software',
	  template: _softwareJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h2>Statistiksoftware Excel</h2><p>Mit Excel l\xE4sst sich schon einiges an statistischen Auswertungen erreichen. Es folgen ein paar Grundlagen dar\xFCber, wie man mit Excel viel Rechnerei computergest\xFCtzt durchf\xFChren kann. Es wird ein Excel 2013 zugrunde gelegt. Gr\xF6\xDFtenteils sollte das hier Beschriebene aber auch in \xE4lteren Versionen verf\xFCgbar sein.</p><accordion><accordion-group is-open="true" heading="Formeln"><p>Formeln k\xF6nnen die Grundrechenarten auf Zahlen anwenden und einer Zelle kann man eine Formel zuweisen, statt einfach direkt eine Zahl in die Zelle einzutragen. Eine Zelle mit Formel zeigt das berechnete Ergebnis als Wert an. Markiere die Zelle, in der das Ergebnis erscheinen soll und trage die Formel dort ein. Formeln beginnen mit einem Gleichheitszeichen und werden mit der Return- oder Tabtaste ausgef\xFChrt. Durch das Gleichheitszeichen wei\xDF Excel, dass es die Eingabe als Formel interpretieren soll und nicht als normalen Wert. Mit den Grundrechenoperatoren (+, -, * und /) kann man nun Rechnungen auf Grundschulniveau konstruieren. Das ist sehr bequem, wenn das formulieren schneller geht als das Rechnen, z.B. bei der Anzahl von Sekunden: <kbd>=60*60*24*7</kbd> f\xFChrt zu 604.800.</p></accordion-group><accordion-group heading="Referenzieren"><p>In Formeln kann man nicht nur die zu verrechnenden Zahlen direkt eingeben, sondern stattdessen auch die Koordinaten der Zellen, in denen die Zahlen stehen: =a1+b1*c1. Die Spalten werden von links nach rechts mit Buchstaben bezeichnet, Zeilen von oben nach unten mit Nummern. In einer Koordinate kommt zuerst die Spalte, dann die Zeile. Die Zelle in der dritten Spalte von links und der zweiten Zeile von oben hei\xDFt z.B. C2. Das Angenehme dabei ist: \xC4ndert sich der Wert einer solchen referenzierten Zelle, wird die Formel neu berechnet und der Wert der mit Formel versehenen Zelle stimmt immer.</p></accordion-group><accordion-group heading="Zellbereiche ausf\xFCllen"><p>Excel interpretiert die Koordinaten in einer Formel als relativ, bezogen auf die Formelzelle. Verschiebt man die Zelle mit der Formel z.B. um eine Spalte nach rechts, werden auch die Koordinaten in der Formel so ge\xE4ndert, als h\xE4tten sich die referenzierten Zellen mit verschoben. Um wirklich absolute Koordinaten zu erhalten, die an ihre Spalte bzw. Zeile fixiert sind, wird dem Buchstaben oder der Nummer ein Dollarzeichen vorangestellt. =$b$3 w\xE4re vollst\xE4ndig fixiert, =$b3 hingegen nur auf der Spalte. Ein Vorzug der relativen Schreibweise ist, dass man die Formel kopieren und auf eine ganze Spalte oder Zeile anwenden kann.</p><p>Beispiel: Es gibt Spalte a und b, und 20 Zeilen. Man m\xF6chte eine Spalte c erstellen, indem man in jeder Zeile den Wert aus Spalte b von dem aus Spalte a subtrahiert. Hierzu schreibt man in Zelle c1: =a1-b1. Nun kopiert man Zelle c1, markiert Zellen c2\u2014c20 und f\xFCgt die kopierte Zelle ein. Die Referenzen passen sich an die Zeilen an, in denen die Formeln stehen.</p></accordion-group><accordion-group heading="Funktionen"><p>Funktionen fassen komplexere Rechenoperationen unter einem Funktionsnamen zusammen. Sie werden mit Eingabewerten (Parametern) gef\xFCttert und geben einen Ausgabewert zur\xFCck, der aufgrund der Parameter berechnet wird. Funktionen erscheinen in Formeln, k\xF6nnen entweder deren einziger Bestandteil sein oder noch von Rechenoperatoren umgeben sein: =Funktionsname(Parameter1;Parameter2;\u2026). Die Funktion zur Berechnung der Summe hei\xDFt naheliegenderweise Summe. Um die Summe aus C2 und C3 zu berechnen, lautet der Funktionsaufruf: summe(C2;C3). Diese Aufgabe w\xE4re nat\xFCrlich mit einem direkten Formelaufruf schneller erledigt; Funktionen entfalten ihr Potential erst bei komplexeren Berechnungen wie auch Statistik.</p></accordion-group><accordion-group heading="Bereiche referenzieren"><p>Um die Summenfunktion doch noch zu rehabilitieren, kann als Parameter statt einzelner Zellen ein Zellbereich \xFCbergeben werden. Bereiche werden notiert, indem die Zellbez\xFCge f\xFCr Anfangs- und Endzelle durch einen Doppelpunkt getrennt werden: =Summe(C3:C6) entspricht =summe(c3;c4;c5;c6). Bereiche k\xF6nnen auch zweidimensional sein: c2:d4 entspricht C2, C3, C4, D2, D3 und D4. So kann man mit der Summenfunktion und Bereichsreferenzierung auch Summen \xFCber gr\xF6\xDFere Bereiche bilden, was allein mit Formeln sehr viel Tipparbeit und fehleranf\xE4lliger w\xE4re.</p></accordion-group><accordion-group heading="Funktionsbibliothek"><p>Im Men\xFC unter Formeln > Funktionsbibliothek > Mehr Funktionen > Statistisch gibt es Funktionen speziell f\xFCr statistische Berechnungen. Man muss die in Excel implementierten Funktionen also nicht auswendig eingeben, sondern kann sie aus dem Men\xFC heraus ausw\xE4hlen.</p></accordion-group></accordion>'

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contentJade = __webpack_require__(29);

	var _contentJade2 = _interopRequireDefault(_contentJade);

	var _contentControllerJs = __webpack_require__(30);

	var _contentControllerJs2 = _interopRequireDefault(_contentControllerJs);

	var _unit = __webpack_require__(31);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'content',
	  url: '/content',
	  template: _contentJade2['default'],
	  controller: _contentControllerJs2['default'],
	  controllerAs: 'content',
	  resolve: {
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {
	        projections: 'title',
	        options: { sort: 'position' }
	      };
	      return Restangular.all('units').getList(query);
	    }],
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(1, function () {
	          var md = __webpack_require__(43);
	          $ocLazyLoad.load({ name: md });
	          return resolve(md);
	        });
	      });
	    }]
	  },
	  children: [_unit2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<nav role="navigation" class="row"><div class="col-xs-12"><ul class="nav nav-pills"><li ng-repeat="unit in content.units track by unit._id" data-ui-sref-active="active"><a data-ui-sref=".unit.description({unit: unit._id})" data-ng-bind="unit.title" data-ng-class="{\'text-success\': main.user.complete(unit._id), \'text-primary\': main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id), \'text-warning\': !main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id)}"></a></li></ul></div></nav><section class="row"><div data-ui-view class="col-xs-12"><h2>Wozu \xFCberhaupt Statistik?</h2><p>Psychologie leistet einen enormen Beitrag zur Gestaltung wirksamer Unterrichtsmethoden, Diagnostik und Interventionen, Marketing/Werbung, Personalauswahl und -Entwicklung, Produktdesign (Ergonomie), und weiteren Anwendungsbereichen, in denen Wissen \xFCber das Erleben und Verhalten des Menschen unabdingbar ist. Wie kommen wir aber zu diesem Wissen?</p><dl><dt>Fragestellung/Annahmen</dt><dd>Es werden Annahmen zu einem Thema aufgestellt, die sich \xFCberpr\xFCfen lassen und nach der \xDCberpr\xFCfung widerlegt oder best\xE4tigt sind. Solche Annahmen m\xFCssen widerlegbar sein, sonst bringt sie einfach keinen Erkenntnisgewinn. Das Sprichwort \u201EWenn der Hahn kr\xE4ht auf dem Mist, \xE4ndert sich das wetter oder es bleibt, wie es ist.\u201C trifft immer zu, wie das Wetter auch sein mag und es gibt keine M\xF6glichkeit, es zu widerlegen. Hingegen ist \u201EWenn der Fuchs heult, wird der Mond scheinen\u201C widerlegbar. Tats\xE4chlich verifizieren kann man solche universellen Annahmen nicht, sondern h\xF6chstens falsifizieren. Deshalb ist bei wissenschaftlichen Annahmen die Falsifizierbarkeit sehr wichtig und bezeichnend f\xFCr eine gute Annahme. Besonders etablierte Erkenntnisse haben im Grunde \u201Enur\u201C zahlreichen Falsifizierungsversuchen widerstanden. Das sind Situationen, deren Ausgang f\xFCr oder gegen die Annahme spricht. Dass die Sonne morgens aufgeht, wird jeden Morgen gepr\xFCft und wurde bisher nicht widerlegt. Es ist also eine empirisch gut fundierte, vorl\xE4ufig akzeptierte Annahme. Hier zeigt sich schon, dass der bin\xE4re Wahrheitsbegriff von wahr und unwahr zu etwas kontinuierlicherem wird.</dd><dt>Empirie</dt><dd>In Experimenten, Felduntersuchungen usw. werden Informationen \xFCber menschliches Erleben oder Verhalten gesammelt, die f\xFCr oder gegen die Annahme sprechen. Dies kann sehr schwierig sein, wenn z.B. viele andere Annahmen die gesammelten Beobachtungen ebenso gut erkl\xE4ren k\xF6nnten wie die aktuell gepr\xFCfte. Eine Annahme \xFCber Geschlechterunterschiede kann nur dann untersucht werden, wenn zwischen den beiden Gruppen m\xF6glichst nur der Geschlechterunterschied besteht.</dd><dt>Statistik</dt><dd>Gemachte Beobachtungen werden als Messwerte ausgedr\xFCckt. Dadurch ist es m\xF6glich, sie auf logisch-mathematischer Ebene zu beschreiben, zusammenzufassen und Annahmen zu pr\xFCfen. Man l\xE4sst also die Inhaltlichen Aspekte vorerst mal beiseite und arbeitet mit den Werten. Das ist z.B. n\xF6tig, weil Menschen sich nie in Bezug auf eine Annahme genau gleich verhalten. Man hat es also mit Tendenzen zu tun, die sich erst mittels Statistik extrahieren lassen.</dd><dt>Interpretation</dt><dd>Die statistischen Ergebnisse werden im Hinblick auf die Annahme interpretiert. Trifft die Annahme den Ergebnissen zufolge zu oder nicht? Gen\xFCgend so gepr\xFCfte Annahmen k\xF6nnen zu einer Theorie integriert werden. Theorien sind sozusagen die vorl\xE4ufigen \u201EWahrheiten\u201C dar\xFCber, wie die Welt funktioniert. Zumindest k\xF6nnen sie weitere konkrete Beobachtungen vorhersagen und sie erkl\xE4ren. Von konkreten Beobachtungen auf andere Beobachtungen zu schlie\xDFen, ist nicht m\xF6glich. Theorien sind in st\xE4ndiger Weiterentwicklung begriffen und werden stetig verbessert und verfeinert. Aus einer Theorie ergeben sich wiederum Annahmen, die man empirisch-statistisch pr\xFCfen kann um die Theorie zu testen.</dd></dl><h3>Warum dieser Umweg \xFCber die Statistik?</h3><h4>Objektivit\xE4t und Transparenz</h4><p>Es gibt nat\xFCrlich bessere und weniger gute Wege zu einer wissenschaftlichen Erkenntnis, aber der jeweilige Weg ist mit durch Statistik objektiv und transparent. Es ist also f\xFCr jeden klar nachvollziehbar, wie man von Einzelbeobachtungen zu einem statistischen Ergebnis gelangt ist. Dies gilt ebenso auch f\xFCr die Empirie, wo klar ersichtlich sein muss, wie die Beobachtungen zustande kamen. Vor allem aber lie\xDFe sich ohne Statistik kein verwertbares Ergebnis gewinnen, das sich hinsichtlich der gepr\xFCften Fragestellung interpretieren lie\xDFe.</p><h4>Qualit\xE4t und Verantwortung</h4><p>Durch Empirie und Statistik wird die Qualit\xE4t von Theorien gesteigert. Selbst wenn eine Theorie nicht jeden Einzelfall korrekt vorhersagen kann, erbringt diese systematische Vorgehensweise die besten Trefferquoten. Die Psychologie hat das ziel , durch sinnvolle Methodenwahl m\xF6glichst gute Theorien hervorzubringen und somit m\xF6glichst gute Vorhersagen zu liefern. Die Naturwissenschaften arbeiten empirisch und sicher h\xE4tten Sie ein Problem damit, wenn Maschinen oder Autos pl\xF6tzlich nicht mehr aufgrund m\xF6glichst sicherer und objektiver Erkenntnisse konstruiert w\xFCrden, sondern nach rein subjektivem Gutd\xFCnken (Ich baue, wie es mir gef\xE4llt). W\xFCrden Sie freiwillig ein solches Auto fahren? Warum sollte dies in der Psychologie anders sein, nur weil jeder gern seine private Psychologie pflegt? Erst so bekommt die Psychologie als Wissenschaft \xFCberhaupt einen Sinn. Wegen dieses hohen Anspruchs greifen viele Fachgebiete auf psychologische Befunde zur\xFCck, woraus der Psychologie wiederum eine gro\xDFe Verantwortung gegen\xFCber diesen Fachgebieten erw\xE4chst und gegen\xFCber den dabei involvierten Menschen. Durch fahrl\xE4ssige Behauptungen \xFCber kognitive, soziale und emotionale Entwicklung, Lernprozesse und die daraus abgeleitete Qualit\xE4t bestimmter Unterrichtsmethoden oder Therapieformen k\xF6nnten andere menschen wie Patienten, Mitarbeiter oder Sch\xFCler eine Fehlbehandlung erfahren, weil sich Personaler, Lehrer oder Berater auf diese Behauptungen verlassen. </p></div></section>'

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*@ngInject*/
	var ContentCtrl = function ContentCtrl(units) {
	  _classCallCheck(this, ContentCtrl);

	  this.units = units;
	};
	ContentCtrl.$inject = ["units"];

	exports["default"] = ContentCtrl;
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(32);

	var _unitJade = __webpack_require__(36);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitControllerJs = __webpack_require__(37);

	var _unitControllerJs2 = _interopRequireDefault(_unitControllerJs);

	var _description = __webpack_require__(38);

	var _description2 = _interopRequireDefault(_description);

	var _topic = __webpack_require__(40);

	var _topic2 = _interopRequireDefault(_topic);

	//import test from './test';

	exports['default'] = {
	  name: 'unit',
	  url: '/:unit',
	  template: _unitJade2['default'],
	  controller: _unitControllerJs2['default'],
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    unit: function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires topics._id topics.title' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }
	  },
	  children: [_description2['default'],
	  //    test,
	  _topic2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./subkapitel.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./subkapitel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	exports.push([module.id, ".subkapitel {\n  background-color: #E9EAED;\n  box-shadow: 0px 1px 1px #888888;\n  line-height: 2em;\n}", ""]);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<header class="row"><div class="col-sm-4"><h2><a ui-sref=".description" ng-bind="unit.unit.title"></a></h2></div><div class="col-sm-8"><h2 ng-bind="unit.unit.subtitle"></h2></div></header><div class="row"><nav class="col-sm-4"><ul class="nav nav-pills nav-stacked"><li ng-repeat="topic in unit.unit.topics track by topic._id" ui-sref-active="active"><a ui-sref=".topic({topic: topic._id})" ng-bind="topic.title"></a></li><li data-ui-sref-active="active"><a data-ui-sref="main.content.unit.test">Test</a></li></ul></nav><main data-ui-view class="col-sm-8 subkapitel"></main></div>'

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*@ngInject*/
	var UnitCtrl = function UnitCtrl(unit) {
	  _classCallCheck(this, UnitCtrl);

	  this.unit = unit;
	};
	UnitCtrl.$inject = ["unit"];

	exports["default"] = UnitCtrl;
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _descriptionJade = __webpack_require__(39);

	var _descriptionJade2 = _interopRequireDefault(_descriptionJade);

	exports['default'] = {
	  name: 'description',
	  url: '',
	  template: _descriptionJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h3>Beschreibung</h3><div markdown="unit.unit.description"></div><h4>Voraussetzungen</h4><p ng-if="!unit.unit.requires">Es gibt keine Voraussetzungen.</p><ul ng-if="unit.unit.requires" class="list-unstyled"><li ng-repeat="required in unit.unit.requires"><a data-ng-bind="required.title" data-ui-sref=".({unit: required._id})"></a></li></ul>'

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicJade = __webpack_require__(41);

	var _topicJade2 = _interopRequireDefault(_topicJade);

	var _topicControllerJs = __webpack_require__(42);

	var _topicControllerJs2 = _interopRequireDefault(_topicControllerJs);

	exports['default'] = {
	  name: 'topic',
	  url: '/:topic',
	  template: _topicJade2['default'],
	  controller: _topicControllerJs2['default'],
	  controllerAs: 'topic',
	  resolve: {
	    topic: function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h3 data-ng-bind="topic.topic.subtitle ? topic.topic.title+\': \'+topic.topic.subtitle : topic.topic.title"></h3><div markdown="topic.topic.body" math-jax></div><div role="toolbar" class="btn-toolbar"><div class="btn-group"><div dropdown is-open="status.examples" data-ng-if="topic.topic.examples.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Beispiele<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="example in topic.topic.examples"><a data-ui-sref=".example({example: example.title})" ng-bind="example.title" class="btn btn-default"></a></li></ul></div><div dropdown is-open="status.extras" data-ng-if="topic.topic.extras.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Extras<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="extra in topic.topic.extras"><a data-ui-sref=".extra({extra: extra.title})" data-ng-bind="extra.title" class="btn btn-default"></a></li></ul></div></div><div data-ng-if="main.user.authenticated" class="btn-group"><button type="button" ng-click="main.modal.akzeptanz(unit.unit)" class="btn btn-default">Kapitel bewerten</button><button type="button" data-ng-click="main.modal.fsk()" class="btn btn-default">Statistikkenntnisse einsch\xE4tzen</button></div></div><section data-ui-view></section>'

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*@ngInject*/
	var topicCtrl = function topicCtrl(topic) {
	  _classCallCheck(this, topicCtrl);

	  this.topic = topic;
	};
	topicCtrl.$inject = ["topic"];

	exports["default"] = topicCtrl;
	module.exports = exports["default"];

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _downloadJade = __webpack_require__(111);

	var _downloadJade2 = _interopRequireDefault(_downloadJade);

	var _downloadControllerJs = __webpack_require__(112);

	var _downloadControllerJs2 = _interopRequireDefault(_downloadControllerJs);

	exports['default'] = {
	  name: 'download',
	  url: '/download',
	  template: _downloadJade2['default'],
	  controller: _downloadControllerJs2['default'],
	  controllerAs: 'download'
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren m\xF6chtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten w\xE4hlen und einstellen, welche Bestandteile du haben m\xF6chtest.</p><form name="downloadForm" novalidate method="get" action="/statistikwbt/api/downloads" class="form-horizontal"><input type="hidden" name="token" ng-value="main.identity.token()"><div class="form-group"><label class="col-xs-2">Kapitel</label><div class="col-xs-10"><div data-ng-repeat="unit in download.units" class="checkbox"><label><input type="checkbox" name="units" data-ng-value="unit._id" checked> {{unit.title}}</label></div></div></div><div class="form-group"><label class="col-xs-2">Inhalte</label><div class="col-xs-10"><label class="checkbox-inline"><input type="checkbox" name="contents" value="body" checked> Kerntexte</label><label class="checkbox-inline"><input type="checkbox" name="contents" value="examples" checked> Beispiele</label><label class="checkbox-inline"><input type="checkbox" name="contents" value="extras" checked> Extras</label></div></div><div class="form-group"><label class="col-xs-2">Dateiformat</label><div class="col-xs-10"><label class="radio-inline"><input type="radio" name="format" value="docx" checked><span class="fa fa-file-word-o"></span> MS Word</label><label class="radio-inline"><input type="radio" name="format" value="rtf"> RTF</label><label class="radio-inline"><input type="radio" name="format" value="epub"><span class="fa fa-book"></span> Epub</label><label class="radio-inline"><input type="radio" name="format" value="markdown"><span class="fa fa-file-text-o"></span> Markdown</label><label class="radio-inline"><input type="radio" name="format" value="latex"><span class="fa fa-file-code-o"></span> LaTex</label></div></div><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Download" data-ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid}" class="btn"></div></div></form>'

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*@ngInject*/
	var DownloadController = function DownloadController(units) {
	  _classCallCheck(this, DownloadController);

	  this.units = units;
	};
	DownloadController.$inject = ["units"];

	exports["default"] = DownloadController;
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _registerJade = __webpack_require__(114);

	var _registerJade2 = _interopRequireDefault(_registerJade);

	var _registerControllerJs = __webpack_require__(115);

	var _registerControllerJs2 = _interopRequireDefault(_registerControllerJs);

	exports['default'] = {
	  name: 'register',
	  url: '/register',
	  template: _registerJade2['default'],
	  controller: _registerControllerJs2['default'],
	  controllerAs: 'register'
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h2>Registrieren</h2><form novalidate name="registerForm" ng-submit="main.user.register(register.registerData)" role="form" class="form-horizontal"><fieldset><legend>Logindaten</legend><div data-ng-class="{\'has-success\': registerForm.email.$valid, \'has-error\': registerForm.email.$invalid&&registerForm.email.$touched}" class="form-group"><label for="email-input" class="col-xs-2 control-label">E-Mail-Adresse</label><div class="col-xs-10"><input type="email" name="email" id="email-input" class="form-control" required maxlength="20" placeholder="name@provider.com" data-ng-model="register.registerData.email" data-ng-model-options="{debounce: 500}" user-available><span data-ng-show="registerForm.email.$touched&&registerForm.email.$invalid" data-ng-messages="registerForm.email.$error" class="help-block"><span data-ng-message="required">Bitte gib eine E-Mail-Adresse an.</span><span data-ng-message="email">Das ist keine g\xFCltige E-mail-Adresse.</span><span data-ng-message="userAvailable">Diese E-Mail ist schon registriert.</span></span><span aria-live="assertive" data-ng-show="registerForm.email.$touched" class="help-block"><span data-ng-if="registerForm.email.$valid">Diese E-mail ist noch verf\xFCgbar.</span><span data-ng-if="registerForm.email.$pending">Pr\xFCfe Verf\xFCgbarkeit</span></span></div></div><div data-ng-class="{\'has-success\': registerForm.password.$valid, \'has-error\': registerForm.password.$invalid&&registerForm.password.$touched}" class="form-group"><label for="password-input" class="col-xs-2 control-label">Passwort</label><div class="col-xs-10"><div class="input-group"><input type="{{register.showPassword ? \'text\' : \'password\'}}" name="password" id="password-input" class="form-control" data-ng-model="register.registerData.password" required minlength="8" placeholder="unl\xF6sbar"><span class="input-group-btn"><button type="button" data-ng-click="register.showPassword=!register.showPassword" data-ng-bind="register.showPassword ? \'ausblenden\' : \'einblenden\'" class="btn btn-default"></button></span></div><span data-ng-show="registerForm.password.$touched&&registerForm.password.$invalid" data-ng-messages="registerForm.password.$error" class="help-block"><span data-ng-message="required">Bitte gib ein Passwort an.</span><span data-ng-message="minlength">Das Passwort sollte mindestens acht Zeichen lang sein.</span></span></div></div></fieldset><fieldset><legend>Personenangaben</legend><div data-ng-class="{\'has-success\': registerForm.nickname.$valid, \'has-error\': registerForm.nickname.$invalid&&registerForm.nickname.$touched}" class="form-group"><label for="nickname-input" class="col-xs-2 control-label">Nickname (optional</label><div class="col-xs-10"><input type="text" name="nickname" id="nickname-input" class="form-control" data-ng-model="register.registerData.profile.nickname" maxlength="20"></div></div><div data-ng-class="{\'has-success\': registerForm.age.$valid, \'has-error\': registerForm.age.$invalid&&registerForm.age.$touched}" class="form-group"><label for="age-input" class="col-xs-2 control-label">Alter</label><div class="col-xs-10"><input type="number" name="age" id="age-input" class="form-control" required min="0" max="100" step="1" data-ng-model="register.registerData.profile.age"><span data-ng-show="registerForm.age.$touched&&registerForm.age.$invalid" data-ng-messages="registerForm.age.$error" class="help-block"><span data-ng-message=\'0\'>J</span><span data-ng-message=\'1\'>a</span><span data-ng-message=\'2\'>h</span><span data-ng-message=\'3\'>r</span><span data-ng-message=\'4\'>e</span></span></div></div><div class="form-group"><label class="col-xs-2">Geschlecht</label><div class="col-xs-10"><label class="radio-inline"><input type="radio" name="sex" value="male" data-ng-model="register.registerData.profile.sex" required><span class="fa fa-male"></span> m\xE4nnlich</label><label class="radio-inline"><input type="radio" name="sex" value="female" data-ng-model="register.registerData.profile.sex" required><span class="fa fa-female"></span> weiblich</label></div></div><div data-ng-class="{\'has-success\': registerForm.subject.$valid, \'has-error\': registerForm.subject.$invalid&&registerForm.subject.$touched}" class="form-group"><label for="subject-input" class="col-xs-2 control-label">Studienfach (optional)</label><div class="col-xs-10"><input type="text" name="subject" id="subject-input" class="form-control" data-ng-model="register.registerData.profile.subject" typeahead="subject.name for subject in register.getSubjects($viewValue)" placeholder="hier Studienfach eingeben und ausw\xE4hlen" typeahead-min-length="3" ng-required="register.profile.subject"></div></div><div class="form-group"><label class="col-xs-2">Registrierungsgrund/gr\xFCnde</label><div class="col-xs-10"><div class="checkbox"><label><input type="checkbox" data-ng-model="register.registerData.reasons[0]"> Interesse f\xFCr das Thema</label></div><div class="checkbox"><label><input type="checkbox" data-ng-model="register.registerData.reasons[1]"> Langeweile, Zeitvertreib, zuf\xE4llig reingestolpert</label></div><div class="checkbox"><label><input type="checkbox" data-ng-model="register.registerData.reasons[2]"> Vor- oder Nachbereitung f\xFCr Klausur/Vorlesung</label></div></div></div></fieldset><fieldset><legend>Datenschutz</legend><p>Mit der Registrierung erkl\xE4rst du dich mit folgenden Punkten einverstanden:</p><ul><li>Wir behandeln deine Eingaben anonym und vertraulich.</li><li>Neben deinen explizit gemachten Angaben werden deine Bewegungen teilweise mit erfasst um dich nicht zus\xE4tzlich nach deiner Verweildauer, den von dir angefurften Inhalten o.\xC4. fragen zu m\xFCssen.</li><li>Zu Forschungszwecken werten wir alle Nutzerdaten wissenschaftlich aus.</li><li>Wir behalten uns das Recht vor, dich zu Forschungszwecken \xFCber deine hier angegebene E-Mail-Adresse kontaktieren zu k\xF6nnen.</li></ul><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Einverstanden und Registrieren" data-ng-class="{\'btn-primary\': registerForm.$valid,\'btn-danger\': registerForm.$invalid}" class="btn"></div></div></fieldset></form>'

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var RegisterCtrl = (function () {
	  function RegisterCtrl($http) {
	    _classCallCheck(this, RegisterCtrl);

	    this.$http = $http;
	    this.registerData = {
	      profile: {
	        age: 20
	      }
	    };
	  }
	  RegisterCtrl.$inject = ["$http"];

	  _createClass(RegisterCtrl, [{
	    key: 'getSubjects',
	    value: function getSubjects(val) {
	      return this.$http.get('api/subjects', { params: { search: val } });
	    }
	  }]);

	  return RegisterCtrl;
	})();

	exports['default'] = RegisterCtrl;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _authorJade = __webpack_require__(117);

	var _authorJade2 = _interopRequireDefault(_authorJade);

	var _units = __webpack_require__(118);

	var _units2 = _interopRequireDefault(_units);

	var _vega = __webpack_require__(133);

	var _vega2 = _interopRequireDefault(_vega);

	exports['default'] = {
	  name: 'author',
	  url: '/author',
	  template: _authorJade2['default'],
	  resolve: {
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function () {
	          var md = __webpack_require__(43);
	          return resolve($ocLazyLoad.load({ name: md }));
	        });
	      });
	    }]
	  },
	  ncyBreadcrumb: { label: 'Autorentool' },
	  children: [_units2['default'], _vega2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<div class="row"><div class="col-xs-12"><div ncy-breadcrumb></div><h2>Authorenmodus</h2><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".units">Kapitel</a></li><li ui-sref-active="active"><a ui-sref=".vega">Vega</a></li></ul><div ui-view><p>Dies ist der Autorenmodus. Nur WBT-Autoren k\xF6nnen ihn verwenden und mit seiner Hilfe die Inhalte des WBT bearbeiten.</p></div></div></div>'

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitsJade = __webpack_require__(119);

	var _unitsJade2 = _interopRequireDefault(_unitsJade);

	var _unitsControllerJs = __webpack_require__(120);

	var _unitsControllerJs2 = _interopRequireDefault(_unitsControllerJs);

	var _unit = __webpack_require__(122);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'units',
	  url: '/units',
	  template: _unitsJade2['default'],
	  controller: _unitsControllerJs2['default'],
	  controllerAs: 'units',
	  resolve: {
	    units: function units(Restangular) {
	      var projections = 'title';
	      var options = { sort: 'position' };
	      var query = { projections: projections, options: options };
	      return Restangular.all('units').getList(query);
	    }
	  },
	  ncyBreadcrumb: { label: 'Kapitel' },
	  children: [_unit2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h3><button type="button" ng-click="units.collapse=!units.collapse" class="btn btn-default"><span ng-class="units.collapseUnits ? \'fa-toggle-off\' : \'fa-toggle-on\'" aria-hidden="true" class="fa"></span> {{units.collapseUnits ? \'einblenden\' : \'ausblenden\'}}</button><br><span>Kapitel\xFCbersicht</span></h3><div collapse="units.collapseUnits"><form novalidate name="unitsForm" class="form-horizontal"><div class="form-group"><label for="selectUnit" class="col-xs-2 control-label">Kapitel</label><div class="col-xs-10"><select id="selectUnit" name="selectUnit" ng-model="units.selected" ng-options="u.title for u in units.units track by u._id" class="form-control"></select></div></div><div ng-if="units.selected" class="form-group"><label class="col-xs-2">Funktionen</label><div class="col-xs-10"><div class="button-group"><a ui-sref="main.content.unit.description({unit: units.selected._id})" class="btn btn-primary">Anschauen</a><a ui-sref=".unit.basics({unit: units.selected._id})" class="btn btn-default">Bearbeiten</a><button type="button" ng-click="units.remove()" class="btn btn-default">L\xF6schen</button></div></div></div></form></div><div ui-view><h3>Neues Kapitel anlegen</h3><form novalidate name="newForm" ng-submit="units.save()" class="form-horizontal"><div data-ng-class="{\'has-success\': undefined.title.$valid, \'has-error\': undefined.title.$invalid&&undefined.title.$touched}" class="form-group"><label for="title-input" class="col-xs-2 control-label">Titel</label><div class="col-xs-10"><input type="text" name="title" id="title-input" class="form-control" ng-model="units.new.title"></div></div><div data-ng-class="{\'has-success\': undefined.subtitle.$valid, \'has-error\': undefined.subtitle.$invalid&&undefined.subtitle.$touched}" class="form-group"><label for="subtitle-input" class="col-xs-2 control-label">Untertitel</label><div class="col-xs-10"><input type="text" name="subtitle" id="subtitle-input" class="form-control" ng-model="units.new.subtitle"></div></div><div class="form-group"><label class="col xs-2">Voraussetzungen</label><div class="col-xs-10"><div ng-repeat="unit in units.units" class="checkbox"><label><input type="checkbox" name="requires" ng-model="units.requires[unit._id]"> {{unit.title}}</label></div></div></div><marked input="units.new.description"></marked><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="submit" value="Anlegen"></div></div></form></div>'

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(121);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var UnitsController = (function () {
	  function UnitsController(units) {
	    _classCallCheck(this, UnitsController);

	    this.units = units;
	    this['new'] = {};
	    this.requires = {};
	    this.collapse = false;
	  }
	  UnitsController.$inject = ["units"];

	  _createClass(UnitsController, [{
	    key: 'setRequires',
	    value: function setRequires() {
	      var requires = [];
	      _lodash2['default'].each(this.requires, function (val, key) {
	        if (val) {
	          requires.push(key);
	        }
	      }, this);
	      this['new'].requires = requires;
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      this.setRequires();
	      return this.units.post(this['new']).then(function (unit) {
	        _this['new'] = {};
	        _this.units.push(unit);
	        _this.selected = unit;
	        _this['new'] = {};
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;

	      if (!this.selected) {
	        return;
	      }
	      return this.selected.remove().then(function (unit) {
	        _lodash2['default'].remove(_this2.units, { _id: _this2.selected._id });
	        _this2.selected = null;
	      });
	    }
	  }]);

	  return UnitsController;
	})();

	exports['default'] = UnitsController;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitJade = __webpack_require__(123);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitController = __webpack_require__(124);

	var _unitController2 = _interopRequireDefault(_unitController);

	var _basics = __webpack_require__(126);

	var _basics2 = _interopRequireDefault(_basics);

	var _topics = __webpack_require__(128);

	var _topics2 = _interopRequireDefault(_topics);

	var _tests = __webpack_require__(131);

	var _tests2 = _interopRequireDefault(_tests);

	exports['default'] = {
	  name: 'unit',
	  url: '/:unit',
	  template: _unitJade2['default'],
	  controller: _unitController2['default'],
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    unit: function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }
	  },
	  children: [_basics2['default'], _topics2['default'], _tests2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h3 ng-bind="unit.unit.title"></h3><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".basics">Grunddaten</a></li><li ui-sref-active="active"><a ui-sref=".topics">Subkapitel</a></li><li ui-sref-active="active"><a ui-sref=".tests">Testaufgaben</a></li></ul><div ui-view></div>'

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(121);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _fastJsonPatch = __webpack_require__(125);

	var _fastJsonPatch2 = _interopRequireDefault(_fastJsonPatch);

	/*@ngInject*/
	var UnitCtrl = (function () {
	  function UnitCtrl($scope, unit) {
	    var _this = this;

	    _classCallCheck(this, UnitCtrl);

	    this.unit = unit.plain();
	    this.patches = [];
	    this.message = null;
	    this.initRequires();
	    $scope.$watch('unit.unit', function (val, oldVal) {
	      _this.patches = _fastJsonPatch2['default'].compare(oldVal, val);
	      if (_this.patches.length === 0) {
	        return;
	      }
	      return unit.patch(_this.patches).then(function (data) {
	        _this.patches = [];
	        _this.error = false;
	      }, function (res) {
	        _this.error = true;
	        _this.recover = oldVal;
	      });
	    }, true);
	  }
	  UnitCtrl.$inject = ["$scope", "unit"];

	  _createClass(UnitCtrl, [{
	    key: 'initRequires',
	    value: function initRequires() {
	      var requires = {};
	      _lodash2['default'].each(this.unit.requires, function (r) {
	        requires[r] = true;
	      }, this);
	      this.requires = requires;
	    }
	  }, {
	    key: 'toggleRequires',
	    value: function toggleRequires(id) {
	      var includes = _lodash2['default'].includes(this.unit.requires, id);
	      if (this.requires[id] === includes) {
	        return;
	      }
	      if (this.requires[id] === true) {
	        this.unit.requires.push(id);
	      } else if (this.requires[id] === false) {
	        _lodash2['default'].pull(this.unit.requires, id);
	      }
	    }
	  }]);

	  return UnitCtrl;
	})();

	exports['default'] = UnitCtrl;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	* https://github.com/Starcounter-Jack/JSON-Patch
	* json-patch-duplex.js version: 0.5.2
	* (c) 2013 Joachim Wester
	* MIT license
	*/
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};

	var OriginalError = Error;

	var jsonpatch;
	(function (jsonpatch) {
	    /* Do nothing if module is already defined.
	    Doesn't look nice, as we cannot simply put
	    `!jsonpatch &&` before this immediate function call
	    in TypeScript.
	    */
	    if (jsonpatch.observe) {
	        return;
	    }

	    var _objectKeys = (function () {
	        if (Object.keys)
	            return Object.keys;

	        return function (o) {
	            var keys = [];
	            for (var i in o) {
	                if (o.hasOwnProperty(i)) {
	                    keys.push(i);
	                }
	            }
	            return keys;
	        };
	    })();

	    function _equals(a, b) {
	        switch (typeof a) {
	            case 'undefined':
	            case 'boolean':
	            case 'string':
	            case 'number':
	                return a === b;
	            case 'object':
	                if (a === null)
	                    return b === null;
	                if (_isArray(a)) {
	                    if (!_isArray(b) || a.length !== b.length)
	                        return false;

	                    for (var i = 0, l = a.length; i < l; i++)
	                        if (!_equals(a[i], b[i]))
	                            return false;

	                    return true;
	                }

	                var bKeys = _objectKeys(b);
	                var bLength = bKeys.length;
	                if (_objectKeys(a).length !== bLength)
	                    return false;

	                for (var i = 0; i < bLength; i++)
	                    if (!_equals(a[i], b[i]))
	                        return false;

	                return true;

	            default:
	                return false;
	        }
	    }

	    /* We use a Javascript hash to store each
	    function. Each hash entry (property) uses
	    the operation identifiers specified in rfc6902.
	    In this way, we can map each patch operation
	    to its dedicated function in efficient way.
	    */
	    /* The operations applicable to an object */
	    var objOps = {
	        add: function (obj, key) {
	            obj[key] = this.value;
	            return true;
	        },
	        remove: function (obj, key) {
	            delete obj[key];
	            return true;
	        },
	        replace: function (obj, key) {
	            obj[key] = this.value;
	            return true;
	        },
	        move: function (obj, key, tree) {
	            var temp = { op: "_get", path: this.from };
	            apply(tree, [temp]);
	            apply(tree, [
	                { op: "remove", path: this.from }
	            ]);
	            apply(tree, [
	                { op: "add", path: this.path, value: temp.value }
	            ]);
	            return true;
	        },
	        copy: function (obj, key, tree) {
	            var temp = { op: "_get", path: this.from };
	            apply(tree, [temp]);
	            apply(tree, [
	                { op: "add", path: this.path, value: temp.value }
	            ]);
	            return true;
	        },
	        test: function (obj, key) {
	            return _equals(obj[key], this.value);
	        },
	        _get: function (obj, key) {
	            this.value = obj[key];
	        }
	    };

	    /* The operations applicable to an array. Many are the same as for the object */
	    var arrOps = {
	        add: function (arr, i) {
	            arr.splice(i, 0, this.value);
	            return true;
	        },
	        remove: function (arr, i) {
	            arr.splice(i, 1);
	            return true;
	        },
	        replace: function (arr, i) {
	            arr[i] = this.value;
	            return true;
	        },
	        move: objOps.move,
	        copy: objOps.copy,
	        test: objOps.test,
	        _get: objOps._get
	    };

	    /* The operations applicable to object root. Many are the same as for the object */
	    var rootOps = {
	        add: function (obj) {
	            rootOps.remove.call(this, obj);
	            for (var key in this.value) {
	                if (this.value.hasOwnProperty(key)) {
	                    obj[key] = this.value[key];
	                }
	            }
	            return true;
	        },
	        remove: function (obj) {
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    objOps.remove.call(this, obj, key);
	                }
	            }
	            return true;
	        },
	        replace: function (obj) {
	            apply(obj, [
	                { op: "remove", path: this.path }
	            ]);
	            apply(obj, [
	                { op: "add", path: this.path, value: this.value }
	            ]);
	            return true;
	        },
	        move: objOps.move,
	        copy: objOps.copy,
	        test: function (obj) {
	            return (JSON.stringify(obj) === JSON.stringify(this.value));
	        },
	        _get: function (obj) {
	            this.value = obj;
	        }
	    };

	    var observeOps = {
	        add: function (patches, path) {
	            var patch = {
	                op: "add",
	                path: path + escapePathComponent(this.name),
	                value: this.object[this.name] };
	            patches.push(patch);
	        },
	        'delete': function (patches, path) {
	            var patch = {
	                op: "remove",
	                path: path + escapePathComponent(this.name)
	            };
	            patches.push(patch);
	        },
	        update: function (patches, path) {
	            var patch = {
	                op: "replace",
	                path: path + escapePathComponent(this.name),
	                value: this.object[this.name]
	            };
	            patches.push(patch);
	        }
	    };

	    function escapePathComponent(str) {
	        if (str.indexOf('/') === -1 && str.indexOf('~') === -1)
	            return str;
	        return str.replace(/~/g, '~0').replace(/\//g, '~1');
	    }

	    function _getPathRecursive(root, obj) {
	        var found;
	        for (var key in root) {
	            if (root.hasOwnProperty(key)) {
	                if (root[key] === obj) {
	                    return escapePathComponent(key) + '/';
	                } else if (typeof root[key] === 'object') {
	                    found = _getPathRecursive(root[key], obj);
	                    if (found != '') {
	                        return escapePathComponent(key) + '/' + found;
	                    }
	                }
	            }
	        }
	        return '';
	    }

	    function getPath(root, obj) {
	        if (root === obj) {
	            return '/';
	        }
	        var path = _getPathRecursive(root, obj);
	        if (path === '') {
	            throw new OriginalError("Object not found in root");
	        }
	        return '/' + path;
	    }

	    var beforeDict = [];

	    jsonpatch.intervals;

	    var Mirror = (function () {
	        function Mirror(obj) {
	            this.observers = [];
	            this.obj = obj;
	        }
	        return Mirror;
	    })();

	    var ObserverInfo = (function () {
	        function ObserverInfo(callback, observer) {
	            this.callback = callback;
	            this.observer = observer;
	        }
	        return ObserverInfo;
	    })();

	    function getMirror(obj) {
	        for (var i = 0, ilen = beforeDict.length; i < ilen; i++) {
	            if (beforeDict[i].obj === obj) {
	                return beforeDict[i];
	            }
	        }
	    }

	    function getObserverFromMirror(mirror, callback) {
	        for (var j = 0, jlen = mirror.observers.length; j < jlen; j++) {
	            if (mirror.observers[j].callback === callback) {
	                return mirror.observers[j].observer;
	            }
	        }
	    }

	    function removeObserverFromMirror(mirror, observer) {
	        for (var j = 0, jlen = mirror.observers.length; j < jlen; j++) {
	            if (mirror.observers[j].observer === observer) {
	                mirror.observers.splice(j, 1);
	                return;
	            }
	        }
	    }

	    function unobserve(root, observer) {
	        generate(observer);
	        if (Object.observe) {
	            _unobserve(observer, root);
	        } else {
	            clearTimeout(observer.next);
	        }

	        var mirror = getMirror(root);
	        removeObserverFromMirror(mirror, observer);
	    }
	    jsonpatch.unobserve = unobserve;

	    function deepClone(obj) {
	        if (typeof obj === "object") {
	            return JSON.parse(JSON.stringify(obj));
	        } else {
	            return obj;
	        }
	    }

	    function observe(obj, callback) {
	        var patches = [];
	        var root = obj;
	        var observer;
	        var mirror = getMirror(obj);

	        if (!mirror) {
	            mirror = new Mirror(obj);
	            beforeDict.push(mirror);
	        } else {
	            observer = getObserverFromMirror(mirror, callback);
	        }

	        if (observer) {
	            return observer;
	        }

	        if (Object.observe) {
	            observer = function (arr) {
	                //This "refresh" is needed to begin observing new object properties
	                _unobserve(observer, obj);
	                _observe(observer, obj);

	                var a = 0, alen = arr.length;
	                while (a < alen) {
	                    if (!(arr[a].name === 'length' && _isArray(arr[a].object)) && !(arr[a].name === '__Jasmine_been_here_before__')) {
	                        var type = arr[a].type;

	                        switch (type) {
	                            case 'new':
	                                type = 'add';
	                                break;

	                            case 'deleted':
	                                type = 'delete';
	                                break;

	                            case 'updated':
	                                type = 'update';
	                                break;
	                        }

	                        observeOps[type].call(arr[a], patches, getPath(root, arr[a].object));
	                    }
	                    a++;
	                }

	                if (patches) {
	                    if (callback) {
	                        callback(patches);
	                    }
	                }
	                observer.patches = patches;
	                patches = [];
	            };
	        } else {
	            observer = {};

	            mirror.value = deepClone(obj);

	            if (callback) {
	                //callbacks.push(callback); this has no purpose
	                observer.callback = callback;
	                observer.next = null;
	                var intervals = this.intervals || [100, 1000, 10000, 60000];
	                if (intervals.push === void 0) {
	                    throw new OriginalError("jsonpatch.intervals must be an array");
	                }
	                var currentInterval = 0;

	                var dirtyCheck = function () {
	                    generate(observer);
	                };
	                var fastCheck = function () {
	                    clearTimeout(observer.next);
	                    observer.next = setTimeout(function () {
	                        dirtyCheck();
	                        currentInterval = 0;
	                        observer.next = setTimeout(slowCheck, intervals[currentInterval++]);
	                    }, 0);
	                };
	                var slowCheck = function () {
	                    dirtyCheck();
	                    if (currentInterval == intervals.length)
	                        currentInterval = intervals.length - 1;
	                    observer.next = setTimeout(slowCheck, intervals[currentInterval++]);
	                };
	                if (typeof window !== 'undefined') {
	                    if (window.addEventListener) {
	                        window.addEventListener('mousedown', fastCheck);
	                        window.addEventListener('mouseup', fastCheck);
	                        window.addEventListener('keydown', fastCheck);
	                    } else {
	                        document.documentElement.attachEvent('onmousedown', fastCheck);
	                        document.documentElement.attachEvent('onmouseup', fastCheck);
	                        document.documentElement.attachEvent('onkeydown', fastCheck);
	                    }
	                }
	                observer.next = setTimeout(slowCheck, intervals[currentInterval++]);
	            }
	        }
	        observer.patches = patches;
	        observer.object = obj;

	        mirror.observers.push(new ObserverInfo(callback, observer));

	        return _observe(observer, obj);
	    }
	    jsonpatch.observe = observe;

	    /// Listen to changes on an object tree, accumulate patches
	    function _observe(observer, obj) {
	        if (Object.observe) {
	            Object.observe(obj, observer);
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    var v = obj[key];
	                    if (v && typeof (v) === "object") {
	                        _observe(observer, v);
	                    }
	                }
	            }
	        }
	        return observer;
	    }

	    function _unobserve(observer, obj) {
	        if (Object.observe) {
	            Object.unobserve(obj, observer);
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    var v = obj[key];
	                    if (v && typeof (v) === "object") {
	                        _unobserve(observer, v);
	                    }
	                }
	            }
	        }
	        return observer;
	    }

	    function generate(observer) {
	        if (Object.observe) {
	            Object.deliverChangeRecords(observer);
	        } else {
	            var mirror;
	            for (var i = 0, ilen = beforeDict.length; i < ilen; i++) {
	                if (beforeDict[i].obj === observer.object) {
	                    mirror = beforeDict[i];
	                    break;
	                }
	            }
	            _generate(mirror.value, observer.object, observer.patches, "");
	            if (observer.patches.length) {
	                apply(mirror.value, observer.patches);
	            }
	        }
	        var temp = observer.patches;
	        if (temp.length > 0) {
	            observer.patches = [];
	            if (observer.callback) {
	                observer.callback(temp);
	            }
	        }
	        return temp;
	    }
	    jsonpatch.generate = generate;

	    // Dirty check if obj is different from mirror, generate patches and update mirror
	    function _generate(mirror, obj, patches, path) {
	        var newKeys = _objectKeys(obj);
	        var oldKeys = _objectKeys(mirror);
	        var changed = false;
	        var deleted = false;

	        for (var t = oldKeys.length - 1; t >= 0; t--) {
	            var key = oldKeys[t];
	            var oldVal = mirror[key];
	            if (obj.hasOwnProperty(key)) {
	                var newVal = obj[key];
	                if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
	                    _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key));
	                } else {
	                    if (oldVal != newVal) {
	                        changed = true;
	                        patches.push({ op: "replace", path: path + "/" + escapePathComponent(key), value: deepClone(newVal) });
	                    }
	                }
	            } else {
	                patches.push({ op: "remove", path: path + "/" + escapePathComponent(key) });
	                deleted = true; // property has been deleted
	            }
	        }

	        if (!deleted && newKeys.length == oldKeys.length) {
	            return;
	        }

	        for (var t = 0; t < newKeys.length; t++) {
	            var key = newKeys[t];
	            if (!mirror.hasOwnProperty(key)) {
	                patches.push({ op: "add", path: path + "/" + escapePathComponent(key), value: deepClone(obj[key]) });
	            }
	        }
	    }

	    var _isArray;
	    if (Array.isArray) {
	        _isArray = Array.isArray;
	    } else {
	        _isArray = function (obj) {
	            return obj.push && typeof obj.length === 'number';
	        };
	    }

	    //3x faster than cached /^\d+$/.test(str)
	    function isInteger(str) {
	        var i = 0;
	        var len = str.length;
	        var charCode;
	        while (i < len) {
	            charCode = str.charCodeAt(i);
	            if (charCode >= 48 && charCode <= 57) {
	                i++;
	                continue;
	            }
	            return false;
	        }
	        return true;
	    }

	    /// Apply a json-patch operation on an object tree
	    function apply(tree, patches, validate) {
	        var result = false, p = 0, plen = patches.length, patch, key;
	        while (p < plen) {
	            patch = patches[p];
	            p++;

	            // Find the object
	            var keys = patch.path.split('/');
	            var obj = tree;
	            var t = 1;
	            var len = keys.length;
	            var existingPathFragment = undefined;

	            while (true) {
	                key = keys[t];

	                if (validate) {
	                    if (existingPathFragment === undefined) {
	                        if (obj[key] === undefined) {
	                            existingPathFragment = keys.slice(0, t).join('/');
	                        } else if (t == len - 1) {
	                            existingPathFragment = patch.path;
	                        }
	                        if (existingPathFragment !== undefined) {
	                            this.validator(patch, p - 1, tree, existingPathFragment);
	                        }
	                    }
	                }

	                t++;
	                if (key === undefined) {
	                    if (t >= len) {
	                        result = rootOps[patch.op].call(patch, obj, key, tree); // Apply patch
	                        break;
	                    }
	                }
	                if (_isArray(obj)) {
	                    if (key === '-') {
	                        key = obj.length;
	                    } else {
	                        if (validate && !isInteger(key)) {
	                            throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", p - 1, patch.path, patch);
	                        }
	                        key = parseInt(key, 10);
	                    }
	                    if (t >= len) {
	                        if (validate && patch.op === "add" && key > obj.length) {
	                            throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", p - 1, patch.path, patch);
	                        }
	                        result = arrOps[patch.op].call(patch, obj, key, tree); // Apply patch
	                        break;
	                    }
	                } else {
	                    if (key && key.indexOf('~') != -1)
	                        key = key.replace(/~1/g, '/').replace(/~0/g, '~'); // escape chars
	                    if (t >= len) {
	                        result = objOps[patch.op].call(patch, obj, key, tree); // Apply patch
	                        break;
	                    }
	                }
	                obj = obj[key];
	            }
	        }
	        return result;
	    }
	    jsonpatch.apply = apply;

	    function compare(tree1, tree2) {
	        var patches = [];
	        _generate(tree1, tree2, patches, '');
	        return patches;
	    }
	    jsonpatch.compare = compare;

	    var JsonPatchError = (function (_super) {
	        __extends(JsonPatchError, _super);
	        function JsonPatchError(message, name, index, operation, tree) {
	            _super.call(this, message);
	            this.message = message;
	            this.name = name;
	            this.index = index;
	            this.operation = operation;
	            this.tree = tree;
	        }
	        return JsonPatchError;
	    })(OriginalError);
	    jsonpatch.JsonPatchError = JsonPatchError;

	    jsonpatch.Error = JsonPatchError;

	    /**
	    * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
	    * @param {object} operation - operation object (patch)
	    * @param {number} index - index of operation in the sequence
	    * @param {object} [tree] - object where the operation is supposed to be applied
	    * @param {string} [existingPathFragment] - comes along with `tree`
	    */
	    function validator(operation, index, tree, existingPathFragment) {
	        if (typeof operation !== 'object' || operation === null || _isArray(operation)) {
	            throw new JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, tree);
	        } else if (!objOps[operation.op]) {
	            throw new JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, tree);
	        } else if (typeof operation.path !== 'string') {
	            throw new JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, tree);
	        } else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
	            throw new JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, tree);
	        } else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
	            throw new JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, tree);
	        } else if (tree) {
	            if (operation.op == "add") {
	                var pathLen = operation.path.split("/").length;
	                var existingPathLen = existingPathFragment.split("/").length;
	                if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
	                    throw new JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, tree);
	                }
	            } else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
	                if (operation.path !== existingPathFragment) {
	                    throw new JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, tree);
	                }
	            } else if (operation.op === 'move' || operation.op === 'copy') {
	                var existingValue = { op: "_get", path: operation.from, value: undefined };
	                var error = jsonpatch.validate([existingValue], tree);
	                if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
	                    throw new JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, tree);
	                }
	            }
	        }
	    }
	    jsonpatch.validator = validator;

	    /**
	    * Validates a sequence of operations. If `tree` parameter is provided, the sequence is additionally validated against the object tree.
	    * If error is encountered, returns a JsonPatchError object
	    * @param sequence
	    * @param tree
	    * @returns {JsonPatchError|undefined}
	    */
	    function validate(sequence, tree) {
	        try  {
	            if (!_isArray(sequence)) {
	                throw new JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
	            }

	            if (tree) {
	                tree = JSON.parse(JSON.stringify(tree)); //clone tree so that we can safely try applying operations
	                apply.call(this, tree, sequence, true);
	            } else {
	                for (var i = 0; i < sequence.length; i++) {
	                    this.validator(sequence[i], i);
	                }
	            }
	        } catch (e) {
	            if (e instanceof JsonPatchError) {
	                return e;
	            } else {
	                throw e;
	            }
	        }
	    }
	    jsonpatch.validate = validate;
	})(jsonpatch || (jsonpatch = {}));

	if (true) {
	    exports.apply = jsonpatch.apply;
	    exports.observe = jsonpatch.observe;
	    exports.unobserve = jsonpatch.unobserve;
	    exports.generate = jsonpatch.generate;
	    exports.compare = jsonpatch.compare;
	    exports.validate = jsonpatch.validate;
	    exports.validator = jsonpatch.validator;
	    exports.JsonPatchError = jsonpatch.JsonPatchError;
	    exports.Error = jsonpatch.Error;
	}


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _basicsJade = __webpack_require__(127);

	var _basicsJade2 = _interopRequireDefault(_basicsJade);

	exports['default'] = {
	  name: 'basics',
	  url: '',
	  template: _basicsJade2['default'],
	  ncyBreadcrumb: { label: '{{unit.unit.title}} — Grunddaten' }
	};
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<form novalidate name="basicsForm" class="form-horizontal"><div class="form-group"><label class="col-xs-2 control-label">ID</label><div class="col-xs-10"><p ng-bind="unit.unit._id" class="static-control"></p></div></div><div data-ng-class="{\'has-success\': undefined.title.$valid, \'has-error\': undefined.title.$invalid&&undefined.title.$touched}" class="form-group"><label for="title-input" class="col-xs-2 control-label">Titel (Pflichtfeld)</label><div class="col-xs-10"><input type="text" name="title" id="title-input" class="form-control" ng-model="unit.unit.title" ng-model-options="main.ngModelOptions"></div></div><div data-ng-class="{\'has-success\': undefined.subtitle.$valid, \'has-error\': undefined.subtitle.$invalid&&undefined.subtitle.$touched}" class="form-group"><label for="subtitle-input" class="col-xs-2 control-label">Untertitel</label><div class="col-xs-10"><input type="text" name="subtitle" id="subtitle-input" class="form-control" ng-model="unit.unit.subtitle" ng-model-options="main.ngModelOptions"></div></div><div class="form-group"><div class="col-xs-2">Voraussetzungen</div><div class="col-xs-10"><div ng-repeat="item in units.units | filter : {_id: \'!\'+unit.unit._id}" class="checkbox"><label><input type="checkbox" name="requires" ng-model="unit.requires[item._id]" ng-change="unit.toggleRequires(item._id)" ng-model-options="main.ngModelOptions">{{item.title}}</label></div></div></div><div class="form-group"><marked input="unit.unit.description" label="Beschreibungstext (Pflichtfeld)"></marked></div></form><div ng-if="unit.patches.length===0" role="alert" class="alert alert-success">alles hochgeladen</div><div ng-if="unit.patches.length&gt;0" role="alert" class="alert alert-info">lade \xC4nderungen hoch</div><div ng-if="unit.error" role="alert" class="alert alert-danger"><button type="button" ng-click="unit.unit=unit.recover">r\xFCckg\xE4ngig</button><span>Fehler beim Hochladen</span></div>'

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicsJade = __webpack_require__(129);

	var _topicsJade2 = _interopRequireDefault(_topicsJade);

	var _topicsController = __webpack_require__(130);

	var _topicsController2 = _interopRequireDefault(_topicsController);

	exports['default'] = {
	  name: 'topics',
	  url: '/topics',
	  template: _topicsJade2['default'],
	  controller: _topicsController2['default'],
	  controllerAs: 'topics',
	  ncyBreadcrumb: { label: '{{unit.unit.title}} — Subkapitel' },
	  resolve: {
	    topics: function topics(Restangular, $stateParams) {
	      var query = { projections: 'topics.title topics._id' };
	      return Restangular.one('units', $stateParams.unit).all('topics').getList(query);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<button type="button" ng-click="topics.collapse=!topics.collapse" ng-bind="topics.collapse ? \'Subkapitel\xFCbersicht einblenden\' : \'Subkapitel\xFCbersicht ausblenden\'" class="btn btn-default"></button><div collapse="topics.collapse"><form novalidate name="topicsForm" class="form-horizontal"><div class="form-group"><label for="selectTopic" class="col-xs-2 control-label">Subkapitel</label><div class="col-xs-10"><select id="selectTopic" ng-options="t.title for t in topics.topics track by t._id" ng-model="topics.selected" class="form-control"></select></div></div><div ng-if="topics.selected" class="form-group"><label class="col-xs-2">Funktionen</label><div class="col-xs-10"><div class="button-group"><button type="button" ng-click="topics.moveUp()">hoch</button><button type="button" ng-click="topics.moveDown()">runter</button><a ui-sref=".topic.basics({topic: topics.selected._id})">bearbeiten</a><button type="button" ng-click="topics.remove()">l\xF6schen</button></div></div></div></form></div><ui-view></ui-view><h3>Neues Subkapitel anlegen</h3><form novalidate name="newForm" ng-submit="topics.save()" class="form-horizontal"><div data-ng-class="{\'has-success\': undefined.title.$valid, \'has-error\': undefined.title.$invalid&&undefined.title.$touched}" class="form-group"><label for="title-input" class="col-xs-2 control-label">Titel</label><div class="col-xs-10"><input type="text" name="title" id="title-input" class="form-control" ng-model="topics.new.title"></div></div><div data-ng-class="{\'has-success\': undefined.subtitle.$valid, \'has-error\': undefined.subtitle.$invalid&&undefined.subtitle.$touched}" class="form-group"><label for="subtitle-input" class="col-xs-2 control-label">Untertitel</label><div class="col-xs-10"><input type="text" name="subtitle" id="subtitle-input" class="form-control" ng-model="topics.new.subtitle"></div></div><marked input="topics.new.body" label="Inhalt"></marked><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="submit" value="erstellen"></div></div></form>'

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(121);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var TopicsCtrl = (function () {
	  function TopicsCtrl(topics) {
	    _classCallCheck(this, TopicsCtrl);

	    this.topics = topics;
	    this['new'] = {};
	    this.selected = null;
	  }
	  TopicsCtrl.$inject = ["topics"];

	  _createClass(TopicsCtrl, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      this.topics.post(this['new']).then(function (topics) {
	        _this.topics = topics;
	        _this['new'] = {};
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this2 = this;

	      if (!this.selected) {
	        return;
	      }
	      this.selected.remove().then(function () {
	        _lodash2['default'].remove(_this2.topics, { _id: _this2.selected._id });
	        _this2.selected = null;
	      });
	    }
	  }, {
	    key: 'moveUp',
	    value: function moveUp() {
	      var _this3 = this;

	      this.selected.moveUp().then(function (topics) {
	        _this3.topics = topics;
	      });
	    }
	  }, {
	    key: 'moveDown',
	    value: function moveDown() {
	      var _this4 = this;

	      this.selected.moveDown().then(function (topics) {
	        _this4.topics = topics;
	      });
	    }
	  }]);

	  return TopicsCtrl;
	})();

	exports['default'] = TopicsCtrl;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _testsJade = __webpack_require__(132);

	var _testsJade2 = _interopRequireDefault(_testsJade);

	exports['default'] = {
	  name: 'tests',
	  url: '/tests',
	  template: _testsJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<h3>Testaufgaben</h3>'

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  name: 'vega',
	  url: '/vega'
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _userInterceptor = __webpack_require__(135);

	var _userInterceptor2 = _interopRequireDefault(_userInterceptor);

	var _userModel = __webpack_require__(136);

	var _userModel2 = _interopRequireDefault(_userModel);

	var _userCheckValidator = __webpack_require__(137);

	var _userCheckValidator2 = _interopRequireDefault(_userCheckValidator);

	exports['default'] = {
	  interceptor: _userInterceptor2['default'],
	  model: _userModel2['default'],
	  validator: _userCheckValidator2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = userInterceptor;
	/*@ngInject*/
	function userInterceptor($localStorage) {
	  var factory = {};
	  factory.request = function (config) {
	    if (config.headers.authorization) {
	      return config;
	    }
	    if ($localStorage.token) {
	      config.headers.authorization = "bearer " + $localStorage.token;
	    }
	    return config;
	  };
	  return factory;
	}
	userInterceptor.$inject = ["$localStorage"];

	module.exports = exports["default"];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var user = (function () {
	  function user(Restangular, $localStorage, $window, $q) {
	    _classCallCheck(this, user);

	    this.Users = Restangular.all('users');
	    this.Token = Restangular.one('tokens', 'new');
	    this.$storage = $localStorage;
	    this.$q = $q;
	    this.$window = $window;
	    this.data = null;
	    this.init();
	  }
	  user.$inject = ["Restangular", "$localStorage", "$window", "$q"];

	  _createClass(user, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      if (this.authenticated) {
	        return this.Users.get(this.$storage._id).then(function (data) {
	          _this.data = data;
	          return data;
	        });
	      } else {
	        this.inauthenticate();
	      }
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(name, pass) {
	      var _this2 = this;

	      return this.$q(function (resolve, reject) {
	        if (!name || !pass) {
	          return reject('missing credentials');
	        }
	        var str = _this2.$window.btoa(name + ':' + pass);
	        var authorization = 'basic ' + str;
	        return resolve(_this2.Token.get(null, { authorization: authorization }));
	      }).then(function (data) {
	        _this2.authenticated = data;
	        return data;
	      });
	    }
	  }, {
	    key: 'inauthenticate',
	    value: function inauthenticate() {
	      this.$storage.$reset();
	      this.data = null;
	    }
	  }, {
	    key: 'create',
	    value: function create(form) {
	      var _this3 = this;

	      return this.Users.post(form).then(function (data) {
	        _this3.data = data;
	        return _this3.authenticate(form.email, form.password);
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this4 = this;

	      return this.data.remove().then(function () {
	        return _this4.inauthenticate();
	      });
	    }
	  }, {
	    key: 'authenticated',
	    get: function () {
	      return this.$storage._id && this.$storage.token ? true : false;
	    },
	    set: function (data) {
	      this.$storage.token = data.token;
	      this.$storage._id = data._id;
	    }
	  }]);

	  return user;
	})();

	exports['default'] = user;
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = userCheckValidator;

	function userCheckValidator($q, Restangular) {
	  function link(scope, el, attrs, c) {
	    c.$asyncValidators.userCheck = function (value) {
	      var query = {};
	      query[attrs.name] = value;
	      var promise = Restangular.all('users').head(query);
	      switch (attrs.userCheck) {
	        case 'available':
	          return promise.then(function () {
	            return $q.reject('exists');
	          }, function () {
	            return true;
	          });
	        case 'exists':
	          return promise;
	      }
	    };
	  }
	  return {
	    require: 'ngModel',
	    restrict: 'A',
	    link: link
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _login2 = __webpack_require__(19);

	var _login3 = _interopRequireDefault(_login2);

	var _fsk2 = __webpack_require__(139);

	var _fsk3 = _interopRequireDefault(_fsk2);

	var _akzeptanz2 = __webpack_require__(142);

	var _akzeptanz3 = _interopRequireDefault(_akzeptanz2);

	/*@ngInject*/
	var modals = (function () {
	  function modals($modal) {
	    _classCallCheck(this, modals);

	    this.$modal = $modal;
	  }
	  modals.$inject = ["$modal"];

	  _createClass(modals, [{
	    key: 'login',
	    value: function login() {
	      var modalInstance = this.$modal.open(_login3['default']);
	      modalInstance.result.then(null, function (res) {
	        console.log(res);
	      });
	    }
	  }, {
	    key: 'fsk',
	    value: function fsk() {
	      return this.$modal.open(_fsk3['default']);
	    }
	  }, {
	    key: 'akzeptanz',
	    value: function akzeptanz() {
	      return this.$modal.open(_akzeptanz3['default']);
	    }
	  }]);

	  return modals;
	})();

	exports['default'] = modals;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fskJade = __webpack_require__(140);

	var _fskJade2 = _interopRequireDefault(_fskJade);

	var _fskControllerJs = __webpack_require__(141);

	var _fskControllerJs2 = _interopRequireDefault(_fskControllerJs);

	exports['default'] = {
	  template: _fskJade2['default'],
	  controller: _fskControllerJs2['default'],
	  controllerAs: 'fsk',
	  size: 'lg'
	};
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<div class="modal-header"><h3>Selbsteinsch\xE4tzung deiner Statistikkenntnisse</h3></div><div class="modal-body"><form name="sesskoForm" novalidate data-ng-if="fsk.user.data.fsk.length===0"><div class="form-group"><p><strong>Ich bin f\xFCr Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> nicht begabt</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> sehr begabt</label></div><div class="form-group"><p><strong>Neues zu lernen in Statistik, f\xE4llt mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leicht</label></div><div class="form-group"><p><strong>Ich bin in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> nicht intelligent</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> sehr inntelligent</label></div><div class="form-group"><p><strong>Meine statistikbezogenen F\xE4higkeiten sind \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> niedrig</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> hoch</label></div><div class="form-group"><p><strong>Statistische Aufgaben fallen mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leicht</label></div></form><form novalidate name="sesskoForm2" data-ng-if="fsk.user.data.fsk.length&gt;0"><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine Begabung f\xFCr Statistik jetzt f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> geringer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> h\xF6her als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs f\xE4llt mir das Lernen von neuen statistischen Inhalten jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> schlechter zurecht als zuvor</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> besser zurecht als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs bin ich jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> schlechter in Statistik als zuvor</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> besser in Statistik als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen F\xE4higkeiten f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="1" data-ng-model="fsk.sessko[5]"> niedriger als zuvor</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'2\' data-ng-model="fsk.sessko[5]"> 2</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'3\' data-ng-model="fsk.sessko[5]"> 3</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'4\' data-ng-model="fsk.sessko[5]"> 4</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'5\' data-ng-model="fsk.sessko[5]"> 5</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="6" data-ng-model="fsk.sessko[5]"> h\xF6her als zuvor</label></div></form></div><div class="modal-footer"><input type="button" data-ng-click="fsk.cancel()" value="Abbrechen" class="btn btn-default"><input type="button" data-ng-click="fsk.ok()" value="Abschicken" class="btn btn-primary"></div>'

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var FskCtrl = (function () {
	  function FskCtrl(Restangular, $modalInstance) {
	    _classCallCheck(this, FskCtrl);

	    this.$modalInstance = $modalInstance;
	    this.sessko = [];
	  }

	  _createClass(FskCtrl, [{
	    key: 'ok',
	    value: function ok() {
	      return this.Restangular.all('fsk').post(this.sessko).then(this.$modalInstance.close);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      return this.$modalInstance.dismiss();
	    }
	  }]);

	  return FskCtrl;
	})();

	exports['default'] = FskCtrl;
	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _akzeptanzJade = __webpack_require__(143);

	var _akzeptanzJade2 = _interopRequireDefault(_akzeptanzJade);

	var _akzeptanzControllerJs = __webpack_require__(144);

	var _akzeptanzControllerJs2 = _interopRequireDefault(_akzeptanzControllerJs);

	exports['default'] = {
	  template: _akzeptanzJade2['default'],
	  controller: _akzeptanzControllerJs2['default'],
	  controllerAs: 'akzeptanz',
	  animation: false,
	  resolve: {
	    summary: /*@ngInject*/["UnitModel", function summary(UnitModel) {
	      return UnitModel.akzeptanz();
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports='<div class="modal-header"><h3 class="modal-title">Kapitel bewerten</h3></div><div class="modal-body"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft \xE4ndern.</p><form name="ratingForm" novalidate class="form-horizontal"><div class="form-group"><label id="rating-motivation" class="col-xs-8">Die Bearbeitung dieses Kapitels war f\xFCr mich sehr motivierend, weiterzumachen viel mir leicht.</label><div class="col-xs-4"><rating aria-labelledby="rating-motivation" data-ng-model="akzeptanz.summary.motivation" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'motivation\',akzeptanz.summary.motivation)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.motivation]}}"></rating></div></div><div class="form-group"><label id="rating-success" class="col-xs-8">Ich habe das Gef\xFChl, einiges \xFCber das thema dazugelernt zu haben.</label><div class="col-xs-4"><rating aria-labelledby="rating-success" data-ng-model="akzeptanz.summary.success" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'success\',akzeptanz.summary.success)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.success]}}"></rating></div></div><div class="form-group"><label id="rating-usability" class="col-xs-8">Die Webseite l\xE4sst sich gut bedienen und es ist klar, was ich als n\xE4chstes tun soll.</label><div class="col-xs-4"><rating aria-labelledby="rating-usability" data-ng-model="akzeptanz.summary.usability" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'usability\',akzeptanz.summary.usability)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.usability]}}"></rating></div></div><div class="form-group"><label for="comment-input" class="control-label">Kommentar</label><textarea id="comment-input" name="comment" data-ng-model="akzeptanz.summary.comment" placeholder="Erg\xE4nzungen, Kritik oder Anmerkungen, die du noch loswerden m\xF6chtest" class="form-control"></textarea></div></form></div><div class="modal-footer"><button type="button" data-ng-click="akzeptanz.cancel()" class="btn btn-default">abbrechen</button><button type="button" data-ng-click="akzeptanz.ok()" class="btn btn-primary">Kommentar abschicken</button></div>'

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AkzeptanzCtrl = (function () {
	  function AkzeptanzCtrl($modalInstance, UnitModel, summary) {
	    _classCallCheck(this, AkzeptanzCtrl);

	    this.UnitModel = UnitModel;
	    this.$modalInstance = $modalInstance;
	    this.summary = summary;
	    this.labels = ["keine Antwort", "stimme nicht zu", "stimme weniger zu", "stimme teilweise zu", "stimme eher zu", "stimme zu"];
	  }

	  _createClass(AkzeptanzCtrl, [{
	    key: "ok",
	    value: function ok() {
	      return this.UnitModel.comment(this.summary.comment).then(this.$modalInstance.close);
	    }
	  }, {
	    key: "cancel",
	    value: function cancel() {
	      return this.$modalInstance.dismiss("cancel");
	    }
	  }]);

	  return AkzeptanzCtrl;
	})();

	exports["default"] = AkzeptanzCtrl;
	module.exports = exports["default"];

/***/ }
/******/ ]);