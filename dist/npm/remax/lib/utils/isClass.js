function fnBody(fn) {
  return fn.toString().replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
}

function isClass(fn) {
  if (typeof fn !== 'function') {
    return false;
  }

  if (/^class[\s{]/.test(toString.call(fn))) {
    return true;
  } // babel.js classCallCheck() & inlined


  var body = fnBody(fn);
  return /classCallCheck/.test(body) || /TypeError\("Cannot call a class as a function"\)/.test(body);
}

export default isClass;
