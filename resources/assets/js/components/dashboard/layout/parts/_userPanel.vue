<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
    <div class="user-panel">
        <div class="pull-left image">
            <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
            <p>{{ authMessage.name }}</p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>
</template>
<!-- script -->
<script type="es6">
    export default{
        data(){
            return{
                authMessage: {},
                isAuth : ''
            }
        },
        components: {
         
        },
        methods:{
            /* 取出及設定使用者資訊 */
            setAuthenticatedUser(){
                let self = this
                axios.get('/api/user')
                        .then(function (response) {
                            self.$auth.setAuthenticatedUser(response.data)
                            self.authMessage = self.$auth.getAuthenticatedUser()
                        })
                        .catch(function (error) {
                            console.log('使用者連結有誤!!')
                        });

            }
        },
        created(){
            if (Vue.auth.isAuthenticated()) {
                this.isAuth = true
                this.setAuthenticatedUser()
            } else {
                this.isAuth = false
            }
        }
    }
</script>

<!-- style -->
<style lang="stylus" scoped>

</style>