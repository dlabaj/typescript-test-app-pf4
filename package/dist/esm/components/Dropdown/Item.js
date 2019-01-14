function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import styles from "../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';
import { componentShape } from '../../internal/componentShape';

var Item = function Item(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(DropdownItem, _extends({}, props, {
    className: css(styles.dropdownMenuItem, className)
  }));
};

Item.propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,

  /** Classess applied to root element of dropdown item */
  className: PropTypes.string,

  /** Indicates which component will be used as dropdown item */
  component: componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,

  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,

  /** Default hyperlink location */
  href: PropTypes.string,

  /** Additional props are passed to the DropdownItem */
  '': PropTypes.any
};
Item.defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#'
};
export default Item;