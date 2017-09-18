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
	__vue_styles__.push(__webpack_require__(64)
	)

	/* script */
	__vue_exports__ = __webpack_require__(65)

	/* template */
	var __vue_template__ = __webpack_require__(67)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/my.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6e3f88ba"
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

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = {
	  "item": {
	    "height": 100,
	    "padding": 40,
	    "borderWidth": 1,
	    "borderColor": "#f3f3f3",
	    "justifyContent": "center"
	  },
	  "right": {
	    "width": 30,
	    "height": 30
	  },
	  "left-title": {
	    "fontSize": 30,
	    "color": "#666666"
	  },
	  "right-title": {
	    "fontSize": 30,
	    "color": "#999999"
	  },
	  "box-line": {
	    "height": 132,
	    "display": "flex",
	    "flexWrap": "nowrap",
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "borderWidth": 1,
	    "borderColor": "#f3f3f3"
	  },
	  "i-box-l": {
	    "height": 132,
	    "width": 150
	  },
	  "i-box-title": {
	    "paddingTop": 30,
	    "fontSize": 36,
	    "textAlign": "center",
	    "color": "#666666"
	  },
	  "i-box-detail": {
	    "paddingTop": 5,
	    "fontSize": 24,
	    "textAlign": "center",
	    "color": "#808080"
	  }
	}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function data() {
	        return {
	            cells: [['私密文章', '收藏的文章', '喜欢的文章', '我的专题', '我的文集', '关注的文集/专题'], ['夜间模式', '浏览历史'], ['分享APP', '帮助与反馈', '关于此 App']],
	            config: _config2.default,
	            userInfo: {
	                author: "madao",
	                email: "591710552@qq.com"
	            },
	            userInfoStatus: 1,
	            right: _config2.default.image('right.png'),
	            headerImage: _config2.default.image('icon.png')
	        };
	    },
	    created: function created() {
	        //            this.viewappear()
	    },
	    setUserInfo: function setUserInfo(e) {
	        navigator.push({ url: _config2.default.js('my-info.js') }, function () {});
	    },
	    viewappear: function viewappear(e) {
	        //            jandanComments.getUserInfo().then((userInfo)=>{
	        //                this.userInfo = userInfo
	        //                if(this.userInfo.author == "") {
	        //                    this.userInfoStatus = 2;
	        //                } else {
	        //                    this.userInfoStatus = 1
	        //                }
	        //                console.log(this.userInfo)
	        //            })
	    },

	    components: {
	        "header-block": __webpack_require__(66)
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 66:
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


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    on: {
	      "viewappear": _vm.viewappear
	    }
	  }, [_c('cell', {
	    staticStyle: {
	      height: "40px"
	    },
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('header-block', {
	    attrs: {
	      "userInfoStatus": _vm.userInfoStatus,
	      "userInfo": _vm.userInfo,
	      "icon": _vm.headerImage,
	      "right": _vm.right
	    }
	  })], 1), _vm._m(0), _c('cell', {
	    staticStyle: {
	      height: "20px"
	    },
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }), _vm._l((_vm.cells), function(secData, section) {
	    return [_c('cell', {
	      staticStyle: {
	        height: "40px"
	      },
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }), _vm._l((secData), function(rowData, row) {
	      return _c('cell', {
	        appendAsTree: true,
	        attrs: {
	          "append": "tree"
	        }
	      }, [_c('div', {
	        staticClass: ["item"],
	        attrs: {
	          "index": section.toString() + '_' + row.toString()
	        },
	        on: {
	          "click": _vm.click
	        }
	      }, [_c('div', {
	        staticStyle: {
	          flexDirection: "row",
	          justifyContent: "space-between",
	          alignItems: "center"
	        }
	      }, [_c('text', [_vm._v(_vm._s(rowData))]), _c('div', {
	        staticStyle: {
	          flexDirection: "row",
	          alignItems: "center"
	        }
	      }, [_c('text', {
	        staticStyle: {
	          marginRight: "20",
	          color: "gray"
	        }
	      }, [_vm._v(_vm._s(10))]), _c('image', {
	        staticClass: ["right"],
	        attrs: {
	          "src": _vm.right
	        }
	      })])])])])
	    })]
	  })], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('cell', {
	    staticClass: ["box-line"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-title"]
	  }, [_vm._v("8")]), _c('text', {
	    staticClass: ["i-box-detail"]
	  }, [_vm._v("公开文章")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-title"]
	  }, [_vm._v("2")]), _c('text', {
	    staticClass: ["i-box-detail"]
	  }, [_vm._v("关注")])]), _c('div', {
	    staticClass: ["i-box-l"]
	  }, [_c('text', {
	    staticClass: ["i-box-title"]
	  }, [_vm._v("3")]), _c('text', {
	    staticClass: ["i-box-detail"]
	  }, [_vm._v("粉丝")])])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });