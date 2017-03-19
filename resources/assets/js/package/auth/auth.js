/**
 * auth.js
 * 登入驗證程式
 *
 * date:2017/03/15
 * writer: Robert.Lin
 * */

export default function (Vue) {
    let authenticatedUser = {}

    Vue.auth = {
        //set token
        setToken(token, expiration){
            //存 token 到 localStorage，登入
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
//            sessionStorage.setItem('token', token)
//            sessionStorage.setItem('expiration', expiration)
        },

        //get token
        getToken(){
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')


            if (!token || !expiration)
                return null

            if(Date.now() > parseInt(expiration)){
                this.destroyToken()
                return null
            } else {
                return token
            }

        },
        /**
         * destory token
         * 刪除 Token 在 localStorage 資料
         * 回覆訪客身份
         */
        destroyToken(){
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        /**
         * isAuthenticated
         * 回傳是否為使用者(true)或訪客(false)
         */
        isAuthenticated(){
            if (this.getToken())
                return true
            else
                return false
        },
        /**
         * setAuthenticatedUser
         * 設定使用者資訊
         * */
        setAuthenticatedUser(data){
            authenticatedUser = data
        },

        /**
         * getAuthenticatedUser
         * 取得使用者資訊
         * */
        getAuthenticatedUser(){
            return authenticatedUser
        }
    }
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get(){
                return Vue.auth
            }
        }
    })
}
