"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Check/check.css.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /** Additional classes added to the Radio. */
  className: _propTypes.default.string,

  /** Flag to show if the Radio selection is valid or invalid. */
  isValid: _propTypes.default.bool,

  /** Flag to show if the Radio is disabled. */
  isDisabled: _propTypes.default.bool,

  /** Flag to show if the Radio is checked. */
  isChecked: _propTypes.default.bool,

  /** A callback for when the Radio selection changes. */
  onChange: _propTypes.default.func,

  /** Label text of the Radio. */
  label: _propTypes.default.node,

  /** Id of the Radio. */
  id: _propTypes.default.string.isRequired,

  /** Aria-label of the Radio. */
  'aria-label': function ariaLabel(props) {
    if (!props['aria-label']) {
      return new Error('Radio requires an aria-label to be specified');
    }

    return null;
  },

  /** Name for group of Radios */
  name: _propTypes.default.string.isRequired,

  /** Additional props are spread to the container <input> */
  '': _propTypes.default.any
};
var defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: function onChange() {
    return undefined;
  },
  label: undefined,
  'aria-label': null
};

var Radio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.props.onChange(event.currentTarget.checked, event);
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onChange = _this$props.onChange,
          isValid = _this$props.isValid,
          isDisabled = _this$props.isDisabled,
          isChecked = _this$props.isChecked,
          label = _this$props.label,
          checked = _this$props.checked,
          props = _objectWithoutProperties(_this$props, ["className", "onChange", "isValid", "isDisabled", "isChecked", "label", "checked"]);

      return _react.default.createElement("div", {
        className: (0, _reactStyles.css)(_checkCss.default.check, className)
      }, _react.default.createElement("input", _extends({}, props, {
        className: (0, _reactStyles.css)(_checkCss.default.checkInput),
        type: "radio",
        onChange: this.handleChange,
        "aria-invalid": !isValid,
        disabled: isDisabled,
        checked: isChecked || checked
      })), label && _react.default.createElement("label", {
        className: (0, _reactStyles.css)(_checkCss.default.checkLabel, (0, _reactStyles.getModifier)(_checkCss.default, isDisabled && 'disabled')),
        htmlFor: props.id
      }, label));
    }
  }]);

  return Radio;
}(_react.default.Component);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
var _default = Radio;
exports.default = _default;