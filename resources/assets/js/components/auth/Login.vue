<!-- template -->
<template>
    <div>
        <div class="login-box">
            <div class="login-logo">
                <router-link to="/"><a><b>Mini</b>Carrot</a></router-link>

            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <p class="login-box-msg">請登入</p>
                <div class="alert alert-danger"
                     v-if="isError">
                    <button type="button" class="close"
                            @click="isCancel">x
                    </button>
                    <h4>
                        您的帳號或密碼不正確！
                    </h4>
                </div>

                <div class="form-group has-feedback"
                     :class="{'has-error': errors.has('email') }">
                    <input class="form-control" name="email" type="text" placeholder="郵件"
                           v-validate="'required|email'"
                           :class="{'input': true }"
                           v-model="email">
                    <span class="help-block"
                          v-show="errors.has('email')">
                        {{ errors.first('email') }}
                    </span>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>

                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="密碼"
                           v-model="password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <!--<div class="checkbox icheck">-->
                        <!--<label>-->
                        <!--<input type="checkbox"> Remember Me-->
                        <!--</label>-->
                        <!--</div>-->
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button class="btn btn-primary btn-block btn-flat"
                                @click="login">登入
                        </button>
                    </div>
                    <!-- /.col -->
                </div>


                <!--<div class="social-auth-links text-center">-->
                <!--<p>- OR -</p>-->
                <!--<a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i>-->
                <!--Sign in using-->
                <!--Facebook</a>-->
                <!--<a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i>-->
                <!--Sign in using-->
                <!--Google+</a>-->
                <!--</div>-->
                <!-- /.social-auth-links -->

                <a href="#"
                   :class="{'text-danger': isError }">
                    <span class="fa fa-flag-o"></span> 忘記密碼？</a>
                <br>

                <a href="register.html" class="text-center"><span class="fa fa-registered"></span> 註冊</a>
                <br>

                <router-link to="/"><span class="fa fa-home"></span> 回首頁</router-link>
            </div>
            <!-- /.login-box-body -->
        </div>
        <!-- /.login-box -->
    </div>
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                email   : '',
                password: '',
                isError : false
            }
        },
        methods: {
            login(){
                var data = {
                    client_id    : 2,
                    client_secret: "Vt5USrAkiLFYDugIovH1IhTyLLZL1UO2SCgnHEWn",
                    grant_type   : 'password',
                    username     : this.email,
                    password     : this.password
                }

                axios.post('/oauth/token', data)
                        .then(response => {
                            this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
                            this.$router.push('/dashboard')
                        })
                        .catch(error => {
                            this.isError = true
                        });
            },
            isCancel(){
                this.isError = false
            }

        }
    }
</script>

