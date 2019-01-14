"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/DataList/styles.css.js"));

var _boxShadowCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/utilities/BoxShadow/box-shadow.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataList = function DataList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, ["children", "className", "aria-label"]);

  return _react.default.createElement("ul", _extends({
    className: (0, _reactStyles.css)(_stylesCss.default.dataList, _boxShadowCss.default.boxShadowMd, className),
    role: "list",
    "aria-label": ariaLabel
  }, props), children);
};

DataList.propTypes = {
  /** Content rendered inside the DataList list */
  children: _propTypes.default.node,

  /** Additional classes added to the DataList list */
  className: _propTypes.default.string,

  /** Adds accessible text to the DataList list */
  'aria-label': _propTypes.default.string.isRequired,

  /** Additional props are spread to the container <ul> */
  '': _propTypes.default.any
};
DataList.defaultProps = {
  children: null,
  className: ''
};
var _default = DataList;
exports.default = _default;