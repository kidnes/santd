(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/icon/index.js + 6 modules
var icon = __webpack_require__(8);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/css-animation/Event.js
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },
  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];

      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

/* harmony default export */ var Event = ({
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }

    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  endEvents: endEvents,
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }

    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
});
// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/core/util/wave.js
/**
 * @file 波纹效果，用在 button switch 等上面
 * @author wangyongqing01@baidu.com
 */



var cc = Object(util["a" /* classCreator */])('click-animating');
/* harmony default export */ var wave = (san_dev_default.a.defineComponent({
  template: "\n        <ins style=\"display:none;\"></ins>\n    ",
  attached: function attached() {
    var _this = this;

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.nextTick(function () {
      var el = _this.el;

      if (_this.owner && _this.owner.el) {
        el = _this.owner.ref('ownerWave') || _this.owner.el;
      }

      _this.instance = _this.bindAnimationEvent(el);
    }); // 清理掉无用的标签。。。好无语的写法。。

    this.el.parentNode.removeChild(this.el);
  },
  disposed: function disposed() {
    if (this.instance) {
      this.instance.cancel();
    }
  },
  isNotGrey: function isNotGrey(color) {
    var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [.\d]*)?\)/);

    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }

    return true;
  },
  onClick: function onClick(node, waveColor) {
    if (node.className.indexOf('-leave') >= 0) {
      return;
    }

    Event.addEndEventListener(node, this.onTransitionEnd);
    this.removeExtraStyleNode();
    var insertExtraNode = this.data.get('insertExtraNode');
    var extraNode = this.extraNode = document.createElement('div');
    extraNode.className = cc('node');
    var attributeName = this.getAttributeName();
    node.removeAttribute(attributeName);
    node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

    if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && this.isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) // any transparent rgba color
    && waveColor !== 'transparent') {
      extraNode.style.borderColor = waveColor;
      var styleForPesudo = this.styleForPesudo = document.createElement('style');
      styleForPesudo.innerHTML = "[".concat(cc('without-extra-node'), "]:after { border-color: ").concat(waveColor, "; }");
      document.body.appendChild(styleForPesudo);
    }

    if (insertExtraNode) {
      node.appendChild(extraNode);
    }
  },
  bindAnimationEvent: function bindAnimationEvent(node) {
    var _this2 = this;

    if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
      return;
    }

    var onClick = function onClick(e) {
      // Fix radio button click twice
      if (e.target.tagName === 'INPUT') {
        return;
      }

      _this2.resetEffect(node);

      var nodeStyle = window.getComputedStyle(node); // Get wave color from target

      var waveColor = nodeStyle.getPropertyValue('border-top-color') // Firefox Compatible
      || nodeStyle.getPropertyValue('border-color') || nodeStyle.getPropertyValue('background-color');
      _this2.clickWaveTimeoutId = window.setTimeout(function () {
        return _this2.onClick(node, waveColor);
      }, 0);
    };

    node.addEventListener('click', onClick, true);
    return {
      cancel: function cancel() {
        node.removeEventListener('click', onClick, true);
      }
    };
  },
  getAttributeName: function getAttributeName() {
    var insertExtraNode = this.data.get('insertExtraNode');
    return insertExtraNode ? cc() : cc('without-extra-node');
  },
  resetEffect: function resetEffect(node) {
    if (!node || node === this.extraNode) {
      return;
    }

    var insertExtraNode = this.data.get('insertExtraNode');
    var attributeName = this.getAttributeName();
    node.removeAttribute(attributeName);
    this.removeExtraStyleNode();

    if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
      node.removeChild(this.extraNode);
    }

    Event.removeEndEventListener(node, this.onTransitionEnd);
  },
  onTransitionEnd: function onTransitionEnd(e) {
    if (!e || e.animationName !== 'fadeEffect') {
      return;
    }

    this.resetEffect(e.target);
  },
  removeExtraStyleNode: function removeExtraStyleNode() {
    if (this.styleForPesudo && document.body.contains(this.styleForPesudo)) {
      document.body.removeChild(this.styleForPesudo);
      this.styleForPesudo = null;
    }
  }
}));
// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/button/style/index.less
var style = __webpack_require__(20);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var button_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/style/index.js
/**
 * @file 组件样式入口
 */

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/button.js
/**
 * @file san-button按钮
 * @author fuqiangqiang@baidu.com
 */





