(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17,9],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ util_classCreator; });

// UNUSED EXPORTS: hasClass, addClass, removeClass, guid, type, deepCopy, getComponentChildren, cancelAnimationTimeout, requestAnimationTimeout

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/constants.js
/**
 * @file 常量
 * @author wangyongqing01@baidu.com
 */
var CLASSNAME_PREFIX = 'santd';
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/getRequestAnimationFrame.js
/**
 * @file raf polyfill
 * @author wangyongqing <wangyongqing01@baidu.com>
 */
var availablePrefixs = ['webkit', 'moz', 'ms'];

function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function (callback) {
    var currTime = Date.now();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function () {};
  }

  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "RequestAnimationFrame") in window;
  })[0];
  return prefix ? window["".concat(prefix, "RequestAnimationFrame")] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "CancelAnimationFrame") in window || "".concat(key, "CancelRequestAnimationFrame") in window;
  })[0];
  return prefix ? (window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")]).call(this, id) : clearTimeout(id);
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/index.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file 原生js处理
 * @author fuqiangqiang@baidu.com
 */


var raf = getRequestAnimationFrame();
var hasClass = function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
};
var addClass = function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
};
var removeClass = function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
};
/**
 * 获取唯一 class id
 *
 * @param {string} prefix classname prefix
 * @return {string} guid
 */

var util_guid = function guid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CLASSNAME_PREFIX;
  var id = (+(Math.random() + '').substr(2, 16)).toString(36);
  return "".concat(prefix, "-").concat(id);
};
/**
 * 获取 class
 *
 * @param {string} prefix string
 * @return {Function} creator
 */

