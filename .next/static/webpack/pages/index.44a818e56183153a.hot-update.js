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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/konkretlogo.png */ \"./public/img/konkretlogo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n    width: 100%;\\n    padding: 7vw 3vw 7vw 3vw;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    z-index: 100;\\n    display: grid; \\n    grid-template-columns: 1fr 1fr; \\n    grid-template-rows: 1fr; \\n    gap: 0px 0px; \\n    grid-template-areas: \\n      \". .\"; \\n    backdrop-filter: blur(5px);\\n    -webkit-backdrop-filter: blur(5px);\\n    align-items: center;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1.5vw 2.5vw 1.5vw 2.5vw;\\n    }\\n'\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 55vw;\\n    height: 15vw;\\n    position: relative;\\n    @media only screen and (min-width: 768px) {\\n        width: 20vw;\\n        height: 4.5vw;\\n    }\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    align-items: center;\\n    justify-content: end;\\n    -webkit-justify-content: end;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    @media only screen and (min-width: 768px) {\\n        padding: 1vw 5vw 1vw 5vw;\\n        border-radius: 5px;\\n        color: black;\\n        background-color: white;\\n        border: none;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: none;\\n    color: white;\\n    @media only screen and (min-width: 768px) {\\n        margin: 0 7vw 0 0vw;\\n        font-size: 1vw;\\n        cursor: pointer;\\n        border: none;\\n        background-color: transparent;\\n        display: block;\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function(param) {\n    var onPromotionClick = param.onPromotionClick, onContactClick = param.onContactClick;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), menuOpened = ref[0], setMenuOpened = ref[1];\n    var clickHamburger = function() {\n        var button = document.getElementById(\"hamburger-btn\");\n        var menu = document.getElementById(\"menu\");\n        var links = document.querySelectorAll(\".mobile-menu-link\");\n        if (!menuOpened) {\n            button === null || button === void 0 ? void 0 : button.classList.add(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.add(\"open\");\n            links.forEach(function(link) {\n                link.classList.add(\"appear\");\n            });\n            setMenuOpened(true);\n        } else {\n            button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n            menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n            setMenuOpened(false);\n        }\n    };\n    var contactClickHandle = function() {\n        var button = document.getElementById(\"hamburger-btn\");\n        var menu = document.getElementById(\"menu\");\n        button === null || button === void 0 ? void 0 : button.classList.remove(\"open\");\n        menu === null || menu === void 0 ? void 0 : menu.classList.remove(\"open\");\n        onContactClick();\n        setMenuOpened(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    alt: \"background\",\n                    layout: \"fill\",\n                    objectFit: \"contain\",\n                    src: _public_img_konkretlogo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navbar, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().roboto),\n                            children: \"Learn more\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 119\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarLink, {\n                        onClick: onContactClick,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().roboto),\n                        children: \"Contact us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/buy\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavbarButton, {\n                            onClick: onPromotionClick,\n                            children: \"Buy now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 35\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: clickHamburger,\n                        className: \"hamburger-btn\",\n                        id: \"hamburger-btn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hamburger\"\n                        }, void 0, false, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        id: \"menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mobile-menu-items\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"https://hammerhead-doll-50e.notion.site/Penthouse-Kenzo-bb570472844e49a5b3b92b7721af3edc\",\n                                    className: \"mobile-menu-link\",\n                                    children: \"Learn more\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    onClick: function() {\n                                        return contactClickHandle();\n                                    },\n                                    className: \"mobile-menu-link\",\n                                    id: \"link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n                                        children: \"Contact us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/piotrgerke/Workspaces/VSCode/PenthouseNFT/penthouse/components/Header.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c1 = HeaderContainer;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c2 = Logo;\nvar Navbar = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c3 = Navbar;\nvar NavbarButton = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject3());\n_c4 = NavbarButton;\nvar NavbarLink = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].button(_templateObject4());\n_c5 = NavbarLink;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HeaderContainer\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"Navbar\");\n$RefreshReg$(_c4, \"NavbarButton\");\n$RefreshReg$(_c5, \"NavbarLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUM7QUFFdEIsSUFBTWtCLGVBQWUsR0FBR3hCLDZEQUFVLG1CQW1CakM7QUFuQkt3QixNQUFBQSxlQUFlO0FBcUJyQixJQUFNQyxJQUFJLEdBQUd6Qiw2REFBVSxvQkFTdEI7QUFUS3lCLE1BQUFBLElBQUk7QUFXVixJQUFNSyxNQUFNLEdBQUc5Qiw2REFBVSxvQkFNeEI7QUFOSzhCLE1BQUFBLE1BQU07QUFRWixJQUFNTSxZQUFZLEdBQUdwQyxnRUFBYSxvQkFZakM7QUFaS29DLE1BQUFBLFlBQVk7QUFjbEIsSUFBTUosVUFBVSxHQUFHaEMsZ0VBQWEsb0JBVy9CO0FBWEtnQyxNQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQga29ua3JldExvZ28gZnJvbSBcIi4uL3B1YmxpYy9pbWcva29ua3JldGxvZ28ucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoe29uUHJvbW90aW9uQ2xpY2ssIG9uQ29udGFjdENsaWNrfTogYW55KSA9PiB7XG4gICAgY29uc3QgW21lbnVPcGVuZWQsIHNldE1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgY2xpY2tIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyLWJ0blwiKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vYmlsZS1tZW51LWxpbmtcIik7XG4gICAgICAgIGlmKCFtZW51T3BlbmVkKXtcbiAgICAgICAgICAgIGJ1dHRvbj8uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICBtZW51Py5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldE1lbnVPcGVuZWQodHJ1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYnV0dG9uPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIG1lbnU/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgc2V0TWVudU9wZW5lZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWN0Q2xpY2tIYW5kbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyLWJ0blwiKTtcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgICAgICAgYnV0dG9uPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgbWVudT8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIG9uQ29udGFjdENsaWNrKCk7XG4gICAgICAgIHNldE1lbnVPcGVuZWQoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiYmFja2dyb3VuZFwiIGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb250YWluJyAgc3JjPXtrb25rcmV0TG9nb30+PC9JbWFnZT4gXG4gICAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgICA8TmF2YmFyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2hhbW1lcmhlYWQtZG9sbC01MGUubm90aW9uLnNpdGUvUGVudGhvdXNlLUtlbnpvLWJiNTcwNDcyODQ0ZTQ5YTViM2I5MmI3NzIxYWYzZWRjXCI+PE5hdmJhckxpbmsgY2xhc3NOYW1lPXtzdHlsZXMucm9ib3RvfT5MZWFybiBtb3JlPC9OYXZiYXJMaW5rPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyTGluayBvbkNsaWNrPXtvbkNvbnRhY3RDbGlja30gY2xhc3NOYW1lPXtzdHlsZXMucm9ib3RvfT5Db250YWN0IHVzPC9OYXZiYXJMaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnV5XCI+PE5hdmJhckJ1dHRvbiBvbkNsaWNrPXtvblByb21vdGlvbkNsaWNrfT5CdXkgbm93PC9OYXZiYXJCdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Y2xpY2tIYW1idXJnZXJ9IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1idG5cIiBpZD1cImhhbWJ1cmdlci1idG5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiIGlkPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaGFtbWVyaGVhZC1kb2xsLTUwZS5ub3Rpb24uc2l0ZS9QZW50aG91c2UtS2Vuem8tYmI1NzA0NzI4NDRlNDlhNWIzYjkyYjc3MjFhZjNlZGNcIiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1saW5rXCI+TGVhcm4gbW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gY29udGFjdENsaWNrSGFuZGxlKCl9IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWxpbmtcIiBpZD1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPkNvbnRhY3QgdXM8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA3dncgM3Z3IDd2dyAzdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyBcbiAgICBnYXA6IDBweCAwcHg7IFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgXCIuIC5cIjsgXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMS41dncgMi41dncgMS41dncgMi41dnc7XG4gICAgfVxuYFxuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNTV2dztcbiAgICBoZWlnaHQ6IDE1dnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgIGhlaWdodDogNC41dnc7XG4gICAgfVxuXG5gXG5cbmNvbnN0IE5hdmJhciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZW5kO1xuYFxuXG5jb25zdCBOYXZiYXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAxdncgNXZ3IDF2dyA1dnc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDF2dztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5gXG5cbmNvbnN0IE5hdmJhckxpbmsgPSBzdHlsZWQuYnV0dG9uYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luOiAwIDd2dyAwIDB2dztcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrb25rcmV0TG9nbyIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZGVyIiwib25Qcm9tb3Rpb25DbGljayIsIm9uQ29udGFjdENsaWNrIiwibWVudU9wZW5lZCIsInNldE1lbnVPcGVuZWQiLCJjbGlja0hhbWJ1cmdlciIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImxpbmsiLCJyZW1vdmUiLCJjb250YWN0Q2xpY2tIYW5kbGUiLCJIZWFkZXJDb250YWluZXIiLCJMb2dvIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwic3JjIiwiTmF2YmFyIiwiaHJlZiIsIk5hdmJhckxpbmsiLCJjbGFzc05hbWUiLCJyb2JvdG8iLCJvbkNsaWNrIiwiTmF2YmFyQnV0dG9uIiwiZGl2IiwiaWQiLCJhIiwicCIsImIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n"));

/***/ })

});