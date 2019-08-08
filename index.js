"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      opacity: 1;\n      margin-left: 0px;\n      margin-right: 8px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    pointer-events: none;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 15px;\n    font-weight: 600;\n    line-height: 16px;\n    padding: 8px 24px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Poppins';\n  border-radius: 22px;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 12px 32px;\n  transition: all .3s cubic-bezier(.645, .045, .355, 1);\n  background: hsla(216, 40%, 55%, 1);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n  color: ", ";\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  background-color: ", ";\n  ", "\n  ", "\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px ", ";\n    border: 1px solid ", ";\n  }\n  & > i {\n    display: inline-block;\n    line-height: 0;\n    pointer-events: none;\n\n    vertical-align: -2px;\n    opacity: 0;\n    margin-left: -16px;\n    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);\n\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  line-height: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  appearance: none;\n  cursor: pointer;\n  position: relative;\n  user-select: none;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonRaw = _styledComponents["default"].button(_templateObject());

var Button = function Button(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      primary = _ref.primary,
      small = _ref.small,
      rest = _objectWithoutProperties(_ref, ["children", "loading", "primary", "small"]);

  return _react["default"].createElement(ButtonRaw, rest, _react["default"].createElement("i", null, _react["default"].createElement("svg", {
    height: 16,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, _react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "10",
    r: "35",
    strokeDasharray: "164.93361431346415 56.97787143782138",
    transform: "rotate(305.844 50 50)"
  }, _react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 50 50;360 50 50",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  })))), _react["default"].createElement("span", {
    style: {
      display: 'inline-block',
      pointerEvents: 'none'
    }
  }, children));
};

var _default = (0, _styledComponents["default"])(Button)(_templateObject2(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.small && (0, _styledComponents.css)(_templateObject3());
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject4(), function (props) {
    return props.theme.colors.primary300;
  });
}, function (props) {
  return props.theme.colors.primary200;
}, function (props) {
  return props.theme.colors.primary400;
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject5());
});

exports["default"] = _default;
