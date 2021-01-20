(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16,8],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _san_docit_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "// extracted by mini-css-extract-plugin\nexport {};", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 23 */
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_button_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_button_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_size_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_size_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_button_docs_size_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_button_docs_size_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var santd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var santd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-button': santd_button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    's-buttongroup': santd_button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Group,
    's-radiogroup': santd_radio__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Group,
    's-radiobutton': santd_radio__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Button,
    's-icon': santd_icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  initData: function initData() {
    return {
      size: 'large'
    };
  },
  handleSizeChange: function handleSizeChange(e) {
    this.data.set('size', e.target.value);
  }
});
/* san-hmr disable */

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_icon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_icon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_button_docs_icon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_button_docs_icon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_disable_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_disable_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_button_docs_disable_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_button_docs_disable_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_block_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var _Volumes_Source_san_santd_src_button_docs_block_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_button_docs_block_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
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
  "code-preview-0": _Volumes_Source_san_santd_src_button_docs_block_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(159);
        
        var script = __webpack_require__(48).default;
        module.exports = __webpack_require__(48);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(160);
        
        var script = __webpack_require__(49).default;
        module.exports = __webpack_require__(49);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(161);
        
        var script = __webpack_require__(50).default;
        module.exports = __webpack_require__(50);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(162);
        
        var script = __webpack_require__(51).default;
        module.exports = __webpack_require__(51);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(163);
        
        var script = __webpack_require__(52).default;
        module.exports = __webpack_require__(52);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(164);
        
        var script = __webpack_require__(53).default;
        module.exports = __webpack_require__(53);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(165);
        
        var script = __webpack_require__(54).default;
        module.exports = __webpack_require__(54);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(166);
        
        var script = __webpack_require__(55).default;
        module.exports = __webpack_require__(55);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(167);
        
        var script = __webpack_require__(56).default;
        module.exports = __webpack_require__(56);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(168);
        
        var script = __webpack_require__(57).default;
        module.exports = __webpack_require__(57);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(169);
        
        var script = __webpack_require__(58).default;
        module.exports = __webpack_require__(58);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        __webpack_require__(170);
