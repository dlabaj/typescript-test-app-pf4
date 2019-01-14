function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css.js";
var propTypes = {
  /** content rendered inside the AboutModalBoxContent */
  children: PropTypes.node.isRequired,

  /** additional classes added to the AboutModalBoxContent */
  className: PropTypes.string,

  /** id to use for About Modal Box aria described by */
  id: PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  className: ''
};

var AboutModalBoxContent = function AboutModalBoxContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["children", "className", "id"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.aboutModalBoxContent, className),
    id: id
  }), children);
};

AboutModalBoxContent.propTypes = propTypes;
AboutModalBoxContent.defaultProps = defaultProps;
export default AboutModalBoxContent;