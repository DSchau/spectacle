"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _base = require("../utils/base");

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  List.prototype.render = function render() {
    return this.props.ordered ? (0, _jsx3.default)("ol", {
      reversed: this.props.reversed,
      start: this.props.start,
      type: this.props.type,
      className: this.props.className,
      style: [this.context.styles.components.list, _base.getStyles.call(this), this.props.style]
    }, void 0, this.props.children) : (0, _jsx3.default)("ul", {
      className: this.props.className,
      style: [this.context.styles.components.list, _base.getStyles.call(this), this.props.style]
    }, void 0, this.props.children);
  };

  return List;
}(_react.Component)) || _class;

exports.default = List;


List.defaultProps = {
  ordered: false,
  reversed: false,
  start: 1,
  type: "1"
};

List.contextTypes = {
  styles: _react.PropTypes.object,
  store: _react.PropTypes.object
};