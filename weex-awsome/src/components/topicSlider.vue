<template>
    <scroller class="tp-box"
              scroll-direction="horizontal"
              flex-direction="row"
              show-scrollbar=false>
        <div class="i-tp" v-for="i in topics">
            <image class="tp-img" resize="cover" :src="i.img"></image>
            <text class="tp-name">{{i.name}}</text>
        </div>
    </scroller>
</template>


<style>
    .tp-box{
        background-color: #ffffff;
        height: 200px;
        padding: 20px;
    }

    .i-tp{
        height: 150px;
        width: 275px;
        margin: 10px;
    }

    .tp-img{
        position: absolute;
        top:0;
        left: 0;
        width: 275px;
        height: 150px;
        border-radius: 10px;
        background-color: #f4f4f4;
    }

    .tp-name{
        font-size: 28px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 57px;
        overflow: hidden;
        text-align: center;
        color:#fff;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

<script>
    export default {
        data () {
            return {
                topics:[
                    {name:'小说精选',img:'https://yanxuan.nosdn.127.net/15030393722652401.jpg'},
                    {name:'简书大学堂',img:'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg'},
                    {name:'7日热门',img:'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png'},
                    {name:'简书招聘',img:'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg'},
                ]
            }
        }
    }



</script>