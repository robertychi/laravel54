<!-- template -->
<template lang="pug">
    div.body
        app-header
        router-view


</template>

<!-- script -->
<script type="es6">
    import Header from './landing/header.vue'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            appHeader: Header
        }
    }
</script>
<style lang="stylus" scoped>
    .body
        padding-top 40px
    h1
        color red
</style>
