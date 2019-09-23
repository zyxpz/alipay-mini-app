import _createPageConfig from './createPageConfig.js';
import './index.js';

var currentPlatform = {"NODE_ENV":"development","REMAX_PLATFORM":"alipay"}.REMAX_PLATFORM;

var is = function is(platform) {
  return currentPlatform === platform;
};

var Platform = {
  current: currentPlatform,
  isAlipay: is('alipay'),
  isH5: is('h5'),
  isWechat: is('wechat')
};
var _page = Platform;
Page(_createPageConfig(_page));
