<!-- template -->
<template>
    <div>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>{{ authMessage.name }}</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <!-- search form -->
                <form action="#" method="get" class="sidebar-form">
                    <div class="input-group">
                        <input type="text" name="q" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                <!-- /.search form -->
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">MAIN NAVIGAT</li>
                    <li class="treeview"
                        v-for="menu in menus">
                        <a>
                            <i class="fa"
                               :class="menu.icon"></i>
                            <span>{{menu.text}}</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li v-for="childMenu in menu.childMenus" >
                                <router-link :to="childMenu.href">
                                    <a><i class="fa fa-circle-o"></i> {{childMenu.text}}</a>
                                </router-link>
                            </li>
                        </ul>
                    </li>


                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                authMessage: {},
                menus      : [
                    {
                        icon      : 'fa-dashboard',
                        text      : '儀表板',
                        class     : '',
                        childMenus: [
                            {href: '/dashboard', text: '控制板 V1',},
                            {href: '/dashboard/v2', text: '控制板 V2'},
                            {href: '/dashboard/v3', text: '控制板 V3'},
                        ]
                    }, {
                        icon      : 'fa-cubes',
                        text      : '產品',
                        class     : '',
                        childMenus: [
                            {href: '/dashboard/product', text: '產品頁面',},
                        ]
                    }
                ]
            }
        },
        methods   : {
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

            },
            checkMenuActived(path){
//                let defHref = this.$route.path
//                console.log(defHref);
//
//                this.menus.forEach(item => {
//                    item.childMenus.forEach(childItem => {
//                        if (childItem.href == path) {
////                            childItem.class = 'active'
//                        }
//                    })
//                });
            }
        },
        components: {},
        computed  : {},
        watch     : {
            $route() {
                this.checkMenuActived(this.$route.path);
            }
        },
        created(){
            console.log('3:layout|Dashboard|mainSidebar');
            /* 判斷是否為使用者 */
            if (Vue.auth.isAuthenticated()) {
                this.isAuth = true
                this.setAuthenticatedUser()
            } else {
                this.isAuth = false
            }
        },

        mounted(){
            console.log('moo');
            this.checkMenuActived()
        }

    }
</script>


