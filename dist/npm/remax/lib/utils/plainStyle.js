var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var transformReactStyleKey = function transformReactStyleKey(key) {
  return key.replace(/\.?([A-Z]+)/g, function (_x, y) {
    return '-' + y.toLowerCase();
  }).replace(/^-/, '');
};

var plainStyle = function plainStyle(style) {
  if (!style) {
    return '';
  }

  return Object.keys(style).reduce(function (acc, key) {
    var value = style[key];
    return __spreadArrays(acc, [transformReactStyleKey(key) + ":" + value + ";"]);
  }, []).join('');
};

export default plainStyle;
