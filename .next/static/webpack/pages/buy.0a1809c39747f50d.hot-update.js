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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Loading; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    z-index: 101;\\n    background-color: black;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n        width: 56px;\\n        height: 56px;\\n        border-radius: 50%;\\n        background: radial-gradient(farthest-side,#ffffff 94%,#0000) top/9px 9px no-repeat,\\n            conic-gradient(#0000 30%,#ffffff);\\n        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);\\n        animation: spinner-c7wet2 1s infinite linear;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n100% {\\n    transform: rotate(1turn);\\n }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Loading() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref[0], setLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleStart = function(url) {\n            return url !== router.asPath && setLoading(true);\n        };\n        var handleComplete = function(url) {\n            return url === router.asPath && setLoading(false);\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return function() {\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Spinner, {}, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Loading.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Loading, \"cBnK2EO2rufoGdSWPrbUt0T4qxg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Loading;\nvar LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c1 = LoadingContainer;\nvar Spinner = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\n_c2 = Spinner;\nvar spinner = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(_templateObject2());\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"LoadingContainer\");\n$RefreshReg$(_c2, \"Spinner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNVO0FBRXZDLFNBQVNLLE9BQU8sR0FBRzs7SUFDOUIsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBRTFCLElBQThCRSxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDSyxPQUFPLEdBQWdCTCxHQUFlLEdBQS9CLEVBQUVNLFVBQVUsR0FBSU4sR0FBZSxHQUFuQjtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTVEsV0FBVyxHQUFHLFNBQUNDLEdBQVc7bUJBQUssR0FBSSxLQUFLSixNQUFNLENBQUNLLE1BQU0sSUFBS0gsVUFBVSxDQUFDLElBQUksQ0FBQztTQUFBO1FBQ2hGLElBQU1JLGNBQWMsR0FBRyxTQUFDRixHQUFVO21CQUFLLEdBQUksS0FBS0osTUFBTSxDQUFDSyxNQUFNLElBQUtILFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FBQTtRQUVuRkYsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRUwsV0FBVyxDQUFDO1FBQ2pESCxNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFRixjQUFjLENBQUM7UUFDdkROLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVGLGNBQWMsQ0FBQztRQUVwRCxPQUFPLFdBQU07WUFDVE4sTUFBTSxDQUFDTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRU4sV0FBVyxDQUFDO1lBQ2xESCxNQUFNLENBQUNPLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHFCQUFxQixFQUFFSCxjQUFjLENBQUM7WUFDeEROLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLEVBQUVILGNBQWMsQ0FBQztRQUN6RCxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYscUJBQ0EsOERBQUNJLEtBQUc7a0JBQ0NULE9BQU8sa0JBQ0osOERBQUNVLGdCQUFnQjtzQkFDYiw0RUFBQ0MsT0FBTzs7OztvQkFBVzs7Ozs7Z0JBQ0o7Ozs7O1lBRXJCLENBQ0o7QUFDTixDQUFDO0dBN0J1QmIsT0FBTzs7UUFDWkwsa0RBQVM7OztBQURKSyxLQUFBQSxPQUFPO0FBK0IvQixJQUFNWSxnQkFBZ0IsR0FBR2QsNkRBQVUsbUJBV2xDO0FBWEtjLE1BQUFBLGdCQUFnQjtBQWF0QixJQUFNQyxPQUFPLEdBQUdmLDZEQUFVLG9CQVF6QjtBQVJLZSxNQUFBQSxPQUFPO0FBU2IsSUFBTUMsT0FBTyxHQUFHZiw0REFBUyxvQkFJeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nLnRzeD8xMTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKHVybDogc3RyaW5nKSA9PiAodXJsICE9PSByb3V0ZXIuYXNQYXRoKSAmJiBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICh1cmw6c3RyaW5nKSA9PiAodXJsID09PSByb3V0ZXIuYXNQYXRoKSAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSlcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KVxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSlcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAgKFxuICAgIDxkaXY+XG4gICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICA8TG9hZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lcj48L1NwaW5uZXI+XG4gICAgICAgICAgICA8L0xvYWRpbmdDb250YWluZXI+XG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxuICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlLCNmZmZmZmYgOTQlLCMwMDAwKSB0b3AvOXB4IDlweCBuby1yZXBlYXQsXG4gICAgICAgICAgICBjb25pYy1ncmFkaWVudCgjMDAwMCAzMCUsI2ZmZmZmZik7XG4gICAgICAgIC13ZWJraXQtbWFzazogcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUsIzAwMDAgY2FsYygxMDAlIC0gOXB4KSwjMDAwIDApO1xuICAgICAgICBhbmltYXRpb246IHNwaW5uZXItYzd3ZXQyIDFzIGluZmluaXRlIGxpbmVhcjtcbmBcbmNvbnN0IHNwaW5uZXIgPSBrZXlmcmFtZXNgXG4xMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XG4gfVxuYCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImtleWZyYW1lcyIsIkxvYWRpbmciLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN0YXJ0IiwidXJsIiwiYXNQYXRoIiwiaGFuZGxlQ29tcGxldGUiLCJldmVudHMiLCJvbiIsIm9mZiIsImRpdiIsIkxvYWRpbmdDb250YWluZXIiLCJTcGlubmVyIiwic3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Loading.tsx\n"));

/***/ })

});