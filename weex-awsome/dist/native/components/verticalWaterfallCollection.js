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
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/verticalWaterfallCollection.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-443f6c0f"
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

/***/ 25:
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingBottom": 10,
	    "paddingTop": 26,
	    "width": 750
	  },
	  "tlt": {
	    "textAlign": "center",
	    "color": "#333333",
	    "width": 750,
	    "padding": 10,
	    "fontSize": 30
	  },
	  "gb-box": {
	    "padding": 16,
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "space-between"
	  },
	  "i-gd": {
	    "width": 350,
	    "height": 510,
	    "marginBottom": 20
	  },
	  "gd-img": {
	    "width": 350,
	    "height": 350,
	    "backgroundColor": "#f4f4f4"
	  },
	  "gd-tlt": {
	    "fontSize": 28,
	    "color": "#333333",
	    "width": 350,
	    "marginTop": 15,
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-info": {
	    "display": "block",
	    "fontSize": 28,
	    "width": 350,
	    "height": 65,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "color": "#9F8A60",
	    "backgroundColor": "#F1ECE2",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  },
	  "gd-price": {
	    "fontSize": 28,
	    "width": 350,
	    "marginTop": 10,
	    "color": "#b4282d",
	    "overflow": "hidden",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	'use strict';

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
	//

	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	exports.default = {
	    props: ["newGoods", "hotGoods", "head", "hasMore", "goods"],
	    data: function data() {
	        return {};
	    },

	    methods: {
	        jumpWeb: function jumpWeb(_url) {
	            modal.alert("under construction");
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["tlt"]
	  }, [_vm._v("猜你喜欢")]), _c('div', {
	    staticClass: ["gb-box"]
	  }, _vm._l((_vm.goods), function(i) {
	    return _c('div', {
	      staticClass: ["i-gd"]
	    }, [_c('image', {
	      staticClass: ["gd-img"],
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["gd-info"]
	    }, [_vm._v(_vm._s(i.info))]), _c('text', {
	      staticClass: ["gd-tlt"]
	    }, [_vm._v(_vm._s(i.tlt))]), _c('text', {
	      staticClass: ["gd-price"]
	    }, [_vm._v("¥" + _vm._s(i.price))])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });