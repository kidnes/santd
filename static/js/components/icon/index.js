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
/******/ 		10: 0
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
/******/ 	deferredModules.push([215,0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(176);
        
        var script = __webpack_require__(64).default;
        module.exports = __webpack_require__(64);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(177);
        
        var script = __webpack_require__(65).default;
        module.exports = __webpack_require__(65);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(178);
        
        var script = __webpack_require__(66).default;
        module.exports = __webpack_require__(66);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(179);
        
        var script = __webpack_require__(67).default;
        module.exports = __webpack_require__(67);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(180);
        
        var script = __webpack_require__(68).default;
        module.exports = __webpack_require__(68);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(181);
        
        var script = __webpack_require__(69).default;
        module.exports = __webpack_require__(69);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"icon-%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#icon-%E5%9B%BE%E6%A0%87\">#</a> Icon 图标</h1> <p>语义化的矢量图形。</p> <h2 id=\"%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E\"><a class=\"header-anchor\" href=\"#%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E\">#</a> 设计师专属</h2> <p>安装 <a href=\"https://kitchen.alipay.com/\">Kitchen Sketch 插件 💎，</a> 就可以一键拖拽使用 San Toolkit Design 和 Iconfont 的海量图标，还可以关联自有项目。</p> <h2 id=\"%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8\"><a class=\"header-anchor\" href=\"#%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8\">#</a> 图标列表</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\">#</a> 基本用法</h4> <p>使用 <code>&lt;Icon /&gt;</code> 标签声明组件，指定图标对应的 <code>type</code> 属性。可以通过 <code>theme</code> 属性来设置不同的主题风格的图标，也可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>outlined<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>sync<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">spin</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rotate</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;180}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"icons-list\"> <s-icon type=\"home\"></s-icon> <s-icon type=\"setting\" theme=\"filled\"></s-icon> <s-icon type=\"smile\" theme=\"outlined\"></s-icon> <s-icon type=\"sync\" spin></s-icon> <s-icon type=\"smile\" rotate=\"{{180}}\"></s-icon> <s-icon type=\"loading\"></s-icon> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 多色图标 通过设置`theme`的属性为 `twoTone` 来渲染双色图标，并且可以设置主题色。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>heart<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>#eb2f96<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>check-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>#52c41a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 使用iconfont.cn <p>对于使用 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 的用户，通过设置 <code>createFromIconfontCN</code> 方法参数对象中的 <code>scriptUrl</code> 字段， 即可轻松地使用已有项目中的图标。 </p></text><p></p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-tuichu<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-facebook<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-twitter<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    scriptUrl<span class=\"token operator\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> IconFont\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>图标类型。遵循图标的命名规范</td> <td>string</td> <td>-</td> </tr> <tr> <td>style</td> <td>设置图标的样式，例如 <code>fontSize</code> 和 <code>color</code></td> <td>CSSProperties</td> <td>-</td> </tr> <tr> <td>theme</td> <td>图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标</td> <td>'filled' | 'outlined' | 'twoTone'</td> <td><code>outlined</code></td> </tr> <tr> <td>spin</td> <td>是否有旋转动画</td> <td>boolean</td> <td>false</td> </tr> <tr> <td>rotate</td> <td>图标旋转角度</td> <td>number</td> <td>-</td> </tr> <tr> <td>component</td> <td>控制如何渲染图标，通常是一个渲染根标签为 svg 的 San 组件，会使 type 属性失效</td> <td>SanNode</td> <td>-</td> </tr> <tr> <td>loading</td> <td>显示loading图标</td> <td>boolean</td> <td>false</td> </tr> <tr> <td>twoToneColor</td> <td>双色icon。设置双色图标的主要颜色</td> <td>string(十六进制颜色)</td> <td>-</td> </tr> </tbody> </table> <h2 id=\"svg%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#svg%E5%9B%BE%E6%A0%87\">#</a> SVG图标</h2> <p>我们使用了 <code>SVG</code> 图标，从而带来了以下优势：</p> <ul> <li>完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。</li> <li>在低端设备上 SVG 有更好的清晰度。</li> <li>支持多色图标。</li> <li>对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。</li> </ul> <p>其中 <code>theme</code>, <code>twoToneColor</code> 是新增加的属性。最佳实践是给使用的 <code>&lt;s-icon /&gt;</code> 组件传入属性 theme 以明确图标的主题风格。例如：</p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>star<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span></code></pre> <p>所有的图标都会以 <code>&lt;svg&gt;</code> 标签渲染，可以使用 <code>style</code> 和 <code>class</code> 设置图标的大小和单色图标的颜色。例如：</p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span> <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #08c<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">/></span></span></code></pre> <h2 id=\"%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2\"><a class=\"header-anchor\" href=\"#%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2\">#</a> 双色图标主色</h2> <p>对于双色图标，可以通过使用 Icon.getTwoToneColor() 和 Icon.setTwoToneColor(colorString) 来全局设置图标主色。</p> <pre class=\"language-html\"><code class=\"language-html\">Icon.setTwoToneColor('#eb2f96');\nIcon.getTwoToneColor(); // #ebef96</code></pre> <h2 id=\"%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87\">#</a> 自定义 font 图标</h2> <p>我们提供了一个 <code>createFromIconfontCN</code> 方法，方便开发者调用在 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 上自行管理的图标。</p> <pre class=\"language-html\"><code class=\"language-html\">const MyIcon = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js' // 在 iconfont.cn 上生成\n});\n\nconst CustomIcon = san.defineComponent({\n    components: {\n        'myicon': MyIcon\n    },\n    template: '<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>myicon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>myicon</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>'\n});\n\n(new CustomIcon()).attach(mountedNode);</code></pre> <p>其本质上是创建了一个使用 <code>&lt;use&gt;</code> 标签来渲染图标的组件。</p> <p><code>options</code> 的配置项如下：</p> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>scriptUrl</td> <td><a href=\"http://www.iconfont.cn\">iconfont.cn</a> 项目在线生成的 <code>js</code> 地址</td> <td>string</td> <td>-</td> </tr> <tr> <td>extraCommonProps</td> <td>给所有的 <code>svg</code> 图标 <code>&lt;s-icon /&gt;</code> 组件设置额外的属性</td> <td [key:=\"\" string]:=\"\" any=\"\"></td> <td>{}</td> </tr> </tbody> </table> <p>在 <code>scriptUrl</code> 都设置有效的情况下，组件在渲染前会自动引入 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 项目中的图标符号集，无需手动引入。</p> <p>见 <a href=\"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code\">iconfont.cn 使用帮助</a> 查看如何生成 js 地址。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/docs/desc.md
var desc = __webpack_require__(109);
var desc_default = /*#__PURE__*/__webpack_require__.n(desc);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/radio/index.js + 4 modules
var src_radio = __webpack_require__(11);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/index.js + 6 modules
var icon = __webpack_require__(8);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/input/style/index.less
var style = __webpack_require__(24);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var input_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/keyCode.js
/**
* @file 常用keyCode常量
* @author fuqiangqiang@baidu.com
*/
/* harmony default export */ var keyCode = ({
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  TAB: 9,
  ESC: 27,
  SPACE: 32
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/base.js
/**
* @file input 基础组件
* @author fuqiangqiang@baidu.com
*/



var prefixCls = Object(util["a" /* classCreator */])('input')();
/* harmony default export */ var base = (san_dev_default.a.defineComponent({
  dataTypes: {
    size: san_dev["DataTypes"].string,
    disabled: san_dev["DataTypes"].bool
  },
  initData: function initData() {
    return {
      type: 'text'
    };
  },
  inputChange: function inputChange(e) {
    var inputValue = e.target.value;
    this.data.set('value', inputValue);
    this.fire('change', inputValue);
    this.dispatch('UI:form-item-interact', {
      fieldValue: inputValue,
      type: 'change',
      e: e
    });
  },
  keydownHander: function keydownHander(e) {
    if (e.keyCode === keyCode.ENTER) {
      var inputValue = e.target.value;
      this.data.set('value', inputValue);
      this.fire('pressEnter', inputValue);
      this.dispatch('UI:form-item-interact', {
        fieldValue: inputValue,
        type: 'change',
        e: e
      });
    }
  },
  inputOnBlur: function inputOnBlur(e) {
    var inputValue = e.target.value;
    this.data.set('value', inputValue);
    this.fire('blur', inputValue);
    this.dispatch('UI:form-item-interact', {
      fieldValue: inputValue,
      type: 'blur',
      e: e
    });
  },
  focus: function focus() {
    this.ref('input').focus();
  },
  blur: function blur() {
    this.ref('input').blur();
  },
  template: "\n        <input\n            placeholder=\"{{placeholder}}\"\n            class=\"".concat(prefixCls, " {{size ? '").concat(prefixCls, "-' + size : ''}} {{disabled ? '").concat(prefixCls, "-disabled' : ''}} {{inputClasses}}\"\n            on-input=\"inputChange($event)\"\n            on-keydown=\"keydownHander($event)\"\n            on-blur=\"inputOnBlur($event)\"\n            value=\"{{value}}\"\n            disabled=\"{{disabled}}\"\n            readonly=\"{{readOnly}}\"\n            id=\"{{id}}\"\n            type=\"{{type}}\"\n            tabindex=\"{{tabIndex}}\"\n            maxlength=\"{{maxLength}}\"\n            s-ref=\"input\"\n        />\n    ")
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/input.js
/**
* @file input 输入框组件
* @author fuqiangqiang@baidu.com
*/





var input_prefixCls = Object(util["a" /* classCreator */])('input')();
/* harmony default export */ var input = (san_dev_default.a.defineComponent({
  dataTypes: {
    addonAfter: san_dev["DataTypes"].string,
    addonBefore: san_dev["DataTypes"].string,
    prefix: san_dev["DataTypes"].string,
    suffix: san_dev["DataTypes"].string,
    defaultValue: san_dev["DataTypes"].any,
    placeholder: san_dev["DataTypes"].string,
    disabled: san_dev["DataTypes"].bool,
    inputType: san_dev["DataTypes"].oneOf(['inputGroup', 'inputFix']),
    id: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    size: san_dev["DataTypes"].oneOf(['large', 'default', 'small']),
    type: san_dev["DataTypes"].string,
    value: san_dev["DataTypes"].any
  },
  components: {
    's-icon': icon["a" /* default */]
  },
  inited: function inited() {
    this.data.set('value', this.data.get('value') || this.data.get('defaultValue') || '');
    this.data.set('hasAddonBefore', this.data.get('addonBefore') || !!this.sourceSlots.named.addonBefore);
    this.data.set('hasAddonAfter', this.data.get('addonAfter') || !!this.sourceSlots.named.addonAfter);
    this.data.set('hasPrefix', this.data.get('prefix') || !!this.sourceSlots.named.prefix);
    this.data.set('hasSuffix', this.data.get('suffix') || !!this.sourceSlots.named.suffix);
  },
  handleIconClear: function handleIconClear() {
    this.data.set('value', '');
  },
  template: "\n        <span class=\"{{value && allowClear ? '".concat(input_prefixCls, "-affix-wrapper' : ''}}\">\n            <span class=\"").concat(input_prefixCls, "-group-wrapper {{size ? '").concat(input_prefixCls, "-group-wrapper-' + size: ''}}\" s-if=\"hasAddonBefore || hasAddonAfter\">\n                <span class=\"").concat(input_prefixCls, "-wrapper ").concat(input_prefixCls, "-group\">\n                    <span class=\"").concat(input_prefixCls, "-group-addon\" s-if=\"hasAddonBefore\">\n                        <slot name=\"addonBefore\" s-if=\"!addonBefore\" />\n                        <template s-else>{{addonBefore}}</template>\n                    </span>\n                    ").concat(base.prototype.template, "\n                    <span class=\"").concat(input_prefixCls, "-group-addon\" s-if=\"hasAddonAfter\">\n                        <slot name=\"addonAfter\" s-if=\"!addonAfter\" />\n                        <template s-else>{{addonAfter}}</template>\n                    </span>\n                </span>\n            </span>\n            <span class=\"").concat(input_prefixCls, "-affix-wrapper {{size ? '").concat(input_prefixCls, "-affix-wrapper-' + size: ''}}\" s-else-if=\"hasPrefix || hasSuffix\">\n                <span class=\"").concat(input_prefixCls, "-prefix\" s-if=\"hasPrefix\">\n                    <slot name=\"prefix\" s-if=\"!prefix\" />\n                    <template s-else>{{prefix}}</template>\n                </span>\n                ").concat(base.prototype.template, "\n                <span class=\"").concat(input_prefixCls, "-suffix\" s-if=\"hasSuffix\">\n                    <slot name=\"suffix\" s-if=\"!suffix\" />\n                    <template s-else>{{suffix}}</template>\n                </span>\n            </span>\n            <template s-else>\n                ").concat(base.prototype.template, "\n            </template>\n            <span\n                class=\"").concat(input_prefixCls, "-suffix\"\n                s-if=\"value && allowClear\"\n                on-click=\"handleIconClear\"\n            >\n                <s-icon type=\"close-circle\" />\n            </span>\n        </span>\n    ")
}, base));
// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/index.js + 6 modules
var src_button = __webpack_require__(7);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/input-search.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* @file input-search 输入框search组件
* @author fuqiangqiang@baidu.com
*/






var input_search_prefixCls = Object(util["a" /* classCreator */])('input')();
/* harmony default export */ var input_search = (san_dev_default.a.defineComponent({
  dataTypes: _objectSpread(_objectSpread({}, base.prototype.dataTypes), {}, {
    enterButton: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].bool]),
    loading: san_dev["DataTypes"].bool
  }),
  components: {
    's-icon': icon["a" /* default */],
    's-button': src_button["a" /* default */]
  },
  searchClick: function searchClick() {
    var inputValue = this.ref('input').value;
    this.fire('search', inputValue);
  },
  computed: {
    classes: function classes() {
      var enterButton = this.data.get('enterButton');
      var size = this.data.get('size');
      var classArr = ["".concat(input_search_prefixCls, "-search"), "".concat(input_search_prefixCls, "-affix-wrapper")];
      !!enterButton && classArr.push("".concat(input_search_prefixCls, "-search-enter-button"));
      !!size && classArr.push("".concat(input_search_prefixCls, "-affix-wrapper-").concat(size));
      return classArr;
    },
    btnType: function btnType() {
      var loading = this.data.get('loading');
      return loading && 'loading' || 'search';
    }
  },
  template: "\n        <span class=\"{{classes}}\">\n            ".concat(base.prototype.template, "\n            <span s-if=\"enterButton\" class=\"").concat(input_search_prefixCls, "-suffix\" on-click=\"searchClick()\">\n                <s-button type=\"primary\" class=\"").concat(input_search_prefixCls, "-search-button\" size=\"{{size}}\">\n                    <s-icon s-if=\"enterButton === true\" type={{btnType}} />\n                    <span s-else>{{enterButton}}</span>\n                </s-button>\n            </span>\n            <span s-else class=\"").concat(input_search_prefixCls, "-suffix\" on-click=\"searchClick()\">\n                <s-icon class=\"").concat(input_search_prefixCls, "-search-icon\" type={{btnType}} />\n            <span>\n        </span>\n    ")
}, base));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * @file calculateNodeHeight(uiTextNode, useCache = false)
 * @author fuqiangqiang edited this file
 */
var HIDDEN_TEXTAREA_STYLE = "\nmin-height:0 !important;\nmax-height:none !important;\nheight:0 !important;\nvisibility:hidden !important;\noverflow:hidden !important;\nposition:absolute !important;\nz-index:-1000 !important;\ntop:0 !important;\nright:0 !important\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea;

function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}

function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  } // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577


  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = '';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  } // Remove scroll bar flash when autosize without maxRows


  if (!maxRows) {
    overflowY = 'hidden';
  }

  return {
    height: "".concat(height, "px"),
    'min-height': "".concat(minHeight, "px"),
    'max-height': "".concat(maxHeight, "px"),
    overflowY: overflowY
  };
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/textarea.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
* @file textarea组件
* @author fuqiangqiang@baidu.com
*/




