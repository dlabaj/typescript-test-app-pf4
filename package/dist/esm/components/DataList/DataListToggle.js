function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly-next/components/DataList/styles.css.js";
import { Button } from '../Button';

var DataListToggle = function DataListToggle(_ref) {
  var className = _ref.className,
      isExpanded = _ref.isExpanded,
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["className", "isExpanded", "aria-label", "aria-labelledby", "id"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListToggle, className)
  }, props), React.createElement(Button, {
    id: id,
    variant: "plain",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-expanded": isExpanded
  }, React.createElement(AngleRightIcon, null)));
};

DataListToggle.propTypes = {
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,

  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,

  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,

  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': PropTypes.string.isRequired,

  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListToggle.defaultProps = {
  className: '',
  isExpanded: false
};
export default DataListToggle;