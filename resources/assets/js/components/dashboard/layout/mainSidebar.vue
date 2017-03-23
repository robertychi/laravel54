<!-- template -->
<template>
    <div>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <app-user-panel></app-user-panel>
                <!-- search form -->
                <app-search-bar></app-search-bar>
                <!-- /.search form -->
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li v-for="menu in menus"
                        :class="menu.class">
                        <router-link :to="menu.href"
                                     v-if="menu.viewMenu">
                            <i class="fa"
                               :class="menu.icon"></i>
                            <span>{{menu.text}}</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"
                                   v-if="menu.viewRightArrow"></i>
                            </span>
                        </router-link>
                        <!-- 在 label 的狀態顯示-->
                        <span v-if="!menu.viewMenu">{{menu.text}}</span>

                        <ul class="treeview-menu"
                            v-if="menu.viewTreeviewMenu">
                            <router-link tag="li" active-class="active" exact
                                         :to="childMenu.href"
                                         v-for="childMenu in menu.childMenus">
                                <a><i class="fa fa-circle-o"></i>{{childMenu.text}}</a>
                            </router-link>
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
    import UserPanel from './parts/_userPanel.vue'
    import SearchBar from './parts/_searchBar.vue'

    export default{
        data(){
            return {
                menus: [
                    {
                        icon      : '',
                        text      : 'MAIN NAVIGATION',
                        tag       : 'label',
                        class     : '',
                        href      : '',
                        childMenus: []

                    }, {
                        icon      : 'fa-dashboard',
                        text      : '儀表板',
                        tag       : 'multi',
                        class     : '',
                        href      : '',
                        childMenus: [
                            {href: '/dashboard', text: '控制板 V1',},
                            {href: '/dashboard/v2', text: '控制板 V2'},
                            {href: '/dashboard/v3', text: '控制板 V3'},
                        ]
                    },
                    {
                        icon      : '',
                        text      : '基本資料',
                        tag       : 'label',
                        class     : '',
                        href      : '',
                        childMenus: []
                    }, {
                        icon      : 'fa-cubes',
                        text      : '產品管理',
                        tag       : 'multi',
                        class     : '',
                        href      : '',
                        childMenus: [
                            {href: '/dashboard/product', text: '產品資料',},
                            {href: '/dashboard/productClass', text: '產品類別',},

                        ]
                    }, {
                        icon      : 'fa-address-card-o',
                        text      : '客戶管理',
                        tag       : 'multi',
                        class     : '',
                        href      : '',
                        childMenus: [
                            {href: '/dashboard/customer', text: '客戶資料',},
                            {href: '/dashboard/customerClass', text: '客戶類別',},
                        ]
                    }, {
                        icon      : 'fa-address-card',
                        text      : '廠商管理',
                        tag       : 'multi',
                        class     : '',
                        href      : '',
                        childMenus: [
                            {href: '/dashboard/supply', text: '廠商資訊',},
                        ]
                    }, {
                        icon          : '',
                        text          : '相關連結',
                        tag           : 'label',
                        class         : 'header',
                        href          : '',
                        childMenus    : []

                    }, {
                        icon      : 'fa-circle-o text-red',
                        text      : '首頁',
                        tag       : 'link',
                        class     : '',
                        href      : '/',
                        childMenus: []

                    }
                ]
            }
        },
        methods   : {
            /**
             * 修正 reload 網頁時，第一層選單無法 active 問題
             * */
            isActived(path){
                console.log('this');
                this.menus.forEach(item => {
                    item.childMenus.forEach(childItem => {
                        if (childItem.href === path)
                            item.class = "treeview active"
                    })
                })
            },
            checkViewState(){
                this.menus.forEach(item => {
                    //console.log(item.tag);
                    switch (item.tag) {
                        case 'label':
                            item.viewMenu = false
                            item.viewTreeviewMenu = false
                            item.viewRightArrow = false
                            item.class = 'header'
                            break;
                        case 'link':
                            item.viewMenu = true
                            item.viewTreeviewMenu = false
                            item.viewRightArrow = false
                            item.class = ''
                            break;
                        default:
                            item.viewMenu = true
                            item.viewTreeviewMenu = true
                            item.viewRightArrow = true
                            item.class = 'treeview'

                    }

                })
            }
        },
        components: {
            appUserPanel: UserPanel,
            appSearchBar: SearchBar
        },
        computed  : {},
        watch     : {
            $route() {
                this.isActived(this.$route.path);
            }
        },
        created(){
            this.checkViewState()
            this.isActived(this.$route.path)
        },

        mounted(){

        }

    }
</script>
<style lang="stylus" scoped>



</style>


