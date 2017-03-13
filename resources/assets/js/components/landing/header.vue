<template lang="pug">
    div
        nav.navbar.navbar-fixed-top.navbar-default
            div.container-fluid
                div.navbar-header
                    button( type="button"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar").navbar-toggle.collapsed
                        span.sr-only Toggle navigation
                        - for (var x = 0; x < 3; x++)
                            span.icon-bar
                    router-link(to="/").navbar-brand YCHI
                div.collapse.navbar-collapse#navbar
                    ul.nav.navbar-nav
                        router-link(to="/" tag="li" active-class="active" exact)
                            a {{msg}}
                        router-link(to="/document" tag="li" active-class="active" )
                            a 文件
                        router-link(to="/About" tag="li" active-class="active")
                            a 關於我們
                        router-link(to="/product" tag="li" active-class="active" )
                            a 產品介紹
                        router-link(to="/contact" tag="li" active-class="active" )
                            a 聯絡我們
                        router-link(to="/dashboard" tag="li" active-class="active" )
                            a 後台

</template>
<script type="es6">
    export default{
        data(){
            return {
              msg: "我是首頁"
            }
        }
    }
</script>
