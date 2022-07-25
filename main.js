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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.pug */ \"./src/index.pug\");\n/* harmony import */ var _src_index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/script */ \"./src/script.js\");\n/* harmony import */ var _src_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_style_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/style/global.scss */ \"./src/style/global.scss\");\n\n\n\n\n//# sourceURL=webpack://practice/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("var burger = document.querySelector('.header__burger');\nvar header = document.querySelector('.header__content');\nvar container = document.querySelector('.container');\nvar body = document.querySelector('body');\nburger.addEventListener('click', burgerActive); // console.log(burger)\n\nfunction burgerActive() {\n  burger.classList.toggle('close');\n  header.classList.toggle('active');\n  body.classList.toggle('lock');\n  container.classList.toggle('paddingNull');\n}\n\n//# sourceURL=webpack://practice/./src/script.js?");

/***/ }),

/***/ "./src/style/global.scss":
/*!*******************************!*\
  !*** ./src/style/global.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://practice/./src/style/global.scss?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Date, Object) {pug_mixins[\"sectionHead\"] = pug_interp = function(mainHeader, caption){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"sectionHeader\\\"\\u003E   \\u003Ch2 class=\\\"sectionHeader__main\\\"\\u003E\" + (pug.escape(null == (pug_interp = mainHeader) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh2\\u003E\\u003Cp class=\\\"sectionHeader__caption\\\"\\u003E\" + (pug.escape(null == (pug_interp = caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"card\"] = pug_interp = function(imgPath, brandName, caption, price, sale, newPrice){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"card__wrap\\\"\\u003E \\u003Cimg\" + (\" class=\\\"img card__img\\\"\"+pug.attr(\"src\", imgPath, true, true)+pug.attr(\"alt\", `${caption}`, true, true)) + \"\\u003E\\u003Ca class=\\\"card__link card__brand\\\" href=\\\"#\\\"\\u003E\" + (pug.escape(null == (pug_interp = brandName) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"card__link card__caption\\\" href=\\\"#\\\"\\u003E\" + (pug.escape(null == (pug_interp = caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\nif ((sale)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"card__priceBox\\\"\\u003E\\u003Cp class=\\\"card__oldPrice\\\"\\u003E\" + (pug.escape(null == (pug_interp = '$'+price) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"card__newPrice\\\"\\u003E\" + (pug.escape(null == (pug_interp = '$'+newPrice) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cp class=\\\"card__price\\\"\\u003E\" + (pug.escape(null == (pug_interp = '$'+price) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"catagory\"] = pug_interp = function(imgPath1, catagoryName1, imgPath2, catagoryName2, imgPath3, catagoryName3, imgPath4, catagoryName4){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"mozaic__wrap\\\"\\u003E \\u003Cdiv class=\\\"mozaic__item mozaic__item-top\\\"\\u003E\\u003Cimg\" + (\" class=\\\"img mozaic__img\\\"\"+pug.attr(\"src\", imgPath1, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\";\npug_mixins[\"button\"]('a', 'filled filled-white mozaic', catagoryName1);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"mozaic__item mozaic__item-bottomLeft\\\"\\u003E \\u003Cimg\" + (\" class=\\\"img mozaic__img\\\"\"+pug.attr(\"src\", imgPath2, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\";\npug_mixins[\"button\"]('a', 'filled filled-white mozaic', catagoryName2);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"mozaic__item mozaic__item-bottomRight\\\"\\u003E \\u003Cimg\" + (\" class=\\\"img mozaic__img\\\"\"+pug.attr(\"src\", imgPath3, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\";\npug_mixins[\"button\"]('a', 'filled filled-white mozaic', catagoryName3);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"mozaic__item mozaic__item-big\\\"\\u003E\\u003Cimg\" + (\" class=\\\"img mozaic__img\\\"\"+pug.attr(\"src\", imgPath4, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\";\npug_mixins[\"button\"]('a', 'filled filled-white mozaic', catagoryName4);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"avone\"] = pug_interp = function(imgPath1, imgPath2, imgPath3){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"avone__wrap\\\"\\u003E \\u003Cdiv class=\\\"avone__leftColumnWrap\\\"\\u003E \\u003Cimg\" + (\" class=\\\"avone__leftImg avone__img\\\"\"+pug.attr(\"src\", imgPath1, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"avone__rightColumnWrap\\\"\\u003E \\u003Cimg\" + (\" class=\\\"avone__backImg avone__img\\\"\"+pug.attr(\"src\", imgPath2, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\\u003Cdiv class=\\\"avone__rightColumnWrap-after\\\"\\u003E\\u003Cimg\" + (\" class=\\\"avone__frontImg avone__img\\\"\"+pug.attr(\"src\", imgPath3, true, true)+\" alt=\\\"Some image\\\"\") + \"\\u003E\\u003Cdiv class=\\\"avone__rightColumnWrap-button\\\"\\u003E\";\npug_mixins[\"button\"]('a', 'text-section', \"show women's dress\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"heroSection\"] = pug_interp = function(backgroundImg, subtitle, mainTitle, caption, buttonText){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cmain class=\\\"hero\\\"\\u003E \";\npug_mixins[\"backgroundImg\"](\n            'hero',\n            `${backgroundImg}`\n        );\npug_html = pug_html + \"\\u003Cdiv class=\\\"hero__wrap\\\"\\u003E \\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"hero__content\\\"\\u003E\\u003Cdiv class=\\\"hero__textBox textBox\\\"\\u003E\\u003Cdiv class=\\\"hero__textBox-subtitle\\\"\\u003E\" + (pug.escape(null == (pug_interp = subtitle) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"hero__textBox-title\\\"\\u003E\" + (pug.escape(null == (pug_interp = mainTitle) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"hero__textBox-caption\\\"\\u003E\" + (pug.escape(null == (pug_interp = caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\nif ((buttonText)) {\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"hero__textBox-button\\\"\\u003E\";\n// iterate buttonText.split('|')\n;(function(){\n  var $$obj = buttonText.split('|');\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var text = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Ca class=\\\"button button__filled button__filled-black\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var text = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Ca class=\\\"button button__filled button__filled-black\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fmain\\u003E\";\n};\npug_mixins[\"bottomSection\"] = pug_interp = function(backgroundImg, subtitle, mainTitle, caption, buttonText){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"bottom\\\"\\u003E\";\npug_mixins[\"backgroundImg\"](\n            'bottom',\n            `${backgroundImg}`\n        );\npug_html = pug_html + \"\\u003Cdiv class=\\\"bottom__wrap\\\"\\u003E \\u003Cdiv class=\\\"bottom__content\\\"\\u003E \\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"bottom__textBox textBox\\\"\\u003E \\u003Cdiv class=\\\"bottom__textBox-subtitle\\\"\\u003E\" + (pug.escape(null == (pug_interp = subtitle) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"bottom__textBox-title\\\"\\u003E\" + (pug.escape(null == (pug_interp = mainTitle) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\nif ((caption)) {\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"bottom__caption\\\"\\u003E\" + (pug.escape(null == (pug_interp = caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\nif ((buttonText)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"bottom____textBox-button\\\"\\u003E \";\n// iterate buttonText.split('|')\n;(function(){\n  var $$obj = buttonText.split('|');\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {\n        var text = $$obj[pug_index1];\npug_html = pug_html + \"\\u003Ca class=\\\"button button__filled button__filled-black\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index1 in $$obj) {\n      $$l++;\n      var text = $$obj[pug_index1];\npug_html = pug_html + \"\\u003Ca class=\\\"button button__filled button__filled-black\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"backgroundImg\"] = pug_interp = function(blockName, backgroundImg){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([`${blockName}`+'__bg'], [true]), false, true)) + \"\\u003E \\u003Cimg\" + (pug.attr(\"class\", pug.classes([`${blockName}`+'__bg-img'], [true]), false, true)+pug.attr(\"src\", backgroundImg, true, true)+\" alt=\\\"background image\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"header\"] = pug_interp = function(logoPath, headerItemsList){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cheader class=\\\"header\\\"\\u003E\\u003Cdiv class=\\\"header__burger\\\"\\u003E \\u003Cspan class=\\\"header__burger-main\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__wrap\\\"\\u003E \\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"header__content\\\"\\u003E \\u003Cdiv class=\\\"header__content-logo\\\"\\u003E \\u003Ca href=\\\"#\\\"\\u003E \\u003Cimg\" + (pug.attr(\"src\", logoPath, true, true)+\" alt=\\\"LOGO\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__content-menu\\\"\\u003E \\u003Cul class=\\\"header__content-list\\\"\\u003E\";\n// iterate headerItemsList\n;(function(){\n  var $$obj = headerItemsList;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {\n        var item = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli class=\\\"header__content-item\\\"\\u003E\\u003Ca class=\\\"button__text\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index2 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli class=\\\"header__content-item\\\"\\u003E\\u003Ca class=\\\"button__text\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__content-iconBlock\\\"\\u003E \\u003Ca class=\\\"header__icon-search\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"header__icon-hearth\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"header__icon-shop\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fheader\\u003E\";\n};\npug_mixins[\"footer\"] = pug_interp = function(logoPath, caption, location, email, phoneNumber, shopItemList, helpItemList, aboutItemList){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cfooter class=\\\"footer\\\"\\u003E \\u003Cdiv class=\\\"footer__main\\\"\\u003E \\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cdiv class=\\\"footer__content\\\"\\u003E\\u003Cdiv class=\\\"footer__leftSide\\\"\\u003E\\u003Cdiv class=\\\"footer__logo\\\"\\u003E \\u003Cimg\" + (\" class=\\\"footer__logo-img\\\"\"+pug.attr(\"src\", logoPath, true, true)+\" alt=\\\"LOGO\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__caption\\\"\\u003E\" + (pug.escape(null == (pug_interp = caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__location\\\"\\u003E \\u003Ci class=\\\"footer__location-icon\\\"\\u003E \\u003C\\u002Fi\\u003E\\u003Cdiv class=\\\"footer__location-text\\\"\\u003E\" + (pug.escape(null == (pug_interp = location) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__contact\\\"\\u003E \\u003Cdiv class=\\\"footer__contact-email\\\"\\u003E\" + (pug.escape(null == (pug_interp = email) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__contact-phone\\\"\\u003E\" + (pug.escape(null == (pug_interp = phoneNumber) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__icon\\\"\\u003E\\u003Ca class=\\\"footer__icon-fb\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"footer__icon-inst\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"footer__icon-twitter\\\"\\u003E \\u003C\\u002Fa\\u003E\\u003Ca class=\\\"footer__icon-linkedin\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__rightSide\\\"\\u003E \\u003Cform class=\\\"footer__inputForm-form\\\" action=\\\"#\\\" method=\\\"get\\\"\\u003E \\u003Cdiv class=\\\"footer__inputForm-caption\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'recieve email updates') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"input\"](\n                                'Your Email Address',\n                                '',\n                                'email',\n                                'join'\n                            );\npug_html = pug_html + \"\\u003C\\u002Fform\\u003E\\u003Cdiv class=\\\"footer__infoBox\\\"\\u003E \\u003Cdiv class=\\\"footer__infoBox-column\\\"\\u003E \\u003Cdiv class=\\\"footer__infoBox-title\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'shop') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"footer__infoBox-list\\\"\\u003E\";\n// iterate shopItemList\n;(function(){\n  var $$obj = shopItemList;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {\n        var item = $$obj[pug_index3];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index3 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index3];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__infoBox-column\\\"\\u003E \\u003Cdiv class=\\\"footer__infoBox-title\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'help') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"footer__footer__infoBox-list\\\"\\u003E\";\n// iterate helpItemList\n;(function(){\n  var $$obj = helpItemList;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {\n        var item = $$obj[pug_index4];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index4 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index4];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__infoBox-column\\\"\\u003E \\u003Cdiv class=\\\"footer__infoBox-title\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'about') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"footer__footer__infoBox-list\\\"\\u003E\";\n// iterate aboutItemList\n;(function(){\n  var $$obj = aboutItemList;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {\n        var item = $$obj[pug_index5];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index5 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index5];\npug_html = pug_html + \"\\u003Cli class=\\\"footer__infoBox-item\\\"\\u003E\\u003Ca class=\\\"button__text footer__infoBox-link\\\"\\u003E\" + (pug.escape(null == (pug_interp = item) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\nconst date = (new Date()).getFullYear()\npug_html = pug_html + \"\\u003Cdiv class=\\\"footer__bottom\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Copyright © '+date+'. Your company name  All rights reserved') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Ffooter\\u003E\";\n};\npug_mixins[\"button\"] = pug_interp = function(tag, style, text){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nconst blockName = 'button';\nconst blockAttributes = {\n    class: [blockName]\n};\n\nif ((style)) {\n// iterate style.split(' ')\n;(function(){\n  var $$obj = style.split(' ');\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {\n        var s = $$obj[pug_index6];\nblockAttributes.class.push(`${blockName}__${s}`)\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index6 in $$obj) {\n      $$l++;\n      var s = $$obj[pug_index6];\nblockAttributes.class.push(`${blockName}__${s}`)\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\" + (tag) + (pug.attrs(Object.assign({}, attributes, blockAttributes), true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002F\" + (tag) + \"\\u003E\";\n}\n};\npug_mixins[\"input\"] = pug_interp = function(placeholder, style, type, btnText){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nconst blockName = 'input';\nconst blockAttributes = {\n    class: [blockName]\n};\n\nif ((style)) {\n// iterate style.split(' ')\n;(function(){\n  var $$obj = style.split(' ');\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {\n        var s = $$obj[pug_index7];\nblockAttributes.class.push(`${blockName}__${s}`)\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index7 in $$obj) {\n      $$l++;\n      var s = $$obj[pug_index7];\nblockAttributes.class.push(`${blockName}__${s}`)\n    }\n  }\n}).call(this);\n\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__wrap\\\"\\u003E \\u003Cinput\" + (pug.attrs(pug.merge([{\"type\": pug.escape(`${type}`),\"placeholder\": pug.escape(`${placeholder}`)},Object.assign({}, attributes, blockAttributes)]), true)) + \"\\u003E\";\nif ((type==='email')) {\npug_html = pug_html + \"\\u003Cbutton class=\\\"input__button\\\" type=\\\"submit\\\"\\u003E\" + (pug.escape(null == (pug_interp = btnText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\nconst itemList = ['home', 'shop', 'lookbook', 'features', 'pages', 'blog']\nconst caption = 'We earned a reputation of being good at what we do. Let us take your online shop to new dimension in success!';\nconst location = 'Comilla, Bangladesh 3500';\nconst email = 'kawsarahmed0210@gmail.com';\nconst phone = '01647470457';\nconst shopItemList = ['Shop', 'Collections', 'Outlet', 'Lookbook'];\nconst helpItemList = ['FAQ', 'Privecy Policy', 'Tearms and conditions', 'Return and Exchanges'];\nconst aboutItemList = ['Journal', 'Our Story', 'Contact', 'Store Location'];\n\nconst imgWomenGalleryPath = [\n    {\n        path: __webpack_require__(/*! ../src/img/womensFashion/women1.png */ \"./src/img/womensFashion/women1.png\"),\n        brand: 'igure',\n        caption: 'GREEN MUSCLE FIT POLO SHIRT',\n        price: '229.00',\n        sale: true,\n        newPrice: '129.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/womensFashion/women2.png */ \"./src/img/womensFashion/women2.png\"),\n        brand: 'igure',\n        caption: 'blue pretty SHIRT',\n        price: '389.00',\n        sale: true,\n        newPrice: '230.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/womensFashion/women3.png */ \"./src/img/womensFashion/women3.png\"),\n        brand: 'igure',\n        caption: 'red stripped shirt',\n        price: '240.00',\n        sale: true,\n        newPrice: '140.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/womensFashion/women4.png */ \"./src/img/womensFashion/women4.png\"),\n        brand: 'igure',\n        caption: 'black jeans jacket',\n        price: '699.00',\n        sale: true,\n        newPrice: '499.00'\n    }\n\n];\n\nconst imgManGalleryPath = [\n    {\n        path: __webpack_require__(/*! ../src/img/mensFashion/men1.svg */ \"./src/img/mensFashion/men1.svg\"),\n        brand: 'igure',\n        caption: 'nice shirt for nice guy',\n        price: '300.00',\n        sale: true,\n        newPrice: '499.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/mensFashion/men2.svg */ \"./src/img/mensFashion/men2.svg\"),\n        brand: 'igure',\n        caption: 'basic pink t-shirt',\n        price: '130.00',\n        sale: true,\n        newPrice: '99.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/mensFashion/men3.svg */ \"./src/img/mensFashion/men3.svg\"),\n        brand: 'igure',\n        caption: 'givenchy paris hoodie',\n        price: '790.00',\n        sale: true,\n        newPrice: '599.00'\n    },\n    {\n        path: __webpack_require__(/*! ../src/img/mensFashion/men4.svg */ \"./src/img/mensFashion/men4.svg\"),\n        brand: 'igure',\n        caption: 'peach hoodie',\n        price: '430.00',\n        sale: true,\n        newPrice: '299.00'\n    },\n]\n\npug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"en\\\"\\u003E\\u003Chead\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Ctitle\\u003EFashion site\\u003C\\u002Ftitle\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E \\u003Cdiv class=\\\"wrap\\\"\\u003E\";\npug_mixins[\"header\"](\n                    __webpack_require__(/*! ../../src/img/logo.svg */ \"./src/img/logo.svg\"),\n                    itemList\n                );\npug_mixins[\"heroSection\"](\n        __webpack_require__(/*! ../src/img/heroSection.png */ \"./src/img/heroSection.png\"),\n        'new trend', \n        'COLLUSION', \n        \"An exclusive selection of this season's trends.\", \n        'discover|shop now'\n    );\npug_html = pug_html + \"\\u003Cdiv class=\\\"container\\\"\\u003E\";\npug_mixins[\"catagory\"](\n            __webpack_require__(/*! ../src/img/catagory/catagory1.svg */ \"./src/img/catagory/catagory1.svg\"),\n            'catagory name1',\n            __webpack_require__(/*! ../src/img/catagory/catagory2.svg */ \"./src/img/catagory/catagory2.svg\"),\n            'catagory name2',\n            __webpack_require__(/*! ../src/img/catagory/catagory3.svg */ \"./src/img/catagory/catagory3.svg\"),\n            'catagory name3',\n            __webpack_require__(/*! ../src/img/catagory/catagory4.svg */ \"./src/img/catagory/catagory4.svg\"),\n            'catagory name4'\n        );\npug_mixins[\"sectionHead\"](\"women's fashion\", \"Shop our new arrivals from established brands\");\npug_html = pug_html + \"\\u003Cdiv class=\\\"gallery\\\"\\u003E\";\n// iterate imgWomenGalleryPath\n;(function(){\n  var $$obj = imgWomenGalleryPath;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {\n        var image = $$obj[pug_index8];\npug_mixins[\"card\"](\n                    image.path, \n                    image.brand, \n                    image.caption,\n                    image.price,\n                    image.sale,\n                    image.newPrice\n                );\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index8 in $$obj) {\n      $$l++;\n      var image = $$obj[pug_index8];\npug_mixins[\"card\"](\n                    image.path, \n                    image.brand, \n                    image.caption,\n                    image.price,\n                    image.sale,\n                    image.newPrice\n                );\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"sectionHead\"](\"men's fashion\", \"Shop our new arrivals from established brands\");\npug_html = pug_html + \"\\u003Cdiv class=\\\"gallery\\\"\\u003E\";\n// iterate imgManGalleryPath\n;(function(){\n  var $$obj = imgManGalleryPath;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {\n        var image = $$obj[pug_index9];\npug_mixins[\"card\"](\n                    image.path, \n                    image.brand, \n                    image.caption,\n                    image.price,\n                    image.sale,\n                    image.newPrice\n                );\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index9 in $$obj) {\n      $$l++;\n      var image = $$obj[pug_index9];\npug_mixins[\"card\"](\n                    image.path, \n                    image.brand, \n                    image.caption,\n                    image.price,\n                    image.sale,\n                    image.newPrice\n                );\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"sectionHead\"](\"avone styles\", \"Choose Your Favorite Color\");\npug_mixins[\"avone\"](\n            __webpack_require__(/*! ../src/img/avone/avone1.png */ \"./src/img/avone/avone1.png\"),\n            __webpack_require__(/*! ../src/img/avone/avone2.png */ \"./src/img/avone/avone2.png\"),\n            __webpack_require__(/*! ../src/img/womensFashion/women1.png */ \"./src/img/womensFashion/women1.png\")\n        );\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"bottomSection\"](\n        __webpack_require__(/*! ../src/img/tachen.png */ \"./src/img/tachen.png\"),\n        'OWN THE DAY',\n        'tachen 19',\n        '',\n        'shop collection'\n    );\npug_mixins[\"footer\"](\n                    __webpack_require__(/*! ../../src/img/logo.svg */ \"./src/img/logo.svg\"),\n                    caption,\n                    location,\n                    email,\n                    phone,\n                    shopItemList,\n                    helpItemList,\n                    aboutItemList\n                );\npug_html = pug_html + \"\\u003Cscript src=\\\"..\\u002Fscript.js\\\"\\u003E \\u003C\\u002Fscript\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";}.call(this,\"Date\" in locals_for_with?locals_for_with.Date:typeof Date!==\"undefined\"?Date:undefined,\"Object\" in locals_for_with?locals_for_with.Object:typeof Object!==\"undefined\"?Object:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://practice/./src/index.pug?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || (__webpack_require__(/*! fs */ \"?8f63\").readFileSync)(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack://practice/./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/img/avone/avone1.png":
/*!**********************************!*\
  !*** ./src/img/avone/avone1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/134ab900dfde90c41e5e.png\";\n\n//# sourceURL=webpack://practice/./src/img/avone/avone1.png?");

/***/ }),

