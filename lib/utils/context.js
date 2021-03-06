"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require("react");

var _actions = require("../actions");

var _slides = require("./slides");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Context, _Component);

  function Context() {
    (0, _classCallCheck3.default)(this, Context);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));

    _this._handleLocationChange = _this._handleLocationChange.bind(_this);
    _this._handleLocationChange(_this.props);
    return _this;
  }

  Context.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        history = _props.history,
        styles = _props.styles,
        store = _props.store;

    return {
      history: history,
      styles: styles,
      store: store
    };
  };

  Context.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this._handleLocationChange(nextProps);
  };

  Context.prototype._handleLocationChange = function _handleLocationChange(_ref) {
    var history = _ref.history,
        store = _ref.store,
        deck = _ref.children;

    var slideCount = (0, _slides.countSlides)(deck.props.children);
    store.dispatch((0, _actions.updateRoute)({
      location: history.location,
      slideCount: slideCount
    }));
  };

  Context.prototype.render = function render() {
    return this.props.children;
  };

  return Context;
}(_react.Component), _class.displayName = "Context", _class.childContextTypes = {
  styles: _react.PropTypes.object,
  history: _react.PropTypes.object,
  store: _react.PropTypes.object
}, _temp);
exports.default = Context;