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
/******/ 		7: 0,
/******/ 		19: 0
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
/******/ 	deferredModules.push([214,0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(200);
        
        var script = __webpack_require__(85).default;
        module.exports = __webpack_require__(85);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(201);
        
        var script = __webpack_require__(86).default;
        module.exports = __webpack_require__(86);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(202);
        
        var script = __webpack_require__(87).default;
        module.exports = __webpack_require__(87);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(203);
        
        var script = __webpack_require__(88).default;
        module.exports = __webpack_require__(88);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(204);
        
        var script = __webpack_require__(89).default;
        module.exports = __webpack_require__(89);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(205);
        
        var script = __webpack_require__(90).default;
        module.exports = __webpack_require__(90);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/dom.js
/**
 * @file DOM相关基础库
 */
var isCompatMode = document.compatMode === 'BackCompat';

function getViewRoot() {
  return isCompatMode ? document.body : document.documentElement;
}

function hasClass(elements, cls) {
  return elements.className && typeof elements.className === 'string' && elements.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
}
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}
/**
 * 获取元素在页面中的位置和尺寸信息
 *
 * @param {HTMLElement} element 目标元素
 * @return {Object} 元素的尺寸和位置信息，
 * 包含`top`、`right`、`bottom`、`left`、`width`和`height`属性
 */

function getOffset(element) {
  if (!element) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }

  var rect = element.getBoundingClientRect();
  var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
  var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  return {
    top: rect.top + scrollTop - clientTop,
    right: rect.right + scrollLeft - clientLeft,
    bottom: rect.bottom + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
/**
 * 获取页面宽度
 *
 * @return {number} 页面宽度
 */

function getPageWidth() {
  var viewRoot = getViewRoot();
  return Math.max(document.documentElement ? document.documentElement.scrollWidth : 0, document.body ? document.body.scrollWidth : 0, viewRoot ? viewRoot.clientWidth : 0, 0);
}
/**
 * 获取页面高度
 *
 * @return {number} 页面高度
 */

function getPageHeight() {
  var viewRoot = getViewRoot();
  return Math.max(document.documentElement ? document.documentElement.scrollHeight : 0, document.body ? document.body.scrollHeight : 0, viewRoot ? viewRoot.clientHeight : 0, 0);
}
function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }

  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';
  var isWindow = target === window;
  var ret = isWindow ? target[prop] : target[method]; // ie6,7,8 standard mode

  if (isWindow && typeof ret !== 'number') {
    ret = document.documentElement[method];
  }

  return ret;
}
/**
 * 获取页面视觉区域宽度
 *
 * @return {number} 页面视觉区域宽度
 */

function getViewWidth() {
  var viewRoot = getViewRoot();
  return viewRoot ? viewRoot.clientWidth : 0;
}
/**
 * 获取页面视觉区域高度
 *
 * @return {number} 页面视觉区域高度
 */

function getViewHeight() {
  var viewRoot = getViewRoot();
  return viewRoot ? viewRoot.clientHeight : 0;
}
/**
 * 获取纵向滚动量
 *
 * @return {number} 纵向滚动量
 */

function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
/**
 * 获取横向滚动量
 *
 * @return {number} 横向滚动量
 */

function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}
/**
 * 获取页面纵向坐标
 *
 * @return {number}
 */

function getClientTop() {
  return document.documentElement.clientTop || document.body.clientTop || 0;
}
/**
 * 获取页面横向坐标
 *
 * @return {number}
 */

function getClientLeft() {
  return document.documentElement.clientLeft || document.body.clientLeft || 0;
}
/**
 * 封装addEventListener
 *
 * @return {function}
 */

var on = document.addEventListener ? function (element, event, handler) {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
} : function (element, event, handler) {
  if (element && event && handler) {
    element.attachEvent('on' + event, handler);
  }
};
/**
 * 封装removeEventListener
 *
 * @return {function}
 */

var off = document.removeEventListener ? function (element, event, handler) {
  if (element && event) {
    element.removeEventListener(event, handler, false);
  }
} : function (element, event, handler) {
  if (element && event) {
    element.detachEvent('on' + event, handler);
  }
};
/**
 * 判断某个元素是否在外层元素中
 * @param root 外层元素
 * @param n 被检测的元素
 *
 * @return {boolean}
 */

