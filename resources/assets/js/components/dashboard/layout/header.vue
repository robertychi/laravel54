<!-- template -->
<template>
    <div>
        <header class="main-header">
            <!-- Logo -->
            <a href="index2.html" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>M</b>B</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>Mini</b>business</span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Parts: dropdown-messages-->
                        <app-dropdown-messages></app-dropdown-messages>

                        <!-- Parts: dropdown-notifications-->
                        <app-dropdown-notifications></app-dropdown-notifications>

                        <!-- Parts: dropdown-tasks-->
                        <app-dropdown-tasks></app-dropdown-tasks>

                        <!-- Parts: dropdown-users-->
                        <app-dropdown-users></app-dropdown-users>

                        <!-- Parts: dropdown-languages -->
                        <app-dropdown-languages></app-dropdown-languages>

                        <!-- Control Sidebar Toggle Button -->
                        <!--<li>-->
                            <!--<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>-->
                        <!--</li>-->
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<!-- script -->
<script type="es6">
    import DropdownMessages from '../../parts/_dropdownMessages.vue'
    import DropdownNotifications from '../../parts/_dropdownNotifications.vue'
    import DropdownTasks from '../../parts/_dropdownTasks.vue'
    import DropdownLanguages from '../../parts/_dropdownLanguages.vue'
    import DropdownUsers from '../../parts/_dropdownUsers.vue'


    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {
            appDropdownMessages: DropdownMessages,
            appDropdownNotifications: DropdownNotifications,
            appDropdownTasks: DropdownTasks,
            appDropdownLanguages: DropdownLanguages,
            appDropdownUsers: DropdownUsers
        },
        methods   : {}
    }
</script>
