function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly-next/components/DataList/styles.css.js";
import { EllipsisVIcon } from '@patternfly/react-icons';
import { Button } from '../Button';

var DataListAction = function DataListAction(_ref) {
  var className = _ref.className,
      id = _ref.id,
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      props = _objectWithoutProperties(_ref, ["className", "id", "aria-label", "aria-labelledby"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListAction, className)
  }, props), React.createElement(Button, {
    variant: "plain",
    id: id,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel
  }, React.createElement(EllipsisVIcon, null)));
};

DataListAction.propTypes = {
  /** Content rendered inside the DataList list */
  children: PropTypes.node,

  /** Additional classes added to the DataList list */
  className: PropTypes.string,

  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,

  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,

  /** Adds accessible text to the DataList item */
  'aria-label': PropTypes.string.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListAction.defaultProps = {
  children: null,
  className: ''
};
export default DataListAction;