var injectStyles = [];

        var template = __webpack_require__(171);
        
        var script = __webpack_require__(59).default;
        module.exports = __webpack_require__(59);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(172);
        
        var script = __webpack_require__(60).default;
        module.exports = __webpack_require__(60);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(173);
        
        var script = __webpack_require__(61).default;
        module.exports = __webpack_require__(61);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(174);
        
        var script = __webpack_require__(62).default;
        module.exports = __webpack_require__(62);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(175);
        
        var script = __webpack_require__(63).default;
        module.exports = __webpack_require__(63);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
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
/* 159 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code>。</p> <p>按钮的属性说明如下：</p> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>disabled</td> <td>按钮失效状态</td> <td>boolean</td> <td><code>false</code></td> </tr> <tr> <td>ghost</td> <td>幽灵属性，使按钮背景透明</td> <td>boolean</td> <td><code>false</code></td> </tr> <tr> <td>href</td> <td>点击跳转的地址，指定此属性 button 的行为和 a 链接一致</td> <td>string</td> <td>-</td> </tr> <tr> <td>htmlType</td> <td>设置 button 原生的 type 值，可选值请参考 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type\">HTML 标准</a></td> <td>string</td> <td><code>button</code></td> </tr> <tr> <td>icon</td> <td>设置按钮的图标类型</td> <td>string</td> <td>-</td> </tr> <tr> <td>loading</td> <td>设置按钮载入状态</td> <td delay:=\"\" number=\"\">boolean |</td> <td><code>false</code></td> </tr> <tr> <td>shape</td> <td>设置按钮形状，可选值为 <code>circle</code> <code>round</code> 或者不设</td> <td>string</td> <td>-</td> </tr> <tr> <td>size</td> <td>设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设</td> <td>string</td> <td><code>default</code></td> </tr> <tr> <td>target</td> <td>相当于 a 链接的 target 属性，href 存在时生效</td> <td>string</td> <td>-</td> </tr> <tr> <td>type</td> <td>设置按钮类型，可选值为 <code>primary</code> <code>dashed</code> <code>danger</code> 或者不设</td> <td>string</td> <td>-</td> </tr> <tr> <td>block</td> <td>将按钮宽度调整为其父宽度的选项</td> <td>boolean</td> <td><code>false</code></td> </tr> <tr> <td>on-click</td> <td>点击按钮时的回调</td> <td>(event) =&gt; void</td> <td>-</td> </tr> </tbody> </table> <p>支持原生 button 的其他所有属性。</p> <p><code>&lt;s-button&gt;Hello world!&lt;/s-button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;&lt;span&gt;Hello world!&lt;/span&gt;&lt;/button&gt;</code>，并且除了上表中的属性，其它HTML标准属性都会直接传到原生 button 上。</p> <p>带有href属性的<code>&lt;s-button&gt;</code>并不会被渲染成<code>&lt;a&gt;</code>，只会模拟<code>&lt;a&gt;</code>的动作。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8B\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%92%AE%E7%B1%BB%E5%9E%8B\">#</a> 按钮类型</h4> <p>按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// Module
var code = " <div> <s-button type=\"primary\">Primary</s-button> <s-button>Default</s-button> <s-button type=\"danger\">Danger</s-button> <s-button type=\"dashed\">Dashed</s-button> <s-button type=\"link\">Link</s-button> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E6%8C%89%E9%92%AE%E5%B0%BA%E5%AF%B8\"><a class=\"header-anchor\" href=\"#%E6%8C%89%E9%92%AE%E5%B0%BA%E5%AF%B8\">#</a> 按钮尺寸</h4> <p>按钮有大、中、小三种尺寸。通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-radiogroup</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-change</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleSizeChange<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>size<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-radiobutton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Large<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-radiobutton</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-radiobutton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-radiobutton</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-radiobutton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-radiobutton</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-radiogroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Normal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>round<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>round<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Download<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Download<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;size}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Backward\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Forward <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Radio <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/radio'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-buttongroup'</span><span class=\"token operator\">:</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-radiogroup'</span><span class=\"token operator\">:</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-radiobutton'</span><span class=\"token operator\">:</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            size<span class=\"token operator\">:</span> <span class=\"token string\">'large'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleSizeChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'size'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

// Module
var code = " <div> <s-radiogroup value=\"{{size}}\" on-change=\"handleSizeChange\" name=\"size\"> <s-radiobutton value=\"large\">Large</s-radiobutton> <s-radiobutton value=\"default\">Default</s-radiobutton> <s-radiobutton value=\"small\">Small</s-radiobutton> </s-radiogroup> <br/><br/> <s-button type=\"primary\" size=\"{{size}}\">Primary</s-button> <s-button size=\"{{size}}\">Normal</s-button> <s-button type=\"dashed\" size=\"{{size}}\">Dashed</s-button> <s-button type=\"danger\" size=\"{{size}}\">Danger</s-button> <s-button type=\"link\" size=\"{{size}}\">Link</s-button> <br/> <s-button type=\"primary\" icon=\"download\" size=\"{{size}}\"/> <s-button type=\"primary\" shape=\"circle\" icon=\"download\" size=\"{{size}}\"/> <s-button type=\"primary\" shape=\"round\" icon=\"download\" size=\"{{size}}\"/> <s-button type=\"primary\" shape=\"round\" icon=\"download\" size=\"{{size}}\">Download</s-button> <s-button type=\"primary\" icon=\"download\" size=\"{{size}}\">Download</s-button> <br/> <s-buttongroup size=\"{{size}}\"> <s-button type=\"primary\"> <s-icon type=\"left\"/> Backward </s-button> <s-button type=\"primary\"> Forward <s-icon type=\"right\"/> </s-button> </s-buttongroup> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9B%BE%E6%A0%87%E6%8C%89%E9%92%AE\"><a class=\"header-anchor\" href=\"#%E5%9B%BE%E6%A0%87%E6%8C%89%E9%92%AE\">#</a> 图标按钮</h4> <p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>A<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

// Module
var code = " <div> <s-button type=\"primary\" shape=\"circle\" icon=\"search\"/> <s-button type=\"primary\" shape=\"circle\">A</s-button> <s-button type=\"primary\" icon=\"search\">Search</s-button> <s-button shape=\"circle\" icon=\"search\"/> <s-button icon=\"search\">Search</s-button> <br/> <s-button shape=\"circle\" icon=\"search\"/> <s-button icon=\"search\">Search</s-button> <s-button type=\"dashed\" shape=\"circle\" icon=\"search\"/> <s-button type=\"dashed\" icon=\"search\">Search</s-button> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E4%B8%8D%E5%8F%AF%E7%94%A8%E7%8A%B6%E6%80%81\"><a class=\"header-anchor\" href=\"#%E4%B8%8D%E5%8F%AF%E7%94%A8%E7%8A%B6%E6%80%81\">#</a> 不可用状态</h4> <p>添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 8px 8px 0 8px<span class=\"token punctuation\">;</span> <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgb</span><span class=\"token punctuation\">(</span>190<span class=\"token punctuation\">,</span> 200<span class=\"token punctuation\">,</span> 200<span class=\"token punctuation\">)</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ghost<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ghost(disabled)<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 167 */
/***/ (function(module, exports) {

// Module
var code = " <div> <s-button type=\"primary\">Primary</s-button> <s-button type=\"primary\" disabled=\"{{true}}\">Primary(disabled)</s-button> <br/> <s-button type=\"default\">Default</s-button> <s-button type=\"default\" disabled=\"{{true}}\">Default(disabled)</s-button> <br/> <s-button type=\"danger\">Danger</s-button> <s-button type=\"danger\" disabled=\"{{true}}\">Danger(disabled)</s-button> <br/> <s-button type=\"dashed\">Dashed</s-button> <s-button type=\"dashed\" disabled=\"{{true}}\">Dashed(disabled)</s-button> <br/> <s-button type=\"link\">Link</s-button> <s-button type=\"link\" disabled=\"{{true}}\">Link(disabled)</s-button> <br/> <div style=\"padding:8px 8px 0 8px;background:#bec8c8\"> <s-button ghost=\"{{true}}\">Ghost</s-button> <s-button ghost=\"{{true}}\" disabled=\"{{true}}\">Ghost(disabled)</s-button> </div> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 加载中状态 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Loading<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Loading<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>round<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;loading}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-click</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>enterLoading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          Click me!\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>poweroff<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;iconLoading}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-click</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>enterIconLoading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          Click me!\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">initData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n            iconLoading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">enterLoading</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loading'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>delay<span class=\"token operator\">:</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">enterIconLoading</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">set</span><span class=\"token punctuation\">(</span><span class=\"token string\">'iconLoading'</span><span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"block-%E6%8C%89%E9%92%AE\"><a class=\"header-anchor\" href=\"#block-%E6%8C%89%E9%92%AE\">#</a> block 按钮</h4> <p>block属性将使按钮适合其父宽度。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">block</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">block</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">block</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">block</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">block</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span><span class=\"token punctuation\">></span></span><span class=\"token style\"><span class=\"token language-css\">\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>style</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _san_docit_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _san_docit_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_san_docit_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_mini_css_extract_plugin_dist_loader_js_san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_san_loader_index_js_san_docit_packages_markdown_loader_index_js_block_md_lang_css_codebox_0_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _san_docit_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_mini_css_extract_plugin_dist_loader_js_san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_san_loader_index_js_san_docit_packages_markdown_loader_index_js_block_md_lang_css_codebox_0_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_mini_css_extract_plugin_dist_loader_js_san_docit_node_modules_css_loader_dist_cjs_js_san_docit_node_modules_san_loader_index_js_san_docit_packages_markdown_loader_index_js_block_md_lang_css_codebox_0_san_type_style_index_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),
/* 171 */
/***/ (function(module, exports) {

// Module
var code = " <div> <s-button type=\"primary\" block=\"{{true}}\">Primary</s-button> <s-button block=\"{{true}}\">Default</s-button> <s-button type=\"danger\" block=\"{{true}}\">Danger</s-button> <s-button type=\"dashed\" block=\"{{true}}\">Dashed</s-button> <s-button type=\"link\" block=\"{{true}}\">Link</s-button> </div> ";
// Exports
module.exports = code;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 幽灵按钮 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token style-attr language-css\"><span class=\"token attr-name\"> <span class=\"token attr-name\">style</span></span><span class=\"token punctuation\">=\"</span><span class=\"token attr-value\"><span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgb</span><span class=\"token punctuation\">(</span>190<span class=\"token punctuation\">,</span> 200<span class=\"token punctuation\">,</span> 200<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 20px 20px 12px<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Danger<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dashed<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ghost</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 按钮组合 可以将多个 `Button` 放入 `Button.Group` 的容器中。 <p>通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮组合设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。 </p></text><p></p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>Basic<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>Cancel<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>OK<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>L<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>M<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">disabled</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;true}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>R<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>L<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>M<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>R<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>With Icon<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Go back\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                Go forward <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>cloud<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>cloud-download<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>cloud<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>cloud-download<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-buttongroup</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-buttongroup'</span><span class=\"token operator\">:</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><text lang=\"cn\"> #### 多个按钮组合 按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。 </text> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Primary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>secondary<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-dropdown</span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-menu</span> <span class=\"token attr-name\">prefixCls</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;prefixCls}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">slot</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>overlay<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">selectable</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;false}}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">on-click</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>handleMenuClick<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-menuitem</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-menuitem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-menuitem</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-menuitem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-menuitem</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3rd item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-menuitem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-button</span><span class=\"token punctuation\">></span></span>\n            Actions <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-dropdown</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> san <span class=\"token keyword\">from</span> <span class=\"token string\">'san'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Menu <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/menu'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Dropdown <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/dropdown'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> san<span class=\"token punctuation\">.</span><span class=\"token function\">defineComponent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-menu'</span><span class=\"token operator\">:</span> Menu<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-menuitem'</span><span class=\"token operator\">:</span> Menu<span class=\"token punctuation\">.</span>Item\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    template<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">\n        &lt;div>\n            &lt;s-menu on-click=\"handleMenuClick\" prefixCls=\"san-dropdown\">\n                &lt;s-menuitem key=\"1\">1st item&lt;/s-menuitem>\n                &lt;s-menuitem key=\"2\">2nd item&lt;/s-menuitem>\n                &lt;s-menuitem key=\"3\">3rd item&lt;/s-menuitem>\n            &lt;/s-menu>\n        &lt;/div>\n    </span><span class=\"token template-punctuation string\">`</span></span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-button'</span><span class=\"token operator\">:</span> Button<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-dropdown'</span><span class=\"token operator\">:</span> Dropdown<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-menu'</span><span class=\"token operator\">:</span> Menu<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'s-menuitem'</span><span class=\"token operator\">:</span> Menu<span class=\"token punctuation\">.</span>Item\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"button-%E6%8C%89%E9%92%AE\"><a class=\"header-anchor\" href=\"#button-%E6%8C%89%E9%92%AE\">#</a> Button 按钮</h1> <p>按钮用于开始一个即时操作。</p> <h2 id=\"%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\"><a class=\"header-anchor\" href=\"#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8\">#</a> 何时使用</h2> <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p> <h2 id=\"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\"><a class=\"header-anchor\" href=\"#%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA\">#</a> 代码演示</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
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
/* 216 */,
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Volumes/Source/san/santd/node_modules/san/dist/san.dev.js
var san_dev = __webpack_require__(0);
var san_dev_default = /*#__PURE__*/__webpack_require__.n(san_dev);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/README.md
var README = __webpack_require__(93);
var README_default = /*#__PURE__*/__webpack_require__.n(README);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/basic.md
var basic = __webpack_require__(94);
var basic_default = /*#__PURE__*/__webpack_require__.n(basic);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/size.md
var size = __webpack_require__(96);
var size_default = /*#__PURE__*/__webpack_require__.n(size);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/icon.md
var icon = __webpack_require__(98);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/disable.md
var disable = __webpack_require__(100);
var disable_default = /*#__PURE__*/__webpack_require__.n(disable);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/loading.md
var loading = __webpack_require__(102);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/block.md
var block = __webpack_require__(103);
var block_default = /*#__PURE__*/__webpack_require__.n(block);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/ghost.md
var ghost = __webpack_require__(105);
var ghost_default = /*#__PURE__*/__webpack_require__.n(ghost);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/group.md
var group = __webpack_require__(106);
var group_default = /*#__PURE__*/__webpack_require__.n(group);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/combo.md
var combo = __webpack_require__(107);
var combo_default = /*#__PURE__*/__webpack_require__.n(combo);

// EXTERNAL MODULE: /Volumes/Source/san/santd/src/button/docs/desc.md
var desc = __webpack_require__(108);
var desc_default = /*#__PURE__*/__webpack_require__.n(desc);

// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ref--13-2!/Volumes/Source/san/santd/src/button/docs/style.less
var style = __webpack_require__(23);

// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/docs/style.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style["a" /* default */], options);



/* harmony default export */ var docs_style = (style["a" /* default */].locals || {});
// CONCATENATED MODULE: /Volumes/Source/san/santd/src/button/docs/index.js
/**
* @file docs入口文件
*/













/* harmony default export */ var docs = __webpack_exports__["default"] = (san_dev_default.a.defineComponent({
  components: {
    readme: README_default.a,
    basic: basic_default.a,
    size: size_default.a,
    icon: icon_default.a,
    disable: disable_default.a,
    loading: loading_default.a,
    block: block_default.a,
    ghost: ghost_default.a,
    combo: combo_default.a,
    group: group_default.a,
    desc: desc_default.a
  },
  template: "\n        <div>\n            <desc/>\n            <basic/>\n            <icon/>\n            <disable/>\n            <size/>\n            <readme/>\n        </div>\n    "
}));

/***/ })
]]);