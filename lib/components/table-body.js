"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

exports.default = TableBody;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableBody(_ref) {
  var children = _ref.children;

  return (0, _jsx3.default)("tbody", {}, void 0, children);
}

TableBody.contextTypes = {
  styles: _react.PropTypes.object,
  store: _react.PropTypes.object
};