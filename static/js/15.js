(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15,7],{

/***/ 108:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><p>在多数业务情况下，Santd需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p> <p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p> <h2 id=\"%E6%A6%82%E8%BF%B0\"><a class=\"header-anchor\" href=\"#%E6%A6%82%E8%BF%B0\">#</a> 概述</h2> <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p> <ul> <li>通过row在水平方向建立一组<code>column</code>（简写col）</li> <li>你的内容应当放置于 <code>col</code> 内，并且，只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li> <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建</li> <li>如果一个 <code>row</code> 中的 <code>col</code> 总和超过 24，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li> </ul> <h2 id=\"flex-%E5%B8%83%E5%B1%80\"><a class=\"header-anchor\" href=\"#flex-%E5%B8%83%E5%B1%80\">#</a> Flex 布局</h2> <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p> <p>Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p> <h2 id=\"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\">#</a> 代码演示</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"grid-%E6%A0%85%E6%A0%BC\"><a class=\"header-anchor\" href=\"#grid-%E6%A0%85%E6%A0%BC\">#</a> Grid 栅格</h1> <p>24 栅格系统</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9F%BA%E7%A1%80%E6%A0%85%E6%A0%BC\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E7%A1%80%E6%A0%85%E6%A0%BC\">#</a> 基础栅格</h4> <p>从堆叠到水平排列。使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 <code>Row</code> 内。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>components-grid-demo-basic<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-12<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-12<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// Module
var code = " <div id=\"components-grid-demo-basic\"> <s-row> <s-col span=\"12\">col-12</s-col> <s-col span=\"12\">col-12</s-col> </s-row> <s-row> <s-col span=\"8\">col-8</s-col> <s-col span=\"8\">col-8</s-col> <s-col span=\"8\">col-8</s-col> </s-row> <s-row> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> </s-row> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(113);
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(114);
var Util = __webpack_require__(41);
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(115);
var each = __webpack_require__(41).each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <h3 id=\"row\"><a class=\"header-anchor\" href=\"#row\">#</a> Row</h3> <table> <thead> <tr> <th>成员</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>align</td> <td>flex 布局下的垂直对齐方式：<code>top</code> <code>middle</code> <code>bottom</code></td> <td>string</td> <td>top</td> </tr> <tr> <td>gutter</td> <td>栅格间隔，可以写成像素值或支持响应式的对象写法 <code>{ xs: 8, sm: 16, md: 24}</code></td> <td>number/object</td> <td>0</td> </tr> <tr> <td>justify</td> <td>flex 布局下的水平排列方式：<code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td> <td>string</td> <td>start</td> </tr> <tr> <td>type</td> <td>布局模式，可选 <code>flex</code>，<a href=\"http://caniuse.com/#search=flex\">现代浏览器</a> 下有效</td> <td>string</td> <td></td> </tr> </tbody> </table> <h3 id=\"col\"><a class=\"header-anchor\" href=\"#col\">#</a> Col</h3> <table> <thead> <tr> <th>成员</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>offset</td> <td>栅格左侧的间隔格数，间隔内不可以有栅格</td> <td>number</td> <td>0</td> </tr> <tr> <td>order</td> <td>栅格顺序，<code>flex</code> 布局模式下有效</td> <td>number</td> <td>0</td> </tr> <tr> <td>pull</td> <td>栅格向左移动格数</td> <td>number</td> <td>0</td> </tr> <tr> <td>push</td> <td>栅格向右移动格数</td> <td>number</td> <td>0</td> </tr> <tr> <td>span</td> <td>栅格占位格数，为 0 时相当于 <code>display: none</code></td> <td>number</td> <td>-</td> </tr> <tr> <td>xs</td> <td><code>&lt;576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>sm</td> <td><code>≥576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>md</td> <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>lg</td> <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>xl</td> <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>xxl</td> <td><code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> </tbody> </table> <p>响应式栅格的断点扩展自 <a href=\"https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints\">BootStrap 4 的规则</a>（不包含链接里 occasionally 的部分)。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _desc_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _desc_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_desc_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _head_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_head_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_basic_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @file Santd Grid docs
 **/





/* harmony default export */ __webpack_exports__["default"] = (san__WEBPACK_IMPORTED_MODULE_0___default.a.defineComponent({
  components: {
    desc: _desc_md__WEBPACK_IMPORTED_MODULE_1___default.a,
    head: _head_md__WEBPACK_IMPORTED_MODULE_2___default.a,
    basic: _basic_md__WEBPACK_IMPORTED_MODULE_3___default.a,
    readme: _README_md__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  template: `
        <div>
            <head/>
            <desc/>
            <basic/>
            <readme/>
        </div>
    `
}));

/***/ }),

/***/ 38:
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
          "title": "概述",
          "hash": "%E6%A6%82%E8%BF%B0"
        }, {
          "level": 2,
          "title": "Flex 布局",
          "hash": "flex-%E5%B8%83%E5%B1%80"
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ classCreator; });

// UNUSED EXPORTS: hasClass, addClass, removeClass, guid, type, deepCopy, getComponentChildren, cancelAnimationTimeout, requestAnimationTimeout

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/constants.js
/**
 * @file 常量
 * @author wangyongqing01@baidu.com
 */
