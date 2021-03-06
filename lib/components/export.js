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

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _slides = require("../utils/slides");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Export = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Export, _Component);

  function Export() {
    (0, _classCallCheck3.default)(this, Export);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Export.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    return this.props.slideReference.map(function (reference, index) {
      var slide = (0, _slides.getSlideByIndex)(_this2.props.slides, _this2.props.slideReference, index);
      return (0, _react.cloneElement)(slide, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0
      });
    });
  };

  Export.prototype.render = function render() {
    var styles = {
      export: {
        height: "100%",
        width: "100%"
      }
    };
    return (0, _jsx3.default)("div", {
      className: "spectacle-export",
      style: [styles.export]
    }, void 0, this._renderSlides());
  };

  return Export;
}(_react.Component)) || _class;

exports.default = Export;


Export.contextTypes = {
  styles: _react.PropTypes.object
};