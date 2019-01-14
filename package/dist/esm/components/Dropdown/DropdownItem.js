function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly-next/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
var propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,

  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,

  /** Indicates which component will be used as dropdown item */
  component: componentShape,

  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,

  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,

  /** Default hyperlink location */
  href: PropTypes.string,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#'
};

var DropdownItem = function DropdownItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isHovered = _ref.isHovered,
      Component = _ref.component,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["className", "children", "isHovered", "component", "isDisabled"]);

  var additionalProps = props;

  if (Component === 'a') {
    additionalProps['aria-disabled'] = isDisabled;
    additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
  } else if (Component === 'button') {
    additionalProps.disabled = isDisabled;
  }

  return React.createElement("li", null, React.isValidElement(children) ? React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      className: "".concat(css(isDisabled && styles.modifiers.disabled, isHovered && styles.modifiers.hover, className), " ").concat(child.props.className)
    });
  }) : React.createElement(Component, _extends({}, additionalProps, {
    className: css(isDisabled && styles.modifiers.disabled, isHovered && styles.modifiers.hover, className)
  }), children));
};

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
export default DropdownItem;