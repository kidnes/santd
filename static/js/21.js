(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21,3],{

/***/ 149:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E6%8C%89%E9%92%AE\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%92%AE\">#</a> 按钮</h1> <codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8B\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8B\">#</a> 按钮类型</h4> <p>按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// Module
var code = " <div> <s-button type=\"primary\">Primary</s-button> <s-button>Default</s-button> <s-button type=\"danger\">Danger</s-button> <s-button type=\"dashed\">Dashed</s-button> <s-button type=\"link\">Link</s-button> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(149);
        
        var script = __webpack_require__(39).default;
        module.exports = __webpack_require__(39);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _Volumes_Source_san_santd_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-button': santd_button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  }
});
/* san-hmr disable */

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(150);
        
        var script = __webpack_require__(40).default;
        module.exports = __webpack_require__(40);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);