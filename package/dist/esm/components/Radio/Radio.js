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

import React from 'react';
import styles from "../../@patternfly/patternfly-next/components/Check/check.css.js";
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';
var propTypes = {
  /** Additional classes added to the Radio. */
  className: PropTypes.string,

  /** Flag to show if the Radio selection is valid or invalid. */
  isValid: PropTypes.bool,

  /** Flag to show if the Radio is disabled. */
  isDisabled: PropTypes.bool,

  /** Flag to show if the Radio is checked. */
  isChecked: PropTypes.bool,

  /** A callback for when the Radio selection changes. */
  onChange: PropTypes.func,

  /** Label text of the Radio. */
  label: PropTypes.node,

  /** Id of the Radio. */
  id: PropTypes.string.isRequired,

  /** Aria-label of the Radio. */
  'aria-label': function ariaLabel(props) {
    if (!props['aria-label']) {
      return new Error('Radio requires an aria-label to be specified');
    }

    return null;
  },

  /** Name for group of Radios */
  name: PropTypes.string.isRequired,

  /** Additional props are spread to the container <input> */
  '': PropTypes.any
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

      return React.createElement("div", {
        className: css(styles.check, className)
      }, React.createElement("input", _extends({}, props, {
        className: css(styles.checkInput),
        type: "radio",
        onChange: this.handleChange,
        "aria-invalid": !isValid,
        disabled: isDisabled,
        checked: isChecked || checked
      })), label && React.createElement("label", {
        className: css(styles.checkLabel, getModifier(styles, isDisabled && 'disabled')),
        htmlFor: props.id
      }, label));
    }
  }]);

  return Radio;
}(React.Component);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
export default Radio;