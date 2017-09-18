// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/girdBlock.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d9ad8ba4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 6
	  },
	  "tlt": {
	    "textAlign": "center",
	    "fontSize": 30,
	    "marginTop": 30,
	    "marginBottom": 26,
	    "color": "#333333"
	  },
	  "box": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "center",
	    "width": 750
	  },
	  "box-item": {
	    "width": 350,
	    "height": 226,
	    "margin": 5,
	    "padding": 20,
	    "backgroundColor": "#efefef"
	  },
	  "i-name": {
	    "position": "relative",
	    "color": "#333333",
	    "fontSize": 28,
	    "width": 300
	  },
	  "i-price": {
	    "position": "relative",
	    "marginTop": 10,
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "i-price-n": {
	    "color": "#333333",
	    "fontSize": 36
	  },
	  "i-price-t": {
	    "color": "#333333",
	    "fontSize": 24,
	    "marginTop": 12
	  },
	  "i-state": {
	    "position": "relative",
	    "fontSize": 20,
	    "color": "#b8a989",
	    "width": 70,
	    "marginTop": 10,
	    "padding": 5,
	    "lineHeight": 20,
	    "textAlign": "center",
	    "borderWidth": 1,
	    "borderColor": "#b8a989",
	    "borderRadius": 4
	  },
	  "i-image": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 350,
	    "height": 226
	  }
	}

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	exports.default = {
	    props: ["title", "items"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        //            jumpWeb (_url) {
	        //                if(!_url) return;
	        //                const url = this.$getConfig().bundleUrl;
	        //                navigator.push({
	        //                    url: util.setBundleUrl(url, 'page/web.js?weburl='+_url) ,
	        //                    animated: "true"
	        //                });
	        //            }
	    }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["tlt", "iconfont"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["box"]
	  }, _vm._l((_vm.items), function(i) {
	    return _c('div', {
	      staticClass: ["box-item"],
	      on: {
	        "click": function($event) {
	          _vm.jumpWeb(i.url)
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["i-image"],
	      attrs: {
	        "resize": "cover",
	        "src": i.bg
	      }
	    }), _c('text', {
	      staticClass: ["i-name"]
	    }, [_vm._v(_vm._s(i.name))]), _c('div', {
	      staticClass: ["i-price"]
	    }, [_c('text', {
	      staticClass: ["i-price-n"]
	    }, [_vm._v(_vm._s(i.price))]), _c('text', {
	      staticClass: ["i-price-t"]
	    }, [_vm._v("元起")])]), (i.state) ? _c('text', {
	      staticClass: ["i-state"]
	    }, [_vm._v(_vm._s(i.state))]) : _vm._e()])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });