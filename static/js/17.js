(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17,3],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(88);
        
        var script = __webpack_require__(19).default;
        module.exports = __webpack_require__(19);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 19:
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
          "level": 3,
          "title": "发布周期",
          "hash": "%E5%8F%91%E5%B8%83%E5%91%A8%E6%9C%9F"
        }, {
          "level": 3,
          "title": "0.2.0",
          "hash": "0.2.0"
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97\"><a class=\"header-anchor\" href=\"#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97\">#</a> 更新日志</h1> <p><code>ant-design-san</code> 严格遵循 <a href=\"http://semver.org/lang/zh-CN/\">Semantic Versioning 2.0.0</a> 语义化版本规范。</p> <h3 id=\"%E5%8F%91%E5%B8%83%E5%91%A8%E6%9C%9F\"><a class=\"header-anchor\" href=\"#%E5%8F%91%E5%B8%83%E5%91%A8%E6%9C%9F\">#</a> 发布周期</h3> <ul> <li>修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）</li> <li>次版本号：带有新特性的向下兼容的版本。</li> <li>主版本号：含有破坏性更新和新特性，不在发布周期内。</li> </ul> <h3 id=\"0.2.0\"><a class=\"header-anchor\" href=\"#0.2.0\">#</a> 0.2.0</h3> <h4 id=\"features\"><a class=\"header-anchor\" href=\"#features\">#</a> Features</h4> <ul> <li>对外第一个版本，提供常用 61 个<a href=\"https://github.com/ecomfe/santd/blob/master/src/index.js\">组件</a>。</li> </ul> </div></div> ";
// Exports
module.exports = code;

/***/ })

}]);