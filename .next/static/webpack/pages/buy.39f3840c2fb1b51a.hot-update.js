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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _public_img_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/background.png */ \"./public/img/background.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.tsx\");\n/* harmony import */ var _public_img_kenzoNFT_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img/kenzoNFT.jpg */ \"./public/img/kenzoNFT.jpg\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 0;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n    width: 75vw;\\n    height: 40vw;\\n    padding: 0 3vw 0 3vw;\\n    background-color: rgba(0, 0, 0, 0.75);\\n    position: relative;\\n    margin: 0 auto;\\n    margin-top: 10vw;\\n    border-radius: 10px;\\n    backdrop-filter: blur(5px);\\n    -webkit-backdrop-filter: blur(5px);\\n    display: grid; \\n    grid-template-columns: 1fr 1fr; \\n    grid-template-rows: 1fr; \\n    gap: 0px 0px; \\n    grid-template-areas: \\n      \". .\"; \\n'\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    overflow: hidden;\\n    border-radius: 10px;\\n    width: 35vw;\\n    height: 35vw;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    width: 100%;\\n    heiight: 100%;\\n    justify-content: end;\\n    align-items: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    padding: 3vw 0 3vw 0;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), openPromotionModal = ref[0], setOpenPromotionModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), mobile = ref1[0], setMobile = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (window.innerWidth <= 768) {\n            setMobile(true);\n        }\n    }, []);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    var handleScroll = function() {\n        var ref;\n        (ref = ref2.current) === null || ref === void 0 ? void 0 : ref.scrollIntoView({\n            behavior: \"smooth\",\n            block: \"start\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    top: \"0\",\n                    left: \"0\",\n                    width: \"100%\",\n                    zIndex: \"0\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Background, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            alt: \"background\",\n                            layout: \"fill\",\n                            objectFit: \"cover\",\n                            src: _public_img_background_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onContactClick: handleScroll,\n                        onPromotionClick: function() {\n                            return setOpenPromotionModal(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BuyContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FirstColumn, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SecondColumn, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NFTImageContainer, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        alt: \"background\",\n                                        layout: \"fill\",\n                                        objectFit: \"cover\",\n                                        src: _public_img_kenzoNFT_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/pages/buy.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"x+2fXzxRqEFhoy2nFOA45ZdlZBc=\");\n_c = Home;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c1 = Background;\nvar BuyContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1());\n_c2 = BuyContainer;\nvar NFTImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c3 = NFTImageContainer;\nvar SecondColumn = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c4 = SecondColumn;\nvar FirstColumn = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c5 = FirstColumn;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Background\");\n$RefreshReg$(_c2, \"BuyContainer\");\n$RefreshReg$(_c3, \"NFTImageContainer\");\n$RefreshReg$(_c4, \"SecondColumn\");\n$RefreshReg$(_c5, \"FirstColumn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFNRCxXQUFXLEdBQUdyQyw2REFBVSxvQkFFN0I7QUFGS3FDLE1BQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnV5LnRzeD8wM2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQga2Vuem9CYWNrZ3JvdW5kIGZyb20gJy4uL3B1YmxpYy9pbWcvYmFja2dyb3VuZC5wbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XG5pbXBvcnQgTkZUSW1hZ2UgZnJvbSBcIi4uL3B1YmxpYy9pbWcva2Vuem9ORlQuanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbb3BlblByb21vdGlvbk1vZGFsLCBzZXRPcGVuUHJvbW90aW9uTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFttb2JpbGUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njgpe1xuICAgICAgc2V0TW9iaWxlKHRydWUpO1xuICAgIH1cbiAgfSwgW10pXG4gIFxuICBjb25zdCByZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMb2FkaW5nIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjBcIiwgbGVmdDogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgekluZGV4OiBcIjBcIn19PlxuICAgICAgPEJhY2tncm91bmQ+XG4gICAgICAgICAgPEltYWdlIGFsdD1cImJhY2tncm91bmRcIiBsYXlvdXQ9J2ZpbGwnIG9iamVjdEZpdD0nY292ZXInICBzcmM9e2tlbnpvQmFja2dyb3VuZH0+PC9JbWFnZT4gXG4gICAgICA8L0JhY2tncm91bmQ+XG4gICAgICA8SGVhZGVyIG9uQ29udGFjdENsaWNrPXtoYW5kbGVTY3JvbGx9IG9uUHJvbW90aW9uQ2xpY2s9eygpID0+IHNldE9wZW5Qcm9tb3Rpb25Nb2RhbCh0cnVlKX0vPlxuICAgICAgPEJ1eUNvbnRhaW5lcj5cbiAgICAgICAgPEZpcnN0Q29sdW1uPlxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgPC9GaXJzdENvbHVtbj5cbiAgICAgICAgPFNlY29uZENvbHVtbj5cbiAgICAgICAgICAgIDxORlRJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiYmFja2dyb3VuZFwiIGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb3ZlcicgIHNyYz17TkZUSW1hZ2V9PjwvSW1hZ2U+IFxuICAgICAgICAgICAgPC9ORlRJbWFnZUNvbnRhaW5lcj4gICAgICBcbiAgICAgICAgPC9TZWNvbmRDb2x1bW4+ICAgIFxuICAgICAgPC9CdXlDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAwO1xuYFxuXG5jb25zdCBCdXlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA3NXZ3O1xuICAgIGhlaWdodDogNDB2dztcbiAgICBwYWRkaW5nOiAwIDN2dyAwIDN2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyBcbiAgICBnYXA6IDBweCAwcHg7IFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgXCIuIC5cIjsgXG5gXG5cbmNvbnN0IE5GVEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAzNXZ3O1xuICAgIGhlaWdodDogMzV2dztcbmBcblxuY29uc3QgU2Vjb25kQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgRmlyc3RDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDN2dyAwIDN2dyAwO1xuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkZXIiLCJrZW56b0JhY2tncm91bmQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTG9hZGluZyIsIk5GVEltYWdlIiwiSG9tZSIsIm9wZW5Qcm9tb3Rpb25Nb2RhbCIsInNldE9wZW5Qcm9tb3Rpb25Nb2RhbCIsIm1vYmlsZSIsInNldE1vYmlsZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWYiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZGl2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInpJbmRleCIsIkJhY2tncm91bmQiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJzcmMiLCJvbkNvbnRhY3RDbGljayIsIm9uUHJvbW90aW9uQ2xpY2siLCJCdXlDb250YWluZXIiLCJGaXJzdENvbHVtbiIsIlNlY29uZENvbHVtbiIsIk5GVEltYWdlQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/buy.tsx\n"));

/***/ })

});