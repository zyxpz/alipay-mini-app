import { createRef as react_2, createElement as react_24 } from '../../react/index.js';
import { callbackName, Lifecycle } from './lifecycle.js';
import createPageWrapper from './createPageWrapper.js';
import Container from './Container.js';
import { createPortal } from './ReactPortal.js';

var idCounter = 0;
function createPageConfig(Page) {
  var app = getApp();
  var id = idCounter;
  idCounter += 1;
  return {
    pageId: 'page_' + id,
    data: {
      action: {}
    },
    wrapperRef: react_2(),
    lifecycleCallback: {},
    onLoad: function onLoad(query) {
      var PageWrapper = createPageWrapper(Page, query);
      this.container = new Container(this);
      this.element = createPortal(react_24(PageWrapper, {
        page: this,
        ref: this.wrapperRef
      }), this.container, this.pageId);

      app._mount(this);
    },
    onUnload: function onUnload() {
      this.unloaded = true;
      this.container.clearUpdate();

      app._unmount(this);
    },

    /**
     * Lifecycle start
     */
    registerLifecycle: function registerLifecycle(lifecycle, callback) {
      var _this = this;

      this.lifecycleCallback[lifecycle] = this.lifecycleCallback[lifecycle] || [];
      this.lifecycleCallback[lifecycle].push(callback);
      return function () {
        _this.lifecycleCallback[lifecycle].splice(_this.lifecycleCallback[lifecycle].indexOf(callback), 1);
      };
    },
    callLifecycle: function callLifecycle(lifecycle) {
      var _a;

      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      var callbacks = this.lifecycleCallback[lifecycle] || [];
      var result;
      callbacks.forEach(function (callback) {
        result = callback.apply(void 0, args);
      });

      if (result) {
        return result;
      }

      var callback = callbackName(lifecycle);

      if (this.wrapperRef.current && this.wrapperRef.current[callback]) {
        return (_a = this.wrapperRef.current)[callback].apply(_a, args);
      }
    },
    onShow: function onShow() {
      return this.callLifecycle(Lifecycle.show);
    },
    onHide: function onHide() {
      return this.callLifecycle(Lifecycle.hide);
    },
    onReady: function onReady() {
      return this.callLifecycle(Lifecycle.ready);
    },
    onPullDownRefresh: function onPullDownRefresh(e) {
      return this.callLifecycle(Lifecycle.pullDownRefresh, e);
    },
    onReachBottom: function onReachBottom() {
      return this.callLifecycle(Lifecycle.reachBottom);
    },
    onPageScroll: function onPageScroll() {
      return this.callLifecycle(Lifecycle.pageScroll);
    },
    onShareAppMessage: function onShareAppMessage(options) {
      return this.callLifecycle(Lifecycle.shareAppMessage, options);
    },
    onTitleClick: function onTitleClick() {
      return this.callLifecycle(Lifecycle.titleClick);
    },
    onOptionMenuClick: function onOptionMenuClick() {
      return this.callLifecycle(Lifecycle.optionMenuClick);
    },
    onPopMenuClick: function onPopMenuClick(e) {
      return this.callLifecycle(Lifecycle.popMenuClick, e);
    },
    onPullIntercept: function onPullIntercept() {
      return this.callLifecycle(Lifecycle.pullIntercept);
    },
    events: {
      // 页面返回时触发
      onBack: function onBack() {
        return this.callLifecycle(Lifecycle.back);
      },
      // 键盘高度变化时触发
      onKeyboardHeight: function onKeyboardHeight(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },
      onTabItemTap: function onTabItemTap(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      },
      // 点击但切换tabItem前触发
      beforeTabItemTap: function beforeTabItemTap() {
        return this.callLifecycle(Lifecycle.beforeTabItemTap);
      },
      onResize: function onResize(e) {
        return this.callLifecycle(Lifecycle.keyboardHeight, e);
      }
    }
  };
}

export default createPageConfig;
