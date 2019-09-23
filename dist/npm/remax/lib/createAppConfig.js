import { createElement as react_24, Fragment as react_19, Component as react_3 } from '../../react/index.js';
import render from './render.js';
import AppContainer from './AppContainer.js';
import isClass from './utils/isClass.js';
import isClassComponent from './utils/isClassComponent.js';

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

var DefaultAppComponent =
/** @class */
function (_super) {
  __extends(DefaultAppComponent, _super);

  function DefaultAppComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DefaultAppComponent.prototype.render = function () {
    return react_24(react_19, null, this.props.children);
  };

  return DefaultAppComponent;
}(react_3);

function createAppConfig(App) {
  var _this = this;

  var createConfig = function createConfig(AppComponent) {
    if (AppComponent === void 0) {
      AppComponent = DefaultAppComponent;
    }

    return {
      _container: new AppContainer(_this),
      _pages: [],
      _instance: null,
      onLaunch: function onLaunch(options) {
        this._instance = this._render();

        if (this._instance && this._instance.onLaunch) {
          this._instance.onLaunch(options);
        }
      },
      onShow: function onShow(options) {
        if (this._instance && this._instance.onShow) {
          this._instance.onShow(options);
        }
      },
      onHide: function onHide() {
        if (this._instance && this._instance.onHide) {
          this._instance.onHide();
        }
      },
      onError: function onError(error) {
        if (this._instance && this._instance.onError) {
          this._instance.onError(error);
        }
      },
      // 支付宝
      onShareAppMessage: function onShareAppMessage() {
        if (this._instance && this._instance.onShareAppMessage) {
          return this._instance.onShareAppMessage();
        }
      },
      // 微信
      onPageNotFound: function onPageNotFound(options) {
        if (this._instance && this._instance.onPageNotFound) {
          return this._instance.onPageNotFound(options);
        }
      },
      _mount: function _mount(pageInstance) {
        this._pages.push(pageInstance);

        this._render();
      },
      _unmount: function _unmount(pageInstance) {
        this._pages.splice(this._pages.indexOf(pageInstance), 1);

        this._render();
      },
      _render: function _render() {
        return render(react_24(AppComponent, null, this._pages.map(function (p) {
          return p.element;
        })), this._container);
      }
    };
  }; // 兼容老的写法


  if (isClass(App) && !isClassComponent(App)) {
    // eslint-disable-next-line no-console
    console.warn('使用非 React 组件定义 App 的方式已经废弃，详细请参考：https://remaxjs.org/guide/framework');
    Object.assign(App.prototype, createConfig());
    return new App();
  } else {
    return createConfig(App);
  }
}

export default createAppConfig;
