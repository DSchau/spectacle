"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp2;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _slides = require("../utils/slides");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startTime = function startTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0 " + minutes : minutes;
  seconds = seconds < 10 ? "0 " + seconds : seconds;
  var strTime = hours + " : " + minutes + " : " + seconds + " " + ampm;
  return strTime;
};

var Presenter = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Presenter, _Component);

  function Presenter() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Presenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      notes: {},
      time: startTime(new Date())
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Presenter.prototype.getChildContext = function getChildContext() {
    return {
      updateNotes: this.updateNotes.bind(this)
    };
  };

  Presenter.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    this.time = setInterval(function () {
      _this2.setState({
        time: startTime(new Date())
      });
    }, 1000);
  };

  Presenter.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.time);
  };

  Presenter.prototype.getCurrentSlide = function getCurrentSlide() {
    return this.context.store.getState().route.slide;
  };

  Presenter.prototype.updateNotes = function updateNotes(newNotes) {
    var notes = (0, _extends3.default)({}, this.state.notes);
    notes[this.getCurrentSlide()] = newNotes;

    this.setState({ notes: notes });
  };

  Presenter.prototype._getSlideByIndex = function _getSlideByIndex(index) {
    return (0, _slides.getSlideByIndex)(_react.Children.toArray(this.props.slides), this.props.slideReference, index);
  };

  Presenter.prototype._renderMainSlide = function _renderMainSlide() {
    var _props = this.props,
        slideIndex = _props.slideIndex,
        hash = _props.hash,
        lastSlide = _props.lastSlide;

    var child = this._getSlideByIndex(slideIndex);
    var presenterStyle = {
      position: "relative"
    };
    return (0, _react.cloneElement)(child, {
      dispatch: this.props.dispatch,
      key: slideIndex,
      hash: hash,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      slideIndex: slideIndex,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle
    });
  };

  Presenter.prototype._renderNextSlide = function _renderNextSlide() {
    var _props2 = this.props,
        slideIndex = _props2.slideIndex,
        lastSlide = _props2.lastSlide;

    var presenterStyle = {
      position: "relative"
    };
    var endStyle = {
      display: "flex",
      margin: 0,
      color: "white"
    };
    var child = this._getSlideByIndex(slideIndex + 1);
    return child ? (0, _react.cloneElement)(child, {
      dispatch: this.props.dispatch,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      key: slideIndex + 1,
      hash: child.props.id || slideIndex + 1,
      slideIndex: slideIndex + 1,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle,
      appearOff: true
    }) : (0, _jsx3.default)("h1", {
      style: [endStyle]
    }, void 0, "END");
  };

  Presenter.prototype._renderNotes = function _renderNotes() {
    var notes = void 0;
    var currentSlide = this.getCurrentSlide();

    if (this.state.notes[currentSlide]) {
      notes = this.state.notes[currentSlide];
    } else {
      var child = this._getSlideByIndex(this.props.slideIndex);
      notes = child.props.notes;
    }

    if (!notes) {
      return false;
    }

    if (typeof notes === "string") {
      return (0, _jsx3.default)("div", {
        dangerouslySetInnerHTML: { __html: notes }
      });
    }
    return (0, _jsx3.default)("div", {}, void 0, notes);
  };

  Presenter.prototype.render = function render() {
    var styles = {
      presenter: {
        height: "100%",
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      },
      header: {
        position: "absolute",
        display: "block",
        color: "white",
        width: "100%",
        height: "10%",
        textAlign: "center",
        padding: "10px 50px"
      },
      slideInfo: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "left",
        margin: 0,
        lineHeight: 1,
        display: "inline-block",
        fontSize: 28
      },
      clock: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "right",
        margin: 0,
        lineHeight: 1,
        display: "inline-block",
        fontSize: 28
      },
      container: {
        display: "flex",
        flex: 1,
        padding: "10px 50px 0 50px"
      },
      preview: {
        position: "absolute",
        top: "10%",
        display: "flex",
        width: "60%",
        height: "90%",
        flex: "1",
        flexWrap: "wrap",
        justifyContent: "center"
      },
      main: {
        display: "flex",
        flex: "0 0 100%",
        height: "55%",
        border: "2px solid white",
        padding: 20
      },
      next: {
        display: "flex",
        flex: "0 0 68.75%",
        alignItems: "center",
        justifyContent: "center",
        height: "40%",
        opacity: 0.4
      },
      notes: {
        position: "absolute",
        top: "10%",
        left: "calc(60% + 50px)",
        height: "90%",
        width: "calc(40% - 100px)",
        display: "block",
        padding: "10px 30px",
        color: "white"
      }
    };
    return (0, _jsx3.default)("div", {
      className: "spectacle-presenter",
      style: [styles.presenter]
    }, void 0, (0, _jsx3.default)("div", {
      style: styles.header
    }, void 0, (0, _jsx3.default)("h2", {
      style: styles.slideInfo
    }, void 0, "Slide ", this.props.slideIndex + 1, " of ", this.props.slideReference.length), (0, _jsx3.default)("h2", {
      style: styles.clock
    }, void 0, this.state.time)), (0, _jsx3.default)("div", {
      style: styles.container
    }, void 0, (0, _jsx3.default)("div", {
      style: styles.preview
    }, void 0, (0, _jsx3.default)("div", {
      className: "spectacle-presenter-main",
      style: [styles.main]
    }, void 0, this._renderMainSlide()), (0, _jsx3.default)("div", {
      className: "spectacle-presenter-next",
      style: [styles.next]
    }, void 0, this._renderNextSlide())), (0, _jsx3.default)("div", {
      className: "spectacle-presenter-notes",
      style: [styles.notes]
    }, void 0, this._renderNotes())));
  };

  return Presenter;
}(_react.Component), _class2.childContextTypes = {
  updateNotes: _react.PropTypes.func
}, _temp2)) || _class;

exports.default = Presenter;


Presenter.contextTypes = {
  styles: _react.PropTypes.object,
  store: _react.PropTypes.object.isRequired
};