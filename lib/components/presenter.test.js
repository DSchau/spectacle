"use strict";

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _presenter = require("./presenter");

var _presenter2 = _interopRequireDefault(_presenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _mockRoute = function _mockRoute(slide) {
  return { params: [], slide: slide };
};

var _mockContext = function _mockContext() {
  return {
    store: {
      getState: function getState() {
        return { route: "" };
      }
    }
  };
};

var _ref = (0, _jsx3.default)("div", {}, void 0, "Slide Content");

var _mockSlides = function _mockSlides() {
  var Slide = function Slide() {
    return _ref;
  };
  return [(0, _jsx3.default)(Slide, {}, 0), (0, _jsx3.default)(Slide, {}, 1), (0, _jsx3.default)(Slide, {}, 2)];
};

var _ref2 = (0, _jsx3.default)("div", {}, void 0, "Slide Content");

var _mockSlidesWithNotes = function _mockSlidesWithNotes() {
  var notes = "These are my slide notes!!";
  var Slide = function Slide() {
    return _ref2;
  };
  return [(0, _jsx3.default)(Slide, {}, 0), (0, _jsx3.default)(Slide, {
    notes: notes
  }, 1), (0, _jsx3.default)(Slide, {}, 2)];
};

var _mockSlideReference = function _mockSlideReference() {
  return [{ id: 0, rootIndex: 0 }, { id: 1, rootIndex: 1 }, { id: 2, rootIndex: 2 }];
};

describe("<Presenter />", function () {
  test("should render correctly", function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_presenter2.default, {
      dispatch: function dispatch() {},
      slides: _mockSlides(),
      slideIndex: 1,
      slideReference: _mockSlideReference(),
      hash: 1,
      route: _mockRoute(1),
      lastSlide: 0
    }), { context: _mockContext() });
    wrapper.setState({ time: "Mon Nov 07 2016 11:04:08 GMT-0600 (CST)" });
    wrapper.instance().componentWillMount = jest.fn();
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });

  test("should render with notes when slides have them.", function () {
    var wrapper = (0, _enzyme.mount)((0, _jsx3.default)(_presenter2.default, {
      dispatch: function dispatch() {},
      slides: _mockSlidesWithNotes(),
      slideIndex: 1,
      slideReference: _mockSlideReference(),
      hash: 1,
      route: _mockRoute(1),
      lastSlide: 0
    }), { context: _mockContext() });
    wrapper.setState({ time: "Mon Nov 07 2016 11:04:08 GMT-0600 (CST)" });
    wrapper.instance().componentWillMount = jest.fn();
    expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
  });
});