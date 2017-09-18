<template>
    <div class="wrapper">
        <scroller class="scroller" append="tree" scroll-direction="horizontal" flex-direction="row" loadmoreoffset="750px" show-scrollbar=false>
            <div class="j-uline" :style="jLPosition" ref="jcLine"></div>
            <!--<text @click="chooseChannel" jact="true" class="i-c c-act" ref=actJC>推荐</text>-->
            <text v-for="(channel, index) in channels"
                  @click="chooseChannel"
                  jact="true"
                  :id="index"
                  :style="channel.style"
                  :class="['i-c',{'c-act':channel.cact}]"
                  :ref="channel.ref">{{channel.title}}
            </text>
        </scroller>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        /*position: fixed;*/
        top: 0px;
        bottom: 10;
        left: 0;right: 0;
        height: 64px;
        z-index: 10;
        background-color: #fafafa;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .scroller{
        height: 64px;
    }
    .i-c{
        padding-top:20px;
        padding-left: 45px;
        padding-right: 45px;
        padding-bottom:6px;
        font-size: 26px;
        color:#333;
    }
    .c-act{
        color:#b4282d;
    }
    .j-uline{
        position: absolute;
        left: 30px;
        bottom: 0;
        width: 82px;
        height: 4px;
        background-color: #b4282d;
    }
    .more{
        position: absolute;
        top:0;
        right:0;
        height: 52px;
        width: 100px;
        background-color: #fafafa;
        text-align: center;
        padding-top: 10px;
        opacity: 0.96;
        box-shadow:-6px -4px 4px #fafafa;
    }
</style>
<script>
    const dom = weex.requireModule('dom');
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                jLPosition:{
                    left : "0px",
                    width: "82px;"
                },
                channels: [
                    {
                        ic: true,
                        cact: true,
                        ref: 'actJC',
                        title: "无聊图",
                        style: {
                            width: 188
                        }
                    },
                    {
                        ic: true,
                        cact: false,
                        ref: null,
                        title: "煎蛋画师",
                        style: {
                            width: 188
                        }
                    },
                    {
                        ic: true,
                        cact: false,
                        ref: null,
                        title: "妹子图",
                        style: {
                            width: 188
                        }
                    }
                ]
            }
        },
        mounted () {
            this.initJLine();
        },
        methods: {
            initJLine:function () {
                if(!this.$refs.actJC) return;

                // 计算每个item宽度
                var width = 0;
                if(this.channels.length > 5){
                    width = 750.0 / 5;
                }else
                {
                    width = 750.0 / this.channels.length;
                }
                this.channels.forEach(function (item, index) {
                    item.style.width = width;
                    item.style.textAlign = 'center';
                    item.style.wrap = 'nowrap';
                    item.lines = 1;
                    item.style.color = item.cact === true ? '#b4282d' : '';
                })
                // 计算 下划线位置
                this.jLPosition.width = width;
            },
            chooseChannel:function (event) {

                const _target = event.target;

                let l = event.position.x || 0; //点击的原点
                let w =  event.position.width || 0;
                if(w<=0) return;

                this.jLPosition.left = l;
                this.jLPosition.width = w;
                this.channels.forEach(function (item, index) {
                    item.cact = index == _target.attr.id ? true : false;
                    item.style.color = item.cact === true ? '#b4282d' : '';
                })
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
    }
</script>


