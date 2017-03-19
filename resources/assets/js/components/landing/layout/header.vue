<template lang="html">
    <div>
        <header class="main-header">
            <!-- Logo -->
            <a href="/" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>M</b>B</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>Mini</b>Business</span>
            </a>
            <nav class="navbar navbar-static-top">
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <router-link to="/" tag="li" active-class="active" exact>
                            <a title="首頁">
                                <i class="fa fa-home"></i>
                                <span class="hidden-xs"> 首頁</span>
                            </a>
                        </router-link>
                        <router-link to="/document" tag="li" active-class="active">
                            <a title="文件">
                                <i class="fa fa-book"></i>
                                <span class="hidden-xs"> 文件</span>
                            </a>
                        </router-link>
                        <router-link to="/product" tag="li" active-class="active">
                            <a title="產品">
                                <i class="fa fa-cubes"></i>
                                <span class="hidden-xs"> 產品</span>
                            </a>
                        </router-link>

                        <router-link to="/dashboard" tag="li" active-class="active">
                            <a title="進入系統">
                                <i class="fa fa-tachometer"></i>
                                <span class="hidden-xs"> 系統
                                </span>
                            </a>
                        </router-link>

                        <!-- Parts: dropdown-users -->
                        <app-dropdown-users></app-dropdown-users>

                        <!-- Parts: dropdown-languages -->
                        <app-dropdown-languages></app-dropdown-languages>

                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
<script type="es6">
    import DropdownLanguages from '../../parts/_dropdownLanguages.vue'
    import DropdownUsers from '../../parts/_dropdownUsers.vue'

    export default{
        data(){
            return {
                isAuth: false
            }
        },
        components: {
            appDropdownLanguages: DropdownLanguages,
            appDropdownUsers    : DropdownUsers
        },
        methods   : {
            logout(){
                //console.log('logout');
                this.$auth.destroyToken()
                this.$router.push('/oauth/login')
            }
        },
        created(){

            if (Vue.auth.isAuthenticated()) {
                this.isAuth = true
            } else {
                this.isAuth = false
            }

        },
        mounted(){

        }
    }
</script>
