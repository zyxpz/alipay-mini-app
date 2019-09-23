import React, { forwardRef as react_6 } from '../../../../../react/index.js';
import propsAlias from './propsAlias.js';

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
function factory(component) {
  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return React.createElement(component, propsAlias(__assign(__assign({}, props), {
      ref: ref
    })), children);
  };

  return react_6(Component);
}

export default factory;