const CLASSNAME_PREFIX = 'santd';
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/getRequestAnimationFrame.js
/**
 * @file raf polyfill
 * @author wangyongqing <wangyongqing01@baidu.com>
 */
const availablePrefixs = ['webkit', 'moz', 'ms'];

function requestAnimationFramePolyfill() {
  let lastTime = 0;
  return function (callback) {
    const currTime = Date.now();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return () => {};
  }

  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window);
  }

  const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
  return prefix ? window[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }

  const prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
  return prefix ? (window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`]).call(this, id) : clearTimeout(id);
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/index.js
/**
 * @file 原生js处理
 * @author fuqiangqiang@baidu.com
 */


const raf = getRequestAnimationFrame();
const hasClass = (elements, cName) => !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
};
const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
};
/**
 * 获取唯一 class id
 *
 * @param {string} prefix classname prefix
 * @return {string} guid
 */

const guid = (prefix = CLASSNAME_PREFIX) => {
  let id = (+(Math.random() + '').substr(2, 16)).toString(36);
  return `${prefix}-${id}`;
};
/**
 * 获取 class
 *
 * @param {string} prefix string
 * @return {Function} creator
 */

const classCreator = prefix => part => part ? `${CLASSNAME_PREFIX}-${prefix}-${part}` : `${CLASSNAME_PREFIX}-${prefix}`;
const type = (o, s) => typeof o === s;
const deepCopy = target => {
  let copyed_objs = [];

  function _deepCopy(target) {
    if (typeof target !== 'object' || !target) {
      return target;
    }

    for (let i = 0; i < copyed_objs.length; i++) {
      if (copyed_objs[i].target === target) {
        return copyed_objs[i].copyTarget;
      }
    }

    let obj = {};

    if (Array.isArray(target)) {
      obj = [];
    }

    copyed_objs.push({
      target: target,
      copyTarget: obj
    });
    Object.keys(target).forEach(key => {
      if (obj[key]) {
        return;
      }

      obj[key] = _deepCopy(target[key]);
    });
    return obj;
  }

  return _deepCopy(target);
};
/**
 * 获取list下的所有san components
 *
 * @param  {Array} list 递归遍历该list
 * @param  {Function} conditionFn 判断条件
 * @param  {number} dep 递归深度
 * @return {Array}      component children
 */

const getComponentChildren = (list, conditionFn, dep = 100) => {
  let itemlist = [];
  let step = 0;

  let loopCMPT = list => {
    step++;

    if (step > dep) {
      return;
    }

    if (list && list.length) {
      for (let item of list) {
        if (conditionFn(item, step)) {
          itemlist.push(item);
        }

        loopCMPT(item.children);
      }
    }

    step--;
  };

  loopCMPT(list);
  return itemlist;
};
const cancelAnimationTimeout = frame => cancelRequestAnimationFrame(frame.id);
const requestAnimationTimeout = (callback, delay) => {
  const start = Date.now();
  /* eslint-disable fecs-use-computed-property */

  const frame = {};

  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  }

  frame.id = raf(timeout);
  return frame;
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0
      });
    }
  }

}
/* san-hmr disable */

_defineProperty(ContentView, "components", {
  "code-preview-0": _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ 42:
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
          "hash": "api",
          "children": [{
            "level": 3,
            "title": "Row",
            "hash": "row"
          }, {
            "level": 3,
            "title": "Col",
            "hash": "col"
          }]
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(4);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/Col.js
/**
 * @file Santd col file
 **/



const cc = Object(util["a" /* classCreator */])('col');
const baseClass = cc();
const SUPPORT_PROPS = ['order', 'offset', 'pull', 'push'];
const SUPPORT_SCREENS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
/* harmony default export */ var Col = (san_dev_default.a.defineComponent({
  dataTypes: {
    span: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    order: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    offset: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    push: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    pull: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    xs: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    sm: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    md: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    lg: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    xl: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    xxl: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object])
  },
  computed: {
    classes() {
      let arr = [baseClass];
      let data = this.data;
      const span = data.get('span');
      span && arr.push(cc(span));

      for (let i = 0; i < SUPPORT_PROPS.length; i++) {
        let key = SUPPORT_PROPS[i];
        let value = data.get(key);
        value && arr.push(cc(`${key}-${value}`));
      }

      for (let i = 0; i < SUPPORT_SCREENS.length; i++) {
        let size = SUPPORT_SCREENS[i];
        let value = data.get(size);

        if (value === undefined) {
          continue;
        }

        let sizeProps = typeof value === 'object' ? value || {} : {
          span: +value
        };
        sizeProps.span !== undefined && arr.push(cc(`${size}-${sizeProps.span}`));

        for (let j = 0; j < SUPPORT_PROPS.length; j++) {
          let key = SUPPORT_PROPS[j];

          if (sizeProps[key] || +sizeProps[key] === 0) {
            arr.push(cc(`${size}-${key}-${sizeProps[key]}`));
          }
        }
      }

      return arr;
    }

  },

  getGutter(data) {
    let gutter = data.get('gutter');

    if (typeof gutter === 'object') {
      let screens = data.get('screens');

      for (let i = 0; i < SUPPORT_SCREENS.length; i++) {
        const breakpoint = SUPPORT_SCREENS[i];

        if (screens[breakpoint] && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }
    }

    return gutter;
  },

  attached() {
    let parent = this.parent;

    while (parent && !(parent instanceof Row)) {
      parent = parent.parent;
    }

    if (parent && parent.data) {
      let gutter = +this.getGutter(parent.data);

      if (gutter) {
        gutter = gutter / 2;
        this.data.set('colStyle', `padding-left:${gutter};padding-right:${gutter};`);
      }
    }
  },

  template: `
        <div class="{{classes}}" style="{{colStyle}}">
            <slot />
        </div>
    `
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/Row.js
/**
 * @file Santd row file
 **/



const Row_cc = Object(util["a" /* classCreator */])('row');
const Row_baseClass = Row_cc();
let enquire = null; // matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

if (typeof window !== 'undefined') {
  const matchMediaPolyfill = mediaQuery => {
    return {
      media: mediaQuery,
      matches: false,

      addListener() {},

      removeListener() {}

    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = __webpack_require__(112);
}

const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

function loopCMPT(list, gutter) {
  list && list.length && list.forEach(item => {
    if (item instanceof Col) {
      item.data.set('colStyle', `padding-left:${gutter}px;padding-right:${gutter}px;`);
    }

    loopCMPT(item.children, gutter);
  });
}

/* harmony default export */ var Row = (san_dev_default.a.defineComponent({
  dataTypes: {
    type: san_dev["DataTypes"].oneOf(['normal', 'flex']),
    align: san_dev["DataTypes"].oneOf(['top', 'middle', 'bottom']),
    gutter: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].number, san_dev["DataTypes"].string, san_dev["DataTypes"].object]),
    justify: san_dev["DataTypes"].oneOf(['start', 'end', 'center', 'space-around', 'space-between'])
  },
  computed: {
    classes() {
      let arr = [Row_baseClass];
      let type = this.data.get('type');
      let align = this.data.get('align');
      let justify = this.data.get('justify');

      if (type === 'flex') {
        arr.push(Row_cc(type));
        align && arr.push(Row_cc(`${type}-${align}`));
        justify && arr.push(Row_cc(`${type}-${justify}`));
      }

      return arr;
    }

  },

  inited() {
    this._calcStyles = () => {
      let gutter = +this.getGutter();

      if (gutter) {
        gutter = gutter / -2;
        this.data.set('styles', `margin-left: ${gutter}px; margin-right:${gutter}px;`);
      }
    };

    this._calcStyles();

    this.watch('gutter', this._calcStyles);
  },

  getGutter() {
    let gutter = this.data.get('gutter');

    if (typeof gutter === 'object') {
      let screens = this.data.get('screens');

      for (let i = 0; i <= responsiveArray.length; i++) {
        let breakpoint = responsiveArray[i];

        if (screens[breakpoint] && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }
    }

    return gutter;
  },

  attached() {
    let gutter = +this.getGutter();

    if (gutter) {
      const slots = this.slot();

      if (slots && slots.length) {
        gutter = gutter / 2;
        loopCMPT(slots, gutter);
      }
    }

    this.nextTick(() => {
      responsiveArray.forEach(screen => enquire.register(responsiveMap[screen], {
        match: () => {
          let gutter = +this.data.get('gutter');

          if (!isNaN(gutter)) {
            this.data.merge('screens', {
              [screen]: true
            });
          }
        },
        unmatch: () => {
          let gutter = +this.data.get('gutter');

          if (!isNaN(+gutter)) {
            this.data.merge('screens', {
              [screen]: false
            });
          }
        },

        // Keep a empty destory to avoid triggering unmatch when unregister
        destroy() {}

      }));
    });
  },

  disposed() {
    responsiveArray.forEach(screen => enquire.unregister(responsiveMap[screen]));
  },

  initData() {
    return {
      screens: {},
      type: 'normal',
      gutter: 0
    };
  },

  template: `
        <div class="{{classes}}" style="{{styles}}">
            <slot />
        </div>
    `
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/index.js
/**
 * @file 组件 grid
 */




/* harmony default export */ var grid = ({
  Row: Row,
  Col: Col
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/docs/basic.md?lang=js&codebox=0&san=&type=script

/* harmony default export */ var basiclang_js_codebox_0_san_type_script = __webpack_exports__["default"] = ({
  components: {
    's-col': Col,
    's-row': Row
  }
});
/* san-hmr disable */

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(108);
        
        var script = __webpack_require__(38).default;
        module.exports = __webpack_require__(38);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(109);
        
        var script = __webpack_require__(39).default;
        module.exports = __webpack_require__(39);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(110);
        
        var script = __webpack_require__(40).default;
        module.exports = __webpack_require__(40);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(111);
        
        var script = __webpack_require__(46).default;
        module.exports = __webpack_require__(46);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(116);
        
        var script = __webpack_require__(42).default;
        module.exports = __webpack_require__(42);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);