/***/ "./src/img/avone/avone2.png":
/*!**********************************!*\
  !*** ./src/img/avone/avone2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/953180d1a2dcce9a75e6.png\";\n\n//# sourceURL=webpack://practice/./src/img/avone/avone2.png?");

/***/ }),

/***/ "./src/img/catagory/catagory1.svg":
/*!****************************************!*\
  !*** ./src/img/catagory/catagory1.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/9c23c54ede11c909cd12.svg\";\n\n//# sourceURL=webpack://practice/./src/img/catagory/catagory1.svg?");

/***/ }),

/***/ "./src/img/catagory/catagory2.svg":
/*!****************************************!*\
  !*** ./src/img/catagory/catagory2.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/b435ea145031e8a9fb31.svg\";\n\n//# sourceURL=webpack://practice/./src/img/catagory/catagory2.svg?");

/***/ }),

/***/ "./src/img/catagory/catagory3.svg":
/*!****************************************!*\
  !*** ./src/img/catagory/catagory3.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/2130e4b0f94cfadf1abf.svg\";\n\n//# sourceURL=webpack://practice/./src/img/catagory/catagory3.svg?");

/***/ }),

/***/ "./src/img/catagory/catagory4.svg":
/*!****************************************!*\
  !*** ./src/img/catagory/catagory4.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/f73c5a45a13f60c8bbd3.svg\";\n\n//# sourceURL=webpack://practice/./src/img/catagory/catagory4.svg?");

/***/ }),

