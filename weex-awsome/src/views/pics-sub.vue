<template >
    <div class="container">
        <waterfall column-count="2"
                   column-gap="20"
                   class="waterfall-container">
            <refresh class="refresh" @refresh="onrefresh" :display="showRefresh">
                <text class="indicator">{{refreshTips}}</text>
            </refresh>
            <cell v-for="item in datalist" @click="click" :item="item">
                <div class="item">
                    <image class="main-image" resize="cover" :src="item.pic"></image>
                    <text class="title">{{item.title}}</text>
                    <text class="detail">{{item.detail}}</text>
                    <div class="social-action">
                        <text class="detail action-font">点赞</text>
                        <text class="detail action-font">评论</text>
                        <text class="detail action-font">分享</text>
                    </div>
                </div>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">{{loadingTips}}</text>
            </loading>
        </waterfall>
    </div>
</template>
<style>
    .container{
        background-color: #f3f3f3;
    }
    .waterfall-container{
        width: 750px;
        padding-left: 20;
        padding-right: 20;
    }
    .refresh{
        width: 750px;
        padding-bottom: 20px;
        padding-top: 30px;
        align-items: center;
        justify-content: center;
    }
    .loading{
        width: 750px;
        padding-bottom: 30px;
        padding-top: 30px;
        align-items: center;
        justify-content: center;
    }
    .main-image{
        width: 335;
        height: 430;
        border-radius: 15;
    }
    .item{
        padding-top:20;
    }
    .title{
        padding-top:20;
        font-size: 34px;
    }
    .detail{
        padding-top:20;
        font-size: 26px;

    }
    .action-font{
        color: gray;
    }
    .social-action{
        flex-direction: row;
        justify-content: space-between;
    }

</style>
<script>
    import config from '../config'
    const modal = weex.requireModule('modal')
    const browser = weex.requireModule('browser')
    export default {
        data: {
            config:config,
            maxPage:0,
            showLoading:'hide',
            lastClickObj:{item:null,timestamp:0},
            isSingleClick:true,
            gif:config.image('gif.png'),
            type:'boring',
            showRefresh:'hide',
            showLoading:'hide',
            datalist:[
                {   title:'“美女与野兽”才是完美搭配',
                    detail:'前几天，发了两组关于一眼忘不掉的陌生人，看到的小伙伴大部分人都说比较喜欢的。 所以，现在我也有了想要继续分享下去的理由了。',
                    pic:'http://img.jandan.net/news/2017/09/8b07b09678757754783fcacd0d5a2577.jpg'
                },
                {   title:'Reddit: 世界各地的奇葩禁令',
                    detail:'我老家在新泽西州，在那里卖烟花爆竹是犯法的。所以人们都到隔壁的宾州买烟花。奇怪的是，宾州法律允许售卖烟花，你在每个超市都可以看到这些东西，但在那里放烟花也是不行的。也就是说，宾州很乐意收下人们买烟花的钱，但人们只能带着烟花去其它地方放。',
                    pic:'http://img.jandan.net/news/2017/09/d796b3ddc1a4a3151491ce2b19dce735.jpg'
                },
                {   title:'生病时的疲惫感，可能是抗生素的锅',
                    detail:'如果你生病了，并感到非常非常疲倦，可能这不仅仅是疾病本身拖累了你——还可能与你用的药物中的抗生素有关。例如用来治疗细菌感染疾病——如肺炎和支气管炎的阿莫西林，会让某些患者有“过度疲劳”、“缺乏活力”的症状；',
                    pic:'http://img.jandan.net/news/2017/09/208a01ee5d3426202604ddd48622205e.jpg'
                },
                {   title:'跟胡须有关的历史趣事',
                    detail: '维多利亚时期的男性特别喜欢留胡子，特别是嘴唇上的小胡子。为了保持胡子的造型，他们经常会给它们打蜡。',
                    pic:'http://img.jandan.net/news/2017/09/8f0840043e80a85039cff0e835fde93c.jpg!bmiddle'
                },
            ]
        },
        computed:{
            refreshTips(){
                return this.showRefresh == 'hide' ? '下拉获取最新数据' : '加载中...'
            },
            loadingTips(){
                return this.showLoading == 'hide' ? '上拉获取最新数据' : '加载中...'
            }
        },
        methods:{
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
            onloading(){
                this.showLoading = 'show'
//                jandan.articleIndex().then(datalist=>{
//                    this.datalist = datalist
//                    this.showRefresh = 'hide'
//                })
                setTimeout(
                    ()=>{
                        this.showLoading = 'hide';
                    }
                    ,2000);
            }
        }
    }
</script>