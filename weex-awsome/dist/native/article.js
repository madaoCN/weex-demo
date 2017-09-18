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
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(28)
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
	__vue_options__.__file = "/Users/liangxiansong/Desktop/weex-awsome/src/article.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-32e1a050"
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
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "comment": {
	    "width": 40,
	    "height": 40
	  },
	  "container": {
	    "backgroundColor": "#f3f3f3"
	  },
	  "channel": {
	    "marginTop": 20
	  },
	  "main-list": {
	    "marginTop": 0
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
	  }
	}

/***/ }),
/* 2 */
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

	var browser = weex.requireModule('browser');
	var navigator = weex.requireModule('navigator');
	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');

	module.exports = {
	    props: {
	        title: { default: '文章' }
	    },
	    data: function data() {
	        return {
	            config: _config2.default,
	            datalist: [1, 1, 1, 1, 1, 1, 1],
	            showRefresh: 'hide',
	            banners: [{ title: '', src: 'https://img.alicdn.com/simba/img/TB1rdArSFXXXXbYXpXXSutbFXXX.jpg' }, { title: '', src: 'http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg' }, { title: '', src: 'https://img.alicdn.com/imgextra/i1/1752059116/TB2pke1aK38SeJjSZFPXXc_vFXa_!!1752059116.jpg_Q90.jpg' }, { title: '', src: 'https://img.alicdn.com/imgextra/i1/1910146537/TB2CJn.at9iQuJjSsphXXbMhpXa_!!1910146537.jpg_Q90.jpg' }],
	            block1: {
	                title: '品牌制造商直供',
	                items: [{
	                    name: "新秀丽制造商",
	                    price: "59",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
	                }, {
	                    name: "MUJI制造商",
	                    price: "12.9",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
	                }, {
	                    name: "CK制造商",
	                    price: "29",
	                    state: "上新",
	                    bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
	                }, {
	                    name: "Adidas制造商",
	                    price: "29",
	                    bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
	                    url: "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
	                }]
	            },
	            goods: [{ tlt: "日式和风敞口保温杯", img: "http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330", info: "真空隔热，保温保冷", price: "32" }, { tlt: "切尔西牛皮女靴", img: "http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330", info: "经典牛皮切尔西，时尚帅气", price: "289" }, { tlt: "小馒头 多色双肩包", img: "http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330", info: "奶油色泽，小巧减龄", price: "79" }, { tlt: "全棉色织磨毛四件套", img: "http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330", info: "优雅色织，温暖磨毛", price: "299" }, { tlt: "日式和风声波式电动牙刷", img: "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330", info: "进口刷毛，专利技术", price: "119" }, { tlt: "多功能商务双肩包", img: "http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330", info: "17个功能分区，内置分层收纳", price: "334" }, { tlt: "黑凤梨 20寸PC膜拉链登机箱", img: "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330", info: "热卖9万只，网易人手1只", price: "185" }, { tlt: "日式蓬软太鼓抱枕", img: "http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330", info: "萌趣太鼓造型 软糯轻柔回弹", price: "29" }, { tlt: "可水洗抗菌防螨丝羽绒枕", img: "http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330", info: "进口防螨布，热销50万件", price: "99" }, { tlt: "双宫茧桑蚕丝被 空调被", img: "http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330", info: "一级桑蚕丝，吸湿透气柔软", price: "479" }, { tlt: "怀抱休闲椅组合（皮款）", img: "http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330", info: "葛优躺神器皮款", price: "3999" }, { tlt: "欧式哑光餐具套装", img: "http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330", info: "德化白瓷，坚实耐用", price: "189" }, { tlt: "清新两用杯", img: "http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330", info: "办公杯优选 轻松饮茶", price: "52" }, { tlt: "两带式男/女款拖鞋", img: "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330", info: "鞋杯随脚型而变，舒适呵护", price: "69.9" }]
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
	        'top-channel': __webpack_require__(12),
	        'md-slider': __webpack_require__(16),
	        'grid-block': __webpack_require__(20),
	        'waterfall-block': __webpack_require__(24)
	    }
	};

/***/ }),
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 20 */
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


/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
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

/***/ }),
/* 24 */
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


/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
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

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["main-list"]
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
	  }, [_vm._v(_vm._s(_vm.refreshTips))])]), _c('cell', {
	    staticClass: ["cell-button"],
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
	  }, [_c('grid-block', {
	    attrs: {
	      "title": _vm.block1.title,
	      "items": _vm.block1.items
	    }
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('waterfall-block', {
	    attrs: {
	      "goods": _vm.goods
	    }
	  })], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);