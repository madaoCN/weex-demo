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
	__vue_styles__.push(__webpack_require__(32)
	)

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(34)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/headerInfoBlock.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-75f69607"
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

/***/ 32:
/***/ (function(module, exports) {

	module.exports = {
	  "portrait": {
	    "width": 150,
	    "height": 150,
	    "borderRadius": 75
	  },
	  "warpper": {
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "margin": 50,
	    "flexDirection": "row"
	  },
	  "i-info": {
	    "marginLeft": 20,
	    "width": 320
	  },
	  "info": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start"
	  },
	  "right": {
	    "width": 30,
	    "height": 30
	  },
	  "credit-block": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start"
	  },
	  "credit-title": {
	    "marginTop": 20,
	    "fontSize": 24,
	    "color": "#FF0000",
	    "borderColor": "#FF0000",
	    "borderWidth": 1,
	    "padding": 8,
	    "textAlign": "center",
	    "borderRadius": 8
	  }
	}

/***/ }),

/***/ 33:
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

	exports.default = {
	        props: ["userInfoStatus", "userInfo", "icon", "right"]
	};
	module.exports = exports["default"];

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["warpper"]
	  }, [_c('div', {
	    staticClass: ["info"]
	  }, [_c('image', {
	    staticClass: ["portrait"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _vm._m(0)]), _c('image', {
	    staticClass: ["right"],
	    attrs: {
	      "src": _vm.right
	    }
	  })])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["i-info"]
	  }, [_c('text', {
	    staticStyle: {
	      marginTop: "20px",
	      fontSize: "32"
	    }
	  }, [_vm._v("madaoCN")]), _c('div', {
	    staticClass: ["credit-block"]
	  }, [_c('text', {
	    staticClass: ["credit-title"]
	  }, [_vm._v("积分413分")]), _c('text', {
	    staticClass: ["credit-title"],
	    staticStyle: {
	      marginLeft: "20"
	    }
	  }, [_vm._v("积分商城")])])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });