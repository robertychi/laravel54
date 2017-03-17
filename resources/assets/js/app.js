/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Auth from './package/auth/auth.js'


import { routes } from './routes'


const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(Auth)


router.beforeEach((to, from, next) => {
    //頁面進入管控
    //取 routes.js 的 meta 值

    if (to.matched.some(record => record.meta.checkLogin)) {
        // 判斷是否為登入，如登入不再訪問該頁面
        if (Vue.auth.isAuthenticated()) {
            next({
                path: '/dashboard'
            })
        } else next()
    }
    else if (to.matched.some(record => record.meta.isAuth)) {
        // 判斷是否為登入，未登入轉入login 頁面
        if ( ! Vue.auth.isAuthenticated()) {
            next({
                path: '/oauth/login'
            })
        } else next()
    }
    else next()
})

//Vue.http.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;

const app = new Vue({
    el    : '#app',
    router,
    render: h => h(App)
});
