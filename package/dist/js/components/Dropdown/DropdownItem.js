"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dropdownCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentShape = require("../../internal/componentShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: _propTypes.default.node,

  /** Classes applied to root element of dropdown item */
  className: _propTypes.default.string,

  /** Indicates which component will be used as dropdown item */
  component: _componentShape.componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: _propTypes.default.bool,

  /** Forces display of the hover state of the element */
  isHovered: _propTypes.default.bool,

  /** Default hyperlink location */
  href: _propTypes.default.string,

  /** Additional props are spread to the container component */
  '': _propTypes.default.any
};
var defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#'
};

var DropdownItem = function DropdownItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isHovered = _ref.isHovered,
      Component = _ref.component,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["className", "children", "isHovered", "component", "isDisabled"]);

  var additionalProps = props;

  if (Component === 'a') {
    additionalProps['aria-disabled'] = isDisabled;
    additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
  } else if (Component === 'button') {
    additionalProps.disabled = isDisabled;
  }

  return _react.default.createElement("li", null, _react.default.isValidElement(children) ? _react.default.Children.map(children, function (child) {
    return _react.default.cloneElement(child, {
      className: "".concat((0, _reactStyles.css)(isDisabled && _dropdownCss.default.modifiers.disabled, isHovered && _dropdownCss.default.modifiers.hover, className), " ").concat(child.props.className)
    });
  }) : _react.default.createElement(Component, _extends({}, additionalProps, {
    className: (0, _reactStyles.css)(isDisabled && _dropdownCss.default.modifiers.disabled, isHovered && _dropdownCss.default.modifiers.hover, className)
  }), children));
};

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;