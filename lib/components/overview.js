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

var Overview = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Overview, _Component);

  function Overview(props) {
    (0, _classCallCheck3.default)(this, Overview);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      overviewWidth: document.documentElement.clientWidth
    };
    _this.resizeHandler = _this.resizeHandler.bind(_this);
    return _this;
  }

  Overview.prototype.componentDidMount = function componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  };

  Overview.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  };

  Overview.prototype._slideClicked = function _slideClicked(index) {
    this.context.history.replace("/" + this._getHash(index));
  };

  Overview.prototype._getHash = function _getHash(slideIndex) {
    return this.props.slideReference[slideIndex].id;
  };

  Overview.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    var slideIndex = this.props.slideIndex;
    var screen = this.state.overviewWidth;
    return this.props.slideReference.map(function (reference, index) {
      var style = {
        position: "relative",
        width: screen / 3,
        height: screen / 3 * 0.7,
        float: "left",
        opacity: index === slideIndex ? 1 : 0.5,
        cursor: "pointer",
        ":hover": {
          opacity: 1
        }
      };
      var slide = (0, _slides.getSlideByIndex)(_this2.props.slides, _this2.props.slideReference, index);
      var el = (0, _react.cloneElement)(slide, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0,
        appearOff: true
      });
      return (0, _jsx3.default)("div", {
        style: [style],
        onClick: _this2._slideClicked.bind(_this2, index)
      }, index, el);
    });
  };

  Overview.prototype.resizeHandler = function resizeHandler() {
    this.setState({
      overviewWidth: this.overviewRef.clientWidth
    });
  };

  Overview.prototype.render = function render() {
    var _this3 = this;

    var styles = {
      overview: {
        height: "100%",
        width: "100%",
        overflow: "scroll"
      }
    };
    return _react2.default.createElement(
      "div",
      { className: "spectacle-overview", ref: function ref(o) {
          _this3.overviewRef = o;
        }, style: [styles.overview] },
      this._renderSlides()
    );
  };

  return Overview;
}(_react.Component)) || _class;

exports.default = Overview;


Overview.contextTypes = {
  styles: _react.PropTypes.object,
  history: _react.PropTypes.object
};