var PREFIX_CLASS = Object(util["a" /* classCreator */])('btn')();
/* harmony default export */ var button_button = (san_dev_default.a.defineComponent({
  dataTypes: {
    disabled: san_dev["DataTypes"].bool,
    ghost: san_dev["DataTypes"].bool,
    href: san_dev["DataTypes"].string,
    htmlType: san_dev["DataTypes"].oneOf(['submit', 'button', 'reset']),
    icon: san_dev["DataTypes"].string,
    loading: san_dev["DataTypes"].oneOfType([san_dev["DataTypes"].bool, san_dev["DataTypes"].object]),
    shape: san_dev["DataTypes"].oneOf(['circle', 'circle-outline', 'round']),
    size: san_dev["DataTypes"].oneOf(['small', 'default', 'large']),
    target: san_dev["DataTypes"].string,
    type: san_dev["DataTypes"].oneOf(['default', 'primary', 'ghost', 'dashed', 'danger', 'link']),
    block: san_dev["DataTypes"].bool,
    noWave: san_dev["DataTypes"].bool
  },
  components: {
    's-icon': icon["a" /* default */],
    's-wave': wave
  },
  computed: {
    classes: function classes() {
      // 处理class
      var data = this.data;
      var type = data.get('type');
      var shape = data.get('shape');
      var size = data.get('sizeMap')[data.get('size')];
      var clazz = [PREFIX_CLASS];
      type && clazz.push("".concat(PREFIX_CLASS, "-").concat(type));
      shape && clazz.push("".concat(PREFIX_CLASS, "-").concat(shape));
      size && clazz.push("".concat(PREFIX_CLASS, "-").concat(size));
      !shape && clazz.push("".concat(PREFIX_CLASS, "-icon-only"));
      data.get('loading') === true && clazz.push("".concat(PREFIX_CLASS, "-loading"));
      data.get('block') && clazz.push("".concat(PREFIX_CLASS, "-block"));
      data.get('ghost') && clazz.push("".concat(PREFIX_CLASS, "-background-ghost"));
      return clazz;
    }
  },
  initData: function initData() {
    return {
      disabled: false,
      icons: null,
      loading: false,
      sizeMap: {
        large: 'lg',
        small: 'sm'
      },
      noWave: false
    };
  },
  updated: function updated() {
    var _this = this;

    var loading = this.data.get('loading');

    if (loading && loading.delay) {
      this.delayTimeout = window.setTimeout(function () {
        return _this.data.set('loading', true);
      }, loading.delay);
    }
  },
  btnClick: function btnClick(e) {
    if (this.data.get('loading')) {
      return;
    } // 模拟a的动作


    var href = this.data.get('href');

    if (href) {
      var node = document.createElement('a');
      node.href = href;
      node.target = this.data.get('target') || '_self';
      node.click();
    }

    this.fire('click', e);
  },
  handleFocus: function handleFocus(e) {
    this.dispatch('santd_button_trigger', {
      action: 'handleFocus',
      e: e
    });
  },
  handleBlur: function handleBlur(e) {
    this.dispatch('santd_button_trigger', {
      action: 'handleBlur',
      e: e
    });
  },
  template: "\n        <button\n            autofocus=\"{{autofocus}}\"\n            autocomplete=\"{{autocomplete}}\"\n            form=\"{{form}}\"\n            formaction=\"{{formaction}}\"\n            formenctype=\"{{formenctype}}\"\n            formmethod=\"{{formmethod}}\"\n            formnovalidate=\"{{formnovalidate}}\"\n            formtarget=\"{{formtarget}}\"\n            name=\"{{name}}\"\n            value=\"{{value}}\"\n            type=\"{{htmlType || 'button'}}\"\n            disabled=\"{{disabled}}\"\n            class=\"{{classes}}\"\n            on-click=\"btnClick($event)\"\n            on-focus=\"handleFocus\"\n            on-blur=\"handleBlur\"\n        >\n            <span>\n                <s-icon s-if=\"loading === true\" type=\"loading\" />\n                <s-icon s-elif=\"icon\" type=\"{{icon}}\" />\n                <slot />\n            </span>\n            <s-wave s-if=\"!noWave && type !== 'link'\" />\n        </button>\n    "
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/button-group.js
/**
 * @file button group
 * @author fuqiangqiang@baidu.com
 */


var button_group_PREFIX_CLASS = Object(util["a" /* classCreator */])('btn-group')();
/* harmony default export */ var button_group = (san_dev_default.a.defineComponent({
  dataTypes: {
    size: san_dev["DataTypes"].string
  },
  initData: function initData() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm'
      }
    };
  },
  computed: {
    classes: function classes() {
      var arr = [button_group_PREFIX_CLASS];
      var size = this.data.get('sizeMap')[this.data.get('size')];
      size && arr.push("".concat(button_group_PREFIX_CLASS, "-").concat(size));
      return arr;
    }
  },
  template: "\n        <div class=\"{{classes}}\" style=\"font-size:0;\"><slot/></div>\n    "
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/index.js
/**
 * @file san-button按钮
 * @author fuqiangqiang@baidu.com
 */


button_button.Group = button_group;
/* harmony default export */ var src_button = __webpack_exports__["a"] = (button_button);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/icon/style/index.less
var style = __webpack_require__(19);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/style/index.less

            

var style_options = {};

style_options.insert = "head";
style_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], style_options);



/* harmony default export */ var icon_style = (style["a" /* default */].locals || {});
// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/@ant-design/icons-svg/es/index.js + 788 modules
var es = __webpack_require__(29);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(16);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/generate.js
/**
* @file 根据主颜色信息，计算出副颜色信息
* 用于双色icon
* @author fuqiangqiang@baidu.com
*/

var hueStep = 2; // 色相阶梯

var saturationStep = 16; // 饱和度阶梯，浅色部分

var saturationStep2 = 5; // 饱和度阶梯，深色部分

var brightnessStep1 = 5; // 亮度阶梯，浅色部分

var brightnessStep2 = 15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下

var getHue = function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
};

