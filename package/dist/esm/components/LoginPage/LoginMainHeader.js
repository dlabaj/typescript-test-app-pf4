function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly-next/components/Login/login.css.js";
var propTypes = {
  /** Content rendered inside the Login Main Header */
  children: PropTypes.node,

  /** Additional classes added to the Login Main Header */
  className: PropTypes.string,

  /** Dropdown component for the Login Main Header */
  dropdown: PropTypes.node,

  /** Title for the Login Main Header */
  title: PropTypes.string,

  /** Subtitle that contains the Text, URL, and URL Text for the Login Main Header */
  subtitle: PropTypes.node,

  /** Additional props are spread to the container <header> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  dropdown: null,
  title: '',
  subtitle: ''
};

var LoginMainHeader = function LoginMainHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dropdown = _ref.dropdown,
      title = _ref.title,
      subtitle = _ref.subtitle,
      props = _objectWithoutProperties(_ref, ["children", "className", "dropdown", "title", "subtitle"]);

  return React.createElement("header", _extends({
    className: css(styles.loginMainHeader, className)
  }, props), title && React.createElement(Title, {
    size: "3xl"
  }, title), dropdown, subtitle && React.createElement("p", null, subtitle), children);
};

LoginMainHeader.propTypes = propTypes;
LoginMainHeader.defaultProps = defaultProps;
export default LoginMainHeader;