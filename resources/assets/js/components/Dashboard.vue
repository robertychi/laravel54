<!-- template -->
<template lang="pug">
    div.wrapper
        app-header
        app-main-sidebar
        router-view
        app-main-footer
        app-control-sidebar
</template>

<!-- script -->
<script type="es6">
    /* layout 共用框架 */
    import Header from './dashboard/layout/header.vue'
    import MainSidebar from './dashboard/layout/mainSidebar.vue'
    import MainFooter from './dashboard/layout/mainFooter.vue'
    import ControlSidebar from './dashboard/layout/controlSidebar.vue'
    /* plugins: adminLTE */
    import AdminLTE from 'admin-lte/dist/js/app'

    export default {
        data() {
            return {
                sidebar          : 50,
                isSidebarCollapse: false,
                isSidebarMini    : true
            }
        },
        components: {
            appHeader        : Header,
            appMainSidebar   : MainSidebar,
            appMainFooter    : MainFooter,
            appControlSidebar: ControlSidebar,

        },
        methods   : {},
        beforeCreate() {

        },
        created() {

        },
        beforeMount() {

        },
        mounted() {


        }

    }
</script>
<style lang="stylus" scoped>
    /* AdminLTE Css*/
    @import "/css/AdminLTE.css"
    @import "/css/AdminLTE.all-skins.css"
</style>
