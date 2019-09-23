function isClassComponent(Component) {
  return Component.prototype && typeof Component.prototype.render === 'function';
}

export default isClassComponent;
