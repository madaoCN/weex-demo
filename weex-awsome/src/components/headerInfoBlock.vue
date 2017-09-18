<template>
    <div class="warpper">
        <div class="info">
            <image class="portrait" :src="icon"></image>
            <div class="i-info">
                <text style="margin-top: 20px; font-size: 32;">madaoCN</text>
                <div class="credit-block">
                    <text class="credit-title">积分413分</text>
                    <text class="credit-title" style="margin-left: 20">积分商城</text>
                </div>
            </div>
        </div>
        <image :src="right" class="right"></image>
    </div>
</template>
<style scoped>
    .portrait{
        width: 150px;
        height: 150px;
        border-radius: 75px;
    }
    .warpper {
        justify-content: space-between;
        align-items: center;
        margin: 50px;
        flex-direction: row;
    }
    .i-info{
        margin-left: 20;
        width: 320;
    }
    .info{
        flex-direction: row;
        justify-content: flex-start;
    }
    .right{
        width: 30px;
        height: 30px;
    }
    .credit-block{
        flex-direction: row;
        justify-content: flex-start;

    }
    .credit-title{
        margin-top: 20px;

        font-size: 24;
        color: red;
        border-color: red;
        border-width: 1;
        padding: 8;
        text-align: center;
        border-radius: 8px;
    }
</style>
<script>
    export default {
        props:["userInfoStatus",
                "userInfo",
                "icon",
                "right"]
    }
</script>