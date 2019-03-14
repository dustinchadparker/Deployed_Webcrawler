/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/pupRouter/index.ts":
/*!***************************************!*\
  !*** ./src/server/pupRouter/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\nvar router = express.Router();\nrouter.get(\"/\", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var browser, pageStartNums, page, data, price, comment, time, i, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 13, , 14]);\n                return [4 /*yield*/, puppeteer.launch({\n                        headless: false\n                    })];\n            case 1:\n                browser = _a.sent();\n                pageStartNums = 0;\n                return [4 /*yield*/, browser.newPage()];\n            case 2:\n                page = _a.sent();\n                return [4 /*yield*/, page.goto(\"https://forum.median-xl.com/ucp.php?mode=login\", {\n                        waitUntil: \"domcontentloaded\"\n                    })];\n            case 3:\n                _a.sent();\n                //LOGS IN with username/password\n                return [4 /*yield*/, page.type(\"#username\", req.query.username, { delay: 10 })];\n            case 4:\n                //LOGS IN with username/password\n                _a.sent();\n                return [4 /*yield*/, page.type(\"#password\", req.query.password, { delay: 10 })];\n            case 5:\n                _a.sent();\n                page.click(\"input.button1\");\n                return [4 /*yield*/, page.waitForNavigation({ waitUntil: \"domcontentloaded\" })];\n            case 6:\n                _a.sent();\n                data = {\n                    price: [],\n                    comment: [],\n                    time: [],\n                    index: []\n                };\n                _a.label = 7;\n            case 7:\n                if (!(pageStartNums < parseInt(req.query.pages))) return [3 /*break*/, 12];\n                //navigates to page and waits for DOMContent\n                return [4 /*yield*/, page.goto(\"https://forum.median-xl.com/tradegold.php?sort_id=0&start=\" + pageStartNums *\n                        25, {\n                        waitUntil: \"domcontentloaded\"\n                    })];\n            case 8:\n                //navigates to page and waits for DOMContent\n                _a.sent();\n                return [4 /*yield*/, page.$$eval(\"div.coins.coins-embed\", function (el) {\n                        return el.map(function (i) { return i.innerText; });\n                    })];\n            case 9:\n                price = _a.sent();\n                return [4 /*yield*/, page.$$eval(\"tr > td:nth-last-of-type(2)\", function (el) {\n                        return el.map(function (i) { return i.innerText; });\n                    })];\n            case 10:\n                comment = _a.sent();\n                return [4 /*yield*/, page.$$eval(\"td:nth-child(5)\", function (el) {\n                        return el.map(function (i) { return i.innerText; });\n                    })];\n            case 11:\n                time = _a.sent();\n                //Will cycle through arrays of data and store in stringData\n                for (i = 0; i < price.length; i++) {\n                    data.index.push([i]);\n                    data.comment.push(comment[i]);\n                    data.price.push(price[i]);\n                    data.time.push(time[i]);\n                }\n                pageStartNums++;\n                return [3 /*break*/, 7];\n            case 12:\n                //closes page; change page to 'browser' if you want it to close browser when done\n                browser.close();\n                res.send(JSON.stringify(data));\n                return [3 /*break*/, 14];\n            case 13:\n                e_1 = _a.sent();\n                throw e_1;\n            case 14: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/pupRouter/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar pupRouter_1 = __webpack_require__(/*! ../pupRouter */ \"./src/server/pupRouter/index.ts\");\nvar router = express.Router();\nrouter.use(\"/pupRouter\", pupRouter_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ \"path\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\nvar p = path.join(__dirname, \"../public\");\napp.use(express.static(p));\napp.use(express.json());\napp.use(routes_1.default);\napp.use(\"*\", function (req, res, next) {\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\n});\nvar port = process.env.PORT || 3000;\napp.listen(port, function () {\n    console.log(\"Server listening on port: \" + port);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });