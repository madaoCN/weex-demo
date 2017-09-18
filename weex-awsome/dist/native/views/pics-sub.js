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
	__vue_styles__.push(__webpack_require__(71)
	)

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(92)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/views/pics-sub.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-40ea1aaa"
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#f3f3f3"
	  },
	  "waterfall-container": {
	    "width": 750,
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "refresh": {
	    "width": 750,
	    "paddingBottom": 20,
	    "paddingTop": 30,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading": {
	    "width": 750,
	    "paddingBottom": 30,
	    "paddingTop": 30,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "main-image": {
	    "width": 335,
	    "height": 430,
	    "borderRadius": 15
	  },
	  "item": {
	    "paddingTop": 20
	  },
	  "title": {
	    "paddingTop": 20,
	    "fontSize": 34
	  },
	  "detail": {
	    "paddingTop": 20,
	    "fontSize": 26
	  },
	  "action-font": {
	    "color": "#808080"
	  },
	  "social-action": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  }
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(73);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _data; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var _config = __webpack_require__(3);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal');
	var browser = weex.requireModule('browser');
	exports.default = {
	    data: (_data = {
	        config: _config2.default,
	        maxPage: 0,
	        showLoading: 'hide',
	        lastClickObj: { item: null, timestamp: 0 },
	        isSingleClick: true,
	        gif: _config2.default.image('gif.png'),
	        type: 'boring',
	        showRefresh: 'hide'
	    }, (0, _defineProperty3.default)(_data, 'showLoading', 'hide'), (0, _defineProperty3.default)(_data, 'datalist', [{ title: '“美女与野兽”才是完美搭配',
	        detail: '前几天，发了两组关于一眼忘不掉的陌生人，看到的小伙伴大部分人都说比较喜欢的。 所以，现在我也有了想要继续分享下去的理由了。',
	        pic: 'http://img.jandan.net/news/2017/09/8b07b09678757754783fcacd0d5a2577.jpg'
	    }, { title: 'Reddit: 世界各地的奇葩禁令',
	        detail: '我老家在新泽西州，在那里卖烟花爆竹是犯法的。所以人们都到隔壁的宾州买烟花。奇怪的是，宾州法律允许售卖烟花，你在每个超市都可以看到这些东西，但在那里放烟花也是不行的。也就是说，宾州很乐意收下人们买烟花的钱，但人们只能带着烟花去其它地方放。',
	        pic: 'http://img.jandan.net/news/2017/09/d796b3ddc1a4a3151491ce2b19dce735.jpg'
	    }, { title: '生病时的疲惫感，可能是抗生素的锅',
	        detail: '如果你生病了，并感到非常非常疲倦，可能这不仅仅是疾病本身拖累了你——还可能与你用的药物中的抗生素有关。例如用来治疗细菌感染疾病——如肺炎和支气管炎的阿莫西林，会让某些患者有“过度疲劳”、“缺乏活力”的症状；',
	        pic: 'http://img.jandan.net/news/2017/09/208a01ee5d3426202604ddd48622205e.jpg'
	    }, { title: '跟胡须有关的历史趣事',
	        detail: '维多利亚时期的男性特别喜欢留胡子，特别是嘴唇上的小胡子。为了保持胡子的造型，他们经常会给它们打蜡。',
	        pic: 'http://img.jandan.net/news/2017/09/8f0840043e80a85039cff0e835fde93c.jpg!bmiddle'
	    }]), _data),
	    computed: {
	        refreshTips: function refreshTips() {
	            return this.showRefresh == 'hide' ? '下拉获取最新数据' : '加载中...';
	        },
	        loadingTips: function loadingTips() {
	            return this.showLoading == 'hide' ? '上拉获取最新数据' : '加载中...';
	        }
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
	        onloading: function onloading() {
	            var _this2 = this;

	            this.showLoading = 'show';
	            //                jandan.articleIndex().then(datalist=>{
	            //                    this.datalist = datalist
	            //                    this.showRefresh = 'hide'
	            //                })
	            setTimeout(function () {
	                _this2.showLoading = 'hide';
	            }, 2000);
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(74);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	var $Object = __webpack_require__(79).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(77);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(87), 'Object', { defineProperty: __webpack_require__(83).f });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(78);
	var core = __webpack_require__(79);
	var ctx = __webpack_require__(80);
	var hide = __webpack_require__(82);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 79 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(81);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(83);
	var createDesc = __webpack_require__(91);
	module.exports = __webpack_require__(87) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(84);
	var IE8_DOM_DEFINE = __webpack_require__(86);
	var toPrimitive = __webpack_require__(90);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(87) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(85);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(87) && !__webpack_require__(88)(function () {
	  return Object.defineProperty(__webpack_require__(89)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(88)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(85);
	var document = __webpack_require__(78).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(85);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('waterfall', {
	    staticClass: ["waterfall-container"],
	    attrs: {
	      "columnCount": "2",
	      "columnGap": "20"
	    }
	  }, [_c('refresh', {
	    staticClass: ["refresh"],
	    attrs: {
	      "display": _vm.showRefresh
	    },
	    on: {
	      "refresh": _vm.onrefresh
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v(_vm._s(_vm.refreshTips))])]), _vm._l((_vm.datalist), function(item) {
	    return _c('cell', {
	      appendAsTree: true,
	      attrs: {
	        "item": item,
	        "append": "tree"
	      },
	      on: {
	        "click": _vm.click
	      }
	    }, [_c('div', {
	      staticClass: ["item"]
	    }, [_c('image', {
	      staticClass: ["main-image"],
	      attrs: {
	        "resize": "cover",
	        "src": item.pic
	      }
	    }), _c('text', {
	      staticClass: ["title"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["detail"]
	    }, [_vm._v(_vm._s(item.detail))]), _c('div', {
	      staticClass: ["social-action"]
	    }, [_c('text', {
	      staticClass: ["detail", "action-font"]
	    }, [_vm._v("点赞")]), _c('text', {
	      staticClass: ["detail", "action-font"]
	    }, [_vm._v("评论")]), _c('text', {
	      staticClass: ["detail", "action-font"]
	    }, [_vm._v("分享")])])])])
	  }), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v(_vm._s(_vm.loadingTips))])])], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);