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

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(56)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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

/***/ 3:
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

/***/ 47:
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88,
	    "backgroundColor": "#D3D3D3"
	  }
	}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

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

	module.exports = {
	    props: {
	        tabItems: { default: [] },
	        selectedColor: { default: '#ff0000' },
	        unselectedColor: { default: '#000000' }
	    },
	    data: function data() {
	        return {
	            selectedIndex: 0
	        };
	    },
	    components: {
	        tabitem: __webpack_require__(49)
	    },
	    created: function created() {
	        this.select(this.selectedIndex);
	    },
	    methods: {
	        tabItemOnClick: function tabItemOnClick(e) {
	            this.selectedIndex = e.index;
	            this.select(e.index);
	            //                this.$emit('tabBarOnClick', e);
	        },
	        select: function select(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.icon = tabItem.selectedImage;
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.visibility = 'visible';
	                } else {
	                    tabItem.icon = tabItem.image;
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.visibility = 'hidden';
	                }
	            }
	        }
	    }
	};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(50)
	)

	/* script */
	__vue_exports__ = __webpack_require__(51)

	/* template */
	var __vue_template__ = __webpack_require__(52)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/include/tabitem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6bba25ba"
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

/***/ 50:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 30,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 10,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ }),

/***/ 51:
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

	module.exports = {
	    props: {
	        index: { default: 0 },
	        title: { default: '' },
	        titleColor: { default: '#000000' },
	        icon: { default: '' },
	        backgroundColor: { default: '#ffffff' }
	    },
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var params = {
	                index: this.index
	            };
	            this.$emit('tabItemOnClick', params);
	        }
	    }
	};

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"],
	    style: {
	      backgroundColor: _vm.backgroundColor
	    },
	    on: {
	      "click": _vm.onclickitem
	    }
	  }, [_c('image', {
	    staticClass: ["top-line"],
	    attrs: {
	      "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	    }
	  }), _c('image', {
	    staticClass: ["tab-icon"],
	    attrs: {
	      "src": _vm.icon
	    }
	  }), _c('text', {
	    staticClass: ["tab-text"],
	    style: {
	      color: _vm.titleColor
	    }
	  }, [_vm._v(_vm._s(_vm.title) + "\n    ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._l((_vm.tabItems), function(item, i) {
	    return _c('embed', {
	      key: i,
	      staticClass: ["content"],
	      style: {
	        visibility: item.visibility
	      },
	      attrs: {
	        "src": item.src,
	        "type": "weex"
	      }
	    })
	  }), _c('div', {
	    staticClass: ["tabbar"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.tabItems), function(item) {
	    return _c('tabitem', {
	      key: item.index,
	      attrs: {
	        "index": item.index,
	        "icon": item.icon,
	        "title": item.title,
	        "titleColor": item.titleColor
	      },
	      on: {
	        "tabItemOnClick": _vm.tabItemOnClick
	      }
	    })
	  }))], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            dir: 'examples',
	            tabItems: [{
	                index: 0,
	                title: '文章',
	                titleColor: '#000000',
	                icon: '',
	                //                  image: config.image('article.vue-normal.png'),
	                //                  selectedImage: config.image('article.vue-highlight.png'),
	                image: 'xcassets:chicken',
	                selectedImage: 'xcassets:chicken',
	                //					src: config.js('pics.js'),
	                src: _config2.default.js('article.js'),
	                //					src: config.js('joke.js'),
	                visibility: 'visible'
	            }, {
	                index: 1,
	                title: '段子',
	                titleColor: '#000000',
	                icon: '',
	                image: _config2.default.image('joke-normal.png'),
	                selectedImage: _config2.default.image('joke-highlight.png'),
	                src: _config2.default.js('joke.js?type=joke'),
	                visibility: 'visible'
	            }, {
	                index: 2,
	                title: '蛋图',
	                titleColor: '#000000',
	                icon: '',
	                image: _config2.default.image('boring-normal.png'),
	                selectedImage: _config2.default.image('boring-highlight.png'),
	                src: _config2.default.js('pics.js'),
	                visibility: 'hidden'
	            }, {
	                index: 3,
	                title: '我的',
	                titleColor: '#000000',
	                icon: '',
	                image: _config2.default.image('my-normal.png'),
	                selectedImage: _config2.default.image('my-highlight.png'),
	                src: _config2.default.js('my.js'),
	                visibility: 'hidden'
	            }]
	        };
	    },

	    methods: {},
	    components: {
	        tabbar: __webpack_require__(55)
	    }
	}; //
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(47)
	)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(53)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/include/tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d51d259a"
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

/***/ 56:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "column"
	    }
	  }, [_c('tabbar', {
	    attrs: {
	      "tabItems": _vm.tabItems
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });