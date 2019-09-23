import { slicedToArray as _slicedToArray } from './_virtual/_rollupPluginBabelHelpers.js';
import { createContext as react_5, useState as react_18, createElement as react_24 } from './npm/react/index.js';
import createAppConfig from './npm/remax/lib/createAppConfig.js';
import './npm/remax/lib/index.js';

var MiniAppContext = react_5({});

var _App = function _App(_ref) {
  var children = _ref.children;

  var _React$useState = react_18([{
    id: 1,
    text: 'Learning Javascript',
    completed: true
  }, {
    id: 2,
    text: 'Learning ES2016',
    completed: true
  }, {
    id: 3,
    text: 'Learning Remax',
    completed: false
  }]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      items = _React$useState2[0],
      setItems = _React$useState2[1];

  return react_24(MiniAppContext.Provider, {
    value: {
      items: items,
      setItems: setItems
    }
  }, children);
};

var _app = _App;
var app = App(createAppConfig(_app));

export default app;
export { MiniAppContext };
