"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/konkretlogo.png */ \"./public/img/konkretlogo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    padding: 7vw 3vw 7vw 3vw;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    z-index: 100;\\n    display: flex;\\n    backdrop-filter: blur(10px);\\n    align-items: center;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1.5vw 2.5vw 1.5vw 2.5vw;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 55vw;\\n    height: 15vw;\\n    position: relative;\\n    @media only screen and (min-width: 768px) {\\n        width: 20vw;\\n        height: 4.5vw;\\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 90vw;\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    justify-content: end;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1vw 5vw 1vw 5vw;\\n        border-radius: 5px;\\n        color: white;\\n        background-color: black;\\n        border: none;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    color: white;\\n    @media only screen and (min-width: 768px) {\\n        margin: 0 7vw 0 0vw;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        border: none;\\n        background-color: transparent;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { onPromotionClick , onLearnMoreClick  } = param;\n    _s();\n    const [menuOpened, setMenuOpened] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const clickHamburger = ()=>{\n        const button = document.getElementById(\"hamburger-btn\");\n        const menu = document.getElementById(\"menu\");\n        const links = document.querySelectorAll(\".mobile-menu-link\");\n        if (!menuOpened) {\n            button === null || button === void 0 ? void 0 : button.classList.add(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.add(\"open\");\n            links.forEach((link)=>{\n                link.classList.add(\"appear\");\n            });\n            setMenuOpened(true);\n        } else {\n            button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n            links.forEach((link)=>{\n                link.classList.remove(\"appear\");\n            });\n            setMenuOpened(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    alt: \"background\",\n                    layout: \"fill\",\n                    objectFit: \"contain\",\n                    src: _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navbar, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().roboto),\n                        children: \"Learn more\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().roboto),\n                        children: \"Contact us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarButton, {\n                        onClick: onPromotionClick,\n                        children: \"Promote & earn\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: clickHamburger,\n                        className: \"hamburger-btn\",\n                        id: \"hamburger-btn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hamburger\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        id: \"menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mobile-menu-items\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"mobile-menu-link\",\n                                    onClick: onPromotionClick,\n                                    children: \"Share and earn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"mobile-menu-link\",\n                                    children: \"Learn more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"mobile-menu-link\",\n                                    id: \"link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                        children: \"Contact us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"n+B8Ah8O9PuWWo7Lun9jnbUccP4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = HeaderContainer;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = Logo;\nconst Navbar = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c3 = Navbar;\nconst NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject3());\n_c4 = NavbarButton;\nconst NavbarLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject4());\n_c5 = NavbarLink;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HeaderContainer\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"Navbar\");\n$RefreshReg$(_c4, \"NavbarButton\");\n$RefreshReg$(_c5, \"NavbarLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNpQjtBQUN6QjtBQUNnQjtBQUNkO0FBRWpDLE1BQU1LLFNBQVMsU0FBK0M7UUFBOUMsRUFBQ0MsaUJBQWdCLEVBQUVDLGlCQUFnQixFQUFNOztJQUNyRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxNQUFNTSxpQkFBaUIsSUFBTTtRQUN6QixNQUFNQyxTQUFTQyxTQUFTQyxjQUFjLENBQUM7UUFDdkMsTUFBTUMsT0FBT0YsU0FBU0MsY0FBYyxDQUFDO1FBQ3JDLE1BQU1FLFFBQVFILFNBQVNJLGdCQUFnQixDQUFDO1FBQ3hDLElBQUcsQ0FBQ1IsWUFBVztZQUNYRyxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU87WUFDN0JKLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTztZQUMzQkgsTUFBTUksT0FBTyxDQUFDQyxDQUFBQSxPQUFRO2dCQUNsQkEsS0FBS0gsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDdkI7WUFDQVQsY0FBYyxJQUFJO1FBQ3RCLE9BQUs7WUFDREUsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRTSxTQUFTLENBQUNJLE1BQU0sQ0FBQyxPQUFPO1lBQ2hDUCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU87WUFDOUJOLE1BQU1JLE9BQU8sQ0FBQ0MsQ0FBQUEsT0FBUTtnQkFDbEJBLEtBQUtILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO1lBQzFCO1lBQ0FaLGNBQWMsS0FBSztRQUN2QixDQUFDO0lBQ0w7SUFDQSxxQkFDSSw4REFBQ2E7OzBCQUNHLDhEQUFDQzswQkFDRyw0RUFBQ3JCLG1EQUFLQTtvQkFBQ3NCLEtBQUk7b0JBQWFDLFFBQU87b0JBQU9DLFdBQVU7b0JBQVdDLEtBQUsxQixtRUFBV0E7Ozs7Ozs7Ozs7OzBCQUUvRSw4REFBQzJCOztrQ0FDRyw4REFBQ0M7d0JBQVlDLFdBQVczQix1RUFBYTtrQ0FBRTs7Ozs7O2tDQUN2Qyw4REFBQzBCO3dCQUFXQyxXQUFXM0IsdUVBQWE7a0NBQUU7Ozs7OztrQ0FDdEMsOERBQUM2Qjt3QkFBYUMsU0FBUzNCO2tDQUFrQjs7Ozs7O2tDQUN6Qyw4REFBQzRCO3dCQUFJRCxTQUFTdkI7d0JBQWdCb0IsV0FBVTt3QkFBZ0JLLElBQUc7a0NBQzNELDRFQUFDRDs0QkFBSUosV0FBVTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNJO3dCQUFJSixXQUFVO3dCQUFPSyxJQUFHO2tDQUN6Qiw0RUFBQ0Q7NEJBQUlKLFdBQVU7OzhDQUNYLDhEQUFDbkI7b0NBQU9tQixXQUFVO29DQUFtQkcsU0FBUzNCOzhDQUFrQjs7Ozs7OzhDQUNoRSw4REFBQzhCO29DQUFFQyxNQUFLO29DQUFJUCxXQUFVOzhDQUFtQjs7Ozs7OzhDQUN6Qyw4REFBQ1E7b0NBQUVSLFdBQVU7b0NBQW1CSyxJQUFHOzhDQUMvQiw0RUFBQ0k7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0EvQ01sQztLQUFBQTtBQWlETiwrREFBZUEsTUFBTUEsRUFBQztBQUV0QixNQUFNaUIsa0JBQWtCdEIsNkRBQVU7TUFBNUJzQjtBQWVOLE1BQU1DLE9BQU92Qiw2REFBVTtNQUFqQnVCO0FBV04sTUFBTUssU0FBUzVCLDZEQUFVO01BQW5CNEI7QUFRTixNQUFNSSxlQUFlaEMsZ0VBQWE7TUFBNUJnQztBQWNOLE1BQU1ILGFBQWE3QixnRUFBYTtNQUExQjZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQga29ua3JldExvZ28gZnJvbSBcIi4uL3B1YmxpYy9pbWcva29ua3JldGxvZ28ucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoe29uUHJvbW90aW9uQ2xpY2ssIG9uTGVhcm5Nb3JlQ2xpY2t9OiBhbnkpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW5lZCwgc2V0TWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBjbGlja0hhbWJ1cmdlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXItYnRuXCIpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9iaWxlLW1lbnUtbGlua1wiKTtcbiAgICAgICAgaWYoIW1lbnVPcGVuZWQpe1xuICAgICAgICAgICAgYnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIG1lbnU/LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0TWVudU9wZW5lZCh0cnVlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidXR0b24/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgbWVudT8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFwcGVhclwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRNZW51T3BlbmVkKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImJhY2tncm91bmRcIiBsYXlvdXQ9J2ZpbGwnIG9iamVjdEZpdD0nY29udGFpbicgIHNyYz17a29ua3JldExvZ299PjwvSW1hZ2U+IFxuICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgPE5hdmJhcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyTGluayAgY2xhc3NOYW1lPXtzdHlsZXMucm9ib3RvfT5MZWFybiBtb3JlPC9OYXZiYXJMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZiYXJMaW5rIGNsYXNzTmFtZT17c3R5bGVzLnJvYm90b30+Q29udGFjdCB1czwvTmF2YmFyTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyQnV0dG9uIG9uQ2xpY2s9e29uUHJvbW90aW9uQ2xpY2t9PlByb21vdGUgJiBlYXJuPC9OYXZiYXJCdXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtjbGlja0hhbWJ1cmdlcn0gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJ0blwiIGlkPVwiaGFtYnVyZ2VyLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCIgaWQ9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWxpbmtcIiBvbkNsaWNrPXtvblByb21vdGlvbkNsaWNrfT5TaGFyZSBhbmQgZWFybjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWxpbmtcIj5MZWFybiBtb3JlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCIgaWQ9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5Db250YWN0IHVzPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogN3Z3IDN2dyA3dncgM3Z3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDEuNXZ3IDIuNXZ3IDEuNXZ3IDIuNXZ3O1xuICAgIH1cbmBcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDU1dnc7XG4gICAgaGVpZ2h0OiAxNXZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICBoZWlnaHQ6IDQuNXZ3O1xuICAgIH1cblxuYFxuXG5jb25zdCBOYXZiYXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG5gXG5cbmNvbnN0IE5hdmJhckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDF2dyA1dncgMXZ3IDV2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbmBcblxuY29uc3QgTmF2YmFyTGluayA9IHN0eWxlZC5idXR0b25gXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW46IDAgN3Z3IDAgMHZ3O1xuICAgICAgICBmb250LXNpemU6IDF2dztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsImtvbmtyZXRMb2dvIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIm9uUHJvbW90aW9uQ2xpY2siLCJvbkxlYXJuTW9yZUNsaWNrIiwibWVudU9wZW5lZCIsInNldE1lbnVPcGVuZWQiLCJjbGlja0hhbWJ1cmdlciIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImxpbmsiLCJyZW1vdmUiLCJIZWFkZXJDb250YWluZXIiLCJMb2dvIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwiTmF2YmFyIiwiTmF2YmFyTGluayIsImNsYXNzTmFtZSIsInJvYm90byIsIk5hdmJhckJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJpZCIsImEiLCJocmVmIiwicCIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});