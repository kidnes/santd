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
/******/ 		12: 0,
/******/ 		21: 0
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	deferredModules.push([121,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(87);
        
        var script = __webpack_require__(18).default;
        module.exports = __webpack_require__(18);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0,
        "children": [{
          "level": 2,
          "title": "Ant Design San 的样式变量",
          "hash": "ant-design-san-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"
        }, {
          "level": 2,
          "title": "定制方式",
          "hash": "%E5%AE%9A%E5%88%B6%E6%96%B9%E5%BC%8F",
          "children": [{
            "level": 3,
            "title": "在 webpack 中定制主题",
            "hash": "%E5%9C%A8-webpack-%E4%B8%AD%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98"
          }, {
            "level": 3,
            "title": "配置 less 变量文件",
            "hash": "%E9%85%8D%E7%BD%AE-less-%E5%8F%98%E9%87%8F%E6%96%87%E4%BB%B6"
          }]
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98\"><a class=\"header-anchor\" href=\"#%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98\">#</a> 定制主题</h1> <p>Santd 的组件结构及样式和 Antd React 完全一致，你可以参考 Antd React 的定制方式进行配置。</p> <p>Ant Design 设计规范和技术上支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于全局样式（主色、圆角、边框）和指定组件的视觉定制。</p> <p><img src=\"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png\" alt=\"theme\"/></p> <h2 id=\"ant-design-san-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F\"><a class=\"header-anchor\" href=\"#ant-design-san-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F\">#</a> Ant Design San 的样式变量</h2> <p>antd 的样式使用了 <a href=\"http://lesscss.org/\">Less</a> 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。</p> <p>以下是一些最常用的通用变量，所有样式变量可以在 <a href=\"https://github.com/ecomfe/santd/blob/master/src/core/styles/themes/default.less\">这里</a> 找到。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\">@primary<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> #<span class=\"token number\">1890</span>ff<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 全局主色</span>\n@link<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> #<span class=\"token number\">1890</span>ff<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 链接色</span>\n@success<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> #<span class=\"token number\">52</span>c41a<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 成功色</span>\n@warning<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> #faad14<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 警告色</span>\n@error<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> #f5222d<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 错误色</span>\n@font<span class=\"token operator\">-</span>size<span class=\"token operator\">-</span>base<span class=\"token operator\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 主字号</span>\n@heading<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0.85</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 标题色</span>\n@text<span class=\"token operator\">-</span>color<span class=\"token operator\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0.65</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 主文本色</span>\n@text<span class=\"token operator\">-</span>color<span class=\"token operator\">-</span>secondary <span class=\"token operator\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.45</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 次文本色</span>\n@disabled<span class=\"token operator\">-</span>color <span class=\"token operator\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.25</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 失效色</span>\n@border<span class=\"token operator\">-</span>radius<span class=\"token operator\">-</span>base<span class=\"token operator\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 组件/浮层圆角</span>\n@border<span class=\"token operator\">-</span>color<span class=\"token operator\">-</span>base<span class=\"token operator\">:</span> #d9d9d9<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 边框色</span>\n@box<span class=\"token operator\">-</span>shadow<span class=\"token operator\">-</span>base<span class=\"token operator\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">2</span>px <span class=\"token number\">8</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0.15</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 浮层阴影</span></code></pre> <p>如果以上变量不能满足你的定制需求，可以给我们提 issue。</p> <h2 id=\"%E5%AE%9A%E5%88%B6%E6%96%B9%E5%BC%8F\"><a class=\"header-anchor\" href=\"#%E5%AE%9A%E5%88%B6%E6%96%B9%E5%BC%8F\">#</a> 定制方式</h2> <p>原理上是使用 less 提供的 <a href=\"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables\">modifyVars</a> 的方式进行覆盖变量。下面将针对不同的场景提供一些常用的定制方式。</p> <h3 id=\"%E5%9C%A8-webpack-%E4%B8%AD%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98\"><a class=\"header-anchor\" href=\"#%E5%9C%A8-webpack-%E4%B8%AD%E5%AE%9A%E5%88%B6%E4%B8%BB%E9%A2%98\">#</a> 在 webpack 中定制主题</h3> <p>我们以 webpack@4 为例进行说明，以下是一个 webpack.config.js 的典型例子，对 <a href=\"https://github.com/webpack-contrib/less-loader\">less-loader</a> 的 options 属性进行相应配置。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token comment\">// webpack.config.js</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    rules<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        test<span class=\"token operator\">:</span> <span class=\"token regex\"><span class=\"token regex-delimiter\">/</span><span class=\"token regex-source language-regex\">\\.less$</span><span class=\"token regex-delimiter\">/</span></span><span class=\"token punctuation\">,</span>\n        use<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n            loader<span class=\"token operator\">:</span> <span class=\"token string\">'style-loader'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            loader<span class=\"token operator\">:</span> <span class=\"token string\">'css-loader'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// translates CSS into CommonJS</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            loader<span class=\"token operator\">:</span> <span class=\"token string\">'less-loader'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// compiles Less to CSS</span>\n            options<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                modifyVars<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token string\">'primary-color'</span><span class=\"token operator\">:</span> <span class=\"token string\">'#1DA57A'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token string\">'link-color'</span><span class=\"token operator\">:</span> <span class=\"token string\">'#1DA57A'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token string\">'border-radius-base'</span><span class=\"token operator\">:</span> <span class=\"token string\">'2px'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token comment\">// or</span>\n                    <span class=\"token string\">'hack'</span><span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">true; @import \"your-less-file-path.less\";</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// Override with less file</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n                javascriptEnabled<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token comment\">// ...other rules</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token comment\">// ...other config</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>注意 less-loader 的处理范围不要过滤掉 node_modules 下的 santd 包</p> <h3 id=\"%E9%85%8D%E7%BD%AE-less-%E5%8F%98%E9%87%8F%E6%96%87%E4%BB%B6\"><a class=\"header-anchor\" href=\"#%E9%85%8D%E7%BD%AE-less-%E5%8F%98%E9%87%8F%E6%96%87%E4%BB%B6\">#</a> 配置 less 变量文件</h3> <p>另外一种方式是建立一个单独的 less 变量文件，引入这个文件覆盖 santd.less 里的变量。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\">@<span class=\"token keyword\">import</span> <span class=\"token string\">'~santd/dist/santd.less'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 引入官方提供的 less 样式入口文件</span>\n@<span class=\"token keyword\">import</span> <span class=\"token string\">'your-theme-file.less'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 用于覆盖上面定义的变量</span></code></pre> <p>注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 babel-plugin-import 的 style 属性一起使用。</p> </div></div> ";
// Exports
module.exports = code;

/***/ })

/******/ });