export function capitalize(input) {
  return input[0].toUpperCase() + input.substring(1);
}
export function getUniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pf';
  var uid = new Date().getTime() + Math.random().toString(36).slice(2);
  return "".concat(prefix, "-").concat(uid);
}
export function debounce(func, wait) {
  var _this = this;

  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(_this, args);
    }, wait);
  };
}