/***/ "./src/img/heroSection.png":
/*!*********************************!*\
  !*** ./src/img/heroSection.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/2a647f9fda0fd1554702.png\";\n\n//# sourceURL=webpack://practice/./src/img/heroSection.png?");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/41e534c9bfcab4b68e4a.svg\";\n\n//# sourceURL=webpack://practice/./src/img/logo.svg?");

/***/ }),

/***/ "./src/img/mensFashion/men1.svg":
/*!**************************************!*\
  !*** ./src/img/mensFashion/men1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/0bc08cdf7f5eb50ac963.svg\";\n\n//# sourceURL=webpack://practice/./src/img/mensFashion/men1.svg?");

/***/ }),

/***/ "./src/img/mensFashion/men2.svg":
/*!**************************************!*\
  !*** ./src/img/mensFashion/men2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/ad1b18ebe320b11a1b66.svg\";\n\n//# sourceURL=webpack://practice/./src/img/mensFashion/men2.svg?");

/***/ }),

/***/ "./src/img/mensFashion/men3.svg":
/*!**************************************!*\
  !*** ./src/img/mensFashion/men3.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/91316e1f28f575265ba8.svg\";\n\n//# sourceURL=webpack://practice/./src/img/mensFashion/men3.svg?");

/***/ }),

