var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
function createPortal(children, containerInfo, key) {
  return {
    // This tag allow us to uniquely identify this as a React Portal
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

export { REACT_PORTAL_TYPE, createPortal };
