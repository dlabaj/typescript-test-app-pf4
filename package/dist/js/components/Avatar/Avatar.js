"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _avatarCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Avatar/avatar.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultProps = {
  className: '',
  src: ''
};
/**
 * Column properties.
 */

var Avatar = function Avatar(props) {
  return _react.default.createElement("img", _extends({}, props, {
    className: (0, _reactStyles.css)(_avatarCss.default.avatar, props.className)
  }));
};

Avatar.propTypes = {
  className: _propTypes.default.string,
  src: _propTypes.default.string,
  alt: _propTypes.default.string.isRequired
};
Avatar.defaultProps = defaultProps;
var _default = Avatar;
exports.default = _default;