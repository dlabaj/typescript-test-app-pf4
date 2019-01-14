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

var _dropdownConstants = require("./dropdownConstants");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: _propTypes.default.node,

  /** Classess applied to root element of dropdown menu */
  className: _propTypes.default.string,

  /** Flag to indicate if menu is opened */
  isOpen: _propTypes.default.bool,

  /** Indicates which component will be used as dropdown menu */
  component: _componentShape.componentShape,

  /** Indicates where menu will be alligned horizontally */
  position: _propTypes.default.oneOf(Object.values(_dropdownConstants.DropdownPosition)),

  /** Additional props are spread to the container component */
  '': _propTypes.default.any
};
var defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: _dropdownConstants.DropdownPosition.left,
  component: 'ul'
};

var DropdownMenu = function DropdownMenu(_ref) {
  var className = _ref.className,
      isOpen = _ref.isOpen,
      position = _ref.position,
      children = _ref.children,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "isOpen", "position", "children", "component"]);

  var menu = null;

  if (Component === 'div') {
    menu = _react.default.createElement(Component, _extends({}, props, {
      className: (0, _reactStyles.css)(_dropdownCss.default.dropdownMenu, position === _dropdownConstants.DropdownPosition.right && _dropdownCss.default.modifiers.alignRight, className),
      hidden: !isOpen
    }), children);
  } else if (Component === 'ul') {
    menu = _react.default.createElement(_focusTrapReact.default, {
      focusTrapOptions: {
        clickOutsideDeactivates: true
      }
    }, _react.default.createElement(Component, _extends({}, props, {
      className: (0, _reactStyles.css)(_dropdownCss.default.dropdownMenu, position === _dropdownConstants.DropdownPosition.right && _dropdownCss.default.modifiers.alignRight, className),
      hidden: !isOpen
    }), children));
  }

  return menu;
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
var _default = DropdownMenu;
exports.default = _default;