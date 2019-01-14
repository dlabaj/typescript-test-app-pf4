"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _ModalBoxBody = _interopRequireDefault(require("./ModalBoxBody"));

var _ModalBoxHeader = _interopRequireDefault(require("./ModalBoxHeader"));

var _ModalBoxCloseButton = _interopRequireDefault(require("./ModalBoxCloseButton"));

var _ModalBox = _interopRequireDefault(require("./ModalBox"));

var _ModalBoxFooter = _interopRequireDefault(require("./ModalBoxFooter"));

var _Backdrop = _interopRequireDefault(require("../Backdrop/Backdrop"));

var _Bullseye = _interopRequireDefault(require("../../layouts/Bullseye/Bullseye"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the Modal. */
  children: _propTypes.default.node.isRequired,

  /** additional classes added to the button */
  className: _propTypes.default.string,

  /** Flag to show the modal */
  isOpen: _propTypes.default.bool,

  /** Content of the Modal Header */
  title: _propTypes.default.string.isRequired,

  /** Flag to show the title */
  hideTitle: _propTypes.default.bool,

  /** Content of the Modal Footer */
  actions: _propTypes.default.any,

  /** A callback for when the close button is clicked */
  onClose: _propTypes.default.func,

  /** Creates a large version of the Modal */
  isLarge: _propTypes.default.bool,

  /** id to use for Modal Box description */
  id: _propTypes.default.string.isRequired,

  /** Additional props are spread to the ModalBoxBody component */
  '': _propTypes.default.any
};
var defaultProps = {
  className: '',
  isOpen: false,
  hideTitle: false,
  actions: [],
  onClose: function onClose() {
    return undefined;
  },
  isLarge: false
};

var ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      title = _ref.title,
      hideTitle = _ref.hideTitle,
      actions = _ref.actions,
      onClose = _ref.onClose,
      isLarge = _ref.isLarge,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["children", "className", "isOpen", "title", "hideTitle", "actions", "onClose", "isLarge", "id"]);

  var modalBoxHeader = title && _react.default.createElement(_ModalBoxHeader.default, null, " ", title, " ");

  var modalBoxFooter = actions && _react.default.createElement(_ModalBoxFooter.default, null, " ", actions, " ");

  if (!isOpen) {
    return null;
  }

  return _react.default.createElement(_Backdrop.default, null, _react.default.createElement(_Bullseye.default, null, _react.default.createElement(_focusTrapReact.default, {
    focusTrapOptions: {
      clickOutsideDeactivates: true
    }
  }, _react.default.createElement(_ModalBox.default, {
    className: className,
    isLarge: isLarge,
    title: title,
    id: id
  }, _react.default.createElement(_ModalBoxCloseButton.default, {
    onClose: onClose
  }), modalBoxHeader, _react.default.createElement(_ModalBoxBody.default, _extends({}, props, {
    id: id
  }), children), modalBoxFooter))));
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;
var _default = ModalContent;
exports.default = _default;