<!-- template -->
<template lang="pug">
    div
        // Content Wrapper. Contains page content
        div.content-wrapper
            section.content-header
                h1 Blank page
                    small   it all starts here
                ol.breadcrumb
                    li
                        a(href="#")
                            i.fa.fa-dashboard  Home
                    li
                        a(href="#") Examples
                    li.active
                        a(href="#") Blank page

            //  Main content
            section.content

                // Default box
                div.box

                    // box-header
                    div.box-header.with-border
                        h3.box-title Title
                        div.box-tools.pull-right
                            button( type="button"
                                    data-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse").btn.btn-box-tool
                                i.fa.fa-minus
                            button( type="button"
                                    data-widget="remove"
                                    data-toggle="tooltip"
                                    title="Collapse").btn.btn-box-tool
                                i.fa.fa-times

                    // box-body
                    div.box-body
                        span Start creating your amazing application!

                    // box-footer
                    div.box-footer
                        span Footer







</template>

<!-- script -->
<script type="es6">
    /* adminlteMixin 主要導入修正 adminlte 的問題 */
    import {
        adminlteMixin
    } from './mixin/adminlteMixin'

    export default {
        mixins: [adminlteMixin],
        data() {
            return {
                titleName: '首頁2'
            }
        },
        mounted() {
            document.title = this.titleName
        }
    }
</script>
<style lang="stylus" scoped>

</style>