var textarea_prefixCls = Object(util["a" /* classCreator */])('input')();
/* harmony default export */ var input_textarea = (san_dev_default.a.defineComponent({
  dataTypes: {
    defaultValue: san_dev["DataTypes"].string,
    value: san_dev["DataTypes"].string
  },
  attached: function attached() {
    this.resizeTextarea();
    var value = this.data.get('value') || '';

    if (!value) {
      var defaultValue = this.data.get('defaultValue') || '';
      this.data.set('value', defaultValue);
    }
  },
  updated: function updated() {
    this.resizeTextarea();
  },
  resizeTextarea: function resizeTextarea() {
    var autosize = this.data.get('autosize');
    var textareaStyles;

    if (!autosize) {
      return;
    } // 如果autosize里面传的是字符串对象，需要进行解析


    if (typeof autosize === 'boolean') {
      textareaStyles = calculateNodeHeight(this.el, false, null, null);
    } else if (_typeof(autosize) === 'object') {
      textareaStyles = calculateNodeHeight(this.el, false, autosize.minRows, autosize.maxRows);
    }

    this.data.set('styles', textareaStyles);
  },
  handleKeyDown: function handleKeyDown(e) {
    if (e.keyCode === keyCode.ENTER) {
      this.fire('pressEnter', e.target.value);
    }
  },
  handleTextareaChange: function handleTextareaChange(e) {
    var _this = this;

    this.nextTick(function () {
      _this.resizeTextarea();
    });
    this.fire('change', e.target.value);
    this.dispatch('UI:form-item-interact', {
      fieldValue: e.target.value,
      type: 'change',
      e: e
    });
  },
  handleBlur: function handleBlur(e) {
    this.fire('textareaBlur', e.target.value);
    this.dispatch('UI:form-item-interact', {
      fieldValue: e.target.value,
      type: 'change',
      e: e
    });
  },
  template: "\n        <textarea\n            class=\"".concat(textarea_prefixCls, " {{disabled ? '").concat(textarea_prefixCls, "-disabled': ''}}\"\n            style=\"{{styles}}\"\n            cols=\"{{cols}}\"\n            rows=\"{{rows}}\"\n            disabled=\"{{disabled}}\"\n            maxlength=\"{{maxlength}}\"\n            name=\"{{name}}\"\n            readonly=\"{{readOnly}}\"\n            autofocus=\"{{autofocus}}\"\n            placeholder=\"{{placeholder}}\"\n            on-input=\"handleTextareaChange($event)\"\n            on-keydown=\"handleKeyDown($event)\"\n            on-blur=\"handleBlur($event)\"\n            value=\"{=value=}\"\n        ></textarea>\n    ")
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/group.js
/**
* @file inputGroup 输入框组件
* @author fuqiangqiang@baidu.com
*/


var group_prefixCls = Object(util["a" /* classCreator */])('input-group')();
/* harmony default export */ var group = (san_dev_default.a.defineComponent({
  dataTypes: {
    size: san_dev["DataTypes"].string,
    compact: san_dev["DataTypes"].bool
  },
  initData: function initData() {
    return {
      size: 'default'
    };
  },
  template: "\n        <div class=\"".concat(group_prefixCls, " ").concat(group_prefixCls, "-{{size}} {{compact ? '").concat(group_prefixCls, "-compact' : ''}}\">\n            <slot />\n        </div>\n    ")
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/input-password.js
function input_password_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function input_password_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_password_ownKeys(Object(source), true).forEach(function (key) { input_password_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_password_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function input_password_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* @file inputPassword 输入框密码组件
* @author fuqiangqiang@baidu.com
*/




var input_password_prefixCls = Object(util["a" /* classCreator */])('input')();
/* harmony default export */ var input_password = (san_dev_default.a.defineComponent({
  dataTypes: input_password_objectSpread(input_password_objectSpread({}, base.prototype.dataTypes), {}, {
    type: san_dev["DataTypes"].string,
    visibilityToggle: san_dev["DataTypes"].bool
  }),
  components: {
    's-icon': icon["a" /* default */]
  },
  initData: function initData() {
    return {
      type: 'password',
      visibilityToggle: true
    };
  },
  handleEye: function handleEye() {
    var type = this.data.get('type');
    this.data.set('type', type === 'text' ? 'password' : 'text');
  },
  template: "\n        <span class=\"".concat(input_password_prefixCls, "-password ").concat(input_password_prefixCls, "-affix-wrapper\">\n            ").concat(base.prototype.template, "\n            <span class=\"").concat(input_password_prefixCls, "-suffix\" s-if=\"visibilityToggle\" on-click=\"handleEye\">\n                <s-icon type=\"eye{{type === 'password' ? '-invisible' : ''}}\" />\n            </span>\n        </span>\n    ")
}, base));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/input/index.js
/**
* @file input 入口文件
*/





input.Search = input_search;
input.TextArea = input_textarea;
input.Group = group;
input.Password = input_password;
/* harmony default export */ var src_input = (input);
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/iconDisplay/themeIcons.js
/**
 * @file Santd icon display theme icons file
 **/

var FilledIcon = san_dev_default.a.defineComponent({
  initData: function initData() {
    return {
      path: 'M864 64H160C107 64 64 107 64 160v' + '704c0 53 43 96 96 96h704c53 0 96-43 96-96V16' + '0c0-53-43-96-96-96z'
    };
  },
  template: "\n        <svg width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 1024 1024\">\n            <path d=\"{{path}}\" />\n        </svg>\n    "
});
var OutlinedIcon = san_dev_default.a.defineComponent({
  initData: function initData() {
    return {
      path: 'M864 64H160C107 64 64 107 64 160v7' + '04c0 53 43 96 96 96h704c53 0 96-43 96-96V160c' + '0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-' + '12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4' + ' 12 12v680c0 6.6-5.4 12-12 12z'
    };
  },
  template: "\n        <svg width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 1024 1024\">\n            <path d=\"{{path}}\" />\n        </svg>\n    "
});
var TwoToneIcon = san_dev_default.a.defineComponent({
  initData: function initData() {
    return {
      path: 'M16 512c0 273.932 222.066 496 496 49' + '6s496-222.068 496-496S785.932 16 512 16 16 238.' + '066 16 512z m496 368V144c203.41 0 368 164.622 3' + '68 368 0 203.41-164.622 368-368 368z'
    };
  },
  template: "\n        <svg width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 1024 1024\">\n            <path d=\"{{path}}\" />\n        </svg>\n    "
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/iconDisplay/manifest.js
/* harmony default export */ var manifest = ({
  fill: ['account-book', 'alert', 'alipay-circle', 'alipay-square', 'aliwangwang', 'amazon-circle', 'amazon-square', 'android', 'api', 'apple', 'appstore', 'audio', 'backward', 'bank', 'behance-circle', 'bell', 'behance-square', 'book', 'box-plot', 'build', 'bug', 'bulb', 'calendar', 'camera', 'calculator', 'car', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'carry-out', 'check-circle', 'check-square', 'chrome', 'ci-circle', 'clock-circle', 'close-circle', 'close-square', 'cloud', 'code-sandbox-circle', 'code-sandbox-square', 'code', 'codepen-circle', 'compass', 'codepen-square', 'container', 'contacts', 'control', 'copy', 'copyright-circle', 'crown', 'customer-service', 'credit-card', 'dashboard', 'database', 'delete', 'diff', 'dingtalk-circle', 'dingtalk-square', 'dollar-circle', 'down-circle', 'down-square', 'dribbble-circle', 'dropbox-circle', 'dropbox-square', 'dribbble-square', 'edit', 'environment', 'euro-circle', 'experiment', 'exclamation-circle', 'eye-invisible', 'eye', 'facebook', 'fast-backward', 'fast-forward', 'file-add', 'file-excel', 'file-exclamation', 'file-image', 'file-pdf', 'file-markdown', 'file-ppt', 'file-text', 'file-unknown', 'file-word', 'file-zip', 'file', 'filter', 'fire', 'flag', 'folder-add', 'folder-open', 'folder', 'forward', 'frown', 'funnel-plot', 'fund', 'gift', 'github', 'gitlab', 'golden', 'google-circle', 'google-plus-circle', 'google-plus-square', 'google-square', 'hdd', 'highlight', 'heart', 'home', 'hourglass', 'html5', 'idcard', 'ie-circle', 'ie-square', 'info-circle', 'insurance', 'instagram', 'interaction', 'layout', 'interation', 'left-circle', 'left-square', 'like', 'linkedin', 'lock', 'mail', 'medium-circle', 'medicine-box', 'medium-square', 'meh', 'message', 'minus-circle', 'minus-square', 'mobile', 'money-collect', 'notification', 'pause-circle', 'pay-circle', 'phone', 'picture', 'pie-chart', 'play-square', 'play-circle', 'plus-circle', 'plus-square', 'pound-circle', 'printer', 'profile', 'project', 'property-safety', 'qq-circle', 'pushpin', 'qq-square', 'question-circle', 'read', 'reconciliation', 'red-envelope', 'reddit-circle', 'reddit-square', 'rest', 'right-circle', 'right-square', 'rocket', 'safety-certificate', 'save', 'schedule', 'security-scan', 'setting', 'shop', 'shopping', 'sketch-square', 'sketch-circle', 'skin', 'skype', 'slack-circle', 'slack-square', 'sliders', 'smile', 'snippets', 'sound', 'star', 'step-backward', 'step-forward', 'stop', 'tablet', 'switcher', 'tag', 'tags', 'taobao-circle', 'taobao-square', 'thunderbolt', 'tool', 'trademark-circle', 'trophy', 'twitter-circle', 'unlock', 'twitter-square', 'up-circle', 'up-square', 'usb', 'video-camera', 'wallet', 'warning', 'wechat', 'weibo-square', 'weibo-circle', 'yahoo', 'windows', 'youtube', 'yuque', 'zhihu-circle', 'zhihu-square'],
  outline: ['account-book', 'alert', 'alipay-circle', 'aliwangwang', 'android', 'api', 'apple', 'appstore', 'audio', 'backward', 'bank', 'bell', 'behance-square', 'book', 'box-plot', 'build', 'bug', 'bulb', 'calendar', 'camera', 'calculator', 'car', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'carry-out', 'check-circle', 'check-square', 'chrome', 'clock-circle', 'close-circle', 'close-square', 'cloud', 'code', 'codepen-circle', 'compass', 'container', 'contacts', 'control', 'copy', 'crown', 'customer-service', 'credit-card', 'dashboard', 'database', 'delete', 'diff', 'dislike', 'down-circle', 'down-square', 'dribbble-square', 'edit', 'environment', 'experiment', 'exclamation-circle', 'eye-invisible', 'eye', 'facebook', 'fast-backward', 'fast-forward', 'file-add', 'file-excel', 'file-exclamation', 'file-image', 'file-pdf', 'file-markdown', 'file-ppt', 'file-text', 'file-unknown', 'file-word', 'file-zip', 'file', 'filter', 'fire', 'flag', 'folder-add', 'folder-open', 'folder', 'forward', 'frown', 'funnel-plot', 'fund', 'gift', 'github', 'gitlab', 'hdd', 'highlight', 'heart', 'home', 'hourglass', 'html5', 'idcard', 'info-circle', 'insurance', 'instagram', 'interaction', 'layout', 'interation', 'left-circle', 'left-square', 'like', 'linkedin', 'lock', 'mail', 'medicine-box', 'meh', 'message', 'minus-circle', 'minus-square', 'mobile', 'money-collect', 'notification', 'pause-circle', 'pay-circle', 'phone', 'picture', 'pie-chart', 'play-square', 'play-circle', 'plus-circle', 'plus-square', 'printer', 'profile', 'project', 'property-safety', 'pushpin', 'question-circle', 'read', 'reconciliation', 'red-envelope', 'rest', 'right-circle', 'right-square', 'rocket', 'safety-certificate', 'save', 'schedule', 'security-scan', 'setting', 'shop', 'shopping', 'skin', 'skype', 'slack-square', 'sliders', 'smile', 'snippets', 'sound', 'star', 'step-backward', 'step-forward', 'stop', 'tablet', 'switcher', 'tag', 'tags', 'taobao-circle', 'thunderbolt', 'tool', 'trophy', 'unlock', 'up-circle', 'up-square', 'usb', 'video-camera', 'wallet', 'warning', 'wechat', 'weibo-square', 'weibo-circle', 'yahoo', 'windows', 'youtube', 'yuque', 'alibaba', 'align-center', 'align-left', 'align-right', 'alipay', 'aliyun', 'amazon', 'ant-cloud', 'ant-design', 'apartment', 'area-chart', 'arrow-down', 'arrow-left', 'arrow-right', 'arrows-alt', 'arrow-up', 'audit', 'barcode', 'bar-chart', 'bars', 'behance', 'bg-colors', 'block', 'bold', 'border-bottom', 'border-horizontal', 'border-inner', 'border-outer', 'border-left', 'border-right', 'border-top', 'border-verticle', 'border', 'branches', 'check', 'ci', 'cloud-download', 'close', 'cloud-server', 'cloud-sync', 'cloud-upload', 'cluster', 'code-sandbox', 'codepen', 'coffee', 'colum-height', 'column-height', 'column-width', 'copyright', 'dash', 'deployment-unit', 'desktop', 'dingding', 'disconnect', 'dollar', 'dot-chart', 'double-left', 'double-right', 'down', 'download', 'drag', 'dribbble', 'dropbox', 'ellipsis', 'enter', 'euro', 'exception', 'exclamation', 'export', 'fall', 'file-done', 'file-jpg', 'file-protect', 'file-search', 'file-sync', 'font-colors', 'font-size', 'fork', 'form', 'fullscreen-exit', 'fullscreen', 'gateway', 'global', 'gold', 'google-plus', 'google', 'heat-map', 'history', 'ie', 'import', 'inbox', 'info', 'issues-close', 'italic', 'key', 'laptop', 'left', 'line-chart', 'line-height', 'line', 'link', 'loading-3-quarters', 'loading', 'login', 'logout', 'man', 'medium-workmark', 'medium', 'menu-fold', 'menu-unfold', 'menu', 'minus', 'monitor', 'more', 'number', 'ordered-list', 'paper-clip', 'pause', 'percentage', 'pic-center', 'pic-left', 'pic-right', 'plus', 'pound', 'poweroff', 'pull-request', 'qq', 'qrcode', 'question', 'radar-chart', 'radius-bottomleft', 'radius-bottomright', 'radius-setting', 'radius-upleft', 'radius-upright', 'reddit', 'redo', 'reload', 'retweet', 'right', 'rise', 'robot', 'rollback', 'safety', 'scan', 'scissor', 'search', 'select', 'shake', 'share-alt', 'shopping-cart', 'shrink', 'sketch', 'slack', 'small-dash', 'solution', 'sort-ascending', 'sort-descending', 'stock', 'strikethrough', 'swap-left', 'swap-right', 'swap', 'sync', 'table', 'taobao', 'team', 'to-top', 'trademark', 'transaction', 'twitter', 'underline', 'undo', 'unordered-list', 'up', 'upload', 'user-add', 'user-delete', 'user', 'usergroup-add', 'usergroup-delete', 'vertical-align-bottom', 'vertical-align-middle', 'vertical-align-top', 'vertical-left', 'vertical-right', 'weibo', 'wifi', 'woman', 'zhihu', 'zoom-in', 'zoom-out'],
  twotone: ['account-book', 'alert', 'api', 'appstore', 'audio', 'bank', 'bell', 'book', 'box-plot', 'build', 'bug', 'bulb', 'calendar', 'camera', 'calculator', 'car', 'carry-out', 'check-circle', 'check-square', 'clock-circle', 'close-circle', 'close-square', 'cloud', 'code', 'compass', 'container', 'contacts', 'control', 'copy', 'crown', 'customer-service', 'credit-card', 'dashboard', 'database', 'delete', 'diff', 'down-circle', 'down-square', 'edit', 'environment', 'experiment', 'exclamation-circle', 'eye-invisible', 'eye', 'file-add', 'file-excel', 'file-exclamation', 'file-image', 'file-pdf', 'file-markdown', 'file-ppt', 'file-text', 'file-unknown', 'file-word', 'file-zip', 'file', 'filter', 'fire', 'flag', 'folder-add', 'folder-open', 'folder', 'frown', 'funnel-plot', 'fund', 'gift', 'hdd', 'highlight', 'heart', 'home', 'hourglass', 'html5', 'idcard', 'info-circle', 'insurance', 'interaction', 'layout', 'interation', 'left-circle', 'left-square', 'like', 'lock', 'mail', 'medicine-box', 'meh', 'message', 'minus-circle', 'minus-square', 'mobile', 'money-collect', 'notification', 'pause-circle', 'phone', 'picture', 'pie-chart', 'play-square', 'play-circle', 'plus-circle', 'plus-square', 'pound-circle', 'printer', 'profile', 'project', 'property-safety', 'pushpin', 'question-circle', 'reconciliation', 'red-envelope', 'rest', 'right-circle', 'right-square', 'rocket', 'safety-certificate', 'save', 'schedule', 'security-scan', 'setting', 'shop', 'shopping', 'skin', 'sliders', 'smile', 'snippets', 'sound', 'star', 'stop', 'tablet', 'switcher', 'tag', 'tags', 'thunderbolt', 'tool', 'trademark-circle', 'trophy', 'unlock', 'up-circle', 'up-square', 'usb', 'video-camera', 'wallet', 'warning', 'ci', 'copyright', 'dollar', 'euro', 'gold', 'canlendar']
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/iconDisplay/fields.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @file Santd icon display fileds file
 **/

var allIcons = [];
Object.keys(manifest).forEach(function (theme) {
  allIcons = [].concat(_toConsumableArray(allIcons), _toConsumableArray(manifest[theme]));
}); // Hide typo-name icons

allIcons = allIcons.filter(function (name) {
  return !['interation', 'canlendar', 'colum-height'].includes(name);
});
var fields_categories = {
  all: Array.from(allIcons),
  direction: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'double-right', 'double-left', 'vertical-left', 'vertical-right', 'vertical-align-top', 'vertical-align-middle', 'vertical-align-bottom', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'up-square', 'down-square', 'left-square', 'right-square', 'login', 'logout', 'menu-fold', 'menu-unfold', 'border-bottom', 'border-horizontal', 'border-inner', 'border-outer', 'border-left', 'border-right', 'border-top', 'border-verticle', 'pic-center', 'pic-left', 'pic-right', 'radius-bottomleft', 'radius-bottomright', 'radius-upleft', 'radius-upright', 'fullscreen', 'fullscreen-exit'],
  suggestion: ['question', 'question-circle', 'plus', 'plus-circle', 'pause', 'pause-circle', 'minus', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle', 'exclamation', 'exclamation-circle', 'close', 'close-circle', 'close-square', 'check', 'check-circle', 'check-square', 'clock-circle', 'warning', 'issues-close', 'stop'],
  editor: ['edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight', 'align-center', 'align-left', 'align-right', 'bg-colors', 'bold', 'italic', 'underline', 'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out', 'font-colors', 'font-size', 'line-height', 'dash', 'small-dash', 'sort-ascending', 'sort-descending', 'drag', 'ordered-list', 'unordered-list', 'radius-setting', 'column-width', 'column-height'],
  data: ['area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart', 'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund', 'sliders'],
  logo: ['android', 'apple', 'windows', 'ie', 'chrome', 'github', 'aliwangwang', 'dingding', 'weibo-square', 'weibo-circle', 'taobao-circle', 'html5', 'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle', 'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium', 'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen', 'code-sandbox', 'code-sandbox-circle', 'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design', 'ant-cloud', 'aliyun', 'zhihu', 'slack', 'slack-square', 'behance', 'behance-square', 'dribbble', 'dribbble-square', 'instagram', 'yuque', 'alibaba', 'yahoo', 'reddit', 'sketch']
};
// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/icon/docs/iconDisplay/index.less
var iconDisplay = __webpack_require__(25);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/iconDisplay/index.less

            

var iconDisplay_options = {};

iconDisplay_options.insert = "head";
iconDisplay_options.singleton = false;

var iconDisplay_update = injectStylesIntoStyleTag_default()(iconDisplay["a" /* default */], iconDisplay_options);



/* harmony default export */ var docs_iconDisplay = (iconDisplay["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/iconDisplay/index.js








var themeTypeMapper = {
  filled: 'fill',
  outlined: 'outline',
  twoTone: 'twotone'
};
/* harmony default export */ var icon_docs_iconDisplay = (san_dev_default.a.defineComponent({
  components: {
    's-radio': src_radio["a" /* default */],
    's-radiogroup': src_radio["a" /* default */].Group,
    's-radiobutton': src_radio["a" /* default */].Button,
    's-icon': icon["a" /* default */],
    's-inputsearch': src_input.Search,
    's-outlinedicon': OutlinedIcon,
    's-filledicon': FilledIcon,
    's-twotoneicon': TwoToneIcon
  },
  initData: function initData() {
    return {
      theme: 'outlined',
      searchKey: '',
      categoryMap: {
        direction: '方向性图标',
        suggestion: '提示建议性图标',
        editor: '编辑类图标',
        data: '数据类图标',
        logo: '品牌和标识',
        other: '网站通用图标'
      }
    };
  },
  computed: {
    list: function list() {
      var theme = this.data.get('theme');
      return Object.keys(fields_categories).map(function (category) {
        return {
          category: category,
          icons: (fields_categories[category] || []).filter(function (name) {
            return manifest[themeTypeMapper[theme]].indexOf(name) !== -1;
          })
        };
      }).filter(function (_ref) {
        var icons = _ref.icons;
        return Boolean(icons.length);
      });
    },
    categories: function categories() {
      var list = this.data.get('list');
      var searchKey = this.data.get('searchKey');
      var theme = this.data.get('theme');

      var otherIcons = fields_categories.all.filter(function (icon) {
        return list.filter(function (_ref2) {
          var category = _ref2.category;
          return category !== 'all';
        }).every(function (item) {
          return !item.icons.includes(icon);
        });
      });

      return list.filter(function (_ref3) {
        var category = _ref3.category;
        return category !== 'all';
      }).concat({
        category: 'other',
        icons: otherIcons
      }).map(function (_ref4) {
        var category = _ref4.category,
            icons = _ref4.icons;
        return {
          category: category,
          icons: icons.filter(function (name) {
            return name.includes(searchKey);
          }).filter(function (name) {
            return manifest[themeTypeMapper[theme]].includes(name);
          })
        };
      }).filter(function (_ref5) {
        var icons = _ref5.icons;
        return !!icons.length;
      });
    }
  },
  handleChangeTheme: function handleChangeTheme(e) {
    this.data.set('theme', e.target.value);
  },
  handleSearchIcon: function handleSearchIcon(value) {
    this.data.set('searchKey', value);
  },
  template: "<div>\n        <div style=\"display: flex; justify-content: space-between\">\n            <s-radiogroup value=\"{{theme}}\" size=\"large\" buttonStyle=\"solid\" on-change=\"handleChangeTheme\" name=\"type\">\n                <s-radiobutton value=\"outlined\">\n                    <s-icon><s-outlinedicon slot=\"component\" /></s-icon> \u7EBF\u6846\u98CE\u683C\n                </s-radiobutton>\n                <s-radiobutton value=\"filled\">\n                    <s-icon><s-filledicon slot=\"component\" /></s-icon> \u5B9E\u5E95\u98CE\u683C\n                </s-radiobutton>\n                <s-radiobutton value=\"twoTone\">\n                    <s-icon><s-twotoneicon slot=\"component\" /></s-icon> \u53CC\u8272\u98CE\u683C\n                </s-radiobutton>\n            </s-radiogroup>\n            <s-inputsearch\n                placeholder=\"\u5728\u6B64\u641C\u7D22\u56FE\u6807\"\n                style=\"margin-left: 10px; flex: 1\"\n                on-change=\"handleSearchIcon\"\n                size=\"large\"\n            />\n        </div>\n        <div s-for=\"category in categories\">\n            <h3 style=\"margin-top: 20px;\">{{categoryMap[category.category]}}</h3>\n            <ul class=\"sanicons-list\">\n                <li s-for=\"icon in category.icons\">\n                    <s-icon type=\"{{icon}}\" theme=\"{{theme}}\" />\n                    <span class=\"san-icon-class\">\n                        {{icon}}\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>"
}));
// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/docs/basic.md
var basic = __webpack_require__(110);
var basic_default = /*#__PURE__*/__webpack_require__.n(basic);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/docs/colorIcon.md
var colorIcon = __webpack_require__(112);
var colorIcon_default = /*#__PURE__*/__webpack_require__.n(colorIcon);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/docs/script.md
var script = __webpack_require__(113);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/README.md
var README = __webpack_require__(114);
var README_default = /*#__PURE__*/__webpack_require__.n(README);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/docs/index.js
/**
* @file docs入口文件
*/







/* harmony default export */ var docs = __webpack_exports__["default"] = (san_dev_default.a.defineComponent({
  components: {
    readme: README_default.a,
    basic: basic_default.a,
    icondisplay: icon_docs_iconDisplay,
    colors: colorIcon_default.a,
    script: script_default.a,
    desc: desc_default.a
  },
  template: "\n        <div>\n            <desc/>\n            <icondisplay/>\n            <basic/>\n        </div>\n    "
}));

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 64:
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
          "title": "设计师专属",
          "hash": "%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E"
        }, {
          "level": 2,
          "title": "图标列表",
          "hash": "%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8"
        }]
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
        "level": 0
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */


_defineProperty(ContentView, "components", {
  "code-preview-0": _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-icon': santd_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  }
});
/* san-hmr disable */

/***/ }),

/***/ 67:
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
        "level": 0
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 68:
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
        "level": 0
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 69:
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
          "title": "API",
          "hash": "api"
        }, {
          "level": 2,
          "title": "SVG图标",
          "hash": "svg%E5%9B%BE%E6%A0%87"
        }, {
          "level": 2,
          "title": "双色图标主色",
          "hash": "%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2"
        }, {
          "level": 2,
          "title": "自定义 font 图标",
          "hash": "%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87"
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