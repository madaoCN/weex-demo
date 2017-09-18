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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(57)
	)

	/* script */
	__vue_exports__ = __webpack_require__(58)

	/* template */
	var __vue_template__ = __webpack_require__(63)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/joke.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0a32fd26"
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var log = weex.requireModule('log');
	var pageJS = weex.config.bundleUrl;
	pageJS = pageJS.substring(pageJS.lastIndexOf('/') + 1);
	// log.event(pageJS, pageJS)

	/**
	 * 展示内容等级： 1 普通， 2，17+
	 * */
	var level = 2;
	module.exports = {
	    level: level,
	    js: function js(jsURL) {
	        var bundleUrl = weex.config.bundleUrl;
	        var baseURL = bundleUrl.substring(0, bundleUrl.lastIndexOf("/") + 1);
	        console.log("=====" + baseURL + jsURL);
	        return baseURL + jsURL;
	    },
	    image: function image(imgURL) {
	        // var url = "http://127.0.0.1:12580/resources/" + imgURL
	        var url = "http://images-file.oss-cn-hangzhou.aliyuncs.com/weex/jandan/1.0.2/resources/" + imgURL;
	        //		url += "?" + new Date().getTime()
	        return url;
	    },
	    params: function params(key) {
	        var bundleUrl = weex.config.bundleUrl;
	        var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	        var match = bundleUrl.match(reg);
	        return match && match[1];
	    },
	    toParams: function toParams(obj) {
	        var param = "";
	        for (var name in obj) {
	            if (typeof obj[name] != 'function') {
	                param += "&" + name + "=" + encodeURI(obj[name]);
	            }
	        }
	        return param.substring(1);
	    },
	    barHeight: function barHeight() {
	        if (weex.config.env.platform == 'android') {
	            return 98;
	        }
	        return 128;
	    }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(11)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/include/navpage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-61ab9ba6"
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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    components: {
	        navbar: __webpack_require__(7)
	    },
	    props: {
	        dataRole: { default: 'navbar' },
	        backgroundColor: { default: 'black' },
	        height: { default: 88 },
	        title: { default: "" },
	        titleColor: { default: 'black' },
	        rightItemSrc: { default: '' },
	        rightItemTitle: { default: '' },
	        rightItemColor: { default: 'black' },
	        leftItemSrc: { default: '' },
	        leftItemTitle: { default: '' },
	        leftItemColor: { default: 'black' }
	    },
	    mounted: function mounted() {
	        //            this.height = weex.config.env.platform === 'iOS'? 128:88;
	        this.height = _config2.default.barHeight();
	    },
	    methods: {
	        naviBarRightItemClick: function naviBarRightItemClick(e) {
	            this.$emit('naviBarRightItemClick', e);
	        },
	        naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	            this.$emit('naviBarLeftItemClick', e);
	        }
	    }
	}; //
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/include/navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0d5f7036"
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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 28,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

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
	//

	module.exports = {
	    props: {
	        dataRole: { default: 'navbar' },
	        //导航条背景色
	        backgroundColor: { default: 'black' },
	        //导航条高度
	        height: { default: 88 },
	        //导航条标题
	        title: { default: '' },
	        //导航条标题颜色
	        titleColor: { default: 'black' },
	        //右侧按钮图片
	        rightItemSrc: { default: '' },
	        //右侧按钮标题
	        rightItemTitle: { default: '' },
	        //右侧按钮标题颜色
	        rightItemColor: { default: 'black' },
	        //左侧按钮图片
	        leftItemSrc: { default: '' },
	        //左侧按钮标题
	        leftItemTitle: { default: '' },
	        //左侧按钮颜色
	        leftItemColor: { default: 'black' }
	    },
	    methods: {
	        onclickrightitem: function onclickrightitem(e) {
	            this.$emit('naviBarRightItemClick');
	        },
	        onclickleftitem: function onclickleftitem(e) {
	            this.$emit('naviBarLeftItemClick');
	        }
	    },
	    events: {
	        naviBarLeftItemClick: function naviBarLeftItemClick(e) {
	            //navigator.pop(()=>{})
	            console.log('pop');
	        }
	    }
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    },
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: ["right-text"],
	    style: {
	      color: _vm.rightItemColor
	    },
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: ["right-image"],
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }) : _vm._e(), (!_vm.leftItemSrc) ? _c('text', {
	    staticClass: ["left-text"],
	    style: {
	      color: _vm.leftItemColor
	    },
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: ["left-image"],
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }) : _vm._e(), _c('text', {
	    staticClass: ["center-text"],
	    style: {
	      color: _vm.titleColor
	    },
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _c('div', {
	    staticClass: ["wrapper"],
	    style: {
	      marginTop: _vm.height
	    }
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(17)
	)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/mdSlider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-73ed6ada"
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


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "image": {
	    "width": 750,
	    "height": 430
	  },
	  "slider": {
	    "width": 750,
	    "height": 430
	  },
	  "frame": {
	    "width": 750,
	    "height": 430,
	    "position": "relative"
	  },
	  "indicator": {
	    "width": 750,
	    "height": 40,
	    "itemColor": "white",
	    "itemSelectedColor": "#b4282d",
	    "itemSize": 12,
	    "position": "absolute",
	    "bottom": 10,
	    "right": 0
	  }
	}

/***/ }),
/* 18 */
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

	exports.default = {
	    props: ["imageList"],

	    data: function data() {
	        return {};
	    },

	    methods: {
	        onchange: function onchange(event) {}
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "autoPlay": "true",
	      "interval": "5000"
	    },
	    on: {
	      "change": _vm.onchange
	    }
	  }, [_vm._l((_vm.imageList), function(img) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "resize": "cover",
	        "src": img.src
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "backgroundColor": "#ffffff",
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "auther-box": {
	    "height": 75,
	    "paddingTop": 10,
	    "paddingLeft": 25,
	    "marginBottom": 25,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row"
	  },
	  "auther-img": {
	    "height": 58,
	    "width": 58,
	    "borderRadius": 58
	  },
	  "auther-name": {
	    "flex": 1,
	    "fontSize": 26,
	    "height": 58,
	    "paddingLeft": 20,
	    "paddingTop": 10
	  },
	  "img-box": {
	    "display": "flex",
	    "flexDirection": "row",
	    "flexWrap": "nowrap"
	  },
	  "main-img": {
	    "flex": 1,
	    "height": 380
	  },
	  "sub-imgs-box": {
	    "width": 190,
	    "height": 380
	  },
	  "sub-img": {
	    "height": 188,
	    "width": 190,
	    "marginLeft": 3,
	    "marginBottom": 3
	  },
	  "tlt-box": {
	    "height": 80,
	    "padding": 20,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row"
	  },
	  "tlt": {
	    "fontSize": 34,
	    "flex": 1,
	    "overflow": "hidden",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "price": {
	    "fontSize": 34,
	    "color": "#b4282d",
	    "paddingLeft": 10
	  },
	  "info": {
	    "fontSize": 26,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "overflow": "hidden",
	    "lines": 2,
	    "textOverflow": "ellipsis"
	  },
	  "tag-box": {
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "border-radius-box": {
	    "borderWidth": 1,
	    "borderColor": "#FF0000",
	    "borderRadius": 10,
	    "color": "#FF0000"
	  },
	  "l-text-box": {
	    "textAlign": "left",
	    "height": 40,
	    "lineHeight": 30,
	    "marginLeft": 20
	  },
	  "r-text-box": {
	    "textAlign": "right"
	  }
	}

/***/ }),
/* 30 */
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
	    props: ["article", "url"],
	    data: function data() {
	        return {};
	    },

	    methods: {}
	};
	module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    on: {
	      "click": function($event) {
	        _vm.jumpWeb(_vm.url)
	      }
	    }
	  }, [_c('div', {
	    staticClass: ["auther-box"]
	  }, [_c('image', {
	    staticClass: ["auther-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.autherImg
	    }
	  }), _c('text', {
	    staticClass: ["auther-name"]
	  }, [_vm._v(_vm._s(_vm.article.auther))])]), _c('div', {
	    staticClass: ["img-box"]
	  }, [(typeof _vm.article.img == 'string') ? [_c('image', {
	    staticClass: ["main-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img
	    }
	  })] : (typeof _vm.article.img == 'object' && _vm.article.img.length >= 3) ? [_c('image', {
	    staticClass: ["main-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[0]
	    }
	  }), _c('div', {
	    staticClass: ["sub-imgs-box"]
	  }, [_c('image', {
	    staticClass: ["sub-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[1]
	    }
	  }), _c('image', {
	    staticClass: ["sub-img"],
	    attrs: {
	      "resize": "cover",
	      "src": _vm.article.img[2]
	    }
	  })])] : _vm._e()], 2), _c('div', {
	    staticClass: ["tlt-box"]
	  }, [_c('text', {
	    staticClass: ["tlt"]
	  }, [_vm._v(_vm._s(_vm.article.tlt))])]), _c('text', {
	    staticClass: ["info"]
	  }, [_vm._v(_vm._s(_vm.article.info))]), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["tag-box"]
	  }, [_c('text', {
	    staticClass: ["info", "border-radius-box", "l-text-box"]
	  }, [_vm._v("在路上")]), _c('text', {
	    staticClass: ["info", "r-text-box"]
	  }, [_vm._v("2评论 ● 75喜欢")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

	module.exports = {
	  "warpper": {
	    "height": 60,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 10
	  },
	  "acc-left": {
	    "backgroundColor": "#FF0000",
	    "width": 5,
	    "height": 30,
	    "marginLeft": 30
	  },
	  "acc-title-font": {
	    "fontSize": 26,
	    "color": "#808080"
	  },
	  "acc-title": {
	    "height": 30,
	    "width": 320,
	    "marginLeft": 20,
	    "marginTop": 2
	  }
	}

/***/ }),
/* 36 */
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

	exports.default = {
	    props: ["title"]

	};
	module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["warpper"]
	  }, [_c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticClass: ["acc-left"]
	  }), _c('text', {
	    staticClass: ["acc-title", "acc-title-font"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('text', {
	    staticClass: ["acc-title-font"],
	    staticStyle: {
	      marginRight: "20"
	    }
	  }, [_vm._v("换一批")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "flex-start",
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "textAlign": "center"
	  },
	  "box-font": {
	    "fontSize": 26,
	    "color": "#FF0000"
	  },
	  "text-box": {
	    "borderWidth": 1,
	    "borderColor": "#FF0000",
	    "borderRadius": 10,
	    "height": 60,
	    "lineHeight": 60,
	    "marginTop": 20,
	    "marginLeft": 10,
	    "marginRight": 10
	  }
	}

/***/ }),
/* 39 */
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

	exports.default = {
	    data: function data() {
	        return {
	            topics: ["教育", "读书", "短片小说", "杂文", "脑洞", "旅行", "在路上", "@IT 互联网", "散文", "会计"].sort()
	        };
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, _vm._l((_vm.topics), function(topic, index) {
	    return _c('div', [_c('text', {
	      staticClass: ["box-font", "text-box"],
	      attrs: {
	        "id": index
	      }
	    }, [_vm._v("  " + _vm._s(topic) + "  ")])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 41 */
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
/* 42 */
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
/* 43 */
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

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	module.exports = {
	  "comment": {
	    "width": 40,
	    "height": 40
	  },
	  "container": {
	    "backgroundColor": "#ffffff"
	  },
	  "item": {
	    "backgroundColor": "#ffffff",
	    "marginTop": 40,
	    "padding": 20,
	    "paddingBottom": 0
	  },
	  "item-author": {
	    "color": "#999999",
	    "fontSize": 24
	  },
	  "item-summary": {
	    "color": "#333333",
	    "fontSize": 26
	  },
	  "opeart-bar": {
	    "marginTop": 20,
	    "height": 80,
	    "borderTopWidth": 1,
	    "borderTopStyle": "dashed",
	    "borderTopColor": "#e3e3e3",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "flexDirection": "row"
	  },
	  "refresh": {
	    "width": 750,
	    "paddingBottom": 20,
	    "paddingTop": 30,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "box-line": {
	    "borderWidth": 1,
	    "borderColor": "#f3f3f3"
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var browser = weex.requireModule('browser');
	var navigator = weex.requireModule('navigator');
	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');

	module.exports = {
	    props: {
	        title: { default: '段子' }
	    },
	    data: function data() {
	        return {
	            config: _config2.default,
	            datalist: [1, 1, 1, 1, 1, 1, 1],
	            showRefresh: 'hide',
	            banners: [{ title: '', src: 'https://img.alicdn.com/simba/img/TB1rdArSFXXXXbYXpXXSutbFXXX.jpg' }, { title: '', src: 'http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg' }, { title: '', src: 'https://img.alicdn.com/imgextra/i1/1752059116/TB2pke1aK38SeJjSZFPXXc_vFXa_!!1752059116.jpg_Q90.jpg' }, { title: '', src: 'https://img.alicdn.com/imgextra/i1/1910146537/TB2CJn.at9iQuJjSsphXXbMhpXa_!!1910146537.jpg_Q90.jpg' }],
	            articles: [{ auther: '严选推荐', autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64', tlt: '年中扫一扫，下半年运势好', info: '6个家庭清洁小技巧', price: '6.9', img: 'http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg' }, { auther: '服装组：小服', autherImg: 'https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64', tlt: '小姐姐们的运动衣提前上架啦', info: '前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。大家的...', price: '', img: ['https://yanxuan.nosdn.127.net/15041772896010423.jpg', 'https://yanxuan.nosdn.127.net/15041772789070419.jpg', 'https://yanxuan.nosdn.127.net/15041772808640420.jpg'] }, { auther: '居家组：朵朵', autherImg: 'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64', tlt: '初秋，最想用它来裸睡', info: '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...', price: '', img: ['https://yanxuan.nosdn.127.net/15040927525260414.jpg', 'https://yanxuan.nosdn.127.net/15040927586650416.jpg', 'https://yanxuan.nosdn.127.net/15040927556820415.jpg'] }, { auther: '严选推荐', autherImg: 'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64', tlt: '不为繁华易匠心', info: '那些值得珍藏的严选手作好物', price: '29', img: 'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg' }]
	        };
	    },

	    computed: {
	        refreshTips: function refreshTips() {
	            return this.showRefresh == 'hide' ? '下拉获取最新数据' : '加载中...';
	        }
	    },
	    created: function created() {
	        this.onrefresh();
	        //            storage.getItem('agreeRegister', (res)=>{
	        //                if(res.result != 'success') {
	        //                    modal.alert({
	        //                        message:'用户协议更新',
	        //                        okTitle:'立即查看'
	        //                    }, ()=>{
	        //                        navigator.push({url:config.js('components/user-agreement.js')},()=>{})
	        //                    })
	        //                }
	        //            })
	    },

	    methods: {
	        onrefresh: function onrefresh() {
	            var _this = this;

	            this.showRefresh = 'show';
	            //                jandan.articleIndex().then(datalist=>{
	            //                    this.datalist = datalist
	            //                    this.showRefresh = 'hide'
	            //                })
	            setTimeout(function () {
	                _this.showRefresh = 'hide';
	            }, 2000);
	        },
	        goDetail: function goDetail(e) {
	            var item = e.target.attr.item;
	            //                if(item) {
	            //                    jandan.makeRead(item.title)
	            //                    item.isRead = true
	            //                    jandan.toDetail(item)
	            //                }
	        },
	        goComments: function goComments(e) {
	            var item = e.target.attr.item;
	            //                if(item) {
	            //                    jandan.makeRead(item.title)
	            //                    item.isRead = true
	            //                    jandan.toCommentsDetail(item)
	            //                }
	        },
	        more: function more() {
	            //				navigator.push({url:config.js('middle.js')},()=>{})
	            navigator.push({ url: _config2.default.js('category-index.js') }, function () {});
	        }
	    },
	    components: {
	        "navpage": __webpack_require__(4),
	        "topic-slider": __webpack_require__(59),
	        'md-slider': __webpack_require__(16),
	        'section-header': __webpack_require__(60),
	        'topic-collection': __webpack_require__(61),
	        'article-cell': __webpack_require__(62)
	    }
	};

/***/ }),
/* 59 */
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


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(35)
	)

	/* script */
	__vue_exports__ = __webpack_require__(36)

	/* template */
	var __vue_template__ = __webpack_require__(37)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/sectionHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bfa4d2b2"
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


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(38)
	)

	/* script */
	__vue_exports__ = __webpack_require__(39)

	/* template */
	var __vue_template__ = __webpack_require__(40)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/topicCollection.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3bacb142"
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


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(29)
	)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/articleCell.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4566dee6"
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


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('list', [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.showRefresh
	    },
	    on: {
	      "refresh": _vm.onrefresh
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v(_vm._s(_vm.refreshTips))])]), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('md-slider', {
	    attrs: {
	      "imageList": _vm.banners
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('topic-slider')], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('section-header', {
	    attrs: {
	      "title": "热门专题"
	    }
	  })], 1), _c('cell', {
	    staticClass: ["pp"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('topic-collection')], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('section-header', {
	    staticStyle: {
	      marginTop: "30"
	    },
	    attrs: {
	      "title": "热门文章"
	    }
	  })], 1), _vm._l((_vm.articles), function(ar) {
	    return _c('cell', {
	      staticClass: ["box-line"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('article-cell', {
	      attrs: {
	        "article": ar,
	        "url": ""
	      }
	    })], 1)
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);