var getSaturation = function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = Math.round(hsv.s * 100) - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = Math.round(hsv.s * 100) + saturationStep;
  } else {
    saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 100) {
    saturation = 100;
  } // 第一格的 s 限制在 6-10 之间


  if (light && i === lightColorCount && saturation > 10) {
    saturation = 10;
  }

  if (saturation < 6) {
    saturation = 6;
  }

  return saturation;
};

var getValue = function getValue(hsv, i, light) {
  if (light) {
    return Math.round(hsv.v * 100) + brightnessStep1 * i;
  }

  return Math.round(hsv.v * 100) - brightnessStep2 * i;
};

function generate(color) {
  var patterns = [];
  var pColor = tinycolor_default()(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = pColor.toHsv();
    var colorString = tinycolor_default()({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }

  patterns.push(pColor.toHexString());

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = pColor.toHsv();

    var _colorString = tinycolor_default()({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }).toHexString();

    patterns.push(_colorString);
  }

  return patterns;
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/utils.js
var _svgBaseProps;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file Santd icon util file
 * @author mayihui@baidu.com
 **/

function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc["class"];
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
var MiniMap = /*#__PURE__*/function () {
  function MiniMap() {
    _classCallCheck(this, MiniMap);

    this.collection = {};
  }

  _createClass(MiniMap, [{
    key: "clear",
    value: function clear() {
      this.collection = {};
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return delete this.collection[key];
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.collection[key];
    }
  }, {
    key: "has",
    value: function has(key) {
      return Boolean(this.collection[key]);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.collection[key] = value;
      return this;
    }
  }, {
    key: "size",
    get: function get() {
      return Object.keys(this.collection).length;
    }
  }]);

  return MiniMap;
}();
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function withSuffix(name, theme) {
  switch (theme) {
    case 'filled':
      return "".concat(name, "-fill");

    case 'outlined':
      return "".concat(name, "-o");

    case 'twotone':
      return "".concat(name, "-twotone");

    default:
      throw new TypeError("Unknown theme type: ".concat(theme, ", name: ").concat(name));
  }
}
var svgBaseProps = (_svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
}, _defineProperty(_svgBaseProps, 'aria-hidden', 'true'), _defineProperty(_svgBaseProps, "focusable", 'false'), _svgBaseProps);
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;
function getThemeFromTypeName(type) {
  var result = null;

  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }

  return result;
}
function removeTypeTheme(type) {
  return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
}
function withThemeSuffix(type, theme) {
  var result = type;

  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    console.warn(false, 'Icon', "This icon '".concat(type, "' has unknown theme '").concat(theme, "'"));
  }

  return result;
} // For alias or compatibility

