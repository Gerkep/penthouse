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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_citylogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/citylogo.png */ \"./public/img/citylogo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    padding: 7vw 3vw 7vw 3vw;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    z-index: 100;\\n    display: flex;\\n    backdrop-filter: blur(10px);\\n    align-items: center;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1.5vw 2.5vw 1.5vw 2.5vw;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 55vw;\\n    height: 15vw;\\n    position: relative;\\n    @media only screen and (min-width: 768px) {\\n        width: 20vw;\\n        height: 4.5vw;\\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 90vw;\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    justify-content: end;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1vw 5vw 1vw 5vw;\\n        border-radius: 5px;\\n        background-color: black;\\n        border: none;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    @media only screen and (min-width: 768px) {\\n        margin: 0 7vw 0 0vw;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 12vw;\\n    height: 12vw;\\n    margin-right: 4vw;\\n    @media only screen and (min-width: 768px) {\\n        display: none;\\n    }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { onPromotionClick  } = param;\n    _s();\n    const [menuOpened, setMenuOpened] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const clickHamburger = ()=>{\n        const button = document.getElementById(\"hamburger-btn\");\n        const menu = document.getElementById(\"menu\");\n        const links = document.querySelectorAll(\".mobile-menu-link\");\n        if (!menuOpened) {\n            button === null || button === void 0 ? void 0 : button.classList.add(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.add(\"open\");\n            links.forEach((link)=>{\n                link.classList.add(\"appear\");\n            });\n            setMenuOpened(true);\n        } else {\n            button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n            links.forEach((link)=>{\n                link.classList.remove(\"appear\");\n            });\n            setMenuOpened(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    alt: \"background\",\n                    layout: \"fill\",\n                    objectFit: \"contain\",\n                    src: _public_img_citylogo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navbar, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().roboto),\n                        children: \"Learn more\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().roboto),\n                        children: \"Contact us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarButton, {\n                        onClick: onPromotionClick,\n                        children: \"Promote & earn\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: clickHamburger,\n                        className: \"hamburger-btn\",\n                        id: \"hamburger-btn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hamburger\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        id: \"menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mobile-menu-items\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"mobile-menu-link\",\n                                    onClick: onPromotionClick,\n                                    children: \"Share and earn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"mobile-menu-link\",\n                                    children: \"Learn more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"mobile-menu-link\",\n                                    id: \"link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                        children: \"Contact us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"n+B8Ah8O9PuWWo7Lun9jnbUccP4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = HeaderContainer;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = Logo;\nconst Navbar = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c3 = Navbar;\nconst NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button(_templateObject3());\n_c4 = NavbarButton;\nconst NavbarLink = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a(_templateObject4());\n_c5 = NavbarLink;\nconst Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HeaderContainer\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"Navbar\");\n$RefreshReg$(_c4, \"NavbarButton\");\n$RefreshReg$(_c5, \"NavbarLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNjO0FBQ3RCO0FBQ2dCO0FBRWQ7QUFFakMsTUFBTUssU0FBUyxTQUE2QjtRQUE1QixFQUFDQyxpQkFBZ0IsRUFBTTs7SUFDbkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTUssaUJBQWlCLElBQU07UUFDekIsTUFBTUMsU0FBU0MsU0FBU0MsY0FBYyxDQUFDO1FBQ3ZDLE1BQU1DLE9BQU9GLFNBQVNDLGNBQWMsQ0FBQztRQUNyQyxNQUFNRSxRQUFRSCxTQUFTSSxnQkFBZ0IsQ0FBQztRQUN4QyxJQUFHLENBQUNSLFlBQVc7WUFDWEcsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPO1lBQzdCSixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU87WUFDM0JILE1BQU1JLE9BQU8sQ0FBQ0MsQ0FBQUEsT0FBUTtnQkFDbEJBLEtBQUtILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3ZCO1lBQ0FULGNBQWMsSUFBSTtRQUN0QixPQUFLO1lBQ0RFLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUU0sU0FBUyxDQUFDSSxNQUFNLENBQUMsT0FBTztZQUNoQ1AsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxPQUFPO1lBQzlCTixNQUFNSSxPQUFPLENBQUNDLENBQUFBLE9BQVE7Z0JBQ2xCQSxLQUFLSCxTQUFTLENBQUNJLE1BQU0sQ0FBQztZQUMxQjtZQUNBWixjQUFjLEtBQUs7UUFDdkIsQ0FBQztJQUNMO0lBQ0EscUJBQ0ksOERBQUNhOzswQkFDRyw4REFBQ0M7MEJBQ0csNEVBQUNwQixtREFBS0E7b0JBQUNxQixLQUFJO29CQUFhQyxRQUFPO29CQUFPQyxXQUFVO29CQUFXQyxLQUFLekIsZ0VBQVdBOzs7Ozs7Ozs7OzswQkFFL0UsOERBQUMwQjs7a0NBQ0csOERBQUNDO3dCQUFXQyxXQUFXMUIsdUVBQWE7a0NBQUU7Ozs7OztrQ0FDdEMsOERBQUN5Qjt3QkFBV0MsV0FBVzFCLHVFQUFhO2tDQUFFOzs7Ozs7a0NBQ3RDLDhEQUFDNEI7d0JBQWFDLFNBQVMxQjtrQ0FBa0I7Ozs7OztrQ0FDekMsOERBQUMyQjt3QkFBSUQsU0FBU3ZCO3dCQUFnQm9CLFdBQVU7d0JBQWdCSyxJQUFHO2tDQUMzRCw0RUFBQ0Q7NEJBQUlKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDSTt3QkFBSUosV0FBVTt3QkFBT0ssSUFBRztrQ0FDekIsNEVBQUNEOzRCQUFJSixXQUFVOzs4Q0FDWCw4REFBQ25CO29DQUFPbUIsV0FBVTtvQ0FBbUJHLFNBQVMxQjs4Q0FBa0I7Ozs7Ozs4Q0FDaEUsOERBQUM2QjtvQ0FBRUMsTUFBSztvQ0FBSVAsV0FBVTs4Q0FBbUI7Ozs7Ozs4Q0FDekMsOERBQUNRO29DQUFFUixXQUFVO29DQUFtQkssSUFBRzs4Q0FDL0IsNEVBQUNJO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNCO0dBOUNNakM7S0FBQUE7QUFnRE4sK0RBQWVBLE1BQU1BLEVBQUM7QUFFdEIsTUFBTWdCLGtCQUFrQnJCLDZEQUFVO01BQTVCcUI7QUFlTixNQUFNQyxPQUFPdEIsNkRBQVU7TUFBakJzQjtBQVdOLE1BQU1LLFNBQVMzQiw2REFBVTtNQUFuQjJCO0FBUU4sTUFBTUksZUFBZS9CLGdFQUFhO01BQTVCK0I7QUFhTixNQUFNSCxhQUFhNUIsMkRBQVE7TUFBckI0QjtBQVVOLE1BQU1XLFlBQVl2Qyw2REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGtvbmtyZXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvaW1nL2NpdHlsb2dvLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKHtvblByb21vdGlvbkNsaWNrfTogYW55KSA9PiB7XG4gICAgY29uc3QgW21lbnVPcGVuZWQsIHNldE1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGNsaWNrSGFtYnVyZ2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlci1idG5cIik7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbWVudS1saW5rXCIpO1xuICAgICAgICBpZighbWVudU9wZW5lZCl7XG4gICAgICAgICAgICBidXR0b24/LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgbWVudT8uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRNZW51T3BlbmVkKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICBtZW51Py5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYXBwZWFyXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldE1lbnVPcGVuZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiYmFja2dyb3VuZFwiIGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb250YWluJyAgc3JjPXtrb25rcmV0TG9nb30+PC9JbWFnZT4gXG4gICAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgICA8TmF2YmFyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXJMaW5rIGNsYXNzTmFtZT17c3R5bGVzLnJvYm90b30+TGVhcm4gbW9yZTwvTmF2YmFyTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyTGluayBjbGFzc05hbWU9e3N0eWxlcy5yb2JvdG99PkNvbnRhY3QgdXM8L05hdmJhckxpbms+XG4gICAgICAgICAgICAgICAgPE5hdmJhckJ1dHRvbiBvbkNsaWNrPXtvblByb21vdGlvbkNsaWNrfT5Qcm9tb3RlICYgZWFybjwvTmF2YmFyQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Y2xpY2tIYW1idXJnZXJ9IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1idG5cIiBpZD1cImhhbWJ1cmdlci1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIGlkPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCIgb25DbGljaz17b25Qcm9tb3Rpb25DbGlja30+U2hhcmUgYW5kIGVhcm48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCI+TGVhcm4gbW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbGlua1wiIGlkPVwibGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+Q29udGFjdCB1czwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDd2dyAzdncgN3Z3IDN2dztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAxLjV2dyAyLjV2dyAxLjV2dyAyLjV2dztcbiAgICB9XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1NXZ3O1xuICAgIGhlaWdodDogMTV2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgaGVpZ2h0OiA0LjV2dztcbiAgICB9XG5cbmBcblxuY29uc3QgTmF2YmFyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogOTB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuYFxuXG5jb25zdCBOYXZiYXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAxdncgNXZ3IDF2dyA1dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuYFxuXG5jb25zdCBOYXZiYXJMaW5rID0gc3R5bGVkLmFgXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbjogMCA3dncgMCAwdnc7XG4gICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbmBcblxuY29uc3QgSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTJ2dztcbiAgICBoZWlnaHQ6IDEydnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbmAiXSwibmFtZXMiOlsic3R5bGVkIiwia29ua3JldExvZ28iLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiSGVhZGVyIiwib25Qcm9tb3Rpb25DbGljayIsIm1lbnVPcGVuZWQiLCJzZXRNZW51T3BlbmVkIiwiY2xpY2tIYW1idXJnZXIiLCJidXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsImZvckVhY2giLCJsaW5rIiwicmVtb3ZlIiwiSGVhZGVyQ29udGFpbmVyIiwiTG9nbyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInNyYyIsIk5hdmJhciIsIk5hdmJhckxpbmsiLCJjbGFzc05hbWUiLCJyb2JvdG8iLCJOYXZiYXJCdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiaWQiLCJhIiwiaHJlZiIsInAiLCJiIiwiSGFtYnVyZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});