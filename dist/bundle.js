/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  background-color: #fefaee;\n}\n\nmain {\n  padding-bottom: 2em;\n}\n\n.container {\n  min-width: 900px;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  background-color: #7ab2b2;\n  justify-content: start;\n  padding: 1x 0px 1px;\n  /* position: fixed;\n  z-index: 1; */\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);\n}\n\nheader h1 {\n  margin: 0;\n  font-weight: 550;\n}\n\nnote-header {\n  margin-left: 3%;\n  font-weight: 550;\n  font-size: 0.7em;\n}\n\nmain {\n  padding: 20px;\n  display: grid;\n  grid-gap: 20px;\n  justify-content: center;\n}\n\n.note {\n  max-width: 100%;\n}\n\nform {\n  margin-top: 20px;\n}\n\nbutton:hover {\n  background-color: #2e476b;\n}\n\n/* :host {\n  display: block;\n} */\n\n.filter-wrapper {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n  padding-bottom: 1%;\n  flex-direction: column;\n  margin-top: -25px;\n}\n\n.filter {\n  /* margin-bottom: 40px;\n  color: #232e3f;\n  width: 70%;\n  border: groove; */\n  text-align: center;\n  padding: 32px;\n  background-color: #ffffff00;\n  opacity: 0.8;\n  border: none;\n  box-shadow:\n    0 4px 8px 0 rgba(0, 0, 0, 0.2),\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  justify-content: center;\n  /* padding-left: 2em;\n  padding-right: 1em; \n  padding-bottom: 3em;*/\n  width: 75%;\n}\n\n.filter > h2 {\n  /* font-family: \"Ubuntu\", sans-serif; */\n  font-weight: 600;\n  font-size: 32px;\n  margin-top: -5px;\n  margin-bottom: 25px;\n  color: #000000;\n}\n\n#filterNotes {\n  font-size: 18px;\n  font-family: 'Ubuntu', sans-serif;\n  color: #232e3f;\n  width: 100%;\n  padding: 12px 8px;\n  margin-top: 20px;\n  background-color: white;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: groove;\n  display: block;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n#filterNotes > option {\n  color: #232e3f;\n  background-color: white;\n}\n\n#filterNotes:hover,\n#filterNotes:focus-visible {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.filter {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.focused {\n  border: 1px double #232e3f;\n}\n\n.note-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n  align-items: center;\n  justify-items: center;\n  gap: 2em;\n  padding: 2em;\n  width: 1028px;\n  margin-bottom: 3%;\n}\n\n.note-item {\n  background-color: #ffffff00;\n  opacity: 0.8;\n  border: none;\n  border-radius: 0;\n  box-shadow:\n    0 4px 8px 0 rgba(0, 0, 0, 0.2),\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 90%;\n  height: 100%;\n  padding: 1em;\n}\n\np {\n  font-size: 0.7em;\n  margin-top: 5px;\n}\n\n.note-title {\n  color: #232e3f;\n  font-size: 1em;\n}\n\n.note-body {\n  color: #000000;\n  font-weight: 400;\n  margin: 0 0 10px;\n  border: none;\n  padding-top: 1em;\n  /* font-size: 0.90em; */\n}\n\n.note-item:hover,\n.note-item:focus-visible {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.action > .button-archived {\n  transition: 0.2s;\n  transform: translateY(5px);\n  font-size: 13px;\n  padding: 7px 12px;\n  color: #ffffff;\n  margin-left: auto;\n  background-color: #232e3f;\n  border: none;\n}\n\n.action > .button-unarchived {\n  transition: 0.2s;\n  transform: translateY(5px);\n  font-size: 13px;\n  padding: 7px 12px;\n  color: #ffffff;\n  margin-left: auto;\n  background-color: #232e3f;\n  border: none;\n}\n\n.action > .button-recovery-note {\n  transition: 0.2s;\n  transform: translateY(5px);\n  font-size: 13px;\n  padding: 7px 12px;\n  color: #ffffff;\n  margin-left: auto;\n  background-color: #232e3f;\n  border: none;\n}\n\n.action > .button-delete {\n  transition: 0.2s;\n  transform: translateY(5px);\n  font-size: 13px;\n  padding: 7px 12px;\n  color: #ffffff;\n  margin-left: 14px;\n  background-color: #232e3f;\n  border: none;\n}\n\n.action > .button-archived:hover {\n  background-color: #2f3d53;\n}\n\n.action > .button-unarchived:hover {\n  background-color: #2f3d53;\n}\n\n.action > .button-delete:hover {\n  background-color: #2f3d53;\n}\n\n.action > .button-recovery-note:hover {\n  background-color: #2f3d53;\n}\n\n.loading-spinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    135deg,\n    rgba(255, 255, 255, 0.05),\n    rgba(255, 255, 255, 0)\n  );\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  display: none;\n  z-index: 9999;\n}\n\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #232e3f;\n  animation: spin 1s linear infinite;\n}\n\n:host {\n  display: block;\n}\n\nfooter {\n  bottom: 0;\n  padding: 8px;\n  width: 100%;\n  color: rgb(100 116 139);\n  background-color: #000000;\n  text-align: end;\n}\n\nfooter p {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin-right: 3%;\n}\n\n@media screen and (max-width: 768px) {\n  footer {\n    font-size: 0.7em;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  footer {\n    font-size: 0.6em;\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  main {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n}\n\n@media screen and (max-width: 576px) {\n  main {\n    grid-template-columns: 1fr;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://notes-app-front-end/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-bar.js */ \"./src/components/header-bar.js\");\n/* harmony import */ var _header_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_bar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-bar.js */ \"./src/components/footer-bar.js\");\n/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_bar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _note_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-form.js */ \"./src/components/note-form.js\");\n/* harmony import */ var _note_form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_note_form_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/component.js?");

