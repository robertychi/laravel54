<!-- template -->
<template>
    <div>
        <h1>這是首頁</h1>

        <p>我要開始做的了 測試岸中</p>
        <p>我要開始做的了 測試一</p>

        <p>我要開始做的了 f一一一</p>
    </div>


</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                titleName: '首頁'
            }
        },
        created(){
            console.log('2:page|Landing|index');
        },
        mounted(){
            document.title = this.titleName
        }

    }
</script>

<style lang="stylus" scoped>
    h1
        color red
</style>