function alias(type) {
  switch (type) {
    case 'cross':
      return 'close';

    default:
  }

  return type;
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/icon.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file Santd icon file
 * @author mayihui@baidu.com
 **/


var definitions = new MiniMap();
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6'
};
var icon_icon = san_dev_default.a.defineComponent({
  computed: {
    target: function target() {
      var target;
      var primaryColor = this.data.get('primaryColor');
      var secondaryColor = this.data.get('secondaryColor');
      var type = this.data.get('type');
      var colors = twoToneColorPalette;

      if (primaryColor) {
        colors = {
          primaryColor: primaryColor,
          secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
      }

      if (isIconDefinition(type)) {
        target = type;
      } else if (typeof type === 'string') {
        target = icon_icon.get(type, colors);

        if (!target) {
          return null;
        }
      }

      if (!target) {
        return null;
      }

      if (target && typeof target.icon === 'function') {
        target = _objectSpread(_objectSpread({}, target), {}, {
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
      }

      return target;
    }
  },
  template: "\n        <svg\n            key=\"svg-{{target.name}}\"\n            data-icon=\"{{target.name}}\"\n            width=\"1em\"\n            height=\"1em\"\n            fill=\"currentColor\"\n            aria-hidden=\"true\"\n            focusable=\"false\"\n            viewBox=\"{{target.icon.attrs.viewBox || '0 0 1024 1024'}}\"\n        >\n            <slot />\n            <path\n                s-for=\"p, index in target.icon.children\"\n                key=\"svg-{{target.name}}-path-{{index}}\"\n                s-bind=\"{{p.attrs}}\"\n            >\n            </path>\n        </svg>\n    "
});

icon_icon.add = function (icons) {
  icons.forEach(function (icon) {
    definitions.set(withSuffix(icon.name, icon.theme), icon);
  });
};

icon_icon.clear = function () {
  definitions.clear();
};

icon_icon.get = function (key, colors) {
  if (key) {
    var target = definitions.get(key);

    if (target && typeof target.icon === 'function') {
      target = _objectSpread(_objectSpread({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }

    return target;
  }
};

icon_icon.setTwoToneColors = function (twoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = twoToneColorPaletteSetter.primaryColor;
  twoToneColorPalette.secondaryColor = twoToneColorPaletteSetter.secondaryColor || getSecondaryColor(twoToneColorPaletteSetter.primaryColor);
};

icon_icon.getTwoToneColors = function () {
  return _objectSpread({}, twoToneColorPalette);
};

/* harmony default export */ var src_icon_icon = (icon_icon);
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/iconfont.js
/**
 * @file Santd icon iconfont file
 * @author mayihui@baidu.com
 **/


var customCache = new Set();
/* harmony default export */ var iconfont = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  return san_dev_default.a.defineComponent({
    components: {
      's-icon': src_icon
    },
    initData: function initData() {
      return {
        extraCommonProps: extraCommonProps
      };
    },
    attached: function attached() {
      var type = this.data.get('type');
      var useNode = this.el.querySelector('use');
      useNode.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + type);
    },
    handleClick: function handleClick(e) {
      this.fire('click', e);
    },
    template: "\n            <span on-click=\"handleClick\">\n                <s-icon\n                    theme=\"{{theme}}\"\n                    spin=\"{{spin}}\"\n                    rotate=\"{{rotate}}\"\n                    bodyStyle=\"{{bodyStyle}}\"\n                    twoToneColor=\"{{twoToneColor}}\"\n                    viewBox=\"0 0 1024 1024\"\n                    s-bind=\"{{extraCommonProps}}\"\n                >\n                    <use></use>\n                </s-icon>\n            </span>\n        "
  });
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/twoTonePrimaryColor.js
/**
 * @file Santd icon twoTonePrimaryColor
 * @author mayihui@baidu.com
 **/

function setTwoToneColor(primaryColor) {
  return src_icon_icon.setTwoToneColors({
    primaryColor: primaryColor
  });
}
function getTwoToneColor() {
  var colors = src_icon_icon.getTwoToneColors();
  return colors.primaryColor;
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/index.js
function icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { icon_ownKeys(Object(source), true).forEach(function (key) { src_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* @file icon图标
* @author fuqiangqiang@baidu.com
*/








var prefixCls = Object(util["a" /* classCreator */])('icon')();
src_icon_icon.add(Object.keys(es).map(function (key) {
  return es[key];
}));
setTwoToneColor('#1890ff');
var santd_src_icon_icon = san_dev_default.a.defineComponent({
  components: {
    's-icon': src_icon_icon
  },
  dataTypes: {
    tabIndex: san_dev["DataTypes"].number
  },
  computed: {
    classes: function classes() {
      var type = this.data.get('type');
      var classArr = [prefixCls];
      Boolean(type) && classArr.push("".concat(prefixCls, "-").concat(type));
      return classArr;
    },
    innerSvgProps: function innerSvgProps() {
      var spin = this.data.get('spin');
      var type = this.data.get('type');
      var rotate = this.data.get('rotate');
      var viewBox = this.data.get('viewBox');
      var theme = this.data.get('theme');
      var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
      } : undefined;

      var innerSvgProps = icon_objectSpread(icon_objectSpread({}, svgBaseProps), {}, {
        "class": !!spin || type === 'loading' ? "".concat(prefixCls, "-spin") : '',
        style: svgStyle,
        viewBox: viewBox
      });

      if (!viewBox) {
        delete innerSvgProps.viewBox;
      }

      if (typeof type === 'string') {
        var computedType = type;
        computedType = withThemeSuffix(removeTypeTheme(alias(computedType)), theme || 'outlined');
        innerSvgProps.computedType = computedType;
      }

      return innerSvgProps;
    }
  },
  inited: function inited() {
    this.data.set('hasComponent', !!this.sourceSlots.named.component);
    var iconTabIndex = this.data.get('tabIndex');

    if (iconTabIndex === undefined && this.listeners.click) {
      this.data.set('iconTabIndex', -1);
    }
  },
  handleClick: function handleClick(e) {
    this.fire('click', e);
  },
  template: "<i\n        aria-label=\"{{type && '\u56FE\u6807: ' + type}}\"\n        tabindex=\"{{iconTabIndex}}\"\n        on-click=\"handleClick\"\n        class=\"{{classes}}\"\n    >\n        <slot name=\"component\" s-if=\"{{hasComponent}}\" />\n        <s-icon\n            s-else\n            style=\"{{innerSvgProps.style}}\"\n            class=\"{{innerSvgProps.class}}\"\n            type=\"{{innerSvgProps.computedType}}\"\n            primaryColor=\"{{twoToneColor}}\"\n            theme=\"{{theme}}\"\n            spin=\"{{spin}}\"\n            rotate=\"{{rotate}}\"\n        >\n            <slot />\n        </s-icon>\n    </i>"
});
santd_src_icon_icon.createFromIconfontCN = iconfont;
santd_src_icon_icon.getTwoToneColor = getTwoToneColor;
santd_src_icon_icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var src_icon = __webpack_exports__["a"] = (santd_src_icon_icon);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(6);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/string-replace-loader??ref--10!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/radio/style/index.less
var style = __webpack_require__(18);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/radio/style/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var radio_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/radio/radio.js
/**
 * @file 组件 Checkbox
 * @author jinzhan <jinzhan@baidu.com>
 */



var prefixCls = Object(util["a" /* classCreator */])('radio')();
/* harmony default export */ var radio_radio = (san_dev_default.a.defineComponent({
  template: "\n        <label\n            class=\"{{classes}}\"\n            on-mouseenter=\"handleMouseEnter\"\n            on-mouseleave=\"handleMouseLeave\"\n        >\n            <span class=\"{{inputWrapClasses}}\">\n                <input\n                    name=\"{{name}}\"\n                    type=\"{{type}}\"\n                    class=\"{{prefixCls}}-input\"\n                    readonly=\"{{readOnly}}\"\n                    disabled=\"{{disabled}}\"\n                    tabindex=\"{{tabIndex}}\"\n                    on-click=\"handleClick\"\n                    on-focus=\"handleFocus\"\n                    on-blur=\"handleBlur\"\n                    on-change=\"handleChange\"\n                    autofocus=\"{{autoFocus}}\"\n                    s-ref=\"input\"\n                    value=\"{{value}}\"\n                />\n                <span class=\"{{prefixCls}}-inner\" />\n            </span>\n            <span s-if=\"hasSlot\"><slot /></span>\n        </label>\n    ",
  dataTypes: {
    checked: san_dev["DataTypes"].bool,
    disabled: san_dev["DataTypes"].bool
  },
  initData: function initData() {
    return {
      // 这里写入prefixCls,因为groupbutton里需要重写该样式
      prefixCls: prefixCls,
      type: 'radio',
      defaultChecked: false
    };
  },
  inited: function inited() {
    this.data.set('checked', this.data.get('checked') || this.data.get('defaultChecked'));
    this.data.set('hasSlot', !!this.sourceSlots.noname);
  },
  attached: function attached() {
    this.dispatch('santd_radio_add', this);
  },
  computed: {
    classes: function classes() {
      var checked = this.data.get('checked');
      var disabled = this.data.get('disabled');
      var prefixCls = this.data.get('prefixCls');
      var classArr = ["".concat(prefixCls, "-wrapper")];
      checked && classArr.push("".concat(prefixCls, "-wrapper-checked"));
      disabled && classArr.push("".concat(prefixCls, "-wrapper-disabled"));
      return classArr;
    },
    inputWrapClasses: function inputWrapClasses() {
      var checked = this.data.get('checked');
      var disabled = this.data.get('disabled');
      var prefixCls = this.data.get('prefixCls');
      var classArr = [prefixCls];
      checked && classArr.push("".concat(prefixCls, "-checked"));
      disabled && classArr.push("".concat(prefixCls, "-disabled"));
      return classArr;
    }
  },
  handleChange: function handleChange(e) {
    if (this.data.get('disabled')) {
      return;
    }

    this.data.set('checked', e.target.checked);
    this.dispatch('santd_radio_toggleOption', {
      value: this.data.get('value'),
      event: e
    });
  },
  handleClick: function handleClick(e) {
    this.fire('click', e);
  },
  handleBlur: function handleBlur(e) {
    this.fire('blur', e);
  },
  handleFocus: function handleFocus(e) {
    this.fire('focus', e);
  },
  handleMouseEnter: function handleMouseEnter(e) {
    this.fire('mouseenter', e);
  },
  handleMouseLeave: function handleMouseLeave(e) {
    this.fire('mouseleave', e);
  },
  focus: function focus() {
    this.ref('input').focus();
  },
  blur: function blur() {
    this.ref('input').blur();
  }
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/radio/group.js
/**
 * @file Santd radio group file
 * @author mayihui@baidu.com
 **/



var group_prefixCls = Object(util["a" /* classCreator */])('radio')();
/* harmony default export */ var group = (san_dev_default.a.defineComponent({
  DataTypes: {
    defaultValue: san_dev["DataTypes"].oneOf([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    value: san_dev["DataTypes"].oneOf([san_dev["DataTypes"].string, san_dev["DataTypes"].number]),
    options: san_dev["DataTypes"].array,
    disabled: san_dev["DataTypes"].bool,
    name: san_dev["DataTypes"].string
  },
  components: {
    's-radio': radio_radio
  },
  initData: function initData() {
    return {
      buttonStyle: 'outline',
      options: [],
      disabled: false
    };
  },
  computed: {
    radios: function radios() {
      var options = this.data.get('options');
      var value = this.data.get('value');
      var disabled = this.data.get('disabled');
      return options.map(function (option) {
        var radioOption = typeof option === 'string' ? {
          label: option,
          value: option
        } : {
          label: option.label,
          value: option.value
        };
        radioOption.disabled = option.disabled != null ? option.disabled : disabled;
        radioOption.checked = value === radioOption.value;
        return radioOption;
      });
    }
  },
  inited: function inited() {
    this.radios = [];
    this.data.set('value', this.data.get('value') || this.data.get('defaultValue') || '');
  },
  disposed: function disposed() {
    this.radios = null;
  },
  updated: function updated() {
    var value = this.data.get('value');
    var disabled = this.data.get('disabled');
    var name = this.data.get('name');
    this.radios && this.radios.forEach(function (child) {
      child.data.set('checked', value === child.data.get('value'));
      child.data.set('disabled', child.data.get('disabled') || disabled);
      child.data.set('name', name);
    });
  },
  messages: {
    santd_radio_toggleOption: function santd_radio_toggleOption(payload) {
      var option = payload.value;
      this.data.set('value', option.value);
      this.fire('change', option.event);
      this.dispatch('UI:form-item-interact', {
        fieldValue: option.value,
        type: 'change',
        e: payload.value.e
      });
    },
    santd_radio_add: function santd_radio_add(payload) {
      // 当没有options数据的时候才去收集子checkbox
      if (!this.data.get('options').length) {
        this.radios.push(payload.value);
      }
    }
  },
  attached: function attached() {
    this.updated();
  },
  template: "\n        <div class=\"".concat(group_prefixCls, "-group ").concat(group_prefixCls, "-group-{{buttonStyle}} {{size ? '").concat(group_prefixCls, "-group-' + size : ''}}\">\n            <s-radio\n                s-if=\"{{radios.length}}\"\n                s-for=\"radio in radios\"\n                prefixCls=\"").concat(group_prefixCls, "\"\n                disabled=\"{{radio.disabled}}\"\n                value=\"{{radio.value}}\"\n                checked=\"{{radio.checked}}\"\n                name=\"{{name}}\"\n            >{{radio.label}}</s-radio>\n            <slot />\n        </div>\n    ")
}));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/radio/radioButton.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @file 组件 radio
 * @author chenkai13 <chenkai13@baidu.com>
 */




var radioButton_prefixCls = Object(util["a" /* classCreator */])('radio-button')();
/* harmony default export */ var radioButton = (san_dev_default.a.defineComponent({
  initData: function initData() {
    return _objectSpread(_objectSpread({}, radio_radio.prototype.initData()), {}, {
      prefixCls: radioButton_prefixCls
    });
  }
}, radio_radio));
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/radio/index.js
/**
 * @file 组件 radio
 * @author chenkai13 <chenkai13@baidu.com>
 */



radio_radio.Group = group;
radio_radio.Button = radioButton;
/* harmony default export */ var src_radio = __webpack_exports__["a"] = (radio_radio);

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
/* 19 */
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
/* 20 */
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


/***/ })
]]);