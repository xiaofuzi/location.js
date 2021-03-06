/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/Users/xiaofu/work/OpenSource/2016/node/location/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parse = __webpack_require__(1);
	
	var _parse2 = _interopRequireDefault(_parse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * the location parse class
	 */
	
	var Location = function () {
		function Location() {
			_classCallCheck(this, Location);
	
			this.$location = Object.create(null);
		}
	
		_createClass(Location, [{
			key: 'getHash',
			value: function getHash(key) {
				var val = (0, _parse2.default)(this.hash);
				if (key) {
					val = val[key];
				}
				return val;
			}
		}, {
			key: 'getSearch',
			value: function getSearch(key) {
				var val = (0, _parse2.default)(this.search);
				if (key) {
					val = val[key];
				}
				return val;
			}
		}, {
			key: 'location',
			get: function get() {
				return window.location;
			}
		}, {
			key: 'hash',
			get: function get() {
				return this.location.hash;
			}
		}, {
			key: 'search',
			get: function get() {
				return this.location.search;
			}
		}]);
	
		return Location;
	}();
	
	window.locationJS = new Location();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * parse a string like 'userName=yangxiaofu&age=22' and return an object
	 * { userName: 'yangxiaofu', age: 22}
	 * @Author: yangxiaofu
	 */
	
	/*
	 * @params { string } str
	 * @return { object }  
	 */
	function parse(str) {
	  var parsedObj = Object.create(null);
	
	  if (!str) return parsedObj;
	
	  str = str.substring(1);
	  var strArray = str.split('&');
	  strArray.forEach(function (item) {
	    var equalOper = item.indexOf('=');
	    if (equalOper != -1) {
	      var key = item.substring(0, equalOper);
	      var val = item.substring(equalOper + 1);
	
	      if (key) {
	        parsedObj[key] = val;
	      }
	    }
	  });
	
	  return parsedObj;
	}
	
	exports.default = parse;

/***/ }
/******/ ]);
//# sourceMappingURL=location.js.map