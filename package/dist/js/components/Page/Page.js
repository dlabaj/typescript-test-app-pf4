"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PageLayouts = void 0;

var _react = _interopRequireDefault(require("react"));

var _pageCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Page/page.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PageLayouts = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};
exports.PageLayouts = PageLayouts;
var propTypes = {
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children: _propTypes.default.node,

  /** Additional classes added to the page layout */
  className: _propTypes.default.string,

  /** Header component (e.g. <PageHeader />) */
  header: _propTypes.default.node,

  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar: _propTypes.default.node,

  /** Additional props are spread to the container <div> */
  '': _propTypes.default.any
};
var defaultProps = {
  children: null,
  className: '',
  header: null,
  sidebar: null
};

var Page = function Page(props) {
  var className = props.className,
      children = props.children,
      header = props.header,
      sidebar = props.sidebar,
      rest = _objectWithoutProperties(props, ["className", "children", "header", "sidebar"]);

  return _react.default.createElement("div", _extends({}, rest, {
    className: (0, _reactStyles.css)(_pageCss.default.page, className)
  }), header, sidebar, _react.default.createElement("main", {
    role: "main",
    className: (0, _reactStyles.css)(_pageCss.default.pageMain)
  }, children));
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
var _default = Page;
exports.default = _default;