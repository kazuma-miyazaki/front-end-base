webpackHotUpdate("app",{

/***/ "./src/react/template/Single.jsx":
/*!***************************************!*\
  !*** ./src/react/template/Single.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_object_project_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react/object/project/Header */ "./src/react/object/project/Header/index.jsx");
/* harmony import */ var _react_object_project_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react/object/project/Nav */ "./src/react/object/project/Nav/index.jsx");
/* harmony import */ var _react_object_project_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react/object/project/Footer */ "./src/react/object/project/Footer/index.jsx");
/* harmony import */ var _config_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/projects.json */ "./config/projects.json");
var _config_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @config/projects.json */ "./config/projects.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 * app: Index
 *
--------------------------------------------------------------------- */






var insertTemplate = function insertTemplate(App, data) {
  var Single =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Single, _React$Component);

    function Single(props) {
      var _this;

      _classCallCheck(this, Single);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Single).call(this, props));
      _this.state = {
        message: "test"
      };
      return _this;
    }

    _createClass(Single, [{
      key: "onChange",
      value: function onChange(e) {
        this.setState({
          message: e.target.value
        });
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single__header"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_object_project_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
          data: _config_projects_json__WEBPACK_IMPORTED_MODULE_4__["header"]
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single__nav"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_object_project_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: _config_projects_json__WEBPACK_IMPORTED_MODULE_4__["nav"]
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single__main"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single__main__inner"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
          data: data
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "l-single__footer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_object_project_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: _config_projects_json__WEBPACK_IMPORTED_MODULE_4__["footer"]
        })));
      }
    }]);

    return Single;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Single;
};

/* harmony default export */ __webpack_exports__["default"] = (insertTemplate);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvdGVtcGxhdGUvU2luZ2xlLmpzeCJdLCJuYW1lcyI6WyJpbnNlcnRUZW1wbGF0ZSIsIkFwcCIsImRhdGEiLCJTaW5nbGUiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVyIiwibmF2IiwiZm9vdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUFBLE1BQzlCQyxNQUQ4QjtBQUFBO0FBQUE7QUFBQTs7QUFFbEMsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsa0ZBQU1BLEtBQU47QUFDQSxZQUFLQyxLQUFMLEdBQWE7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBYjtBQUZpQjtBQUdsQjs7QUFMaUM7QUFBQTtBQUFBLCtCQU96QkMsQ0FQeUIsRUFPdEI7QUFDVixhQUFLQyxRQUFMLENBQWM7QUFBRUYsaUJBQU8sRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXBCLFNBQWQ7QUFDRDtBQVRpQztBQUFBO0FBQUEsK0JBV3pCO0FBQ1AsZUFDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0UsMkRBQUMsb0VBQUQ7QUFBVSxjQUFJLEVBQUVDLDREQUFNQTtBQUF0QixVQURGLENBREYsRUFLRTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNFLDJEQUFDLGlFQUFEO0FBQU8sY0FBSSxFQUFFQyx5REFBR0E7QUFBaEIsVUFERixDQUxGLEVBU0U7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUlFLDJEQUFDLEdBQUQ7QUFBSyxjQUFJLEVBQUVWO0FBQVgsVUFKRixDQURGLENBVEYsRUFxQkU7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDRSwyREFBQyxvRUFBRDtBQUFVLGNBQUksRUFBRVcsNERBQU1BO0FBQXRCLFVBREYsQ0FyQkYsQ0FERjtBQTJCRDtBQXZDaUM7O0FBQUE7QUFBQSxJQUNmQyw0Q0FBSyxDQUFDQyxTQURTOztBQTBDcEMsU0FBT1osTUFBUDtBQUNELENBM0NEOztBQStDZUgsNkVBQWYsRSIsImZpbGUiOiJob3QvaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIGFwcDogSW5kZXhcbiAqXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5cbmltcG9ydCBSZWFjdCAgICBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQX0hlYWRlciBmcm9tICdAcmVhY3Qvb2JqZWN0L3Byb2plY3QvSGVhZGVyJztcbmltcG9ydCBQX05hdiAgICBmcm9tICdAcmVhY3Qvb2JqZWN0L3Byb2plY3QvTmF2JztcbmltcG9ydCBQX0Zvb3RlciBmcm9tICdAcmVhY3Qvb2JqZWN0L3Byb2plY3QvRm9vdGVyJztcbmltcG9ydCB7XG4gIGhlYWRlcixcbiAgbmF2LFxuICBmb290ZXJcbn0gZnJvbSAnQGNvbmZpZy9wcm9qZWN0cy5qc29uJztcblxuXG5cbmNvbnN0IGluc2VydFRlbXBsYXRlID0gKEFwcCwgZGF0YSkgPT4ge1xuICBjbGFzcyBTaW5nbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0geyBtZXNzYWdlOiBcInRlc3RcIiB9O1xuICAgIH1cbiAgXG4gICAgb25DaGFuZ2UoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLXNpbmdsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibC1zaW5nbGVfX2hlYWRlclwiPlxuICAgICAgICAgICAgPFBfSGVhZGVyIGRhdGE9e2hlYWRlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLXNpbmdsZV9fbmF2XCI+XG4gICAgICAgICAgICA8UF9OYXYgZGF0YT17bmF2fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImwtc2luZ2xlX19tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImwtc2luZ2xlX19tYWluX19pbm5lclwiPlxuXG4gICAgICAgICAgICAgIHsvKiAvYXBwbGljYXRpb24gbWFpbiAqL31cblxuICAgICAgICAgICAgICA8QXBwIGRhdGE9e2RhdGF9IC8+XG5cbiAgICAgICAgICAgICAgey8qIGFwcGxpY2F0aW9uIG1haW4vICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLXNpbmdsZV9fZm9vdGVyXCI+XG4gICAgICAgICAgICA8UF9Gb290ZXIgZGF0YT17Zm9vdGVyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFNpbmdsZTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRUZW1wbGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=