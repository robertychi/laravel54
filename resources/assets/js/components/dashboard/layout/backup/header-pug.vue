<!-- template -->
<template lang="pug">
    div
        header.main-header
            //Logo
            a(href="index2.html").logo
                // mini logo for sidebar mini 50x50 pixels
                span.logo-mini
                    b A
                    | lt
                // logo for regular state and mobile devices
                span.logo-lg
                    b Admin
                    | LTE
            // Header Navbar: style can be found in header.less
            nav.navbar.navbar-static-top
                // Sidebar toggle button
                a(href="#"
                  data-toggle="offcanvas"
                  role="button" ).sidebar-toggle
                    span.sr-only Toggle navigation
                div.navbar-custom-menu
                    ul.nav.navbar-nav
                        // Messages: style can be found in dropdown.less
                        li.dropdown.messages-menu
                            a(href="#" data-toggle="dropdown").dropdown-toggle
                                i.fa.fa-envelope-o
                                span.label.label-success 4
                            ul.dropdown-menu
                                li.header You have 4 messages
                                //inner menu: contains the actual data
                                li
                                    ul.menu
                                        li
                                            a(href="#")
                                                div.pull-left
                                                    img(src="img/user2-160x160.jpg" alt="User Image").img-circle
                                                h4 Support Team
                                                    small
                                                        i.fa.fa-clock-o  5 mins
                                                p Why not buy a new awesome theme?
                                        li
                                            a(href="#")
                                                div.pull-left
                                                    img(src="/img/user4-128x128.jpg" alt="User Image").img-circle
                                                h4 Support Team
                                                    small
                                                        i.fa.fa-clock-o  Today
                                                p Why not buy a new awesome theme?
                                li.footer
                                    a(href="#") View messages
                        // Notifications: style can be found in dropdown.less
                        li.dropdown.notifications-menu
                            a(href="#" data-toggle="dropdown").dropdown-toggle
                                i.fa.fa-bell-o
                                span.label.label-warning 4
                            ul.dropdown-menu
                                li.header You have 10 notifications
                                li
                                    //inner menu: contains the actual data
                                    ul.menu
                                        li
                                          a(href="#")
                                            i.fa.fa-users.text-aqua  5 new members joined today
                                        li
                                          a(href="#")
                                            i.fa.fa-warning.text-yellow  Very long description here
                                        li
                                          a(href="#")
                                            i.fa.fa-users.text-red  5 new members joined
                                li.footer
                                    a(href="#") View all
                        //Tasks: style can be found in dropdown.less
                        li.dropdown.tasks-menu
                            a(href="#" data-toggle="dropdown").dropdown-toggle
                                i.fa.fa-flag-o
                                span.label.label-danger 9
                            ul.dropdown-menu
                                li.header You have 9 tasks
                                li
                                    //inner menu: contains the actual data
                                    ul.menu
                                        li
                                            //Task item
                                            a(href="#")
                                                h3 Design some buttons
                                                    small.pull-right  20%
                                                div.progress.xs
                                                    div(style="width: 20%"
                                                        role="progressbar"
                                                        aria-valuenow="20"
                                                        aria-valuemin="0" aria-valuemax="100").progress-bar.progress-bar-aqua
                                                          span.sr-only 20% Complete
                                        li
                                            //Task item
                                            a(href="#")
                                                h3 Create a nice theme
                                                    small.pull-right  40%
                                                div.progress.xs
                                                    div(style="width: 40%"
                                                        role="progressbar"
                                                        aria-valuenow="20"
                                                        aria-valuemin="0" aria-valuemax="100").progress-bar.progress-bar-aqua
                                                          span.sr-only 20% Complete
                                li.footer
                                    a(href="#") View all
                        //User Account: style can be found in dropdown.less
                        li.dropdown.user.user-menu
                            a(href="#"
                              data-toggle="dropdown").dropdown-toggle
                                img(src="/img/user2-160x160.jpg"
                                    alt="User Image").user-image
                                span.hidden-xs Alexander Pierce
                            ul.dropdown-menu
                                //User image
                                li.user-header
                                    img(src="/img/user2-160x160.jpg"
                                        alt="User Image").img-circle
                                    p Alexander Pierce - Web Developer
                                        small Member since Nov. 2012
                                //Menu Body
                                li.user-body
                                    div.row
                                        div.col-xs-4.text-center
                                            a(href="#") Followers
                                        div.col-xs-4.text-center
                                            a(href="#") Sales.
                                        div.col-xs-4.text-center
                                            a(href="#") Friends.
                                //Menu Footer
                                li.user-footer
                                    div.pull-left
                                        a(href="#").btn.btn-default.btn-flat Profile
                                    div.pull-right
                                        a(href="#").btn.btn-default.btn-flat Sign out
                        //Control Sidebar Toggle Button
                        li
                            a(href="#"
                              data-toggle="control-sidebar")
                                  i.fa.fa-gears






</template>

<!-- script -->
<script type="es6">
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        methods   : {}
    }
</script>
