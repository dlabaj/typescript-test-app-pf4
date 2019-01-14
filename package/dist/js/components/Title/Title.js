"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TitleSize = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _titleCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Title/title.css.js"));

var _sizes = require("../../styles/sizes");

var _TitleSize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TitleSize = (_TitleSize = {}, _defineProperty(_TitleSize, _sizes.BaseSizes.md, _sizes.BaseSizes.md), _defineProperty(_TitleSize, _sizes.BaseSizes.lg, _sizes.BaseSizes.lg), _defineProperty(_TitleSize, _sizes.BaseSizes.xl, _sizes.BaseSizes.xl), _defineProperty(_TitleSize, _sizes.BaseSizes['2xl'], _sizes.BaseSizes['2xl']), _defineProperty(_TitleSize, _sizes.BaseSizes['3xl'], _sizes.BaseSizes['3xl']), _defineProperty(_TitleSize, _sizes.BaseSizes['4xl'], _sizes.BaseSizes['4xl']), _TitleSize);
exports.TitleSize = TitleSize;
var propTypes = {
  /** the size of the Title  */
  size: _propTypes.default.oneOf(Object.values(TitleSize)).isRequired,

  /** content rendered inside the Title */
  children: _propTypes.default.node,

  /** additional classes added to the Title */
  className: _propTypes.default.string,

  /** the heading level to use */
  headingLevel: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /** Additional props are spread to the HeadingLevel component */
  '': _propTypes.default.any
};
var defaultProps = {
  children: '',
  className: '',
  headingLevel: 'h1'
};

var Title = function Title(_ref) {
  var size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      HeadingLevel = _ref.headingLevel,
      props = _objectWithoutProperties(_ref, ["size", "className", "children", "headingLevel"]);

  return _react.default.createElement(HeadingLevel, _extends({}, props, {
    className: (0, _reactStyles.css)(_titleCss.default.title, (0, _reactStyles.getModifier)(_titleCss.default, size), className)
  }), children);
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
var _default = Title;
exports.default = _default;