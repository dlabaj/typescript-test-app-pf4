function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly-next/components/DataList/styles.css.js";

var DataListContent = function DataListContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isHidden = _ref.isHidden,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, ["className", "children", "isHidden", "aria-label"]);

  return React.createElement("section", _extends({
    className: css(styles.dataListExpandableContent, className),
    hidden: isHidden,
    "aria-label": ariaLabel
  }, props), children);
};

DataListContent.propTypes = {
  /** Content rendered inside the DataList item */
  children: PropTypes.node,

  /** Additional classes added to the DataList cell */
  className: PropTypes.string,

  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: PropTypes.bool,

  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,

  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};
DataListContent.defaultProps = {
  className: '',
  isHidden: false
};
export default DataListContent;