"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIcons = require("@patternfly/react-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _dropdownCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DropdownToggle = function DropdownToggle(_ref) {
  var children = _ref.children,
      IconComponent = _ref.iconComponent,
      props = _objectWithoutProperties(_ref, ["children", "iconComponent"]);

  return _react.default.createElement(_Toggle.default, props, children, IconComponent && _react.default.createElement(IconComponent, {
    className: (0, _reactStyles.css)(_dropdownCss.default.dropdownToggleIcon)
  }));
};

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: _propTypes.default.string,

  /** Anything which can be rendered as dropdown toggle */
  children: _propTypes.default.node.isRequired,

  /** Classes applied to root element of dropdown toggle */
  className: _propTypes.default.string,

  /** Flag to indicate if menu is opened */
  isOpen: _propTypes.default.bool,

  /** Callback called when toggle is clicked */
  onToggle: _propTypes.default.func,

  /** Element which wraps toggle */
  parentRef: _propTypes.default.any,

  /** Forces focus state */
  isFocused: _propTypes.default.bool,

  /** Forces hover state */
  isHovered: _propTypes.default.bool,

  /** Forces active state */
  isActive: _propTypes.default.bool,

  /** Display the toggle with no border or background */
  isPlain: _propTypes.default.bool,

  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: _propTypes.default.func,

  /** Additional props are spread to the container component */
  '': _propTypes.default.any
};
DropdownToggle.defaultProps = {
  id: '',
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  iconComponent: _reactIcons.CaretDownIcon
};
var _default = DropdownToggle;
exports.default = _default;