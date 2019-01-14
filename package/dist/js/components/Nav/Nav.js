"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _navCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Nav/nav.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  /** Anything that can be rendered inside of the nav */
  children: _propTypes.default.node,

  /** Additional classes added to the container */
  className: _propTypes.default.string,

  /** Callback for updating when item selection changes */
  onSelect: _propTypes.default.func,

  /** Callback for when a list is expanded or collapsed */
  onToggle: _propTypes.default.func,

  /** Accessibility label */
  'aria-label': _propTypes.default.string.isRequired,

  /** Additional props are spread to the container <nav> */
  '': _propTypes.default.any
};
var defaultProps = {
  children: null,
  className: '',
  onSelect: function onSelect() {
    return undefined;
  },
  onToggle: function onToggle() {
    return undefined;
  }
};

var NavContext = _react.default.createContext();

exports.NavContext = NavContext;

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "onSelect",
    // Callback from NavItem
    value: function onSelect(event, groupId, itemId, to, preventDefault, onClick) {
      preventDefault && event.preventDefault();
      this.props.onSelect({
        event: event,
        itemId: itemId,
        groupId: groupId,
        to: to
      });
      onClick && onClick(event, itemId, groupId, to);
    } // Callback from NavExpandable

  }, {
    key: "onToggle",
    value: function onToggle(event, groupId, isExpanded) {
      this.props.onToggle({
        event: event,
        groupId: groupId,
        isExpanded: isExpanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["children", "className"]);

      return _react.default.createElement(NavContext.Provider, {
        value: {
          onSelect: function onSelect(event, groupId, itemId, to, preventDefault, onClick) {
            return _this.onSelect(event, groupId, itemId, to, preventDefault, onClick);
          },
          onToggle: function onToggle(event, groupId, expanded) {
            return _this.onToggle(event, groupId, expanded);
          }
        }
      }, _react.default.createElement("nav", _extends({
        className: (0, _reactStyles.css)(_navCss.default.nav, className)
      }, props), children));
    }
  }]);

  return Nav;
}(_react.default.Component);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
var _default = Nav;
exports.default = _default;