function contains(root, n) {
  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
var cached;
function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/affix/style/index.less
var style = __webpack_require__(28);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/affix/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var affix_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/affix/style/index.js
/**
* @file affix 组件入口文件
*/

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/affix/index.js
/**
 * @file 组件 affix
 * @author fuqiangqiang <fuqiangqiang@baidu.com>
 */




var outerCls = Object(util["a" /* classCreator */])('affix-outer')();
var innerCls = Object(util["a" /* classCreator */])('affix')();
/* harmony default export */ var src_affix = __webpack_exports__["a"] = (san_dev_default.a.defineComponent({
  dataTypes: {
    offsetTop: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    offsetBottom: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number])
  },
  initData: function initData() {
    return {
      affix: false,
      styles: {},
      offsetTop: 0,
      outerStyles: {}
    };
  },
  attached: function attached() {
    if (!this._scroller) {
      this._scroller = this.handleScroll.bind(this);
      on(window, 'scroll', this._scroller);
      on(window, 'resize', this._scroller);
    }
  },
  disposed: function disposed() {
    if (this._scroller) {
      off(window, 'scroll', this._scroller);
      off(window, 'resize', this._scroller);
      this._scroller = null;
    }
  },
  handleScroll: function handleScroll() {
    var elOffset = getOffset(this.el);
    var scrollTop = getScrollTop();
    var innerEl = this.ref('inner');
    var offsetTop = +this.data.get('offsetTop');
    var offsetBottom = +this.data.get('offsetBottom');
    var isAffixBottom = offsetBottom >= 0;
    var affix = this.data.get('affix');
    var affixTo = null;
    var styles = {};
    var outerStyles = {};

    if (isAffixBottom) {
      var winBottomPos = window.innerHeight + scrollTop;
      var elBottomAffixPos = elOffset.top + offsetBottom + innerEl.offsetHeight;

      if (elBottomAffixPos > winBottomPos && !affix) {
        affixTo = true;
        styles = {
          position: 'fixed',
          bottom: "".concat(offsetBottom, "px")
        };
      } else if (elBottomAffixPos < winBottomPos && affix) {
        affixTo = false;
      }
    } else {
      var elTopAffixPos = elOffset.top - offsetTop;

      if (elTopAffixPos <= scrollTop && !affix) {
        affixTo = true;
        styles = {
          position: 'fixed',
          top: "".concat(offsetTop, "px")
        };
      } else if (elTopAffixPos > scrollTop && affix) {
        affixTo = false;
      }
    }

    if (affixTo != null) {
      if (affixTo === true) {
        outerStyles = {
          width: innerEl.clientWidth + 'px',
          height: innerEl.clientHeight + 'px'
        };
        styles.left = "".concat(elOffset.left, "px");
        styles.width = "".concat(elOffset.width, "px");
      }

      this.data.set('outerStyles', outerStyles);
      this.data.set('styles', styles);
      this.data.set('affix', affixTo);
      this.fire('change', affixTo);
    }
  },
  template: "\n        <div class=\"".concat(outerCls, "\" style=\"{{outerStyles}}\">\n            <div class=\"{{affix ? '").concat(innerCls, "' : ''}}\" style=\"{{styles}}\" s-ref=\"inner\">\n                <slot></slot>\n            </div>\n        </div>\n    ")
}));

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"affix-%E5%9B%BA%E9%92%89\"><a class=\"header-anchor\" href=\"#affix-%E5%9B%BA%E9%92%89\">#</a> Affix 固钉</h1> <p>将页面元素钉在可视范围。</p> <h2 id=\"%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\"><a class=\"header-anchor\" href=\"#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\">#</a> 何时使用</h2> <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p> <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p> <h2 id=\"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\">#</a> 代码演示</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>offsetBottom</td> <td>距离窗口底部达到指定偏移量后触发</td> <td>number</td> <td>-</td> </tr> <tr> <td>offsetTop</td> <td>距离窗口顶部达到指定偏移量后触发</td> <td>number</td> <td>-</td> </tr> <tr> <td>on-change</td> <td>固定状态改变时触发的回调函数</td> <td>Function(affixed)</td> <td>-</td> </tr> </tbody> </table> <blockquote> <p>注意：Affix 内的元素不要使用绝对定位.如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：</p> </blockquote> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-affix</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">position</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'absolute'</span><span class=\"token punctuation\">;</span> <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> y<span class=\"token punctuation\">;</span> <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> x</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  ...\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-affix</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9F%BA%E6%9C%AC\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E6%9C%AC\">#</a> 基本</h4> <p>最简单的用法</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-affix</span> <span class=\"token attr-name\">offsetTop</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;top}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-click</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleTopClick<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Affix Top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-affix</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-affix</span> <span class=\"token attr-name\">offsetBottom</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;bottom}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-click</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleBottomClick<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Affix Bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-affix</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Affix <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/affix'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<p><span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\ncomponents<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n<span class=\"token string\">'s-affix'</span><span class=\"token operator\">:</span> Affix<span class=\"token punctuation\">,</span>\n<span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n<span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\ntop<span class=\"token operator\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\nbottom<span class=\"token operator\">:</span> <span class=\"token number\">10</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token function\">handleTopClick</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n<span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'top'</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'top'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token function\">handleBottomClick</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n<span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'bottom'</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'bottom'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</p></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span></code></pre> </div> </div><p></p> </codebox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// Module
var code = " <div> <s-affix offsetTop=\"{{top}}\"> <s-button type=\"primary\" on-click=\"handleTopClick\">Affix Top</s-button> </s-affix> <br/><br/> <s-affix offsetBottom=\"{{bottom}}\"> <s-button type=\"primary\" on-click=\"handleBottomClick\">Affix Bottom</s-button> </s-affix> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9B%BA%E5%AE%9A%E7%8A%B6%E6%80%81%E6%94%B9%E5%8F%98%E7%9A%84%E5%9B%9E%E8%B0%83\"><a class=\"header-anchor\" href=\"#%E5%9B%BA%E5%AE%9A%E7%8A%B6%E6%80%81%E6%94%B9%E5%8F%98%E7%9A%84%E5%9B%9E%E8%B0%83\">#</a> 固定状态改变的回调</h4> <p>可以获得是否固定的状态。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-affix</span> <span class=\"token attr-name\">offsetTop</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;120}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-change</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleChange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>120px to affix top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-affix</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Affix <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/affix'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<p><span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\ncomponents<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n<span class=\"token string\">'s-affix'</span><span class=\"token operator\">:</span> Affix<span class=\"token punctuation\">,</span>\n<span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">affix</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'affix: '</span><span class=\"token punctuation\">,</span> affix<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</p></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">&gt;</span></span></code></pre> </div> </div><p></p> </codebox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// Module
var code = " <div> <s-affix offsetTop=\"{{120}}\" on-change=\"handleChange\"> <s-button>120px to affix top</s-button> </s-affix> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_head_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(130);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_basic_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _offsetTop_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(133);
/* harmony import */ var _offsetTop_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_offsetTop_md__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @file docs入口文件
 */





