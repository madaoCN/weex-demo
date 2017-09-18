<template>
    <list class="main-list">
        <refresh class="refresh" @refresh="onrefresh" :display="showRefresh">
            <text class="indicator">{{refreshTips}}</text>
        </refresh>
        <cell class="cell-button">
            <md-slider :imageList="banners"></md-slider>
        </cell>
        <cell>
            <grid-block :title="block1.title" :items="block1.items"></grid-block>
        </cell>
        <cell>
            <waterfall-block :goods="goods"></waterfall-block>
        </cell>
    </list>
</template>
<style>
    .comment{width: 40px; height: 40px;}
    .container{background-color: #f3f3f3;}
    .channel{margin-top: 20}
    .main-list{margin-top: 0}
    .item{background-color: #ffffff;margin-top: 40px; padding: 20px; padding-bottom: 0px;}
    .item-author{color: #999999; font-size: 24;}
    .item-summary{color: #333333; font-size: 26;}
    .opeart-bar{margin-top: 20px; height: 80px; border-top-width: 1;border-top-style: dashed; border-top-color: #e3e3e3; align-items: center; justify-content: center;  flex-direction: row; justify-content: space-between;}
    .refresh{width: 750px; padding-bottom: 20px; padding-top: 30px; align-items: center;justify-content: center;}
</style>

<script>
    const browser = weex.requireModule('browser')
    const navigator = weex.requireModule('navigator')
    const storage = weex.requireModule('storage')
    const modal = weex.requireModule('modal')

    import config from './config'
    module.exports = {
        props:{
          title:{default: '文章'},
        },
        data(){
            return {
                config:config,
                datalist:[1,1,1,1,1,1,1],
                showRefresh:'hide',
                banners: [
                    { title: '', src: 'https://img.alicdn.com/simba/img/TB1rdArSFXXXXbYXpXXSutbFXXX.jpg'},
                    { title: '', src: 'http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg'},
                    { title: '', src: 'https://img.alicdn.com/imgextra/i1/1752059116/TB2pke1aK38SeJjSZFPXXc_vFXa_!!1752059116.jpg_Q90.jpg'},
                    { title: '', src: 'https://img.alicdn.com/imgextra/i1/1910146537/TB2CJn.at9iQuJjSsphXXbMhpXa_!!1910146537.jpg_Q90.jpg'}
                ],
                block1: {
                    title:'品牌制造商直供',
                    items: [
                        {
                            name: "新秀丽制造商",
                            price: "59",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
                        },
                        {
                            name: "MUJI制造商",
                            price: "12.9",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
                        },
                        {
                            name: "CK制造商",
                            price: "29",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
                        },
                        {
                            name: "Adidas制造商",
                            price: "29",
                            bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
                        }
                    ]
                },
                goods:[
                    { tlt:"日式和风敞口保温杯",img:"http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",info:"真空隔热，保温保冷",price:"32"},
                    { tlt:"切尔西牛皮女靴",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"经典牛皮切尔西，时尚帅气",price:"289"},
                    { tlt:"小馒头 多色双肩包",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"奶油色泽，小巧减龄",price:"79"},
                    { tlt:"全棉色织磨毛四件套",img:"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",info:"优雅色织，温暖磨毛",price:"299"},
                    { tlt:"日式和风声波式电动牙刷",img:"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",info:"进口刷毛，专利技术",price:"119"},
                    { tlt:"多功能商务双肩包",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"17个功能分区，内置分层收纳",price:"334"},
                    { tlt:"黑凤梨 20寸PC膜拉链登机箱",img:"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",info:"热卖9万只，网易人手1只",price:"185"},
                    { tlt:"日式蓬软太鼓抱枕",img:"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",info:"萌趣太鼓造型 软糯轻柔回弹",price:"29"},
                    { tlt:"可水洗抗菌防螨丝羽绒枕",img:"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",info:"进口防螨布，热销50万件",price:"99"},
                    { tlt:"双宫茧桑蚕丝被 空调被",img:"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",info:"一级桑蚕丝，吸湿透气柔软",price:"479"},
                    { tlt:"怀抱休闲椅组合（皮款）",img:"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",info:"葛优躺神器皮款",price:"3999"},
                    { tlt:"欧式哑光餐具套装",img:"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",info:"德化白瓷，坚实耐用",price:"189"},
                    { tlt:"清新两用杯",img:"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",info:"办公杯优选 轻松饮茶",price:"52"},
                    { tlt:"两带式男/女款拖鞋",img:"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",info:"鞋杯随脚型而变，舒适呵护",price:"69.9"}
                ],
            }
        },
        computed:{
            refreshTips(){
                return this.showRefresh == 'hide' ? '下拉获取最新数据' : '加载中...'
            }
        },
        created(){
            this.onrefresh()
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
            onrefresh() {
                this.showRefresh = 'show'
//                jandan.articleIndex().then(datalist=>{
//                    this.datalist = datalist
//                    this.showRefresh = 'hide'
//                })
                setTimeout(
                    ()=>{
                        this.showRefresh = 'hide';
                    }
                ,2000);
            },
            goDetail(e) {
                const item = e.target.attr.item
//                if(item) {
//                    jandan.makeRead(item.title)
//                    item.isRead = true
//                    jandan.toDetail(item)
//                }
            },
            goComments(e) {
                const item = e.target.attr.item
//                if(item) {
//                    jandan.makeRead(item.title)
//                    item.isRead = true
//                    jandan.toCommentsDetail(item)
//                }
            },
            more() {
//				navigator.push({url:config.js('middle.js')},()=>{})
                navigator.push({url: config.js('category-index.js')}, () => {
                })
            }
        },
        components: {
            "navpage": require('./include/navpage.vue'),
            'top-channel': require('./components/topChannel.vue'),
            'md-slider': require('./components/mdSlider.vue'),
            'grid-block': require('./components/girdBlock.vue'),
            'waterfall-block': require('./components/verticalWaterfallCollection.vue')
        }
    }
</script>