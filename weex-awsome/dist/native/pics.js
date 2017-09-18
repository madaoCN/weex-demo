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
	__vue_styles__.push(__webpack_require__(68)
	)

	/* script */
	__vue_exports__ = __webpack_require__(69)

	/* template */
	var __vue_template__ = __webpack_require__(70)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/pics.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1fe6af37"
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

/***/ 4:
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

/***/ 5:
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

/***/ 6:
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

/***/ 7:
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

/***/ 8:
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

/***/ 9:
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

/***/ 10:
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

/***/ 11:
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/components/topChannel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5b7a6769"
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

/***/ 13:
/***/ (function(module, exports) {

	module.exports = {
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "wrapper": {
	    "top": 0,
	    "bottom": 10,
	    "left": 0,
	    "right": 0,
	    "height": 64,
	    "zIndex": 10,
	    "backgroundColor": "#fafafa",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#d9d9d9"
	  },
	  "scroller": {
	    "height": 64
	  },
	  "i-c": {
	    "paddingTop": 20,
	    "paddingLeft": 45,
	    "paddingRight": 45,
	    "paddingBottom": 6,
	    "fontSize": 26,
	    "color": "#333333"
	  },
	  "c-act": {
	    "color": "#b4282d"
	  },
	  "j-uline": {
	    "position": "absolute",
	    "left": 30,
	    "bottom": 0,
	    "width": 82,
	    "height": 4,
	    "backgroundColor": "#b4282d"
	  },
	  "more": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "height": 52,
	    "width": 100,
	    "backgroundColor": "#fafafa",
	    "textAlign": "center",
	    "paddingTop": 10,
	    "opacity": 0.96,
	    "boxShadow": "-6px -4px 4px #fafafa"
	  }
	}

/***/ }),

/***/ 14:
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

	var dom = weex.requireModule('dom');
	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');
	exports.default = {
	    data: function data() {
	        return {
	            jLPosition: {
	                left: "0px",
	                width: "82px;"
	            },
	            channels: [{
	                ic: true,
	                cact: true,
	                ref: 'actJC',
	                title: "无聊图",
	                style: {
	                    width: 188
	                }
	            }, {
	                ic: true,
	                cact: false,
	                ref: null,
	                title: "煎蛋画师",
	                style: {
	                    width: 188
	                }
	            }, {
	                ic: true,
	                cact: false,
	                ref: null,
	                title: "妹子图",
	                style: {
	                    width: 188
	                }
	            }]
	        };
	    },
	    mounted: function mounted() {
	        this.initJLine();
	    },

	    methods: {
	        initJLine: function initJLine() {
	            if (!this.$refs.actJC) return;

	            // 计算每个item宽度
	            var width = 0;
	            if (this.channels.length > 5) {
	                width = 750.0 / 5;
	            } else {
	                width = 750.0 / this.channels.length;
	            }
	            this.channels.forEach(function (item, index) {
	                item.style.width = width;
	                item.style.textAlign = 'center';
	                item.style.wrap = 'nowrap';
	                item.lines = 1;
	                item.style.color = item.cact === true ? '#b4282d' : '';
	            });
	            // 计算 下划线位置
	            this.jLPosition.width = width;
	        },
	        chooseChannel: function chooseChannel(event) {

	            var _target = event.target;

	            var l = event.position.x || 0; //点击的原点
	            var w = event.position.width || 0;
	            if (w <= 0) return;

	            this.jLPosition.left = l;
	            this.jLPosition.width = w;
	            this.channels.forEach(function (item, index) {
	                item.cact = index == _target.attr.id ? true : false;
	                item.style.color = item.cact === true ? '#b4282d' : '';
	            });
	            //                animation.transition(this.$refs.jcLine, {
	            //                    style: {
	            //                        left: l,
	            //                        width: w
	            //                    },
	            //                    duration: 300, //ms
	            //                    timingFunction: 'ease',
	            //                    delay: 0 //ms
	            //                }, function () {
	            //                });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree",
	      "scrollDirection": "horizontal",
	      "flexDirection": "row",
	      "loadmoreoffset": "750px",
	      "showScrollbar": "false"
	    }
	  }, [_c('div', {
	    ref: "jcLine",
	    staticClass: ["j-uline"],
	    style: _vm.jLPosition
	  }), _vm._l((_vm.channels), function(channel, index) {
	    return _c('text', {
	      ref: channel.ref,
	      refInFor: true,
	      class: ['i-c', {
	        'c-act': channel.cact
	      }],
	      style: channel.style,
	      attrs: {
	        "jact": "true",
	        "id": index
	      },
	      on: {
	        "click": _vm.chooseChannel
	      }
	    }, [_vm._v(_vm._s(channel.title) + "\n        ")])
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#f3f3f3"
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 64
	  }
	}

/***/ }),

/***/ 69:
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

	var browser = weex.requireModule('browser');
	var navigator = weex.requireModule('navigator');
	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');

	module.exports = {
	    props: {
	        title: { default: '蛋图' }
	    },
	    data: function data() {
	        return {
	            config: _config2.default,
	            datalist: [1, 1, 1, 1, 1, 1, 1],
	            showRefresh: 'hide',
	            pics: [{
	                title: '无聊图',
	                src: _config2.default.js('views/pics-sub.js?type=boring'),
	                visibility: 'visible'
	            }, {
	                title: '煎蛋画师',
	                src: _config2.default.js('views/pics-sub.js?type=huashi'),
	                visibility: 'hidden'
	            }]
	        };
	    },

	    computed: {
	        refreshTips: function refreshTips() {
	            return this.showRefresh == 'hide' ? '下拉获取最新数据' : '加载中...';
	        }
	    },
	    created: function created() {
	        this.onrefresh();
	        if (_config2.default.level > 1) {
	            this.pics.push({
	                title: '妹子图',
	                src: _config2.default.js('views/pics-sub.js?type=girl'),
	                visibility: 'hidden'
	            });
	        }
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
	        'topic-channel': __webpack_require__(12)
	    }
	};

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('navpage', {
	    staticClass: ["container"],
	    attrs: {
	      "dataRole": "none",
	      "backgroundColor": "white",
	      "title": _vm.title
	    }
	  }, [_c('topic-channel'), _vm._l((_vm.pics), function(v, i) {
	    return _c('embed', {
	      key: i,
	      staticClass: ["content"],
	      style: {
	        visibility: v.visibility
	      },
	      attrs: {
	        "src": v.src
	      }
	    })
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });