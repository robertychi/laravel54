<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
    <li class="dropdown user user-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="/img/guest1-160x160.jpg" class="user-image" alt="User Image">
            <span class="hidden-xs"> {{ isAuthData.name }} </span>
        </a>
        <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header">
                <img :src="isAuth ? 'YES' : '/img/guest1-160x160.jpg'" class="img-circle" alt="User Image">
                <p>
                    {{ isAuthData.name }}
                    {{isAuth ? 'YES' : 'NO'}}
                    <small>歡迎加入</small>

                </p>
            </li>
            <!-- 未登入狀態 (!isAuth)-->
            <!-- Menu Body -->
            <li class="user-body"
                v-if="!isAuth">
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
            <li class="user-footer"
                v-if="!isAuth">
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
            <!-- 登入狀態 (isAuth)-->
            <!-- Menu Body -->
            <li class="user-body"
                v-if="isAuth">
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
            <li class="user-footer"
                v-if="isAuth">
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
                isAuthData: '',
                isAuth    : false
            }
        },
        components: {},
        methods   : {
            logout(){

                this.$auth.destroyToken()
                this.$router.push('/oauth/login')
            },
            setAuthenticatedUser(){
                let self = this
                axios.get('/api/user')
                        .then(function (response) {
                            console.log('response');

                            self.isAuthData = response.data
                        })
                        .catch(function (error) {
                            console.log(error)
                        });
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
            console.log('esd');
            this.setAuthenticatedUser()
        }
    }
</script>

<!-- style -->
<style lang="stylus" scoped>

</style>