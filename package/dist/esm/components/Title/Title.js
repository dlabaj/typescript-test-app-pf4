var _TitleSize;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly-next/components/Title/title.css.js";
import { BaseSizes } from '../../styles/sizes';
export var TitleSize = (_TitleSize = {}, _defineProperty(_TitleSize, BaseSizes.md, BaseSizes.md), _defineProperty(_TitleSize, BaseSizes.lg, BaseSizes.lg), _defineProperty(_TitleSize, BaseSizes.xl, BaseSizes.xl), _defineProperty(_TitleSize, BaseSizes['2xl'], BaseSizes['2xl']), _defineProperty(_TitleSize, BaseSizes['3xl'], BaseSizes['3xl']), _defineProperty(_TitleSize, BaseSizes['4xl'], BaseSizes['4xl']), _TitleSize);
var propTypes = {
  /** the size of the Title  */
  size: PropTypes.oneOf(Object.values(TitleSize)).isRequired,

  /** content rendered inside the Title */
  children: PropTypes.node,

  /** additional classes added to the Title */
  className: PropTypes.string,

  /** the heading level to use */
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /** Additional props are spread to the HeadingLevel component */
  '': PropTypes.any
};
var defaultProps = {
  children: '',
  className: '',
  headingLevel: 'h1'
};

var Title = function Title(_ref) {
  var size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      HeadingLevel = _ref.headingLevel,
      props = _objectWithoutProperties(_ref, ["size", "className", "children", "headingLevel"]);

  return React.createElement(HeadingLevel, _extends({}, props, {
    className: css(styles.title, getModifier(styles, size), className)
  }), children);
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;