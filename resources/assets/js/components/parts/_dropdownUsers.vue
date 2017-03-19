<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
    <li class="dropdown user user-menu">
        <!-- User Account: style can be found in dropdown.less(!isAuth)-->
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
           v-if="!isAuth">
            <img src="/img/guest1-160x160.jpg" class="user-image" alt="User Image">
            <span class="hidden-xs"> 訪客 </span>
        </a>
        <ul class="dropdown-menu"
            v-if="!isAuth">
            <!-- User image -->
            <li class="user-header">
                <img src="/img/guest1-160x160.jpg" class="img-circle" alt="User Image">
                <p>
                    訪客
                    <small>歡迎加入12</small>
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
                                <i class="fa fa-group"></i> 團隊


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
        <!-- User Account: style can be found in dropdown.less (isAuth)-->
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
           v-if="isAuth">
            <img src="/img/user2-160x160.jpg" class="user-image" alt="User Image">
            <span class="hidden-xs">{{ authMessage.name }}</span>

        </a>
        <ul class="dropdown-menu"
            v-if="isAuth">
            <!-- User image -->
            <li class="user-header">
                <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                <p>
                    林政源 - 瑜誠工業
                    <small>員工 2017/03/12</small>

                </p>
            </li>
            <!-- Menu Body -->
            <li class="user-body">
                <div class="row">
                    <div class="col-xs-4 text-center">
                        <a href="#"><i class="fa fa-facebook"></i> FB專頁</a>
                    </div>
                    <div class="col-xs-4 text-center">
                        <router-link to="/document">
                            <a title="文件"><i class="fa fa-book"></i> 文件</a>
                        </router-link>
                    </div>
                    <div class="col-xs-4 text-center">
                        <router-link to="">
                            <a title="文件">
                                <i class="fa fa-copyright"></i> 版本
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
                        <i class="fa fa-cog"></i> 設定
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
</template>
<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                isAuth     : false,
                authMessage: {'name': '訪客'}
            }
        },
        components: {},
        methods   : {
            logout(){
                //console.log('logout');
                this.$auth.destroyToken()
                this.$router.push('/oauth/login')

            },
            setAuthenticatedUser(){
                let self = this
                axios.get('/api/user')
                        .then(function (response) {
                            self.$auth.setAuthenticatedUser(response.data)
                            console.log(self.$auth.getAuthenticatedUser());
                            self.authMessage = self.$auth.getAuthenticatedUser()
                        })
                        .catch(function (error) {
                            console.log('使用者連結有誤!!')
                        });
            }
        },
        created(){
            console.log('4:parts|dropdownUser');
            if (Vue.auth.isAuthenticated()) {
                this.isAuth = true
            } else {
                this.isAuth = false
            }
            if(this.isAuth){
                this.setAuthenticatedUser()
            }



        },
        mounted(){

        }
    }
</script>

<!-- style -->
<style lang="stylus" scoped>

</style>