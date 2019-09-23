import { unstable_scheduleCallback as scheduler_9, unstable_cancelCallback as scheduler_10, unstable_shouldYield as scheduler_13, unstable_now as scheduler_1 } from '../../scheduler/index.js';
import shallowequal from '../../shallowequal/index.js';
import { TYPE_TEXT, REMAX_METHOD } from './constants.js';
import { generate } from './instanceId.js';
import VNode from './VNode.js';

/**
 * rootContext Page 实例
 */

var scheduleDeferredCallback = scheduler_9,
    cancelDeferredCallback = scheduler_10,
    shouldYield = scheduler_13,
    now = scheduler_1;

function processProps(newProps, rootContext, id) {
  var props = {};

  for (var _i = 0, _a = Object.keys(newProps); _i < _a.length; _i++) {
    var propKey = _a[_i];

    if (typeof newProps[propKey] === 'function') {
      var contextKey = REMAX_METHOD + "_" + id + "_" + propKey;
      rootContext.createCallback(contextKey, newProps[propKey]);
      props[propKey] = contextKey;
    } else if (propKey === 'children') ; else {
      props[propKey] = newProps[propKey];
    }
  }

  return props;
}

var rootHostContext = {};
var childHostContext = {};
var hostConfig = {
  now: now,
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return rootHostContext;
  },
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  prepareForCommit: function prepareForCommit() {},
  resetAfterCommit: function resetAfterCommit() {},
  getChildHostContext: function getChildHostContext() {
    return childHostContext;
  },
  createInstance: function createInstance(type, newProps, container) {
    var id = generate();
    var props = processProps(newProps, container, id);
    return new VNode({
      id: id,
      type: type,
      props: props,
      container: container
    });
  },
  createTextInstance: function createTextInstance(text, container) {
    var id = generate();
    var node = new VNode({
      id: id,
      type: TYPE_TEXT,
      props: null,
      container: container
    });
    node.text = text;
    return node;
  },
  commitTextUpdate: function commitTextUpdate(node, oldText, newText) {
    if (oldText !== newText) {
      node.text = newText;
      node.update();
    }
  },
  prepareUpdate: function prepareUpdate(node, type, oldProps, newProps) {
    oldProps = processProps(oldProps, node.container, node.id);
    newProps = processProps(newProps, node.container, node.id);

    if (!shallowequal(newProps, oldProps)) {
      return true;
    }

    return null;
  },
  commitUpdate: function commitUpdate(node, updatePayload, type, oldProps, newProps) {
    node.props = processProps(newProps, node.container, node.id);
    node.update();
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child, false);
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child, false);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    parent.insertBefore(child, beforeChild, false);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child, false);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  appendChildToContainer: function appendChildToContainer(container, child) {
    container.appendChild(child);
    child.mounted = true;
  },
  insertInContainerBefore: function insertInContainerBefore(container, child, beforeChild) {
    container.insertBefore(child, beforeChild);
  },
  removeChildFromContainer: function removeChildFromContainer(container, child) {
    container.removeChild(child);
  },
  schedulePassiveEffects: scheduleDeferredCallback,
  cancelPassiveEffects: cancelDeferredCallback,
  shouldYield: shouldYield,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  supportsMutation: true
};

export default hostConfig;
