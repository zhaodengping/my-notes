(self["webpackChunkwebpack_demo4"] = self["webpackChunkwebpack_demo4"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");
 


function component() {
    const element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
    element.onclick=_print__WEBPACK_IMPORTED_MODULE_1__.default.bind(null,'Hello world');
    
    return element;
  }
  
document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ print
/* harmony export */ });
function print(text){
    console.log(text)
}

/***/ })

},
0,[["./src/index.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW80Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtbzQvLi9zcmMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNLOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQU07QUFDOUIsb0JBQW9CLGdEQUFVOztBQUU5QjtBQUNBOztBQUVBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBLEMiLCJmaWxlIjoibWFpbi42NmFiZjY2MjEzMzJiZTZlNWNiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCcgXG5pbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludCdcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBsb2Rhc2jvvIjnm67liY3pgJrov4fkuIDkuKogc2NyaXB0IOW8leWFpe+8ieWvueS6juaJp+ihjOi/meS4gOihjOaYr+W/hemcgOeahFxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICAgIGVsZW1lbnQub25jbGljaz1QcmludC5iaW5kKG51bGwsJ0hlbGxvIHdvcmxkJyk7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KXtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=