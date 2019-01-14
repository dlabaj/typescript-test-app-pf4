function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly-next/components/Page/page.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
export var PageLayouts = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};
var propTypes = {
  /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
  children: PropTypes.node,

  /** Additional classes added to the page layout */
  className: PropTypes.string,

  /** Header component (e.g. <PageHeader />) */
  header: PropTypes.node,

  /** Sidebar component for a side nav (e.g. <PageSidebar />) */
  sidebar: PropTypes.node,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
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

  return React.createElement("div", _extends({}, rest, {
    className: css(styles.page, className)
  }), header, sidebar, React.createElement("main", {
    role: "main",
    className: css(styles.pageMain)
  }, children));
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;