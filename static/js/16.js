(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16,5],{

/***/ 117:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"affix-%E5%9B%BA%E9%92%89\"><a class=\"header-anchor\" href=\"#affix-%E5%9B%BA%E9%92%89\">#</a> Affix 固钉</h1> <p>将页面元素钉在可视范围。</p> <h2 id=\"%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\"><a class=\"header-anchor\" href=\"#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\">#</a> 何时使用</h2> <p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p> <p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p> <h2 id=\"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\">#</a> 代码演示</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>offsetBottom</td> <td>距离窗口底部达到指定偏移量后触发</td> <td>number</td> <td>-</td> </tr> <tr> <td>offsetTop</td> <td>距离窗口顶部达到指定偏移量后触发</td> <td>number</td> <td>-</td> </tr> <tr> <td>on-change</td> <td>固定状态改变时触发的回调函数</td> <td>Function(affixed)</td> <td>-</td> </tr> </tbody> </table> <blockquote> <p>注意：Affix 内的元素不要使用绝对定位.如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：</p> </blockquote> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-affix</span> <span class=\"token style-attr\"><span class=\"token attr-name\">style</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span><span class=\"token style language-css\"><span class=\"token property\">position</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'absolute'</span><span class=\"token punctuation\">;</span> <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> y<span class=\"token punctuation\">;</span> <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> x</span><span class=\"token punctuation\">\"</span></span></span><span class=\"token punctuation\">></span></span>\n  ...\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-affix</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_head_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @file docs入口文件
 */



/* harmony default export */ __webpack_exports__["default"] = (san__WEBPACK_IMPORTED_MODULE_0___default.a.defineComponent({
  components: {
    head: _head_md__WEBPACK_IMPORTED_MODULE_1___default.a,
    readme: _README_md__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  template: `
        <div>
            <head/>
            <readme/>
        </div>
    `
}));

/***/ }),

/***/ 43:
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
          "title": "何时使用",
          "hash": "%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8"
        }, {
          "level": 2,
          "title": "代码演示",
          "hash": "%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA"
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 44:
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
          "title": "API",
          "hash": "api"
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(117);
        
        var script = __webpack_require__(43).default;
        module.exports = __webpack_require__(43);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(118);
        
        var script = __webpack_require__(44).default;
        module.exports = __webpack_require__(44);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);