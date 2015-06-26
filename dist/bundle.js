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

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(7);

	__webpack_require__(8);

	var _apiCheck = __webpack_require__(10);

	var _apiCheck2 = _interopRequireDefault(_apiCheck);

	var _angularFormly = __webpack_require__(11);

	var _angularFormly2 = _interopRequireDefault(_angularFormly);

	var _angularFormlyTemplatesBootstrap = __webpack_require__(12);

	var _angularFormlyTemplatesBootstrap2 = _interopRequireDefault(_angularFormlyTemplatesBootstrap);

	__webpack_require__(13);

	// config

	var _configJs = __webpack_require__(14);

	// user

	var _user = __webpack_require__(156);

	var user = _interopRequireWildcard(_user);

	// modals

	var _modals = __webpack_require__(160);

	var _modals2 = _interopRequireDefault(_modals);

	_apiCheck2['default'].globalConfig.disabled = true;
	exports['default'] = _angular2['default'].module('wbt', ['restangular', 'ui.router', 'ui.router.stateHelper', 'ui.bootstrap', 'ngMessages', 'ngAria', 'ngAnimate', 'ngSanitize', 'ngStorage', 'oc.lazyLoad', _angularFormly2['default'], _angularFormlyTemplatesBootstrap2['default'], 'permission']).config(_configJs.config).run(_configJs.run).factory('userInterceptor', user.interceptor).service('user', user.model).directive('userCheck', user.validator).service('modals', _modals2['default']).name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Re-add the saved hash before we start returning things
	        if (hash) toParams['#'] = hash;

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
	                 'xlink:href' : 'href';
	      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : hrefKind, nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$addStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var states = [], activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        var state = $state.get(newState, stateContext($element));

	        states.push({
	          state: state || { name: newState },
	          params: newParams
	        });

	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (anyMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function anyMatch() {
	        for (var i = 0; i < states.length; i++) {
	          if (isMatch(states[i].state, states[i].params)) {
	            return true;
	          }
	        }
	        return false;
	      }

	      function isMatch(state, params) {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return $state.is(state.name, params);
	        } else {
	          return $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * A helper module for AngularUI Router, which allows you to define your states as an object tree.
	 * @author Mark Lagendijk <mark@lagendijk.info>
	 * @license MIT
	 */
	angular.module('ui.router.stateHelper', [ 'ui.router' ])
	    .provider('stateHelper', ["$stateProvider", function($stateProvider){
	        var self = this;

	        /**
	         * Recursively sets the states using $stateProvider.state.
	         * Child states are defined via a `children` property.
	         *
	         * 1. Recursively calls itself for all descendant states, by traversing the `children` properties.
	         * 2. Converts all the state names to dot notation, of the form `grandfather.father.state`.
	         * 3. Sets `parent` property of the descendant states.
	         *
	         * @param {Object} state - A regular ui.router state object.
	         * @param {Array} [state.children] - An optional array of child states.
	         * @deprecated {Boolean} keepOriginalNames - An optional flag that prevents conversion 
	         *     of names to dot notation if true. (use options.keepOriginalNames instead)
	         * @param {Object} [options] - An optional options object.
	         * @param {Boolean} [options.keepOriginalNames=false] An optional flag that 
	         *     prevents conversion of names to dot notation if true.
	         * @param {Boolean} [options.siblingTraversal=false] An optional flag that 
	         *     adds `nextSibling` and `previousSibling` properties when enabled
	         */
	        this.state = function(state){
	            var args = Array.prototype.slice.apply(arguments);
	            var options = {
	                keepOriginalNames: false,
	                siblingTraversal: false
	            };  

	            if (typeof args[1] === 'boolean') {
	                options.keepOriginalNames = args[1];
	            } 
	            else if (typeof args[1] === 'object') {
	                angular.extend(options, args[1]);
	            }

	            if (!options.keepOriginalNames) {
	                fixStateName(state);
	            }

	            $stateProvider.state(state);

	            if(state.children && state.children.length){
	                state.children.forEach(function(childState){
	                    childState.parent = state;
	                    self.state(childState, options);
	                });

	                if (options.siblingTraversal) {
	                    addSiblings(state);
	                }
	            }

	            return self;
	        };

	        this.setNestedState = this.state;

	        self.$get = angular.noop;

	        /**
	         * Converts the name of a state to dot notation, of the form `grandfather.father.state`.
	         * @param state
	         */
	        function fixStateName(state){
	            if(state.parent){
	                state.name = (angular.isObject(state.parent) ? state.parent.name : state.parent) + '.' + state.name;
	            }
	        }

	        function addSiblings(state) {
	            state.children.forEach(function (childState, idx, array) {
	                if (array[idx + 1]) {
	                    childState.nextSibling = array[idx + 1].name;
	                }
	                if (array[idx - 1]) {
	                    childState.previousSibling = array[idx - 1].name;
	                }
	            });
	        }
	    }]);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5)(__webpack_require__(6))

/***/ },
/* 5 */
/***/ function(module, exports) {

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
/* 6 */
/***/ function(module, exports) {

	module.exports = "/*\n * angular-ui-bootstrap\n * http://angular-ui.github.io/bootstrap/\n\n * Version: 0.13.0 - 2015-05-02\n * License: MIT\n */\nangular.module(\"ui.bootstrap\",[\"ui.bootstrap.tpls\",\"ui.bootstrap.collapse\",\"ui.bootstrap.accordion\",\"ui.bootstrap.alert\",\"ui.bootstrap.bindHtml\",\"ui.bootstrap.buttons\",\"ui.bootstrap.carousel\",\"ui.bootstrap.dateparser\",\"ui.bootstrap.position\",\"ui.bootstrap.datepicker\",\"ui.bootstrap.dropdown\",\"ui.bootstrap.modal\",\"ui.bootstrap.pagination\",\"ui.bootstrap.tooltip\",\"ui.bootstrap.popover\",\"ui.bootstrap.progressbar\",\"ui.bootstrap.rating\",\"ui.bootstrap.tabs\",\"ui.bootstrap.timepicker\",\"ui.bootstrap.transition\",\"ui.bootstrap.typeahead\"]),angular.module(\"ui.bootstrap.tpls\",[\"template/accordion/accordion-group.html\",\"template/accordion/accordion.html\",\"template/alert/alert.html\",\"template/carousel/carousel.html\",\"template/carousel/slide.html\",\"template/datepicker/datepicker.html\",\"template/datepicker/day.html\",\"template/datepicker/month.html\",\"template/datepicker/popup.html\",\"template/datepicker/year.html\",\"template/modal/backdrop.html\",\"template/modal/window.html\",\"template/pagination/pager.html\",\"template/pagination/pagination.html\",\"template/tooltip/tooltip-html-popup.html\",\"template/tooltip/tooltip-html-unsafe-popup.html\",\"template/tooltip/tooltip-popup.html\",\"template/tooltip/tooltip-template-popup.html\",\"template/popover/popover-template.html\",\"template/popover/popover.html\",\"template/progressbar/bar.html\",\"template/progressbar/progress.html\",\"template/progressbar/progressbar.html\",\"template/rating/rating.html\",\"template/tabs/tab.html\",\"template/tabs/tabset.html\",\"template/timepicker/timepicker.html\",\"template/typeahead/typeahead-match.html\",\"template/typeahead/typeahead-popup.html\"]),angular.module(\"ui.bootstrap.collapse\",[]).directive(\"collapse\",[\"$animate\",function(a){return{link:function(b,c,d){function e(){c.removeClass(\"collapse\").addClass(\"collapsing\"),a.addClass(c,\"in\",{to:{height:c[0].scrollHeight+\"px\"}}).then(f)}function f(){c.removeClass(\"collapsing\"),c.css({height:\"auto\"})}function g(){c.css({height:c[0].scrollHeight+\"px\"}).removeClass(\"collapse\").addClass(\"collapsing\"),a.removeClass(c,\"in\",{to:{height:\"0\"}}).then(h)}function h(){c.css({height:\"0\"}),c.removeClass(\"collapsing\"),c.addClass(\"collapse\")}b.$watch(d.collapse,function(a){a?g():e()})}}}]),angular.module(\"ui.bootstrap.accordion\",[\"ui.bootstrap.collapse\"]).constant(\"accordionConfig\",{closeOthers:!0}).controller(\"AccordionController\",[\"$scope\",\"$attrs\",\"accordionConfig\",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on(\"$destroy\",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive(\"accordion\",function(){return{restrict:\"EA\",controller:\"AccordionController\",transclude:!0,replace:!1,templateUrl:\"template/accordion/accordion.html\"}}).directive(\"accordionGroup\",function(){return{require:\"^accordion\",restrict:\"EA\",transclude:!0,replace:!0,templateUrl:\"template/accordion/accordion-group.html\",scope:{heading:\"@\",isOpen:\"=?\",isDisabled:\"=?\"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch(\"isOpen\",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive(\"accordionHeading\",function(){return{restrict:\"EA\",transclude:!0,template:\"\",replace:!0,require:\"^accordionGroup\",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive(\"accordionTransclude\",function(){return{require:\"^accordionGroup\",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(\"\"),b.append(a))})}}}),angular.module(\"ui.bootstrap.alert\",[]).controller(\"AlertController\",[\"$scope\",\"$attrs\",function(a,b){a.closeable=\"close\"in b,this.close=a.close}]).directive(\"alert\",function(){return{restrict:\"EA\",controller:\"AlertController\",templateUrl:\"template/alert/alert.html\",transclude:!0,replace:!0,scope:{type:\"@\",close:\"&\"}}}).directive(\"dismissOnTimeout\",[\"$timeout\",function(a){return{require:\"alert\",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module(\"ui.bootstrap.bindHtml\",[]).directive(\"bindHtmlUnsafe\",function(){return function(a,b,c){b.addClass(\"ng-binding\").data(\"$binding\",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||\"\")})}}),angular.module(\"ui.bootstrap.buttons\",[]).constant(\"buttonConfig\",{activeClass:\"active\",toggleEvent:\"click\"}).controller(\"ButtonsController\",[\"buttonConfig\",function(a){this.activeClass=a.activeClass||\"active\",this.toggleEvent=a.toggleEvent||\"click\"}]).directive(\"btnRadio\",function(){return{require:[\"btnRadio\",\"ngModel\"],controller:\"ButtonsController\",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive(\"btnCheckbox\",function(){return{require:[\"btnCheckbox\",\"ngModel\"],controller:\"ButtonsController\",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module(\"ui.bootstrap.carousel\",[]).controller(\"CarouselController\",[\"$scope\",\"$interval\",\"$animate\",function(a,b,c){function d(a){if(angular.isUndefined(k[a].index))return k[a];{var b;k.length}for(b=0;b<k.length;++b)if(k[b].index==a)return k[b]}function e(){f();var c=+a.interval;!isNaN(c)&&c>0&&(h=b(g,c))}function f(){h&&(b.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(b,d){function f(){m||(angular.extend(b,{direction:d,active:!0}),angular.extend(j.currentSlide||{},{direction:d,active:!1}),c.enabled()&&!a.noTransition&&b.$element&&(a.$currentTransition=!0,b.$element.one(\"$animate:close\",function(){a.$currentTransition=null})),j.currentSlide=b,l=g,e())}var g=j.indexOfSlide(b);void 0===d&&(d=g>j.getCurrentIndex()?\"next\":\"prev\"),b&&b!==j.currentSlide&&f()},a.$on(\"$destroy\",function(){m=!0}),j.getCurrentIndex=function(){return j.currentSlide&&angular.isDefined(j.currentSlide.index)?+j.currentSlide.index:l},j.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:k.indexOf(a)},a.next=function(){var b=(j.getCurrentIndex()+1)%k.length;return a.$currentTransition?void 0:j.select(d(b),\"next\")},a.prev=function(){var b=j.getCurrentIndex()-1<0?k.length-1:j.getCurrentIndex()-1;return a.$currentTransition?void 0:j.select(d(b),\"prev\")},a.isActive=function(a){return j.currentSlide===a},a.$watch(\"interval\",e),a.$on(\"$destroy\",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){angular.isDefined(a.index)&&k.sort(function(a,b){return+a.index>+b.index});var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive(\"carousel\",[function(){return{restrict:\"EA\",transclude:!0,replace:!0,controller:\"CarouselController\",require:\"carousel\",templateUrl:\"template/carousel/carousel.html\",scope:{interval:\"=\",noTransition:\"=\",noPause:\"=\"}}}]).directive(\"slide\",function(){return{require:\"^carousel\",restrict:\"EA\",transclude:!0,replace:!0,templateUrl:\"template/carousel/slide.html\",scope:{active:\"=?\",index:\"=?\"},link:function(a,b,c,d){d.addSlide(a,b),a.$on(\"$destroy\",function(){d.removeSlide(a)}),a.$watch(\"active\",function(b){b&&d.select(a)})}}}).animation(\".item\",[\"$animate\",function(a){return{beforeAddClass:function(b,c,d){if(\"active\"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g=\"next\"==f?\"left\":\"right\";return b.addClass(f),a.addClass(b,g).then(function(){e||b.removeClass(g+\" \"+f),d()}),function(){e=!0}}d()},beforeRemoveClass:function(b,c,d){if(\"active\"==c&&b.parent()&&!b.parent().scope().noTransition){var e=!1,f=b.isolateScope().direction,g=\"next\"==f?\"left\":\"right\";return a.addClass(b,g).then(function(){e||b.removeClass(g),d()}),function(){e=!0}}d()}}}]),angular.module(\"ui.bootstrap.dateparser\",[]).service(\"dateParser\",[\"$locale\",\"orderByFilter\",function(a,b){function c(a){var c=[],d=a.split(\"\");return angular.forEach(f,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(\"\"),d[f]=\"(\"+b.regex+\")\",a[f]=\"$\";for(var g=f+1,h=f+e.length;h>g;g++)d[g]=\"\",a[g]=\"$\";a=a.join(\"\"),c.push({index:f,apply:b.apply})}}),{regex:new RegExp(\"^\"+d.join(\"\")+\"$\"),map:b(c,\"index\")}}function d(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var e=/[\\\\\\^\\$\\*\\+\\?\\|\\[\\]\\(\\)\\.\\{\\}]/g;this.parsers={};var f={yyyy:{regex:\"\\\\d{4}\",apply:function(a){this.year=+a}},yy:{regex:\"\\\\d{2}\",apply:function(a){this.year=+a+2e3}},y:{regex:\"\\\\d{1,4}\",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join(\"|\"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join(\"|\"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:\"0[1-9]|1[0-2]\",apply:function(a){this.month=a-1}},M:{regex:\"[1-9]|1[0-2]\",apply:function(a){this.month=a-1}},dd:{regex:\"[0-2][0-9]{1}|3[0-1]{1}\",apply:function(a){this.date=+a}},d:{regex:\"[1-2]?[0-9]{1}|3[0-1]{1}\",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join(\"|\")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join(\"|\")},HH:{regex:\"(?:0|1)[0-9]|2[0-3]\",apply:function(a){this.hours=+a}},H:{regex:\"1?[0-9]|2[0-3]\",apply:function(a){this.hours=+a}},mm:{regex:\"[0-5][0-9]\",apply:function(a){this.minutes=+a}},m:{regex:\"[0-9]|[1-5][0-9]\",apply:function(a){this.minutes=+a}},sss:{regex:\"[0-9][0-9][0-9]\",apply:function(a){this.milliseconds=+a}},ss:{regex:\"[0-5][0-9]\",apply:function(a){this.seconds=+a}},s:{regex:\"[0-9]|[1-5][0-9]\",apply:function(a){this.seconds=+a}}};this.parse=function(b,f,g){if(!angular.isString(b)||!f)return b;f=a.DATETIME_FORMATS[f]||f,f=f.replace(e,\"\\\\$&\"),this.parsers[f]||(this.parsers[f]=c(f));var h=this.parsers[f],i=h.regex,j=h.map,k=b.match(i);if(k&&k.length){var l,m;l=g?{year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:{year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0};for(var n=1,o=k.length;o>n;n++){var p=j[n-1];p.apply&&p.apply.call(l,k[n])}return d(l.year,l.month,l.date)&&(m=new Date(l.year,l.month,l.date,l.hours,l.minutes,l.seconds,l.milliseconds||0)),m}}}]),angular.module(\"ui.bootstrap.position\",[]).factory(\"$position\",[\"$document\",\"$window\",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return\"static\"===(c(a,\"position\")||\"static\")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop(\"offsetWidth\"),height:g.height||b.prop(\"offsetHeight\"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop(\"offsetWidth\"),height:d.height||c.prop(\"offsetHeight\"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split(\"-\"),j=i[0],k=i[1]||\"center\";e=d?this.offset(a):this.position(a),f=b.prop(\"offsetWidth\"),g=b.prop(\"offsetHeight\");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case\"right\":h={top:m[k](),left:l[j]()};break;case\"left\":h={top:m[k](),left:e.left-f};break;case\"bottom\":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module(\"ui.bootstrap.datepicker\",[\"ui.bootstrap.dateparser\",\"ui.bootstrap.position\"]).constant(\"datepickerConfig\",{formatDay:\"dd\",formatMonth:\"MMMM\",formatYear:\"yyyy\",formatDayHeader:\"EEE\",formatDayTitle:\"MMMM yyyy\",formatMonthTitle:\"yyyy\",datepickerMode:\"day\",minMode:\"day\",maxMode:\"year\",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller(\"DatepickerController\",[\"$scope\",\"$attrs\",\"$parse\",\"$interpolate\",\"$timeout\",\"$log\",\"dateFilter\",\"datepickerConfig\",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=[\"day\",\"month\",\"year\"],angular.forEach([\"formatDay\",\"formatMonth\",\"formatYear\",\"formatDayHeader\",\"formatDayTitle\",\"formatMonthTitle\",\"minMode\",\"maxMode\",\"showWeeks\",\"startingDay\",\"yearRange\",\"shortcutPropagation\"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach([\"minDate\",\"maxDate\"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.maxMode=i.maxMode,a.uniqueId=\"datepicker-\"+a.$id+\"-\"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: \"ng-model\" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity(\"date\",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity(\"date-disabled\",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:\"enter\",32:\"space\",33:\"pageup\",34:\"pagedown\",35:\"end\",36:\"home\",37:\"left\",38:\"up\",39:\"right\",40:\"down\"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on(\"datepicker.focus\",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),\"enter\"===c||\"space\"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||\"up\"!==c&&\"down\"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode(\"up\"===c?1:-1),k())}}]).directive(\"datepicker\",function(){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/datepicker.html\",scope:{datepickerMode:\"=?\",dateDisabled:\"&\",customClass:\"&\",shortcutPropagation:\"&?\"},require:[\"datepicker\",\"?^ngModel\"],controller:\"DatepickerController\",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive(\"daypicker\",[\"dateFilter\",function(a){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/day.html\",require:\"^datepicker\",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+\"-\"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,\"EEEE\")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=(11-e.startingDay)%7,p=b.rows.length,q=0;p>q;q++)b.weekNumbers.push(h(b.rows[q][o].date))}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if(\"left\"===a)b-=1;else if(\"up\"===a)b-=7;else if(\"right\"===a)b+=1;else if(\"down\"===a)b+=7;else if(\"pageup\"===a||\"pagedown\"===a){var c=e.activeDate.getMonth()+(\"pageup\"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else\"home\"===a?b=1:\"end\"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive(\"monthpicker\",[\"dateFilter\",function(a){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/month.html\",require:\"^datepicker\",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+\"-\"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if(\"left\"===a)b-=1;else if(\"up\"===a)b-=3;else if(\"right\"===a)b+=1;else if(\"down\"===a)b+=3;else if(\"pageup\"===a||\"pagedown\"===a){var c=e.activeDate.getFullYear()+(\"pageup\"===a?-1:1);e.activeDate.setFullYear(c)}else\"home\"===a?b=0:\"end\"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive(\"yearpicker\",[\"dateFilter\",function(){return{restrict:\"EA\",replace:!0,templateUrl:\"template/datepicker/year.html\",require:\"^datepicker\",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+\"-\"+c});a.title=[b[0].label,b[f-1].label].join(\" - \"),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();\"left\"===a?b-=1:\"up\"===a?b-=5:\"right\"===a?b+=1:\"down\"===a?b+=5:\"pageup\"===a||\"pagedown\"===a?b+=(\"pageup\"===a?-1:1)*d.step.years:\"home\"===a?b=e(d.activeDate.getFullYear()):\"end\"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant(\"datepickerPopupConfig\",{datepickerPopup:\"yyyy-MM-dd\",html5Types:{date:\"yyyy-MM-dd\",\"datetime-local\":\"yyyy-MM-ddTHH:mm:ss.sss\",month:\"yyyy-MM\"},currentText:\"Today\",clearText:\"Clear\",closeText:\"Done\",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive(\"datepickerPopup\",[\"$compile\",\"$parse\",\"$document\",\"$position\",\"dateFilter\",\"dateParser\",\"datepickerPopupConfig\",function(a,b,c,d,e,f,g){return{restrict:\"EA\",require:\"ngModel\",scope:{isOpen:\"=?\",currentText:\"@\",clearText:\"@\",closeText:\"@\",dateDisabled:\"&\",customClass:\"&\"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return\"-\"+a.toLowerCase()})}function m(a){if(angular.isNumber(a)&&(a=new Date(a)),a){if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=f.parse(a,o,h.date)||new Date(a);return isNaN(b)?void 0:b}return void 0}return null}function n(a,b){var c=a||b;if(angular.isNumber(c)&&(c=new Date(c)),c){if(angular.isDate(c)&&!isNaN(c))return!0;if(angular.isString(c)){var d=f.parse(c,o)||new Date(c);return!isNaN(d)}return!1}return!0}var o,p=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,q=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+\"Text\"]||g[a+\"Text\"]};var r=!1;if(g.html5Types[j.type]?(o=g.html5Types[j.type],r=!0):(o=j.datepickerPopup||g.datepickerPopup,j.$observe(\"datepickerPopup\",function(a){var b=a||g.datepickerPopup;if(b!==o&&(o=b,k.$modelValue=null,!o))throw new Error(\"datepickerPopup must have a date format specified.\")})),!o)throw new Error(\"datepickerPopup must have a date format specified.\");if(r&&j.datepickerPopup)throw new Error(\"HTML5 date input types do not support custom formats.\");var s=angular.element(\"<div datepicker-popup-wrap><div datepicker></div></div>\");s.attr({\"ng-model\":\"date\",\"ng-change\":\"dateSelection()\"});var t=angular.element(s.children()[0]);if(r&&\"month\"==j.type&&(t.attr(\"datepicker-mode\",'\"month\"'),t.attr(\"min-mode\",\"month\")),j.datepickerOptions){var u=h.$parent.$eval(j.datepickerOptions);u.initDate&&(h.initDate=u.initDate,t.attr(\"init-date\",\"initDate\"),delete u.initDate),angular.forEach(u,function(a,b){t.attr(l(b),a)})}h.watchData={},angular.forEach([\"minDate\",\"maxDate\",\"datepickerMode\",\"initDate\",\"shortcutPropagation\"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),t.attr(l(a),\"watchData.\"+a),\"datepickerMode\"===a){var d=c.assign;h.$watch(\"watchData.\"+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&t.attr(\"date-disabled\",\"dateDisabled({ date: date, mode: mode })\"),j.showWeeks&&t.attr(\"show-weeks\",j.showWeeks),j.customClass&&t.attr(\"custom-class\",\"customClass({ date: date, mode: mode })\"),r?k.$formatters.push(function(a){return h.date=a,a}):(k.$$parserName=\"date\",k.$validators.date=n,k.$parsers.unshift(m),k.$formatters.push(function(a){return h.date=a,k.$isEmpty(a)?a:e(a,o)})),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a);var b=h.date?e(h.date,o):\"\";i.val(b),k.$setViewValue(b),p&&(h.isOpen=!1,i[0].focus())},k.$viewChangeListeners.push(function(){h.date=f.parse(k.$viewValue,o,h.date)||new Date(k.$viewValue)});var v=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},w=function(a){h.keydown(a)};i.bind(\"keydown\",w),h.keydown=function(a){27===a.which?(a.preventDefault(),h.isOpen&&a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch(\"isOpen\",function(a){a?(h.$broadcast(\"datepicker.focus\"),h.position=q?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop(\"offsetHeight\"),c.bind(\"click\",v)):c.unbind(\"click\",v)}),h.select=function(a){if(\"today\"===a){var b=new Date;angular.isDate(h.date)?(a=new Date(h.date),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var x=a(s)(h);s.remove(),q?c.find(\"body\").append(x):i.after(x),h.$on(\"$destroy\",function(){x.remove(),i.unbind(\"keydown\",w),c.unbind(\"click\",v)})}}}]).directive(\"datepickerPopupWrap\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,templateUrl:\"template/datepicker/popup.html\",link:function(a,b){b.bind(\"click\",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module(\"ui.bootstrap.dropdown\",[\"ui.bootstrap.position\"]).constant(\"dropdownConfig\",{openClass:\"open\"}).service(\"dropdownService\",[\"$document\",\"$rootScope\",function(a,b){var c=null;this.open=function(b){c||(a.bind(\"click\",d),a.bind(\"keydown\",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind(\"click\",d),a.unbind(\"keydown\",e))};var d=function(a){if(c&&(!a||\"disabled\"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getElement();a&&\"outsideClick\"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which&&(c.focusToggleElement(),d())}}]).controller(\"DropdownController\",[\"$scope\",\"$attrs\",\"$parse\",\"dropdownConfig\",\"dropdownService\",\"$animate\",\"$position\",\"$document\",function(a,b,c,d,e,f,g,h){var i,j=this,k=a.$new(),l=d.openClass,m=angular.noop,n=b.onToggle?c(b.onToggle):angular.noop,o=!1;this.init=function(d){j.$element=d,b.isOpen&&(i=c(b.isOpen),m=i.assign,a.$watch(i,function(a){k.isOpen=!!a})),o=angular.isDefined(b.dropdownAppendToBody),o&&j.dropdownMenu&&(h.find(\"body\").append(j.dropdownMenu),d.on(\"$destroy\",function(){j.dropdownMenu.remove()}))},this.toggle=function(a){return k.isOpen=arguments.length?!!a:!k.isOpen},this.isOpen=function(){return k.isOpen},k.getToggleElement=function(){return j.toggleElement},k.getAutoClose=function(){return b.autoClose||\"always\"},k.getElement=function(){return j.$element},k.focusToggleElement=function(){j.toggleElement&&j.toggleElement[0].focus()},k.$watch(\"isOpen\",function(b,c){if(o&&j.dropdownMenu){var d=g.positionElements(j.$element,j.dropdownMenu,\"bottom-left\",!0);j.dropdownMenu.css({top:d.top+\"px\",left:d.left+\"px\",display:b?\"block\":\"none\"})}f[b?\"addClass\":\"removeClass\"](j.$element,l),b?(k.focusToggleElement(),e.open(k)):e.close(k),m(a,b),angular.isDefined(b)&&b!==c&&n(a,{open:!!b})}),a.$on(\"$locationChangeSuccess\",function(){k.isOpen=!1}),a.$on(\"$destroy\",function(){k.$destroy()})}]).directive(\"dropdown\",function(){return{controller:\"DropdownController\",link:function(a,b,c,d){d.init(b)}}}).directive(\"dropdownMenu\",function(){return{restrict:\"AC\",require:\"?^dropdown\",link:function(a,b,c,d){d&&(d.dropdownMenu=b)}}}).directive(\"dropdownToggle\",function(){return{require:\"?^dropdown\",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass(\"disabled\")||c.disabled||a.$apply(function(){d.toggle()})};b.bind(\"click\",e),b.attr({\"aria-haspopup\":!0,\"aria-expanded\":!1}),a.$watch(d.isOpen,function(a){b.attr(\"aria-expanded\",!!a)}),a.$on(\"$destroy\",function(){b.unbind(\"click\",e)})}}}}),angular.module(\"ui.bootstrap.modal\",[]).factory(\"$$stackedMap\",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive(\"modalBackdrop\",[\"$timeout\",function(a){function b(b){b.animate=!1,a(function(){b.animate=!0})}return{restrict:\"EA\",replace:!0,templateUrl:\"template/modal/backdrop.html\",compile:function(a,c){return a.addClass(c.backdropClass),b}}}]).directive(\"modalWindow\",[\"$modalStack\",\"$q\",function(a,b){return{restrict:\"EA\",scope:{index:\"@\",animate:\"=\"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||\"template/modal/window.html\"},link:function(c,d,e){d.addClass(e.windowClass||\"\"),c.size=e.size,c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&\"static\"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,\"backdrop click\"))},c.$isRendered=!0;var f=b.defer();e.$observe(\"modalRender\",function(a){\"true\"==a&&f.resolve()}),f.promise.then(function(){c.animate=!0;var b=d[0].querySelectorAll(\"[autofocus]\");b.length?b[0].focus():d[0].focus();var e=a.getTop();e&&a.modalRendered(e.key)})}}}]).directive(\"modalAnimationClass\",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.modalAnimationClass)}}}]).directive(\"modalTransclude\",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory(\"$modalStack\",[\"$animate\",\"$timeout\",\"$document\",\"$compile\",\"$rootScope\",\"$$stackedMap\",function(a,b,c,d,e,f){function g(){for(var a=-1,b=o.keys(),c=0;c<b.length;c++)o.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find(\"body\").eq(0),d=o.get(a).value;o.remove(a),j(d.modalDomEl,d.modalScope,function(){b.toggleClass(n,o.length()>0),i()})}function i(){if(l&&-1==g()){var a=m;j(l,m,function(){a=null}),l=void 0,m=void 0}}function j(c,d,f){function g(){g.done||(g.done=!0,c.remove(),d.$destroy(),f&&f())}d.animate=!1,c.attr(\"modal-animation\")&&a.enabled()?c.one(\"$animate:close\",function(){e.$evalAsync(g)}):b(g)}function k(a,b,c){return!a.value.modalScope.$broadcast(\"modal.closing\",b,c).defaultPrevented}var l,m,n=\"modal-open\",o=f.createNew(),p={};return e.$watch(g,function(a){m&&(m.index=a)}),c.bind(\"keydown\",function(a){var b;27===a.which&&(b=o.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){p.dismiss(b.key,\"escape key press\")})))}),p.open=function(a,b){var f=c[0].activeElement;o.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var h=c.find(\"body\").eq(0),i=g();if(i>=0&&!l){m=e.$new(!0),m.index=i;var j=angular.element('<div modal-backdrop=\"modal-backdrop\"></div>');j.attr(\"backdrop-class\",b.backdropClass),b.animation&&j.attr(\"modal-animation\",\"true\"),l=d(j)(m),h.append(l)}var k=angular.element('<div modal-window=\"modal-window\"></div>');k.attr({\"template-url\":b.windowTemplateUrl,\"window-class\":b.windowClass,size:b.size,index:o.length()-1,animate:\"animate\"}).html(b.content),b.animation&&k.attr(\"modal-animation\",\"true\");var p=d(k)(b.scope);o.top().value.modalDomEl=p,o.top().value.modalOpener=f,h.append(p),h.addClass(n)},p.close=function(a,b){var c=o.get(a);return c&&k(c,b,!0)?(c.value.deferred.resolve(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismiss=function(a,b){var c=o.get(a);return c&&k(c,b,!1)?(c.value.deferred.reject(b),h(a),c.value.modalOpener.focus(),!0):!c},p.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},p.getTop=function(){return o.top()},p.modalRendered=function(a){var b=o.get(a);b&&b.value.renderDeferred.resolve()},p}]).provider(\"$modal\",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:[\"$injector\",\"$rootScope\",\"$q\",\"$templateRequest\",\"$controller\",\"$modalStack\",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))\n}),c}var j={};return j.open=function(b){var e=d.defer(),j=d.defer(),k=d.defer(),l={result:e.promise,opened:j.promise,rendered:k.promise,close:function(a){return g.close(l,a)},dismiss:function(a){return g.dismiss(l,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error(\"One of template or templateUrl options is required.\");var m=d.all([h(b)].concat(i(b.resolve)));return m.then(function(a){var d=(b.scope||c).$new();d.$close=l.close,d.$dismiss=l.dismiss;var h,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=l,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),h=f(b.controller,i),b.controllerAs&&(d[b.controllerAs]=h)),g.open(l,{scope:d,deferred:e,renderDeferred:k,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),m.then(function(){j.resolve(!0)},function(a){j.reject(a)}),l},j}]};return a}),angular.module(\"ui.bootstrap.pagination\",[]).controller(\"PaginationController\",[\"$scope\",\"$attrs\",\"$parse\",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch(\"totalItems\",function(){a.totalPages=d.calculateTotalPages()}),a.$watch(\"totalPages\",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+\"Text\"]||d.config[b+\"Text\"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant(\"paginationConfig\",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:\"First\",previousText:\"Previous\",nextText:\"Next\",lastText:\"Last\",rotate:!0}).directive(\"pagination\",[\"$parse\",\"paginationConfig\",function(a,b){return{restrict:\"EA\",scope:{totalItems:\"=\",firstText:\"@\",previousText:\"@\",nextText:\"@\",lastText:\"@\"},require:[\"pagination\",\"?ngModel\"],controller:\"PaginationController\",templateUrl:\"template/pagination/pagination.html\",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,\"...\",!1);c.unshift(j)}if(b>e){var m=g(e+1,\"...\",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant(\"pagerConfig\",{itemsPerPage:10,previousText:\"« Previous\",nextText:\"Next »\",align:!0}).directive(\"pager\",[\"pagerConfig\",function(a){return{restrict:\"EA\",scope:{totalItems:\"=\",previousText:\"@\",nextText:\"@\"},require:[\"pager\",\"?ngModel\"],controller:\"PaginationController\",templateUrl:\"template/pagination/pager.html\",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module(\"ui.bootstrap.tooltip\",[\"ui.bootstrap.position\",\"ui.bootstrap.bindHtml\"]).provider(\"$tooltip\",function(){function a(a){var b=/[A-Z]/g,c=\"-\";return a.replace(b,function(a,b){return(b?c:\"\")+a.toLowerCase()})}var b={placement:\"top\",animation:!0,popupDelay:0,useContentExp:!1},c={mouseenter:\"mouseleave\",click:\"click\",focus:\"blur\"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=[\"$window\",\"$compile\",\"$timeout\",\"$document\",\"$position\",\"$interpolate\",function(e,f,g,h,i,j){return function(e,k,l,m){function n(a){var b=a||m.trigger||l,d=c[b]||b;return{show:b,hide:d}}m=angular.extend({},b,d,m);var o=a(e),p=j.startSymbol(),q=j.endSymbol(),r=\"<div \"+o+'-popup title=\"'+p+\"title\"+q+'\" '+(m.useContentExp?'content-exp=\"contentExp()\" ':'content=\"'+p+\"content\"+q+'\" ')+'placement=\"'+p+\"placement\"+q+'\" popup-class=\"'+p+\"popupClass\"+q+'\" animation=\"animation\" is-open=\"isOpen\"origin-scope=\"origScope\" ></div>';return{restrict:\"EA\",compile:function(){var a=f(r);return function(b,c,d){function f(){E.isOpen?l():j()}function j(){(!D||b.$eval(d[k+\"Enable\"]))&&(s(),E.popupDelay?A||(A=g(o,E.popupDelay,!1),A.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return A=null,z&&(g.cancel(z),z=null),(m.useContentExp?E.contentExp():E.content)?(q(),x.css({top:0,left:0,display:\"block\"}),E.$digest(),F(),E.isOpen=!0,E.$apply(),F):angular.noop}function p(){E.isOpen=!1,g.cancel(A),A=null,E.animation?z||(z=g(r,500)):r()}function q(){x&&r(),y=E.$new(),x=a(y,function(a){B?h.find(\"body\").append(a):c.after(a)}),y.$watch(function(){g(F,0,!1)}),m.useContentExp&&y.$watch(\"contentExp()\",function(a){!a&&E.isOpen&&p()})}function r(){z=null,x&&(x.remove(),x=null),y&&(y.$destroy(),y=null)}function s(){t(),u(),v()}function t(){E.popupClass=d[k+\"Class\"]}function u(){var a=d[k+\"Placement\"];E.placement=angular.isDefined(a)?a:m.placement}function v(){var a=d[k+\"PopupDelay\"],b=parseInt(a,10);E.popupDelay=isNaN(b)?m.popupDelay:b}function w(){var a=d[k+\"Trigger\"];G(),C=n(a),C.show===C.hide?c.bind(C.show,f):(c.bind(C.show,j),c.bind(C.hide,l))}var x,y,z,A,B=angular.isDefined(m.appendToBody)?m.appendToBody:!1,C=n(void 0),D=angular.isDefined(d[k+\"Enable\"]),E=b.$new(!0),F=function(){if(x){var a=i.positionElements(c,x,E.placement,B);a.top+=\"px\",a.left+=\"px\",x.css(a)}};E.origScope=b,E.isOpen=!1,E.contentExp=function(){return b.$eval(d[e])},m.useContentExp||d.$observe(e,function(a){E.content=a,!a&&E.isOpen&&p()}),d.$observe(\"disabled\",function(a){a&&E.isOpen&&p()}),d.$observe(k+\"Title\",function(a){E.title=a});var G=function(){c.unbind(C.show,j),c.unbind(C.hide,l)};w();var H=b.$eval(d[k+\"Animation\"]);E.animation=angular.isDefined(H)?!!H:m.animation;var I=b.$eval(d[k+\"AppendToBody\"]);B=angular.isDefined(I)?I:B,B&&b.$on(\"$locationChangeSuccess\",function(){E.isOpen&&p()}),b.$on(\"$destroy\",function(){g.cancel(z),g.cancel(A),G(),r(),E=null})}}}}}]}).directive(\"tooltipTemplateTransclude\",[\"$animate\",\"$sce\",\"$compile\",\"$templateRequest\",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit(\"$includeContentLoaded\",b)}},function(){g===l&&(m(),e.$emit(\"$includeContentError\",b))}),e.$emit(\"$includeContentRequested\",b)):m()}),e.$on(\"$destroy\",m)}}}]).directive(\"tooltipClasses\",function(){return{restrict:\"A\",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive(\"tooltipPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-popup.html\"}}).directive(\"tooltip\",[\"$tooltip\",function(a){return a(\"tooltip\",\"tooltip\",\"mouseenter\")}]).directive(\"tooltipTemplatePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\",originScope:\"&\"},templateUrl:\"template/tooltip/tooltip-template-popup.html\"}}).directive(\"tooltipTemplate\",[\"$tooltip\",function(a){return a(\"tooltipTemplate\",\"tooltip\",\"mouseenter\",{useContentExp:!0})}]).directive(\"tooltipHtmlPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-html-popup.html\"}}).directive(\"tooltipHtml\",[\"$tooltip\",function(a){return a(\"tooltipHtml\",\"tooltip\",\"mouseenter\",{useContentExp:!0})}]).directive(\"tooltipHtmlUnsafePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/tooltip/tooltip-html-unsafe-popup.html\"}}).value(\"tooltipHtmlUnsafeSuppressDeprecated\",!1).directive(\"tooltipHtmlUnsafe\",[\"$tooltip\",\"tooltipHtmlUnsafeSuppressDeprecated\",\"$log\",function(a,b,c){return b||c.warn(\"tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.\"),a(\"tooltipHtmlUnsafe\",\"tooltip\",\"mouseenter\")}]),angular.module(\"ui.bootstrap.popover\",[\"ui.bootstrap.tooltip\"]).directive(\"popoverTemplatePopup\",function(){return{restrict:\"EA\",replace:!0,scope:{title:\"@\",contentExp:\"&\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\",originScope:\"&\"},templateUrl:\"template/popover/popover-template.html\"}}).directive(\"popoverTemplate\",[\"$tooltip\",function(a){return a(\"popoverTemplate\",\"popover\",\"click\",{useContentExp:!0})}]).directive(\"popoverPopup\",function(){return{restrict:\"EA\",replace:!0,scope:{title:\"@\",content:\"@\",placement:\"@\",popupClass:\"@\",animation:\"&\",isOpen:\"&\"},templateUrl:\"template/popover/popover.html\"}}).directive(\"popover\",[\"$tooltip\",function(a){return a(\"popover\",\"popover\",\"click\")}]),angular.module(\"ui.bootstrap.progressbar\",[]).constant(\"progressConfig\",{animate:!0,max:100}).controller(\"ProgressController\",[\"$scope\",\"$attrs\",\"progressConfig\",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c){e||c.css({transition:\"none\"}),this.bars.push(b),b.$watch(\"value\",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on(\"$destroy\",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive(\"progress\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,controller:\"ProgressController\",require:\"progress\",scope:{},templateUrl:\"template/progressbar/progress.html\"}}).directive(\"bar\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,require:\"^progress\",scope:{value:\"=\",max:\"=?\",type:\"@\"},templateUrl:\"template/progressbar/bar.html\",link:function(a,b,c,d){d.addBar(a,b)}}}).directive(\"progressbar\",function(){return{restrict:\"EA\",replace:!0,transclude:!0,controller:\"ProgressController\",scope:{value:\"=\",max:\"=?\",type:\"@\"},templateUrl:\"template/progressbar/progressbar.html\",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module(\"ui.bootstrap.rating\",[]).constant(\"ratingConfig\",{max:5,stateOn:null,stateOff:null}).controller(\"RatingController\",[\"$scope\",\"$attrs\",\"ratingConfig\",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive(\"rating\",function(){return{restrict:\"EA\",require:[\"rating\",\"ngModel\"],scope:{readonly:\"=?\",onHover:\"&\",onLeave:\"&\"},controller:\"RatingController\",templateUrl:\"template/rating/rating.html\",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module(\"ui.bootstrap.tabs\",[]).controller(\"TabsetController\",[\"$scope\",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on(\"$destroy\",function(){d=!0})}]).directive(\"tabset\",function(){return{restrict:\"EA\",transclude:!0,replace:!0,scope:{type:\"@\"},controller:\"TabsetController\",templateUrl:\"template/tabs/tabset.html\",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive(\"tab\",[\"$parse\",\"$log\",function(a,b){return{require:\"^tabset\",restrict:\"EA\",replace:!0,templateUrl:\"template/tabs/tab.html\",transclude:!0,scope:{active:\"=?\",heading:\"@\",onSelect:\"&select\",onDeselect:\"&deselect\"},controller:function(){},compile:function(c,d,e){return function(c,d,f,g){c.$watch(\"active\",function(a){a&&g.select(c)}),c.disabled=!1,f.disable&&c.$parent.$watch(a(f.disable),function(a){c.disabled=!!a}),f.disabled&&(b.warn('Use of \"disabled\" attribute has been deprecated, please use \"disable\"'),c.$parent.$watch(a(f.disabled),function(a){c.disabled=!!a})),c.select=function(){c.disabled||(c.active=!0)},g.addTab(c),c.$on(\"$destroy\",function(){g.removeTab(c)}),c.$transcludeFn=e}}}}]).directive(\"tabHeadingTransclude\",[function(){return{restrict:\"A\",require:\"^tab\",link:function(a,b){a.$watch(\"headingElement\",function(a){a&&(b.html(\"\"),b.append(a))})}}}]).directive(\"tabContentTransclude\",function(){function a(a){return a.tagName&&(a.hasAttribute(\"tab-heading\")||a.hasAttribute(\"data-tab-heading\")||\"tab-heading\"===a.tagName.toLowerCase()||\"data-tab-heading\"===a.tagName.toLowerCase())}return{restrict:\"A\",require:\"^tabset\",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module(\"ui.bootstrap.timepicker\",[]).constant(\"timepickerConfig\",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0}).controller(\"TimepickerController\",[\"$scope\",\"$attrs\",\"$parse\",\"$log\",\"$locale\",\"timepickerConfig\",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?\"0\"+a:a.toString()}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity(\"time\",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours=\"h\"===b?c:i(c),\"m\"!==b&&(a.minutes=i(d)),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render,o.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind(\"mousewheel wheel\",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind(\"mousewheel wheel\",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind(\"keydown\",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind(\"keydown\",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity(\"time\",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j(\"h\")):d(!0)},b.bind(\"blur\",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j(\"m\")):d(void 0,!0)},c.bind(\"blur\",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$viewValue;isNaN(a)?(o.$setValidity(\"time\",!1),d.error('Timepicker directive: \"ng-model\" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive(\"timepicker\",function(){return{restrict:\"EA\",require:[\"timepicker\",\"?^ngModel\"],controller:\"TimepickerController\",replace:!0,scope:{},templateUrl:\"template/timepicker/timepicker.html\",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find(\"input\"))}}}),angular.module(\"ui.bootstrap.transition\",[]).value(\"$transitionSuppressDeprecated\",!1).factory(\"$transition\",[\"$q\",\"$timeout\",\"$rootScope\",\"$log\",\"$transitionSuppressDeprecated\",function(a,b,c,d,e){function f(a){for(var b in a)if(void 0!==h.style[b])return a[b]}e||d.warn(\"$transition is now deprecated. Use $animate from ngAnimate instead.\");var g=function(d,e,f){f=f||{};var h=a.defer(),i=g[f.animation?\"animationEndEventName\":\"transitionEndEventName\"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(e)?d.addClass(e):angular.isFunction(e)?e(d):angular.isObject(e)&&d.css(e),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject(\"Transition cancelled\")},h.promise},h=document.createElement(\"trans\"),i={WebkitTransition:\"webkitTransitionEnd\",MozTransition:\"transitionend\",OTransition:\"oTransitionEnd\",transition:\"transitionend\"},j={WebkitTransition:\"webkitAnimationEnd\",MozTransition:\"animationend\",OTransition:\"oAnimationEnd\",transition:\"animationend\"};return g.transitionEndEventName=f(i),g.animationEndEventName=f(j),g}]),angular.module(\"ui.bootstrap.typeahead\",[\"ui.bootstrap.position\",\"ui.bootstrap.bindHtml\"]).factory(\"typeaheadParser\",[\"$parse\",function(a){var b=/^\\s*([\\s\\S]+?)(?:\\s+as\\s+([\\s\\S]+?))?\\s+for\\s+(?:([\\$\\w][\\$\\w\\d]*))\\s+in\\s+([\\s\\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of \"_modelValue_ (as _label_)? for _item_ in _collection_\" but got \"'+c+'\".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive(\"typeahead\",[\"$compile\",\"$parse\",\"$q\",\"$timeout\",\"$document\",\"$position\",\"typeaheadParser\",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:\"ngModel\",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on(\"$destroy\",function(){x.$destroy()});var y=\"typeahead-\"+x.$id+\"-\"+Math.floor(1e4*Math.random());j.attr({\"aria-autocomplete\":\"list\",\"aria-expanded\":!1,\"aria-owns\":y});var z=angular.element(\"<div typeahead-popup></div>\");z.attr({id:y,matches:\"matches\",active:\"activeIdx\",select:\"select(activeIdx)\",query:\"query\",position:\"position\"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr(\"template-url\",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr(\"aria-expanded\",!1)},B=function(a){return y+\"-option-\"+a};x.$watch(\"activeIdx\",function(a){0>a?j.removeAttr(\"aria-activedescendant\"):j.attr(\"aria-activedescendant\",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c&&c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop(\"offsetHeight\"),j.attr(\"aria-expanded\",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity(\"editable\",!1):(l.$setValidity(\"editable\",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return p||l.$setValidity(\"editable\",!0),s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity(\"editable\",!0),l.$setValidity(\"parse\",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind(\"keydown\",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind(\"blur\",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind(\"click\",G),i.$on(\"$destroy\",function(){e.unbind(\"click\",G),t&&H.remove(),z.remove()});var H=a(z)(x);t?e.find(\"body\").append(H):j.after(H)}}}]).directive(\"typeaheadPopup\",function(){return{restrict:\"EA\",scope:{matches:\"=\",query:\"=\",active:\"=\",position:\"=\",select:\"&\"},replace:!0,templateUrl:\"template/typeahead/typeahead-popup.html\",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive(\"typeaheadMatch\",[\"$templateRequest\",\"$compile\",\"$parse\",function(a,b,c){return{restrict:\"EA\",scope:{index:\"=\",match:\"=\",query:\"=\"},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||\"template/typeahead/typeahead-match.html\";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter(\"typeaheadHighlight\",function(){function a(a){return a.replace(/([.?*+^$[\\]\\\\(){}|-])/g,\"\\\\$1\")}return function(b,c){return c?(\"\"+b).replace(new RegExp(a(c),\"gi\"),\"<strong>$&</strong>\"):b}}),angular.module(\"template/accordion/accordion-group.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/accordion/accordion-group.html\",'<div class=\"panel panel-default\">\\n  <div class=\"panel-heading\">\\n    <h4 class=\"panel-title\">\\n      <a href=\"javascript:void(0)\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{\\'text-muted\\': isDisabled}\">{{heading}}</span></a>\\n    </h4>\\n  </div>\\n  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\\n\t  <div class=\"panel-body\" ng-transclude></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/accordion/accordion.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/accordion/accordion.html\",'<div class=\"panel-group\" ng-transclude></div>')}]),angular.module(\"template/alert/alert.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/alert/alert.html\",'<div class=\"alert\" ng-class=\"[\\'alert-\\' + (type || \\'warning\\'), closeable ? \\'alert-dismissable\\' : null]\" role=\"alert\">\\n    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\\n        <span aria-hidden=\"true\">&times;</span>\\n        <span class=\"sr-only\">Close</span>\\n    </button>\\n    <div ng-transclude></div>\\n</div>\\n')}]),angular.module(\"template/carousel/carousel.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/carousel/carousel.html\",'<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\\n    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\\n        <li ng-repeat=\"slide in slides | orderBy:\\'index\\' track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\\n    </ol>\\n    <div class=\"carousel-inner\" ng-transclude></div>\\n    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\\n    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\\n</div>\\n')}]),angular.module(\"template/carousel/slide.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/carousel/slide.html\",'<div ng-class=\"{\\n    \\'active\\': active\\n  }\" class=\"item text-center\" ng-transclude></div>\\n')}]),angular.module(\"template/datepicker/datepicker.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/datepicker.html\",'<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\\n  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\\n  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\\n  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\\n</div>')}]),angular.module(\"template/datepicker/day.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/day.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n    <tr>\\n      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\\n      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"dt.customClass\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-muted\\': dt.secondary, \\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')}]),angular.module(\"template/datepicker/month.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/month.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')}]),angular.module(\"template/datepicker/popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/popup.html\",'<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && \\'block\\') || \\'none\\', top: position.top+\\'px\\', left: position.left+\\'px\\'}\" ng-keydown=\"keydown($event)\">\\n\t<li ng-transclude></li>\\n\t<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\\n\t\t<span class=\"btn-group pull-left\">\\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select(\\'today\\')\">{{ getText(\\'current\\') }}</button>\\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText(\\'clear\\') }}</button>\\n\t\t</span>\\n\t\t<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText(\\'close\\') }}</button>\\n\t</li>\\n</ul>\\n')}]),angular.module(\"template/datepicker/year.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/datepicker/year.html\",'<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\\n  <thead>\\n    <tr>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\\n      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\\n      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr ng-repeat=\"row in rows track by $index\">\\n      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\\n        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{\\'btn-info\\': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{\\'text-info\\': dt.current}\">{{dt.label}}</span></button>\\n      </td>\\n    </tr>\\n  </tbody>\\n</table>\\n')\n}]),angular.module(\"template/modal/backdrop.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/modal/backdrop.html\",'<div class=\"modal-backdrop\"\\n     modal-animation-class=\"fade\"\\n     ng-class=\"{in: animate}\"\\n     ng-style=\"{\\'z-index\\': 1040 + (index && 1 || 0) + index*10}\"\\n></div>\\n')}]),angular.module(\"template/modal/window.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/modal/window.html\",'<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\\n    modal-animation-class=\"fade\"\\n\tng-class=\"{in: animate}\" ng-style=\"{\\'z-index\\': 1050 + index*10, display: \\'block\\'}\" ng-click=\"close($event)\">\\n    <div class=\"modal-dialog\" ng-class=\"size ? \\'modal-\\' + size : \\'\\'\"><div class=\"modal-content\" modal-transclude></div></div>\\n</div>\\n')}]),angular.module(\"template/pagination/pager.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/pagination/pager.html\",'<ul class=\"pager\">\\n  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText(\\'previous\\')}}</a></li>\\n  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText(\\'next\\')}}</a></li>\\n</ul>')}]),angular.module(\"template/pagination/pagination.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/pagination/pagination.html\",'<ul class=\"pagination\">\\n  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1, $event)\">{{getText(\\'first\\')}}</a></li>\\n  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText(\\'previous\\')}}</a></li>\\n  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\\n  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText(\\'next\\')}}</a></li>\\n  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages, $event)\">{{getText(\\'last\\')}}</a></li>\\n</ul>')}]),angular.module(\"template/tooltip/tooltip-html-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-html-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-html-unsafe-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-html-unsafe-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\\n</div>\\n')}]),angular.module(\"template/tooltip/tooltip-template-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tooltip/tooltip-template-popup.html\",'<div class=\"tooltip\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"tooltip-arrow\"></div>\\n  <div class=\"tooltip-inner\"\\n    tooltip-template-transclude=\"contentExp()\"\\n    tooltip-template-transclude-scope=\"originScope()\"></div>\\n</div>\\n')}]),angular.module(\"template/popover/popover-template.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover-template.html\",'<div class=\"popover\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\\n      <div class=\"popover-content\"\\n        tooltip-template-transclude=\"contentExp()\"\\n        tooltip-template-transclude-scope=\"originScope()\"></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/popover/popover-window.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover-window.html\",'<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen, fade: animation }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\\n      <div class=\"popover-content\" tooltip-template-transclude></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/popover/popover.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/popover/popover.html\",'<div class=\"popover\"\\n  tooltip-animation-class=\"fade\"\\n  tooltip-classes\\n  ng-class=\"{ in: isOpen() }\">\\n  <div class=\"arrow\"></div>\\n\\n  <div class=\"popover-inner\">\\n      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\\n      <div class=\"popover-content\" ng-bind=\"content\"></div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/progressbar/bar.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/bar.html\",'<div class=\"progress-bar\" ng-class=\"type && \\'progress-bar-\\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \\'%\\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\\n')}]),angular.module(\"template/progressbar/progress.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/progress.html\",'<div class=\"progress\" ng-transclude></div>')}]),angular.module(\"template/progressbar/progressbar.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/progressbar/progressbar.html\",'<div class=\"progress\">\\n  <div class=\"progress-bar\" ng-class=\"type && \\'progress-bar-\\' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + \\'%\\'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\\n</div>\\n')}]),angular.module(\"template/rating/rating.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/rating/rating.html\",'<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\\n    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || \\'glyphicon-star\\') || (r.stateOff || \\'glyphicon-star-empty\\')\">\\n        <span class=\"sr-only\">({{ $index < value ? \\'*\\' : \\' \\' }})</span>\\n    </i>\\n</span>')}]),angular.module(\"template/tabs/tab.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tabs/tab.html\",'<li ng-class=\"{active: active, disabled: disabled}\">\\n  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\\n</li>\\n')}]),angular.module(\"template/tabs/tabset.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/tabs/tabset.html\",'<div>\\n  <ul class=\"nav nav-{{type || \\'tabs\\'}}\" ng-class=\"{\\'nav-stacked\\': vertical, \\'nav-justified\\': justified}\" ng-transclude></ul>\\n  <div class=\"tab-content\">\\n    <div class=\"tab-pane\" \\n         ng-repeat=\"tab in tabs\" \\n         ng-class=\"{active: tab.active}\"\\n         tab-content-transclude=\"tab\">\\n    </div>\\n  </div>\\n</div>\\n')}]),angular.module(\"template/timepicker/timepicker.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/timepicker/timepicker.html\",'<table>\\n\t<tbody>\\n\t\t<tr class=\"text-center\">\\n\t\t\t<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\\n\t\t\t<td>&nbsp;</td>\\n\t\t\t<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\\n\t\t\t<td ng-show=\"showMeridian\"></td>\\n\t\t</tr>\\n\t\t<tr>\\n\t\t\t<td class=\"form-group\" ng-class=\"{\\'has-error\\': invalidHours}\">\\n\t\t\t\t<input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\\n\t\t\t</td>\\n\t\t\t<td>:</td>\\n\t\t\t<td class=\"form-group\" ng-class=\"{\\'has-error\\': invalidMinutes}\">\\n\t\t\t\t<input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\\n\t\t\t</td>\\n\t\t\t<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\\n\t\t</tr>\\n\t\t<tr class=\"text-center\">\\n\t\t\t<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\\n\t\t\t<td>&nbsp;</td>\\n\t\t\t<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\\n\t\t\t<td ng-show=\"showMeridian\"></td>\\n\t\t</tr>\\n\t</tbody>\\n</table>\\n')}]),angular.module(\"template/typeahead/typeahead-match.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/typeahead/typeahead-match.html\",'<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>')}]),angular.module(\"template/typeahead/typeahead-popup.html\",[]).run([\"$templateCache\",function(a){a.put(\"template/typeahead/typeahead-popup.html\",'<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+\\'px\\', left: position.left+\\'px\\'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\\n    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\\n        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\\n    </li>\\n</ul>\\n')}]),!angular.$$csp()&&angular.element(document).find(\"head\").prepend('<style type=\"text/css\">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(angular, factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(angular) {
	            return factory(angular);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        return factory(angular);
	    }
	}(typeof angular === 'undefined' ? null : angular, function(angular) {

	    'use strict';

	    /**
	     * @ngdoc overview
	     * @name ngStorage
	     */

	    angular.module('ngStorage', [])

	    /**
	     * @ngdoc object
	     * @name ngStorage.$localStorage
	     * @requires $rootScope
	     * @requires $window
	     */

	    .factory('$localStorage', _storageFactory('localStorage'))

	    /**
	     * @ngdoc object
	     * @name ngStorage.$sessionStorage
	     * @requires $rootScope
	     * @requires $window
	     */

	    .factory('$sessionStorage', _storageFactory('sessionStorage'));

	    function _storageFactory(storageType) {
	        return [
	            '$rootScope',
	            '$window',
	            '$log',
	            '$timeout',

	            function(
	                $rootScope,
	                $window,
	                $log,
	                $timeout
	            ){
	                function isStorageSupported(storageType) {

	                    // Some installations of IE, for an unknown reason, throw "SCRIPT5: Error: Access is denied"
	                    // when accessing window.localStorage. This happens before you try to do anything with it. Catch
	                    // that error and allow execution to continue.

	                    // fix 'SecurityError: DOM Exception 18' exception in Desktop Safari, Mobile Safari
	                    // when "Block cookies": "Always block" is turned on
	                    var supported;
	                    try {
	                        supported = $window[storageType];
	                    }
	                    catch (err) {
	                        supported = false;
	                    }

	                    // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
	                    // is available, but trying to call .setItem throws an exception below:
	                    // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage that exceeded the quota."
	                    if (supported && storageType === 'localStorage') {
	                        var key = '__' + Math.round(Math.random() * 1e7);

	                        try {
	                            localStorage.setItem(key, key);
	                            localStorage.removeItem(key);
	                        }
	                        catch (err) {
	                            supported = false;
	                        }
	                    }

	                    return supported;
	                }

	                // #9: Assign a placeholder object if Web Storage is unavailable to prevent breaking the entire AngularJS app
	                var webStorage = isStorageSupported(storageType) || ($log.warn('This browser does not support Web Storage!'), {setItem: function() {}, getItem: function() {}}),
	                    $storage = {
	                        $default: function(items) {
	                            for (var k in items) {
	                                angular.isDefined($storage[k]) || ($storage[k] = items[k]);
	                            }

	                            return $storage;
	                        },
	                        $reset: function(items) {
	                            for (var k in $storage) {
	                                '$' === k[0] || (delete $storage[k] && webStorage.removeItem('ngStorage-' + k));
	                            }

	                            return $storage.$default(items);
	                        }
	                    },
	                    _last$storage,
	                    _debounce;

	                try {
	                    webStorage = $window[storageType];
	                    webStorage.length;
	                } catch(e) {
	                    $log.warn('This browser does not support Web Storage!');
	                    webStorage = {};
	                }

	                for (var i = 0, l = webStorage.length, k; i < l; i++) {
	                    // #8, #10: `webStorage.key(i)` may be an empty string (or throw an exception in IE9 if `webStorage` is empty)
	                    (k = webStorage.key(i)) && 'ngStorage-' === k.slice(0, 10) && ($storage[k.slice(10)] = angular.fromJson(webStorage.getItem(k)));
	                }

	                _last$storage = angular.copy($storage);

	                $rootScope.$watch(function() {
	                    var temp$storage;
	                    _debounce || (_debounce = $timeout(function() {
	                        _debounce = null;

	                        if (!angular.equals($storage, _last$storage)) {
	                            temp$storage = angular.copy(_last$storage);
	                            angular.forEach($storage, function(v, k) {
	                                angular.isDefined(v) && '$' !== k[0] && webStorage.setItem('ngStorage-' + k, angular.toJson(v));

	                                delete temp$storage[k];
	                            });

	                            for (var k in temp$storage) {
	                                webStorage.removeItem('ngStorage-' + k);
	                            }

	                            _last$storage = angular.copy($storage);
	                        }
	                    }, 100, false));
	                });

	                // #6: Use `$window.addEventListener` instead of `angular.element` to avoid the jQuery-specific `event.originalEvent`
	                'localStorage' === storageType && $window.addEventListener && $window.addEventListener('storage', function(event) {
	                    if ('ngStorage-' === event.key.slice(0, 10)) {
	                        event.newValue ? $storage[event.key.slice(10)] = angular.fromJson(event.newValue) : delete $storage[event.key.slice(10)];

	                        _last$storage = angular.copy($storage);

	                        $rootScope.$apply();
	                    }
	                });

	                return $storage;
	            }
	        ];
	    }

	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5)(__webpack_require__(9))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "/**\n * oclazyload - Load modules on demand (lazy load) with angularJS\n * @version v1.0.1\n * @link https://github.com/ocombe/ocLazyLoad\n * @license MIT\n * @author Olivier Combe <olivier.combe@gmail.com>\n */\n!function(e,n){\"use strict\";var r=[\"ng\",\"oc.lazyLoad\"],o={},t=[],i=[],a=[],s=e.noop,u={},c=[],l=e.module(\"oc.lazyLoad\",[\"ng\"]);l.provider(\"$ocLazyLoad\",[\"$controllerProvider\",\"$provide\",\"$compileProvider\",\"$filterProvider\",\"$injector\",\"$animateProvider\",function(l,d,g,p,m,v){function y(n,o,t){if(o){var i,a,l,d=[];for(i=o.length-1;i>=0;i--)if(a=o[i],e.isString(a)||(a=j(a)),a&&-1===c.indexOf(a)){var f=-1===r.indexOf(a);if(l=h(a),f&&(r.push(a),y(n,l.requires,t)),l._runBlocks.length>0)for(u[a]=[];l._runBlocks.length>0;)u[a].push(l._runBlocks.shift());e.isDefined(u[a])&&(f||t.rerun)&&(d=d.concat(u[a])),$(n,l._invokeQueue,a,t.reconfig),$(n,l._configBlocks,a,t.reconfig),s(f?\"ocLazyLoad.moduleLoaded\":\"ocLazyLoad.moduleReloaded\",a),o.pop(),c.push(a)}var g=n.getInstanceInjector();e.forEach(d,function(e){g.invoke(e)})}}function L(n,r){function t(n){return e.isArray(n)?D(n.toString()):e.isObject(n)?D(z(n)):e.isDefined(n)&&null!==n?D(n.toString()):n}var i=n[2][0],a=n[1],u=!1;e.isUndefined(o[r])&&(o[r]={}),e.isUndefined(o[r][a])&&(o[r][a]={});var c=function(e,n){o[r][a].hasOwnProperty(e)||(o[r][a][e]=[]),-1===o[r][a][e].indexOf(n)&&(u=!0,o[r][a][e].push(n),s(\"ocLazyLoad.componentLoaded\",[r,a,e]))};if(e.isString(i))c(i,t(n[2][1]));else{if(!e.isObject(i))return!1;e.forEach(i,function(n,r){e.isString(n)?c(n,t(i[1])):c(r,t(n))})}return u}function $(n,r,o,i){if(r){var a,s,u,c;for(a=0,s=r.length;s>a;a++)if(u=r[a],e.isArray(u)){if(null!==n){if(!n.hasOwnProperty(u[0]))throw new Error(\"unsupported provider \"+u[0]);c=n[u[0]]}var l=L(u,o);if(\"invoke\"!==u[1])l&&e.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var d=function(n){var r=t.indexOf(\"\"+o+\"-\"+n);(-1===r||i)&&(-1===r&&t.push(\"\"+o+\"-\"+n),e.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(e.isFunction(u[2][0]))d(u[2][0]);else if(e.isArray(u[2][0]))for(var f=0,h=u[2][0].length;h>f;f++)e.isFunction(u[2][0][f])&&d(u[2][0][f])}}}}function j(n){var r=null;return e.isString(n)?r=n:e.isObject(n)&&n.hasOwnProperty(\"name\")&&e.isString(n.name)&&(r=n.name),r}function E(n){if(!e.isString(n))return!1;try{return h(n)}catch(r){if(/No module/.test(r)||r.message.indexOf(\"$injector:nomod\")>-1)return!1}}var _={},w={$controllerProvider:l,$compileProvider:g,$filterProvider:p,$provide:d,$injector:m,$animateProvider:v},O=!1,b=!1,x=[];x.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(n){e.isDefined(n.modules)&&(e.isArray(n.modules)?e.forEach(n.modules,function(e){_[e.name]=e}):_[n.modules.name]=n.modules),e.isDefined(n.debug)&&(O=n.debug),e.isDefined(n.events)&&(b=n.events)},this._init=function(o){if(0===i.length){var t=[o],s=[\"ng:app\",\"ng-app\",\"x-ng-app\",\"data-ng-app\"],u=/\\sng[:\\-]app(:\\s*([\\w\\d_]+);?)?\\s/,c=function(e){return e&&t.push(e)};e.forEach(s,function(n){s[n]=!0,c(document.getElementById(n)),n=n.replace(\":\",\"\\\\:\"),o[0].querySelectorAll&&(e.forEach(o[0].querySelectorAll(\".\"+n),c),e.forEach(o[0].querySelectorAll(\".\"+n+\"\\\\:\"),c),e.forEach(o[0].querySelectorAll(\"[\"+n+\"]\"),c))}),e.forEach(t,function(n){if(0===i.length){var r=\" \"+o.className+\" \",t=u.exec(r);t?i.push((t[2]||\"\").replace(/\\s+/g,\",\")):e.forEach(n.attributes,function(e){0===i.length&&s[e.name]&&i.push(e.value)})}})}0!==i.length||(n.jasmine||n.mocha)&&e.isDefined(e.mock)||console.error(\"No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.\");var l=function d(n){if(-1===r.indexOf(n)){r.push(n);var o=e.module(n);$(null,o._invokeQueue,n),$(null,o._configBlocks,n),e.forEach(o.requires,d)}};e.forEach(i,function(e){l(e)}),i=[],a.pop()};var z=function(n){var r=[];return JSON.stringify(n,function(n,o){if(e.isObject(o)&&null!==o){if(-1!==r.indexOf(o))return;r.push(o)}return o})},D=function(e){var n,r,o,t=0;if(0==e.length)return t;for(n=0,o=e.length;o>n;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t|=0;return t};this.$get=[\"$log\",\"$rootElement\",\"$rootScope\",\"$cacheFactory\",\"$q\",function(n,o,t,u,l){function d(e){var r=l.defer();return n.error(e.message),r.reject(e),r.promise}var g,p=u(\"ocLazyLoad\");return O||(n={},n.error=e.noop,n.warn=e.noop,n.info=e.noop),w.getInstanceInjector=function(){return g?g:g=o.data(\"$injector\")||e.injector()},s=function(e,r){b&&t.$broadcast(e,r),O&&n.info(e,r)},{_broadcast:s,_$log:n,_getFilesCache:function(){return p},toggleWatch:function(e){e?a.push(!0):a.pop()},getModuleConfig:function(n){if(!e.isString(n))throw new Error(\"You need to give the name of the module to get\");return _[n]?e.copy(_[n]):null},setModuleConfig:function(n){if(!e.isObject(n))throw new Error(\"You need to give the module config object to set\");return _[n.name]=n,n},getModules:function(){return r},isLoaded:function(n){var o=function(e){var n=r.indexOf(e)>-1;return n||(n=!!E(e)),n};if(e.isString(n)&&(n=[n]),e.isArray(n)){var t,i;for(t=0,i=n.length;i>t;t++)if(!o(n[t]))return!1;return!0}throw new Error(\"You need to define the module(s) name(s)\")},_getModuleName:j,_getModule:function(e){try{return h(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf(\"$injector:nomod\")>-1)&&(n.message='The module \"'+z(e)+'\" that you are trying to load does not exist. '+n.message),n}},moduleExists:E,_loadDependencies:function(n,r){var o,t,i,a=[],s=this;if(n=s._getModuleName(n),null===n)return l.when();try{o=s._getModule(n)}catch(u){return d(u)}return t=s.getRequires(o),e.forEach(t,function(o){if(e.isString(o)){var t=s.getModuleConfig(o);if(null===t)return void x.push(o);o=t}if(s.moduleExists(o.name))return i=o.files.filter(function(e){return s.getModuleConfig(o.name).files.indexOf(e)<0}),0!==i.length&&s._$log.warn('Module \"',n,'\" attempted to redefine configuration for dependency. \"',o.name,'\"\\n Additional Files Loaded:',i),e.isDefined(s.filesLoader)?void a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)})):d(new Error(\"Error: New dependencies need to be loaded from external files (\"+o.files+\"), but no loader has been defined.\"));if(e.isArray(o)?o={files:o}:e.isObject(o)&&o.hasOwnProperty(\"name\")&&o.name&&(s.setModuleConfig(o),x.push(o.name)),e.isDefined(o.files)&&0!==o.files.length){if(!e.isDefined(s.filesLoader))return d(new Error('Error: the module \"'+o.name+'\" is defined in external files ('+o.files+\"), but no loader has been defined.\"));a.push(s.filesLoader(o,r).then(function(){return s._loadDependencies(o)}))}}),l.all(a)},inject:function(n){var r=void 0===arguments[1]?{}:arguments[1],o=this,t=l.defer();if(e.isDefined(n)&&null!==n){if(e.isArray(n)){var a=[];return e.forEach(n,function(e){a.push(o.inject(e))}),l.all(a)}o._addToLoadList(o._getModuleName(n),!0)}if(i.length>0){var s=i.slice(),u=function d(e){x.push(e),o._loadDependencies(e,r).then(function(){try{c=[],y(w,x,r)}catch(e){return o._$log.error(e.message),void t.reject(e)}i.length>0?d(i.shift()):t.resolve(s)},function(e){t.reject(e)})};u(i.shift())}else t.resolve();return t.promise},getRequires:function(n){var o=[];return e.forEach(n.requires,function(e){-1===r.indexOf(e)&&o.push(e)}),o},_invokeQueue:$,_registerInvokeList:L,_register:y,_addToLoadList:f}}],this._init(e.element(n.document))}]);var d=e.bootstrap;e.bootstrap=function(n,r,o){return e.forEach(r.slice(),function(e){f(e,!0)}),d(n,r,o)};var f=function(n,r){(a.length>0||r)&&e.isString(n)&&-1===i.indexOf(n)&&i.push(n)},h=e.module;e.module=function(e,n,r){return f(e),h(e,n,r)}}(angular,window),function(e){\"use strict\";e.module(\"oc.lazyLoad\").directive(\"ocLazyLoad\",[\"$ocLazyLoad\",\"$compile\",\"$animate\",\"$parse\",function(n,r,o,t){return{restrict:\"A\",terminal:!0,priority:1e3,compile:function(i){var a=i[0].innerHTML;return i.html(\"\"),function(s,u,c){var l=t(c.ocLazyLoad);s.$watch(function(){return l(s)||c.ocLazyLoad},function(t){e.isDefined(t)&&n.load(t).then(function(){o.enter(a,u);var n=i.contents();e.forEach(n,function(e){3!==e.nodeType&&r(e)(s)})})},!0)}}}}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",\"$window\",\"$interval\",function(n,r,o,t){var i=!1,a=!1,s=o.document.getElementsByTagName(\"head\")[0]||o.document.getElementsByTagName(\"body\")[0];return n.buildElement=function(u,c,l){var d,f,h=r.defer(),g=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf(\"?\")>=0?\"&\"===e.substring(0,e.length-1)?\"\"+e+\"_dc=\"+n:\"\"+e+\"&_dc=\"+n:\"\"+e+\"?_dc=\"+n};switch(e.isUndefined(g.get(c))&&g.put(c,h.promise),u){case\"css\":d=o.document.createElement(\"link\"),d.type=\"text/css\",d.rel=\"stylesheet\",d.href=l.cache===!1?p(c):c;break;case\"js\":d=o.document.createElement(\"script\"),d.src=l.cache===!1?p(c):c;break;default:g.remove(c),h.reject(new Error('Requested type \"'+u+'\" is not known. Could not inject \"'+c+'\"'))}d.onload=d.onreadystatechange=function(){d.readyState&&!/^c|loade/.test(d.readyState)||f||(d.onload=d.onreadystatechange=null,f=1,n._broadcast(\"ocLazyLoad.fileLoaded\",c),h.resolve())},d.onerror=function(){g.remove(c),h.reject(new Error(\"Unable to load \"+c))},d.async=l.serie?0:1;var m=s.lastChild;if(l.insertBefore){var v=e.element(e.isDefined(window.jQuery)?l.insertBefore:document.querySelector(l.insertBefore));v&&v.length>0&&(m=v[0])}if(m.parentNode.insertBefore(d,m),\"css\"==u){if(!i){var y=o.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(o.navigator.platform)){var L=o.navigator.appVersion.match(/OS (\\d+)_(\\d+)_?(\\d+)?/),$=parseFloat([parseInt(L[1],10),parseInt(L[2],10),parseInt(L[3]||0,10)].join(\".\"));a=6>$}else if(y.indexOf(\"android\")>-1){var j=parseFloat(y.slice(y.indexOf(\"android\")+8));a=4.4>j}else if(y.indexOf(\"safari\")>-1){var E=y.match(/version\\/([\\.\\d]+)/i);a=E&&E[1]&&parseFloat(E[1])<6}}if(a)var _=1e3,w=t(function(){try{d.sheet.cssRules,t.cancel(w),d.onload()}catch(e){--_<=0&&d.onerror()}},20)}return h.promise},n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.filesLoader=function(o){var t=void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,o);var d=function(r){var o,d=null;if(e.isObject(r)&&(d=r.type,r=r.path),c=l.get(r),e.isUndefined(c)||t.cache===!1){if(null!==(o=/^(css|less|html|htm|js)?(?=!)/.exec(r))&&(d=o[1],r=r.substr(o[1].length+1,r.length)),!d)if(null!==(o=/[.](css|less|html|htm|js)?((\\?|#).*)?$/.exec(r)))d=o[1];else{if(n.jsLoader.hasOwnProperty(\"ocLazyLoadLoader\")||!n.jsLoader.hasOwnProperty(\"load\"))return void n._$log.error(\"File type could not be determined. \"+r);d=\"js\"}\"css\"!==d&&\"less\"!==d||-1!==i.indexOf(r)?\"html\"!==d&&\"htm\"!==d||-1!==a.indexOf(r)?\"js\"===d||-1===s.indexOf(r)?s.push(r):n._$log.error(\"File type is not valid. \"+r):a.push(r):i.push(r)}else c&&u.push(c)};if(t.serie?d(t.files.shift()):e.forEach(t.files,function(e){d(e)}),i.length>0){var f=r.defer();n.cssLoader(i,function(r){e.isDefined(r)&&n.cssLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),f.reject(r)):f.resolve()},t),u.push(f.promise)}if(a.length>0){var h=r.defer();n.templatesLoader(a,function(r){e.isDefined(r)&&n.templatesLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),h.reject(r)):h.resolve()},t),u.push(h.promise)}if(s.length>0){var g=r.defer();n.jsLoader(s,function(r){e.isDefined(r)&&n.jsLoader.hasOwnProperty(\"ocLazyLoadLoader\")?(n._$log.error(r),g.reject(r)):g.resolve()},t),u.push(g.promise)}if(0===u.length){var p=r.defer(),m=\"Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.\";return n._$log.error(m),p.reject(m),p.promise}return t.serie&&t.files.length>0?r.all(u).then(function(){return n.filesLoader(o,t)}):r.all(u)[\"finally\"](function(e){return n.toggleWatch(!1),e})},n.load=function(o){var t,i=void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=r.defer(),l=e.copy(o),d=e.copy(i);if(e.isArray(l))return e.forEach(l,function(e){u.push(a.load(e,d))}),r.all(u).then(function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l),s||(s={files:[l]})):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var f=a._getModuleName(l);return t='Module \"'+(f||\"unknown\")+'\" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},d,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h):(n.filesLoader(s,h).then(function(){n.inject(null,h).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)}),c.promise)},n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.cssLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement(\"css\",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$q\",function(n,r){return n.jsLoader=function(o,t,i){var a=[];e.forEach(o,function(e){a.push(n.buildElement(\"js\",e,i))}),r.all(a).then(function(){t()},function(e){t(e)})},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){\"use strict\";e.module(\"oc.lazyLoad\").config([\"$provide\",function(n){n.decorator(\"$ocLazyLoad\",[\"$delegate\",\"$templateCache\",\"$q\",\"$http\",function(n,r,o,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,function(n){var i=o.defer();u.push(i.promise),t.get(n,s).success(function(o){e.isString(o)&&o.length>0&&e.forEach(e.element(o),function(e){\"SCRIPT\"===e.nodeName&&\"text/ng-template\"===e.type&&r.put(e.id,e.innerHTML)}),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()}).error(function(e){i.reject(new Error('Unable to load template file \"'+n+'\": '+e))})}),o.all(u).then(function(){a()},function(e){a(e)})},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var r;if(null==this)throw new TypeError('\"this\" is null or not defined');var o=Object(this),t=o.length>>>0;if(0===t)return-1;var i=+n||0;if(1/0===Math.abs(i)&&(i=0),i>=t)return-1;for(r=Math.max(i>=0?i:t-Math.abs(i),0);t>r;){if(r in o&&o[r]===e)return r;r++}return-1});\n//# sourceMappingURL=ocLazyLoad.min.js.map"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//! api-check version 7.5.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (http://kent.doddsfamily.us) (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["apiCheck"] = factory();
		else
			root["apiCheck"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

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


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _apiCheck = __webpack_require__(1);

		var _apiCheck2 = _interopRequireDefault(_apiCheck);

		exports['default'] = _apiCheck2['default'];
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var stringify = __webpack_require__(2);
		var apiCheckUtil = __webpack_require__(3);
		var each = apiCheckUtil.each;
		var isError = apiCheckUtil.isError;
		var t = apiCheckUtil.t;
		var arrayify = apiCheckUtil.arrayify;
		var getCheckerDisplay = apiCheckUtil.getCheckerDisplay;
		var typeOf = apiCheckUtil.typeOf;
		var getError = apiCheckUtil.getError;

		var checkers = __webpack_require__(4);
		var apiCheckApis = getApiCheckApis();

		module.exports = getApiCheckInstance;
		module.exports.VERSION = ("7.5.0");
		module.exports.utils = apiCheckUtil;
		module.exports.globalConfig = {
		  verbose: false,
		  disabled: false
		};

		var apiCheckApiCheck = getApiCheckInstance({
		  output: { prefix: 'apiCheck' }
		});
		module.exports.internalChecker = apiCheckApiCheck;

		each(checkers, function (checker, name) {
		  return module.exports[name] = checker;
		});

		function getApiCheckInstance() {
		  var config = arguments[0] === undefined ? {} : arguments[0];
		  var extraCheckers = arguments[1] === undefined ? {} : arguments[1];

		  /* eslint complexity:[2, 6] */
		  if (apiCheckApiCheck && arguments.length) {
		    apiCheckApiCheck['throw'](apiCheckApis.getApiCheckInstanceCheckers, arguments, {
		      prefix: 'creating an apiCheck instance'
		    });
		  }

		  var additionalProperties = {
		    'throw': getApiCheck(true),
		    warn: getApiCheck(false),
		    getErrorMessage: getErrorMessage,
		    handleErrorMessage: handleErrorMessage,
		    config: {
		      output: config.output || {
		        prefix: '',
		        suffix: '',
		        docsBaseUrl: ''
		      },
		      verbose: config.verbose || false,
		      disabled: config.disabled || false
		    },
		    utils: apiCheckUtil
		  };

		  each(additionalProperties, function (wrapper, name) {
		    return apiCheck[name] = wrapper;
		  });

		  var disabled = apiCheck.disabled || module.exports.globalConfig.disabled;
		  each(checkers.getCheckers(disabled), function (checker, name) {
		    return apiCheck[name] = checker;
		  });
		  each(extraCheckers, function (checker, name) {
		    return apiCheck[name] = checker;
		  });

		  return apiCheck;

		  /**
		   * This is the instance function. Other things are attached to this see additional properties above.
		   * @param api {Array}
		   * @param args {arguments}
		   * @param output {Object}
		   * @returns {Object} - if this has a failed = true property, then it failed
		   */
		  function apiCheck(api, args, output) {
		    /* eslint complexity:[2, 8] */
		    if (apiCheck.config.disabled || module.exports.globalConfig.disabled) {
		      return {
		        apiTypes: {}, argTypes: {},
		        passed: true, message: '',
		        failed: false
		      }; // empty version of what is normally returned
		    }
		    checkApiCheckApi(arguments);
		    if (!Array.isArray(api)) {
		      api = [api];
		      args = [args];
		    } else {
		      // turn arguments into an array
		      args = Array.prototype.slice.call(args);
		    }
		    var messages = checkEnoughArgs(api, args);
		    if (!messages.length) {
		      // this is where we actually go perform the checks.
		      messages = checkApiWithArgs(api, args);
		    }

		    var returnObject = getTypes(api, args);
		    returnObject.args = args;
		    if (messages.length) {
		      returnObject.message = apiCheck.getErrorMessage(api, args, messages, output);
		      returnObject.failed = true;
		      returnObject.passed = false;
		    } else {
		      returnObject.message = '';
		      returnObject.failed = false;
		      returnObject.passed = true;
		    }
		    return returnObject;
		  }

		  /**
		   * checkApiCheckApi, should be read like: check apiCheck api. As in, check the api for apiCheck :-)
		   * @param checkApiArgs
		   */
		  function checkApiCheckApi(checkApiArgs) {
		    var api = checkApiArgs[0];
		    var args = checkApiArgs[1];
		    var isArrayOrArgs = Array.isArray(args) || args && typeof args === 'object' && typeof args.length === 'number';

		    if (Array.isArray(api) && !isArrayOrArgs) {
		      throw new Error(getErrorMessage(api, [args], ['If an array is provided for the api, an array must be provided for the args as well.'], { prefix: 'apiCheck' }));
		    }
		    // dog fooding here
		    var errors = checkApiWithArgs(apiCheckApis.checkApiCheckApi, checkApiArgs);
		    if (errors.length) {
		      var message = apiCheck.getErrorMessage(apiCheckApis.checkApiCheckApi, checkApiArgs, errors, {
		        prefix: 'apiCheck'
		      });
		      apiCheck.handleErrorMessage(message, true);
		    }
		  }

		  function getApiCheck(shouldThrow) {
		    return function apiCheckWrapper(api, args, output) {
		      var result = apiCheck(api, args, output);
		      apiCheck.handleErrorMessage(result.message, shouldThrow);
		      return result; // wont get here if an error is thrown
		    };
		  }

		  function handleErrorMessage(message, shouldThrow) {
		    if (shouldThrow && message) {
		      throw new Error(message);
		    } else if (message) {
		      /* eslint no-console:0 */
		      console.warn(message);
		    }
		  }

		  function getErrorMessage(api, args) {
		    var messages = arguments[2] === undefined ? [] : arguments[2];
		    var output = arguments[3] === undefined ? {} : arguments[3];

		    var gOut = apiCheck.config.output || {};
		    var prefix = getPrefix();
		    var suffix = getSuffix();
		    var url = getUrl();
		    var message = 'apiCheck failed! ' + messages.join(', ');
		    var passedAndShouldHavePassed = '\n\n' + buildMessageFromApiAndArgs(api, args);
		    return ('' + prefix + ' ' + message + ' ' + suffix + ' ' + (url || '') + '' + passedAndShouldHavePassed).trim();

		    function getPrefix() {
		      var p = output.onlyPrefix;
		      if (!p) {
		        p = ('' + (gOut.prefix || '') + ' ' + (output.prefix || '')).trim();
		      }
		      return p;
		    }

		    function getSuffix() {
		      var s = output.onlySuffix;
		      if (!s) {
		        s = ('' + (output.suffix || '') + ' ' + (gOut.suffix || '')).trim();
		      }
		      return s;
		    }

		    function getUrl() {
		      var u = output.url;
		      if (!u) {
		        u = gOut.docsBaseUrl && output.urlSuffix && ('' + gOut.docsBaseUrl + '' + output.urlSuffix).trim();
		      }
		      return u;
		    }
		  }

		  function buildMessageFromApiAndArgs(api, args) {
		    var _getTypes = getTypes(api, args);

		    var apiTypes = _getTypes.apiTypes;
		    var argTypes = _getTypes.argTypes;

		    var copy = Array.prototype.slice.call(args || []);
		    var replacedItems = [];
		    replaceFunctionWithName(copy);
		    var passedArgs = getObjectString(copy);
		    argTypes = getObjectString(argTypes);
		    apiTypes = getObjectString(apiTypes);

		    return generateMessage();

		    // functions

		    function replaceFunctionWithName(obj) {
		      each(obj, function (val, name) {
		        /* eslint complexity:[2, 6] */
		        if (replacedItems.indexOf(val) === -1) {
		          // avoid recursive problems
		          replacedItems.push(val);
		          if (typeof val === 'object') {
		            replaceFunctionWithName(obj);
		          } else if (typeof val === 'function') {
		            obj[name] = val.displayName || val.name || 'anonymous function';
		          }
		        }
		      });
		    }

		    function getObjectString(types) {
		      if (!types || !types.length) {
		        return 'nothing';
		      } else if (types && types.length === 1) {
		        types = types[0];
		      }
		      return stringify(types, null, 2);
		    }

		    function generateMessage() {
		      var n = '\n';
		      var useS = true;
		      if (args && args.length === 1) {
		        if (typeof args[0] === 'object' && args[0] !== null) {
		          useS = !!Object.keys(args[0]).length;
		        } else {
		          useS = false;
		        }
		      }
		      var types = 'type' + (useS ? 's' : '');
		      var newLine = n + n;
		      return 'You passed:' + n + '' + passedArgs + '' + newLine + ('With the ' + types + ':' + n + '' + argTypes + '' + newLine) + ('The API calls for:' + n + '' + apiTypes);
		    }
		  }

		  function getTypes(api, args) {
		    api = arrayify(api);
		    args = arrayify(args);
		    var apiTypes = api.map(function (checker, index) {
		      var specified = module.exports.globalConfig.hasOwnProperty('verbose');
		      return getCheckerDisplay(checker, {
		        terse: specified ? !module.exports.globalConfig.verbose : !apiCheck.config.verbose,
		        obj: args[index],
		        addHelpers: true
		      });
		    });
		    var argTypes = args.map(function (arg) {
		      return getArgDisplay(arg, []);
		    });
		    return { argTypes: argTypes, apiTypes: apiTypes };
		  }
		}

		// STATELESS FUNCTIONS

		/**
		 * This is where the magic happens for actually checking the arguments with the api.
		 * @param api {Array} - checkers
		 * @param args {Array} - and arguments object
		 * @returns {Array}
		 */
		function checkApiWithArgs(api, args) {
		  /* eslint complexity:[2, 7] */
		  var messages = [];
		  var failed = false;
		  var checkerIndex = 0;
		  var argIndex = 0;
		  var arg = undefined,
		      checker = undefined,
		      res = undefined,
		      lastChecker = undefined,
		      argName = undefined,
		      argFailed = undefined,
		      skipPreviousChecker = undefined;
		  /* jshint -W084 */
		  while ((checker = api[checkerIndex++]) && argIndex < args.length) {
		    arg = args[argIndex++];
		    argName = 'Argument ' + argIndex + (checker.isOptional ? ' (optional)' : '');
		    res = checker(arg, 'value', argName);
		    argFailed = isError(res);
		    lastChecker = checkerIndex >= api.length;
		    skipPreviousChecker = checkerIndex > 1 && api[checkerIndex - 1].isOptional;
		    if (argFailed && lastChecker || argFailed && !lastChecker && !checker.isOptional && !skipPreviousChecker) {
		      failed = true;
		      messages.push(getCheckerErrorMessage(res, checker, arg));
		    } else if (argFailed && checker.isOptional) {
		      argIndex--;
		    } else {
		      messages.push('' + t(argName) + ' passed');
		    }
		  }
		  return failed ? messages : [];
		}

		checkerTypeType.type = 'function with __apiCheckData property and `${function.type}` property';
		function checkerTypeType(checkerType, name, location) {
		  var apiCheckDataChecker = checkers.shape({
		    type: checkers.string,
		    optional: checkers.bool
		  });
		  var asFunc = checkers.func.withProperties({ __apiCheckData: apiCheckDataChecker });
		  var asShape = checkers.shape({ __apiCheckData: apiCheckDataChecker });
		  var wrongShape = checkers.oneOfType([asFunc, asShape])(checkerType, name, location);
		  if (isError(wrongShape)) {
		    return wrongShape;
		  }
		  if (typeof checkerType !== 'function' && !checkerType.hasOwnProperty(checkerType.__apiCheckData.type)) {
		    return getError(name, location, checkerTypeType.type);
		  }
		}

		function getCheckerErrorMessage(res, checker, val) {
		  var checkerHelp = getCheckerHelp(checker, val);
		  checkerHelp = checkerHelp ? ' - ' + checkerHelp : '';
		  return res.message + checkerHelp;
		}

		function getCheckerHelp(_ref, val) {
		  var help = _ref.help;

		  if (!help) {
		    return '';
		  }
		  if (typeof help === 'function') {
		    help = help(val);
		  }
		  return help;
		}

		function checkEnoughArgs(api, args) {
		  var requiredArgs = api.filter(function (a) {
		    return !a.isOptional;
		  });
		  if (args.length < requiredArgs.length) {
		    return ['Not enough arguments specified. Requires `' + requiredArgs.length + '`, you passed `' + args.length + '`'];
		  } else {
		    return [];
		  }
		}

		function getArgDisplay(arg, gottenArgs) {
		  /* eslint complexity:[2, 7] */
		  var cName = arg && arg.constructor && arg.constructor.name;
		  var type = typeOf(arg);
		  if (type === 'function') {
		    if (hasKeys()) {
		      var properties = stringify(getDisplayIfNotGotten());
		      return cName + ' (with properties: ' + properties + ')';
		    }
		    return cName;
		  }

		  if (arg === null) {
		    return 'null';
		  }

		  if (type !== 'array' && type !== 'object') {
		    return type;
		  }

		  if (hasKeys()) {
		    return getDisplayIfNotGotten();
		  }

		  return cName;

		  // utility functions
		  function hasKeys() {
		    return arg && Object.keys(arg).length;
		  }

		  function getDisplayIfNotGotten() {
		    if (gottenArgs.indexOf(arg) !== -1) {
		      return '[Circular]';
		    }
		    gottenArgs.push(arg);
		    return getDisplay(arg, gottenArgs);
		  }
		}

		function getDisplay(obj, gottenArgs) {
		  var argDisplay = {};
		  each(obj, function (v, k) {
		    return argDisplay[k] = getArgDisplay(v, gottenArgs);
		  });
		  return argDisplay;
		}

		function getApiCheckApis() {
		  var os = checkers.string.optional;

		  var checkerFnChecker = checkers.func.withProperties({
		    type: checkers.oneOfType([checkers.string, checkerTypeType]).optional,
		    displayName: checkers.string.optional,
		    shortType: checkers.string.optional,
		    notOptional: checkers.bool.optional,
		    notRequired: checkers.bool.optional
		  });

		  var getApiCheckInstanceCheckers = [checkers.shape({
		    output: checkers.shape({
		      prefix: checkers.string.optional,
		      suffix: checkers.string.optional,
		      docsBaseUrl: checkers.string.optional
		    }).strict.optional,
		    verbose: checkers.bool.optional,
		    disabled: checkers.bool.optional
		  }).strict.optional, checkers.objectOf(checkerFnChecker).optional];

		  var checkApiCheckApi = [checkers.typeOrArrayOf(checkerFnChecker), checkers.any.optional, checkers.shape({
		    prefix: os, suffix: os, urlSuffix: os, // appended case
		    onlyPrefix: os, onlySuffix: os, url: os // override case
		  }).strict.optional];

		  return {
		    checkerFnChecker: checkerFnChecker,
		    getApiCheckInstanceCheckers: getApiCheckInstanceCheckers,
		    checkApiCheckApi: checkApiCheckApi
		  };
		}

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = stringify;

		function getSerialize (fn, decycle) {
		  var seen = [], keys = [];
		  decycle = decycle || function(key, value) {
		    return '[Circular ' + getPath(value, seen, keys) + ']'
		  };
		  return function(key, value) {
		    var ret = value;
		    if (typeof value === 'object' && value) {
		      if (seen.indexOf(value) !== -1)
		        ret = decycle(key, value);
		      else {
		        seen.push(value);
		        keys.push(key);
		      }
		    }
		    if (fn) ret = fn(key, ret);
		    return ret;
		  }
		}

		function getPath (value, seen, keys) {
		  var index = seen.indexOf(value);
		  var path = [ keys[index] ];
		  for (index--; index >= 0; index--) {
		    if (seen[index][ path[0] ] === value) {
		      value = seen[index];
		      path.unshift(keys[index]);
		    }
		  }
		  return '~' + path.join('.');
		}

		function stringify(obj, fn, spaces, decycle) {
		  return JSON.stringify(obj, getSerialize(fn, decycle), spaces);
		}

		stringify.getSerialize = getSerialize;


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

		var stringify = __webpack_require__(2);
		var checkerHelpers = {
		  addOptional: addOptional, getRequiredVersion: getRequiredVersion, setupChecker: setupChecker, addNullable: addNullable
		};

		module.exports = {
		  each: each, copy: copy, typeOf: typeOf, arrayify: arrayify, getCheckerDisplay: getCheckerDisplay,
		  isError: isError, list: list, getError: getError, nAtL: nAtL, t: t, undef: undef, checkerHelpers: checkerHelpers,
		  noop: noop
		};

		function copy(obj) {
		  var type = typeOf(obj);
		  var daCopy = undefined;
		  if (type === 'array') {
		    daCopy = [];
		  } else if (type === 'object') {
		    daCopy = {};
		  } else {
		    return obj;
		  }
		  each(obj, function (val, key) {
		    daCopy[key] = val; // cannot single-line this because we don't want to abort the each
		  });
		  return daCopy;
		}

		function typeOf(obj) {
		  if (Array.isArray(obj)) {
		    return 'array';
		  } else if (obj instanceof RegExp) {
		    return 'object';
		  } else {
		    return typeof obj;
		  }
		}

		function getCheckerDisplay(checker, options) {
		  /* eslint complexity:[2, 7] */
		  var display = undefined;
		  var short = options && options.short;
		  if (short && checker.shortType) {
		    display = checker.shortType;
		  } else if (!short && typeof checker.type === 'object' || checker.type === 'function') {
		    display = getCheckerType(checker, options);
		  } else {
		    display = getCheckerType(checker, options) || checker.displayName || checker.name;
		  }
		  return display;
		}

		function getCheckerType(_ref, options) {
		  var type = _ref.type;

		  if (typeof type === 'function') {
		    var __apiCheckData = type.__apiCheckData;
		    var typeTypes = type(options);
		    type = _defineProperty({
		      __apiCheckData: __apiCheckData
		    }, __apiCheckData.type, typeTypes);
		  }
		  return type;
		}

		function arrayify(obj) {
		  if (!obj) {
		    return [];
		  } else if (Array.isArray(obj)) {
		    return obj;
		  } else {
		    return [obj];
		  }
		}

		function each(obj, iterator, context) {
		  if (Array.isArray(obj)) {
		    return eachArry.apply(undefined, arguments);
		  } else {
		    return eachObj.apply(undefined, arguments);
		  }
		}

		function eachObj(obj, iterator, context) {
		  var ret;
		  var hasOwn = Object.prototype.hasOwnProperty;
		  for (var key in obj) {
		    if (hasOwn.call(obj, key)) {
		      ret = iterator.call(context, obj[key], key, obj);
		      if (ret === false) {
		        return ret;
		      }
		    }
		  }
		  return true;
		}

		function eachArry(obj, iterator, context) {
		  var ret;
		  var length = obj.length;
		  for (var i = 0; i < length; i++) {
		    ret = iterator.call(context, obj[i], i, obj);
		    if (ret === false) {
		      return ret;
		    }
		  }
		  return true;
		}

		function isError(obj) {
		  return obj instanceof Error;
		}

		function list(arry, join, finalJoin) {
		  arry = arrayify(arry);
		  var copy = arry.slice();
		  var last = copy.pop();
		  if (copy.length === 1) {
		    join = ' ';
		  }
		  return copy.join(join) + ('' + (copy.length ? join + finalJoin : '') + '' + last);
		}

		function getError(name, location, checkerType) {
		  if (typeof checkerType === 'function') {
		    checkerType = checkerType({ short: true });
		  }
		  var stringType = typeof checkerType !== 'object' ? checkerType : stringify(checkerType);
		  return new Error('' + nAtL(name, location) + ' must be ' + t(stringType));
		}

		function nAtL(name, location) {
		  var tName = t(name || 'value');
		  var tLocation = !location ? '' : ' at ' + t(location);
		  return '' + tName + '' + tLocation;
		}

		function t(thing) {
		  return '`' + thing + '`';
		}

		function undef(thing) {
		  return typeof thing === 'undefined';
		}

		/**
		 * This will set up the checker with all of the defaults that most checkers want like required by default and an
		 * optional version
		 * @param checker
		 * @param properties properties to add to the checker
		 * @param disabled - when set to true, this will set the checker to a no-op function
		 */
		function setupChecker(checker, properties, disabled) {
		  /* eslint complexity:[2, 9] */
		  if (disabled) {
		    // swap out the checker for its own copy of noop
		    checker = getNoop();
		    checker.isNoop = true;
		  }

		  if (typeof checker.type === 'string') {
		    checker.shortType = checker.type;
		  }

		  // assign all properties given
		  each(properties, function (prop, name) {
		    return checker[name] = prop;
		  });

		  if (!checker.displayName) {
		    checker.displayName = 'apiCheck ' + t(checker.shortType || checker.type || checker.name) + ' type checker';
		  }

		  if (!checker.notRequired) {
		    checker = getRequiredVersion(checker, disabled);
		  }

		  if (!checker.notNullable) {
		    addNullable(checker, disabled);
		  }

		  if (!checker.notOptional) {
		    addOptional(checker, disabled);
		  }

		  return checker;
		}

		function getRequiredVersion(checker, disabled) {
		  var requiredChecker = disabled ? getNoop() : function requiredChecker(val, name, location, obj) {
		    if (undef(val) && !checker.isOptional) {
		      var tLocation = location ? ' in ' + t(location) : '';
		      var type = getCheckerDisplay(checker, { short: true });
		      var stringType = typeof type !== 'object' ? type : stringify(type);
		      return new Error('Required ' + t(name) + ' not specified' + tLocation + '. Must be ' + t(stringType));
		    } else {
		      return checker(val, name, location, obj);
		    }
		  };
		  copyProps(checker, requiredChecker);
		  requiredChecker.originalChecker = checker;
		  return requiredChecker;
		}

		function addOptional(checker, disabled) {
		  var optionalCheck = disabled ? getNoop() : function optionalCheck(val, name, location, obj) {
		    if (!undef(val)) {
		      return checker(val, name, location, obj);
		    }
		  };
		  // inherit all properties on the original checker
		  copyProps(checker, optionalCheck);

		  optionalCheck.isOptional = true;
		  optionalCheck.displayName = checker.displayName + ' (optional)';
		  optionalCheck.originalChecker = checker;

		  // the magic line that allows you to add .optional to the end of the checkers
		  checker.optional = optionalCheck;

		  fixType(checker, checker.optional);
		}

		function addNullable(checker, disabled) {
		  var nullableCheck = disabled ? getNoop() : function nullableCheck(val, name, location, obj) {
		    if (val !== null) {
		      return checker(val, name, location, obj);
		    }
		  };
		  // inherit all properties on the original checker
		  copyProps(checker, nullableCheck);

		  nullableCheck.isNullable = true;
		  nullableCheck.displayName = checker.displayName + ' (nullable)';
		  nullableCheck.originalChecker = checker;

		  // the magic line that allows you to add .nullable to the end of the checkers
		  checker.nullable = nullableCheck;

		  fixType(checker, checker.nullable);
		  if (!checker.notOptional) {
		    addOptional(checker.nullable, disabled);
		  }
		}

		function fixType(checker, checkerCopy) {
		  // fix type, because it's not a straight copy...
		  // the reason is we need to specify type.__apiCheckData.optional as true for the terse/verbose option.
		  // we also want to add "(optional)" to the types with a string
		  if (typeof checkerCopy.type === 'object') {
		    checkerCopy.type = copy(checkerCopy.type); // make our own copy of this
		  } else if (typeof checkerCopy.type === 'function') {
		    checkerCopy.type = function () {
		      return checker.type.apply(checker, arguments);
		    };
		  } else {
		    checkerCopy.type += ' (optional)';
		    return;
		  }
		  checkerCopy.type.__apiCheckData = copy(checker.type.__apiCheckData) || {}; // and this
		  checkerCopy.type.__apiCheckData.optional = true;
		}

		// UTILS

		function copyProps(src, dest) {
		  each(Object.keys(src), function (key) {
		    return dest[key] = src[key];
		  });
		}

		function noop() {}

		function getNoop() {
		  /* eslint no-shadow:0 */
		  /* istanbul ignore next */
		  return function noop() {};
		}

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var stringify = __webpack_require__(2);

		var _require = __webpack_require__(3);

		var typeOf = _require.typeOf;
		var each = _require.each;
		var copy = _require.copy;
		var getCheckerDisplay = _require.getCheckerDisplay;
		var isError = _require.isError;
		var arrayify = _require.arrayify;
		var list = _require.list;
		var getError = _require.getError;
		var nAtL = _require.nAtL;
		var t = _require.t;
		var checkerHelpers = _require.checkerHelpers;
		var undef = _require.undef;
		var setupChecker = checkerHelpers.setupChecker;

		var checkers = module.exports = getCheckers();
		module.exports.getCheckers = getCheckers;

		function getCheckers(disabled) {
		  return {
		    array: typeOfCheckGetter('Array'),
		    bool: typeOfCheckGetter('Boolean'),
		    number: typeOfCheckGetter('Number'),
		    string: typeOfCheckGetter('String'),
		    func: funcCheckGetter(),
		    object: objectCheckGetter(),

		    emptyObject: emptyObjectCheckGetter(),

		    instanceOf: instanceCheckGetter,
		    oneOf: oneOfCheckGetter,
		    oneOfType: oneOfTypeCheckGetter,

		    arrayOf: arrayOfCheckGetter,
		    objectOf: objectOfCheckGetter,
		    typeOrArrayOf: typeOrArrayOfCheckGetter,

		    range: rangeCheckGetter,
		    lessThan: lessThanCheckGetter,
		    greaterThan: greaterThanCheckGetter,

		    shape: getShapeCheckGetter(),
		    args: argumentsCheckerGetter(),

		    any: anyCheckGetter(),
		    'null': nullCheckGetter()

		  };

		  function typeOfCheckGetter(type) {
		    var lType = type.toLowerCase();
		    return setupChecker(function typeOfCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== lType) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function funcCheckGetter() {
		    var type = 'Function';
		    var functionChecker = setupChecker(function functionCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== 'function') {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);

		    functionChecker.withProperties = function getWithPropertiesChecker(properties) {
		      var apiError = checkers.objectOf(checkers.func)(properties, 'properties', 'apiCheck.func.withProperties');
		      if (isError(apiError)) {
		        throw apiError;
		      }
		      var shapeChecker = checkers.shape(properties, true);
		      shapeChecker.type.__apiCheckData.type = 'func.withProperties';

		      return setupChecker(function functionWithPropertiesChecker(val, name, location) {
		        var notFunction = checkers.func(val, name, location);
		        if (isError(notFunction)) {
		          return notFunction;
		        }
		        return shapeChecker(val, name, location);
		      }, { type: shapeChecker.type, shortType: 'func.withProperties' }, disabled);
		    };
		    return functionChecker;
		  }

		  function objectCheckGetter() {
		    var type = 'Object';
		    var nullType = 'Object (null ok)';
		    var objectNullOkChecker = setupChecker(function objectNullOkCheckerDefinition(val, name, location) {
		      if (typeOf(val) !== 'object') {
		        return getError(name, location, nullType);
		      }
		    }, { type: nullType }, disabled);

		    var objectChecker = setupChecker(function objectCheckerDefinition(val, name, location) {
		      if (val === null || isError(objectNullOkChecker(val, name, location))) {
		        return getError(name, location, objectChecker.type);
		      }
		    }, { type: type, nullOk: objectNullOkChecker }, disabled);

		    return objectChecker;
		  }

		  function instanceCheckGetter(classToCheck) {
		    return setupChecker(function instanceCheckerDefinition(val, name, location) {
		      if (!(val instanceof classToCheck)) {
		        return getError(name, location, classToCheck.name);
		      }
		    }, { type: classToCheck.name }, disabled);
		  }

		  function oneOfCheckGetter(enums) {
		    var type = {
		      __apiCheckData: { optional: false, type: 'enum' },
		      'enum': enums
		    };
		    var shortType = 'oneOf[' + enums.map(function (enm) {
		      return stringify(enm);
		    }).join(', ') + ']';
		    return setupChecker(function oneOfCheckerDefinition(val, name, location) {
		      if (!enums.some(function (enm) {
		        return enm === val;
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function oneOfTypeCheckGetter(typeCheckers) {
		    var checkersDisplay = typeCheckers.map(function (checker) {
		      return getCheckerDisplay(checker, { short: true });
		    });
		    var shortType = 'oneOfType[' + checkersDisplay.join(', ') + ']';
		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return typeCheckers.map(function (checker) {
		        return getCheckerDisplay(checker, options);
		      });
		    }
		    type.__apiCheckData = { optional: false, type: 'oneOfType' };
		    return setupChecker(function oneOfTypeCheckerDefinition(val, name, location) {
		      if (!typeCheckers.some(function (checker) {
		        return !isError(checker(val, name, location));
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function arrayOfCheckGetter(checker) {
		    var shortCheckerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'arrayOf[' + shortCheckerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }
		    type.__apiCheckData = { optional: false, type: 'arrayOf' };

		    return setupChecker(function arrayOfCheckerDefinition(val, name, location) {
		      if (isError(checkers.array(val)) || !val.every(function (item) {
		        return !isError(checker(item));
		      })) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function objectOfCheckGetter(checker) {
		    var checkerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'objectOf[' + checkerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }
		    type.__apiCheckData = { optional: false, type: 'objectOf' };

		    return setupChecker(function objectOfCheckerDefinition(val, name, location) {
		      var notObject = checkers.object(val, name, location);
		      if (isError(notObject)) {
		        return notObject;
		      }
		      var allTypesSuccess = each(val, function (item, key) {
		        if (isError(checker(item, key, name))) {
		          return false;
		        }
		      });
		      if (!allTypesSuccess) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function typeOrArrayOfCheckGetter(checker) {
		    var checkerDisplay = getCheckerDisplay(checker, { short: true });
		    var shortType = 'typeOrArrayOf[' + checkerDisplay + ']';

		    function type(options) {
		      if (options && options.short) {
		        return shortType;
		      }
		      return getCheckerDisplay(checker, options);
		    }

		    type.__apiCheckData = { optional: false, type: 'typeOrArrayOf' };
		    return setupChecker(function typeOrArrayOfDefinition(val, name, location, obj) {
		      if (isError(checkers.oneOfType([checker, checkers.arrayOf(checker)])(val, name, location, obj))) {
		        return getError(name, location, shortType);
		      }
		    }, { type: type, shortType: shortType }, disabled);
		  }

		  function getShapeCheckGetter() {
		    function shapeCheckGetter(shape, nonObject) {
		      var shapeTypes = {};
		      each(shape, function (checker, prop) {
		        shapeTypes[prop] = getCheckerDisplay(checker);
		      });
		      function type() {
		        var options = arguments[0] === undefined ? {} : arguments[0];

		        var ret = {};
		        var terse = options.terse;
		        var obj = options.obj;
		        var addHelpers = options.addHelpers;

		        var parentRequired = options.required;
		        each(shape, function (checker, prop) {
		          /* eslint complexity:[2, 6] */
		          var specified = obj && obj.hasOwnProperty(prop);
		          var required = undef(parentRequired) ? !checker.isOptional : parentRequired;
		          if (!terse || (specified || !checker.isOptional)) {
		            ret[prop] = getCheckerDisplay(checker, { terse: terse, obj: obj && obj[prop], required: required, addHelpers: addHelpers });
		          }
		          if (addHelpers) {
		            modifyTypeDisplayToHelpOut(ret, prop, specified, checker, required);
		          }
		        });
		        return ret;

		        function modifyTypeDisplayToHelpOut(theRet, prop, specified, checker, required) {
		          if (!specified && required && !checker.isOptional) {
		            var item = 'ITEM';
		            if (checker.type && checker.type.__apiCheckData) {
		              item = checker.type.__apiCheckData.type.toUpperCase();
		            }
		            addHelper('missing', 'MISSING THIS ' + item, ' <-- YOU ARE MISSING THIS');
		          } else if (specified) {
		            var error = checker(obj[prop], prop, null, obj);
		            if (isError(error)) {
		              addHelper('error', 'THIS IS THE PROBLEM: ' + error.message, ' <-- THIS IS THE PROBLEM: ' + error.message);
		            }
		          }

		          function addHelper(property, objectMessage, stringMessage) {
		            if (typeof theRet[prop] === 'string') {
		              theRet[prop] += stringMessage;
		            } else {
		              theRet[prop].__apiCheckData[property] = objectMessage;
		            }
		          }
		        }
		      }

		      type.__apiCheckData = { strict: false, optional: false, type: 'shape' };
		      var shapeChecker = setupChecker(function shapeCheckerDefinition(val, name, location) {
		        /* eslint complexity:[2, 6] */
		        var isObject = !nonObject && checkers.object(val, name, location);
		        if (isError(isObject)) {
		          return isObject;
		        }
		        var shapePropError = undefined;
		        location = location ? location + (name ? '/' : '') : '';
		        name = name || '';
		        each(shape, function (checker, prop) {
		          if (val.hasOwnProperty(prop) || !checker.isOptional) {
		            shapePropError = checker(val[prop], prop, '' + location + '' + name, val);
		            return !isError(shapePropError);
		          }
		        });
		        if (isError(shapePropError)) {
		          return shapePropError;
		        }
		      }, { type: type, shortType: 'shape' }, disabled);

		      function strictType() {
		        return type.apply(undefined, arguments);
		      }

		      strictType.__apiCheckData = copy(shapeChecker.type.__apiCheckData);
		      strictType.__apiCheckData.strict = true;
		      shapeChecker.strict = setupChecker(function strictShapeCheckerDefinition(val, name, location) {
		        var shapeError = shapeChecker(val, name, location);
		        if (isError(shapeError)) {
		          return shapeError;
		        }
		        var allowedProperties = Object.keys(shape);
		        var extraProps = Object.keys(val).filter(function (prop) {
		          return allowedProperties.indexOf(prop) === -1;
		        });
		        if (extraProps.length) {
		          return new Error('' + nAtL(name, location) + ' cannot have extra properties: ' + t(extraProps.join('`, `')) + '.' + ('It is limited to ' + t(allowedProperties.join('`, `'))));
		        }
		      }, { type: strictType, shortType: 'strict shape' }, disabled);

		      return shapeChecker;
		    }

		    shapeCheckGetter.ifNot = function ifNot(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        otherProps = [otherProps];
		      }
		      var description = undefined;
		      if (otherProps.length === 1) {
		        description = 'specified only if ' + otherProps[0] + ' is not specified';
		      } else {
		        description = 'specified only if none of the following are specified: [' + list(otherProps, ', ', 'and ') + ']';
		      }
		      var shortType = 'ifNot[' + otherProps.join(', ') + ']';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function ifNotChecker(prop, propName, location, obj) {
		        var propExists = obj && obj.hasOwnProperty(propName);
		        var otherPropsExist = otherProps.some(function (otherProp) {
		          return obj && obj.hasOwnProperty(otherProp);
		        });
		        if (propExists === otherPropsExist) {
		          return getError(propName, location, type);
		        } else if (propExists) {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { notRequired: true, type: type, shortType: shortType }, disabled);
		    };

		    shapeCheckGetter.onlyIf = function onlyIf(otherProps, propChecker) {
		      otherProps = arrayify(otherProps);
		      var description = undefined;
		      if (otherProps.length === 1) {
		        description = 'specified only if ' + otherProps[0] + ' is also specified';
		      } else {
		        description = 'specified only if all of the following are specified: [' + list(otherProps, ', ', 'and ') + ']';
		      }
		      var shortType = 'onlyIf[' + otherProps.join(', ') + ']';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function onlyIfCheckerDefinition(prop, propName, location, obj) {
		        var othersPresent = otherProps.every(function (property) {
		          return obj.hasOwnProperty(property);
		        });
		        if (!othersPresent) {
		          return getError(propName, location, type);
		        } else {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { type: type, shortType: shortType }, disabled);
		    };

		    shapeCheckGetter.requiredIfNot = function shapeRequiredIfNot(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        otherProps = [otherProps];
		      }
		      return getRequiredIfNotChecker(false, otherProps, propChecker);
		    };

		    shapeCheckGetter.requiredIfNot.all = function shapeRequiredIfNotAll(otherProps, propChecker) {
		      if (!Array.isArray(otherProps)) {
		        throw new Error('requiredIfNot.all must be passed an array');
		      }
		      return getRequiredIfNotChecker(true, otherProps, propChecker);
		    };

		    function getRequiredIfNotChecker(all, otherProps, propChecker) {
		      var props = t(otherProps.join(', '));
		      var ifProps = 'if ' + (all ? 'all of' : 'at least one of');
		      var description = 'specified ' + ifProps + ' these are not specified: ' + props + ' (otherwise it\'s optional)';
		      var shortType = 'requiredIfNot' + (all ? '.all' : '') + '[' + otherProps.join(', ') + '}]';
		      var type = getTypeForShapeChild(propChecker, description, shortType);
		      return setupChecker(function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
		        var propExists = obj && obj.hasOwnProperty(propName);
		        var iteration = all ? 'every' : 'some';
		        var otherPropsExist = otherProps[iteration](function (otherProp) {
		          return obj && obj.hasOwnProperty(otherProp);
		        });
		        if (!otherPropsExist && !propExists) {
		          return getError(propName, location, type);
		        } else if (propExists) {
		          return propChecker(prop, propName, location, obj);
		        }
		      }, { type: type, notRequired: true }, disabled);
		    }

		    return shapeCheckGetter;

		    function getTypeForShapeChild(propChecker, description, shortType) {
		      function type(options) {
		        if (options && options.short) {
		          return shortType;
		        }
		        return getCheckerDisplay(propChecker);
		      }
		      type.__apiCheckData = { optional: false, type: 'ifNot', description: description };
		      return type;
		    }
		  }

		  function argumentsCheckerGetter() {
		    var type = 'function arguments';
		    return setupChecker(function argsCheckerDefinition(val, name, location) {
		      if (Array.isArray(val) || isError(checkers.object(val)) || isError(checkers.number(val.length))) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function anyCheckGetter() {
		    return setupChecker(function anyCheckerDefinition() {}, { type: 'any' }, disabled);
		  }

		  function nullCheckGetter() {
		    var type = 'null';
		    return setupChecker(function nullChecker(val, name, location) {
		      if (val !== null) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function rangeCheckGetter(min, max) {
		    var type = 'Range (' + min + ' - ' + max + ')';
		    return setupChecker(function rangeChecker(val, name, location) {
		      if (typeof val !== 'number' || val < min || val > max) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function lessThanCheckGetter(min) {
		    var type = 'lessThan[' + min + ']';
		    return setupChecker(function lessThanChecker(val, name, location) {
		      if (typeof val !== 'number' || val > min) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function greaterThanCheckGetter(max) {
		    var type = 'greaterThan[' + max + ']';
		    return setupChecker(function greaterThanChecker(val, name, location) {
		      if (typeof val !== 'number' || val < max) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }

		  function emptyObjectCheckGetter() {
		    var type = 'empty object';
		    return setupChecker(function emptyObjectChecker(val, name, location) {
		      if (typeOf(val) !== 'object' || val === null || Object.keys(val).length) {
		        return getError(name, location, type);
		      }
		    }, { type: type }, disabled);
		  }
		}

		// don't do anything

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	//! angular-formly version 6.15.2 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(10));
		else if(typeof define === 'function' && define.amd)
			define(["angular", "api-check"], factory);
		else if(typeof exports === 'object')
			exports["ngFormly"] = factory(require("angular"), require("api-check"));
		else
			root["ngFormly"] = factory(root["angular"], root["apiCheck"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

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


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _indexCommon = __webpack_require__(1);

		var _indexCommon2 = _interopRequireDefault(_indexCommon);

		exports['default'] = _indexCommon2['default'];
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _providersFormlyApiCheck = __webpack_require__(5);

		var _providersFormlyApiCheck2 = _interopRequireDefault(_providersFormlyApiCheck);

		var _otherDocsBaseUrl = __webpack_require__(7);

		var _otherDocsBaseUrl2 = _interopRequireDefault(_otherDocsBaseUrl);

		var _providersFormlyUsability = __webpack_require__(8);

		var _providersFormlyUsability2 = _interopRequireDefault(_providersFormlyUsability);

		var _providersFormlyConfig = __webpack_require__(9);

		var _providersFormlyConfig2 = _interopRequireDefault(_providersFormlyConfig);

		var _providersFormlyValidationMessages = __webpack_require__(11);

		var _providersFormlyValidationMessages2 = _interopRequireDefault(_providersFormlyValidationMessages);

		var _servicesFormlyUtil = __webpack_require__(12);

		var _servicesFormlyUtil2 = _interopRequireDefault(_servicesFormlyUtil);

		var _servicesFormlyWarn = __webpack_require__(2);

		var _servicesFormlyWarn2 = _interopRequireDefault(_servicesFormlyWarn);

		var _directivesFormlyCustomValidation = __webpack_require__(13);

		var _directivesFormlyCustomValidation2 = _interopRequireDefault(_directivesFormlyCustomValidation);

		var _directivesFormlyField = __webpack_require__(14);

		var _directivesFormlyField2 = _interopRequireDefault(_directivesFormlyField);

		var _directivesFormlyFocus = __webpack_require__(15);

		var _directivesFormlyFocus2 = _interopRequireDefault(_directivesFormlyFocus);

		var _directivesFormlyForm = __webpack_require__(16);

		var _directivesFormlyForm2 = _interopRequireDefault(_directivesFormlyForm);

		var _runFormlyNgModelAttrsManipulator = __webpack_require__(17);

		var _runFormlyNgModelAttrsManipulator2 = _interopRequireDefault(_runFormlyNgModelAttrsManipulator);

		var _runFormlyCustomTags = __webpack_require__(18);

		var _runFormlyCustomTags2 = _interopRequireDefault(_runFormlyCustomTags);

		var ngModuleName = 'formly';

		exports['default'] = ngModuleName;

		var ngModule = _angularFix2['default'].module(ngModuleName, []);

		ngModule.constant('formlyApiCheck', _providersFormlyApiCheck2['default']);
		ngModule.constant('formlyErrorAndWarningsUrlPrefix', _otherDocsBaseUrl2['default']);
		ngModule.constant('formlyVersion', ("6.15.2")); // <-- webpack variable

		ngModule.provider('formlyUsability', _providersFormlyUsability2['default']);
		ngModule.provider('formlyConfig', _providersFormlyConfig2['default']);

		ngModule.factory('formlyValidationMessages', _providersFormlyValidationMessages2['default']);
		ngModule.factory('formlyUtil', _servicesFormlyUtil2['default']);
		ngModule.factory('formlyWarn', _servicesFormlyWarn2['default']);

		ngModule.directive('formlyCustomValidation', _directivesFormlyCustomValidation2['default']);
		ngModule.directive('formlyField', _directivesFormlyField2['default']);
		ngModule.directive('formlyFocus', _directivesFormlyFocus2['default']);
		ngModule.directive('formlyForm', _directivesFormlyForm2['default']);

		ngModule.run(_runFormlyNgModelAttrsManipulator2['default']);
		ngModule.run(_runFormlyCustomTags2['default']);
		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		exports['default'] = formlyWarn;

		// @ngInject
		function formlyWarn(formlyConfig, formlyErrorAndWarningsUrlPrefix, $log) {
		  return function warn() {
		    if (!formlyConfig.disableWarnings) {
		      var args = Array.prototype.slice.call(arguments);
		      var warnInfoSlug = args.shift();
		      args.unshift('Formly Warning:');
		      args.push('' + formlyErrorAndWarningsUrlPrefix + '' + warnInfoSlug);
		      $log.warn.apply($log, _toConsumableArray(args));
		    }
		  };
		}
		formlyWarn.$inject = ["formlyConfig", "formlyErrorAndWarningsUrlPrefix", "$log"];
		module.exports = exports['default'];

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var angular = __webpack_require__(4);

		/* istanbul ignore next */
		if (!angular.version) {
		  angular = window.angular;
		}
		exports['default'] = angular;
		module.exports = exports['default'];

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _apiCheck = __webpack_require__(6);

		var _apiCheck2 = _interopRequireDefault(_apiCheck);

		var apiCheck = (0, _apiCheck2['default'])({
		  output: {
		    prefix: 'angular-formly:',
		    docsBaseUrl: __webpack_require__(7)
		  }
		});

		function shapeRequiredIfNot(otherProps, propChecker) {
		  if (!_angularFix2['default'].isArray(otherProps)) {
		    otherProps = [otherProps];
		  }
		  var type = 'specified if these are not specified: `' + otherProps.join(', ') + '` (otherwise it\'s optional)';
		  function shapeRequiredIfNotDefinition(prop, propName, location, obj) {
		    var propExists = obj && obj.hasOwnProperty(propName);
		    var otherPropsExist = otherProps.some(function (otherProp) {
		      return obj && obj.hasOwnProperty(otherProp);
		    });
		    if (!otherPropsExist && !propExists) {
		      return apiCheck.utils.getError(propName, location, type);
		    } else if (propExists) {
		      return propChecker(prop, propName, location, obj);
		    }
		  }
		  shapeRequiredIfNotDefinition.type = type;
		  return apiCheck.utils.checkerHelpers.setupChecker(shapeRequiredIfNotDefinition);
		}

		function nullable(checker) {
		  return apiCheck.oneOfType([apiCheck.oneOf([null]), checker]);
		}

		var formlyExpression = apiCheck.oneOfType([apiCheck.string, apiCheck.func]);
		var specifyWrapperType = nullable(apiCheck.typeOrArrayOf(apiCheck.string));

		var apiCheckProperty = apiCheck.objectOf(apiCheck.func);

		var apiCheckInstanceProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.func.withProperties({
		  warn: apiCheck.func,
		  'throw': apiCheck.func,
		  shape: apiCheck.func
		}));

		var apiCheckFunctionProperty = apiCheck.shape.onlyIf('apiCheck', apiCheck.oneOf(['throw', 'warn']));

		var formlyWrapperType = apiCheck.shape({
		  name: shapeRequiredIfNot('types', apiCheck.string).optional,
		  template: apiCheck.shape.ifNot('templateUrl', apiCheck.string).optional,
		  templateUrl: apiCheck.shape.ifNot('template', apiCheck.string).optional,
		  types: apiCheck.typeOrArrayOf(apiCheck.string).optional,
		  overwriteOk: apiCheck.bool.optional,
		  validateOptions: apiCheck.func.optional,
		  apiCheck: apiCheckProperty.optional,
		  apiCheckInstance: apiCheckInstanceProperty.optional,
		  apiCheckFunction: apiCheckFunctionProperty.optional,
		  apiCheckOptions: apiCheck.object.optional
		}).strict;

		var expressionProperties = apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
		  expression: formlyExpression,
		  message: formlyExpression.optional
		}).strict]));

		var modelChecker = apiCheck.oneOfType([apiCheck.string, apiCheck.object]);

		var templateManipulators = nullable(apiCheck.shape({
		  preWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional,
		  postWrapper: nullable(apiCheck.arrayOf(apiCheck.func)).optional
		}).strict);

		var fieldOptionsApiShape = {
		  $$hashKey: apiCheck.any.optional,
		  type: apiCheck.shape.ifNot(['template', 'templateUrl'], apiCheck.string).optional,
		  template: apiCheck.shape.ifNot(['type', 'templateUrl'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  templateUrl: apiCheck.shape.ifNot(['type', 'template'], apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
		  model: modelChecker.optional,
		  className: apiCheck.string.optional,
		  id: apiCheck.string.optional,
		  name: apiCheck.string.optional,
		  expressionProperties: expressionProperties.optional,
		  data: apiCheck.object.optional,
		  templateOptions: apiCheck.object.optional,
		  wrapper: specifyWrapperType.optional,
		  modelOptions: apiCheck.shape({
		    updateOn: apiCheck.string.optional,
		    debounce: apiCheck.oneOfType([apiCheck.objectOf(apiCheck.number), apiCheck.number]).optional,
		    allowInvalid: apiCheck.bool.optional,
		    getterSetter: apiCheck.bool.optional,
		    timezone: apiCheck.string.optional
		  }).optional,
		  watcher: apiCheck.typeOrArrayOf(apiCheck.shape({
		    expression: formlyExpression.optional,
		    listener: formlyExpression
		  })).optional,
		  validators: apiCheck.objectOf(apiCheck.oneOfType([formlyExpression, apiCheck.shape({
		    expression: formlyExpression,
		    message: formlyExpression.optional
		  }).strict])).optional,
		  noFormControl: apiCheck.bool.optional,
		  hide: apiCheck.bool.optional,
		  hideExpression: formlyExpression.optional,
		  ngModelAttrs: apiCheck.objectOf(apiCheck.shape({
		    expression: apiCheck.shape.ifNot(['value', 'attribute', 'bound'], apiCheck.any).optional,
		    value: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
		    attribute: apiCheck.shape.ifNot('expression', apiCheck.any).optional,
		    bound: apiCheck.shape.ifNot('expression', apiCheck.any).optional
		  }).strict).optional,
		  elementAttributes: apiCheck.objectOf(apiCheck.string).optional,
		  optionsTypes: apiCheck.typeOrArrayOf(apiCheck.string).optional,
		  link: apiCheck.func.optional,
		  controller: apiCheck.oneOfType([apiCheck.string, apiCheck.func, apiCheck.array]).optional,
		  validation: apiCheck.shape({
		    show: nullable(apiCheck.bool).optional,
		    messages: apiCheck.objectOf(formlyExpression).optional,
		    errorExistsAndShouldBeVisible: apiCheck.bool.optional
		  }).optional,
		  formControl: apiCheck.typeOrArrayOf(apiCheck.object).optional,
		  value: apiCheck.func.optional,
		  runExpressions: apiCheck.func.optional,
		  templateManipulators: templateManipulators.optional,
		  resetModel: apiCheck.func.optional,
		  updateInitialValue: apiCheck.func.optional,
		  initialValue: apiCheck.any.optional,
		  defaultValue: apiCheck.any.optional
		};

		var formlyFieldOptions = apiCheck.shape(fieldOptionsApiShape).strict;

		var formOptionsApi = apiCheck.shape({
		  formState: apiCheck.object.optional,
		  resetModel: apiCheck.func.optional,
		  updateInitialValue: apiCheck.func.optional,
		  removeChromeAutoComplete: apiCheck.bool.optional,
		  templateManipulators: templateManipulators.optional,
		  wrapper: specifyWrapperType.optional,
		  fieldTransform: apiCheck.func.optional,
		  data: apiCheck.object.optional
		}).strict;

		var fieldGroup = apiCheck.shape({
		  $$hashKey: apiCheck.any.optional,
		  key: apiCheck.oneOfType([apiCheck.string, apiCheck.number]).optional,
		  // danger. Nested field groups wont get api-checked...
		  fieldGroup: apiCheck.arrayOf(apiCheck.oneOfType([formlyFieldOptions, apiCheck.object])),
		  className: apiCheck.string.optional,
		  options: formOptionsApi.optional,
		  hide: apiCheck.bool.optional,
		  hideExpression: formlyExpression.optional,
		  data: apiCheck.object.optional,
		  model: modelChecker.optional,
		  form: apiCheck.object.optional,
		  elementAttributes: apiCheck.objectOf(apiCheck.string).optional
		}).strict;

		var typeOptionsDefaultOptions = _angularFix2['default'].copy(fieldOptionsApiShape);
		typeOptionsDefaultOptions.key = apiCheck.string.optional;

		var formlyTypeOptions = apiCheck.shape({
		  name: apiCheck.string,
		  template: apiCheck.shape.ifNot('templateUrl', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  templateUrl: apiCheck.shape.ifNot('template', apiCheck.oneOfType([apiCheck.string, apiCheck.func])).optional,
		  controller: apiCheck.oneOfType([apiCheck.func, apiCheck.string, apiCheck.array]).optional,
		  link: apiCheck.func.optional,
		  defaultOptions: apiCheck.oneOfType([apiCheck.func, apiCheck.shape(typeOptionsDefaultOptions)]).optional,
		  'extends': apiCheck.string.optional,
		  wrapper: specifyWrapperType.optional,
		  data: apiCheck.object.optional,
		  validateOptions: apiCheck.func.optional,
		  apiCheck: apiCheckProperty.optional,
		  apiCheckInstance: apiCheckInstanceProperty.optional,
		  apiCheckFunction: apiCheckFunctionProperty.optional,
		  apiCheckOptions: apiCheck.object.optional,
		  overwriteOk: apiCheck.bool.optional
		}).strict;

		_angularFix2['default'].extend(apiCheck, {
		  formlyTypeOptions: formlyTypeOptions, formlyFieldOptions: formlyFieldOptions, formlyExpression: formlyExpression, formlyWrapperType: formlyWrapperType, fieldGroup: fieldGroup, formOptionsApi: formOptionsApi
		});

		exports['default'] = apiCheck;
		module.exports = exports['default'];

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = "https://github.com/formly-js/angular-formly/blob/" + ("6.15.2") + "/other/ERRORS_AND_WARNINGS.md#";
		module.exports = exports["default"];

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyUsability;

		// @ngInject
		function formlyUsability(formlyApiCheck, formlyErrorAndWarningsUrlPrefix) {
		  var _this = this;

		  _angularFix2['default'].extend(this, {
		    getFormlyError: getFormlyError,
		    getFieldError: getFieldError,
		    checkWrapper: checkWrapper,
		    checkWrapperTemplate: checkWrapperTemplate,
		    getErrorMessage: getErrorMessage,
		    $get: function $get() {
		      return _this;
		    }
		  });

		  function getFieldError(errorInfoSlug, message, field) {
		    if (arguments.length < 3) {
		      field = message;
		      message = errorInfoSlug;
		      errorInfoSlug = null;
		    }
		    return new Error(getErrorMessage(errorInfoSlug, message) + (' Field definition: ' + _angularFix2['default'].toJson(field)));
		  }

		  function getFormlyError(errorInfoSlug, message) {
		    if (!message) {
		      message = errorInfoSlug;
		      errorInfoSlug = null;
		    }
		    return new Error(getErrorMessage(errorInfoSlug, message));
		  }

		  function getErrorMessage(errorInfoSlug, message) {
		    var url = '';
		    if (errorInfoSlug !== null) {
		      url = '' + formlyErrorAndWarningsUrlPrefix + '' + errorInfoSlug;
		    }
		    return 'Formly Error: ' + message + '. ' + url;
		  }

		  function checkWrapper(wrapper) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyWrapperType, wrapper, {
		      prefix: 'formlyConfig.setWrapper',
		      urlSuffix: 'setwrapper-validation-failed'
		    });
		  }

		  function checkWrapperTemplate(template, additionalInfo) {
		    var formlyTransclude = '<formly-transclude></formly-transclude>';
		    if (template.indexOf(formlyTransclude) === -1) {
		      throw getFormlyError('Template wrapper templates must use "' + formlyTransclude + '" somewhere in them. ' + ('This one does not have "<formly-transclude></formly-transclude>" in it: ' + template) + '\n' + ('Additional information: ' + JSON.stringify(additionalInfo)));
		    }
		  }
		}
		formlyUsability.$inject = ["formlyApiCheck", "formlyErrorAndWarningsUrlPrefix"];
		module.exports = exports['default'];

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		var _otherUtils = __webpack_require__(10);

		var _otherUtils2 = _interopRequireDefault(_otherUtils);

		exports['default'] = formlyConfig;

		// @ngInject
		function formlyConfig(formlyUsabilityProvider, formlyApiCheck) {
		  var _this2 = this;

		  var typeMap = {};
		  var templateWrappersMap = {};
		  var defaultWrapperName = 'default';
		  var _this = this;
		  var getError = formlyUsabilityProvider.getFormlyError;

		  _angularFix2['default'].extend(this, {
		    setType: setType,
		    getType: getType,
		    setWrapper: setWrapper,
		    getWrapper: getWrapper,
		    getWrapperByType: getWrapperByType,
		    removeWrapperByName: removeWrapperByName,
		    removeWrappersForType: removeWrappersForType,
		    disableWarnings: false,
		    extras: {
		      disableNgModelAttrsManipulator: false,
		      ngModelAttrsManipulatorPreferUnbound: false,
		      removeChromeAutoComplete: false,
		      defaultHideDirective: 'ng-if',
		      getFieldId: null
		    },
		    templateManipulators: {
		      preWrapper: [],
		      postWrapper: []
		    },
		    $get: function $get() {
		      return _this2;
		    }
		  });

		  function setType(options) {
		    if (_angularFix2['default'].isArray(options)) {
		      _angularFix2['default'].forEach(options, setType);
		    } else if (_angularFix2['default'].isObject(options)) {
		      checkType(options);
		      if (options['extends']) {
		        extendTypeOptions(options);
		      }
		      typeMap[options.name] = options;
		    } else {
		      throw getError('You must provide an object or array for setType. You provided: ' + JSON.stringify(arguments));
		    }
		  }

		  function checkType(options) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyTypeOptions, options, {
		      prefix: 'formlyConfig.setType',
		      url: 'settype-validation-failed'
		    });
		    if (!options.overwriteOk) {
		      checkOverwrite(options.name, typeMap, options, 'types');
		    } else {
		      options.overwriteOk = undefined;
		    }
		  }

		  function extendTypeOptions(options) {
		    var extendsType = getType(options['extends'], true, options);
		    extendTypeControllerFunction(options, extendsType);
		    extendTypeLinkFunction(options, extendsType);
		    extendTypeValidateOptionsFunction(options, extendsType);
		    extendTypeDefaultOptions(options, extendsType);
		    _otherUtils2['default'].reverseDeepMerge(options, extendsType);
		    extendTemplate(options, extendsType);
		  }

		  function extendTemplate(options, extendsType) {
		    if (options.template && extendsType.templateUrl) {
		      delete options.templateUrl;
		    } else if (options.templateUrl && extendsType.template) {
		      delete options.template;
		    }
		  }

		  function extendTypeControllerFunction(options, extendsType) {
		    var extendsCtrl = extendsType.controller;
		    if (!_angularFix2['default'].isDefined(extendsCtrl)) {
		      return;
		    }
		    var optionsCtrl = options.controller;
		    if (_angularFix2['default'].isDefined(optionsCtrl)) {
		      options.controller = function ($scope, $controller) {
		        $controller(extendsCtrl, { $scope: $scope });
		        $controller(optionsCtrl, { $scope: $scope });
		      };
		      options.controller.$inject = ['$scope', '$controller'];
		    } else {
		      options.controller = extendsCtrl;
		    }
		  }

		  function extendTypeLinkFunction(options, extendsType) {
		    var extendsFn = extendsType.link;
		    if (!_angularFix2['default'].isDefined(extendsFn)) {
		      return;
		    }
		    var optionsFn = options.link;
		    if (_angularFix2['default'].isDefined(optionsFn)) {
		      options.link = function () {
		        extendsFn.apply(undefined, arguments);
		        optionsFn.apply(undefined, arguments);
		      };
		    } else {
		      options.link = extendsFn;
		    }
		  }

		  function extendTypeValidateOptionsFunction(options, extendsType) {
		    var extendsFn = extendsType.validateOptions;
		    if (!_angularFix2['default'].isDefined(extendsFn)) {
		      return;
		    }
		    var optionsFn = options.validateOptions;
		    var originalDefaultOptions = options.defaultOptions;
		    if (_angularFix2['default'].isDefined(optionsFn)) {
		      options.validateOptions = function (opts) {
		        optionsFn(opts);
		        var mergedOptions = _angularFix2['default'].copy(opts);
		        var defaultOptions = originalDefaultOptions;
		        if (defaultOptions) {
		          if (_angularFix2['default'].isFunction(defaultOptions)) {
		            defaultOptions = defaultOptions(mergedOptions);
		          }
		          _otherUtils2['default'].reverseDeepMerge(mergedOptions, defaultOptions);
		        }
		        extendsFn(mergedOptions);
		      };
		    } else {
		      options.validateOptions = extendsFn;
		    }
		  }

		  function extendTypeDefaultOptions(options, extendsType) {
		    var extendsDO = extendsType.defaultOptions;
		    if (!_angularFix2['default'].isDefined(extendsDO)) {
		      return;
		    }
		    var optionsDO = options.defaultOptions;
		    var optionsDOIsFn = _angularFix2['default'].isFunction(optionsDO);
		    var extendsDOIsFn = _angularFix2['default'].isFunction(extendsDO);
		    if (extendsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts) {
		        var extendsDefaultOptions = extendsDO(opts);
		        var mergedDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(mergedDefaultOptions, opts, extendsDefaultOptions);
		        var extenderOptionsDefaultOptions = optionsDO;
		        if (optionsDOIsFn) {
		          extenderOptionsDefaultOptions = extenderOptionsDefaultOptions(mergedDefaultOptions);
		        }
		        _otherUtils2['default'].reverseDeepMerge(extendsDefaultOptions, extenderOptionsDefaultOptions);
		        return extendsDefaultOptions;
		      };
		    } else if (optionsDOIsFn) {
		      options.defaultOptions = function defaultOptions(opts) {
		        var newDefaultOptions = {};
		        _otherUtils2['default'].reverseDeepMerge(newDefaultOptions, opts, extendsDO);
		        return optionsDO(newDefaultOptions);
		      };
		    }
		  }

		  function getType(name, throwError, errorContext) {
		    if (!name) {
		      return undefined;
		    }
		    var type = typeMap[name];
		    if (!type && throwError === true) {
		      throw getError('There is no type by the name of "' + name + '": ' + JSON.stringify(errorContext));
		    } else {
		      return type;
		    }
		  }

		  function setWrapper(_x, _x2) {
		    var _again = true;

		    _function: while (_again) {
		      var options = _x,
		          name = _x2;
		      _again = false;

		      if (_angularFix2['default'].isArray(options)) {
		        return options.map(function (wrapperOptions) {
		          return setWrapper(wrapperOptions);
		        });
		      } else if (_angularFix2['default'].isObject(options)) {
		        options.types = getOptionsTypes(options);
		        options.name = getOptionsName(options, name);
		        checkWrapperAPI(options);
		        templateWrappersMap[options.name] = options;
		        return options;
		      } else if (_angularFix2['default'].isString(options)) {
		        _x = {
		          template: options,
		          name: name
		        };
		        _again = true;
		        continue _function;
		      }
		    }
		  }

		  function getOptionsTypes(options) {
		    if (_angularFix2['default'].isString(options.types)) {
		      return [options.types];
		    }
		    if (!_angularFix2['default'].isDefined(options.types)) {
		      return [];
		    } else {
		      return options.types;
		    }
		  }

		  function getOptionsName(options, name) {
		    return options.name || name || options.types.join(' ') || defaultWrapperName;
		  }

		  function checkWrapperAPI(options) {
		    formlyUsabilityProvider.checkWrapper(options);
		    if (options.template) {
		      formlyUsabilityProvider.checkWrapperTemplate(options.template, options);
		    }
		    if (!options.overwriteOk) {
		      checkOverwrite(options.name, templateWrappersMap, options, 'templateWrappers');
		    } else {
		      delete options.overwriteOk;
		    }
		    checkWrapperTypes(options);
		  }

		  function checkWrapperTypes(options) {
		    var shouldThrow = !_angularFix2['default'].isArray(options.types) || !options.types.every(_angularFix2['default'].isString);
		    if (shouldThrow) {
		      throw getError('Attempted to create a template wrapper with types that is not a string or an array of strings');
		    }
		  }

		  function checkOverwrite(property, object, newValue, objectName) {
		    if (object.hasOwnProperty(property)) {
		      warn(['Attempting to overwrite ' + property + ' on ' + objectName + ' which is currently', '' + JSON.stringify(object[property]) + ' with ' + JSON.stringify(newValue), 'To supress this warning, specify the property "overwriteOk: true"'].join(' '));
		    }
		  }

		  function getWrapper(name) {
		    return templateWrappersMap[name || defaultWrapperName];
		  }

		  function getWrapperByType(type) {
		    /* jshint maxcomplexity:6 */
		    var wrappers = [];
		    for (var name in templateWrappersMap) {
		      if (templateWrappersMap.hasOwnProperty(name)) {
		        if (templateWrappersMap[name].types && templateWrappersMap[name].types.indexOf(type) !== -1) {
		          wrappers.push(templateWrappersMap[name]);
		        }
		      }
		    }
		    return wrappers;
		  }

		  function removeWrapperByName(name) {
		    var wrapper = templateWrappersMap[name];
		    delete templateWrappersMap[name];
		    return wrapper;
		  }

		  function removeWrappersForType(type) {
		    var wrappers = getWrapperByType(type);
		    if (!wrappers) {
		      return undefined;
		    }
		    if (!_angularFix2['default'].isArray(wrappers)) {
		      return removeWrapperByName(wrappers.name);
		    } else {
		      wrappers.forEach(function (wrapper) {
		        return removeWrapperByName(wrapper.name);
		      });
		      return wrappers;
		    }
		  }

		  function warn() {
		    if (!_this.disableWarnings) {
		      /* eslint no-console:0 */
		      console.warn.apply(console, arguments);
		    }
		  }
		}
		formlyConfig.$inject = ["formlyUsabilityProvider", "formlyApiCheck"];
		module.exports = exports['default'];

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = { formlyEval: formlyEval, getFieldId: getFieldId, reverseDeepMerge: reverseDeepMerge, findByNodeName: findByNodeName, arrayify: arrayify, extendFunction: extendFunction };

		function formlyEval(scope, expression, $modelValue, $viewValue, extraLocals) {
		  if (_angularFix2['default'].isFunction(expression)) {
		    return expression($viewValue, $modelValue, scope, extraLocals);
		  } else {
		    return scope.$eval(expression, _angularFix2['default'].extend({ $viewValue: $viewValue, $modelValue: $modelValue }, extraLocals));
		  }
		}

		function getFieldId(formId, options, index) {
		  if (options.id) {
		    return options.id;
		  }
		  var type = options.type;
		  if (!type && options.template) {
		    type = 'template';
		  } else if (!type && options.templateUrl) {
		    type = 'templateUrl';
		  }

		  return [formId, type, options.key, index].join('_');
		}

		function reverseDeepMerge(dest) {
		  _angularFix2['default'].forEach(arguments, function (src, index) {
		    if (!index) {
		      return;
		    }
		    _angularFix2['default'].forEach(src, function (val, prop) {
		      if (!_angularFix2['default'].isDefined(dest[prop])) {
		        dest[prop] = _angularFix2['default'].copy(val);
		      } else if (objAndSameType(dest[prop], val)) {
		        reverseDeepMerge(dest[prop], val);
		      }
		    });
		  });
		}

		function objAndSameType(obj1, obj2) {
		  return _angularFix2['default'].isObject(obj1) && _angularFix2['default'].isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2);
		}

		// recurse down a node tree to find a node with matching nodeName, for custom tags jQuery.find doesn't work in IE8
		function findByNodeName(el, nodeName) {
		  if (!el.prop) {
		    // not a jQuery or jqLite object -> wrap it
		    el = _angularFix2['default'].element(el);
		  }

		  if (el.prop('nodeName') === nodeName.toUpperCase()) {
		    return el;
		  }

		  var c = el.children();
		  for (var i = 0; c && i < c.length; i++) {
		    var node = findByNodeName(c[i], nodeName);
		    if (node) {
		      return node;
		    }
		  }
		}

		function arrayify(obj) {
		  if (obj && !_angularFix2['default'].isArray(obj)) {
		    obj = [obj];
		  } else if (!obj) {
		    obj = [];
		  }
		  return obj;
		}

		function extendFunction() {
		  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
		    fns[_key] = arguments[_key];
		  }

		  return function extendedFunction() {
		    var args = arguments;
		    fns.forEach(function (fn) {
		      return fn.apply(null, args);
		    });
		  };
		}
		module.exports = exports['default'];

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = formlyValidationMessages;

		// @ngInject
		function formlyValidationMessages() {

		  var validationMessages = {
		    addTemplateOptionValueMessage: addTemplateOptionValueMessage,
		    addStringMessage: addStringMessage,
		    messages: {}
		  };

		  return validationMessages;

		  function addTemplateOptionValueMessage(name, prop, prefix, suffix, alternate) {
		    validationMessages.messages[name] = templateOptionValue(prop, prefix, suffix, alternate);
		  }

		  function addStringMessage(name, string) {
		    validationMessages.messages[name] = function () {
		      return string;
		    };
		  }

		  function templateOptionValue(prop, prefix, suffix, alternate) {
		    return function getValidationMessage(viewValue, modelValue, scope) {
		      if (scope.options.templateOptions[prop]) {
		        return "" + prefix + " " + scope.options.templateOptions[prop] + " " + suffix;
		      } else {
		        return alternate;
		      }
		    };
		  }
		}
		module.exports = exports["default"];

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _otherUtils = __webpack_require__(10);

		var _otherUtils2 = _interopRequireDefault(_otherUtils);

		exports['default'] = formlyUtil;

		// @ngInject
		function formlyUtil() {
		  return _otherUtils2['default'];
		}
		module.exports = exports['default'];

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyCustomValidation;

		// @ngInject
		function formlyCustomValidation(formlyUtil, $q) {
		  return {
		    restrict: 'A',
		    require: 'ngModel',
		    link: function formlyCustomValidationLink(scope, el, attrs, ctrl) {
		      var opts = scope.options;
		      if (opts.validators) {
		        checkValidators(opts.validators);
		      }
		      opts.validation.messages = opts.validation.messages || {};
		      _angularFix2['default'].forEach(opts.validation.messages, function (message, key) {
		        opts.validation.messages[key] = function () {
		          return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
		        };
		      });

		      var useNewValidatorsApi = ctrl.hasOwnProperty('$validators') && !attrs.hasOwnProperty('useParsers');
		      _angularFix2['default'].forEach(opts.validators, function addValidatorToPipeline(validator, name) {
		        var message = validator.message;
		        if (message) {
		          opts.validation.messages[name] = function () {
		            return formlyUtil.formlyEval(scope, message, ctrl.$modelValue, ctrl.$viewValue);
		          };
		        }
		        validator = _angularFix2['default'].isObject(validator) ? validator.expression : validator;
		        var isPossiblyAsync = !_angularFix2['default'].isString(validator);
		        if (useNewValidatorsApi) {
		          setupWithValidators();
		        } else {
		          setupWithParsers();
		        }

		        function setupWithValidators() {
		          var validatorCollection = isPossiblyAsync ? '$asyncValidators' : '$validators';
		          ctrl[validatorCollection][name] = function evalValidity(modelValue, viewValue) {
		            var value = formlyUtil.formlyEval(scope, validator, modelValue, viewValue);
		            if (isPossiblyAsync) {
		              return isPromiseLike(value) ? value : value ? $q.when(value) : $q.reject(value);
		            } else {
		              return value;
		            }
		          };
		        }

		        function setupWithParsers() {
		          var inFlightValidator = undefined;
		          ctrl.$parsers.unshift(function evalValidityOfParser(viewValue) {
		            var isValid = formlyUtil.formlyEval(scope, validator, ctrl.$modelValue, viewValue);
		            if (isPromiseLike(isValid)) {
		              ctrl.$pending = ctrl.$pending || {};
		              ctrl.$pending[name] = true;
		              inFlightValidator = isValid;
		              isValid.then(function () {
		                if (inFlightValidator === isValid) {
		                  ctrl.$setValidity(name, true);
		                }
		              })['catch'](function () {
		                if (inFlightValidator === isValid) {
		                  ctrl.$setValidity(name, false);
		                }
		              })['finally'](function () {
		                if (Object.keys(ctrl.$pending).length === 1) {
		                  delete ctrl.$pending;
		                } else {
		                  delete ctrl.$pending[name];
		                }
		              });
		            } else {
		              ctrl.$setValidity(name, isValid);
		            }
		            return viewValue;
		          });
		        }
		      });
		    }
		  };

		  function isPromiseLike(obj) {
		    return obj && _angularFix2['default'].isFunction(obj.then);
		  }

		  function checkValidators(validators) {
		    var allowedProperties = ['expression', 'message'];
		    var validatorsWithExtraProps = {};
		    _angularFix2['default'].forEach(validators, function (validator, name) {
		      if (_angularFix2['default'].isString(validator)) {
		        return;
		      }
		      var extraProps = [];
		      _angularFix2['default'].forEach(validator, function (v, key) {
		        if (allowedProperties.indexOf(key) === -1) {
		          extraProps.push(key);
		        }
		      });
		      if (extraProps.length) {
		        validatorsWithExtraProps[name] = extraProps;
		      }
		    });
		    if (Object.keys(validatorsWithExtraProps).length) {
		      throw new Error(['Validators are only allowed to be functions or objects that have ' + allowedProperties.join(', ') + '.', 'You provided some extra properties: ' + JSON.stringify(validatorsWithExtraProps)].join(' '));
		    }
		  }
		}
		formlyCustomValidation.$inject = ["formlyUtil", "$q"];
		module.exports = exports['default'];

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyField;

		/**
		 * @ngdoc directive
		 * @name formlyField
		 * @restrict AE
		 */
		// @ngInject
		function formlyField($http, $q, $compile, $templateCache, $interpolate, formlyConfig, formlyValidationMessages, formlyApiCheck, formlyUtil, formlyUsability, formlyWarn) {
		  var arrayify = formlyUtil.arrayify;

		  FormlyFieldController.$inject = ["$scope", "$timeout", "$parse", "$controller"];
		  return {
		    restrict: 'AE',
		    transclude: true,
		    scope: {
		      options: '=',
		      model: '=',
		      formId: '@', // TODO remove formId in a breaking release
		      index: '=?',
		      fields: '=?',
		      formState: '=?',
		      formOptions: '=?',
		      form: '=?' // TODO require form in a breaking release
		    },
		    controller: FormlyFieldController,
		    link: fieldLink
		  };

		  // @ngInject
		  function FormlyFieldController($scope, $timeout, $parse, $controller) {
		    /* eslint max-statements:[2, 31] */
		    if ($scope.options.fieldGroup) {
		      setupFieldGroup();
		      return;
		    }

		    var fieldType = getFieldType($scope.options);
		    simplifyLife($scope.options);
		    mergeFieldOptionsWithTypeDefaults($scope.options, fieldType);
		    extendOptionsWithDefaults($scope.options, $scope.index);
		    checkApi($scope.options);
		    // set field id to link labels and fields

		    // initalization
		    setFieldIdAndName();
		    setDefaultValue();
		    setInitialValue();
		    runExpressions();
		    addModelWatcher($scope, $scope.options);
		    addValidationMessages($scope.options);
		    invokeControllers($scope, $scope.options, fieldType);

		    // function definitions
		    function runExpressions() {
		      // must run on next tick to make sure that the current value is correct.
		      $timeout(function runExpressionsOnNextTick() {
		        var field = $scope.options;
		        var currentValue = valueGetterSetter();
		        _angularFix2['default'].forEach(field.expressionProperties, function runExpression(expression, prop) {
		          var setter = $parse(prop).assign;
		          var promise = $q.when(formlyUtil.formlyEval($scope, expression, currentValue, currentValue));
		          promise.then(function setFieldValue(value) {
		            setter(field, value);
		          });
		        });
		      });
		    }

		    function valueGetterSetter(newVal) {
		      if (!$scope.model || !$scope.options.key) {
		        return undefined;
		      }
		      if (_angularFix2['default'].isDefined(newVal)) {
		        $scope.model[$scope.options.key] = newVal;
		      }
		      return $scope.model[$scope.options.key];
		    }

		    function simplifyLife(options) {
		      // add a few empty objects (if they don't already exist) so you don't have to undefined check everywhere
		      formlyUtil.reverseDeepMerge(options, {
		        data: {},
		        templateOptions: {},
		        validation: {}
		      });
		      // create $scope.to so template authors can reference to instead of $scope.options.templateOptions
		      $scope.to = $scope.options.templateOptions;
		      $scope.formOptions = $scope.formOptions || {};
		    }

		    function setFieldIdAndName() {
		      if (_angularFix2['default'].isFunction(formlyConfig.extras.getFieldId)) {
		        $scope.id = formlyConfig.extras.getFieldId($scope.options, $scope.model, $scope);
		      } else {
		        var formName = $scope.form && $scope.form.$name || $scope.formId;
		        $scope.id = formlyUtil.getFieldId(formName, $scope.options, $scope.index);
		      }
		      $scope.options.id = $scope.id;
		      $scope.name = $scope.options.name || $scope.options.id;
		      $scope.options.name = $scope.name;
		    }

		    function setDefaultValue() {
		      if (_angularFix2['default'].isDefined($scope.options.defaultValue) && !_angularFix2['default'].isDefined($scope.model[$scope.options.key])) {
		        $scope.model[$scope.options.key] = $scope.options.defaultValue;
		      }
		    }

		    function setInitialValue() {
		      $scope.options.initialValue = $scope.model && $scope.model[$scope.options.key];
		    }

		    function mergeFieldOptionsWithTypeDefaults(options, type) {
		      if (type) {
		        mergeOptions(options, type.defaultOptions);
		      }
		      var properOrder = arrayify(options.optionsTypes).reverse(); // so the right things are overridden
		      _angularFix2['default'].forEach(properOrder, function (typeName) {
		        mergeOptions(options, formlyConfig.getType(typeName, true, options).defaultOptions);
		      });
		    }

		    function mergeOptions(options, extraOptions) {
		      if (extraOptions) {
		        if (_angularFix2['default'].isFunction(extraOptions)) {
		          extraOptions = extraOptions(options);
		        }
		        formlyUtil.reverseDeepMerge(options, extraOptions);
		      }
		    }

		    function extendOptionsWithDefaults(options, index) {
		      var key = options.key || index || 0;
		      _angularFix2['default'].extend(options, {
		        // attach the key in case the formly-field directive is used directly
		        key: key,
		        value: valueGetterSetter,
		        runExpressions: runExpressions,
		        resetModel: resetModel,
		        updateInitialValue: updateInitialValue
		      });
		    }

		    // initialization functions
		    function addModelWatcher(scope, options) {
		      if (options.model) {
		        scope.$watch('options.model', runExpressions, true);
		      }
		    }

		    function resetModel() {
		      $scope.model[$scope.options.key] = $scope.options.initialValue;
		      if ($scope.options.formControl) {
		        if (_angularFix2['default'].isArray($scope.options.formControl)) {
		          _angularFix2['default'].forEach($scope.options.formControl, function (formControl) {
		            resetFormControl(formControl, true);
		          });
		        } else {
		          resetFormControl($scope.options.formControl);
		        }
		      }
		    }

		    function resetFormControl(formControl, isMultiNgModel) {
		      if (!isMultiNgModel) {
		        formControl.$setViewValue($scope.model[$scope.options.key]);
		      }

		      formControl.$render();
		      formControl.$setUntouched();
		      formControl.$setPristine();

		      // To prevent breaking change requiring a digest to reset $viewModel
		      if (!$scope.$root.$$phase) {
		        $scope.$digest();
		      }
		    }

		    function updateInitialValue() {
		      $scope.options.initialValue = $scope.model[$scope.options.key];
		    }

		    function addValidationMessages(options) {
		      options.validation.messages = options.validation.messages || {};
		      _angularFix2['default'].forEach(formlyValidationMessages.messages, function createFunctionForMessage(expression, name) {
		        if (!options.validation.messages[name]) {
		          options.validation.messages[name] = function evaluateMessage(viewValue, modelValue, scope) {
		            return formlyUtil.formlyEval(scope, expression, modelValue, viewValue);
		          };
		        }
		      });
		    }

		    function invokeControllers(scope) {
		      var options = arguments[1] === undefined ? {} : arguments[1];
		      var type = arguments[2] === undefined ? {} : arguments[2];

		      _angularFix2['default'].forEach([type.controller, options.controller], function (controller) {
		        if (controller) {
		          $controller(controller, { $scope: scope });
		        }
		      });
		    }

		    function setupFieldGroup() {
		      $scope.options.options = $scope.options.options || {};
		      $scope.options.options.formState = $scope.formState;
		    }
		  }

		  // link function
		  function fieldLink(scope, el) {
		    if (scope.options.fieldGroup) {
		      setFieldGroupTemplate();
		      return;
		    }

		    addAttributes();
		    addClasses();

		    var type = getFieldType(scope.options);
		    var args = arguments;
		    var thusly = this;
		    var fieldCount = 0;
		    var fieldManipulators = getManipulators(scope.options, scope.formOptions);
		    getFieldTemplate(scope.options).then(runManipulators(fieldManipulators.preWrapper)).then(transcludeInWrappers(scope.options, scope.formOptions)).then(runManipulators(fieldManipulators.postWrapper)).then(setElementTemplate).then(watchFormControl).then(callLinkFunctions)['catch'](function (error) {
		      formlyWarn('there-was-a-problem-setting-the-template-for-this-field', 'There was a problem setting the template for this field ', scope.options, error);
		    });

		    function setFieldGroupTemplate() {
		      checkFieldGroupApi(scope.options);
		      el.addClass('formly-field-group');
		      var extraAttributes = '';
		      if (scope.options.elementAttributes) {
		        extraAttributes = Object.keys(scope.options.elementAttributes).map(function (key) {
		          return '' + key + '="' + scope.options.elementAttributes[key] + '"';
		        }).join(' ');
		      }
		      var modelValue = 'model';
		      scope.options.form = scope.form;
		      if (scope.options.key) {
		        modelValue = 'model[\'' + scope.options.key + '\']';
		      }
		      setElementTemplate('\n          <formly-form model="' + modelValue + '"\n                       fields="options.fieldGroup"\n                       options="options.options"\n                       form="options.form"\n                       class="' + scope.options.className + '"\n                       ' + extraAttributes + '\n                       is-field-group>\n          </formly-form>\n        ');
		    }

		    function addAttributes() {
		      if (scope.options.elementAttributes) {
		        el.attr(scope.options.elementAttributes);
		      }
		    }

		    function addClasses() {
		      if (scope.options.className) {
		        el.addClass(scope.options.className);
		      }
		      if (scope.options.type) {
		        el.addClass('formly-field-' + scope.options.type);
		      }
		    }

		    function setElementTemplate(templateString) {
		      el.html(asHtml(templateString));
		      $compile(el.contents())(scope);
		      return templateString;
		    }

		    function watchFormControl(templateString) {
		      var stopWatchingShowError = _angularFix2['default'].noop;
		      if (scope.options.noFormControl) {
		        return;
		      }
		      var templateEl = _angularFix2['default'].element('<div>' + templateString + '</div>');
		      var ngModelNodes = templateEl[0].querySelectorAll('[ng-model],[data-ng-model]');

		      if (ngModelNodes) {
		        _angularFix2['default'].forEach(ngModelNodes, function (ngModelNode) {
		          fieldCount++;
		          watchFieldNameOrExistence(ngModelNode.getAttribute('name'));
		        });
		      }

		      function watchFieldNameOrExistence(name) {
		        var nameExpressionRegex = /\{\{(.*?)}}/;
		        var nameExpression = nameExpressionRegex.exec(name);
		        if (nameExpression) {
		          name = $interpolate(name)(scope);
		        }
		        watchFieldExistence(name);
		      }

		      function watchFieldExistence(name) {
		        scope.$watch('form["' + name + '"]', function formControlChange(formControl) {
		          if (formControl) {
		            if (fieldCount > 1) {
		              if (!scope.options.formControl) {
		                scope.options.formControl = [];
		              }
		              scope.options.formControl.push(formControl);
		            } else {
		              scope.options.formControl = formControl;
		            }
		            scope.fc = scope.options.formControl; // shortcut for template authors
		            stopWatchingShowError();
		            addShowMessagesWatcher();
		          }
		        });
		      }

		      function addShowMessagesWatcher() {
		        stopWatchingShowError = scope.$watch(function watchShowValidationChange() {
		          var customExpression = formlyConfig.extras.errorExistsAndShouldBeVisibleExpression;
		          var options = scope.options;
		          var fc = scope.fc;

		          if (!fc.$invalid) {
		            return false;
		          } else if (typeof options.validation.show === 'boolean') {
		            return options.validation.show;
		          } else if (customExpression) {
		            return formlyUtil.formlyEval(scope, customExpression, fc.$modelValue, fc.$viewValue);
		          } else {
		            var noTouchedButDirty = _angularFix2['default'].isUndefined(fc.$touched) && fc.$dirty;
		            return scope.fc.$touched || noTouchedButDirty;
		          }
		        }, function onShowValidationChange(show) {
		          scope.options.validation.errorExistsAndShouldBeVisible = show;
		          scope.showError = show; // shortcut for template authors
		        });
		      }
		    }

		    function callLinkFunctions() {
		      if (type && type.link) {
		        type.link.apply(thusly, args);
		      }
		      if (scope.options.link) {
		        scope.options.link.apply(thusly, args);
		      }
		    }

		    function runManipulators(manipulators) {
		      return function runManipulatorsOnTemplate(templateToManipulate) {
		        var chain = $q.when(templateToManipulate);
		        _angularFix2['default'].forEach(manipulators, function (manipulator) {
		          chain = chain.then(function (template) {
		            return $q.when(manipulator(template, scope.options, scope)).then(function (newTemplate) {
		              return _angularFix2['default'].isString(newTemplate) ? newTemplate : asHtml(newTemplate);
		            });
		          });
		        });
		        return chain;
		      };
		    }
		  }

		  // sort-of stateless util functions
		  function asHtml(el) {
		    var wrapper = _angularFix2['default'].element('<a></a>');
		    return wrapper.append(el).html();
		  }

		  function getFieldType(options) {
		    return options.type && formlyConfig.getType(options.type);
		  }

		  function getManipulators(options, formOptions) {
		    var preWrapper = [];
		    var postWrapper = [];
		    addManipulators(options.templateManipulators);
		    addManipulators(formOptions.templateManipulators);
		    addManipulators(formlyConfig.templateManipulators);
		    return { preWrapper: preWrapper, postWrapper: postWrapper };

		    function addManipulators(manipulators) {
		      /* eslint-disable */ // it doesn't understand this :-(

		      var _ref = manipulators || {};

		      var _ref$preWrapper = _ref.preWrapper;
		      var pre = _ref$preWrapper === undefined ? [] : _ref$preWrapper;
		      var _ref$postWrapper = _ref.postWrapper;
		      var post = _ref$postWrapper === undefined ? [] : _ref$postWrapper;

		      preWrapper = preWrapper.concat(pre);
		      postWrapper = postWrapper.concat(post);
		      /* eslint-enable */
		    }
		  }

		  function getFieldTemplate(options) {
		    function fromOptionsOrType(key, fieldType) {
		      if (_angularFix2['default'].isDefined(options[key])) {
		        return options[key];
		      } else if (fieldType && _angularFix2['default'].isDefined(fieldType[key])) {
		        return fieldType[key];
		      }
		    }

		    var type = formlyConfig.getType(options.type, true, options);
		    var template = fromOptionsOrType('template', type);
		    var templateUrl = fromOptionsOrType('templateUrl', type);
		    if (_angularFix2['default'].isUndefined(template) && !templateUrl) {
		      throw formlyUsability.getFieldError('type-type-has-no-template', 'Type \'' + options.type + '\' has not template. On element:', options);
		    }

		    return getTemplate(templateUrl || template, _angularFix2['default'].isUndefined(template), options);
		  }

		  function getTemplate(template, isUrl, options) {
		    var templatePromise = undefined;
		    if (_angularFix2['default'].isFunction(template)) {
		      templatePromise = $q.when(template(options));
		    } else {
		      templatePromise = $q.when(template);
		    }

		    if (!isUrl) {
		      return templatePromise;
		    } else {
		      var _ret = (function () {
		        var httpOptions = { cache: $templateCache };
		        return {
		          v: templatePromise.then(function (url) {
		            return $http.get(url, httpOptions);
		          }).then(function (response) {
		            return response.data;
		          })['catch'](function handleErrorGettingATemplate(error) {
		            formlyWarn('problem-loading-template-for-templateurl', 'Problem loading template for ' + template, error);
		          })
		        };
		      })();

		      if (typeof _ret === 'object') return _ret.v;
		    }
		  }

		  function transcludeInWrappers(options, formOptions) {
		    var wrapper = getWrapperOption(options, formOptions);

		    return function transcludeTemplate(template) {
		      if (!wrapper.length) {
		        return $q.when(template);
		      }

		      wrapper.forEach(function (aWrapper) {
		        formlyUsability.checkWrapper(aWrapper, options);
		        aWrapper.validateOptions && aWrapper.validateOptions(options);
		        runApiCheck(aWrapper, options);
		      });
		      var promises = wrapper.map(function (w) {
		        return getTemplate(w.template || w.templateUrl, !w.template);
		      });
		      return $q.all(promises).then(function (wrappersTemplates) {
		        wrappersTemplates.forEach(function (wrapperTemplate, index) {
		          formlyUsability.checkWrapperTemplate(wrapperTemplate, wrapper[index]);
		        });
		        wrappersTemplates.reverse(); // wrapper 0 is wrapped in wrapper 1 and so on...
		        var totalWrapper = wrappersTemplates.shift();
		        wrappersTemplates.forEach(function (wrapperTemplate) {
		          totalWrapper = doTransclusion(totalWrapper, wrapperTemplate);
		        });
		        return doTransclusion(totalWrapper, template);
		      });
		    };
		  }

		  function doTransclusion(wrapper, template) {
		    var superWrapper = _angularFix2['default'].element('<a></a>'); // this allows people not have to have a single root in wrappers
		    superWrapper.append(wrapper);
		    var transcludeEl = superWrapper.find('formly-transclude');
		    if (!transcludeEl.length) {
		      // try it using our custom find function
		      transcludeEl = formlyUtil.findByNodeName(superWrapper, 'formly-transclude');
		    }
		    transcludeEl.replaceWith(template);
		    return superWrapper.html();
		  }

		  function getWrapperOption(options, formOptions) {
		    /* eslint complexity:[6, 2] */
		    var wrapper = options.wrapper;
		    // explicit null means no wrapper
		    if (wrapper === null) {
		      return [];
		    }

		    // nothing specified means use the default wrapper for the type
		    if (!wrapper) {
		      // get all wrappers that specify they apply to this type
		      wrapper = arrayify(formlyConfig.getWrapperByType(options.type));
		    } else {
		      wrapper = arrayify(wrapper).map(formlyConfig.getWrapper);
		    }

		    // get all wrappers for that the type specified that it uses.
		    var type = formlyConfig.getType(options.type, true, options);
		    if (type && type.wrapper) {
		      var typeWrappers = arrayify(type.wrapper).map(formlyConfig.getWrapper);
		      wrapper = wrapper.concat(typeWrappers);
		    }

		    // add form wrappers
		    if (formOptions.wrapper) {
		      var formWrappers = arrayify(formOptions.wrapper).map(formlyConfig.getWrapper);
		      wrapper = wrapper.concat(formWrappers);
		    }

		    // add the default wrapper last
		    var defaultWrapper = formlyConfig.getWrapper();
		    if (defaultWrapper) {
		      wrapper.push(defaultWrapper);
		    }
		    return wrapper;
		  }

		  function checkApi(options) {
		    formlyApiCheck['throw'](formlyApiCheck.formlyFieldOptions, options, {
		      prefix: 'formly-field directive',
		      url: 'formly-field-directive-validation-failed'
		    });
		    // validate with the type
		    var type = options.type && formlyConfig.getType(options.type);
		    if (type) {
		      if (type.validateOptions) {
		        type.validateOptions(options);
		      }
		      runApiCheck(type, options);
		    }
		    if (options.expressionProperties && options.expressionProperties.hide) {
		      formlyWarn('dont-use-expressionproperties.hide-use-hideexpression-instead', 'You have specified `hide` in `expressionProperties`. Use `hideExpression` instead', options);
		    }
		  }

		  function checkFieldGroupApi(options) {
		    formlyApiCheck['throw'](formlyApiCheck.fieldGroup, options, {
		      prefix: 'formly-field directive',
		      url: 'formly-field-directive-validation-failed'
		    });
		  }

		  function runApiCheck(_ref2, options) {
		    var apiCheck = _ref2.apiCheck;
		    var apiCheckInstance = _ref2.apiCheckInstance;
		    var apiCheckFunction = _ref2.apiCheckFunction;
		    var apiCheckOptions = _ref2.apiCheckOptions;

		    if (!apiCheck) {
		      return;
		    }
		    var instance = apiCheckInstance || formlyApiCheck;
		    var fn = apiCheckFunction || 'warn';
		    var shape = instance.shape(apiCheck);
		    instance[fn](shape, options, apiCheckOptions || {
		      prefix: 'formly-field ' + name,
		      url: formlyApiCheck.config.output.docsBaseUrl + 'formly-field-type-apicheck-failed'
		    });
		  }
		}
		formlyField.$inject = ["$http", "$q", "$compile", "$templateCache", "$interpolate", "formlyConfig", "formlyValidationMessages", "formlyApiCheck", "formlyUtil", "formlyUsability", "formlyWarn"];
		module.exports = exports['default'];

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports['default'] = formlyFocus;

		// @ngInject
		function formlyFocus($timeout, $document) {
		  return {
		    restrict: 'A',
		    link: function formlyFocusLink(scope, element, attrs) {
		      var previousEl = null;
		      var el = element[0];
		      var doc = $document[0];
		      attrs.$observe('formlyFocus', function respondToFocusExpressionChange(value) {
		        if (value === 'true') {
		          $timeout(function setElementFocus() {
		            previousEl = doc.activeElement;
		            el.focus();
		          }, ~ ~attrs.focusWait);
		        } else if (value === 'false') {
		          if (doc.activeElement === el) {
		            el.blur();
		            if (attrs.hasOwnProperty('refocus') && previousEl) {
		              previousEl.focus();
		            }
		          }
		        }
		      });
		    }
		  };
		}
		formlyFocus.$inject = ["$timeout", "$document"];
		module.exports = exports['default'];

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var _slice = Array.prototype.slice;

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = formlyForm;

		/**
		 * @ngdoc directive
		 * @name formlyForm
		 * @restrict E
		 */
		// @ngInject
		function formlyForm(formlyUsability, formlyWarn, $parse, formlyConfig, $interpolate) {
		  var currentFormId = 1;
		  FormlyFormController.$inject = ["$scope", "formlyApiCheck", "formlyUtil"];
		  return {
		    restrict: 'E',
		    template: formlyFormGetTemplate,
		    replace: true,
		    transclude: true,
		    scope: {
		      fields: '=',
		      model: '=',
		      form: '=?',
		      options: '=?'
		    },
		    controller: FormlyFormController,
		    link: formlyFormLink
		  };

		  function formlyFormGetTemplate(el, attrs) {
		    var rootEl = getRootEl();
		    var fieldRootEl = getFieldRootEl();
		    var formId = 'formly_' + currentFormId++;
		    var parentFormAttributes = '';
		    if (attrs.hasOwnProperty('isFieldGroup') && el.parent().parent().hasClass('formly')) {
		      parentFormAttributes = copyAttributes(el.parent().parent()[0].attributes);
		    }
		    return '\n        <' + rootEl + ' class="formly"\n                 name="' + getFormName() + '"\n                 role="form" ' + parentFormAttributes + '>\n          <' + fieldRootEl + ' formly-field\n               ng-repeat="field in fields ' + getTrackBy() + '"\n               ' + getHideDirective() + '="!field.hide"\n               class="formly-field"\n               options="field"\n               model="field.model || model"\n               fields="fields"\n               form="theFormlyForm"\n               form-id="' + getFormName() + '"\n               form-state="options.formState"\n               form-options="options"\n               index="$index">\n          </' + fieldRootEl + '>\n          <div ng-transclude></div>\n        </' + rootEl + '>\n      ';

		    function getRootEl() {
		      return attrs.rootEl || 'ng-form';
		    }

		    function getFieldRootEl() {
		      return attrs.fieldRootEl || 'div';
		    }

		    function getHideDirective() {
		      return attrs.hideDirective || formlyConfig.extras.defaultHideDirective || 'ng-if';
		    }

		    function getTrackBy() {
		      if (!attrs.trackBy) {
		        return '';
		      } else {
		        return 'track by ' + attrs.trackBy;
		      }
		    }

		    function getFormName() {
		      var formName = formId;
		      var bindName = attrs.bindName;
		      if (bindName) {
		        if (_angularFix2['default'].version.minor < 3) {
		          throw formlyUsability.getFormlyError('bind-name attribute on formly-form not allowed in < angular 1.3');
		        }
		        // we can do a one-time binding here because we know we're in 1.3.x territory
		        formName = '' + $interpolate.startSymbol() + '::\'formly_\' + ' + bindName + '' + $interpolate.endSymbol();
		      }
		      return formName;
		    }

		    function copyAttributes(attributes) {
		      var excluded = ['model', 'form', 'fields', 'options', 'name', 'role', 'class', 'data-model', 'data-form', 'data-fields', 'data-options', 'data-name'];
		      var arrayAttrs = [];
		      _angularFix2['default'].forEach(attributes, function (_ref) {
		        var nodeName = _ref.nodeName;
		        var nodeValue = _ref.nodeValue;

		        if (nodeName !== 'undefined' && excluded.indexOf(nodeName) === -1) {
		          arrayAttrs.push('' + toKebabCase(nodeName) + '="' + nodeValue + '"');
		        }
		      });
		      return arrayAttrs.join(' ');
		    }
		  }

		  // @ngInject
		  function FormlyFormController($scope, formlyApiCheck, formlyUtil) {
		    setupOptions();
		    $scope.model = $scope.model || {};
		    setupFields();

		    // watch the model and evaluate watch expressions that depend on it.
		    $scope.$watch('model', onModelOrFormStateChange, true);
		    if ($scope.options.formState) {
		      $scope.$watch('options.formState', onModelOrFormStateChange, true);
		    }

		    function onModelOrFormStateChange() {
		      _angularFix2['default'].forEach($scope.fields, function runFieldExpressionProperties(field, index) {
		        /*jshint -W030 */
		        var model = field.model || $scope.model;
		        field.runExpressions && field.runExpressions(model);
		        if (field.hideExpression) {
		          // can't use hide with expressionProperties reliably
		          var val = model[field.key];
		          field.hide = evalCloseToFormlyExpression(field.hideExpression, val, field, index);
		        }
		      });
		    }

		    function setupFields() {
		      $scope.fields = $scope.fields || [];
		      var fieldTransform = $scope.options.fieldTransform || formlyConfig.extras.fieldTransform;

		      if (fieldTransform) {
		        $scope.fields = fieldTransform($scope.fields, $scope.model, $scope.options, $scope.form);
		        if (!$scope.fields) {
		          throw formlyUsability.getFormlyError('fieldTransform must return an array of fields');
		        }
		      }

		      _angularFix2['default'].forEach($scope.fields, initModel); // initializes the model property if set to 'formState'
		      _angularFix2['default'].forEach($scope.fields, attachKey); // attaches a key based on the index if a key isn't specified
		      _angularFix2['default'].forEach($scope.fields, setupWatchers); // setup watchers for all fields
		    }

		    function setupOptions() {
		      formlyApiCheck['throw']([formlyApiCheck.formOptionsApi.optional], [$scope.options], { prefix: 'formly-form options check' });
		      $scope.options = $scope.options || {};
		      $scope.options.formState = $scope.options.formState || {};

		      _angularFix2['default'].extend($scope.options, {
		        updateInitialValue: updateInitialValue,
		        resetModel: resetModel
		      });
		    }

		    function updateInitialValue() {
		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        if (isFieldGroup(field)) {
		          field.options.updateInitialValue();
		        } else {
		          field.updateInitialValue();
		        }
		      });
		    }

		    function resetModel() {
		      _angularFix2['default'].forEach($scope.fields, function (field) {
		        if (isFieldGroup(field)) {
		          field.options.resetModel();
		        } else {
		          field.resetModel();
		        }
		      });
		    }

		    function initModel(field) {
		      if (_angularFix2['default'].isString(field.model)) {
		        var expression = field.model;
		        var index = $scope.fields.indexOf(field);
		        field.model = evalCloseToFormlyExpression(expression, undefined, field, index);
		        if (!field.model) {
		          throw formlyUsability.getFieldError('field-model-must-be-initialized', 'Field model must be initialized. When specifying a model as a string for a field, the result of the' + ' expression must have been initialized ahead of time.', field);
		        }
		      }
		    }

		    function attachKey(field, index) {
		      if (!isFieldGroup(field)) {
		        field.key = field.key || index || 0;
		      }
		    }

		    function setupWatchers(field, index) {
		      if (isFieldGroup(field) || !_angularFix2['default'].isDefined(field.watcher)) {
		        return;
		      }
		      var watchers = field.watcher;
		      if (!_angularFix2['default'].isArray(watchers)) {
		        watchers = [watchers];
		      }
		      _angularFix2['default'].forEach(watchers, function setupWatcher(watcher) {
		        if (!_angularFix2['default'].isDefined(watcher.listener)) {
		          throw formlyUsability.getFieldError('all-field-watchers-must-have-a-listener', 'All field watchers must have a listener', field);
		        }
		        var watchExpression = getWatchExpression(watcher, field, index);
		        var watchListener = getWatchListener(watcher, field, index);

		        var type = watcher.type || '$watch';
		        watcher.stopWatching = $scope[type](watchExpression, watchListener, watcher.watchDeep);
		      });
		    }

		    function getWatchExpression(watcher, field, index) {
		      var watchExpression = watcher.expression || 'model[\'' + field.key + '\']';
		      if (_angularFix2['default'].isFunction(watchExpression)) {
		        // wrap the field's watch expression so we can call it with the field as the first arg
		        // and the stop function as the last arg as a helper
		        var originalExpression = watchExpression;
		        watchExpression = function formlyWatchExpression() {
		          var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
		          return originalExpression.apply(undefined, _toConsumableArray(args));
		        };
		        watchExpression.displayName = 'Formly Watch Expression for field for ' + field.key;
		      }
		      return watchExpression;
		    }

		    function getWatchListener(watcher, field, index) {
		      var watchListener = watcher.listener;
		      if (_angularFix2['default'].isFunction(watchListener)) {
		        // wrap the field's watch listener so we can call it with the field as the first arg
		        // and the stop function as the last arg as a helper
		        var originalListener = watchListener;
		        watchListener = function formlyWatchListener() {
		          var args = modifyArgs.apply(undefined, [watcher, index].concat(_slice.call(arguments)));
		          return originalListener.apply(undefined, _toConsumableArray(args));
		        };
		        watchListener.displayName = 'Formly Watch Listener for field for ' + field.key;
		      }
		      return watchListener;
		    }

		    function modifyArgs(watcher, index) {
		      for (var _len = arguments.length, originalArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		        originalArgs[_key - 2] = arguments[_key];
		      }

		      return [$scope.fields[index]].concat(originalArgs, [watcher.stopWatching]);
		    }

		    function evalCloseToFormlyExpression(expression, val, field, index) {
		      var extraLocals = getFormlyFieldLikeLocals(field, index);
		      return formlyUtil.formlyEval($scope, expression, val, val, extraLocals);
		    }

		    function getFormlyFieldLikeLocals(field, index) {
		      // this makes it closer to what a regular formlyExpression would be
		      return {
		        options: field,
		        index: index,
		        formState: $scope.options.formState,
		        formId: $scope.formId
		      };
		    }
		  }

		  function formlyFormLink(scope, el, attrs) {
		    setFormController();
		    fixChromeAutocomplete();

		    function setFormController() {
		      var formId = attrs.name;
		      scope.formId = formId;
		      scope.theFormlyForm = scope[formId];
		      if (attrs.form) {
		        var getter = $parse(attrs.form);
		        var setter = getter.assign;
		        var parentForm = getter(scope.$parent);
		        if (parentForm) {
		          scope.theFormlyForm = parentForm;
		          if (scope[formId]) {
		            scope.theFormlyForm.$removeControl(scope[formId]);
		          }

		          // this next line is probably one of the more dangerous things that angular-formly does to improve the
		          // API for angular-formly forms. It ensures that the NgModelControllers inside of formly-form will be
		          // attached to the form that is passed to formly-form rather than the one that formly-form creates
		          // this is necessary because it's confusing to have a step between the form you pass in
		          // and the fields in that form. It also is because angular doesn't propagate properties like $submitted down
		          // to children forms :-( This line was added to solve this issue:
		          // https://github.com/formly-js/angular-formly/issues/287
		          // luckily, this is how the formController has been accessed by the NgModelController since angular 1.0.0
		          // so I expect it will remain this way for the life of angular 1.x
		          el.removeData('$formController');
		        } else {
		          setter(scope.$parent, scope[formId]);
		        }
		      }
		      if (!scope.theFormlyForm && !formlyConfig.disableWarnings) {
		        /* eslint no-console:0 */
		        formlyWarn('formly-form-has-no-formcontroller', 'Your formly-form does not have a `form` property. Many functions of the form (like validation) may not work', el, scope);
		      }
		    }

		    /**
		     * chrome autocomplete lameness
		     * see https://code.google.com/p/chromium/issues/detail?id=468153#c14
		     * ლ(ಠ益ಠლ)   (╯°□°)╯︵ ┻━┻    (◞‸◟；)
		     */
		    function fixChromeAutocomplete() {
		      var global = formlyConfig.extras.removeChromeAutoComplete === true;
		      var offInstance = scope.options && scope.options.removeChromeAutoComplete === false;
		      var onInstance = scope.options && scope.options.removeChromeAutoComplete === true;
		      if (global && !offInstance || onInstance) {
		        var input = document.createElement('input');
		        input.setAttribute('autocomplete', 'address-level4');
		        input.setAttribute('hidden', 'true');
		        el[0].appendChild(input);
		      }
		    }
		  }

		  // stateless util functions
		  function toKebabCase(string) {
		    if (string) {
		      return string.replace(/([A-Z])/g, function ($1) {
		        return '-' + $1.toLowerCase();
		      });
		    } else {
		      return '';
		    }
		  }

		  function isFieldGroup(field) {
		    return field && !!field.fieldGroup;
		  }
		}
		formlyForm.$inject = ["formlyUsability", "formlyWarn", "$parse", "formlyConfig", "$interpolate"];
		module.exports = exports['default'];

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = addFormlyNgModelAttrsManipulator;

		// @ngInject
		function addFormlyNgModelAttrsManipulator(formlyConfig, $interpolate) {
		  if (formlyConfig.extras.disableNgModelAttrsManipulator) {
		    return;
		  }
		  formlyConfig.templateManipulators.preWrapper.push(ngModelAttrsManipulator);

		  function ngModelAttrsManipulator(template, options, scope) {
		    /* jshint maxcomplexity:6 */
		    var el = document.createElement('div');
		    var data = options.data;
		    if (data.skipNgModelAttrsManipulator === true) {
		      return template;
		    }
		    el.innerHTML = template;
		    var modelNodes = el.querySelectorAll('[ng-model], [data-ng-model]');
		    if (!modelNodes || !modelNodes.length) {
		      return template;
		    }

		    addIfNotPresent(modelNodes, 'id', scope.id);
		    addIfNotPresent(modelNodes, 'name', scope.name || scope.id);

		    addValidation();
		    addModelOptions();
		    addTemplateOptionsAttrs();

		    return el.innerHTML;

		    function addValidation() {
		      if (_angularFix2['default'].isDefined(options.validators) || _angularFix2['default'].isDefined(options.validation.messages)) {
		        addIfNotPresent(modelNodes, 'formly-custom-validation', '');
		      }
		    }

		    function addModelOptions() {
		      if (_angularFix2['default'].isDefined(options.modelOptions)) {
		        addIfNotPresent(modelNodes, 'ng-model-options', 'options.modelOptions');
		        if (options.modelOptions.getterSetter) {
		          _angularFix2['default'].forEach(modelNodes, function (node) {
		            node.setAttribute('ng-model', 'options.value');
		          });
		        }
		      }
		    }

		    function addTemplateOptionsAttrs() {
		      if (!options.templateOptions && !options.expressionProperties) {
		        // no need to run these if there are no templateOptions or expressionProperties
		        return;
		      }
		      var to = options.templateOptions || {};
		      var ep = options.expressionProperties || {};

		      var ngModelAttributes = getBuiltInAttributes();

		      // extend with the user's specifications winning
		      _angularFix2['default'].extend(ngModelAttributes, options.ngModelAttrs);

		      // Feel free to make this more simple :-)
		      _angularFix2['default'].forEach(ngModelAttributes, function (val, name) {
		        /* eslint complexity:[2, 14] */
		        var attrVal = undefined;
		        var attrName = undefined;
		        var ref = 'options.templateOptions[\'' + name + '\']';
		        var toVal = to[name];
		        var epVal = getEpValue(ep, name);

		        var inTo = _angularFix2['default'].isDefined(toVal);
		        var inEp = _angularFix2['default'].isDefined(epVal);
		        if (val.value) {
		          // I realize this looks backwards, but it's right, trust me...
		          attrName = val.value;
		          attrVal = name;
		        } else if (val.expression && inTo) {
		          attrName = val.expression;
		          if (_angularFix2['default'].isString(to[name])) {
		            attrVal = '$eval(' + ref + ')';
		          } else if (_angularFix2['default'].isFunction(to[name])) {
		            attrVal = '' + ref + '(model[options.key], options, this, $event)';
		          } else {
		            throw new Error('options.templateOptions.' + name + ' must be a string or function: ' + JSON.stringify(options));
		          }
		        } else if (val.bound && inEp) {
		          attrName = val.bound;
		          attrVal = ref;
		        } else if ((val.attribute || val.boolean) && inEp) {
		          attrName = val.attribute || val.boolean;
		          attrVal = '' + $interpolate.startSymbol() + '' + ref + '' + $interpolate.endSymbol();
		        } else if (val.attribute && inTo) {
		          attrName = val.attribute;
		          attrVal = toVal;
		        } else if (val.boolean) {
		          if (inTo && !inEp && toVal) {
		            attrName = val.boolean;
		            attrVal = true;
		          } else {}
		        } else if (val.bound && inTo) {
		          attrName = val.bound;
		          attrVal = ref;
		        }

		        if (_angularFix2['default'].isDefined(attrName) && _angularFix2['default'].isDefined(attrVal)) {
		          addIfNotPresent(modelNodes, attrName, attrVal);
		        }
		      });
		    }
		  }

		  // Utility functions
		  function getBuiltInAttributes() {
		    var ngModelAttributes = {
		      focus: {
		        attribute: 'formly-focus'
		      }
		    };
		    var boundOnly = [];
		    var bothBooleanAndBound = ['required', 'disabled'];
		    var bothAttributeAndBound = ['pattern', 'minlength'];
		    var expressionOnly = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
		    var attributeOnly = ['placeholder', 'min', 'max', 'tabindex', 'type'];
		    if (formlyConfig.extras.ngModelAttrsManipulatorPreferUnbound) {
		      bothAttributeAndBound.push('maxlength');
		    } else {
		      boundOnly.push('maxlength');
		    }

		    _angularFix2['default'].forEach(boundOnly, function (item) {
		      ngModelAttributes[item] = { bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(bothBooleanAndBound, function (item) {
		      ngModelAttributes[item] = { boolean: item, bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(bothAttributeAndBound, function (item) {
		      ngModelAttributes[item] = { attribute: item, bound: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(expressionOnly, function (item) {
		      var propName = 'on' + item.substr(0, 1).toUpperCase() + item.substr(1);
		      ngModelAttributes[propName] = { expression: 'ng-' + item };
		    });

		    _angularFix2['default'].forEach(attributeOnly, function (item) {
		      ngModelAttributes[item] = { attribute: item };
		    });
		    return ngModelAttributes;
		  }

		  function getEpValue(ep, name) {
		    return ep['templateOptions.' + name] || ep['templateOptions[\'' + name + '\']'] || ep['templateOptions["' + name + '"]'];
		  }

		  function addIfNotPresent(nodes, attr, val) {
		    _angularFix2['default'].forEach(nodes, function (node) {
		      if (!node.getAttribute(attr)) {
		        node.setAttribute(attr, val);
		      }
		    });
		  }
		}
		addFormlyNgModelAttrsManipulator.$inject = ["formlyConfig", "$interpolate"];
		module.exports = exports['default'];

		/* eslint no-empty:0 */
		// empty to illustrate that a boolean will not be added via val.bound
		// if you want it added via val.bound, then put it in expressionProperties

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, '__esModule', {
		  value: true
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var _angularFix = __webpack_require__(3);

		var _angularFix2 = _interopRequireDefault(_angularFix);

		exports['default'] = addCustomTags;

		// @ngInject
		function addCustomTags($document) {
		  if ($document && $document.get) {
		    (function () {
		      // IE8 check ->
		      // http://stackoverflow.com/questions/10964966/detect-ie-version-prior-to-v9-in-javascript/10965203#10965203
		      var document = $document.get(0);
		      var div = document.createElement('div');
		      div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
		      var isIeLessThan9 = div.getElementsByTagName('i').length === 1;

		      if (isIeLessThan9) {
		        // add the custom elements that we need for formly
		        var customElements = ['formly-field', 'formly-form', 'formly-custom-validation', 'formly-focus', 'formly-transpose'];
		        _angularFix2['default'].forEach(customElements, function (el) {
		          document.createElement(el);
		        });
		      }
		    })();
		  }
		}
		addCustomTags.$inject = ["$document"];
		module.exports = exports['default'];

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// angular-formly-templates-bootstrap version 4.3.2 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(11), __webpack_require__(10), __webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["angular-formly", "api-check", "angular"], factory);
		else if(typeof exports === 'object')
			exports["ngFormlyTemplatesBootstrap"] = factory(require("angular-formly"), require("api-check"), require("angular"));
		else
			root["ngFormlyTemplatesBootstrap"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		module.exports = __webpack_require__(11);

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addCheckboxType);
		
		  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setType({
		      name: 'multiCheckbox',
		      template: __webpack_require__(21),
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      apiCheck: {
		        templateOptions: c.shape({
		          options: c.arrayOf(c.object),
		          labelProp: c.string.optional,
		          valueProp: c.string.optional
		        })
		      },
		      defaultOptions: {
		        noFormControl: false,
		        ngModelAttrs: {
		          required: {
		            attribute: '',
		            bound: ''
		          }
		        }
		      },
		      apiCheckInstance: c,
		      controller: /* @ngInject */["$scope", function controller($scope) {
		        var to = $scope.to;
		        var opts = $scope.options;
		        $scope.multiCheckbox = {
		          checked: [],
		          change: setModel
		        };
		
		        // initialize the checkboxes check property
		        var modelValue = $scope.model[opts.key];
		        if (angular.isArray(modelValue)) {
		          (function () {
		            var valueProp = to.valueProp || 'value';
		            angular.forEach(to.options, function (v, index) {
		              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
		            });
		          })();
		        }
		
		        function checkValidity(expressionValue) {
		          var valid = angular.isArray($scope.model[opts.key]) && $scope.model[opts.key].length > 0 && expressionValue;
		
		          $scope.fc.$setValidity('required', valid);
		        }
		
		        function setModel() {
		          $scope.model[opts.key] = [];
		          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
		            if (checkbox) {
		              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
		            }
		          });
		
		          // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
		          $scope.fc.$setTouched();
		          checkValidity(true);
		        }
		
		        if (opts.expressionProperties && opts.expressionProperties.required) {
		          $scope.$watch($scope.options.expressionProperties.required, function (newValue) {
		            checkValidity(newValue);
		          });
		        }
		
		        if ($scope.to.required) {
		          var unwatchFormControl = $scope.$watch('fc', function (newValue) {
		            if (!newValue) {
		              return;
		            }
		            checkValidity(true);
		            unwatchFormControl;
		          });
		        }
		      }]
		    });
		  }
		  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		// some versions of angular don't export the angular module properly,
		// so we get it from window in this case.
		'use strict';
		
		var angular = __webpack_require__(8);
		if (!angular.version) {
		  angular = window.angular;
		}
		module.exports = angular;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addWrappers);
		
		  function addWrappers(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setWrapper([{
		      name: 'bootstrapLabel',
		      template: __webpack_require__(17),
		      apiCheck: {
		        templateOptions: c.shape({
		          label: c.string,
		          required: c.bool.optional
		        })
		      },
		      apiCheckInstance: c
		    }, { name: 'bootstrapHasError', template: __webpack_require__(18) }]);
		  }
		  addWrappers.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  __webpack_require__(10)(ngModule);
		  __webpack_require__(1)(ngModule);
		  __webpack_require__(12)(ngModule);
		  __webpack_require__(9)(ngModule);
		  __webpack_require__(13)(ngModule);
		  __webpack_require__(14)(ngModule);
		};
		
		module.exports = exports['default'];

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _addons = __webpack_require__(15);
		
		var _addons2 = _interopRequireDefault(_addons);
		
		var _description = __webpack_require__(16);
		
		var _description2 = _interopRequireDefault(_description);
		
		exports['default'] = function (ngModule) {
		  (0, _addons2['default'])(ngModule);
		  (0, _description2['default'])(ngModule);
		};
		
		module.exports = exports['default'];

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addRadioType);
		
		  function addRadioType(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setType({
		      name: 'radio',
		      template: __webpack_require__(19),
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: {
		        noFormControl: false
		      },
		      apiCheck: {
		        templateOptions: c.shape({
		          options: c.arrayOf(c.object),
		          labelProp: c.string.optional,
		          valueProp: c.string.optional
		        })
		      },
		      apiCheckInstance: c
		    });
		  }
		  addRadioType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addCheckboxType);
		
		  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setType({
		      name: 'checkbox',
		      template: __webpack_require__(20),
		      wrapper: ['bootstrapHasError'],
		      apiCheck: {
		        templateOptions: c.shape({
		          label: c.string
		        })
		      },
		      apiCheckInstance: c
		    });
		  }
		  addCheckboxType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var ngModuleName = 'formlyBootstrap';
		var angular = __webpack_require__(4);
		var ngModule = angular.module(ngModuleName, [__webpack_require__(2)]);
		ngModule.constant('formlyBootstrapApiCheck', __webpack_require__(3)({
		  output: {
		    prefix: 'angular-formly-bootstrap'
		  }
		}));
		ngModule.constant('formlyBootstrapVersion', ("4.3.2"));
		
		__webpack_require__(5)(ngModule);
		__webpack_require__(6)(ngModule);
		__webpack_require__(7)(ngModule);
		
		exports['default'] = ngModuleName;
		module.exports = exports['default'];

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addInputType);
		
		  function addInputType(formlyConfigProvider) {
		    formlyConfigProvider.setType({
		      name: 'input',
		      template: '<input class="form-control" ng-model="model[options.key]">',
		      wrapper: ['bootstrapLabel', 'bootstrapHasError']
		    });
		  }
		  addInputType.$inject = ["formlyConfigProvider"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addSelectType);
		
		  var template = '<select class="form-control" ng-model="model[options.key]"></select>';
		
		  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setType({
		      name: 'select',
		      template: template,
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: function defaultOptions(options) {
		        /* jshint maxlen:195 */
		        var ngOptions = options.templateOptions.ngOptions || 'option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] group by option[to.groupProp || \'group\'] for option in to.options';
		        return {
		          ngModelAttrs: _defineProperty({}, ngOptions, {
		            value: 'ng-options'
		          })
		        };
		      },
		      apiCheck: {
		        templateOptions: c.shape({
		          options: c.arrayOf(c.object),
		          labelProp: c.string.optional,
		          valueProp: c.string.optional,
		          groupProp: c.string.optional
		        })
		      },
		      apiCheckInstance: c
		    });
		  }
		  addSelectType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.config(addTextareaType);
		
		  function addTextareaType(formlyConfigProvider, formlyBootstrapApiCheck) {
		    var c = formlyBootstrapApiCheck;
		    formlyConfigProvider.setType({
		      name: 'textarea',
		      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
		      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
		      defaultOptions: {
		        ngModelAttrs: {
		          rows: { attribute: 'rows' },
		          cols: { attribute: 'cols' }
		        }
		      },
		      apiCheck: {
		        templateOptions: c.shape({
		          rows: c.number.optional,
		          cols: c.number.optional
		        })
		      },
		      apiCheckInstance: c
		    });
		  }
		  addTextareaType.$inject = ["formlyConfigProvider", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.run(addAddonsManipulator);
		
		  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
		    var addonTemplate = __webpack_require__(22);
		    var addonChecker = formlyBootstrapApiCheck.shape({
		      'class': formlyBootstrapApiCheck.string.optional,
		      text: formlyBootstrapApiCheck.string.optional,
		      onClick: formlyBootstrapApiCheck.func.optional
		    }).strict.optional;
		    var api = formlyBootstrapApiCheck.shape({
		      templateOptions: formlyBootstrapApiCheck.shape({
		        addonLeft: addonChecker,
		        addonRight: addonChecker
		      })
		    });
		    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
		      if (!options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
		        return template;
		      }
		      formlyBootstrapApiCheck.warn([api], [options]);
		      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
		    });
		  }
		  addAddonsManipulator.$inject = ["formlyConfig", "formlyBootstrapApiCheck"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (ngModule) {
		  ngModule.run(addDescriptionManipulator);
		
		  function addDescriptionManipulator(formlyConfig) {
		    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
		      if (angular.isDefined(options.templateOptions.description)) {
		        var el = document.createElement('div');
		        el.appendChild(angular.element(template)[0]);
		        el.appendChild(angular.element('<p id="' + scope.id + '_description"' + 'class="help-block"' + 'ng-if="to.description">' + '{{to.description}}' + '</p>')[0]);
		        var modelEls = angular.element(el.querySelectorAll('[ng-model]'));
		        if (modelEls) {
		          modelEls.attr('aria-describedby', scope.id + '_description');
		        }
		        return el.innerHTML;
		      } else {
		        return template;
		      }
		    });
		  }
		  addDescriptionManipulator.$inject = ["formlyConfig"];
		};

		module.exports = exports['default'];

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonLeft\"\n         ng-style=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonLeft.onClick(options, this)\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonRight\"\n         ng-style=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonRight.onClick(options, this)\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>\n"

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=angular-formly-templates-bootstrap.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * angular-permission
	 * Route permission and access control as simple as it can get
	 * @version v0.3.0 - 2015-06-15
	 * @link http://www.rafaelvidaurre.com
	 * @author Rafael Vidaurre <narzerus@gmail.com>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	(function () {
	  'use strict';

	  angular.module('permission', ['ui.router'])
	    .run(['$rootScope', 'Permission', '$state', '$q',
	    function ($rootScope, Permission, $state, $q) {
	      $rootScope.$on('$stateChangeStart',
	      function (event, toState, toParams, fromState, fromParams) {
	        if (toState.$$finishAuthorize) {
	          return;
	        }

	        // If there are permissions set then prevent default and attempt to authorize
	        var permissions;
	        if (toState.data && toState.data.permissions) {
	          permissions = toState.data.permissions;
	        } else if (toState.permissions) {
	          /**
	          * This way of defining permissions will be depracated in v1. Should use
	          * `data` key instead
	          */
	          console.log('Deprecation Warning: permissions should be set inside the `data` key ');
	          console.log('Setting permissions for a state outside `data` will be depracated in' +
	            ' version 1');
	          permissions = toState.permissions;
	        }

	        if (permissions) {
	          event.preventDefault();
	          toState = angular.extend({'$$finishAuthorize': true}, toState);

	          if ($rootScope.$broadcast('$stateChangePermissionStart', toState, toParams).defaultPrevented) {
	            return;
	          }

	          Permission.authorize(permissions, toParams).then(function () {
	            // If authorized, use call state.go without triggering the event.
	            // Then trigger $stateChangeSuccess manually to resume the rest of the process
	            // Note: This is a pseudo-hacky fix which should be fixed in future ui-router versions
	            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
	              $rootScope.$broadcast('$stateChangePermissionAccepted', toState, toParams);

	              $state.go(toState.name, toParams, {notify: false}).then(function() {
	                $rootScope
	                  .$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
	              });
	            }
	          }, function () {
	            if (!$rootScope.$broadcast('$stateChangeStart', toState, toParams, fromState, fromParams).defaultPrevented) {
	              $rootScope.$broadcast('$stateChangePermissionDenied', toState, toParams);

	              var redirectTo = permissions.redirectTo;
	              var result;

	              if (angular.isFunction(redirectTo)) {
	                redirectTo = redirectTo();

	                $q.when(redirectTo).then(function (newState) {
	                  if (newState) {
	                    $state.go(newState, toParams);
	                  }
	                });

	              } else {
	                if (redirectTo) {
	                  $state.go(redirectTo, toParams);
	                }
	              }
	            }
	          });
	        }
	      });
	    }]);
	}());

	(function () {
	  'use strict';

	  angular.module('permission')
	    .provider('Permission', function () {
	      var roleValidationConfig = {};
	      var validateRoleDefinitionParams = function (roleName, validationFunction) {
	        if (!angular.isString(roleName)) {
	          throw new Error('Role name must be a string');
	        }
	        if (!angular.isFunction(validationFunction)) {
	          throw new Error('Validation function not provided correctly');
	        }
	      };

	      this.defineRole = function (roleName, validationFunction) {
	        /**
	          This method is only available in config-time, and cannot access services, as they are
	          not yet injected anywere which makes this kinda useless.
	          Should remove if we cannot find a use for it.
	        **/
	        validateRoleDefinitionParams(roleName, validationFunction);
	        roleValidationConfig[roleName] = validationFunction;

	        return this;
	      };

	      this.$get = ['$q', function ($q) {
	        var Permission = {
	          _promiseify: function (value) {
	            /**
	              Converts a value into a promise, if the value is truthy it resolves it, otherwise
	              it rejects it
	            **/
	            if (value && angular.isFunction(value.then)) {
	              return value;
	            }

	            var deferred = $q.defer();
	            if (value) {
	              deferred.resolve();
	            } else {
	              deferred.reject();
	            }
	            return deferred.promise;
	          },
	          _validateRoleMap: function (roleMap) {
	            if (typeof(roleMap) !== 'object' || roleMap instanceof Array) {
	              throw new Error('Role map has to be an object');
	            }
	            if (roleMap.only === undefined && roleMap.except === undefined) {
	              throw new Error('Either "only" or "except" keys must me defined');
	            }
	            if (roleMap.only) {
	              if (!(roleMap.only instanceof Array)) {
	                throw new Error('Array of roles expected');
	              }
	            } else if (roleMap.except) {
	              if (!(roleMap.except instanceof Array)) {
	                throw new Error('Array of roles expected');
	              }
	            }
	          },
	          _findMatchingRole: function (rolesArray, toParams) {
	            var roles = angular.copy(rolesArray);
	            var deferred = $q.defer();
	            var currentRole = roles.shift();

	            // If no roles left to validate reject promise
	            if (!currentRole) {
	              deferred.reject();
	              return deferred.promise;
	            }
	            // Validate role definition exists
	            if (!angular.isFunction(Permission.roleValidations[currentRole])) {
	              throw new Error('undefined role or invalid role validation');
	            }

	            var validatingRole = Permission.roleValidations[currentRole](toParams);
	            validatingRole = Permission._promiseify(validatingRole);

	            validatingRole.then(function () {
	              deferred.resolve();
	            }, function () {
	              Permission._findMatchingRole(roles, toParams).then(function () {
	                deferred.resolve();
	              }, function () {
	                deferred.reject();
	              });
	            });

	            return deferred.promise;
	          },
	          defineRole: function (roleName, validationFunction) {
	            /**
	              Service-available version of defineRole, the callback passed here lives in the
	              scope where it is defined and therefore can interact with other modules
	            **/
	            validateRoleDefinitionParams(roleName, validationFunction);
	            roleValidationConfig[roleName] = validationFunction;

	            return Permission;
	          },
	          resolveIfMatch: function (rolesArray, toParams) {
	            var roles = angular.copy(rolesArray);
	            var deferred = $q.defer();
	            Permission._findMatchingRole(roles, toParams).then(function () {
	              // Found role match
	              deferred.resolve();
	            }, function () {
	              // No match
	              deferred.reject();
	            });
	            return deferred.promise;
	          },
	          rejectIfMatch: function (roles, toParams) {
	            var deferred = $q.defer();
	            Permission._findMatchingRole(roles, toParams).then(function () {
	              // Role found
	              deferred.reject();
	            }, function () {
	              // Role not found
	              deferred.resolve();
	            });
	            return deferred.promise;
	          },
	          roleValidations: roleValidationConfig,
	          authorize: function (roleMap, toParams) {
	            // Validate input
	            Permission._validateRoleMap(roleMap);

	            var authorizing;

	            if (roleMap.only) {
	              authorizing = Permission.resolveIfMatch(roleMap.only, toParams);
	            } else {
	              authorizing = Permission.rejectIfMatch(roleMap.except, toParams);
	            }

	            return authorizing;
	          }
	        };

	        return Permission;
	      }];
	    });

	}());


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;
	exports.run = run;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _main = __webpack_require__(15);

	var _main2 = _interopRequireDefault(_main);

	var _formly = __webpack_require__(146);

	/*@ngInject*/
	function config($locationProvider, $compileProvider, $httpProvider, $urlRouterProvider, RestangularProvider, stateHelperProvider, formlyConfigProvider) {
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
	  formlyConfigProvider.disableWarnings = true;
	  formlyConfigProvider.setWrapper(_formly.wrappers);
	  formlyConfigProvider.setType(_formly.types);
	}
	config.$inject = ["$locationProvider", "$compileProvider", "$httpProvider", "$urlRouterProvider", "RestangularProvider", "stateHelperProvider", "formlyConfigProvider"];

	/*@ngInject*/
	function run($rootScope, $state, $stateParams, Permission, user, modals, formlyValidationMessages) {
	  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	    $rootScope.prevState = fromState;
	    $rootScope.prevParams = fromParams;
	  });
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    console.error(error);
	  });
	  $rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
	    modals.login().result.then(function (data) {
	      $state.go(toState.name, toParams);
	    }, function (data) {
	      if ($rootScope.prevState.name === '') {
	        $state.go('main.home');
	      }
	    });
	  });
	  Permission.defineRole('anonymous', function () {
	    if (!user.authenticated) {
	      return true;
	    }
	    return false;
	  });
	  formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', 'Bitte mindestens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', 'Bitte höchstens', 'Zeichen eingeben');
	  formlyValidationMessages.addTemplateOptionValueMessage('required', 'label', '', 'ist erforderlich');
	  formlyValidationMessages.messages.email = function ($viewValue) {
	    return $viewValue + ' ist keine gültige E-Mail-Adresse';
	  };
	}
	run.$inject = ["$rootScope", "$state", "$stateParams", "Permission", "user", "modals", "formlyValidationMessages"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mainJade = __webpack_require__(16);

	var _mainJade2 = _interopRequireDefault(_mainJade);

	var _mainControllerJs = __webpack_require__(17);

	var _mainControllerJs2 = _interopRequireDefault(_mainControllerJs);

	var _home = __webpack_require__(21);

	var _home2 = _interopRequireDefault(_home);

	var _contact = __webpack_require__(23);

	var _contact2 = _interopRequireDefault(_contact);

	var _software = __webpack_require__(25);

	var _software2 = _interopRequireDefault(_software);

	var _content = __webpack_require__(27);

	var _content2 = _interopRequireDefault(_content);

	var _download = __webpack_require__(108);

	var _download2 = _interopRequireDefault(_download);

	var _register = __webpack_require__(111);

	var _register2 = _interopRequireDefault(_register);

	var _author = __webpack_require__(114);

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
/* 16 */
/***/ function(module, exports) {

	module.exports='<nav role="navigation" class="navbar navbar-inverse navbar-static-top"><div class="container-fluid"><div class="navbar-header"><button type="button" data-ng-click="main.menuCollapse=!main.menuCollapse" aria-controls="mainnav" aria-expanded="{{!main.menuCollapse}}" aria-label="{{main.menuCollapse ? \'Men\xFC ausklappen\' : \'Men\xFC einklappen\'}}" class="navbar-toggle collapsed"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a data-ui-sref=".home" class="navbar-brand"><span class="fa fa-home"></span> Statistik f\xFCr Jedermann</a></div><div id="mainnav" data-collapse="main.menuCollapse" class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-left"><li data-ui-sref-active="active"><a data-ui-sref=".content"><span class="fa fa-book"></span> Inhalte</a></li><li data-ui-sref-active="active"><a data-ui-sref=".author">Authorenmodus</a></li><li data-ui-sref-active="active"><a data-ui-sref=".download"><span class="fa fa-download"></span> Download</a></li><li data-ui-sref-active="active"><a data-ui-sref=".software"><span class="fa fa-calculator"></span> Statistiksoftware</a></li><li data-ui-sref-active="active"><a data-ui-sref=".contact"><span class="fa fa-support"></span> Kontakt</a></li></ul><ul ng-if="!main.user.authenticated" class="nav navbar-nav navbar-right"><li><button type="button" data-ng-click="main.modals.login()"><span class="fa fa-sign-in"></span> Anmelden</button></li><li data-ui-sref-active="active"><a data-ui-sref=".register"><span class="fa fa-user-plus"></span> registrieren</a></li></ul><ul data-ng-if="main.user.authenticated" class="nav navbar-nav navbar-right"><li><span class="fa fa-user"></span> {{main.user.data.profile.nickname||main.user.data.email}}</li><li><button type="button" data-ng-click="::main.user.inauthenticate()"><span aria-hidden="true" class="fa fa-sign-out"></span> Abmelden</button></li></ul></div></div></nav><div ui-view class="container"></div>'

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _modalsLogin = __webpack_require__(18);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _loginJade = __webpack_require__(19);

	var _loginJade2 = _interopRequireDefault(_loginJade);

	var _loginControllerJs = __webpack_require__(20);

	var _loginControllerJs2 = _interopRequireDefault(_loginControllerJs);

	exports['default'] = {
	  template: _loginJade2['default'],
	  controller: _loginControllerJs2['default'],
	  controllerAs: 'login',
	  animation: false
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3>Anmelden</h3></div><div class="modal-body"><form role="form" novalidate name="login.loginForm" class="form-horizontal"><formly-form model="login.data" fields="login.loginFields" form="login.loginForm"></formly-form></form></div><div class="modal-footer"><input type="button" value="abbrechen" data-ng-click="login.cancel()" class="btn btn-default"><input type="button" ng-click="login.login()" ng-class="{\'btn-primary\': login.loginForm.$valid, \'btn-danger\': login.loginForm.$invalid}" value="anmelden" ng-disabled="login.loginForm.$invalid" class="btn"></div>'

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var LoginCtrl = (function () {
	  function LoginCtrl(user, $modalInstance) {
	    _classCallCheck(this, LoginCtrl);

	    this.user = user;
	    this.$modalInstance = $modalInstance;
	    this.data = {};
	    this.loginFields = [{
	      key: 'email',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'email',
	        label: 'E-Mail',
	        required: true,
	        placeholder: 'name@provider.com',
	        maxlength: 20
	      },
	      validators: {
	        userExists: {
	          expression: function expression($viewValue) {
	            return user.check('email', $viewValue);
	          },
	          message: function message($viewValue) {
	            return $viewValue + ' ist kein registrierter Benutzer';
	          }
	        }
	      },
	      modelOptions: {
	        updateOn: 'default blur',
	        debounce: { 'default': 500, blur: 0 }
	      }
	    }, {
	      key: 'password',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'password',
	        label: 'Passwort',
	        required: true,
	        placeholder: 'unlösbar',
	        minlength: 8
	      }
	    }];
	  }
	  LoginCtrl.$inject = ["user", "$modalInstance"];

	  _createClass(LoginCtrl, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;

	      return this.user.authenticate(this.data, true).then(function (data) {
	        return _this.$modalInstance.close(data);
	      }, function (e) {
	        _this.message = e.data;
	        return e;
	      });
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss('cancel');
	    }
	  }]);

	  return LoginCtrl;
	})();

	exports['default'] = LoginCtrl;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _homeJade = __webpack_require__(22);

	var _homeJade2 = _interopRequireDefault(_homeJade);

	exports['default'] = {
	  name: 'home',
	  url: '/home',
	  template: _homeJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports='<div class="jumbo-tron"><h2>Willkommen!</h2><h3>Das erwartet dich hier</h3><p>Hier kannst du die Grundlagen der psychologischen Statistik kennenlernen und dir eine Vorstellung davon erschlie\xDFen, wie und warum Statistik in der Forschung eingesetzt wird, was sie Leisten kann und was ihre Grenzen sind.. Falls du einfach nur die Inhalte deiner Statistikvorlesung etwas wiederholen m\xF6chtest oder gerade in der Klausur durchgefallen bist, laden wir dich genauso herzlich ein wie die Statistikanf\xE4nger.</p><p>Es gibt hier Lernkapitel, die sich jeweils mit einem bestimmten Themengebiet besch\xE4ftigen. Es gibt keine festgelegte Reihenfolge bei der Bearbeitung und du brauchst nicht alles von Anfang bis Ende durchzulesen, was hier zu finden ist. Manche Kapitel haben jedoch andere als Abh\xE4ngigkeiten. Bearbeite am besten zuerst die Abh\xE4ngigkeiten, bevor du ein solches Kapitel bearbeitest. Ein Kapitel besteht aus den Kernartikeln, die jeweils durch Zus\xE4tze erg\xE4nzt sind . Du kannst relativ flexibel entscheiden, ob und welche Zus\xE4tze du lesen m\xF6chtest.</p><dl class="dl-horizontal"><dt>Aufgaben</dt><dd>Die Einheit ist abgeschlossen, wenn du alle Aufgaben bearbeitet hast.</dd><dt>Beispiele</dt><dd>Wenn du mehr Hilfestellung oder Veranschaulichung brauchst, kannst du dir die Beispiele ansehen.</dd><dt>Extras</dt><dd>theoretischere Hintergrundinformationen, f\xFCr den Fall, dass du noch Luft hast und es genauer wissen m\xF6chtest</dd></dl><h3>Deine Mitarbeit ist gefragt</h3><p>Du hast die M\xF6glichkeit, Kapitel kurz mittels Rating zu bewerten, die du abgeschlossen hast. Mache bitte gro\xDFz\xFCgigen Gebrauch davon. Die Ratings k\xF6nnen beliebig oft ge\xE4ndert werden, du kannst also frei von der Leber weg bewerten.</p><p>Wir m\xF6chten nachvollziehen, ob und wie sich deine Selbsteinsch\xE4tzung deiner Statistikkenntnisse durch die Benutzung dieser Webseite ver\xE4ndert. Deswegen kannst du nicht nur Bewertungen abgeben, sondern auch deine aktuellen Statistikkenntnisse einsch\xE4tzen. Tue dies z.B., wenn du gerade ein Kapitel beendet hast oder wenn es dir gerade einf\xE4llt.</p><p ng-if="!main.user.authenticated"><a data-ui-sref="^.register" class="btn btn-primary">jetzt registrieren und anfangen.</a></p></div>'

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contactJade = __webpack_require__(24);

	var _contactJade2 = _interopRequireDefault(_contactJade);

	exports['default'] = {
	  name: 'contact',
	  url: '/contact',
	  template: _contactJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports='<h2>Kontakt</h2><p>Anfragen zu inhaltlichen Themen, technischen Schwierigkeiten, Feedback/Kritik und Anregungen sind bitte an <a href="mailto:webmaster@t-cook.de">webmaster@t-cook.de </a>zu richten. Ich werde mich dann bald des Problems annehmen. Es kann den Vorgang beschleunigen, den Nutzernamen mit anzugeben oder die Anfrage mit der E-Mail-Adresse zu schicken, die im Profil angegeben wurde.</p>'

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _softwareJade = __webpack_require__(26);

	var _softwareJade2 = _interopRequireDefault(_softwareJade);

	exports['default'] = {
	  name: 'software',
	  url: '/software',
	  template: _softwareJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports='<h2>Statistiksoftware Excel</h2><p>Mit Excel l\xE4sst sich schon einiges an statistischen Auswertungen erreichen. Es folgen ein paar Grundlagen dar\xFCber, wie man mit Excel viel Rechnerei computergest\xFCtzt durchf\xFChren kann. Es wird ein Excel 2013 zugrunde gelegt. Gr\xF6\xDFtenteils sollte das hier Beschriebene aber auch in \xE4lteren Versionen verf\xFCgbar sein.</p><accordion><accordion-group is-open="true" heading="Formeln"><p>Formeln k\xF6nnen die Grundrechenarten auf Zahlen anwenden und einer Zelle kann man eine Formel zuweisen, statt einfach direkt eine Zahl in die Zelle einzutragen. Eine Zelle mit Formel zeigt das berechnete Ergebnis als Wert an. Markiere die Zelle, in der das Ergebnis erscheinen soll und trage die Formel dort ein. Formeln beginnen mit einem Gleichheitszeichen und werden mit der Return- oder Tabtaste ausgef\xFChrt. Durch das Gleichheitszeichen wei\xDF Excel, dass es die Eingabe als Formel interpretieren soll und nicht als normalen Wert. Mit den Grundrechenoperatoren (+, -, * und /) kann man nun Rechnungen auf Grundschulniveau konstruieren. Das ist sehr bequem, wenn das formulieren schneller geht als das Rechnen, z.B. bei der Anzahl von Sekunden: <kbd>=60*60*24*7</kbd> f\xFChrt zu 604.800.</p></accordion-group><accordion-group heading="Referenzieren"><p>In Formeln kann man nicht nur die zu verrechnenden Zahlen direkt eingeben, sondern stattdessen auch die Koordinaten der Zellen, in denen die Zahlen stehen: =a1+b1*c1. Die Spalten werden von links nach rechts mit Buchstaben bezeichnet, Zeilen von oben nach unten mit Nummern. In einer Koordinate kommt zuerst die Spalte, dann die Zeile. Die Zelle in der dritten Spalte von links und der zweiten Zeile von oben hei\xDFt z.B. C2. Das Angenehme dabei ist: \xC4ndert sich der Wert einer solchen referenzierten Zelle, wird die Formel neu berechnet und der Wert der mit Formel versehenen Zelle stimmt immer.</p></accordion-group><accordion-group heading="Zellbereiche ausf\xFCllen"><p>Excel interpretiert die Koordinaten in einer Formel als relativ, bezogen auf die Formelzelle. Verschiebt man die Zelle mit der Formel z.B. um eine Spalte nach rechts, werden auch die Koordinaten in der Formel so ge\xE4ndert, als h\xE4tten sich die referenzierten Zellen mit verschoben. Um wirklich absolute Koordinaten zu erhalten, die an ihre Spalte bzw. Zeile fixiert sind, wird dem Buchstaben oder der Nummer ein Dollarzeichen vorangestellt. =$b$3 w\xE4re vollst\xE4ndig fixiert, =$b3 hingegen nur auf der Spalte. Ein Vorzug der relativen Schreibweise ist, dass man die Formel kopieren und auf eine ganze Spalte oder Zeile anwenden kann.</p><p>Beispiel: Es gibt Spalte a und b, und 20 Zeilen. Man m\xF6chte eine Spalte c erstellen, indem man in jeder Zeile den Wert aus Spalte b von dem aus Spalte a subtrahiert. Hierzu schreibt man in Zelle c1: =a1-b1. Nun kopiert man Zelle c1, markiert Zellen c2\u2014c20 und f\xFCgt die kopierte Zelle ein. Die Referenzen passen sich an die Zeilen an, in denen die Formeln stehen.</p></accordion-group><accordion-group heading="Funktionen"><p>Funktionen fassen komplexere Rechenoperationen unter einem Funktionsnamen zusammen. Sie werden mit Eingabewerten (Parametern) gef\xFCttert und geben einen Ausgabewert zur\xFCck, der aufgrund der Parameter berechnet wird. Funktionen erscheinen in Formeln, k\xF6nnen entweder deren einziger Bestandteil sein oder noch von Rechenoperatoren umgeben sein: =Funktionsname(Parameter1;Parameter2;\u2026). Die Funktion zur Berechnung der Summe hei\xDFt naheliegenderweise Summe. Um die Summe aus C2 und C3 zu berechnen, lautet der Funktionsaufruf: summe(C2;C3). Diese Aufgabe w\xE4re nat\xFCrlich mit einem direkten Formelaufruf schneller erledigt; Funktionen entfalten ihr Potential erst bei komplexeren Berechnungen wie auch Statistik.</p></accordion-group><accordion-group heading="Bereiche referenzieren"><p>Um die Summenfunktion doch noch zu rehabilitieren, kann als Parameter statt einzelner Zellen ein Zellbereich \xFCbergeben werden. Bereiche werden notiert, indem die Zellbez\xFCge f\xFCr Anfangs- und Endzelle durch einen Doppelpunkt getrennt werden: =Summe(C3:C6) entspricht =summe(c3;c4;c5;c6). Bereiche k\xF6nnen auch zweidimensional sein: c2:d4 entspricht C2, C3, C4, D2, D3 und D4. So kann man mit der Summenfunktion und Bereichsreferenzierung auch Summen \xFCber gr\xF6\xDFere Bereiche bilden, was allein mit Formeln sehr viel Tipparbeit und fehleranf\xE4lliger w\xE4re.</p></accordion-group><accordion-group heading="Funktionsbibliothek"><p>Im Men\xFC unter Formeln > Funktionsbibliothek > Mehr Funktionen > Statistisch gibt es Funktionen speziell f\xFCr statistische Berechnungen. Man muss die in Excel implementierten Funktionen also nicht auswendig eingeben, sondern kann sie aus dem Men\xFC heraus ausw\xE4hlen.</p></accordion-group></accordion>'

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _contentJade = __webpack_require__(28);

	var _contentJade2 = _interopRequireDefault(_contentJade);

	var _contentControllerJs = __webpack_require__(29);

	var _contentControllerJs2 = _interopRequireDefault(_contentControllerJs);

	var _unit = __webpack_require__(30);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'content',
	  url: '/content',
	  template: _contentJade2['default'],
	  controller: _contentControllerJs2['default'],
	  controllerAs: 'content',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
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
	          var md = __webpack_require__(42);
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
/* 28 */
/***/ function(module, exports) {

	module.exports='<nav role="navigation" class="row"><div class="col-xs-12"><ul class="nav nav-pills"><li ng-repeat="unit in content.units track by unit._id" data-ui-sref-active="active"><a data-ui-sref=".unit.description({unit: unit._id})" data-ng-bind="unit.title" data-ng-class="{\'text-success\': main.user.complete(unit._id), \'text-primary\': main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id), \'text-warning\': !main.user.requiresComplete(unit.requires)&amp;&amp;!main.user.complete(unit._id)}"></a></li></ul></div></nav><section class="row"><div data-ui-view class="col-xs-12"><h2>Wozu \xFCberhaupt Statistik?</h2><p>Psychologie leistet einen enormen Beitrag zur Gestaltung wirksamer Unterrichtsmethoden, Diagnostik und Interventionen, Marketing/Werbung, Personalauswahl und -Entwicklung, Produktdesign (Ergonomie), und weiteren Anwendungsbereichen, in denen Wissen \xFCber das Erleben und Verhalten des Menschen unabdingbar ist. Wie kommen wir aber zu diesem Wissen?</p><dl><dt>Fragestellung/Annahmen</dt><dd>Es werden Annahmen zu einem Thema aufgestellt, die sich \xFCberpr\xFCfen lassen und nach der \xDCberpr\xFCfung widerlegt oder best\xE4tigt sind. Solche Annahmen m\xFCssen widerlegbar sein, sonst bringt sie einfach keinen Erkenntnisgewinn. Das Sprichwort \u201EWenn der Hahn kr\xE4ht auf dem Mist, \xE4ndert sich das wetter oder es bleibt, wie es ist.\u201C trifft immer zu, wie das Wetter auch sein mag und es gibt keine M\xF6glichkeit, es zu widerlegen. Hingegen ist \u201EWenn der Fuchs heult, wird der Mond scheinen\u201C widerlegbar. Tats\xE4chlich verifizieren kann man solche universellen Annahmen nicht, sondern h\xF6chstens falsifizieren. Deshalb ist bei wissenschaftlichen Annahmen die Falsifizierbarkeit sehr wichtig und bezeichnend f\xFCr eine gute Annahme. Besonders etablierte Erkenntnisse haben im Grunde \u201Enur\u201C zahlreichen Falsifizierungsversuchen widerstanden. Das sind Situationen, deren Ausgang f\xFCr oder gegen die Annahme spricht. Dass die Sonne morgens aufgeht, wird jeden Morgen gepr\xFCft und wurde bisher nicht widerlegt. Es ist also eine empirisch gut fundierte, vorl\xE4ufig akzeptierte Annahme. Hier zeigt sich schon, dass der bin\xE4re Wahrheitsbegriff von wahr und unwahr zu etwas kontinuierlicherem wird.</dd><dt>Empirie</dt><dd>In Experimenten, Felduntersuchungen usw. werden Informationen \xFCber menschliches Erleben oder Verhalten gesammelt, die f\xFCr oder gegen die Annahme sprechen. Dies kann sehr schwierig sein, wenn z.B. viele andere Annahmen die gesammelten Beobachtungen ebenso gut erkl\xE4ren k\xF6nnten wie die aktuell gepr\xFCfte. Eine Annahme \xFCber Geschlechterunterschiede kann nur dann untersucht werden, wenn zwischen den beiden Gruppen m\xF6glichst nur der Geschlechterunterschied besteht.</dd><dt>Statistik</dt><dd>Gemachte Beobachtungen werden als Messwerte ausgedr\xFCckt. Dadurch ist es m\xF6glich, sie auf logisch-mathematischer Ebene zu beschreiben, zusammenzufassen und Annahmen zu pr\xFCfen. Man l\xE4sst also die Inhaltlichen Aspekte vorerst mal beiseite und arbeitet mit den Werten. Das ist z.B. n\xF6tig, weil Menschen sich nie in Bezug auf eine Annahme genau gleich verhalten. Man hat es also mit Tendenzen zu tun, die sich erst mittels Statistik extrahieren lassen.</dd><dt>Interpretation</dt><dd>Die statistischen Ergebnisse werden im Hinblick auf die Annahme interpretiert. Trifft die Annahme den Ergebnissen zufolge zu oder nicht? Gen\xFCgend so gepr\xFCfte Annahmen k\xF6nnen zu einer Theorie integriert werden. Theorien sind sozusagen die vorl\xE4ufigen \u201EWahrheiten\u201C dar\xFCber, wie die Welt funktioniert. Zumindest k\xF6nnen sie weitere konkrete Beobachtungen vorhersagen und sie erkl\xE4ren. Von konkreten Beobachtungen auf andere Beobachtungen zu schlie\xDFen, ist nicht m\xF6glich. Theorien sind in st\xE4ndiger Weiterentwicklung begriffen und werden stetig verbessert und verfeinert. Aus einer Theorie ergeben sich wiederum Annahmen, die man empirisch-statistisch pr\xFCfen kann um die Theorie zu testen.</dd></dl><h3>Warum dieser Umweg \xFCber die Statistik?</h3><h4>Objektivit\xE4t und Transparenz</h4><p>Es gibt nat\xFCrlich bessere und weniger gute Wege zu einer wissenschaftlichen Erkenntnis, aber der jeweilige Weg ist mit durch Statistik objektiv und transparent. Es ist also f\xFCr jeden klar nachvollziehbar, wie man von Einzelbeobachtungen zu einem statistischen Ergebnis gelangt ist. Dies gilt ebenso auch f\xFCr die Empirie, wo klar ersichtlich sein muss, wie die Beobachtungen zustande kamen. Vor allem aber lie\xDFe sich ohne Statistik kein verwertbares Ergebnis gewinnen, das sich hinsichtlich der gepr\xFCften Fragestellung interpretieren lie\xDFe.</p><h4>Qualit\xE4t und Verantwortung</h4><p>Durch Empirie und Statistik wird die Qualit\xE4t von Theorien gesteigert. Selbst wenn eine Theorie nicht jeden Einzelfall korrekt vorhersagen kann, erbringt diese systematische Vorgehensweise die besten Trefferquoten. Die Psychologie hat das ziel , durch sinnvolle Methodenwahl m\xF6glichst gute Theorien hervorzubringen und somit m\xF6glichst gute Vorhersagen zu liefern. Die Naturwissenschaften arbeiten empirisch und sicher h\xE4tten Sie ein Problem damit, wenn Maschinen oder Autos pl\xF6tzlich nicht mehr aufgrund m\xF6glichst sicherer und objektiver Erkenntnisse konstruiert w\xFCrden, sondern nach rein subjektivem Gutd\xFCnken (Ich baue, wie es mir gef\xE4llt). W\xFCrden Sie freiwillig ein solches Auto fahren? Warum sollte dies in der Psychologie anders sein, nur weil jeder gern seine private Psychologie pflegt? Erst so bekommt die Psychologie als Wissenschaft \xFCberhaupt einen Sinn. Wegen dieses hohen Anspruchs greifen viele Fachgebiete auf psychologische Befunde zur\xFCck, woraus der Psychologie wiederum eine gro\xDFe Verantwortung gegen\xFCber diesen Fachgebieten erw\xE4chst und gegen\xFCber den dabei involvierten Menschen. Durch fahrl\xE4ssige Behauptungen \xFCber kognitive, soziale und emotionale Entwicklung, Lernprozesse und die daraus abgeleitete Qualit\xE4t bestimmter Unterrichtsmethoden oder Therapieformen k\xF6nnten andere menschen wie Patienten, Mitarbeiter oder Sch\xFCler eine Fehlbehandlung erfahren, weil sich Personaler, Lehrer oder Berater auf diese Behauptungen verlassen. </p></div></section>'

/***/ },
/* 29 */
/***/ function(module, exports) {

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(31);

	var _unitJade = __webpack_require__(35);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitControllerJs = __webpack_require__(36);

	var _unitControllerJs2 = _interopRequireDefault(_unitControllerJs);

	var _description = __webpack_require__(37);

	var _description2 = _interopRequireDefault(_description);

	var _topic = __webpack_require__(39);

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
	    unit: /*@ngInject*/["Restangular", "$stateParams", function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires topics._id topics.title' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }]
	  },
	  children: [_description2['default'],
	  //    test,
	  _topic2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports


	// module
	exports.push([module.id, ".subkapitel {\n  background-color: #E9EAED;\n  box-shadow: 0px 1px 1px #888888;\n  line-height: 2em;\n}", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

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
/* 34 */
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
/* 35 */
/***/ function(module, exports) {

	module.exports='<header class="row"><div class="col-sm-4"><h2><a ui-sref=".description" ng-bind="unit.unit.title"></a></h2></div><div class="col-sm-8"><h2 ng-bind="unit.unit.subtitle"></h2></div></header><div class="row"><nav class="col-sm-4"><ul class="nav nav-pills nav-stacked"><li ng-repeat="topic in unit.unit.topics track by topic._id" ui-sref-active="active"><a ui-sref=".topic({topic: topic._id})" ng-bind="topic.title"></a></li><li data-ui-sref-active="active"><a data-ui-sref="main.content.unit.test">Test</a></li></ul></nav><main data-ui-view class="col-sm-8 subkapitel"></main></div>'

/***/ },
/* 36 */
/***/ function(module, exports) {

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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _descriptionJade = __webpack_require__(38);

	var _descriptionJade2 = _interopRequireDefault(_descriptionJade);

	exports['default'] = {
	  name: 'description',
	  url: '',
	  template: _descriptionJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports='<h3>Beschreibung</h3><div markdown="unit.unit.description"></div><h4>Voraussetzungen</h4><p ng-if="!unit.unit.requires">Es gibt keine Voraussetzungen.</p><ul ng-if="unit.unit.requires" class="list-unstyled"><li ng-repeat="required in unit.unit.requires"><a data-ng-bind="required.title" data-ui-sref=".({unit: required._id})"></a></li></ul>'

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicJade = __webpack_require__(40);

	var _topicJade2 = _interopRequireDefault(_topicJade);

	var _topicControllerJs = __webpack_require__(41);

	var _topicControllerJs2 = _interopRequireDefault(_topicControllerJs);

	exports['default'] = {
	  name: 'topic',
	  url: '/:topic',
	  template: _topicJade2['default'],
	  controller: _topicControllerJs2['default'],
	  controllerAs: 'topic',
	  resolve: {
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports='<h3 data-ng-bind="topic.topic.subtitle ? topic.topic.title+\': \'+topic.topic.subtitle : topic.topic.title"></h3><div markdown="topic.topic.body" math-jax></div><div role="toolbar" class="btn-toolbar"><div class="btn-group"><div dropdown is-open="status.examples" data-ng-if="topic.topic.examples.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Beispiele<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="example in topic.topic.examples"><a data-ui-sref=".example({example: example.title})" ng-bind="example.title" class="btn btn-default"></a></li></ul></div><div dropdown is-open="status.extras" data-ng-if="topic.topic.extras.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Extras<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="extra in topic.topic.extras"><a data-ui-sref=".extra({extra: extra.title})" data-ng-bind="extra.title" class="btn btn-default"></a></li></ul></div></div><div data-ng-if="main.user.authenticated" class="btn-group"><button type="button" ng-click="main.modal.akzeptanz(unit.unit)" class="btn btn-default">Kapitel bewerten</button><button type="button" data-ng-click="main.modal.fsk()" class="btn btn-default">Statistikkenntnisse einsch\xE4tzen</button></div></div><section data-ui-view></section>'

/***/ },
/* 41 */
/***/ function(module, exports) {

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
/* 42 */,
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _downloadJade = __webpack_require__(109);

	var _downloadJade2 = _interopRequireDefault(_downloadJade);

	var _downloadControllerJs = __webpack_require__(110);

	var _downloadControllerJs2 = _interopRequireDefault(_downloadControllerJs);

	exports['default'] = {
	  name: 'download',
	  url: '/download',
	  template: _downloadJade2['default'],
	  controller: _downloadControllerJs2['default'],
	  controllerAs: 'download',
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    units: /*@ngInject*/["Restangular", function units(Restangular) {
	      var query = {};
	      query.projections = 'title';
	      return Restangular.all('units').getList(query);
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports='<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren m\xF6chtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten w\xE4hlen und einstellen, welche Bestandteile du haben m\xF6chtest.</p><form novalidate name="downloadForm" role="form" method="get" action="api/downloads" class="form-horizontal"><input type="hidden" name="token" ng-value="main.user.token"><formly-form model="download.data" fields="download.fields" form="download.form"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Download" ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid&&undefined.$touched}" ng-disabled="undefined.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var DownloadController = function DownloadController(units) {
	  _classCallCheck(this, DownloadController);

	  this.units = units;
	  this.data = {
	    contents: ['body'],
	    format: 'markdown'
	  };
	  this.fields = [{
	    key: 'units',
	    type: 'horizontalMultiCheckbox',
	    templateOptions: {
	      label: 'Kapitel',
	      options: units,
	      valueProp: '_id',
	      labelProp: 'title'
	    }
	  }, {
	    key: 'contents',
	    type: 'horizontalMultiCheckboxInline',
	    templateOptions: {
	      label: 'Inhalte',
	      options: [{
	        name: 'Kerntexte',
	        value: 'body'
	      }, {
	        name: 'Beispiele',
	        value: 'examples'
	      }, {
	        name: 'Extras',
	        value: 'extras'
	      }]
	    }
	  }, {
	    key: 'format',
	    type: 'horizontalRadioInline',
	    templateOptions: {
	      label: 'DateiFormat',
	      options: [{
	        name: 'MS Word',
	        value: 'docx'
	      }, {
	        name: 'RTF',
	        value: 'rtf'
	      }, {
	        name: 'Epub',
	        value: 'epub'
	      }, {
	        name: 'Markdown',
	        value: 'markdown'
	      }, {
	        name: 'LaTeX',
	        value: 'latex'
	      }]
	    }
	  }];
	};
	DownloadController.$inject = ["units"];

	exports['default'] = DownloadController;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _registerJade = __webpack_require__(112);

	var _registerJade2 = _interopRequireDefault(_registerJade);

	var _registerControllerJs = __webpack_require__(113);

	var _registerControllerJs2 = _interopRequireDefault(_registerControllerJs);

	exports['default'] = {
	  name: 'register',
	  url: '/register',
	  template: _registerJade2['default'],
	  controller: _registerControllerJs2['default'],
	  controllerAs: 'register',
	  resolve: {
	    subjects: /*@ngInject*/["$q", function subjects($q) {
	      return $q(function (resolve, reject) {
	        var _ = __webpack_require__(119);
	        __webpack_require__.e/* nsure */(5, function () {
	          var groups = __webpack_require__(167);
	          var subjects = [];
	          _.forEach(groups, function (group, key) {
	            _.forEach(group, function (item) {
	              subjects.push({
	                name: key,
	                group: item
	              });
	            });
	          });
	          return resolve(subjects);
	        });
	      });
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports='<h2>Registrieren</h2><form role="form" novalidate name="registerForm" ng-submit="register.register()" class="form-horizontal"><fieldset><legend>Logindaten</legend><div data-ng-class="{\'has-success\': registerForm.email.$valid, \'has-error\': registerForm.email.$invalid&&registerForm.email.$touched}" class="form-group"><label for="email-input" class="col-xs-2 control-label">E-Mail-Adresse</label><div class="col-xs-10"><input type="email" name="email" id="email-input" class="form-control" required maxlength="20" placeholder="name@provider.com" data-ng-model="register.registerData.email" data-ng-model-options="{debounce: 500}" user-available><span data-ng-show="registerForm.email.$touched&&registerForm.email.$invalid" data-ng-messages="registerForm.email.$error" class="help-block"><span data-ng-message="required">Bitte gib eine E-Mail-Adresse an.</span><span data-ng-message="email">Das ist keine g\xFCltige E-mail-Adresse.</span><span data-ng-message="userAvailable">Diese E-Mail ist schon registriert.</span></span><span aria-live="assertive" data-ng-show="registerForm.email.$touched" class="help-block"><span data-ng-if="registerForm.email.$valid">Diese E-mail ist noch verf\xFCgbar.</span><span data-ng-if="registerForm.email.$pending">Pr\xFCfe Verf\xFCgbarkeit</span></span></div></div><div data-ng-class="{\'has-success\': registerForm.password.$valid, \'has-error\': registerForm.password.$invalid&&registerForm.password.$touched}" class="form-group"><label for="password-input" class="col-xs-2 control-label">Passwort</label><div class="col-xs-10"><div class="input-group"><input type="{{register.showPassword ? \'text\' : \'password\'}}" name="password" id="password-input" class="form-control" data-ng-model="register.registerData.password" required minlength="8" placeholder="unl\xF6sbar"><span class="input-group-btn"><button type="button" data-ng-click="register.showPassword=!register.showPassword" data-ng-bind="register.showPassword ? \'ausblenden\' : \'einblenden\'" class="btn btn-default"></button></span></div><span data-ng-show="registerForm.password.$touched&&registerForm.password.$invalid" data-ng-messages="registerForm.password.$error" class="help-block"><span data-ng-message="required">Bitte gib ein Passwort an.</span><span data-ng-message="minlength">Das Passwort sollte mindestens acht Zeichen lang sein.</span></span></div></div></fieldset><fieldset><legend>Personenangaben</legend><div data-ng-class="{\'has-success\': registerForm.nickname.$valid, \'has-error\': registerForm.nickname.$invalid&&registerForm.nickname.$touched}" class="form-group"><label for="nickname-input" class="col-xs-2 control-label">Nickname (optional</label><div class="col-xs-10"><input type="text" name="nickname" id="nickname-input" class="form-control" data-ng-model="register.registerData.profile.nickname" maxlength="20"></div></div><div data-ng-class="{\'has-success\': registerForm.age.$valid, \'has-error\': registerForm.age.$invalid&&registerForm.age.$touched}" class="form-group"><label for="age-input" class="col-xs-2 control-label">Alter</label><div class="col-xs-10"><input type="number" name="age" id="age-input" class="form-control" required min="0" max="100" step="1" data-ng-model="register.registerData.profile.age"><span data-ng-show="registerForm.age.$touched&&registerForm.age.$invalid" data-ng-messages="registerForm.age.$error" class="help-block"><span data-ng-message=\'0\'>J</span><span data-ng-message=\'1\'>a</span><span data-ng-message=\'2\'>h</span><span data-ng-message=\'3\'>r</span><span data-ng-message=\'4\'>e</span></span></div></div><div class="form-group"><label class="col-xs-2">Geschlecht</label><div class="col-xs-10"><label class="radio-inline"><input type="radio" name="sex" value="male" data-ng-model="register.registerData.profile.sex" required><span class="fa fa-male"></span> m\xE4nnlich</label><label class="radio-inline"><input type="radio" name="sex" value="female" data-ng-model="register.registerData.profile.sex" required><span class="fa fa-female"></span> weiblich</label></div></div></fieldset><fieldset><legend>Datenschutz</legend><p>Mit der Registrierung erkl\xE4rst du dich mit folgenden Punkten einverstanden:</p><ul><li>Wir behandeln deine Eingaben anonym und vertraulich.</li><li>Neben deinen explizit gemachten Angaben werden deine Bewegungen teilweise mit erfasst um dich nicht zus\xE4tzlich nach deiner Verweildauer, den von dir angefurften Inhalten o.\xC4. fragen zu m\xFCssen.</li><li>Zu Forschungszwecken werten wir alle Nutzerdaten wissenschaftlich aus.</li><li>Wir behalten uns das Recht vor, dich zu Forschungszwecken \xFCber deine hier angegebene E-Mail-Adresse kontaktieren zu k\xF6nnen.</li></ul><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Einverstanden und Registrieren" ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid&&undefined.$touched}" ng-disabled="undefined.$invalid" class="btn"></div></div></fieldset></form>'

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var RegisterCtrl = (function () {
	  function RegisterCtrl(user, subjects, $state) {
	    _classCallCheck(this, RegisterCtrl);

	    this.user = user;
	    this.subjects = subjects;
	    this.$state = $state;
	    this.registerData = {
	      role: 'user',
	      profile: {
	        age: 20
	      }
	    };
	    this.fields = [{
	      key: 'email',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'E-Mail-Adresse',
	        type: 'email',
	        required: true
	      }
	    }, {
	      key: 'password',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Passwort',
	        type: 'password',
	        minlength: 8,
	        required: true
	      }
	    }, {
	      key: 'profile.nickname',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Nickname'
	      }
	    }, {
	      key: 'profile.age',
	      type: 'horizontalInput',
	      templateOptions: {
	        label: 'Alter',
	        type: 'number',
	        placeholder: 20
	      }
	    }, {
	      key: 'profile.sex',
	      type: 'horizontalRadioInline',
	      templateOptions: {
	        label: 'Geschlecht',
	        required: true,
	        options: [{
	          name: 'männlich',
	          value: 'male'
	        }, {
	          name: 'weiblich',
	          value: 'female'
	        }]
	      }
	    }];
	  }
	  RegisterCtrl.$inject = ["user", "subjects", "$state"];

	  _createClass(RegisterCtrl, [{
	    key: 'register',
	    value: function register() {
	      var _this = this;

	      return this.user.create(this.registerData).then(function (data) {
	        return _this.user.authenticate(_this.registerData, false).then(function () {
	          ;
	          _this.$state.go('^.home');
	        });
	      }, function (e) {
	        _this.error = e;
	      });
	    }
	  }]);

	  return RegisterCtrl;
	})();

	exports['default'] = RegisterCtrl;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _authorJade = __webpack_require__(115);

	var _authorJade2 = _interopRequireDefault(_authorJade);

	var _units = __webpack_require__(116);

	var _units2 = _interopRequireDefault(_units);

	var _vega = __webpack_require__(144);

	var _vega2 = _interopRequireDefault(_vega);

	exports['default'] = {
	  name: 'author',
	  url: '/author',
	  template: _authorJade2['default'],
	  data: {
	    permissions: {
	      except: ['anonymous']
	    }
	  },
	  resolve: {
	    markdown: /*@ngInject*/["$q", "$ocLazyLoad", function markdown($q, $ocLazyLoad) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(1/* duplicate */, function () {
	          var md = __webpack_require__(42);
	          if (!md) {
	            return reject('markdown not loaded');
	          }
	          return resolve($ocLazyLoad.load({ name: md }));
	        });
	      });
	    }],
	    breadCrumb: /*@ngInject*/["$q", "$ocLazyLoad", function breadCrumb($q, $ocLazyLoad) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(4, function () {
	          var breadCrumb = __webpack_require__(145);
	          if (!breadCrumb) {
	            return reject('breadCrumb not loaded');
	          }
	          return resolve($ocLazyLoad.load({ name: 'ncy-angular-breadcrumb' }));
	        });
	      });
	    }]
	  },
	  ncyBreadcrumb: { label: 'Autorentool' },
	  children: [_units2['default'], _vega2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-xs-12"><div ncy-breadcrumb></div><h2>Authorenmodus</h2><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".units">Kapitel</a></li><li ui-sref-active="active"><a ui-sref=".vega">Vega</a></li></ul><div ui-view><p>Dies ist der Autorenmodus. Nur WBT-Autoren k\xF6nnen ihn verwenden und mit seiner Hilfe die Inhalte des WBT bearbeiten.</p></div></div></div>'

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitsJade = __webpack_require__(117);

	var _unitsJade2 = _interopRequireDefault(_unitsJade);

	var _unitsControllerJs = __webpack_require__(118);

	var _unitsControllerJs2 = _interopRequireDefault(_unitsControllerJs);

	var _unit = __webpack_require__(120);

	var _unit2 = _interopRequireDefault(_unit);

	exports['default'] = {
	  name: 'units',
	  url: '/units',
	  template: _unitsJade2['default'],
	  controller: _unitsControllerJs2['default'],
	  controllerAs: 'units',
	  resolve: {
	    units: ['Restangular', function (Restangular) {
	      var projections = 'title';
	      var options = { sort: 'position' };
	      var query = { projections: projections, options: options };
	      return Restangular.all('units').getList(query);
	    }]
	  },
	  ncyBreadcrumb: { label: 'Kapitel' },
	  children: [_unit2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports='<h3><button type="button" ng-click="units.collapse=!units.collapse" class="btn btn-default"><span ng-class="units.collapse ? \'fa-toggle-off\' : \'fa-toggle-on\'" aria-hidden="true" class="fa"></span> {{units.collapse ? \'einblenden\' : \'ausblenden\'}}</button><br><span>Kapitel\xFCbersicht</span></h3><div collapse="units.collapse"><form novalidate name="unitsForm" class="form-horizontal"><div class="form-group"><label for="selectUnit" class="col-xs-2 control-label">Kapitel</label><div class="col-xs-10"><select id="selectUnit" name="selectUnit" ng-model="units.selected" ng-options="u.title for u in units.units track by u._id" class="form-control"></select></div></div><div ng-if="units.selected" class="form-group"><label class="col-xs-2">Funktionen</label><div class="col-xs-10"><div class="button-group"><a ui-sref="main.content.unit.description({unit: units.selected._id})" class="btn btn-primary">Anschauen</a><a ui-sref=".unit.basics({unit: units.selected._id})" class="btn btn-default">Bearbeiten</a><button type="button" ng-click="units.remove()" class="btn btn-default">L\xF6schen</button></div></div></div></form></div><div ui-view><h3>Neues Kapitel anlegen</h3><form novalidate name="units.newForm" ng-submit="units.save()" class="form-horizontal"><formly-form model="units.new" fields="units.newFields" form="units.newForm"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Anlegen" ng-class="{\'btn-primary\': units.newForm.$valid,\'btn-danger\': units.newForm.$invalid&&units.newForm.$touched}" ng-disabled="units.newForm.$invalid" class="btn"></div></div></formly-form></form></div>'

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(119);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var UnitsController = (function () {
	  function UnitsController(units) {
	    _classCallCheck(this, UnitsController);

	    this.collapse = false;
	    this.units = units;
	    this['new'] = {};
	    this.newFields = [{
	      key: 'title',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Titel',
	        placeholder: 'Titel des Kapitels',
	        required: true
	      }
	    }, {
	      key: 'subtitle',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Untertitel',
	        placeholder: 'Untertitel des Kapitels'
	      }
	    }, {
	      key: 'requires',
	      type: 'horizontalMultiCheckbox',
	      templateOptions: {
	        label: 'Voraussetzungen',
	        options: this.units,
	        labelProp: 'title',
	        valueProp: '_id'
	      }
	    }, {
	      key: 'description',
	      type: 'horizontalMarkdownArea',
	      templateOptions: {
	        label: 'Beschreibung',
	        required: true,
	        placeholder: 'hier Beschreibungstext eingeben'
	      }
	    }];
	  }
	  UnitsController.$inject = ["units"];

	  _createClass(UnitsController, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      return this.units.post(this['new']).then(function (unit) {
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
/* 119 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _unitJade = __webpack_require__(121);

	var _unitJade2 = _interopRequireDefault(_unitJade);

	var _unitController = __webpack_require__(122);

	var _unitController2 = _interopRequireDefault(_unitController);

	var _basics = __webpack_require__(123);

	var _basics2 = _interopRequireDefault(_basics);

	var _topics = __webpack_require__(125);

	var _topics2 = _interopRequireDefault(_topics);

	var _tests = __webpack_require__(137);

	var _tests2 = _interopRequireDefault(_tests);

	exports['default'] = {
	  name: 'unit',
	  url: '/:unit',
	  template: _unitJade2['default'],
	  controller: _unitController2['default'],
	  controllerAs: 'unit',
	  abstract: true,
	  resolve: {
	    jsonpatch: /*@ngInject*/["$q", "$ocLazyLoad", function jsonpatch($q, $ocLazyLoad) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(3, function () {
	          var jsonpatch = __webpack_require__(143);
	          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
	        });
	      });
	    }],
	    unit: /*@ngInject*/["Restangular", "$stateParams", function unit(Restangular, $stateParams) {
	      var query = { projections: 'title subtitle description requires' };
	      return Restangular.one('units', $stateParams.unit).get(query);
	    }]
	  },
	  children: [_basics2['default'], _topics2['default'], _tests2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports='<h3 ng-bind="unit.unit.title"></h3><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".basics">Grunddaten</a></li><li ui-sref-active="active"><a ui-sref=".topics">Subkapitel</a></li><li ui-sref-active="active"><a ui-sref=".tests">Testaufgaben</a></li></ul><div ui-view></div>'

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(119);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var UnitCtrl = function UnitCtrl($scope, jsonpatch, unit) {
	  var _this = this;

	  _classCallCheck(this, UnitCtrl);

	  this.unit = unit.plain();
	  this.patches = [];
	  this.error = null;
	  this.unitFields = [{
	    key: '_id',
	    type: 'horizontalStatic',
	    templateOptions: {
	      label: 'ID'
	    }
	  }, {
	    key: 'title',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Titel',
	      placeholder: 'Titel des Kapitels',
	      required: true
	    }
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Kapitels'
	    }
	  }, {
	    key: 'requires',
	    type: 'horizontalMultiCheckbox',
	    templateOptions: {
	      label: 'Voraussetzungen',
	      valueProp: '_id',
	      labelProp: 'title',
	      options: _lodash2['default'].reject($scope.units.units, { _id: unit._id })
	    }
	  }, {
	    key: 'description',
	    type: 'horizontalMarkdownArea',
	    templateOptions: {
	      label: 'Beschreibung',
	      required: true,
	      placeholder: 'Beschreibungstext'
	    }
	  }];
	  $scope.$watch('units.units', function (val, oldVal) {
	    _this.unitFields[3].templateOptions.options = _lodash2['default'].reject($scope.units.units, { _id: unit._id });
	  }, true);
	  $scope.$watch('unit.unit', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
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
	};
	UnitCtrl.$inject = ["$scope", "jsonpatch", "unit"];

	exports['default'] = UnitCtrl;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _basicsJade = __webpack_require__(124);

	var _basicsJade2 = _interopRequireDefault(_basicsJade);

	exports['default'] = {
	  name: 'basics',
	  url: '',
	  template: _basicsJade2['default'],
	  ncyBreadcrumb: { label: '{{unit.unit.title}} — Grunddaten' }
	};
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports='<form novalidate name="basicsForm" class="form-horizontal"><formly-form model="unit.unit" fields="unit.unitFields" form="unit.unitForm"></formly-form><div ng-if="unit.patches.length===0" role="alert" class="alert alert-success">alles hochgeladen</div><div ng-if="unit.patches.length&gt;0" role="alert" class="alert alert-info">lade \xC4nderungen hoch</div><div ng-if="unit.error" role="alert" class="alert alert-danger"><button type="button" ng-click="unit.unit=unit.recover">r\xFCckg\xE4ngig</button><span>Fehler beim Hochladen</span></div></form>'

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicsJade = __webpack_require__(126);

	var _topicsJade2 = _interopRequireDefault(_topicsJade);

	var _topicsController = __webpack_require__(127);

	var _topicsController2 = _interopRequireDefault(_topicsController);

	var _topic = __webpack_require__(128);

	var _topic2 = _interopRequireDefault(_topic);

	exports['default'] = {
	  name: 'topics',
	  url: '/topics',
	  template: _topicsJade2['default'],
	  controller: _topicsController2['default'],
	  controllerAs: 'topics',
	  ncyBreadcrumb: { label: '{{unit.unit.title}} — Subkapitel' },
	  resolve: {
	    topics: /*@ngInject*/["Restangular", "$stateParams", function topics(Restangular, $stateParams) {
	      var query = { projections: 'topics.title topics._id' };
	      return Restangular.one('units', $stateParams.unit).all('topics').getList(query);
	    }]
	  },
	  children: [_topic2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports='<button type="button" ng-click="topics.collapse=!topics.collapse" ng-bind="topics.collapse ? \'Subkapitel\xFCbersicht einblenden\' : \'Subkapitel\xFCbersicht ausblenden\'" class="btn btn-default"></button><div collapse="topics.collapse"><form novalidate name="topicsForm" class="form-horizontal"><div class="form-group"><label for="selectTopic" class="col-xs-2 control-label">Subkapitel</label><div class="col-xs-10"><select id="selectTopic" ng-options="t.title for t in topics.topics track by t._id" ng-model="topics.selected" class="form-control"></select></div></div><div ng-if="topics.selected" class="form-group"><label class="col-xs-2">Funktionen</label><div class="col-xs-10"><div class="button-group"><button type="button" ng-click="topics.moveUp()">hoch</button><button type="button" ng-click="topics.moveDown()">runter</button><a ui-sref=".topic.basics({topic: topics.selected._id})">bearbeiten</a><button type="button" ng-click="topics.remove()">l\xF6schen</button></div></div></div></form></div><ui-view><h3>Neues Subkapitel anlegen</h3><form novalidate name="newForm" ng-submit="topics.save()" class="form-horizontal"><formly-form model="topics.new" fields="topics.newFields" form="topics.newForm"><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="submit" value="Anlegen" ng-disabled="topics.newForm.$invalid" class="btn btn-default"></div></div></formly-form></form></ui-view>'

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(119);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var TopicsCtrl = (function () {
	  function TopicsCtrl(topics) {
	    _classCallCheck(this, TopicsCtrl);

	    this.topics = topics;
	    this['new'] = {};
	    this.selected = null;
	    this.collapse = false;
	    this.newFields = [{
	      key: 'title',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'titel',
	        required: true,
	        placeholder: 'Titel des Subkapitels'
	      }
	    }, {
	      key: 'subtitle',
	      type: 'horizontalInput',
	      templateOptions: {
	        type: 'text',
	        label: 'Untertitel',
	        placeholder: 'Untertitel des Subkapitels'
	      }
	    }, {
	      key: 'body',
	      type: 'horizontalMarkdownArea',
	      templateOptions: {
	        label: 'Text',
	        required: true,
	        placeholder: 'hier Text des Subkapitels eingeben'
	      }
	    }];
	  }
	  TopicsCtrl.$inject = ["topics"];

	  _createClass(TopicsCtrl, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;

	      this.topics.post(this['new']).then(function (topic) {
	        _this.topics.push(topic);
	        _this.selected = topic;
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _topicJade = __webpack_require__(129);

	var _topicJade2 = _interopRequireDefault(_topicJade);

	var _topicControllerJs = __webpack_require__(130);

	var _topicControllerJs2 = _interopRequireDefault(_topicControllerJs);

	var _basics = __webpack_require__(131);

	var _basics2 = _interopRequireDefault(_basics);

	var _examples = __webpack_require__(133);

	var _examples2 = _interopRequireDefault(_examples);

	var _extras = __webpack_require__(135);

	var _extras2 = _interopRequireDefault(_extras);

	exports['default'] = {
	  name: 'topic',
	  url: '/:topic',
	  template: _topicJade2['default'],
	  controller: _topicControllerJs2['default'],
	  controllerAs: 'topic',
	  abstract: true,
	  resolve: {
	    topic: /*@ngInject*/["Restangular", "$stateParams", function topic(Restangular, $stateParams) {
	      return Restangular.one('units', $stateParams.unit).one('topics', $stateParams.topic).get();
	    }]
	  },
	  children: [_basics2['default'], _examples2['default'], _extras2['default']]
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports='<h3 ng-bind="topic.topic.title"></h3><ul class="nav nav-tabs"><li ui-sref-active="active"><a ui-sref=".basics">Grunddaten</a></li><li ui-sref-active="active"><a ui-sref=".examples">Beispiele</a></li><li ui-sref-active="active"><a ui-sref=".extras">Extras</a></li></ul><ui-view></ui-view>'

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/*@ngInject*/
	var TopicCtrl = function TopicCtrl($scope, jsonpatch, topic) {
	  var _this = this;

	  _classCallCheck(this, TopicCtrl);

	  this.topic = topic.plain();
	  this.patches = [];
	  this.error = null;
	  this.topicFields = [{
	    key: '_id',
	    type: 'horizontalStatic',
	    templateOptions: {
	      label: 'ID'
	    }
	  }, {
	    key: 'title',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      required: true,
	      label: 'Titel',
	      placeholder: 'Titel des Subkapitels'
	    }
	  }, {
	    key: 'subtitle',
	    type: 'horizontalInput',
	    templateOptions: {
	      type: 'text',
	      label: 'Untertitel',
	      placeholder: 'Untertitel des Subkapitels'
	    }
	  }, {
	    key: 'body',
	    type: 'horizontalMarkdownArea',
	    templateOptions: {
	      required: true,
	      label: 'Text',
	      placeholder: 'Hier Text des Subkapitels eingeben'
	    }
	  }];
	  $scope.$watch('topic.topic', function (val, oldVal) {
	    _this.patches = jsonpatch.compare(oldVal, val);
	    if (_this.patches.length === 0) {
	      return;
	    }
	    return topic.patch(_this.patches).then(function (data) {
	      _this.patches = [];
	      _this.error = false;
	    }, function (res) {
	      _this.error = true;
	      _this.recover = oldVal;
	    });
	  }, true);
	};
	TopicCtrl.$inject = ["$scope", "jsonpatch", "topic"];

	exports['default'] = TopicCtrl;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _basicsJade = __webpack_require__(132);

	var _basicsJade2 = _interopRequireDefault(_basicsJade);

	exports['default'] = {
	  name: 'basics',
	  url: '/basics',
	  template: _basicsJade2['default'],
	  ncyBreadcrumb: { label: '{{topic.topic.title}} — Grunddaten' }
	};
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports='<form novalidate name="basicsForm" class="form-horizontal"><formly-form model="topic.topic" fields="topic.topicFields" form="topic.topicForm"></formly-form></form><div ng-if="topic.patches.length===0" role="alert" class="alert alert-success">alles hochgeladen</div><div ng-if="topic.patches.length&gt;0" role="alert" class="alert alert-info">lade \xC4nderungen hoch</div><div ng-if="topic.error" role="alert" class="alert alert-danger"><button type="button" ng-click="topic.topic=topic.recover">r\xFCckg\xE4ngig</button><span>Fehler beim Hochladen</span></div>'

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _examplesJade = __webpack_require__(134);

	var _examplesJade2 = _interopRequireDefault(_examplesJade);

	exports['default'] = {
	  name: 'examples',
	  url: '/examples',
	  template: _examplesJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports='<p>Beispiele</p>'

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _extrasJade = __webpack_require__(136);

	var _extrasJade2 = _interopRequireDefault(_extrasJade);

	exports['default'] = {
	  name: 'extras',
	  url: '/extras',
	  template: _extrasJade2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports='<p>Extras</p>'

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _testsJade = __webpack_require__(138);

	var _testsJade2 = _interopRequireDefault(_testsJade);

	var _testsControllerJs = __webpack_require__(139);

	var _testsControllerJs2 = _interopRequireDefault(_testsControllerJs);

	exports['default'] = {
	  name: 'tests',
	  url: '/tests',
	  template: _testsJade2['default'],
	  controller: _testsControllerJs2['default'],
	  controllerAs: 'tests',
	  ncyBreadcrumb: { label: '{{unit.unit.title}} — Testaufgaben' },
	  resolve: {
	    ngTagsInput: /*@ngInject*/["$q", "$ocLazyLoad", function ngTagsInput($q, $ocLazyLoad) {
	      return $q(function (resolve, reject) {
	        __webpack_require__.e/* nsure */(2, function () {
	          try {
	            __webpack_require__(140);
	            __webpack_require__(142);
	          } catch (e) {
	            return reject('ngTagsInput not loaded');
	          }
	          return resolve($ocLazyLoad.load({ name: 'ngTagsInput' }));
	        });
	      });
	    }],
	    tests: /*@ngInject*/["Restangular", "$stateParams", function tests(Restangular, $stateParams) {
	      var query = {
	        conditions: {
	          unit: $stateParams.unit
	        }
	      };
	      return Restangular.all('tests').getList(query);
	    }]
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports='<h3>Testaufgaben</h3><p ng-if="tests.tests.length===0">Noch keine Testaufgaben hinzugef\xFCgt</p><form novalidate name="tests.testsForm" ng-if="tests.tests.length&gt;0" class="form-horizontal"><div class="form-group"><label for="selectTest" class="col-xs-2 control-label">Aufgabe</label><div class="col-xs-10"><select id="selectTest" name="selectTest" ng-model="tests.selected" ng-options="v.text for v in tests.tests" class="form-control"><option value="">Neue Aufgabe</option></select></div></div></form><form novalidate ng-if="tests.selected" ng-submit="tests.update()" class="form-horizontal"><formly-form model="tests.selected" fields="tests.fields" form="tests.testForm"><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><input type="button" value="L\xF6schen" ng-click="tests.remove()"><input type="submit" value="Aktualisieren"></div></div></formly-form></form><form novalidate name="tests.newTestForm" ng-submit="tests.create()" ng-if="!tests.selected" class="form-horizontal"><formly-form model="tests.newTest" fields="tests.newFields" form="tests.newTestForm"><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Erstellen" ng-class="{\'btn-primary\': tests.newTestForm.$valid,\'btn-danger\': tests.newTestForm.$invalid&&tests.newTestForm.$touched}" ng-disabled="tests.newTestForm.$invalid" class="btn"></div></div></formly-form></form>'

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodash = __webpack_require__(119);

	var _lodash2 = _interopRequireDefault(_lodash);

	/*@ngInject*/
	var TestsCtrl = (function () {
	  function TestsCtrl(tests, $stateParams) {
	    _classCallCheck(this, TestsCtrl);

	    this.$stateParams = $stateParams;
	    this.tests = tests;
	    this.newTest = this.newDefaults;
	    this.error = null;
	    this.newFields = [{
	      type: 'horizontalMarkdownArea',
	      key: 'text',
	      templateOptions: {
	        label: 'Aufgabenstamm',
	        required: true,
	        placeholder: 'Frage oder Aussage'
	      }
	    }, {
	      type: 'horizontalRadioInline',
	      key: 'type',
	      templateOptions: {
	        label: 'Aufgabenformat',
	        options: [{
	          name: 'Multiple-Choice',
	          value: 'multiple'
	        }, {
	          name: 'Single-Choice',
	          value: 'single'
	        }, {
	          name: 'Eingabe',
	          value: 'input'
	        }],
	        required: true
	      }
	    }, {
	      type: 'repeatSection',
	      key: 'choices',
	      templateOptions: {
	        btnText: 'Antwortoption hinzufügen',
	        label: 'Antwortoptionen',
	        fields: [{
	          type: 'horizontalInput',
	          key: 'text',
	          templateOptions: {
	            type: 'text',
	            label: 'Antwort',
	            placeholder: 'Lösung',
	            required: true
	          }
	        }, {
	          key: 'correct',
	          type: 'horizontalCheckbox',
	          templateOptions: {
	            label: 'Korrekt'
	          }
	        }, {
	          key: 'feedback',
	          type: 'horizontalInput',
	          templateOptions: {
	            label: 'Feedback',
	            type: 'text',
	            required: true,
	            placeholder: '*lob*'
	          }
	        }]
	      }
	    }, {
	      key: 'tags',
	      template: '<tags-input ng-model="model[options.key]"></tags-input>',
	      wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	      templateOptions: {
	        label: 'Tags'
	      }
	    }];
	    this.fields = [{
	      key: '_id',
	      type: 'horizontalStatic',
	      templateOptions: {
	        label: 'ID'
	      }
	    }];
	    this.fields = this.fields.concat(this.newFields);
	  }
	  TestsCtrl.$inject = ["tests", "$stateParams"];

	  _createClass(TestsCtrl, [{
	    key: 'create',
	    value: function create() {
	      var _this = this;

	      return this.tests.post(this.newTest).then(function (data) {
	        _this.tests.push(data);
	        _this.newTest = _this.newDefaults;
	        _this.newTestForm.$setPristine();
	      }, function (data) {
	        _this.error = data.data;
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;

	      var el = this.selected.clone();
	      return el.put().then(function (data) {
	        _lodash2['default'].merge(_this2.selected, data);
	        _this2.testForm.$setPristine();
	      }, function (e) {
	        _this2.error = e;
	      });
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var _this3 = this;

	      return this.selected.remove().then(function (data) {
	        _lodash2['default'].remove(_this3.tests, { _id: _this3.selected._id });
	        _this3.selected = null;
	      }, function (e) {
	        _this3.error = e;
	      });
	    }
	  }, {
	    key: 'newDefaults',
	    get: function get() {
	      return {
	        tags: [],
	        choices: [],
	        unit: this.$stateParams.unit
	      };
	    }
	  }]);

	  return TestsCtrl;
	})();

	exports['default'] = TestsCtrl;
	module.exports = exports['default'];

/***/ },
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ function(module, exports) {

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
/* 145 */,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// wrappers
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var wrappers = [{
	  name: 'horizontalBootstrapLabel',
	  template: __webpack_require__(147)
	}, {
	  name: 'bootstrapHasError',
	  template: __webpack_require__(148),
	  overwriteOk: true
	}];

	exports.wrappers = wrappers;
	// types
	var types = [{
	  name: 'horizontalInput',
	  'extends': 'input',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalStatic',
	  template: '<p class="form-control-static" ng-bind="model[options.key]"></p>',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
	  noFormControl: true
	}, {
	  name: 'horizontalCheckbox',
	  'extends': 'checkbox',
	  template: __webpack_require__(149),
	  wrapper: 'bootstrapHasError'
	}, {
	  name: 'horizontalMultiCheckbox',
	  'extends': 'multiCheckbox',
	  template: __webpack_require__(150),
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalMultiCheckboxInline',
	  'extends': 'horizontalMultiCheckbox',
	  template: __webpack_require__(151)
	}, {
	  name: 'horizontalTextarea',
	  'extends': 'textarea',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalMarkdownArea',
	  'extends': 'horizontalTextarea',
	  template: __webpack_require__(152)
	}, {
	  name: 'horizontalRadio',
	  'extends': 'radio',
	  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
	}, {
	  name: 'horizontalRadioInline',
	  'extends': 'horizontalRadio',
	  template: __webpack_require__(153)
	}, {
	  name: 'repeatSection',
	  template: __webpack_require__(154),
	  controller: __webpack_require__(155)
	}];
	exports.types = types;

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports='<label for="{{::id}}" ng-bind="to.required ? to.label+\' *\' : to.label" class="col-xs-2 control-label"></label><div class="col-xs-10"><formly-transclude></formly-transclude><span ng-messages="fc.$error" ng-if="showError" class="help-block"><span ng-repeat="(name, message) in options.validation.messages" role="alert" ng-message-exp="::name">{{::message(fc.$viewValue,fc.$modelValue,this)}}</span></span></div>'

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports='<div ng-class="{\'has-error\': showError, \'has-success\': fc.$valid}" class="form-group"><formly-transclude></formly-transclude></div>'

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports='<div class="col-xs-offset-2 col-xs-10"><div class="checkbox"><label><input type="checkbox" ng-model="model[options.key]"> {{to.label}}</label></div></div>'

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports='<div ng-repeat="(key, option) in to.options" class="checkbox"><label><input type="checkbox" id="{{id + \'_\'+ $index}}" ng-model="multiCheckbox.checked[$index]" ng-change="multiCheckbox.change()" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']"> {{option[to.labelProp || \'name\']}}</label></div>'

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports='<label ng-repeat="(key, option) in to.options" class="checkbox-inline"><input type="checkbox" id="{{id + \'_\'+ $index}}" ng-model="multiCheckbox.checked[$index]" ng-change="multiCheckbox.change()" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']"> {{option[to.labelProp || \'name\']}}</label>'

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports='<div class="row"><div class="col-xs-12"><ul class="nav nav-tabs"><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'markdown\'" ng-init="view=\'markdown\'" class="btn btn-default">Markdown</button></li><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'preview\'" class="btn btn-default">Vorschau</button></li><li ng-class="{\'active\': \'both\'}[view]"><button type="button" ng-click="view=\'both\'" class="btn btn-default">nebeneinander</button></li></ul></div></div><div ng-switch="view" class="row"><div ng-switch-when="markdown" class="col-xs-12"><textarea ng-model="model[options.key]" class="form-control"></textarea></div><div ng-switch-when="preview" markdown="model[options.key]" math-jax class="col-xs-12"></div><div ng-switch-when="both" class="col-xs-6"><textarea ng-model="model[options.key]" class="form-control"></textarea></div><div ng-switch-when="both" markdown="model[options.key]" math-jax class="col-xs-6"></div></div>'

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports='<label ng-repeat="option in to.options" class="radio-inline"><input type="radio" id="{{id+\'_\'+$index}}" name="{{options.key}}" ng-value="option[to.valueProp||\'value\']" ng-model="model[options.key]"> {{option[to.labelProp||\'name\']}}</label>'

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports='<h4 ng-bind="to.label"></h4><div ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)" class="repeatsection"><formly-form fields="fields" model="element" bind-name="\'formly_ng_repeat\' + index + $parent.$index"></formly-form><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><button ng-click="model[options.key].splice($index, 1)" class="btn btn-sm btn-danger">L\xF6schen</button></div></div><hr></div><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><button type="button" ng-click="addNew()" ng-bind="to.btnText" class="btn btn-primary"></button></div></div>'

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = /*@ngInject*/["$scope", function ($scope) {
	  function copyFields(fields) {
	    return angular.copy(fields);
	  }
	  function addNew() {
	    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	    var repeatsection = $scope.model[$scope.options.key];
	    var lastSection = repeatsection[repeatsection.length - 1];
	    var newsection = {};
	    repeatsection.push(newsection);
	  }
	  $scope.formOptions = { formState: $scope.formState };
	  $scope.addNew = addNew;
	  $scope.copyFields = copyFields;
	}];

	module.exports = exports["default"];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _userInterceptor = __webpack_require__(157);

	var _userInterceptor2 = _interopRequireDefault(_userInterceptor);

	var _userModel = __webpack_require__(158);

	var _userModel2 = _interopRequireDefault(_userModel);

	var _userCheckValidator = __webpack_require__(159);

	var _userCheckValidator2 = _interopRequireDefault(_userCheckValidator);

	exports['default'] = {
	  interceptor: _userInterceptor2['default'],
	  model: _userModel2['default'],
	  validator: _userCheckValidator2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports) {

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
/* 158 */
/***/ function(module, exports) {

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
	    key: 'check',
	    value: function check(name, value) {
	      var query = {};
	      query[name] = value;
	      return this.Users.head(query);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      return this.$q(function (resolve, reject) {
	        if (!_this.authenticated) {
	          _this.inauthenticate();
	          return reject('inauthenticated');
	        }
	        return resolve(_this.Users.get(_this.$storage._id));
	      }).then(function (data) {
	        _this.data = data;
	        return data;
	      });
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(form, init) {
	      var _this2 = this;

	      return this.$q(function (resolve, reject) {
	        var name = form.email;
	        var pass = form.password;
	        if (!name || !pass) {
	          return reject('missing credentials');
	        }
	        var str = _this2.$window.btoa(name + ':' + pass);
	        var authorization = 'basic ' + str;
	        return resolve(_this2.Token.get(null, { authorization: authorization }));
	      }).then(function (data) {
	        _this2.authenticated = data;
	        if (init) {
	          return _this2.init();
	        }
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
	        return data;
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
	    get: function get() {
	      return this.$storage._id && this.$storage.token ? true : false;
	    },
	    set: function set(data) {
	      this.$storage.token = data.token;
	      this.$storage._id = data._id;
	    }
	  }, {
	    key: '_id',
	    get: function get() {
	      return this.$storage._id;
	    }
	  }, {
	    key: 'token',
	    get: function get() {
	      return this.$storage.token;
	    }
	  }]);

	  return user;
	})();

	exports['default'] = user;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports) {

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
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _login2 = __webpack_require__(18);

	var _login3 = _interopRequireDefault(_login2);

	var _fsk2 = __webpack_require__(161);

	var _fsk3 = _interopRequireDefault(_fsk2);

	var _akzeptanz2 = __webpack_require__(164);

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
	      return this.$modal.open(_login3['default']);
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fskJade = __webpack_require__(162);

	var _fskJade2 = _interopRequireDefault(_fskJade);

	var _fskControllerJs = __webpack_require__(163);

	var _fskControllerJs2 = _interopRequireDefault(_fskControllerJs);

	exports['default'] = {
	  template: _fskJade2['default'],
	  controller: _fskControllerJs2['default'],
	  controllerAs: 'fsk',
	  size: 'lg'
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3>Selbsteinsch\xE4tzung deiner Statistikkenntnisse</h3></div><div class="modal-body"><form name="sesskoForm" novalidate data-ng-if="fsk.user.data.fsk.length===0"><div class="form-group"><p><strong>Ich bin f\xFCr Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> nicht begabt</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> sehr begabt</label></div><div class="form-group"><p><strong>Neues zu lernen in Statistik, f\xE4llt mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leicht</label></div><div class="form-group"><p><strong>Ich bin in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> nicht intelligent</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> sehr inntelligent</label></div><div class="form-group"><p><strong>Meine statistikbezogenen F\xE4higkeiten sind \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> niedrig</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> hoch</label></div><div class="form-group"><p><strong>Statistische Aufgaben fallen mir \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leicht</label></div></form><form novalidate name="sesskoForm2" data-ng-if="fsk.user.data.fsk.length&gt;0"><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine Begabung f\xFCr Statistik jetzt f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> geringer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"> 2</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"> 3</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"> 4</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"> 5</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> h\xF6her als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs f\xE4llt mir das Lernen von neuen statistischen Inhalten jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"> 2</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"> 3</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"> 4</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"> 5</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> schlechter zurecht als zuvor</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"> 2</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"> 3</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"> 4</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"> 5</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> besser zurecht als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs bin ich jetzt \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> schlechter in Statistik als zuvor</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"> 2</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"> 3</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"> 4</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"> 5</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> besser in Statistik als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"> 2</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"> 3</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"> 4</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"> 5</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leichter als zuvor</label></div><div class="form-group"><p><strong>Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen F\xE4higkeiten f\xFCr \u2026</strong></p><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="1" data-ng-model="fsk.sessko[5]"> niedriger als zuvor</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'2\' data-ng-model="fsk.sessko[5]"> 2</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'3\' data-ng-model="fsk.sessko[5]"> 3</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'4\' data-ng-model="fsk.sessko[5]"> 4</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'5\' data-ng-model="fsk.sessko[5]"> 5</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="6" data-ng-model="fsk.sessko[5]"> h\xF6her als zuvor</label></div></form></div><div class="modal-footer"><input type="button" data-ng-click="fsk.cancel()" value="Abbrechen" class="btn btn-default"><input type="button" data-ng-click="fsk.ok()" value="Abschicken" class="btn btn-primary"></div>'

/***/ },
/* 163 */
/***/ function(module, exports) {

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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _akzeptanzJade = __webpack_require__(165);

	var _akzeptanzJade2 = _interopRequireDefault(_akzeptanzJade);

	var _akzeptanzControllerJs = __webpack_require__(166);

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
/* 165 */
/***/ function(module, exports) {

	module.exports='<div class="modal-header"><h3 class="modal-title">Kapitel bewerten</h3></div><div class="modal-body"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft \xE4ndern.</p><form name="ratingForm" novalidate class="form-horizontal"><div class="form-group"><label id="rating-motivation" class="col-xs-8">Die Bearbeitung dieses Kapitels war f\xFCr mich sehr motivierend, weiterzumachen viel mir leicht.</label><div class="col-xs-4"><rating aria-labelledby="rating-motivation" data-ng-model="akzeptanz.summary.motivation" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'motivation\',akzeptanz.summary.motivation)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.motivation]}}"></rating></div></div><div class="form-group"><label id="rating-success" class="col-xs-8">Ich habe das Gef\xFChl, einiges \xFCber das thema dazugelernt zu haben.</label><div class="col-xs-4"><rating aria-labelledby="rating-success" data-ng-model="akzeptanz.summary.success" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'success\',akzeptanz.summary.success)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.success]}}"></rating></div></div><div class="form-group"><label id="rating-usability" class="col-xs-8">Die Webseite l\xE4sst sich gut bedienen und es ist klar, was ich als n\xE4chstes tun soll.</label><div class="col-xs-4"><rating aria-labelledby="rating-usability" data-ng-model="akzeptanz.summary.usability" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'usability\',akzeptanz.summary.usability)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.usability]}}"></rating></div></div><div class="form-group"><label for="comment-input" class="control-label">Kommentar</label><textarea id="comment-input" name="comment" data-ng-model="akzeptanz.summary.comment" placeholder="Erg\xE4nzungen, Kritik oder Anmerkungen, die du noch loswerden m\xF6chtest" class="form-control"></textarea></div></form></div><div class="modal-footer"><button type="button" data-ng-click="akzeptanz.cancel()" class="btn btn-default">abbrechen</button><button type="button" data-ng-click="akzeptanz.ok()" class="btn btn-primary">Kommentar abschicken</button></div>'

/***/ },
/* 166 */
/***/ function(module, exports) {

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