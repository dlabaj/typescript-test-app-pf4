function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import styles from "../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';

var DropdownToggle = function DropdownToggle(_ref) {
  var children = _ref.children,
      IconComponent = _ref.iconComponent,
      props = _objectWithoutProperties(_ref, ["children", "iconComponent"]);

  return React.createElement(Toggle, props, children, IconComponent && React.createElement(IconComponent, {
    className: css(styles.dropdownToggleIcon)
  }));
};

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,

  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node.isRequired,

  /** Classes applied to root element of dropdown toggle */
  className: PropTypes.string,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,

  /** Element which wraps toggle */
  parentRef: PropTypes.any,

  /** Forces focus state */
  isFocused: PropTypes.bool,

  /** Forces hover state */
  isHovered: PropTypes.bool,

  /** Forces active state */
  isActive: PropTypes.bool,

  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,

  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: PropTypes.func,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
DropdownToggle.defaultProps = {
  id: '',
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  iconComponent: CaretDownIcon
};
export default DropdownToggle;