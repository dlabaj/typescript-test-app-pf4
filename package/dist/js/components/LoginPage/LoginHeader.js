"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _loginCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Login/login.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the header of the login layout */
  children: _propTypes.default.node,

  /** Additional classes added to the login header */
  className: _propTypes.default.string,

  /** Header Brand component (e.g. <LoginHeader />) */
  headerBrand: _propTypes.default.node,

  /** Additional props are spread to the container <header> */
  '': _propTypes.default.any
};
var defaultProps = {
  children: null,
  className: '',
  headerBrand: null
};

var LoginHeader = function LoginHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      headerBrand = _ref.headerBrand,
      props = _objectWithoutProperties(_ref, ["className", "children", "headerBrand"]);

  return _react.default.createElement("header", _extends({
    className: (0, _reactStyles.css)(_loginCss.default.loginHeader, className)
  }, props), headerBrand, children);
};

LoginHeader.propTypes = propTypes;
LoginHeader.defaultProps = defaultProps;
var _default = LoginHeader;
exports.default = _default;