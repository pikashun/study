/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-06 15:31:30\r\n * @LastEditTime: 2021-05-07 16:16:18\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\index.js\r\n */\r\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/creatNumber.js":
/*!*********************************!*\
  !*** ./src/page/creatNumber.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../util/randomColor */ \"./src/util/randomColor.js\");\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-06 23:17:56\r\n * @LastEditTime: 2021-05-07 16:04:51\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\page\\creatNumber.js\r\n */\r\n\r\n\r\nconst divContainer = document.getElementById(\"divContainer\");\r\nconst divCenter = document.getElementById(\"divCenter\");\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n,isPrime) {\r\n    \r\n    let span = document.createElement(\"span\");\r\n    span.innerText = n;\r\n    if(isPrime){\r\n        let color = (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        span.style.color = color;\r\n        moveCenterNumber(n,color);\r\n    }\r\n    divContainer.appendChild(span);\r\n    createCenterNumber(n);\r\n}\r\nfunction createCenterNumber(n) {\r\n    divCenter.innerText = n;\r\n    //读取某个元素的尺寸或者位置信息，会导致浏览器重新渲染，reflow\r\n}\r\n\r\nfunction moveCenterNumber(n,color) {\r\n    let div = document.createElement(\"div\");\r\n    div.classList = \"center\";\r\n    div.style.color = color\r\n    div.innerText = n;\r\n    document.body.appendChild(div);\r\n    getComputedStyle(div).left;//强制渲染页面；\r\n    div.style.opacity = 0;\r\n    div.style.transform = `translate(${(0,_util_randomColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-150,150)}px,${(0,_util_randomColor__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-200,200)}px)`;\r\n}\n\n//# sourceURL=webpack://test/./src/page/creatNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creatNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatNumber */ \"./src/page/creatNumber.js\");\n/* harmony import */ var _util_produceNuber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/produceNuber */ \"./src/util/produceNuber.js\");\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-07 16:05:09\r\n * @LastEditTime: 2021-05-07 18:04:05\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\page\\event.js\r\n */\r\n\r\n\r\nlet isStart = true;\r\n\r\nconst number = new _util_produceNuber__WEBPACK_IMPORTED_MODULE_1__.default(200);\r\nnumber.onCreatNumber = function(n,isPrime) {\r\n    (0,_creatNumber__WEBPACK_IMPORTED_MODULE_0__.default)(n,isPrime);\r\n}\r\nnumber.start();\r\nwindow.onclick = function() {\r\n    if(isStart){\r\n        number.stop();\r\n        isStart = false;\r\n    }else{\r\n        number.start();\r\n        isStart = true;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-06 22:14:34\r\n * @LastEditTime: 2021-05-06 22:28:30\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\util\\isPrime.js\r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {\r\n     if(n < 2){\r\n         return true;\r\n     }\r\n     const j = Math.sqrt(n,2);\r\n     for(let i = 2;i <= j;i++){\r\n         if(n % i == 0){\r\n             return false;\r\n         }\r\n     }\r\n     return true;\r\n } \r\n\n\n//# sourceURL=webpack://test/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/produceNuber.js":
/*!**********************************!*\
  !*** ./src/util/produceNuber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n/* harmony import */ var _randomColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomColor */ \"./src/util/randomColor.js\");\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-06 22:52:00\r\n * @LastEditTime: 2021-05-06 23:02:39\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\util\\produceNuber.js\r\n */\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.count = 1;\r\n        this.onCreatNumber = null;\r\n        this.timerId = null;\r\n    }\r\n\r\n    start() {\r\n        if(this.timerId){\r\n            return;\r\n        }\r\n        this.timerId = setInterval(() => {\r\n            this.onCreatNumber && this.onCreatNumber(this.count,(0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.count));\r\n            this.count ++;\r\n\r\n        },this.duration);\r\n    }\r\n\r\n    stop() {\r\n        clearInterval(this.timerId);\r\n        this.timerId = null;\r\n\r\n    }\r\n});\n\n//# sourceURL=webpack://test/./src/util/produceNuber.js?");

/***/ }),

/***/ "./src/util/randomColor.js":
/*!*********************************!*\
  !*** ./src/util/randomColor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\n * @Author: your name\r\n * @Date: 2021-05-06 22:32:57\r\n * @LastEditTime: 2021-05-07 15:47:01\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\site\\前端学习\\笔记\\webpack\\test\\src\\util\\randomColor.js\r\n */\r\nconst colors = [\"#f26359\",\"#62efab\",\"#ffe868\",\"#80e3f7\",\"#d781f9\"];\r\n// 返回一个随机下标\r\nfunction getRandom(min,max) {\r\n    return (max - min)*Math.random() + min;\r\n}\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const index = Math.floor(getRandom(0,colors.length));\r\n    return colors[index];\r\n}\n\n//# sourceURL=webpack://test/./src/util/randomColor.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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