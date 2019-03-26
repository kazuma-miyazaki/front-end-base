webpackHotUpdate("app",{

/***/ "./src/entry/app.js":
/*!**************************!*\
  !*** ./src/entry/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _object_app_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/app/Index */ "./src/object/app/Index/index.js");




var apps = {
  // apps
  'index': _object_app_Index__WEBPACK_IMPORTED_MODULE_2__["default"],
  'form': Forms
};
Object.keys(apps).forEach(function (containerID) {
  var App = apps[containerID];
  var container = document.getElementById(containerID);

  if (container) {
    console.log('containerID: %o', containerID);
    console.log('container  : %o', container);
    container && Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), container);
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkvYXBwLmpzIl0sIm5hbWVzIjpbImFwcHMiLCJJbmRleCIsIkZvcm1zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJjb250YWluZXJJRCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxJQUFJLEdBQUc7QUFFWDtBQUVBLFdBQVNDLHlEQUpFO0FBTVgsVUFBU0M7QUFORSxDQUFiO0FBWUFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixJQUFaLEVBQWtCSyxPQUFsQixDQUEwQixVQUFBQyxXQUFXLEVBQUk7QUFDdkMsTUFBTUMsR0FBRyxHQUFTUCxJQUFJLENBQUNNLFdBQUQsQ0FBdEI7QUFDQSxNQUFNRSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkosV0FBeEIsQ0FBbEI7O0FBRUEsTUFBSUUsU0FBSixFQUNBO0FBQ0VHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTixXQUEvQjtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkosU0FBL0I7QUFFQUEsYUFBUyxJQUFJSyx3REFBTSxDQUFDLDJEQUFDLEdBQUQsT0FBRCxFQUFTTCxTQUFULENBQW5CO0FBQ0Q7QUFDRixDQVhELEUiLCJmaWxlIjoiaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tJ3JlYWN0LWRvbSc7XG5pbXBvcnQgSW5kZXggICAgICBmcm9tICcuLi9vYmplY3QvYXBwL0luZGV4JztcbmltcG9ydCBGb3JtICAgICAgIGZyb20gJy4uL29iamVjdC9hcHAvSW5kZXgnO1xuXG5cblxuY29uc3QgYXBwcyA9IHtcblxuICAvLyBhcHBzXG5cbiAgJ2luZGV4JzogSW5kZXgsXG5cbiAgJ2Zvcm0nIDogRm9ybXNcblxufTtcblxuXG5cbk9iamVjdC5rZXlzKGFwcHMpLmZvckVhY2goY29udGFpbmVySUQgPT4ge1xuICBjb25zdCBBcHAgICAgICAgPSBhcHBzW2NvbnRhaW5lcklEXTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xuXG4gIGlmIChjb250YWluZXIpXG4gIHtcbiAgICBjb25zb2xlLmxvZygnY29udGFpbmVySUQ6ICVvJywgY29udGFpbmVySUQpO1xuICAgIGNvbnNvbGUubG9nKCdjb250YWluZXIgIDogJW8nLCBjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyICYmIHJlbmRlcig8QXBwLz4sIGNvbnRhaW5lcik7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==