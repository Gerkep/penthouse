"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buy",{

/***/ "./pages/buy.tsx":
/*!***********************!*\
  !*** ./pages/buy.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _public_img_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/background.png */ \"./public/img/background.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.tsx\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 0;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 70vw;\\n    height: 35vw;\\n    background-color: black;\\n    position: relative;\\n    margin: 0 auto;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), openPromotionModal = ref[0], setOpenPromotionModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), mobile = ref1[0], setMobile = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (window.innerWidth <= 768) {\n            setMobile(true);\n        }\n    }, []);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var handleScroll = function() {\n        var ref;\n        (ref = ref2.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    top: \"0\",\n                    left: \"0\",\n                    width: \"100%\",\n                    zIndex: \"0\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Background, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            alt: \"background\",\n                            layout: \"fill\",\n                            objectFit: \"cover\",\n                            src: _public_img_background_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onContactClick: handleScroll,\n                        onPromotionClick: function() {\n                            return setOpenPromotionModal(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BuyContainer, {}, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"x+2fXzxRqEFhoy2nFOA45ZdlZBc=\");\n_c = Home;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c1 = Background;\nvar BuyContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c2 = BuyContainer;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Background\");\n$RefreshReg$(_c2, \"BuyContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9idXkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRztBQUNpQjtBQUM1QjtBQUNxQjtBQUVSO0FBRTdCLFNBQVNRLElBQUksR0FBRzs7SUFFN0IsSUFBb0RGLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNURHLGtCQUFrQixHQUEyQkgsR0FBZSxHQUExQyxFQUFFSSxxQkFBcUIsR0FBSUosR0FBZSxHQUFuQjtJQUVoRCxJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ0ssTUFBTSxHQUFlTCxJQUFlLEdBQTlCLEVBQUVNLFNBQVMsR0FBSU4sSUFBZSxHQUFuQjtJQUV4QkYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBR1MsTUFBTSxDQUFDQyxVQUFVLElBQUksR0FBRyxFQUFDO1lBQzFCRixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFNRyxJQUFHLEdBQUdWLDZDQUFNLENBQXdCLElBQUksQ0FBQztJQUMvQyxJQUFNVyxZQUFZLEdBQUcsV0FBTTtZQUN6QkQsR0FBVztRQUFYQSxDQUFBQSxHQUFXLEdBQVhBLElBQUcsQ0FBQ0UsT0FBTyxjQUFYRixHQUFXLFdBQWdCLEdBQTNCQSxLQUFBQSxDQUEyQixHQUEzQkEsR0FBVyxDQUFFRyxjQUFjLENBQUM7WUFBQ0MsUUFBUSxFQUFFLFFBQVE7WUFBRUMsS0FBSyxFQUFFLE9BQU87U0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ2IsMkRBQU87Ozs7b0JBQUc7MEJBQ1gsOERBQUNjLEtBQUc7Z0JBQUNDLEtBQUssRUFBRTtvQkFBQ0MsUUFBUSxFQUFFLE9BQU87b0JBQUVDLEdBQUcsRUFBRSxHQUFHO29CQUFFQyxJQUFJLEVBQUUsR0FBRztvQkFBRUMsS0FBSyxFQUFFLE1BQU07b0JBQUVDLE1BQU0sRUFBRSxHQUFHO2lCQUFDOztrQ0FDaEYsOERBQUNDLFVBQVU7a0NBQ1AsNEVBQUN6QixtREFBSzs0QkFBQzBCLEdBQUcsRUFBQyxZQUFZOzRCQUFDQyxNQUFNLEVBQUMsTUFBTTs0QkFBQ0MsU0FBUyxFQUFDLE9BQU87NEJBQUVDLEdBQUcsRUFBRTlCLGtFQUFlOzs7OztnQ0FBVTs7Ozs7NEJBQzlFO2tDQUNiLDhEQUFDRCwwREFBTTt3QkFBQ2dDLGNBQWMsRUFBRWpCLFlBQVk7d0JBQUVrQixnQkFBZ0IsRUFBRTttQ0FBTXhCLHFCQUFxQixDQUFDLElBQUksQ0FBQzt5QkFBQTs7Ozs7NEJBQUc7a0NBQzVGLDhEQUFDeUIsWUFBWTs7Ozs0QkFFRTs7Ozs7O29CQUNUOztvQkFDTCxDQUNKO0FBQ0gsQ0FBQztHQS9CdUIzQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpQzVCLElBQU1vQixVQUFVLEdBQUc1Qiw2REFBVSxtQkFPNUI7QUFQSzRCLE1BQUFBLFVBQVU7QUFTaEIsSUFBTU8sWUFBWSxHQUFHbkMsNkRBQVUsb0JBTTlCO0FBTkttQyxNQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2J1eS50c3g/MDNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IGtlbnpvQmFja2dyb3VuZCBmcm9tICcuLi9wdWJsaWMvaW1nL2JhY2tncm91bmQucG5nJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtvcGVuUHJvbW90aW9uTW9kYWwsIHNldE9wZW5Qcm9tb3Rpb25Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW21vYmlsZSwgc2V0TW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCl7XG4gICAgICBzZXRNb2JpbGUodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSlcbiAgXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExvYWRpbmcgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IFwiMFwiLCBsZWZ0OiBcIjBcIiwgd2lkdGg6IFwiMTAwJVwiLCB6SW5kZXg6IFwiMFwifX0+XG4gICAgICA8QmFja2dyb3VuZD5cbiAgICAgICAgICA8SW1hZ2UgYWx0PVwiYmFja2dyb3VuZFwiIGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb3ZlcicgIHNyYz17a2Vuem9CYWNrZ3JvdW5kfT48L0ltYWdlPiBcbiAgICAgIDwvQmFja2dyb3VuZD5cbiAgICAgIDxIZWFkZXIgb25Db250YWN0Q2xpY2s9e2hhbmRsZVNjcm9sbH0gb25Qcm9tb3Rpb25DbGljaz17KCkgPT4gc2V0T3BlblByb21vdGlvbk1vZGFsKHRydWUpfS8+XG4gICAgICA8QnV5Q29udGFpbmVyPlxuXG4gICAgICA8L0J1eUNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG5gXG5cbmNvbnN0IEJ1eUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDcwdnc7XG4gICAgaGVpZ2h0OiAzNXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiSGVhZGVyIiwia2Vuem9CYWNrZ3JvdW5kIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJIb21lIiwib3BlblByb21vdGlvbk1vZGFsIiwic2V0T3BlblByb21vdGlvbk1vZGFsIiwibW9iaWxlIiwic2V0TW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlZiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiekluZGV4IiwiQmFja2dyb3VuZCIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInNyYyIsIm9uQ29udGFjdENsaWNrIiwib25Qcm9tb3Rpb25DbGljayIsIkJ1eUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/buy.tsx\n"));

/***/ })

});