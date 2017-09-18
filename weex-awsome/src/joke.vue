<template>
    <div class="container">
        <list>
            <refresh class="refresh" @refresh="onrefresh" :display="showRefresh">
                <text class="indicator">{{refreshTips}}</text>
            </refresh>
            <cell>
                <md-slider :imageList="banners"></md-slider>
            </cell>
            <cell>
                <topic-slider>

                </topic-slider>
            </cell>
            <cell>
                <section-header title="热门专题">
                </section-header>
            </cell>
            <cell class="pp">
                <topic-collection></topic-collection>
            </cell>
            <cell>
                <section-header style="margin-top: 30" title="热门文章">
                </section-header>
            </cell>

            <template>
                <cell v-for="ar in articles" class="box-line">
                    <article-cell :article="ar" url=""></article-cell>
                </cell>
            </template>

        </list>
    </div>
</template>
<style>
    .comment{width: 40px; height: 40px;}
    .container{background-color: #ffffff;}
    .item{background-color: #ffffff;margin-top: 40px; padding: 20px; padding-bottom: 0px;}
    .item-author{color: #999999; font-size: 24;}
    .item-summary{color: #333333; font-size: 26;}
    .opeart-bar{margin-top: 20px; height: 80px; border-top-width: 1;border-top-style: dashed; border-top-color: #e3e3e3; align-items: center; justify-content: center;  flex-direction: row; justify-content: space-between;}
    .refresh{width: 750px; padding-bottom: 20px; padding-top: 30px; align-items: center;justify-content: center;}
    .box-line{
        border-width: 1px;
        border-color: #f3f3f3;
    }
</style>

<script>
    const browser = weex.requireModule('browser')
    const navigator = weex.requireModule('navigator')
    const storage = weex.requireModule('storage')
    const modal = weex.requireModule('modal')
    import config from './config'
    module.exports = {
        props:{
            title:{default: '段子'},
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
                articles:[
                    {auther:'严选推荐',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'年中扫一扫，下半年运势好',info:'6个家庭清洁小技巧',price:'6.9',img:'http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg'},
                    {auther:'服装组：小服',autherImg:'https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64',tlt:'小姐姐们的运动衣提前上架啦',info:'前两天推男式运动T恤时，就有小伙伴在专题评论里，问小姐姐们的运动衣在哪儿。大家的...',price:'',img:['https://yanxuan.nosdn.127.net/15041772896010423.jpg','https://yanxuan.nosdn.127.net/15041772789070419.jpg','https://yanxuan.nosdn.127.net/15041772808640420.jpg']},
                    {auther:'居家组：朵朵',autherImg:'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',tlt:'初秋，最想用它来裸睡',info:'连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...',price:'',img:['https://yanxuan.nosdn.127.net/15040927525260414.jpg','https://yanxuan.nosdn.127.net/15040927586650416.jpg','https://yanxuan.nosdn.127.net/15040927556820415.jpg']},
                    {auther:'严选推荐',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'不为繁华易匠心',info:'那些值得珍藏的严选手作好物',price:'29',img:'http://yanxuan.nosdn.127.net/4d72145e48e65ee3deaf2e1403e6ec73.jpg'},
                ]
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
            "topic-slider": require('./components/topicSlider.vue'),
            'md-slider': require('./components/mdSlider.vue'),
            'section-header': require('./components/sectionHeader.vue'),
            'topic-collection': require('./components/topicCollection.vue'),
            'article-cell': require('./components/articleCell.vue')
        }
    }
</script>