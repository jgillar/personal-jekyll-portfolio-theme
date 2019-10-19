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
/******/ 	return __webpack_require__(__webpack_require__.s = "../assets/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/css/custom.css":
/*!********************************!*\
  !*** ../assets/css/custom.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../assets/css/custom.css?");

/***/ }),

/***/ "../assets/css/normalize.css":
/*!***********************************!*\
  !*** ../assets/css/normalize.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../assets/css/normalize.css?");

/***/ }),

/***/ "../assets/css/simpleLightbox.min.css":
/*!********************************************!*\
  !*** ../assets/css/simpleLightbox.min.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///../assets/css/simpleLightbox.min.css?");

/***/ }),

/***/ "../assets/scripts/index.js":
/*!**********************************!*\
  !*** ../assets/scripts/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/normalize.css */ \"../assets/css/normalize.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_simpleLightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/simpleLightbox.min.css */ \"../assets/css/simpleLightbox.min.css\");\n/* harmony import */ var _css_simpleLightbox_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_simpleLightbox_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/custom.css */ \"../assets/css/custom.css\");\n/* harmony import */ var _css_custom_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_custom_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _simpleLightbox_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simpleLightbox.min.js */ \"../assets/scripts/simpleLightbox.min.js\");\n/* harmony import */ var _simpleLightbox_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_simpleLightbox_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.js */ \"../assets/scripts/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar array = [1, 2, 3];\nArray.from(array).forEach($item => {\n  console.log($item);\n});\n\n//# sourceURL=webpack:///../assets/scripts/index.js?");

/***/ }),

/***/ "../assets/scripts/main.js":
/*!*********************************!*\
  !*** ../assets/scripts/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// animate smooth scrolling to an element on the page\n// adapted from here: https://jsfiddle.net/s61x7c4e/\nlet doScrolling = (element, duration) => {\n  if (element == null) {\n    return false;\n  }\n\n  let startingY = window.pageYOffset;\n  let elementY = window.pageYOffset + element.getBoundingClientRect().top; // If element is close to page's bottom then window will scroll only to some position above the element.\n\n  let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;\n  let diff = targetY - startingY; // Easing function: easeInOutCubic\n  // From: https://gist.github.com/gre/1650294\n\n  let easing = t => {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  };\n\n  let start;\n  if (!diff) return; // Bootstrap our animation - it will get called right before next frame shall be rendered.\n\n  window.requestAnimationFrame(function step(timestamp) {\n    if (!start) start = timestamp; // Elapsed miliseconds since start of scrolling.\n\n    let time = timestamp - start; // Get percent of completion in range [0, 1].\n\n    let percent = Math.min(time / duration, 1); // Apply the easing.\n    // It can cause bad-looking slow frames in browser performance tool, so be careful.\n\n    percent = easing(percent);\n    window.scrollTo(0, startingY + diff * percent); // Proceed with animation as long as we wanted it to.\n\n    if (time < duration) {\n      window.requestAnimationFrame(step);\n    }\n  });\n};\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  let navigationLinks = document.querySelectorAll(\"#main-navigation a\");\n  navigationLinks.forEach(link => {\n    link.addEventListener(\"click\", function (event) {\n      let target = this.href.slice(this.href.indexOf(\"#\") + 1);\n\n      if (document.getElementById(target) != null) {\n        doScrolling(document.getElementById(target), 1250);\n        event.preventDefault();\n      }\n    });\n  }); //make project page images equal height\n\n  if (document.body.className.indexOf(\"project\") != -1) {\n    let images = document.querySelectorAll(\".screenshot-row img\");\n    images.forEach(img => {\n      //have to wait for images to load before changing their container's widths\n      //otherwise naturalHeight/Width is 0\n      img.addEventListener(\"load\", event => {\n        let aspectRatio = img.naturalWidth / img.naturalHeight;\n        img.parentElement.style.flex = aspectRatio + \" 1 0\";\n      });\n    }); //lightbox\n    //querySelectorAll returns a NodeList so we need to convert it to an array\n\n    let imgListArr = [].slice.call(document.querySelectorAll(\".screenshot-list img\"));\n    let imgList = imgListArr.map(img => img.src);\n    let SimpleLightbox = window.SimpleLightbox;\n    imgListArr.forEach((img, index) => {\n      img.addEventListener(\"click\", function (event) {\n        SimpleLightbox.open({\n          items: imgList,\n          startAt: index\n        });\n      });\n    });\n  } //contact footer\n  //encode email info so spambots can't get it\n\n\n  let address = \"amFtaWUuZ2lsbGFyQGdtYWlsLmNvbQ==\"; //base64 encoded\n\n  let start = \"bWFpbHRv\";\n  let emailElement = document.getElementById(\"mail\");\n  emailElement.href = atob(start) + \":\" + atob(address);\n  emailElement.innerHTML = \"\" + atob(address);\n});\n\n//# sourceURL=webpack:///../assets/scripts/main.js?");

/***/ }),

