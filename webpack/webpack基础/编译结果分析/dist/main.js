/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((module) => {

eval("/*\r\n * @Author: your name\r\n * @Date: 2021-05-07 23:43:07\r\n * @LastEditTime: 2021-05-07 23:56:00\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\编译结果分析\\src\\a.js\r\n */\r\nconsole.log(\"module a\");\r\nmodule.exports = \"pws\";\r\n\n\n//# sourceURL=webpack://test/./src/a.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\n * @Author: your name\r\n * @Date: 2021-05-07 17:59:14\r\n * @LastEditTime: 2021-05-07 23:44:27\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\编译结果分析\\src\\index.js\r\n */\r\nconsole.log(\"index module\");\r\nconst a = __webpack_require__(/*! ./a */ \"./src/a.js\");\r\nconsole.log(a);\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;