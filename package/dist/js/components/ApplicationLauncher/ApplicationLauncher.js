"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../Dropdown");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultAriaLabel = 'Application Launcher';
var propTypes = {
  /** Additional element css classes */
  className: _propTypes.default.string,

  /** Display menu above or below dropdown toggle */
  direction: _propTypes.default.oneOf(Object.values(_Dropdown.DropdownDirection)),

  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: _propTypes.default.array,

  /** open bool */
  isOpen: _propTypes.default.bool,

  /** Function callback called when user selects item */
  onSelect: _propTypes.default.func,

  /** Callback called when application launcher toggle is clicked */
  onToggle: _propTypes.default.func,

  /** Indicates where menu will be alligned horizontally */
  position: _propTypes.default.oneOf(Object.values(_Dropdown.DropdownPosition)),

  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': _propTypes.default.string
};
exports.propTypes = propTypes;
var defaultProps = {
  className: '',
  direction: _Dropdown.DropdownDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: _Dropdown.DropdownPosition.left,
  'aria-label': defaultAriaLabel
};
exports.defaultProps = defaultProps;

var ApplicationLauncher = function ApplicationLauncher(_ref) {
  var ariaLabel = _ref['aria-label'],
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ["aria-label", "onToggle"]);

  return _react.default.createElement(_Dropdown.Dropdown, _extends({}, props, {
    toggle: _react.default.createElement(_Dropdown.DropdownToggle, {
      "aria-label": ariaLabel,
      iconComponent: null,
      onToggle: onToggle
    }, _react.default.createElement(_reactIcons.ThIcon, null)),
    isPlain: true
  }));
};

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;
var _default = ApplicationLauncher;
exports.default = _default;