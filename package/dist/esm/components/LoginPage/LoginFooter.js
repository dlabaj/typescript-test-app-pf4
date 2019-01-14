function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly-next/components/Login/login.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Content rendered inside the footer of the login layout */
  children: PropTypes.node,

  /** Additional classes added to the login header */
  className: PropTypes.string,

  /** Additional props are spread to the container <footer> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: ''
};

var LoginFooter = function LoginFooter(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("footer", _extends({
    className: css(styles.loginFooter, className)
  }, props), children);
};

LoginFooter.propTypes = propTypes;
LoginFooter.defaultProps = defaultProps;
export default LoginFooter;