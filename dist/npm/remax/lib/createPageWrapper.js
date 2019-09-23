import { createElement as react_24, Component as react_3 } from '../../react/index.js';
import isClassComponent from './utils/isClassComponent.js';
import { Lifecycle, callbackName } from './lifecycle.js';

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

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
function createPageWrapper(Page, query) {
  return (
    /** @class */
    function (_super) {
      __extends(PageWrapper, _super);

      function PageWrapper(props) {
        var _this = _super.call(this, props) || this;

        _this.instance = null;
        _this.callbacks = new Map();
        Object.keys(Lifecycle).forEach(function (phase) {
          var callback = callbackName(phase);

          _this[callback] = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return _this.callLifecycle.apply(_this, __spreadArrays([phase], args));
          };
        });
        return _this;
      }

      PageWrapper.prototype.callLifecycle = function (phase) {
        var _a;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }

        var callback = callbackName(phase);

        if (this.instance && typeof this.instance[callback] === 'function') {
          return (_a = this.instance)[callback].apply(_a, args);
        }
      };

      PageWrapper.prototype.render = function () {
        var _this = this;

        var props = {
          location: {
            query: query || {}
          }
        };

        if (isClassComponent(Page)) {
          props.ref = function (node) {
            return _this.instance = node;
          };
        }

        return react_24(Page, props);
      };

      return PageWrapper;
    }(react_3)
  );
}

export default createPageWrapper;
