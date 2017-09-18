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
	module.exports.el = 'true'
	new Vue(module.exports)


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

/***/ })

/******/ });