function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly-next/layouts/Toolbar/toolbar.css.js";
import PropTypes from 'prop-types';
var propTypes = {
  /** Anything that can be rendered as toolbar section */
  children: PropTypes.node,

  /** Classes applied to toolbar section */
  className: PropTypes.string,

  /** Aria label applied to toolbar section */
  'aria-label': function ariaLabel(props) {
    if (!props['aria-label']) {
      return new Error('ToolbarSection requires aria-label to be specified');
    }

    return null;
  },

  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: null,
  'aria-label': null
};

var ToolbarSection = function ToolbarSection(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("section", _extends({}, props, {
    className: css(styles.toolbarSection, className)
  }), children);
};

ToolbarSection.propTypes = propTypes;
ToolbarSection.defaultProps = defaultProps;
export default ToolbarSection;