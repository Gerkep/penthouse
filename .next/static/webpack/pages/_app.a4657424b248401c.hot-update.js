"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Italiana;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.hamburger-btn {\\n  position: absolute;\\n  top: 5vw;\\n  right: 4vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 15vw;\\n  height: 15vw;\\n  cursor: pointer;\\n  transition: all 0.5s ease-in-out;\\n  z-index: 2;\\n}\\n.hamburger {\\n  width: 11vw;\\n  height: 0.77vw;\\n  background: rgb(255, 255, 255);\\n  border-radius: 10px;\\n  transition: all 0.5s ease-in-out;\\n}\\n.hamburger::before,\\n.hamburger::after {\\n  content: '';\\n  position: absolute;\\n  width: 11vw;\\n  height: 0.77vw;\\n  background: rgb(255, 255, 255);\\n  border-radius: 10px;\\n  transition: all 0.5s ease-in-out;\\n}\\n.hamburger::before {\\n  transform: translateY(-3vw);\\n}\\n.hamburger::after {\\n  transform: translateY(3vw);\\n}\\n.hamburger-btn.open .hamburger {\\n  transform: translateX(-11vw);\\n  background: transparent;\\n  box-shadow: none;\\n}\\n.hamburger-btn.open .hamburger::before {\\n  transform: rotate(45deg) translate(8vw, -8vw);\\n}\\n.hamburger-btn.open .hamburger::after {\\n  transform: rotate(-45deg) translate(8vw, 8vw);\\n}\\n.menu {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.261);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n  transform: translateY(-215vh);\\n  transition: all 0.5s ease-in-out;\\n  z-index: 1;\\n}\\n.menu.open {\\n  transform: translateY(0);\\n}\\n.mobile-menu-items {\\n  width: 100%;\\n  height: 20%;\\n  padding-top: 30vh;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.mobile-menu-link {\\n  width: 100%;\\n  text-align: center;\\n  margin: 5vh 0 5vh 0;\\n  font-size: 5vw;\\n  opacity: 0;\\n  transition: all 0.7s ease;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none;;\\n}\\n\\n.mobile-menu-link:hover:after {\\n  transform: scaleX(1);\\n  transform-origin: bottom left;\\n}\\n.mobile-menu-link.appear {\\n  transform: scale(1.1);\\n  opacity: 1;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: white;\\n    background: black;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  .hamburger {\\n    display: none;\\n  }\\n  .menu {\\n    display: none;\\n  }\\n  .hamburger-btn {\\n    display: none;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gCAAgC;EAChC,UAAU;AACZ;AACA;EACE,WAAW;EACX,cAAc;EACd,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;AAClC;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;AAClC;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,6CAA6C;AAC/C;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,sCAAsC;EACtC,mCAA2B;UAA3B,2BAA2B;EAC3B,6BAA6B;EAC7B,gCAAgC;EAChC,UAAU;AACZ;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,eAAe;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,yBAAyB;EACzB,eAAe;EACf,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,6BAA6B;AAC/B;AACA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;AACF;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Italiana;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.hamburger-btn {\\n  position: absolute;\\n  top: 5vw;\\n  right: 4vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 15vw;\\n  height: 15vw;\\n  cursor: pointer;\\n  transition: all 0.5s ease-in-out;\\n  z-index: 2;\\n}\\n.hamburger {\\n  width: 11vw;\\n  height: 0.77vw;\\n  background: rgb(255, 255, 255);\\n  border-radius: 10px;\\n  transition: all 0.5s ease-in-out;\\n}\\n.hamburger::before,\\n.hamburger::after {\\n  content: '';\\n  position: absolute;\\n  width: 11vw;\\n  height: 0.77vw;\\n  background: rgb(255, 255, 255);\\n  border-radius: 10px;\\n  transition: all 0.5s ease-in-out;\\n}\\n.hamburger::before {\\n  transform: translateY(-3vw);\\n}\\n.hamburger::after {\\n  transform: translateY(3vw);\\n}\\n.hamburger-btn.open .hamburger {\\n  transform: translateX(-11vw);\\n  background: transparent;\\n  box-shadow: none;\\n}\\n.hamburger-btn.open .hamburger::before {\\n  transform: rotate(45deg) translate(8vw, -8vw);\\n}\\n.hamburger-btn.open .hamburger::after {\\n  transform: rotate(-45deg) translate(8vw, 8vw);\\n}\\n.menu {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.261);\\n  backdrop-filter: blur(10px);\\n  transform: translateY(-215vh);\\n  transition: all 0.5s ease-in-out;\\n  z-index: 1;\\n}\\n.menu.open {\\n  transform: translateY(0);\\n}\\n.mobile-menu-items {\\n  width: 100%;\\n  height: 20%;\\n  padding-top: 30vh;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.mobile-menu-link {\\n  width: 100%;\\n  text-align: center;\\n  margin: 5vh 0 5vh 0;\\n  font-size: 5vw;\\n  opacity: 0;\\n  transition: all 0.7s ease;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none;;\\n}\\n\\n.mobile-menu-link:hover:after {\\n  transform: scaleX(1);\\n  transform-origin: bottom left;\\n}\\n.mobile-menu-link.appear {\\n  transform: scale(1.1);\\n  opacity: 1;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: white;\\n    background: black;\\n  }\\n}\\n@media only screen and (min-width: 768px) {\\n  .hamburger {\\n    display: none;\\n  }\\n  .menu {\\n    display: none;\\n  }\\n  .hamburger-btn {\\n    display: none;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxlQUFlLGNBQWMsMEJBQTBCLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsY0FBYyxlQUFlLEdBQUcsb0JBQW9CLHVCQUF1QixhQUFhLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUNBQXFDLGVBQWUsR0FBRyxjQUFjLGdCQUFnQixtQkFBbUIsbUNBQW1DLHdCQUF3QixxQ0FBcUMsR0FBRywwQ0FBMEMsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsbUJBQW1CLG1DQUFtQyx3QkFBd0IscUNBQXFDLEdBQUcsc0JBQXNCLGdDQUFnQyxHQUFHLHFCQUFxQiwrQkFBK0IsR0FBRyxrQ0FBa0MsaUNBQWlDLDRCQUE0QixxQkFBcUIsR0FBRywwQ0FBMEMsa0RBQWtELEdBQUcseUNBQXlDLGtEQUFrRCxHQUFHLFNBQVMsZ0JBQWdCLGlCQUFpQixvQkFBb0IsV0FBVyxZQUFZLDJDQUEyQyx3Q0FBd0Msd0NBQXdDLGtDQUFrQyxxQ0FBcUMsZUFBZSxHQUFHLGNBQWMsNkJBQTZCLEdBQUcsc0JBQXNCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLGtCQUFrQixvQkFBb0IsR0FBRyxxQkFBcUIsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGVBQWUsOEJBQThCLG9CQUFvQixrQ0FBa0Msa0JBQWtCLEdBQUcsbUNBQW1DLHlCQUF5QixrQ0FBa0MsR0FBRyw0QkFBNEIsMEJBQTBCLGVBQWUsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxVQUFVLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLDZDQUE2QyxnQkFBZ0Isb0JBQW9CLEtBQUssV0FBVyxvQkFBb0IsS0FBSyxvQkFBb0Isb0JBQW9CLEtBQUssR0FBRyxPQUFPLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxzQ0FBc0MsZUFBZSxjQUFjLDBCQUEwQixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLGNBQWMsZUFBZSxHQUFHLG9CQUFvQix1QkFBdUIsYUFBYSxlQUFlLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFDQUFxQyxlQUFlLEdBQUcsY0FBYyxnQkFBZ0IsbUJBQW1CLG1DQUFtQyx3QkFBd0IscUNBQXFDLEdBQUcsMENBQTBDLGdCQUFnQix1QkFBdUIsZ0JBQWdCLG1CQUFtQixtQ0FBbUMsd0JBQXdCLHFDQUFxQyxHQUFHLHNCQUFzQixnQ0FBZ0MsR0FBRyxxQkFBcUIsK0JBQStCLEdBQUcsa0NBQWtDLGlDQUFpQyw0QkFBNEIscUJBQXFCLEdBQUcsMENBQTBDLGtEQUFrRCxHQUFHLHlDQUF5QyxrREFBa0QsR0FBRyxTQUFTLGdCQUFnQixpQkFBaUIsb0JBQW9CLFdBQVcsWUFBWSwyQ0FBMkMsZ0NBQWdDLGtDQUFrQyxxQ0FBcUMsZUFBZSxHQUFHLGNBQWMsNkJBQTZCLEdBQUcsc0JBQXNCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLGtCQUFrQixvQkFBb0IsR0FBRyxxQkFBcUIsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGVBQWUsOEJBQThCLG9CQUFvQixrQ0FBa0Msa0JBQWtCLEdBQUcsbUNBQW1DLHlCQUF5QixrQ0FBa0MsR0FBRyw0QkFBNEIsMEJBQTBCLGVBQWUsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxVQUFVLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLDZDQUE2QyxnQkFBZ0Isb0JBQW9CLEtBQUssV0FBVyxvQkFBb0IsS0FBSyxvQkFBb0Isb0JBQW9CLEtBQUssR0FBRyxtQkFBbUI7QUFDejJMO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzkwYTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IEl0YWxpYW5hO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDV2dztcXG4gIHJpZ2h0OiA0dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBoZWlnaHQ6IDE1dnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5oYW1idXJnZXIge1xcbiAgd2lkdGg6IDExdnc7XFxuICBoZWlnaHQ6IDAuNzd2dztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmhhbWJ1cmdlcjo6YmVmb3JlLFxcbi5oYW1idXJnZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDExdnc7XFxuICBoZWlnaHQ6IDAuNzd2dztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmhhbWJ1cmdlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3Z3KTtcXG59XFxuLmhhbWJ1cmdlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDN2dyk7XFxufVxcbi5oYW1idXJnZXItYnRuLm9wZW4gLmhhbWJ1cmdlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExdncpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uaGFtYnVyZ2VyLWJ0bi5vcGVuIC5oYW1idXJnZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDh2dywgLTh2dyk7XFxufVxcbi5oYW1idXJnZXItYnRuLm9wZW4gLmhhbWJ1cmdlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoOHZ3LCA4dncpO1xcbn1cXG4ubWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYxKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxNXZoKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMTtcXG59XFxuLm1lbnUub3BlbiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcbi5tb2JpbGUtbWVudS1pdGVtcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubW9iaWxlLW1lbnUtbGluayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNXZoIDAgNXZoIDA7XFxuICBmb250LXNpemU6IDV2dztcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7O1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUtbGluazpob3ZlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG4ubW9iaWxlLW1lbnUtbGluay5hcHBlYXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5oYW1idXJnZXItYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1Asc0NBQXNDO0VBQ3RDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IEl0YWxpYW5hO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDV2dztcXG4gIHJpZ2h0OiA0dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBoZWlnaHQ6IDE1dnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5oYW1idXJnZXIge1xcbiAgd2lkdGg6IDExdnc7XFxuICBoZWlnaHQ6IDAuNzd2dztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmhhbWJ1cmdlcjo6YmVmb3JlLFxcbi5oYW1idXJnZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDExdnc7XFxuICBoZWlnaHQ6IDAuNzd2dztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLmhhbWJ1cmdlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3Z3KTtcXG59XFxuLmhhbWJ1cmdlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDN2dyk7XFxufVxcbi5oYW1idXJnZXItYnRuLm9wZW4gLmhhbWJ1cmdlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExdncpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uaGFtYnVyZ2VyLWJ0bi5vcGVuIC5oYW1idXJnZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDh2dywgLTh2dyk7XFxufVxcbi5oYW1idXJnZXItYnRuLm9wZW4gLmhhbWJ1cmdlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoOHZ3LCA4dncpO1xcbn1cXG4ubWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYxKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjE1dmgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubWVudS5vcGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuLm1vYmlsZS1tZW51LWl0ZW1zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBwYWRkaW5nLXRvcDogMzB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tb2JpbGUtbWVudS1saW5rIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1dmggMCA1dmggMDtcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTs7XFxufVxcblxcbi5tb2JpbGUtbWVudS1saW5rOmhvdmVyOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcbi5tb2JpbGUtbWVudS1saW5rLmFwcGVhciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBodG1sIHtcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhhbWJ1cmdlci1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});