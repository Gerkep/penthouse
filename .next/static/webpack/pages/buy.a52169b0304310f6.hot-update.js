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

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/konkretlogo.png */ \"./public/img/konkretlogo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n    width: 100%;\\n    padding: 7vw 3vw 7vw 3vw;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    z-index: 100;\\n    display: grid; \\n    grid-template-columns: 1.2fr 0.8fr; \\n    grid-template-rows: 1fr; \\n    gap: 0px 0px; \\n    grid-template-areas: \\n      \". .\"; \\n    backdrop-filter: blur(5px);\\n    -webkit-backdrop-filter: blur(5px);\\n    align-items: center;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1.5vw 2.5vw 1.5vw 0vw;\\n    }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 55vw;\\n    height: 15vw;\\n    position: relative;\\n    @media only screen and (min-width: 768px) {\\n        width: 20vw;\\n        height: 4.5vw;\\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    justify-content: end;\\n    -webkit-justify-content: end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1vw 5vw 1vw 5vw;\\n        border-radius: 5px;\\n        color: white;\\n        background-color: black;\\n        border: none;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    color: white;\\n    @media only screen and (min-width: 768px) {\\n        margin: 0 7vw 0 0vw;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        border: none;\\n        background-color: transparent;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function(param) {\n    var onPromotionClick = param.onPromotionClick, onContactClick = param.onContactClick;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), menuOpened = ref[0], setMenuOpened = ref[1];\n    var clickHamburger = function() {\n        var button = document.getElementById(\"hamburger-btn\");\n        var menu = document.getElementById(\"menu\");\n        var links = document.querySelectorAll(\".mobile-menu-link\");\n        if (!menuOpened) {\n            button === null || button === void 0 ? void 0 : button.classList.add(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.add(\"open\");\n            links.forEach(function(link) {\n                link.classList.add(\"appear\");\n            });\n            setMenuOpened(true);\n        } else {\n            button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n            setMenuOpened(false);\n        }\n    };\n    var contactClickHandle = function() {\n        var button = document.getElementById(\"hamburger-btn\");\n        var menu = document.getElementById(\"menu\");\n        button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n        menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n        onContactClick();\n        setMenuOpened(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: \"background\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        src: _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navbar, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().roboto),\n                            children: \"Learn more\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 119\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/buy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().roboto),\n                            children: \"Contact us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 35\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarButton, {\n                        onClick: onPromotionClick,\n                        children: \"Buy now\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: clickHamburger,\n                        className: \"hamburger-btn\",\n                        id: \"hamburger-btn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hamburger\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        id: \"menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mobile-menu-items\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc\",\n                                    className: \"mobile-menu-link\",\n                                    children: \"Learn more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    onClick: function() {\n                                        return contactClickHandle();\n                                    },\n                                    className: \"mobile-menu-link\",\n                                    id: \"link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                        children: \"Contact us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c1 = HeaderContainer;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c2 = Logo;\nvar Navbar = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c3 = Navbar;\nvar NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject3());\n_c4 = NavbarButton;\nvar NavbarLink = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject4());\n_c5 = NavbarLink;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HeaderContainer\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"Navbar\");\n$RefreshReg$(_c4, \"NavbarButton\");\n$RefreshReg$(_c5, \"NavbarLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkEsS0FBQUEsTUFBTTtBQXlEWiwrREFBZUEsTUFBTSxFQUFDO0FBRXRCLElBQU1rQixlQUFlLEdBQUd4Qiw2REFBVSxtQkFtQmpDO0FBbkJLd0IsTUFBQUEsZUFBZTtBQXFCckIsSUFBTUUsSUFBSSxHQUFHMUIsNkRBQVUsb0JBU3RCO0FBVEswQixNQUFBQSxJQUFJO0FBV1YsSUFBTUssTUFBTSxHQUFHL0IsNkRBQVUsb0JBTXhCO0FBTksrQixNQUFBQSxNQUFNO0FBUVosSUFBTUksWUFBWSxHQUFHbkMsZ0VBQWEsb0JBWWpDO0FBWkttQyxNQUFBQSxZQUFZO0FBY2xCLElBQU1ILFVBQVUsR0FBR2hDLGdFQUFhLG9CQVcvQjtBQVhLZ0MsTUFBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGtvbmtyZXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvaW1nL2tvbmtyZXRsb2dvLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZGVyID0gKHtvblByb21vdGlvbkNsaWNrLCBvbkNvbnRhY3RDbGlja306IGFueSkgPT4ge1xuICAgIGNvbnN0IFttZW51T3BlbmVkLCBzZXRNZW51T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsaWNrSGFtYnVyZ2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlci1idG5cIik7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbWVudS1saW5rXCIpO1xuICAgICAgICBpZighbWVudU9wZW5lZCl7XG4gICAgICAgICAgICBidXR0b24/LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgbWVudT8uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRNZW51T3BlbmVkKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICBtZW51Py5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIHNldE1lbnVPcGVuZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdENsaWNrSGFuZGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlci1idG5cIik7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG4gICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIG1lbnU/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICBvbkNvbnRhY3RDbGljaygpO1xuICAgICAgICBzZXRNZW51T3BlbmVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJiYWNrZ3JvdW5kXCIgbGF5b3V0PSdmaWxsJyBvYmplY3RGaXQ9J2NvbnRhaW4nICBzcmM9e2tvbmtyZXRMb2dvfT48L0ltYWdlPiBcbiAgICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vaGFtbWVyaGVhZC1kb2xsLTUwZS5ub3Rpb24uc2l0ZS9QZW50aG91c2UtS2Vuem8tYmI1NzA0NzI4NDRlNDlhNWIzYjkyYjc3MjFhZjNlZGNcIj48TmF2YmFyTGluayBjbGFzc05hbWU9e3N0eWxlcy5yb2JvdG99PkxlYXJuIG1vcmU8L05hdmJhckxpbms+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnV5XCI+PE5hdmJhckxpbmsgY2xhc3NOYW1lPXtzdHlsZXMucm9ib3RvfT5Db250YWN0IHVzPC9OYXZiYXJMaW5rPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyQnV0dG9uIG9uQ2xpY2s9e29uUHJvbW90aW9uQ2xpY2t9PkJ1eSBub3c8L05hdmJhckJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NsaWNrSGFtYnVyZ2VyfSBjbGFzc05hbWU9XCJoYW1idXJnZXItYnRuXCIgaWQ9XCJoYW1idXJnZXItYnRuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hhbW1lcmhlYWQtZG9sbC01MGUubm90aW9uLnNpdGUvUGVudGhvdXNlLUtlbnpvLWJiNTcwNDcyODQ0ZTQ5YTViM2I5MmI3NzIxYWYzZWRjXCIgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbGlua1wiPkxlYXJuIG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGNvbnRhY3RDbGlja0hhbmRsZSgpfSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCIgaWQ9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5Db250YWN0IHVzPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogN3Z3IDN2dyA3dncgM3Z3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZGlzcGxheTogZ3JpZDsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjJmciAwLjhmcjsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7IFxuICAgIGdhcDogMHB4IDBweDsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICBcIi4gLlwiOyBcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAxLjV2dyAyLjV2dyAxLjV2dyAwdnc7XG4gICAgfVxuYFxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNTV2dztcbiAgICBoZWlnaHQ6IDE1dnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgIGhlaWdodDogNC41dnc7XG4gICAgfVxuXG5gXG5cbmNvbnN0IE5hdmJhciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZW5kO1xuYFxuXG5jb25zdCBOYXZiYXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAxdncgNXZ3IDF2dyA1dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDF2dztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5gXG5cbmNvbnN0IE5hdmJhckxpbmsgPSBzdHlsZWQuYnV0dG9uYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDd2dyAwIDB2dztcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrb25rcmV0TG9nbyIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZGVyIiwib25Qcm9tb3Rpb25DbGljayIsIm9uQ29udGFjdENsaWNrIiwibWVudU9wZW5lZCIsInNldE1lbnVPcGVuZWQiLCJjbGlja0hhbWJ1cmdlciIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImxpbmsiLCJyZW1vdmUiLCJjb250YWN0Q2xpY2tIYW5kbGUiLCJIZWFkZXJDb250YWluZXIiLCJocmVmIiwiTG9nbyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInNyYyIsIk5hdmJhciIsIk5hdmJhckxpbmsiLCJjbGFzc05hbWUiLCJyb2JvdG8iLCJOYXZiYXJCdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiaWQiLCJhIiwicCIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});