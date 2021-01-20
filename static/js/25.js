(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25,13],{

/***/ 156:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"ant-design-of-san\"><a class=\"header-anchor\" href=\"#ant-design-of-san\">#</a> Ant Design of San</h1> <p>这里是 Ant Design 的 San 实现，开发和服务于企业级后台产品。</p> <h2 id=\"%E7%89%B9%E6%80%A7\"><a class=\"header-anchor\" href=\"#%E7%89%B9%E6%80%A7\">#</a> 特性</h2> <ul> <li>提炼自企业级中后台产品的交互语言和视觉风格。</li> <li>开箱即用的高质量 San 组件。</li> <li>共享<a href=\"http://ant-design.gitee.io/docs/spec/introduce-cn\">Ant Design of React</a>设计工具体系。</li> </ul> <h2 id=\"%E6%94%AF%E6%8C%81%E7%8E%AF%E5%A2%83\"><a class=\"header-anchor\" href=\"#%E6%94%AF%E6%8C%81%E7%8E%AF%E5%A2%83\">#</a> 支持环境</h2> <ul> <li>现代浏览器和 IE9 及以上（需要 <a href=\"https://vue.ant.design/docs/vue/getting-started-cn/#%E5%85%BC%E5%AE%B9%E6%80%A7\">polyfills</a>）。</li> <li>支持服务端渲染。</li> </ul> <h2 id=\"%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#%E5%AE%89%E8%A3%85\">#</a> 安装</h2> <h3 id=\"%E4%BD%BF%E7%94%A8-npm-%E5%AE%89%E8%A3%85\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8-npm-%E5%AE%89%E8%A3%85\">#</a> 使用 npm 安装</h3> <p>我们推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p> <pre class=\"language-text\"><code class=\"language-text\">$ npm install santd --save</code></pre> <p>如果你的网络环境不佳，推荐使用 <a href=\"https://github.com/cnpm/cnpm\">cnpm</a>。</p> <h3 id=\"%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5\"><a class=\"header-anchor\" href=\"#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5\">#</a> 浏览器引入</h3> <p>在浏览器中使用 <code>script</code> 和 <code>link</code> 标签直接引入文件，并使用全局变量 santd。</p> <p>我们在 npm 发布包内的 santd/dist 目录下提供了 <code>santd.js</code> <code>santd.css</code> 以及 <code>santd.min.js</code> <code>santd.min.css</code>。</p> <blockquote> <p>强烈不推荐使用已构建文件，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。</p> </blockquote> <blockquote> <p>注意：引入 santd.js 前你需要自行引入 san 和 moment。</p> </blockquote> <h2 id=\"%E7%A4%BA%E4%BE%8B\"><a class=\"header-anchor\" href=\"#%E7%A4%BA%E4%BE%8B\">#</a> 示例</h2> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>DatePicker<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> san<span class=\"token punctuation\">.</span><span class=\"token function\">defineComponent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-datepicker'</span><span class=\"token operator\">:</span> DatePicker\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    template<span class=\"token operator\">:</span> <span class=\"token string\">'&lt;div>&lt;s-datepicker />&lt;/div>'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>引入样式：</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token string\">'santd/dist/santd.css'</span><span class=\"token punctuation\">;</span></code></pre> <h3 id=\"%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD\">#</a> 按需加载</h3> <p>下面两种方式都可以只加载用到的组件。</p> <ul> <li>使用 babel-plugin-import（推荐）。</li> </ul> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token punctuation\">{</span>\n    loader<span class=\"token operator\">:</span> <span class=\"token string\">'babel-loader'</span><span class=\"token punctuation\">,</span>\n    options<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        plugins<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token string\">'import'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            libraryName<span class=\"token operator\">:</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">,</span>\n            libraryDirectory<span class=\"token operator\">:</span> <span class=\"token string\">'es'</span><span class=\"token punctuation\">,</span>\n            style<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre> <p>然后只需从 santd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token comment\">// babel-plugin-import 会帮助你加载 JS 和 CSS</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">;</span></code></pre> <ul> <li>手动引入</li> </ul> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> DatePicker <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/es/date-picker'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'santd/es/date-picker/style'</span><span class=\"token punctuation\">;</span></code></pre> <h2 id=\"%E5%A6%82%E4%BD%95%E8%B4%A1%E7%8C%AE\"><a class=\"header-anchor\" href=\"#%E5%A6%82%E4%BD%95%E8%B4%A1%E7%8C%AE\">#</a> 如何贡献</h2> <p>如果你希望参与贡献，欢迎 <a href=\"https://github.com/ecomfe/santd/pulls\">Pull Request</a>。</p> <blockquote> <p>强烈推荐阅读 <a href=\"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way\">《提问的智慧》</a>、<a href=\"https://github.com/seajs/seajs/issues/545\">《如何向开源社区提问题》</a> 和 <a href=\"http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html\">《如何有效地报告 Bug》</a>、<a href=\"https://zhuanlan.zhihu.com/p/25795393\">《如何向开源项目提交无法解答的问题》</a>，更好的问题更容易获得帮助。</p> </blockquote> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(156);
        
        var script = __webpack_require__(45).default;
        module.exports = __webpack_require__(45);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 45:
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
          "title": "特性",
          "hash": "%E7%89%B9%E6%80%A7"
        }, {
          "level": 2,
          "title": "支持环境",
          "hash": "%E6%94%AF%E6%8C%81%E7%8E%AF%E5%A2%83"
        }, {
          "level": 2,
          "title": "安装",
          "hash": "%E5%AE%89%E8%A3%85",
          "children": [{
            "level": 3,
            "title": "使用 npm 安装",
            "hash": "%E4%BD%BF%E7%94%A8-npm-%E5%AE%89%E8%A3%85"
          }, {
            "level": 3,
            "title": "浏览器引入",
            "hash": "%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5"
          }]
        }, {
          "level": 2,
          "title": "示例",
          "hash": "%E7%A4%BA%E4%BE%8B",
          "children": [{
            "level": 3,
            "title": "按需加载",
            "hash": "%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD"
          }]
        }, {
          "level": 2,
          "title": "如何贡献",
          "hash": "%E5%A6%82%E4%BD%95%E8%B4%A1%E7%8C%AE"
        }]
      });
    }
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ })

}]);