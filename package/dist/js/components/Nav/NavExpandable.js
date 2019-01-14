"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _navCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/components/Nav/nav.css.js"));

var _accessibilityCss = _interopRequireDefault(require("../../@patternfly/patternfly-next/utilities/Accessibility/accessibility.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NavToggle = _interopRequireDefault(require("./NavToggle"));

var _reactIcons = require("@patternfly/react-icons");

var _Nav = require("./Nav");

var _util = require("../../internal/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /** Title shown for the expandable list */
  title: _propTypes.default.string.isRequired,

  /** If defined, screen readers will read this text instead of the list title */
  srText: _propTypes.default.string,

  /** If true will default the list to be expanded */
  isExpanded: _propTypes.default.bool,

  /** Anything that can be rendered inside of the expandable list */
  children: _propTypes.default.node,

  /** Additional classes added to the container */
  className: _propTypes.default.string,

  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** If true makes the expandable list title active */
  isActive: _propTypes.default.bool,

  /** Identifier to use for the section aria label */
  id: _propTypes.default.string,

  /** Additional props are spread to the container <li> */
  '': _propTypes.default.any
};
var defaultProps = {
  srText: '',
  isExpanded: false,
  children: null,
  className: '',
  groupId: null,
  isActive: false,
  id: ''
};

var NavExpandable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavExpandable, _React$Component);

  function NavExpandable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavExpandable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavExpandable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", _this.props.id || (0, _util.getUniqueId)());

    return _this;
  }

  _createClass(NavExpandable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          srText = _this$props.srText,
          defaultExpanded = _this$props.isExpanded,
          children = _this$props.children,
          className = _this$props.className,
          groupId = _this$props.groupId,
          isActive = _this$props.isActive,
          props = _objectWithoutProperties(_this$props, ["id", "title", "srText", "isExpanded", "children", "className", "groupId", "isActive"]);

      return _react.default.createElement(_Nav.NavContext.Consumer, null, function (context) {
        return _react.default.createElement(_NavToggle.default, {
          defaultValue: defaultExpanded,
          groupId: groupId,
          onToggle: context.onToggle
        }, function (_ref) {
          var isExpanded = _ref.value,
              toggle = _ref.toggle;
          return _react.default.createElement("li", _extends({
            className: (0, _reactStyles.css)(_navCss.default.navItem, isExpanded && _navCss.default.modifiers.expanded, isActive && _navCss.default.modifiers.current, className),
            onClick: toggle
          }, props), _react.default.createElement("a", {
            "data-component": "pf-nav-expandable",
            className: (0, _reactStyles.css)(_navCss.default.navLink),
            id: srText ? null : _this2.id,
            href: "#",
            onClick: function onClick(e) {
              return e.preventDefault();
            },
            onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            },
            "aria-expanded": isExpanded
          }, title, _react.default.createElement("span", {
            className: (0, _reactStyles.css)(_navCss.default.navToggle)
          }, _react.default.createElement(_reactIcons.AngleRightIcon, {
            "aria-hidden": "true"
          }))), _react.default.createElement("section", {
            className: (0, _reactStyles.css)(_navCss.default.navSubnav),
            "aria-labelledby": _this2.id,
            hidden: isExpanded ? null : true
          }, srText && _react.default.createElement("h2", {
            className: (0, _reactStyles.css)(_accessibilityCss.default.srOnly),
            id: _this2.id
          }, srText), _react.default.createElement("ul", {
            className: (0, _reactStyles.css)(_navCss.default.navSimpleList)
          }, children)));
        });
      });
    }
  }]);

  return NavExpandable;
}(_react.default.Component);

NavExpandable.propTypes = propTypes;
NavExpandable.defaultProps = defaultProps;
NavExpandable.componentType = 'NavExpandable';
var _default = NavExpandable;
exports.default = _default;