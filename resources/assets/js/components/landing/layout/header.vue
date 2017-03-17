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
                        <router-link to="/team" tag="li" active-class="active">
                            <a title="團隊">
                                <i class="fa fa-group"></i>
                                <span class="hidden-xs"> 團隊
                                </span>
                            </a>
                        </router-link>
                        <router-link to="/dashboard" tag="li" active-class="active"
                                     v-if="isAuth">
                            <a title="進入系統">
                                <i class="fa fa-tachometer"></i>
                                <span class="hidden-xs"> 系統
                                </span>
                            </a>
                        </router-link>

                        <!-- User Account: style can be found in dropdown.less(!isAuth)-->
                        <li class="dropdown user user-menu"
                            v-if="!isAuth">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="/img/guest1-160x160.jpg" class="user-image" alt="User Image">
                                <span class="hidden-xs">訪客</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="/img/guest1-160x160.jpg" class="img-circle" alt="User Image">
                                    <p>
                                        訪客
                                        <small>歡迎加入</small>
                                    </p>
                                </li>
                                <!-- Menu Body -->
                                <li class="user-body">
                                    <div class="row">
                                        <div class="col-xs-4 text-center">
                                            <a href="#"><i class="fa fa-facebook"></i> FB專頁</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <router-link to="/team">
                                                <a title="團隊">
                                                    <i class="fa fa-group"></i>
                                                    <span class="hidden-xs"> 團隊
                                                    </span>
                                                </a>
                                            </router-link>
                                        </div>
                                    </div>
                                    <!-- /.row -->
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">
                                            <i class="fa fa-pencil"></i> 註冊
                                        </a>
                                    </div>
                                    <div class="pull-right">
                                        <router-link to="/oauth/login">
                                            <a class="btn btn-default btn-flat">
                                                <i class="fa fa-sign-in"></i> 登入
                                            </a>
                                        </router-link>
                                    </div>

                                </li>
                            </ul>
                        </li>
                        <!-- User Account: style can be found in dropdown.less (isAuth)-->
                        <li class="dropdown user user-menu"
                            v-if="isAuth">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                <span class="hidden-xs">林政源</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="/img/guest1-160x160.jpg" class="img-circle" alt="User Image">
                                    <p>
                                        林政源 - 瑜誠工業
                                        <small>員工 2017/03/12</small>
                                    </p>
                                </li>
                                <!-- Menu Body -->
                                <li class="user-body">
                                    <div class="row">
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Followers</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Sales</a>
                                        </div>
                                        <div class="col-xs-4 text-center">
                                            <a href="#">Friends</a>
                                        </div>
                                    </div>
                                    <!-- /.row -->
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#" class="btn btn-default btn-flat">
                                            <i class="fa fa-info"></i> 詳細
                                        </a>
                                    </div>
                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat"
                                           @click="logout">
                                            <i class="fa fa-sign-out"></i> 登出
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- language -->
                        <app-dropdown-language></app-dropdown-language>

                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
<script type="es6">
    import DropdownLanguage from '../../parts/_dropdownLanguage.vue'
    /**
        ** components:{} **
        components: {
            appDropdownLanguage: DropdownLanguage
        },
        ** Html **
        <app-dropdown-language></app-dropdown-language>
        ** pug **
        app-dropdown-language
        ** routes.js **
        { path: '/dropdown-language', component: DropdownLanguage },
    */



    export default{
        data(){
            return {
                isAuth: false
            }
        },
        components: {
            appDropdownLanguage: DropdownLanguage
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

        }
    }
</script>
