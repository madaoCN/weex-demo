<template>
    <div class="wrapper"  @click="jumpWeb(url)">
        <!--作者类型-->
        <div class="auther-box">
            <image class="auther-img" resize="cover" :src="article.autherImg"></image>
            <text class="auther-name">{{article.auther}}</text>
        </div>
        <!--图片类型-->
        <div class="img-box">
            <template v-if="typeof article.img == 'string'">
                <image class="main-img" resize="cover" :src="article.img"></image>
            </template>
            <template v-else-if="typeof article.img == 'object' && article.img.length>=3">
                <image class="main-img" resize="cover" :src="article.img[0]"></image>
                <div class="sub-imgs-box">
                    <image class="sub-img" resize="cover" :src="article.img[1]"></image>
                    <image class="sub-img" resize="cover" :src="article.img[2]"></image>
                </div>
            </template>
        </div>
        <!--文本解释类型-->
        <div class="tlt-box">
            <text class="tlt">{{article.tlt}}</text>
            <!--<text class="price" v-if="article.price">{{article.price}}元起</text>-->
        </div>
        <text class="info">{{article.info}}</text>
        <!--标签互动类型-->
        <div class="tag-box">
            <text class="info border-radius-box l-text-box">在路上</text>
            <text class="info r-text-box">2评论 ● 75喜欢</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .auther-box{
        height: 75px;
        padding-top: 10px;
        padding-left: 25px;
        margin-bottom: 25px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .auther-img{
        height: 58px;
        width: 58px;
        border-radius: 58px;
    }
    .auther-name{
        flex:1;
        font-size: 26px;
        height: 58px;
        padding-left: 20px;
        padding-top: 10px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380px;
    }
    .sub-imgs-box{
        width: 190px;
        height: 380px;
    }
    .sub-img{
        height: 188px;
        width: 190px;
        margin-left: 3px;
        margin-bottom: 3px;
    }
    .tlt-box{
        height: 80px;
        padding: 20px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .tlt{
        font-size: 34px;
        flex: 1;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .price{
        font-size: 34px;
        color:#b4282d;
        padding-left: 10px;

    }
    .info{
        font-size: 26px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
        lines:2;
        text-overflow: ellipsis;
        /*color:#666;*/
    }
    .tag-box{
        height: 80;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .border-radius-box{
        border-width: 1px;
        border-color: red;
        border-radius: 10px;
        color: red;
    }
    .l-text-box{
        text-align: left;
        height: 40;
        line-height: 30;
        margin-left: 20;
    }
    .r-text-box{
        text-align: right;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    export default {
        props:["article","url"],
        data () {
            return {
            }
        },
        methods: {

        }
    }
</script>