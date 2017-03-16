<!-- template -->
<template>
    <div>
        <h1>這是首頁</h1>
        <p>我要開始做的了 </p>
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
        mounted(){
            document.title = this.titleName
        }
    }
</script>

<style lang="stylus" scoped>
    h1
        color red
</style>