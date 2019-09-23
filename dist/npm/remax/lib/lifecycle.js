import capitalize from './utils/capitalize.js';

var Lifecycle;

(function (Lifecycle) {
  Lifecycle["show"] = "show";
  Lifecycle["hide"] = "hide";
  Lifecycle["ready"] = "ready";
  Lifecycle["pullDownRefresh"] = "pullDownRefresh";
  Lifecycle["reachBottom"] = "reachBottom";
  Lifecycle["pageScroll"] = "pageScroll";
  Lifecycle["shareAppMessage"] = "shareAppMessage";
  Lifecycle["titleClick"] = "titleClick";
  Lifecycle["optionMenuClick"] = "optionMenuClick";
  Lifecycle["popMenuClick"] = "popMenuClick";
  Lifecycle["pullIntercept"] = "pullIntercept";
  Lifecycle["back"] = "back";
  Lifecycle["keyboardHeight"] = "keyboardHeight";
  Lifecycle["tabItemTap"] = "tabItemTap";
  Lifecycle["beforeTabItemTap"] = "beforeTabItemTap";
  Lifecycle["resize"] = "resize";
})(Lifecycle || (Lifecycle = {}));
function callbackName(name) {
  if (name.startsWith('before')) {
    return capitalize(name);
  }

  return 'on' + capitalize(name);
}

export { Lifecycle, callbackName };
