<template>
    <navpage class="container"
             dataRole="none"
             backgroundColor="white"
             :title="title">
        <topic-channel></topic-channel>
        <embed v-for="(v,i) in pics" :src="v.src" :key="i" :style="{ visibility: v.visibility }" class="content"></embed>
    </navpage>
</template>
<style>
    .container{background-color: #f3f3f3;}
    .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 64;
        background-color: rebeccapurple;
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
            title:{default: '蛋图'},
        },
        data(){
            return {
                config:config,
                datalist:[1,1,1,1,1,1,1],
                showRefresh:'hide',
                pics: [{
                    title: '无聊图',
                    src: config.js('views/pics-sub.js?type=boring'),
                    visibility: 'visible'
                    },
                    {
                        title: '煎蛋画师',
                        src: config.js('views/pics-sub.js?type=huashi'),
                        visibility: 'hidden'
                    }

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
            if(config.level > 1) {
                this.pics.push({
                    title: '妹子图',
                    src: config.js('views/pics-sub.js?type=girl'),
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
            'topic-channel': require('./components/topChannel.vue')
        }
    }
</script>