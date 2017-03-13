<!-- template -->
<template lang="pug">
    div
        h1 這是首頁
        p 我要開始做的了 {{ msg }}
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
           
        }
    }
</script>

<style lang="stylus" scoped>
    h1
        color red
</style>