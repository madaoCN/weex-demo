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
	__vue_styles__.push(__webpack_require__(41)
	)

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(43)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/topicSlider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f2e7eff6"
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

/***/ 41:
/***/ (function(module, exports) {

	module.exports = {
	  "tp-box": {
	    "backgroundColor": "#ffffff",
	    "height": 200,
	    "padding": 20
	  },
	  "i-tp": {
	    "height": 150,
	    "width": 275,
	    "margin": 10
	  },
	  "tp-img": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "width": 275,
	    "height": 150,
	    "borderRadius": 10,
	    "backgroundColor": "#f4f4f4"
	  },
	  "tp-name": {
	    "fontSize": 28,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "marginTop": 57,
	    "overflow": "hidden",
	    "textAlign": "center",
	    "color": "#ffffff",
	    "lines": 1,
	    "whiteSpace": "nowrap",
	    "textOverflow": "ellipsis"
	  }
	}

/***/ }),

/***/ 42:
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

	exports.default = {
	    data: function data() {
	        return {
	            topics: [{ name: '小说精选', img: 'https://yanxuan.nosdn.127.net/15030393722652401.jpg' }, { name: '简书大学堂', img: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg' }, { name: '7日热门', img: 'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png' }, { name: '简书招聘', img: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg' }]
	        };
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["tp-box"],
	    attrs: {
	      "scrollDirection": "horizontal",
	      "flexDirection": "row",
	      "showScrollbar": "false"
	    }
	  }, _vm._l((_vm.topics), function(i) {
	    return _c('div', {
	      staticClass: ["i-tp"]
	    }, [_c('image', {
	      staticClass: ["tp-img"],
	      attrs: {
	        "resize": "cover",
	        "src": i.img
	      }
	    }), _c('text', {
	      staticClass: ["tp-name"]
	    }, [_vm._v(_vm._s(i.name))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });