"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/DataList/styles.css.js"));

var _reactIcons = require("@patternfly/react-icons");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataListAction = function DataListAction(_ref) {
  var className = _ref.className,
      id = _ref.id,
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      props = _objectWithoutProperties(_ref, ["className", "id", "aria-label", "aria-labelledby"]);

  return _react.default.createElement("div", _extends({
    className: (0, _reactStyles.css)(_stylesCss.default.dataListAction, className)
  }, props), _react.default.createElement(_Button.Button, {
    variant: "plain",
    id: id,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel
  }, _react.default.createElement(_reactIcons.EllipsisVIcon, null)));
};

DataListAction.propTypes = {
  /** Content rendered inside the DataList list */
  children: _propTypes.default.node,

  /** Additional classes added to the DataList list */
  className: _propTypes.default.string,

  /** Identify the DataList toggle number */
  id: _propTypes.default.string.isRequired,

  /** Adds accessible text to the DataList item */
  'aria-labelledby': _propTypes.default.string.isRequired,

  /** Adds accessible text to the DataList item */
  'aria-label': _propTypes.default.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes.default.any
};
DataListAction.defaultProps = {
  children: null,
  className: ''
};
var _default = DataListAction;
exports.default = _default;