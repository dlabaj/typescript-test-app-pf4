import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import styles from "../../@patternfly/patternfly-next/components/Avatar/avatar.css.js";
import { css } from '@patternfly/react-styles';
import React from 'react';
var defaultProps = {
  className: '',
  src: ''
};
/**
 * Column properties.
 */

var Avatar = function Avatar(props) {
  return React.createElement("img", _extends({}, props, {
    className: css(styles.avatar, props.className)
  }));
};

Avatar.propTypes = {
  className: _pt.string,
  src: _pt.string,
  alt: _pt.string.isRequired
};
Avatar.defaultProps = defaultProps;
export default Avatar;