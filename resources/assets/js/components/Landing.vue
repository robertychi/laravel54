<!-- template -->
<template>
    <div class="body">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<!-- script -->
<script type="es6">
    import Header from './landing/layout/header.vue'

    export default{
        data(){
            return {
                msg: 'hello vue '
            }
        },
        components: {
            appHeader: Header
        },
        created(){
            $('body').removeClass('login-page')
            console.log('created:Landing.vue');
        }
    }
</script>
<style lang="stylus" scoped>

</style>
