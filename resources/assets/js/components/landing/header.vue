<template lang="html">
    <div>
        <nav class="navbar navbar-fixed-top navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/" class="navbar-brand"><a>YCHI</a></router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                        <router-link to="/document" tag="li" active-class="active"><a>文件</a></router-link>
                        <router-link to="/about" tag="li" active-class="active"><a>關於我們</a></router-link>
                        <router-link to="/product" tag="li" active-class="active"><a>產品介紹</a></router-link>
                        <router-link to="/contact" tag="li" active-class="active"><a>聯絡我們</a></router-link>
                        <router-link to="/dashboard" tag="li" active-class="active"><a>後台</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <router-link
                                to="/oauth/login"
                                tag="li"
                                v-if="!isAuth">
                                <a>Login</a>
                        </router-link>
                        <li v-if="isAuth">
                            <a href="#" @click="logout">Logout</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script type="es6">
    export default{
        data(){
            return {
                isAuth: false
            }
        },
        methods: {
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