/* harmony default export */ __webpack_exports__["default"] = (san__WEBPACK_IMPORTED_MODULE_0___default.a.defineComponent({
  components: {
    head: _head_md__WEBPACK_IMPORTED_MODULE_1___default.a,
    basic: _basic_md__WEBPACK_IMPORTED_MODULE_3___default.a,
    readme: _README_md__WEBPACK_IMPORTED_MODULE_2___default.a,
    offset: _offsetTop_md__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  template: "\n        <div>\n            <head/>\n            <readme/>\n        </div>\n    "
}));

/***/ }),

/***/ 28:
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

/***/ 85:
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
          "title": "何时使用",
          "hash": "%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8"
        }, {
          "level": 2,
          "title": "代码演示",
          "hash": "%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA"
        }]
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 86:
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
        }]
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_affix_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _Volumes_Source_san_santd_src_affix_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_affix_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_affix_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var santd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-affix': santd_affix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    's-button': santd_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  initData: function initData() {
    return {
      top: 10,
      bottom: 10
    };
  },
  handleTopClick: function handleTopClick() {
    this.data.set('top', this.data.get('top') + 10);
  },
  handleBottomClick: function handleBottomClick() {
    this.data.set('bottom', this.data.get('bottom') + 10);
  }
});
/* san-hmr disable */

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_affix_docs_offsetTop_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _Volumes_Source_san_santd_src_affix_docs_offsetTop_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_affix_docs_offsetTop_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_affix_docs_offsetTop_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var santd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-affix': santd_affix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    's-button': santd_button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  handleChange: function handleChange(affix) {
    console.log('affix: ', affix);
  }
});
/* san-hmr disable */

/***/ })

/******/ });