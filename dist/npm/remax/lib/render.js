import ReactReconciler from '../../react-reconciler/index.js';
import hostConfig from './hostConfig.js';

var ReactReconcilerInst = ReactReconciler(hostConfig);

function getPublicRootInstance(container) {
  var containerFiber = container.current;

  if (!containerFiber.child) {
    return null;
  }

  return containerFiber.child.stateNode;
}

function render(rootElement, container) {
  // Create a root Container if it doesnt exist
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(container, false, false);
  }

  ReactReconcilerInst.updateContainer(rootElement, container._rootContainer, null, function () {});
  return getPublicRootInstance(container._rootContainer);
}

export default render;
export { ReactReconcilerInst };
