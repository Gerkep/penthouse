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

/***/ "./components/Loading.tsx":
/*!********************************!*\
  !*** ./components/Loading.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loading; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    100% {\\n        transform: rotate(1turn);\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    z-index: 101;\\n    background-color: black;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n        width: 56px;\\n        height: 56px;\\n        border-radius: 50%;\\n        background: radial-gradient(farthest-side,#e6be8a 94%,#0000) top/9px 9px no-repeat,\\n            conic-gradient(#0000 30%,#e6be8a);\\n        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);\\n        animation: \",\n        \" 1s infinite linear;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Loading() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref[0], setLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleStart = function(url) {\n            return url !== router.asPath && setLoading(true);\n        };\n        var handleComplete = function(url) {\n            return url === router.asPath && setLoading(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return function() {\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Spinner, {}, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Loading, \"cBnK2EO2rufoGdSWPrbUt0T4qxg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Loading;\nvar spinner = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(_templateObject());\nvar LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c1 = LoadingContainer;\nvar Spinner = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2(), spinner);\n_c2 = Spinner;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"LoadingContainer\");\n$RefreshReg$(_c2, \"Spinner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDVTtBQUV2QyxTQUFTSyxPQUFPLEdBQUc7O0lBQzlCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQixJQUE4QkUsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q0ssT0FBTyxHQUFnQkwsR0FBZSxHQUEvQixFQUFFTSxVQUFVLEdBQUlOLEdBQWUsR0FBbkI7SUFFMUJELGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1RLFdBQVcsR0FBRyxTQUFDQyxHQUFXO21CQUFLLEdBQUksS0FBS0osTUFBTSxDQUFDSyxNQUFNLElBQUtILFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FBQTtRQUNoRixJQUFNSSxjQUFjLEdBQUcsU0FBQ0YsR0FBVTttQkFBSyxHQUFJLEtBQUtKLE1BQU0sQ0FBQ0ssTUFBTSxJQUFLSCxVQUFVLENBQUMsS0FBSyxDQUFDO1NBQUE7UUFFbkZGLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVMLFdBQVcsQ0FBQztRQUNqREgsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUYsY0FBYyxDQUFDO1FBQ3ZETixNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFRixjQUFjLENBQUM7UUFFcEQsT0FBTyxXQUFNO1lBQ1ROLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLEVBQUVOLFdBQVcsQ0FBQztZQUNsREgsTUFBTSxDQUFDTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUgsY0FBYyxDQUFDO1lBQ3hETixNQUFNLENBQUNPLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixFQUFFSCxjQUFjLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLHFCQUNBLDhEQUFDSSxLQUFHO2tCQUNDVCxPQUFPLGtCQUNKLDhEQUFDVSxnQkFBZ0I7c0JBQ2IsNEVBQUNDLE9BQU87Ozs7b0JBQVc7Ozs7O2dCQUNKOzs7OztZQUVyQixDQUNKO0FBQ04sQ0FBQztHQTdCdUJiLE9BQU87O1FBQ1pMLGtEQUFTOzs7QUFESkssS0FBQUEsT0FBTztBQThCL0IsSUFBTWMsT0FBTyxHQUFHZiw0REFBUyxtQkFJeEI7QUFFRCxJQUFNYSxnQkFBZ0IsR0FBR2QsNkRBQVUsb0JBV2xDO0FBWEtjLE1BQUFBLGdCQUFnQjtBQWF0QixJQUFNQyxPQUFPLEdBQUdmLDZEQUFVLHFCQU9MZ0IsT0FBTyxDQUMzQjtBQVJLRCxNQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9hZGluZy50c3g/MTEwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVTdGFydCA9ICh1cmw6IHN0cmluZykgPT4gKHVybCAhPT0gcm91dGVyLmFzUGF0aCkgJiYgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAodXJsOnN0cmluZykgPT4gKHVybCA9PT0gcm91dGVyLmFzUGF0aCkgJiYgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KVxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSlcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydClcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gIChcbiAgICA8ZGl2PlxuICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgPExvYWRpbmdDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxuICAgICAgICAgICAgPC9Mb2FkaW5nQ29udGFpbmVyPlxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gICAgKTtcbn1cbmNvbnN0IHNwaW5uZXIgPSBrZXlmcmFtZXNgXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgICB9XG5gXG5cbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUsI2U2YmU4YSA5NCUsIzAwMDApIHRvcC85cHggOXB4IG5vLXJlcGVhdCxcbiAgICAgICAgICAgIGNvbmljLWdyYWRpZW50KCMwMDAwIDMwJSwjZTZiZThhKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSwjMDAwMCBjYWxjKDEwMCUgLSA5cHgpLCMwMDAgMCk7XG4gICAgICAgIGFuaW1hdGlvbjogJHtzcGlubmVyfSAxcyBpbmZpbml0ZSBsaW5lYXI7XG5gIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiTG9hZGluZyIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3RhcnQiLCJ1cmwiLCJhc1BhdGgiLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZGl2IiwiTG9hZGluZ0NvbnRhaW5lciIsIlNwaW5uZXIiLCJzcGlubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Loading.tsx\n"));

/***/ })

});