/***/ "../assets/scripts/simpleLightbox.min.js":
/*!***********************************************!*\
  !*** ../assets/scripts/simpleLightbox.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function (t, e) {\n   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(this, function () {\n  function e(t) {\n    for (var e = 1; e < arguments.length; e++) {\n      var n = arguments[e];\n      if (n) for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);\n    }\n\n    return t;\n  }\n\n  function i(t, e) {\n    t && e && (t.className += \" \" + e);\n  }\n\n  function s(t, e) {\n    t && e && (t.className = t.className.replace(new RegExp(\"(\\\\s|^)\" + e + \"(\\\\s|$)\"), \" \").trim());\n  }\n\n  function o(t) {\n    var e = document.createElement(\"div\");\n    return e.innerHTML = t.trim(), e.childNodes[0];\n  }\n\n  function l(t, e) {\n    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);\n  }\n\n  function r(t) {\n    this.init.apply(this, arguments);\n  }\n\n  return r.defaults = {\n    elementClass: \"\",\n    elementLoadingClass: \"slbLoading\",\n    htmlClass: \"slbActive\",\n    closeBtnClass: \"\",\n    nextBtnClass: \"\",\n    prevBtnClass: \"\",\n    loadingTextClass: \"\",\n    closeBtnCaption: \"Close\",\n    nextBtnCaption: \"Next\",\n    prevBtnCaption: \"Previous\",\n    loadingCaption: \"Loading...\",\n    bindToItems: !0,\n    closeOnOverlayClick: !0,\n    closeOnEscapeKey: !0,\n    nextOnImageClick: !0,\n    showCaptions: !0,\n    captionAttribute: \"title\",\n    urlAttribute: \"href\",\n    startAt: 0,\n    loadingTimeout: 100,\n    appendTarget: \"body\",\n    beforeSetContent: null,\n    beforeClose: null,\n    afterClose: null,\n    beforeDestroy: null,\n    afterDestroy: null,\n    videoRegex: new RegExp(/youtube.com|vimeo.com/)\n  }, e(r.prototype, {\n    init: function (n) {\n      n = this.options = e({}, r.defaults, n);\n      var t,\n          i = this;\n      n.$items && (t = n.$items.get()), n.elements && (t = [].slice.call(\"string\" == typeof n.elements ? document.querySelectorAll(n.elements) : n.elements)), this.eventRegistry = {\n        lightbox: [],\n        thumbnails: []\n      }, this.items = [], this.captions = [], t && t.forEach(function (t, e) {\n        i.items.push(t.getAttribute(n.urlAttribute)), i.captions.push(t.getAttribute(n.captionAttribute)), n.bindToItems && i.addEvent(t, \"click\", function (t) {\n          t.preventDefault(), i.showPosition(e);\n        }, \"thumbnails\");\n      }), n.items && (this.items = n.items), n.captions && (this.captions = n.captions);\n    },\n    addEvent: function (t, e, n, i) {\n      return this.eventRegistry[i || \"lightbox\"].push({\n        element: t,\n        eventName: e,\n        callback: n\n      }), t.addEventListener(e, n), this;\n    },\n    removeEvents: function (t) {\n      return this.eventRegistry[t].forEach(function (t) {\n        t.element.removeEventListener(t.eventName, t.callback);\n      }), this.eventRegistry[t] = [], this;\n    },\n    next: function () {\n      return this.showPosition(this.currentPosition + 1);\n    },\n    prev: function () {\n      return this.showPosition(this.currentPosition - 1);\n    },\n    normalizePosition: function (t) {\n      return t >= this.items.length ? t = 0 : t < 0 && (t = this.items.length - 1), t;\n    },\n    showPosition: function (t) {\n      var e = this.normalizePosition(t);\n      return void 0 !== this.currentPosition && (this.direction = e > this.currentPosition ? \"next\" : \"prev\"), this.currentPosition = e, this.setupLightboxHtml().prepareItem(this.currentPosition, this.setContent).show();\n    },\n    loading: function (t) {\n      var e = this,\n          n = this.options;\n      t ? this.loadingTimeout = setTimeout(function () {\n        i(e.$el, n.elementLoadingClass), e.$content.innerHTML = '<p class=\"slbLoadingText ' + n.loadingTextClass + '\">' + n.loadingCaption + \"</p>\", e.show();\n      }, n.loadingTimeout) : (s(this.$el, n.elementLoadingClass), clearTimeout(this.loadingTimeout));\n    },\n    prepareItem: function (t, e) {\n      var n = this,\n          i = this.items[t];\n      if (this.loading(!0), this.options.videoRegex.test(i)) e.call(n, o('<div class=\"slbIframeCont\"><iframe class=\"slbIframe\" frameborder=\"0\" allowfullscreen src=\"' + i + '\"></iframe></div>'));else {\n        var s = o('<div class=\"slbImageWrap\"><img class=\"slbImage\" src=\"' + i + '\" /></div>');\n        this.$currentImage = s.querySelector(\".slbImage\"), this.options.showCaptions && this.captions[t] && s.appendChild(o('<div class=\"slbCaption\">' + this.captions[t] + \"</div>\")), this.loadImage(i, function () {\n          n.setImageDimensions(), e.call(n, s), n.loadImage(n.items[n.normalizePosition(n.currentPosition + 1)]);\n        });\n      }\n      return this;\n    },\n    loadImage: function (t, e) {\n      if (!this.options.videoRegex.test(t)) {\n        var n = new Image();\n        e && (n.onload = e), n.src = t;\n      }\n    },\n    setupLightboxHtml: function () {\n      var t = this.options;\n      return this.$el || (this.$el = o('<div class=\"slbElement ' + t.elementClass + '\"><div class=\"slbOverlay\"></div><div class=\"slbWrapOuter\"><div class=\"slbWrap\"><div class=\"slbContentOuter\"><div class=\"slbContent\"></div><button type=\"button\" title=\"' + t.closeBtnCaption + '\" class=\"slbCloseBtn ' + t.closeBtnClass + '\">×</button>' + (1 < this.items.length ? '<div class=\"slbArrows\"><button type=\"button\" title=\"' + t.prevBtnCaption + '\" class=\"prev slbArrow' + t.prevBtnClass + '\">' + t.prevBtnCaption + '</button><button type=\"button\" title=\"' + t.nextBtnCaption + '\" class=\"next slbArrow' + t.nextBtnClass + '\">' + t.nextBtnCaption + \"</button></div>\" : \"\") + \"</div></div></div></div>\"), this.$content = this.$el.querySelector(\".slbContent\")), this.$content.innerHTML = \"\", this;\n    },\n    show: function () {\n      return this.modalInDom || (document.querySelector(this.options.appendTarget).appendChild(this.$el), i(document.documentElement, this.options.htmlClass), this.setupLightboxEvents(), this.modalInDom = !0), this;\n    },\n    setContent: function (t) {\n      var e = \"string\" == typeof t ? o(t) : t;\n      return this.loading(!1), this.setupLightboxHtml(), s(this.$content, \"slbDirectionNext\"), s(this.$content, \"slbDirectionPrev\"), this.direction && i(this.$content, \"next\" === this.direction ? \"slbDirectionNext\" : \"slbDirectionPrev\"), this.options.beforeSetContent && this.options.beforeSetContent(e, this), this.$content.appendChild(e), this;\n    },\n    setImageDimensions: function () {\n      this.$currentImage && (this.$currentImage.style.maxHeight = (\"innerHeight\" in window ? window.innerHeight : document.documentElement.offsetHeight) + \"px\");\n    },\n    setupLightboxEvents: function () {\n      var n = this;\n      return this.eventRegistry.lightbox.length || this.addEvent(this.$el, \"click\", function (t) {\n        var e = t.target;\n        l(e, \".slbCloseBtn\") || n.options.closeOnOverlayClick && l(e, \".slbWrap\") ? n.close() : l(e, \".slbArrow\") ? l(e, \".next\") ? n.next() : n.prev() : n.options.nextOnImageClick && 1 < n.items.length && l(e, \".slbImage\") && n.next();\n      }).addEvent(document, \"keyup\", function (t) {\n        n.options.closeOnEscapeKey && 27 === t.keyCode && n.close(), 1 < n.items.length && ((39 === t.keyCode || 68 === t.keyCode) && n.next(), (37 === t.keyCode || 65 === t.keyCode) && n.prev());\n      }).addEvent(window, \"resize\", function () {\n        n.setImageDimensions();\n      }), this;\n    },\n    close: function () {\n      this.modalInDom && (this.runHook(\"beforeClose\"), this.removeEvents(\"lightbox\"), this.$el && this.$el.parentNode.removeChild(this.$el), s(document.documentElement, this.options.htmlClass), this.modalInDom = !1, this.runHook(\"afterClose\")), this.direction = void 0, this.currentPosition = this.options.startAt;\n    },\n    destroy: function () {\n      this.close(), this.runHook(\"beforeDestroy\"), this.removeEvents(\"thumbnails\"), this.runHook(\"afterDestroy\");\n    },\n    runHook: function (t) {\n      this.options[t] && this.options[t](this);\n    }\n  }), r.open = function (t) {\n    var e = new r(t);\n    return t.content ? e.setContent(t.content).show() : e.showPosition(e.options.startAt);\n  }, r.registerAsJqueryPlugin = function (i) {\n    i.fn.simpleLightbox = function (t) {\n      var e,\n          n = this;\n      return this.each(function () {\n        i.data(this, \"simpleLightbox\") || (e = e || new r(i.extend({}, t, {\n          $items: n\n        })), i.data(this, \"simpleLightbox\", e));\n      });\n    }, i.SimpleLightbox = r;\n  }, \"undefined\" != typeof window && window.jQuery && r.registerAsJqueryPlugin(window.jQuery), r;\n});\n\n//# sourceURL=webpack:///../assets/scripts/simpleLightbox.min.js?");

/***/ })

/******/ });