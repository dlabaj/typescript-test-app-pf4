function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownDirection, DropdownToggle, DropdownPosition } from '../Dropdown';
import { ThIcon } from '@patternfly/react-icons';
var defaultAriaLabel = 'Application Launcher';
export var propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(DropdownDirection)),

  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,

  /** open bool */
  isOpen: PropTypes.bool,

  /** Function callback called when user selects item */
  onSelect: PropTypes.func,

  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,

  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),

  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': PropTypes.string
};
export var defaultProps = {
  className: '',
  direction: DropdownDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: DropdownPosition.left,
  'aria-label': defaultAriaLabel
};

var ApplicationLauncher = function ApplicationLauncher(_ref) {
  var ariaLabel = _ref['aria-label'],
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ["aria-label", "onToggle"]);

  return React.createElement(Dropdown, _extends({}, props, {
    toggle: React.createElement(DropdownToggle, {
      "aria-label": ariaLabel,
      iconComponent: null,
      onToggle: onToggle
    }, React.createElement(ThIcon, null)),
    isPlain: true
  }));
};

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;
export default ApplicationLauncher;