(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/@ant-design/icons-svg/es/index.js + 788 modules
var es = __webpack_require__(13);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/core/util/index.js + 2 modules
var util = __webpack_require__(4);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(11);
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/generate.js
/**
* @file 根据主颜色信息，计算出副颜色信息
* 用于双色icon
* @author fuqiangqiang@baidu.com
*/

const hueStep = 2; // 色相阶梯

const saturationStep = 16; // 饱和度阶梯，浅色部分

const saturationStep2 = 5; // 饱和度阶梯，深色部分

const brightnessStep1 = 5; // 亮度阶梯，浅色部分

const brightnessStep2 = 15; // 亮度阶梯，深色部分

const lightColorCount = 5; // 浅色数量，主色上

const darkColorCount = 4; // 深色数量，主色下

const getHue = (hsv, i, light) => {
  let hue; // 根据色相不同，色相转向不同

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

const getSaturation = (hsv, i, light) => {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  let saturation;

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

const getValue = (hsv, i, light) => {
  if (light) {
    return Math.round(hsv.v * 100) + brightnessStep1 * i;
  }

  return Math.round(hsv.v * 100) - brightnessStep2 * i;
};

function generate(color) {
  const patterns = [];
  const pColor = tinycolor_default()(color);

  for (let i = lightColorCount; i > 0; i -= 1) {
    const hsv = pColor.toHsv();
    const colorString = tinycolor_default()({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }

  patterns.push(pColor.toHexString());

  for (let i = 1; i <= darkColorCount; i += 1) {
    const hsv = pColor.toHsv();
    const colorString = tinycolor_default()({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    }).toHexString();
    patterns.push(colorString);
  }

  return patterns;
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/utils.js
/**
 * @file Santd icon util file
 * @author mayihui@baidu.com
 **/

function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
class MiniMap {
  constructor() {
    this.collection = {};
  }

  get size() {
    return Object.keys(this.collection).length;
  }

  clear() {
    this.collection = {};
  }

  delete(key) {
    return delete this.collection[key];
  }

  get(key) {
    return this.collection[key];
  }

  has(key) {
    return Boolean(this.collection[key]);
  }

  set(key, value) {
    this.collection[key] = value;
    return this;
  }

}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function withSuffix(name, theme) {
  switch (theme) {
    case 'filled':
      return `${name}-fill`;

    case 'outlined':
      return `${name}-o`;

    case 'twotone':
      return `${name}-twotone`;

    default:
      throw new TypeError(`Unknown theme type: ${theme}, name: ${name}`);
  }
}
const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  ['aria-hidden']: 'true',
  focusable: 'false'
};
const fillTester = /-fill$/;
const outlineTester = /-o$/;
const twoToneTester = /-twotone$/;
function getThemeFromTypeName(type) {
  let result = null;

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
  let result = type;

  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    console.warn(false, 'Icon', `This icon '${type}' has unknown theme '${theme}'`);
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
/**
 * @file Santd icon file
 * @author mayihui@baidu.com
 **/


let definitions = new MiniMap();
let twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6'
};
const icon_icon = san_dev_default.a.defineComponent({
  computed: {
    target() {
      let target;
      const primaryColor = this.data.get('primaryColor');
      const secondaryColor = this.data.get('secondaryColor');
      const type = this.data.get('type');
      let colors = twoToneColorPalette;

      if (primaryColor) {
        colors = {
          primaryColor,
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
        target = { ...target,
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        };
      }

      return target;
    }

  },
  template: `
        <svg
            key="svg-{{target.name}}"
            data-icon="{{target.name}}"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            viewBox="{{target.icon.attrs.viewBox || '0 0 1024 1024'}}"
        >
            <slot />
            <path
                s-for="p, index in target.icon.children"
                key="svg-{{target.name}}-path-{{index}}"
                s-bind="{{p.attrs}}"
            >
            </path>
        </svg>
    `
});

icon_icon.add = function (icons) {
  icons.forEach(icon => {
    definitions.set(withSuffix(icon.name, icon.theme), icon);
  });
};

icon_icon.clear = function () {
  definitions.clear();
};

icon_icon.get = function (key, colors) {
  if (key) {
    let target = definitions.get(key);

    if (target && typeof target.icon === 'function') {
      target = { ...target,
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      };
    }

    return target;
  }
};

icon_icon.setTwoToneColors = function (twoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = twoToneColorPaletteSetter.primaryColor;
  twoToneColorPalette.secondaryColor = twoToneColorPaletteSetter.secondaryColor || getSecondaryColor(twoToneColorPaletteSetter.primaryColor);
};

icon_icon.getTwoToneColors = function () {
  return { ...twoToneColorPalette
  };
};

/* harmony default export */ var src_icon_icon = (icon_icon);
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/iconfont.js
/**
 * @file Santd icon iconfont file
 * @author mayihui@baidu.com
 **/


const customCache = new Set();
/* harmony default export */ var iconfont = (function (options = {}) {
  const {
    scriptUrl,
    extraCommonProps = {}
  } = options;

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    let script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  return san_dev_default.a.defineComponent({
    components: {
      's-icon': src_icon
    },

    initData() {
      return {
        extraCommonProps
      };
    },

    attached() {
      const type = this.data.get('type');
      let useNode = this.el.querySelector('use');
      useNode.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + type);
    },

    handleClick(e) {
      this.fire('click', e);
    },

    template: `
            <span on-click="handleClick">
                <s-icon
                    theme="{{theme}}"
                    spin="{{spin}}"
                    rotate="{{rotate}}"
                    bodyStyle="{{bodyStyle}}"
                    twoToneColor="{{twoToneColor}}"
                    viewBox="0 0 1024 1024"
                    s-bind="{{extraCommonProps}}"
                >
                    <use></use>
                </s-icon>
            </span>
        `
  });
});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/twoTonePrimaryColor.js
/**
 * @file Santd icon twoTonePrimaryColor
 * @author mayihui@baidu.com
 **/

function setTwoToneColor(primaryColor) {
  return src_icon_icon.setTwoToneColors({
    primaryColor
  });
}
function getTwoToneColor() {
  const colors = src_icon_icon.getTwoToneColors();
  return colors.primaryColor;
}
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/icon/index.js
/**
* @file icon图标
* @author fuqiangqiang@baidu.com
*/








const prefixCls = Object(util["a" /* classCreator */])('icon')();
src_icon_icon.add(Object.keys(es).map(key => es[key]));
setTwoToneColor('#1890ff');
const santd_src_icon_icon = san_dev_default.a.defineComponent({
  components: {
    's-icon': src_icon_icon
  },
  dataTypes: {
    tabIndex: san_dev["DataTypes"].number
  },
  computed: {
    classes() {
      const type = this.data.get('type');
      let classArr = [prefixCls];
      Boolean(type) && classArr.push(`${prefixCls}-${type}`);
      return classArr;
    },

    innerSvgProps() {
      const spin = this.data.get('spin');
      const type = this.data.get('type');
      const rotate = this.data.get('rotate');
      const viewBox = this.data.get('viewBox');
      const theme = this.data.get('theme');
      let svgStyle = rotate ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`
      } : undefined;
      let innerSvgProps = { ...svgBaseProps,
        class: !!spin || type === 'loading' ? `${prefixCls}-spin` : '',
        style: svgStyle,
        viewBox
      };

      if (!viewBox) {
        delete innerSvgProps.viewBox;
      }

      if (typeof type === 'string') {
        let computedType = type;
        computedType = withThemeSuffix(removeTypeTheme(alias(computedType)), theme || 'outlined');
        innerSvgProps.computedType = computedType;
      }

      return innerSvgProps;
    }

  },

  inited() {
    this.data.set('hasComponent', !!this.sourceSlots.named.component);
    let iconTabIndex = this.data.get('tabIndex');

    if (iconTabIndex === undefined && this.listeners.click) {
      this.data.set('iconTabIndex', -1);
    }
  },

  handleClick(e) {
    this.fire('click', e);
  },

  template: `<i
        aria-label="{{type && '图标: ' + type}}"
        tabindex="{{iconTabIndex}}"
        on-click="handleClick"
        class="{{classes}}"
    >
        <slot name="component" s-if="{{hasComponent}}" />
        <s-icon
            s-else
            style="{{innerSvgProps.style}}"
            class="{{innerSvgProps.class}}"
            type="{{innerSvgProps.computedType}}"
            primaryColor="{{twoToneColor}}"
            theme="{{theme}}"
            spin="{{spin}}"
            rotate="{{rotate}}"
        >
            <slot />
        </s-icon>
    </i>`
});
santd_src_icon_icon.createFromIconfontCN = iconfont;
santd_src_icon_icon.getTwoToneColor = getTwoToneColor;
santd_src_icon_icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var src_icon = __webpack_exports__["a"] = (santd_src_icon_icon);

/***/ })

}]);