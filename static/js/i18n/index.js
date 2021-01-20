/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		11: 0,
/******/ 		24: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/santd/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([210,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 155:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%9B%BD%E9%99%85%E5%8C%96\"><a class=\"header-anchor\" href=\"#%E5%9B%BD%E9%99%85%E5%8C%96\">#</a> 国际化</h1> <p><code>Santd</code> 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。</p> <h2 id=\"localeprovider\"><a class=\"header-anchor\" href=\"#localeprovider\">#</a> LocaleProvider</h2> <p>Santd 提供了一个San组件 <a href=\"https://ecomfe.github.io/santd/#/components/localeprovider\">LocaleProvider</a> 用于全局配置国际化文案。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> zhCN <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/lib/localeprovider/zh_CN'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> LocaleProvider <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/localeprovider'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            locale<span class=\"token operator\">:</span> zhCN\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-localeprovider'</span><span class=\"token operator\">:</span> LocaleProvider\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    template<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">&lt;div>\n        &lt;s-localeprovider locale=\"&#123;&#123;locale}}\">\n            &lt;App />\n        &lt;/s-localeprovider>\n    &lt;/div></span><span class=\"token template-punctuation string\">`</span></span>\n<span class=\"token punctuation\">}</span></code></pre> <p>注意：<code>zh_CN</code> 是文件名，以下表格也遵循同样的规则。</p> <p>目前支持以下语言：</p> <table> <thead> <tr> <th>语言</th> <th>文件名</th> </tr> </thead> <tbody> <tr> <td>阿拉伯语</td> <td>ar_EG</td> </tr> <tr> <td>亚美尼亚</td> <td>hy_AM</td> </tr> <tr> <td>保加利亚语</td> <td>bg_BG</td> </tr> <tr> <td>加泰罗尼亚语</td> <td>ca_ES</td> </tr> <tr> <td>捷克语</td> <td>cs_CZ</td> </tr> <tr> <td>德语</td> <td>de_DE</td> </tr> <tr> <td>希腊语</td> <td>el_GR</td> </tr> <tr> <td>英语</td> <td>en_GB</td> </tr> <tr> <td>英语（美式）</td> <td>en_US</td> </tr> <tr> <td>西班牙语</td> <td>es_ES</td> </tr> <tr> <td>爱沙尼亚语</td> <td>et_EE</td> </tr> <tr> <td>波斯语</td> <td>fa_IR</td> </tr> <tr> <td>芬兰语</td> <td>fi_FI</td> </tr> <tr> <td>法语（比利时）</td> <td>fr_BE</td> </tr> <tr> <td>法语</td> <td>fr_FR</td> </tr> <tr> <td>希伯来语</td> <td>he_IL</td> </tr> <tr> <td>印地语</td> <td>hi_IN</td> </tr> <tr> <td>克罗地亚语</td> <td>hr_HR</td> </tr> <tr> <td>匈牙利语</td> <td>hu_HU</td> </tr> <tr> <td>冰岛语</td> <td>is_IS</td> </tr> <tr> <td>印度尼西亚语</td> <td>id_ID</td> </tr> <tr> <td>意大利语</td> <td>it_IT</td> </tr> <tr> <td>日语</td> <td>ja_JP</td> </tr> <tr> <td>卡纳达语</td> <td>kn_IN</td> </tr> <tr> <td>韩语/朝鲜语</td> <td>ko_KR</td> </tr> <tr> <td>挪威语</td> <td>nb_NO</td> </tr> <tr> <td>尼泊尔语</td> <td>ne_NP</td> </tr> <tr> <td>荷兰语（比利时）</td> <td>nl_BE</td> </tr> <tr> <td>荷兰语</td> <td>nl_NL</td> </tr> <tr> <td>波兰语</td> <td>pl_PL</td> </tr> <tr> <td>葡萄牙语(巴西)</td> <td>pt_BR</td> </tr> <tr> <td>葡萄牙语</td> <td>pt_PT</td> </tr> <tr> <td>斯洛伐克语</td> <td>sk_SK</td> </tr> <tr> <td>塞尔维亚语</td> <td>sr_RS</td> </tr> <tr> <td>斯洛文尼亚语</td> <td>sl_SI</td> </tr> <tr> <td>瑞典语</td> <td>sv_SE</td> </tr> <tr> <td>泰米尔语</td> <td>ta_IN</td> </tr> <tr> <td>泰语</td> <td>th_TH</td> </tr> <tr> <td>土耳其语</td> <td>tr_TR</td> </tr> <tr> <td>罗马尼亚语</td> <td>ro_RO</td> </tr> <tr> <td>俄罗斯语</td> <td>ru_RU</td> </tr> <tr> <td>乌克兰语</td> <td>uk_UA</td> </tr> <tr> <td>越南语</td> <td>vi_VN</td> </tr> <tr> <td>简体中文</td> <td>zh_CN</td> </tr> <tr> <td>繁体中文</td> <td>zh_TW</td> </tr> </tbody> </table> <p>具体的使用方法和新语言包贡献方式请参考 <a href=\"https://ecomfe.github.io/santd/#/components/localeprovider\">LocaleProvider</a> 文档。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(155);
        
        var script = __webpack_require__(44).default;
        module.exports = __webpack_require__(44);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ContentView = /*#__PURE__*/function (_SanComponent) {
  _inherits(ContentView, _SanComponent);

  var _super = _createSuper(ContentView);

  function ContentView() {
    _classCallCheck(this, ContentView);

    return _super.apply(this, arguments);
  }

  _createClass(ContentView, [{
    key: "inited",
    value: function inited() {
      global.hub.fire('changed', {
        "level": 0,
        "children": [{
          "level": 2,
          "title": "LocaleProvider",
          "hash": "localeprovider"
        }]
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ })

/******/ });