/***/ }),

/***/ "./src/components/footer-bar.js":
/*!**************************************!*\
  !*** ./src/components/footer-bar.js ***!
  \**************************************/
/***/ (() => {

eval("class NoteFooter extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = `\n      <footer>\n        <p>Notes Application</p>\n      </footer>\n    `\n  }\n}\ncustomElements.define('note-footer', NoteFooter)\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/footer-bar.js?");

/***/ }),

/***/ "./src/components/header-bar.js":
/*!**************************************!*\
  !*** ./src/components/header-bar.js ***!
  \**************************************/
/***/ (() => {

eval("class NoteHeader extends HTMLElement {\n  constructor() {\n    super()\n    this.attachShadow({ mode: 'open' })\n    this.shadowRoot.innerHTML = `\n      <h1>Notes Application</h1>\n    `\n  }\n}\ncustomElements.define('note-header', NoteHeader)\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/header-bar.js?");

/***/ }),

/***/ "./src/components/note-form.js":
/*!*************************************!*\
  !*** ./src/components/note-form.js ***!
  \*************************************/
/***/ (() => {

eval("class NoteForm extends HTMLElement {\n  _shadowRoot = null\n  _style = null\n\n  constructor() {\n    super()\n\n    this._shadowRoot = this.attachShadow({ mode: 'open' })\n    this._style = document.createElement('style')\n\n    this.customValidationTitleHandler =\n      this.customValidationTitleHandler.bind(this)\n    this.customValidationBodyHandler =\n      this.customValidationBodyHandler.bind(this)\n  }\n\n  _updateStyle() {\n    this._style.textContent = `\n    :host {\n      display: block;\n    }\n\n    .wrapper {\n      display: flex;\n      align-items: center;\n      padding-top: 5%;\n      padding-bottom: 1%;\n      flex-direction: column;\n  }\n  \n  .wrapper .form-wrapper {\n      background-color: #ffffff00;\n      opacity: 0.8;\n      border: none;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      justify-content: center;\n      padding-left: 2em;\n      padding-right: 1em;\n      padding-bottom: 3em;\n      width: 70%;\n      height: 370px;\n  }\n  \n  .form-wrapper h1 {\n      font-size: 2em;\n      text-align: center;\n      margin-bottom: 1em;\n      font-weight: 800;\n      letter-spacing: 1px;\n      color: black;\n  }\n\n  .form-title input {\n      margin-bottom: 10px;\n      width: 94%;\n      padding: 10px;\n      background: #ffffff00;\n      border: double;\n  }\n\n  .form-title input:focus {\n    background: #ffffff39;\n}\n  \n  .form-desc textarea {\n      padding: 6px;\n      width: 95.5%;\n      background: #ffffff00;\n      border: double;\n      margin: -10px 0 -10px;\n  }\n\n  .form-desc textarea:focus:hover {\n    background: #ffffff39;\n}\n  \n  .form-group button {\n    color: black;\n    font-weight: 600;\n    font-size: 1.2em;\n    line-height: 1.5rem;\n    background-color: #ffffff00;\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    transition: all 0.2s ease-in-out;\n    border: single;\n    width: 98%;\n    cursor: pointer;\n    letter-spacing: 2px;\n  }\n\n  .form-group button:hover {\n    opacity: 0.8;\n    color: white;\n    background-color: #7AB2B2;\n    transtition: 0.2s;\n  }\n\n  .validation-message {\n      margin-block-start: 0.5rem;\n      color: red;\n  }\n\n      `\n  }\n\n  _emptyContent() {\n    this._shadowRoot.innerHTML = ''\n  }\n\n  connectedCallback() {\n    this.render()\n    this.setupEventListeners()\n  }\n\n  render() {\n    this._emptyContent()\n    this._updateStyle()\n\n    this._shadowRoot.appendChild(this._style)\n    this._shadowRoot.innerHTML += `\n    <div class=\"wrapper\">\n    <div class=\"form-wrapper\">\n        <h1>Create Notes</h1>\n        <form action=\"\" class=\"form\" id=\"noteForm\">\n            <div class=\"form-group\">\n                <div class=\"form-title\">\n                    <label for=\"title\"></label>\n                    <input type=\"text\" class=\"title\" id=\"title\" name=\"title\" placeholder=\"Title\" required>\n                </div>\n                <p id=\"titleValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\n                <div class=\"form-desc\">\n                    <label for=\"body\"></label>\n                    <textarea name=\"body\" class=\"body\" id=\"body\" cols=\"30\" rows=\"10\" placeholder=\"Description\" required></textarea>\n                </div>\n                <p id=\"bodyValidation\" class=\"validation-message\" aria-live=\"polite\"></p>\n\n                <button type=\"submit\" name=\"submit\" class=\"btn-submit\">Add Notes</button>\n            </div>\n        </form>\n    </div>\n</div>\n      `\n\n    this._shadowRoot\n      .querySelector('#noteForm')\n      .addEventListener('submit', this.onSubmit.bind(this))\n  }\n\n  onSubmit(event) {\n    event.preventDefault()\n    const title = this._shadowRoot.querySelector('#title').value\n    const body = this._shadowRoot.querySelector('#body').value\n\n    const addNoteEvent = new CustomEvent('addNote', {\n      detail: { title, body },\n      bubbles: true,\n      composed: true,\n    })\n    this.dispatchEvent(addNoteEvent)\n\n    this._shadowRoot.querySelector('#title').value = ''\n    this._shadowRoot.querySelector('#body').value = ''\n  }\n\n  setupEventListeners() {\n    const titleInput = this._shadowRoot.querySelector('#title')\n    const bodyInput = this._shadowRoot.querySelector('#body')\n\n    titleInput.addEventListener('input', this.customValidationTitleHandler)\n    bodyInput.addEventListener('input', this.customValidationBodyHandler)\n  }\n\n  customValidationTitleHandler(event) {\n    const titleInput = event.target\n    const titleValidationMessage =\n      this._shadowRoot.querySelector('#titleValidation')\n\n    if (!titleInput.value.trim()) {\n      titleValidationMessage.innerText = 'Title is required.'\n    } else {\n      titleValidationMessage.innerText = ''\n    }\n  }\n\n  customValidationBodyHandler(event) {\n    const bodyInput = event.target\n    const bodyValidationMessage =\n      this._shadowRoot.querySelector('#bodyValidation')\n\n    if (!bodyInput.value.trim()) {\n      bodyValidationMessage.innerText = 'Body is required.'\n    } else {\n      bodyValidationMessage.innerText = ''\n    }\n  }\n}\n\ncustomElements.define('note-form', NoteForm)\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/components/note-form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/component.js */ \"./src/components/component.js\");\n/* harmony import */ var _script_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/main.js */ \"./src/script/main.js\");\n\n\n\n\n(0,_script_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/index.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main() {\n  const baseUrl = 'https://notes-api.dicoding.dev/v2'\n\n  const renderAllNotes = (notes) => {\n    const noteListElement = document.querySelector('#noteList')\n    noteListElement.innerHTML = ''\n\n    notes.forEach((note) => {\n      const noteItem = document.createElement('div')\n      noteItem.classList.add('note-item')\n      noteItem.setAttribute('tabindex', '0')\n\n      const noteTitle = document.createElement('h3')\n      noteTitle.classList.add('note-title')\n      noteTitle.innerText = note.title\n\n      const noteDate = document.createElement('p')\n      noteDate.classList.add('note-date')\n      const originalDateTime = note.createdAt\n      const dateObj = new Date(originalDateTime)\n      const options = {\n        day: '2-digit',\n        month: '2-digit',\n        year: 'numeric',\n        hour: '2-digit',\n        minute: '2-digit',\n        second: '2-digit',\n        hour12: false,\n      }\n      const formattedDateTime = dateObj.toLocaleString('en-GB', options)\n      console.log(formattedDateTime)\n      noteDate.innerText = formattedDateTime\n\n      const noteBody = document.createElement('p')\n      noteBody.classList.add('note-body')\n      noteBody.innerText = note.body\n\n      const buttonArchived = document.createElement('button')\n      buttonArchived.setAttribute('type', 'button')\n      buttonArchived.innerText = 'Archive'\n\n      const buttonTrash = document.createElement('button')\n      buttonTrash.classList.add('button-delete')\n      buttonTrash.innerText = 'Delete'\n\n      buttonTrash.setAttribute('type', 'button')\n      buttonTrash.addEventListener('click', function () {\n        const confirmation = confirm('Are you sure??')\n        if (confirmation) {\n          removeNote(note.id)\n        }\n      })\n\n      if (note.archived) {\n        buttonArchived.classList.add('button-unarchived')\n        buttonArchived.innerText = 'Unarchived'\n        buttonArchived.addEventListener('click', function () {\n          unArchiveNote(note.id)\n        })\n      } else {\n        buttonArchived.classList.add('button-archived')\n        buttonArchived.addEventListener('click', function () {\n          archiveNote(note.id)\n        })\n      }\n\n      const buttonContainer = document.createElement('div')\n      buttonContainer.classList.add('action')\n      buttonContainer.append(buttonArchived, buttonTrash)\n\n      noteItem.append(noteTitle, noteDate, noteBody, buttonContainer)\n      noteListElement.appendChild(noteItem)\n    })\n  }\n\n  const addNote = async (note) => {\n    try {\n      showLoadingSpinner()\n      const options = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(note),\n      }\n      const response = await fetch(`${baseUrl}/notes`, options)\n      const responseJson = await response.json()\n      showResponseMessage(responseJson.message)\n      getUnArchived()\n    } catch (error) {\n      showResponseMessage(error)\n    } finally {\n      hideLoadingSpinner()\n    }\n  }\n\n  const getUnArchived = async () => {\n    try {\n      showLoadingSpinner()\n      const response = await fetch(`${baseUrl}/notes`)\n      const responseJson = await response.json()\n\n      if (responseJson.data.length > 0) {\n        renderAllNotes(responseJson.data)\n      } else {\n        showResponseMessage('Note Empty')\n        renderAllNotes(responseJson.data)\n      }\n    } catch (error) {\n      showResponseMessage(error)\n    } finally {\n      hideLoadingSpinner()\n    }\n  }\n\n  const getArchived = async () => {\n    try {\n      showLoadingSpinner()\n      const response = await fetch(`${baseUrl}/notes/archived`)\n      const responseJson = await response.json()\n\n      if (responseJson.data.length > 0) {\n        renderAllNotes(responseJson.data)\n      } else {\n        showResponseMessage('Note Empty')\n        renderAllNotes(responseJson.data)\n      }\n    } catch (error) {\n      showResponseMessage(error)\n    } finally {\n      hideLoadingSpinner()\n    }\n  }\n\n  const removeNote = (noteId) => {\n    showLoadingSpinner()\n    fetch(`${baseUrl}/notes/${noteId}`, {\n      method: 'DELETE',\n    })\n      .then((response) => {\n        return response.json()\n      })\n      .then((responseJson) => {\n        showResponseMessage(responseJson.message)\n        if (filterNotes.selectedIndex == 0) {\n          getUnArchived()\n        } else {\n          getArchived()\n        }\n      })\n      .catch((error) => {\n        showResponseMessage(error)\n      })\n      .finally(() => {\n        hideLoadingSpinner()\n      })\n  }\n\n  const archiveNote = async (id) => {\n    try {\n      const options = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      }\n      const response = await fetch(`${baseUrl}/notes/${id}/archive`, options)\n      const responseJson = await response.json()\n      showResponseMessage(responseJson.message)\n      getUnArchived()\n    } catch (error) {\n      showResponseMessage(error)\n    }\n  }\n\n  const unArchiveNote = async (id) => {\n    try {\n      const options = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      }\n      const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, options)\n      const responseJson = await response.json()\n      showResponseMessage(responseJson.message)\n      getArchived()\n    } catch (error) {\n      showResponseMessage(error)\n    }\n  }\n\n  const showResponseMessage = (message) => {\n    alert(message)\n  }\n\n  document.addEventListener('DOMContentLoaded', () => {\n    getUnArchived()\n    filterNotes.selectedIndex = 0\n  })\n\n  document.addEventListener('addNote', function (event) {\n    const { title, body } = event.detail\n\n    const newNote = {\n      title: title,\n      body: body,\n    }\n\n    addNote(newNote)\n    filterNotes.selectedIndex = 0\n  })\n\n  const showLoadingSpinner = () => {\n    document.getElementById('loadingSpinner').style.display = 'block'\n  }\n\n  const hideLoadingSpinner = () => {\n    document.getElementById('loadingSpinner').style.display = 'none'\n  }\n\n  const filterNotes = document.getElementById('filterNotes')\n\n  filterNotes.addEventListener('change', function () {\n    if (filterNotes.selectedIndex == 0) {\n      getUnArchived()\n    } else {\n      getArchived()\n    }\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://notes-app-front-end/./src/script/main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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