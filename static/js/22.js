(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22,12],{

/***/ 148:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B\"><a class=\"header-anchor\" href=\"#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B\">#</a> 快速上手</h1> <p>Ant Design San 致力于提供给程序员愉悦的开发体验。</p> <blockquote> <p>在开始之前，推荐先学习 San 和 ES2015，并正确安装和配置了 Node.js v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 San 全家桶的正确开发方式。如果你刚开始学习前端或者 San，将 UI 框架作为你的第一步可能不是最好的主意。</p> </blockquote> <h2 id=\"%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90\"><a class=\"header-anchor\" href=\"#%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90\">#</a> 第一个例子</h2> <p>最简单的使用方式参照以下 CodeSandbox 演示。</p> <p><a href=\"https://codesandbox.io/s/adoring-sutherland-p4ol9\"><img src=\"https://codesandbox.io/static/img/play-codesandbox.svg\" alt=\"\"/></a></p> <h3 id=\"1.-%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6\"><a class=\"header-anchor\" href=\"#1.-%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6\">#</a> 1. 使用组件</h3> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> san <span class=\"token keyword\">from</span> <span class=\"token string\">'san'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>DatePicker<span class=\"token punctuation\">,</span> Message<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'moment/locale/zh-cn'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'santd/dist/santd.css'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./index.css'</span><span class=\"token punctuation\">;</span>\n\nmoment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'zh-cn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> san<span class=\"token punctuation\">.</span><span class=\"token function\">defineComponent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            date<span class=\"token operator\">:</span> <span class=\"token keyword\">null</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-datepicker'</span><span class=\"token operator\">:</span> DatePicker\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span>date<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        Message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">您选择的日期是: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>date <span class=\"token operator\">?</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token string\">'未选择'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date'</span><span class=\"token punctuation\">,</span> date<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">getDate</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">date</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> date <span class=\"token operator\">?</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token string\">'未选择'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    template<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">&lt;div style=\"width: 400px; margin: 100px auto;\">\n        &lt;s-datepicker on-change=\"handleChange\" />\n        &lt;div style=\"margin-top: 20px;\">\n            当前日期：&#123;&#123;getDate(date)}}\n        &lt;/div>\n    &lt;/div></span><span class=\"token template-punctuation string\">`</span></span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> app <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">App</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\napp<span class=\"token punctuation\">.</span><span class=\"token function\">attach</span><span class=\"token punctuation\">(</span>document<span class=\"token punctuation\">.</span>body<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <h3 id=\"2.-%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A%E7%BB%84%E4%BB%B6%E7%94%A8%E6%B3%95\"><a class=\"header-anchor\" href=\"#2.-%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A%E7%BB%84%E4%BB%B6%E7%94%A8%E6%B3%95\">#</a> 2. 探索更多组件用法</h3> <p>你可以在左侧菜单查看组件列表，比如 <a href=\"/#/components/alert\">Alert</a> 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。</p> <p>然后依照演示代码的写法，在之前的代码里修改 index.js，首先在 import 内引入 Alert 组件：</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>DatePicker<span class=\"token punctuation\">,</span> Message<span class=\"token punctuation\">,</span> Alert<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">;</span></code></pre> <p>然后添加相应的代码：</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> san<span class=\"token punctuation\">.</span><span class=\"token function\">defineComponent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            date<span class=\"token operator\">:</span> <span class=\"token keyword\">null</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-datepicker'</span><span class=\"token operator\">:</span> DatePicker<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-alert'</span><span class=\"token operator\">:</span> Alert\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span>date<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        Message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">您选择的日期是: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>date <span class=\"token operator\">?</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token string\">'未选择'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date'</span><span class=\"token punctuation\">,</span> date<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">getDate</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">date</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> date <span class=\"token operator\">?</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token string\">'未选择'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    template<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">&lt;div style=\"width: 400px; margin: 100px auto;\">\n        &lt;s-datepicker on-change=\"handleChange\" />\n        &lt;div style=\"margin-top: 20px;\">\n            &lt;s-alert message=\"当前日期：&#123;&#123;getDate(date)}}\" type=\"success\" />\n        &lt;/div>\n    &lt;/div></span><span class=\"token template-punctuation string\">`</span></span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre> <p>在右侧预览区就可以看到如图的效果。</p> <p><img src=\"https://gw.alipayobjects.com/zos/antfincdn/Up3%24VYhN0S/134614ee-7440-46f1-a797-fa6f6b3e300f.png\" alt=\"avatar\"/></p> <p>好的，现在你已经会使用基本的 santd 组件了，你可以在这个例子中继续探索其他组件的用法。如果你遇到组件的 bug，也推荐建一个可重现的 codesandbox 来报告 bug。</p> <h2 id=\"%E5%85%BC%E5%AE%B9%E6%80%A7\"><a class=\"header-anchor\" href=\"#%E5%85%BC%E5%AE%B9%E6%80%A7\">#</a> 兼容性</h2> <p>Ant Design San 支持所有的现代浏览器和 IE9+。</p> <table> <thead> <tr> <th><img src=\"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png\" alt=\"IE\"/> <br/> IE \\ Edge</th> <th><img src=\"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png\" alt=\"Firefox\"/> <br/> Firefox</th> <th><img src=\"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png\" alt=\"Chrome\"/> <br/> Chrome</th> <th><img src=\"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png\" alt=\"Safari\"/> <br/> Safari</th> <th><img src=\"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png\" alt=\"Opera\"/> <br/> Opera</th> </tr> </thead> <tbody> <tr> <td>IE9, IE10, IE11, Edge</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> </tr> </tbody> </table> <p>我们对 IE9/10 提供有限度的支持，部分样式和动画在 IE9/10 下的表现会比较裸。少数组件使用到了 Flex 布局，在 IE9/10 下也会有问题。</p> <p>对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 <a href=\"https://babeljs.io/docs/en/babel-preset-env\">babel-preset-env</a> 来解决浏览器兼容问题。</p> <h2 id=\"%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA\"><a class=\"header-anchor\" href=\"#%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA\">#</a> 自行构建</h2> <p>如果想自己维护工作流，我们推荐使用 webpack 进行构建和调试。理论上你可以利用 San 生态圈中的 各种脚手架 进行开发。</p> <h2 id=\"%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD\">#</a> 按需加载</h2> <p>可以通过以下的写法来按需加载组件。</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/es/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'santd/es/button/style'</span></code></pre> <p>如果你使用了 babel，那么可以使用 <a href=\"https://github.com/ant-design/babel-plugin-import\">babel-plugin-import</a> 来进行按需加载，加入这个插件后。你可以仍然这么写：</p> <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd'</span><span class=\"token punctuation\">;</span></code></pre> <p>插件会帮你转换成 santd/es/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(148);
        
        var script = __webpack_require__(38).default;
        module.exports = __webpack_require__(38);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 38:
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
          "title": "第一个例子",
          "hash": "%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90",
          "children": [{
            "level": 3,
            "title": "1. 使用组件",
            "hash": "1.-%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6"
          }, {
            "level": 3,
            "title": "2. 探索更多组件用法",
            "hash": "2.-%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A%E7%BB%84%E4%BB%B6%E7%94%A8%E6%B3%95"
          }]
        }, {
          "level": 2,
          "title": "兼容性",
          "hash": "%E5%85%BC%E5%AE%B9%E6%80%A7"
        }, {
          "level": 2,
          "title": "自行构建",
          "hash": "%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA"
        }, {
          "level": 2,
          "title": "按需加载",
          "hash": "%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD"
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