/***/ "./src/img/mensFashion/men4.svg":
/*!**************************************!*\
  !*** ./src/img/mensFashion/men4.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/330aea3965c33c525312.svg\";\n\n//# sourceURL=webpack://practice/./src/img/mensFashion/men4.svg?");

/***/ }),

/***/ "./src/img/tachen.png":
/*!****************************!*\
  !*** ./src/img/tachen.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/9072ffcf1884662b8f04.png\";\n\n//# sourceURL=webpack://practice/./src/img/tachen.png?");

/***/ }),

/***/ "./src/img/womensFashion/women1.png":
/*!******************************************!*\
  !*** ./src/img/womensFashion/women1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/78dc57b4ce293cfec53c.png\";\n\n//# sourceURL=webpack://practice/./src/img/womensFashion/women1.png?");

/***/ }),

/***/ "./src/img/womensFashion/women2.png":
/*!******************************************!*\
  !*** ./src/img/womensFashion/women2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/212c67f55e08f63e3ddf.png\";\n\n//# sourceURL=webpack://practice/./src/img/womensFashion/women2.png?");

/***/ }),

/***/ "./src/img/womensFashion/women3.png":
/*!******************************************!*\
  !*** ./src/img/womensFashion/women3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/72be48c961aaf4ca6ea3.png\";\n\n//# sourceURL=webpack://practice/./src/img/womensFashion/women3.png?");

/***/ }),

/***/ "./src/img/womensFashion/women4.png":
/*!******************************************!*\
  !*** ./src/img/womensFashion/women4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/bdb9c42adad7c267d52a.png\";\n\n//# sourceURL=webpack://practice/./src/img/womensFashion/women4.png?");

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://practice/fs_(ignored)?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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