<template>
    <list @viewappear="viewappear">
        <cell style="height: 40px;"></cell>
        <cell>
            <header-block
                    :userInfoStatus="userInfoStatus"
                    :userInfo="userInfo"
                    :icon="headerImage"
                    :right="right"></header-block>
        </cell>
        <cell class="box-line">
            <div class="i-box-l">
                <text class="i-box-title">8</text>
                <text class="i-box-detail">公开文章</text>
            </div>
            <div class="i-box-l">
                <text class="i-box-title">2</text>
                <text class="i-box-detail">关注</text>
            </div>
            <div class="i-box-l">
                <text class="i-box-title">3</text>
                <text class="i-box-detail">粉丝</text>
            </div>
        </cell>
        <cell style="height: 20px;"></cell>

        <template v-for="(secData, section) in cells">
            <cell style="height: 40px;"></cell>
            <cell v-for="(rowData, row) in secData">
                <div class="item" @click="click" :index="section.toString() + '_' + row.toString()">
                    <div style="flex-direction: row; justify-content: space-between; align-items: center;">
                        <text>{{rowData}}</text>

                        <div style="flex-direction: row; align-items: center">
                            <text style="margin-right: 20;color: gray">{{10}}</text>
                            <image :src="right" class="right"></image>
                        </div>
                    </div>
                </div>
            </cell>
        </template>

    </list>
</template>


<style>
    .item{height: 100px; padding: 40px; border-width: 1px; border-color: #f3f3f3; justify-content: center;}
    .right{width: 30px; height: 30px;}
    .left-title{font-size: 30px; color: #666666;}
    .right-title{font-size: 30px; color: #999999;}
    .box-line{
        height: 132px;
        display: flex;
        /*padding-right: 60px;*/
        /*padding-left: 60px;*/
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-width: 1px;
        border-color: #f3f3f3;
    }
    .i-box-l{
        height: 132px;
        width: 150px;
    }
    .i-box-title{
        padding-top: 30;
        font-size: 36;
        text-align: center;
        color:#666;
    }
    .i-box-detail{
        padding-top: 5;
        font-size: 24;
        text-align: center;
        color:gray;
    }
</style>

<script>
    import config from './config'

    module.exports = {
        data() {
            return {
                cells: [
                    ['私密文章','收藏的文章','喜欢的文章','我的专题','我的文集','关注的文集/专题'],
                    ['夜间模式','浏览历史'],
                    ['分享APP', '帮助与反馈', '关于此 App']
                ],
                config: config,
                userInfo: {
                    author: "madao",
                    email: "591710552@qq.com"
                },
                userInfoStatus: 1,
                right: config.image('right.png'),
                headerImage:config.image('icon.png')
            }
        },
        created(){
//            this.viewappear()
        },
        setUserInfo(e){
            navigator.push({url:config.js('my-info.js')},()=>{})
        },
        viewappear(e){
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
        components:{
            "header-block": require("./components/headerInfoBlock.vue")
        }
    }
</script>