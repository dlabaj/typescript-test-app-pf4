function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ActionGroup } from '../Form';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
var propTypes = {
  /** Additional classes added to the Login Main Body's Form */
  className: PropTypes.string,

  /** Label for the Username Input Field */
  usernameLabel: PropTypes.string,

  /** Value for the Username */
  usernameValue: PropTypes.string,

  /** Function that handles the onChange event for the Username */
  onChangeUsername: PropTypes.func,

  /** Helper Text for the Username Input Field */
  usernameHelperText: PropTypes.string,

  /** Helper Text for the Username Input Field when it is invalid */
  usernameHelperTextInvalid: PropTypes.string,

  /** Flag indicating if the Username is valid */
  isValidUsername: PropTypes.bool,

  /** Label for the Password Input Field */
  passwordLabel: PropTypes.string,

  /** Value for the Password */
  passwordValue: PropTypes.string,

  /** Function that handles the onChange event for the Password */
  onChangePassword: PropTypes.func,

  /** Helper Text for the Password Input Field */
  passwordHelperText: PropTypes.string,

  /** Helper Text for the Password Input Field when it is invalid */
  passwordHelperTextInvalid: PropTypes.string,

  /** Flag indicating if the Password is valid */
  isValidPassword: PropTypes.bool,

  /** Label for the Log in Button Input */
  loginButtonLabel: PropTypes.string,

  /** Flag indicating if the Login Button is disabled */
  isLoginButtonDisabled: PropTypes.bool,

  /** Function that is called when the Login button is clicked */
  onLoginButtonClick: PropTypes.func,

  /** Label for the Remember Me Checkbox that indicates the user should be kept logged in.  If the label is not provided, the checkbox will not show. */
  rememberMeLabel: PropTypes.string,

  /** Flag indicating if the remember me Checkbox is checked. */
  isRememberMeChecked: PropTypes.bool,

  /** Function that handles the onChange event for the Remember Me Checkbox */
  onChangeRememberMe: PropTypes.func,

  /** Aria Label for the Remember me checkbox */
  rememberMeAriaLabel: function rememberMeAriaLabel(props) {
    if (props.rememberMeLabel && !props.rememberMeAriaLabel) {
      return new Error('rememberMeAriaLabel is required with the Remember me checkbox');
    }

    return null;
  },

  /** Additional props are spread to the Form component */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  usernameLabel: 'Username',
  usernameValue: '',
  onChangeUsername: function onChangeUsername() {
    return undefined;
  },
  usernameHelperText: '',
  usernameHelperTextInvalid: '',
  isValidUsername: true,
  passwordLabel: 'Password',
  passwordValue: '',
  onChangePassword: function onChangePassword() {
    return undefined;
  },
  passwordHelperText: '',
  passwordHelperTextInvalid: '',
  isValidPassword: true,
  loginButtonLabel: 'Log In',
  isLoginButtonDisabled: false,
  onLoginButtonClick: function onLoginButtonClick() {
    return undefined;
  },
  rememberMeLabel: '',
  isRememberMeChecked: false,
  onChangeRememberMe: function onChangeRememberMe() {
    return undefined;
  },
  rememberMeAriaLabel: ''
};

var LoginForm = function LoginForm(_ref) {
  var className = _ref.className,
      usernameLabel = _ref.usernameLabel,
      usernameValue = _ref.usernameValue,
      onChangeUsername = _ref.onChangeUsername,
      usernameHelperText = _ref.usernameHelperText,
      usernameHelperTextInvalid = _ref.usernameHelperTextInvalid,
      isValidUsername = _ref.isValidUsername,
      passwordLabel = _ref.passwordLabel,
      passwordValue = _ref.passwordValue,
      onChangePassword = _ref.onChangePassword,
      passwordHelperText = _ref.passwordHelperText,
      passwordHelperTextInvalid = _ref.passwordHelperTextInvalid,
      isValidPassword = _ref.isValidPassword,
      loginButtonLabel = _ref.loginButtonLabel,
      isLoginButtonDisabled = _ref.isLoginButtonDisabled,
      onLoginButtonClick = _ref.onLoginButtonClick,
      rememberMeLabel = _ref.rememberMeLabel,
      isRememberMeChecked = _ref.isRememberMeChecked,
      onChangeRememberMe = _ref.onChangeRememberMe,
      rememberMeAriaLabel = _ref.rememberMeAriaLabel,
      props = _objectWithoutProperties(_ref, ["className", "usernameLabel", "usernameValue", "onChangeUsername", "usernameHelperText", "usernameHelperTextInvalid", "isValidUsername", "passwordLabel", "passwordValue", "onChangePassword", "passwordHelperText", "passwordHelperTextInvalid", "isValidPassword", "loginButtonLabel", "isLoginButtonDisabled", "onLoginButtonClick", "rememberMeLabel", "isRememberMeChecked", "onChangeRememberMe", "rememberMeAriaLabel"]);

  return React.createElement(Form, _extends({
    className: className
  }, props), React.createElement(FormGroup, {
    label: usernameLabel,
    isRequired: true,
    helperText: usernameHelperText,
    helperTextInvalid: usernameHelperTextInvalid,
    isValid: isValidUsername,
    fieldId: "pf-login-username-id"
  }, React.createElement(TextInput, {
    id: "pf-login-username-id",
    isRequired: true,
    isValid: isValidUsername,
    type: "text",
    name: "pf-login-username-id",
    value: usernameValue,
    onChange: onChangeUsername
  })), React.createElement(FormGroup, {
    label: passwordLabel,
    isRequired: true,
    helperText: passwordHelperText,
    helperTextInvalid: passwordHelperTextInvalid,
    isValid: isValidPassword,
    fieldId: "pf-login-password-id"
  }, React.createElement(TextInput, {
    isRequired: true,
    type: "password",
    id: "pf-login-password-id",
    name: "pf-login-password-id",
    isValid: isValidPassword,
    value: passwordValue,
    onChange: onChangePassword
  })), React.createElement(ActionGroup, null, React.createElement(Button, {
    variant: "primary",
    type: "submit",
    onClick: onLoginButtonClick,
    isDisabled: isLoginButtonDisabled
  }, loginButtonLabel), rememberMeLabel.length > 0 && React.createElement(Checkbox, {
    id: "pf-login-remember-me-id",
    label: rememberMeLabel,
    checked: isRememberMeChecked,
    onChange: onChangeRememberMe,
    "aria-label": rememberMeAriaLabel
  })));
};

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
export default LoginForm;