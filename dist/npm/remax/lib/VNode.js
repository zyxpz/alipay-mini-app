import { TYPE_TEXT } from './constants.js';

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

var VNode =
/** @class */
function () {
  function VNode(_a) {
    var id = _a.id,
        type = _a.type,
        props = _a.props,
        container = _a.container;
    this.mounted = false;
    this.parent = null;
    this.id = id;
    this.container = container;
    this.type = type;
    this.props = props;
    this.children = [];
  }

  VNode.prototype.appendChild = function (node, immediately) {
    node.parent = this;
    this.children.push(node);

    if (this.isMounted()) {
      this.container.requestUpdate(__spreadArrays(this.path(), ['children']), this.children.length - 1, 0, immediately, node.toJSON());
    }
  };

  VNode.prototype.removeChild = function (node, immediately) {
    var start = this.children.indexOf(node);
    this.children.splice(start, 1);

    if (this.isMounted()) {
      this.container.requestUpdate(__spreadArrays(this.path(), ['children']), start, 1, immediately);
    }
  };

  VNode.prototype.insertBefore = function (newNode, referenceNode, immediately) {
    newNode.parent = this;
    var start = this.children.indexOf(referenceNode);
    this.children.splice(start, 0, newNode);

    if (this.isMounted()) {
      this.container.requestUpdate(__spreadArrays(this.path(), ['children']), start, 0, immediately, newNode.toJSON());
    }
  };

  VNode.prototype.update = function () {
    // root 不会更新，所以肯定有 parent
    this.container.requestUpdate(__spreadArrays(this.parent.path(), ['children']), this.parent.children.indexOf(this), 1, false, this.toJSON());
  };

  VNode.prototype.path = function () {
    if (!this.parent) {
      return ['root'];
    }

    return __spreadArrays(this.parent.path(), ['children', this.parent.children.indexOf(this)]);
  };

  VNode.prototype.isMounted = function () {
    return this.parent ? this.parent.isMounted() : this.mounted;
  };

  VNode.prototype.toJSON = function () {
    if (this.type === TYPE_TEXT) {
      return {
        type: this.type,
        text: this.text
      };
    }

    return {
      id: this.id,
      type: this.type,
      props: this.props,
      children: this.children && this.children.map(function (c) {
        return c.toJSON();
      }),
      text: this.text
    };
  };

  return VNode;
}();

export default VNode;
