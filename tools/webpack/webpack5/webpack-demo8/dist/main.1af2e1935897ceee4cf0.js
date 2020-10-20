/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo8"] = self["webpackChunkwebpack_demo8"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\n\n\nfunction component() {\n    const element = document.createElement('div');\n\n    element.innerHTML=[\n        'Hello webpack',\n        '5 cubed is equal to'+(0,_math__WEBPACK_IMPORTED_MODULE_1__.cube)(5)\n    ].join('\\n\\n')\n\n    return element;\n}\n  \ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://webpack-demo8/./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! namespace exports */
/*! export cube [provided] [used in runtime] [could be renamed] */
/*! export square [provided] [unused] [could be renamed] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cube\": () => /* binding */ cube\n/* harmony export */ });\n/* unused harmony export square */\nfunction square(x){\n    return x * x\n} \n\nfunction cube(x){\n    return x*x*x\n}\n\n//# sourceURL=webpack://webpack-demo8/./src/math.js?");

/***/ })

},
0,[["./src/index.js","runtime","vendor"]]]);