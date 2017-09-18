<template>
    <div class="wrapper">
        <div  v-for="(topic, index) in topics">
            <text class="box-font text-box"
                    :id="index">  {{topic}}  </text>
        </div>
    </div>
</template>


<style>
    .wrapper{
        flex-direction: row;
        height:auto;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-left: 10;
        padding-right: 10;
        text-align: center;

        /*align-items: center;*/
    }
    .box-font{
        font-size: 26px;
        color: red;
    }
    .text-box{
        border-width: 1;
        border-color: red;
        border-radius: 10;
        height: 60;
        line-height:60px;
        margin-top: 20;
        margin-left: 10;
        margin-right: 10;
    }
</style>

<script>
    export default {
        data () {
            return {
                topics:[
                    "教育","读书","短片小说","杂文","脑洞" ,"旅行","在路上","@IT 互联网","散文","会计"
                ].sort()
            }
        }
    }

</script>