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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_init_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions/init-page-load */ \"./src/modules/functions/init-page-load.js\");\n\n\n(0,_modules_functions_init_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions/init-page-load.js":
/*!*************************************************!*\
  !*** ./src/modules/functions/init-page-load.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/modules/pages/home.js\");\n\n\nfunction initialLoad() {\n  const content = document.querySelector('#content');\n\n  content.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/functions/init-page-load.js?");

/***/ }),

/***/ "./src/modules/pages/home.js":
/*!***********************************!*\
  !*** ./src/modules/pages/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addTextAnimation(node, text) {\n  let delayCount = 0;\n\n  Array.from(text).forEach((letter) => {\n    const letterSpan = document.createElement('span');\n    letterSpan.textContent = letter;\n    letterSpan.style.transitionDelay = `${delayCount}s`;\n\n    node.appendChild(letterSpan);\n    delayCount += 0.04;\n  });\n\n  return node;\n}\n\nfunction home() {\n  const main = document.createElement('main');\n\n  const heroDiv = document.createElement('div');\n  heroDiv.id = 'hero-div';\n\n  const heroHead = document.createElement('h1');\n  heroHead.id = 'hero-text';\n  addTextAnimation(heroHead, 'Assorted International Cuisine');\n\n  const heroSub = document.createElement('p');\n  heroSub.id = 'hero-subtext';\n  addTextAnimation(heroSub, 'CURATED BY EXPERTS');\n\n  heroDiv.appendChild(heroSub);\n  heroDiv.appendChild(heroHead);\n  main.appendChild(heroDiv);\n\n  const missionDiv = document.createElement('div');\n  missionDiv.id = 'our-mission';\n  const missionTitle = document.createElement('h3');\n  missionTitle.id = 'mission-title';\n\n  const missionPara1 = document.createElement('p');\n  const missionPara2 = document.createElement('p');\n  const missionPara3 = document.createElement('p');\n  const missionImage = document.createElement('img');\n  missionPara1.className = 'mission-text';\n  missionPara2.className = 'mission-text';\n  missionPara3.className = 'mission-text';\n  missionImage.id = 'mission-drinks--img';\n  missionImage.src = './assets/images/home-cocktails.jpg';\n  missionImage.alt = 'Image of Cocktails';\n\n  missionPara1.textContent = `Worldwide Kitchen is a globally influenced fine-dining restaurant nestled in the heart of England in Buckingham Palace.\n   Executive chef Mr. Worldwide and his Assistant Pitbull Woofmeister leads the kitched team with innovation, leadership and superb technique.\n    Worldwide offers an array of gastronomic adventures with many small and large plates, specialty craft cocktails and a few other sections\n     serving food from all over the world. Sourcing the freshest ingredients both locally and internationally, guests dining with us can taste the\n      heartfelt commitment to quality.`;\n  missionPara2.textContent = `Worldwide Kitchen distinguishes itself by emphasizing on the social experience and taking a vibe-driven approach to fine dining.\n   The dining room, sushi lounge and cocktail bar evokes a fun sense of style matched by the chic ambiance and decor.`;\n  missionPara3.textContent = `Whether you are joining us for dinner, cocktails, a private party or any special occasion, Worldwide Kitchen opens its doors\n   to you and promises to make the experience special and memorable. The team eagerly awaits to show you world-class hospitality`;\n\n  missionDiv.append(missionTitle, missionPara1, missionPara2, missionPara3, missionImage);\n  main.appendChild(missionDiv);\n\n  const picturesDiv = document.createElement('div');\n  picturesDiv.id = 'home-pictures-container';\n\n  const picturesHead = document.createElement('h2');\n  picturesHead.id = 'pictures-heading';\n  addTextAnimation(picturesHead, 'Beautiful and Flavorful Food');\n\n  const picturesArray = [];\n  for (let i = 1; i <= 3; i += 1) {\n    const picture = document.createElement('img');\n    picture.id = `home-picture-${i}`;\n    picturesArray.push(picture);\n  }\n\n  picturesDiv.append(picturesHead, picturesArray[0], picturesArray[1], picturesArray[2]);\n\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/pages/home.js?");

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