function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly-next/components/Alert/alert.css.js";
var propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
};
var defaultProps = {
  title: null,
  children: '',
  className: ''
};

var AlertBody = function AlertBody(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "className", "children"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.alertBody, className)
  }), title && React.createElement("h4", {
    className: css(styles.alertTitle)
  }, title), children);
};

AlertBody.propTypes = propTypes;
AlertBody.defaultProps = defaultProps;
export default AlertBody;