<template>
    <div class="warpper">
        <div style="flex-direction: row">
            <div class="acc-left"></div>
            <text class="acc-title acc-title-font">{{title}}</text>
        </div>
        <text class="acc-title-font" style="margin-right: 20">换一批</text>
    </div>
</template>
<style scoped>
    .warpper {
        height: 60;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10;
    }
    .acc-left{
        background-color: red;
        width: 5;
        height: 30;
        margin-left: 30;
    }
    .acc-title-font{
        font-size: 26;
        color: gray;
    }
    .acc-title{
        height: 30;
        width: 320;

        margin-left: 20;
        margin-top: 2;
    }

</style>
<script>
    export default {
        props:["title"],


    }
</script>