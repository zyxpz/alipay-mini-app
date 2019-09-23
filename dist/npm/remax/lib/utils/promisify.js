var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    return new Promise(function (resolve, reject) {
      api(__assign(__assign({}, arg), {
        success: function success(res) {
          if (arg && typeof arg.success === 'function') {
            arg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (arg && typeof arg.fail === 'function') {
            arg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

export default promisify;
