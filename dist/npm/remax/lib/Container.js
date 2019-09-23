import { generate } from './instanceId.js';
import VNode from './VNode.js';

function stringPath(path) {
  return path.join('.');
}

var Container =
/** @class */
function () {
  function Container(context) {
    this.updateQueue = [];
    this.context = context;
    this.root = new VNode({
      id: generate(),
      type: 'root',
      container: this
    });
    this.root.mounted = true;
  }

  Container.prototype.requestUpdate = function (path, start, deleteCount, immediately) {
    var _this = this;

    var items = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      items[_i - 4] = arguments[_i];
    }

    var update = {
      path: path,
      start: start,
      deleteCount: deleteCount,
      items: items
    };

    if (immediately) {
      this.updateQueue.push(update);
      this.applyUpdate();
    } else {
      if (this.updateQueue.length === 0) {
        this.updateTimer = setTimeout(function () {
          return _this.applyUpdate();
        });
      }

      this.updateQueue.push(update);
    }
  };

  Container.prototype.applyUpdate = function () {
    var startTime = new Date().getTime();
    var action = {
      type: 'splice',
      payload: this.updateQueue.map(function (update) {
        return {
          path: stringPath(update.path),
          start: update.start,
          deleteCount: update.deleteCount,
          item: update.items[0]
        };
      })
    };
    var tree = action;

    this.context.setData({
      action: tree
    }, function () {
    });
    this.updateQueue = [];
  };

  Container.prototype.clearUpdate = function () {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }
  };

  Container.prototype.createCallback = function (name, fn) {
    this.context[name] = fn;
  };

  Container.prototype.appendChild = function (child) {
    this.root.appendChild(child, true);
  };

  Container.prototype.removeChild = function (child) {
    this.root.removeChild(child, true);
  };

  Container.prototype.insertBefore = function (child, beforeChild) {
    this.root.insertBefore(child, beforeChild, true);
  };

  return Container;
}();

export default Container;
