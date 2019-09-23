import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf, extends as _extends, assertThisInitialized as _assertThisInitialized } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { createContext as react_5, createElement as react_24, Component as react_3 } from '../../npm/react/index.js';

var LayoutContext = react_5({}); // 构建业务树

var generator = function generator(_ref) {
  var tagName = _ref.tagName,
      clsTagName = _ref.clsTagName;
  return function (BasicComponent) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Adapter, _React$Component);

      function Adapter() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, Adapter);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Adapter)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_this), "renderComponent", function () {
          return react_24(BasicComponent, _extends({
            tagName: tagName,
            clsTagName: clsTagName
          }, _this.props));
        });

        return _this;
      }

      _createClass(Adapter, [{
        key: "render",
        value: function render() {
          return react_24(LayoutContext.Consumer, null, this.renderComponent);
        }
      }]);

      return Adapter;
    }(react_3), _defineProperty(_class, "Header", void 0), _defineProperty(_class, "Footer", void 0), _defineProperty(_class, "Content", void 0), _temp;
  };
};

var BasicLayout =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BasicLayout, _React$Component2);

  function BasicLayout() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, BasicLayout);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(BasicLayout)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {});

    return _this2;
  }

  _createClass(BasicLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tagName,
          children = _this$props.children,
          clsTagName = _this$props.clsTagName,
          others = _objectWithoutProperties(_this$props, ["tagName", "children", "clsTagName"]);

      return react_24(LayoutContext.Provider, {
        value: {
          siderHook: {}
        }
      }, react_24(Tag, _extends({
        "class": clsTagName
      }, others), children || clsTagName));
    }
  }]);

  return BasicLayout;
}(react_3); // 构建业务


var Basic = function Basic(props) {
  var clsName = props.className,
      tagName = props.tagName,
      clsTagName = props.clsTagName,
      children = props.children,
      others = _objectWithoutProperties(props, ["className", "tagName", "clsTagName", "children"]);

  return react_24(tagName, _objectSpread2({
    "class": "mido-layout-wrap-".concat(clsTagName, " ").concat(clsName || '')
  }, others), children || clsTagName);
};

var Layout = generator({
  tagName: 'view',
  clsTagName: 'mido-layout-wrap'
})(BasicLayout);
Layout.Header = generator({
  tagName: 'view',
  clsTagName: 'header'
})(Basic);
Layout.Content = generator({
  tagName: 'view',
  clsTagName: 'main'
})(Basic);
Layout.Footer = generator({
  tagName: 'view',
  clsTagName: 'footer'
})(Basic);

export default Layout;
