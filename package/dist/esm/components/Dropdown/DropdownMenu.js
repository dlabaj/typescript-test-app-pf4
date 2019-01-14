function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
import { DropdownPosition } from './dropdownConstants';
import FocusTrap from 'focus-trap-react';
var propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,

  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Indicates which component will be used as dropdown menu */
  component: componentShape,

  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  position: DropdownPosition.left,
  component: 'ul'
};

var DropdownMenu = function DropdownMenu(_ref) {
  var className = _ref.className,
      isOpen = _ref.isOpen,
      position = _ref.position,
      children = _ref.children,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "isOpen", "position", "children", "component"]);

  var menu = null;

  if (Component === 'div') {
    menu = React.createElement(Component, _extends({}, props, {
      className: css(styles.dropdownMenu, position === DropdownPosition.right && styles.modifiers.alignRight, className),
      hidden: !isOpen
    }), children);
  } else if (Component === 'ul') {
    menu = React.createElement(FocusTrap, {
      focusTrapOptions: {
        clickOutsideDeactivates: true
      }
    }, React.createElement(Component, _extends({}, props, {
      className: css(styles.dropdownMenu, position === DropdownPosition.right && styles.modifiers.alignRight, className),
      hidden: !isOpen
    }), children));
  }

  return menu;
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
export default DropdownMenu;