var util_classCreator = function classCreator(prefix) {
  return function (part) {
    return part ? "".concat(CLASSNAME_PREFIX, "-").concat(prefix, "-").concat(part) : "".concat(CLASSNAME_PREFIX, "-").concat(prefix);
  };
};
var type = function type(o, s) {
  return _typeof(o) === s;
};
var deepCopy = function deepCopy(target) {
  var copyed_objs = [];

  function _deepCopy(target) {
    if (_typeof(target) !== 'object' || !target) {
      return target;
    }

    for (var i = 0; i < copyed_objs.length; i++) {
      if (copyed_objs[i].target === target) {
        return copyed_objs[i].copyTarget;
      }
    }

    var obj = {};

    if (Array.isArray(target)) {
      obj = [];
    }

    copyed_objs.push({
      target: target,
      copyTarget: obj
    });
    Object.keys(target).forEach(function (key) {
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

var getComponentChildren = function getComponentChildren(list, conditionFn) {
  var dep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var itemlist = [];
  var step = 0;

  var loopCMPT = function loopCMPT(list) {
    step++;

    if (step > dep) {
      return;
    }

    if (list && list.length) {
      var _iterator = _createForOfIteratorHelper(list),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (conditionFn(item, step)) {
            itemlist.push(item);
          }

          loopCMPT(item.children);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    step--;
  };

  loopCMPT(list);
  return itemlist;
};
var util_cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return cancelRequestAnimationFrame(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = Date.now();
  /* eslint-disable fecs-use-computed-property */

  var frame = {};

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Row; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Col; });

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/grid/style/index.less
var style = __webpack_require__(27);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var grid_style = (style["a" /* default */].locals || {});
// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/Col.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Santd col file
 **/



var cc = Object(util["a" /* classCreator */])('col');
var baseClass = cc();
var SUPPORT_PROPS = ['order', 'offset', 'pull', 'push'];
var SUPPORT_SCREENS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
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
    classes: function classes() {
      var arr = [baseClass];
      var data = this.data;
      var span = data.get('span');
      span && arr.push(cc(span));

      for (var i = 0; i < SUPPORT_PROPS.length; i++) {
        var key = SUPPORT_PROPS[i];
        var value = data.get(key);
        value && arr.push(cc("".concat(key, "-").concat(value)));
      }

      for (var _i = 0; _i < SUPPORT_SCREENS.length; _i++) {
        var size = SUPPORT_SCREENS[_i];

        var _value = data.get(size);

        if (_value === undefined) {
          continue;
        }

        var sizeProps = _typeof(_value) === 'object' ? _value || {} : {
          span: +_value
        };
        sizeProps.span !== undefined && arr.push(cc("".concat(size, "-").concat(sizeProps.span)));

        for (var j = 0; j < SUPPORT_PROPS.length; j++) {
          var _key = SUPPORT_PROPS[j];

          if (sizeProps[_key] || +sizeProps[_key] === 0) {
            arr.push(cc("".concat(size, "-").concat(_key, "-").concat(sizeProps[_key])));
          }
        }
      }

      return arr;
    }
  },
  getGutter: function getGutter(data) {
    var gutter = data.get('gutter');

    if (_typeof(gutter) === 'object') {
      var screens = data.get('screens');

      for (var i = 0; i < SUPPORT_SCREENS.length; i++) {
        var breakpoint = SUPPORT_SCREENS[i];

        if (screens[breakpoint] && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }
    }

    return gutter;
  },
  attached: function attached() {
    var parent = this.parent;

    while (parent && !(parent instanceof Row)) {
      parent = parent.parent;
    }

    if (parent && parent.data) {
      var gutter = +this.getGutter(parent.data);

      if (gutter) {
        gutter = gutter / 2;
        this.data.set('colStyle', "padding-left:".concat(gutter, ";padding-right:").concat(gutter, ";"));
      }
    }
  },
  template: "\n        <div class=\"{{classes}}\" style=\"{{colStyle}}\">\n            <slot />\n        </div>\n    "
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/Row.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Row_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Row_typeof = function _typeof(obj) { return typeof obj; }; } else { Row_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Row_typeof(obj); }

/**
 * @file Santd row file
 **/



var Row_cc = Object(util["a" /* classCreator */])('row');
var Row_baseClass = Row_cc();
var enquire = null; // matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = __webpack_require__(184);
}

var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

function loopCMPT(list, gutter) {
  list && list.length && list.forEach(function (item) {
    if (item instanceof Col) {
      item.data.set('colStyle', "padding-left:".concat(gutter, "px;padding-right:").concat(gutter, "px;"));
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
    classes: function classes() {
      var arr = [Row_baseClass];
      var type = this.data.get('type');
      var align = this.data.get('align');
      var justify = this.data.get('justify');

      if (type === 'flex') {
        arr.push(Row_cc(type));
        align && arr.push(Row_cc("".concat(type, "-").concat(align)));
        justify && arr.push(Row_cc("".concat(type, "-").concat(justify)));
      }

      return arr;
    }
  },
  inited: function inited() {
    var _this = this;

    this._calcStyles = function () {
      var gutter = +_this.getGutter();

      if (gutter) {
        gutter = gutter / -2;

        _this.data.set('styles', "margin-left: ".concat(gutter, "px; margin-right:").concat(gutter, "px;"));
      }
    };

    this._calcStyles();

    this.watch('gutter', this._calcStyles);
  },
  getGutter: function getGutter() {
    var gutter = this.data.get('gutter');

    if (Row_typeof(gutter) === 'object') {
      var screens = this.data.get('screens');

      for (var i = 0; i <= responsiveArray.length; i++) {
        var breakpoint = responsiveArray[i];

        if (screens[breakpoint] && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }
    }

    return gutter;
  },
  attached: function attached() {
    var _this2 = this;

    var gutter = +this.getGutter();

    if (gutter) {
      var slots = this.slot();

      if (slots && slots.length) {
        gutter = gutter / 2;
        loopCMPT(slots, gutter);
      }
    }

    this.nextTick(function () {
      responsiveArray.forEach(function (screen) {
        return enquire.register(responsiveMap[screen], {
          match: function match() {
            var gutter = +_this2.data.get('gutter');

            if (!isNaN(gutter)) {
              _this2.data.merge('screens', _defineProperty({}, screen, true));
            }
          },
          unmatch: function unmatch() {
            var gutter = +_this2.data.get('gutter');

            if (!isNaN(+gutter)) {
              _this2.data.merge('screens', _defineProperty({}, screen, false));
            }
          },
          // Keep a empty destory to avoid triggering unmatch when unregister
          destroy: function destroy() {}
        });
      });
    });
  },
  disposed: function disposed() {
    responsiveArray.forEach(function (screen) {
      return enquire.unregister(responsiveMap[screen]);
    });
  },
  initData: function initData() {
    return {
      screens: {},
      type: 'normal',
      gutter: 0
    };
  },
  template: "\n        <div class=\"{{classes}}\" style=\"{{styles}}\">\n            <slot />\n        </div>\n    "
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/index.js
/**
 * @file 组件 grid
 */




/* harmony default export */ var grid = __webpack_exports__["c"] = ({
  Row: Row,
  Col: Col
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
/* 27 */
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
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
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_grid_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-col': santd_grid__WEBPACK_IMPORTED_MODULE_0__[/* Col */ "a"],
    's-row': santd_grid__WEBPACK_IMPORTED_MODULE_0__[/* Row */ "b"]
  }
});
/* san-hmr disable */

/***/ }),
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
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
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
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
  }]);

  return ContentView;
}(san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"]);
/* san-hmr disable */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(182);
        
        var script = __webpack_require__(70).default;
        module.exports = __webpack_require__(70);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(183);
        
        var script = __webpack_require__(71).default;
        module.exports = __webpack_require__(71);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(188);
        
        var script = __webpack_require__(73).default;
        module.exports = __webpack_require__(73);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(189);
        
        var script = __webpack_require__(74).default;
        module.exports = __webpack_require__(74);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(190);
        
        var script = __webpack_require__(75).default;
        module.exports = __webpack_require__(75);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(191);
        
        var script = __webpack_require__(76).default;
        module.exports = __webpack_require__(76);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(192);
        
        var script = __webpack_require__(77).default;
        module.exports = __webpack_require__(77);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(193);
        
        var script = __webpack_require__(78).default;
        module.exports = __webpack_require__(78);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(194);
        
        var script = __webpack_require__(79).default;
        module.exports = __webpack_require__(79);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(195);
        
        var script = __webpack_require__(80).default;
        module.exports = __webpack_require__(80);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(196);
        
        var script = __webpack_require__(81).default;
        module.exports = __webpack_require__(81);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(197);
        
        var script = __webpack_require__(82).default;
        module.exports = __webpack_require__(82);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(198);
        
        var script = __webpack_require__(83).default;
        module.exports = __webpack_require__(83);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(199);
        
        var script = __webpack_require__(84).default;
        module.exports = __webpack_require__(84);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><p>在多数业务情况下，Santd需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p> <p>划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p> <h2 id=\"%E6%A6%82%E8%BF%B0\"><a class=\"header-anchor\" href=\"#%E6%A6%82%E8%BF%B0\">#</a> 概述</h2> <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p> <ul> <li>通过row在水平方向建立一组<code>column</code>（简写col）</li> <li>你的内容应当放置于 <code>col</code> 内，并且，只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li> <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建</li> <li>如果一个 <code>row</code> 中的 <code>col</code> 总和超过 24，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li> </ul> <h2 id=\"flex-%E5%B8%83%E5%B1%80\"><a class=\"header-anchor\" href=\"#flex-%E5%B8%83%E5%B1%80\">#</a> Flex 布局</h2> <p>我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p> <p>Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p> <h2 id=\"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\">#</a> 代码演示</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"grid-%E6%A0%85%E6%A0%BC\"><a class=\"header-anchor\" href=\"#grid-%E6%A0%85%E6%A0%BC\">#</a> Grid 栅格</h1> <p>24 栅格系统</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(185);
module.exports = new MediaQueryDispatch();


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(186);
var Util = __webpack_require__(72);
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(187);
var each = __webpack_require__(72).each;

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
/* 187 */
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
/* 188 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9F%BA%E7%A1%80%E6%A0%85%E6%A0%BC\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E7%A1%80%E6%A0%85%E6%A0%BC\">#</a> 基础栅格</h4> <p>从堆叠到水平排列。使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 <code>Row</code> 内。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>components-grid-demo-basic<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-12<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-12<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// Module
var code = " <div id=\"components-grid-demo-basic\"> <s-row> <s-col span=\"12\">col-12</s-col> <s-col span=\"12\">col-12</s-col> </s-row> <s-row> <s-col span=\"8\">col-8</s-col> <s-col span=\"8\">col-8</s-col> <s-col span=\"8\">col-8</s-col> </s-row> <s-row> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> <s-col span=\"6\">col-6</s-col> </s-row> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 190 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### Flex 对齐 Flex 子元素垂直对齐。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Align Top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>center<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">align</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-100<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-120<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-80<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Align Center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>space-around<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">align</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-100<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-120<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-80<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Align Bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>space-between<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">align</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-100<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-120<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>height-80<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### Flex 排序 从堆叠到水平排列。 通过 Flex 布局的 Order 来改变元素的排序。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">order</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1 col-order-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">order</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2 col-order-3<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">order</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3 col-order-2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">order</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>4 col-order-1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 192 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### Flex 布局 Flex 布局基础。 使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>sub-element align left<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>start<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>sub-element align center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>center<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>sub-element align right<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>end<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>sub-element monospaced arrangement<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>space-between<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>sub-element align full<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>space-around<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 区块间隔 栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数) 如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">gutter</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>16<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-row<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-box<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-row<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-box<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-row<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-box<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-row<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>gutter-box<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 194 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 左右偏移 列偏移。 使用 `offset` 可以将列向右侧偏。例如，`offset=\"4\"` 将元素向右侧偏移了 4 个列（column）的宽度。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">offset</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">offset</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6 col-offset-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">offset</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6 col-offset-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">offset</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-12 col-offset-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 栅格排序 列排序。 通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>18<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">push</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-18 col-push-6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">pull</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>18<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>col-6 col-pull-18<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 响应式布局 参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">sm</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">md</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">xl</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>20<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">sm</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>16<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">md</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">xl</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">sm</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">md</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">xl</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 其他属性的响应式 `span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。 其中 `xs=\"6\"` 相当于 `xs=\"{ span: 6 }\"`。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 5, offset: 1 } }}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 6, offset: 2 } }}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 11, offset: 1 } }}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 6, offset: 2 } }}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span> <span class=\"token attr-name\">xs</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 5, offset: 1 } }}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">lg</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123; { span: 6, offset: 2 } }}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Col<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 198 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 栅格配置器 <p>可以简单配置几种等分栅格和间距。 </p></text><p></p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> 6px<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Gutter（px）:<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 50%</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-slider</span>\n                    <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;gutterKey}}<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">on-change</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleGutterChange<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">marks</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;gutters}}<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">step</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;noValue}}<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-slider</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> 6px<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Column Count:<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 50%</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-slider</span>\n                    <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;colCountKey}}<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">on-change</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleColCountChange<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">marks</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;colCounts}}<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">step</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;noValue}}<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-slider</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-row</span> <span class=\"token attr-name\">gutter</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;gutter}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-col</span>\n                <span class=\"token attr-name\">s-for</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>col in colCountArr<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;24 / colCount}}<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Column<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-row</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/grid'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Slider <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/slider'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-col'</span><span class=\"token operator\">:</span> Col<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-row'</span><span class=\"token operator\">:</span> Row<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-slider'</span><span class=\"token operator\">:</span> Slider\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    computed<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">gutter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">const</span> gutterKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gutterKey'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gutters'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">[</span>gutterKey<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">colCount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">const</span> colCountKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'colCountKey'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'colCounts'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">[</span>colCountKey<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">colCountArr</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">const</span> colCount <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'colCount'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">const</span> arr <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n            <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> colCount<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n                arr<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> arr<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            noValue<span class=\"token operator\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n            gutterKey<span class=\"token operator\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span>\n            colCountKey<span class=\"token operator\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span>\n            gutters<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token operator\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token operator\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token operator\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token operator\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token operator\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token operator\">:</span> <span class=\"token number\">48</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            colCounts<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token operator\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token operator\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token operator\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleGutterChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gutterKey'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleColCountChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'colCountKey'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <h3 id=\"row\"><a class=\"header-anchor\" href=\"#row\">#</a> Row</h3> <table> <thead> <tr> <th>成员</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>align</td> <td>flex 布局下的垂直对齐方式：<code>top</code> <code>middle</code> <code>bottom</code></td> <td>string</td> <td>top</td> </tr> <tr> <td>gutter</td> <td>栅格间隔，可以写成像素值或支持响应式的对象写法 <code>{ xs: 8, sm: 16, md: 24}</code></td> <td>number/object</td> <td>0</td> </tr> <tr> <td>justify</td> <td>flex 布局下的水平排列方式：<code>start</code> <code>end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td> <td>string</td> <td>start</td> </tr> <tr> <td>type</td> <td>布局模式，可选 <code>flex</code>，<a href=\"http://caniuse.com/#search=flex\">现代浏览器</a> 下有效</td> <td>string</td> <td></td> </tr> </tbody> </table> <h3 id=\"col\"><a class=\"header-anchor\" href=\"#col\">#</a> Col</h3> <table> <thead> <tr> <th>成员</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>offset</td> <td>栅格左侧的间隔格数，间隔内不可以有栅格</td> <td>number</td> <td>0</td> </tr> <tr> <td>order</td> <td>栅格顺序，<code>flex</code> 布局模式下有效</td> <td>number</td> <td>0</td> </tr> <tr> <td>pull</td> <td>栅格向左移动格数</td> <td>number</td> <td>0</td> </tr> <tr> <td>push</td> <td>栅格向右移动格数</td> <td>number</td> <td>0</td> </tr> <tr> <td>span</td> <td>栅格占位格数，为 0 时相当于 <code>display: none</code></td> <td>number</td> <td>-</td> </tr> <tr> <td>xs</td> <td><code>&lt;576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>sm</td> <td><code>≥576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>md</td> <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>lg</td> <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>xl</td> <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> <tr> <td>xxl</td> <td><code>≥1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td> <td>number | object</td> <td>-</td> </tr> </tbody> </table> <p>响应式栅格的断点扩展自 <a href=\"https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints\">BootStrap 4 的规则</a>（不包含链接里 occasionally 的部分)。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/desc.md
var desc = __webpack_require__(115);
var desc_default = /*#__PURE__*/__webpack_require__.n(desc);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/head.md
var head = __webpack_require__(116);
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/grid/docs/demo.less
var demo = __webpack_require__(26);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/docs/demo.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(demo["a" /* default */], options);



/* harmony default export */ var docs_demo = (demo["a" /* default */].locals || {});
// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/index.js + 3 modules
var grid = __webpack_require__(12);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/docs/demo.js
/**
 * @file Santd grid demo file
 * @author mayihui@baidu.com
 **/



/* harmony default export */ var grid_docs_demo = (san_dev_default.a.defineComponent({
  components: {
    's-row': grid["c" /* default */].Row,
    's-col': grid["c" /* default */].Col
  },
  template: "<div class=\"grid-demo\">\n        <s-row class=\"demo-row\">\n            <s-col span=\"{{24}}\" class=\"demo-col demo-col-1\">100%</s-col>\n        </s-row>\n        <s-row class=\"demo-row\">\n            <s-col span=\"{{6}}\" class=\"demo-col demo-col-2\">25%</s-col>\n            <s-col span=\"{{6}}\" class=\"demo-col demo-col-3\">25%</s-col>\n            <s-col span=\"{{6}}\" class=\"demo-col demo-col-2\">25%</s-col>\n            <s-col span=\"{{6}}\" class=\"demo-col demo-col-3\">25%</s-col>\n        </s-row>\n        <s-row class=\"demo-row\">\n            <s-col span=\"{{8}}\" class=\"demo-col demo-col-4\">33.33%</s-col>\n            <s-col span=\"{{8}}\" class=\"demo-col demo-col-5\">33.33%</s-col>\n            <s-col span=\"{{8}}\" class=\"demo-col demo-col-4\">33.33%</s-col>\n        </s-row>\n        <s-row class=\"demo-row\">\n            <s-col span=\"{{12}}\" class=\"demo-col demo-col-1\">50%</s-col>\n            <s-col span=\"{{12}}\" class=\"demo-col demo-col-3\">50%</s-col>\n        </s-row>\n        <s-row class=\"demo-row\">\n            <s-col span=\"{{16}}\" class=\"demo-col demo-col-4\">66.66%</s-col>\n            <s-col span=\"{{8}}\" class=\"demo-col demo-col-5\">33.33%</s-col>\n        </s-row>\n    </div>"
}));
// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/basic.md
var basic = __webpack_require__(117);
var basic_default = /*#__PURE__*/__webpack_require__.n(basic);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/flex-align.md
var flex_align = __webpack_require__(119);
var flex_align_default = /*#__PURE__*/__webpack_require__.n(flex_align);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/flex-order.md
var flex_order = __webpack_require__(120);
var flex_order_default = /*#__PURE__*/__webpack_require__.n(flex_order);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/flex.md
var flex = __webpack_require__(121);
var flex_default = /*#__PURE__*/__webpack_require__.n(flex);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/gutter.md
var gutter = __webpack_require__(122);
var gutter_default = /*#__PURE__*/__webpack_require__.n(gutter);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/offset.md
var offset = __webpack_require__(123);
var offset_default = /*#__PURE__*/__webpack_require__.n(offset);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/sort.md
var sort = __webpack_require__(124);
var sort_default = /*#__PURE__*/__webpack_require__.n(sort);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/responsive.md
var responsive = __webpack_require__(125);
var responsive_default = /*#__PURE__*/__webpack_require__.n(responsive);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/responsive-more.md
var responsive_more = __webpack_require__(126);
var responsive_more_default = /*#__PURE__*/__webpack_require__.n(responsive_more);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/docs/config.md
var config = __webpack_require__(127);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/grid/README.md
var README = __webpack_require__(128);
var README_default = /*#__PURE__*/__webpack_require__.n(README);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/grid/docs/index.js
/**
 * @file Santd Grid docs
 **/















/* harmony default export */ var docs = __webpack_exports__["default"] = (san_dev_default.a.defineComponent({
  components: {
    desc: desc_default.a,
    head: head_default.a,
    basic: basic_default.a,
    demo: grid_docs_demo,
    flex: flex_default.a,
    flexalign: flex_align_default.a,
    flexorder: flex_order_default.a,
    gutter: gutter_default.a,
    offset: offset_default.a,
    responsive: responsive_default.a,
    responsivemore: responsive_more_default.a,
    sort: sort_default.a,
    gutterconfig: config_default.a,
    readme: README_default.a
  },
  template: "\n        <div>\n            <head/>\n            <demo/>\n            <desc/>\n            <basic/>\n            <readme/>\n        </div>\n    "
}));

/***/ })
]]);