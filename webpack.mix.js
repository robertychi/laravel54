/* plugins 粉筆 */
let chalk = require( 'chalk' );
/* plugins 刪除目錄*/
let rimraf = require('rimraf');

const {mix} = require('laravel-mix');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


/* *****************************************************************************
 *  目錄設置
 *  設置常用目錄區域
 * ***************************************************************************** */
let npmDir = 'node_modules/',

    /* resources */
    jsDir = 'resources/assets/js/',
    sassDir = 'resources/assets/sass/',
    lessDir = 'resources/assets/less/',
    cssDir = 'resources/assets/css/',
    pluginsDir = 'resources/assets/plugins/',

    /* public */
    publicJsDir = 'public/js/',
    publicCssDir = 'public/css/',
    publicFontDir = 'public/fonts/',
    publicPluginsDir = 'public/plugins/';

/* *****************************************************************************
 *  判斷 npm run 在執行何種狀況
 *  在 command line 做分別
 *  dev & watch & production
 * ***************************************************************************** */
let npmNodeEnv = process.env.NODE_ENV;
let npmState = process.argv[2];
//console.log(process.env.NODE_ENV);

switch(npmNodeEnv){
    case "production":
        //npm run production
        logProduction();
        deleteDir();
        copyToPublic();
        lessToCss();
        vueApp();
        break;
    default:
        if( npmState == "--watch"){
            //npm run watch
            //console.log('watch');
            logWatch();
//            lessToCss();
            vueApp();
            webpackfunction();
        }else{
            /* 第一次使用執行這個完成系統copy ，再執行 watch */
            //npm run dev state
            //console.log('dev');
            logDevelopment();
            copyToPublic();
            copyToResources();
            lessToCss();
            vueApp();
        }
}


/* *****************************************************************************
 *  function
 *  AdminLTE LESS to CSS
 * ***************************************************************************** */
function lessToCss() {
    mix.less(lessDir + 'adminLTE/less/AdminLTE.less', publicCssDir);
    mix.less(lessDir + 'adminLTE/less/skins/_all-skins.less', publicCssDir + 'AdminLTE.all-skins.css');
    mix.less(lessDir + 'adminLTE/less/skins/skin-blue-light.less', publicCssDir + 'AdminLTE.blue-light-skins.css');
}


/* ============================================================================= */

/* *****************************************************************************
 *  function
 *  Vue.js => app.js & app.css
 * ***************************************************************************** */
function vueApp() {
    mix.js(jsDir + 'app.js', publicJsDir)
        .sass(sassDir + 'app.sass', publicCssDir );
}




/* *****************************************************************************
 * function
 * BrowserSyncPlugin
 * ***************************************************************************** */
function webpackfunction() {
    mix.webpackConfig({
        plugins: [
            new BrowserSyncPlugin({
                open : 'external',
                host : 'localhost',
                port : 5000,
                proxy: 'localhost:8000',
                files: [
                    'resources/views/**/*.php',
                    'app/**/*.php',
                    'routes/**/*.php']
            })
        ]
    });
}



/* *****************************************************************************
 *  function
 *  Combine Area
 *  以下僅新增、更新、刪除時，才需解開註解
 *  Mix 後再 註解起來 ，減少系統負載，執行過一次即可
 *  20170217 目前此處沒用上
 * ***************************************************************************** */
function combineArea() {
    /* MIX styles to vendor.css*/
    mix.combine([
        cssDir + "AdminLTE.min.css",
        cssDir + "AdminLTE_all-skins.min.css"
    ], publicCssDir + 'vendor.css');

    /* MIX styles to vendor.js*/
    mix.combine([
        pluginsDir + "AdminLTE.min.js"
    ], publicJsDir + 'vendor.js');
}

/* *****************************************************************************
 *  function
 *  Title: DeleteDir
 *  刪除 public 目錄
 *  用於 production 用，確保 public 為最新資料
 * ***************************************************************************** */
function deleteDir() {
    rimraf('./public/js',function(error){
        console.log('/n Dir was:',error);
    });
    rimraf('./public/css',function(error){
        console.log('/n Dir was:',error);
    });
    rimraf('./public/fonts',function(error){
        console.log('/n Dir was:',error);
    });
    rimraf('./public/plugins',function(error){
        console.log('/n Dir was:',error);
    });
}
/* ****************************************************
 * function
 * 目標位置： Public CSS Plugins
 * include CSS libery include Jquery plugins
 * copy
 * 用於第一次架構及 production 用
 * **************************************************** */
function copyToPublic() {

    /* ****************************************************
     * include CSS libery
     * **************************************************** */
    /* font-awesome */
    mix.copy(npmDir + 'font-awesome/css/font-awesome.min.css', publicCssDir);
    mix.copy(npmDir + 'font-awesome/fonts', publicFontDir);

    /* ionicons
     *  npm 的板本有問題，所以獨立下載執行，此處不再 copy
     * */
//    mix.copy(npmDir + 'ionicons/dist/css/ionicons.min.css', publicCssDir);
//    mix.copy(npmDir + 'ionicons/dist/css/ionicons.min.css.map', publicCssDir);
//    mix.copy(npmDir + 'ionicons/dist/fonts', publicFontDir);

    /* animate.css */
    mix.copy(npmDir + 'animate.css/animate.min.css', publicCssDir);

    /* ****************************************************
     * include Jquery plugins
     * **************************************************** */

    /* AdminLTE all plugins */
    mix.copy(npmDir + 'admin-lte/', publicPluginsDir + 'AdminLTE/' , flatten = false );

    /* icheck */
    mix.copy(npmDir + 'icheck/icheck.min.js', publicPluginsDir + 'icheck/');
    mix.copy(npmDir + 'icheck/skins/**/*', publicPluginsDir + 'icheck/skins');

    /* slimscroll */
    mix.copy(npmDir + 'jquery-slimscroll/jquery.slimscroll.min.js', publicPluginsDir + 'slimscroll/');

    /* fastclick */
    mix.copy(npmDir + 'fastclick/lib/fastclick.js', publicPluginsDir + 'fastclick/');
}


/* ****************************************************
 * function
 * 目標位置： Resources
 * **************************************************** */
function copyToResources() {
    mix.copy(npmDir + 'admin-lte/build/', lessDir + 'adminLTE/' , flatten = false );
}


/* ****************************************************
 * function
 * 執行訊息
 * 用於執行確認畫面用
 * **************************************************** */
function logWatch() {
    let str = `
    ---------------------------------------------------------------   
    |  ##        ##      ###     ##########   ######## ##      ## |   
    |  ##   ##   ##    ##   ##   ##########  ##        ##      ## |   
    |  ##   ##   ##   ##     ##      ##     ##         ###    ### |   
    |  #    ##    #  ##       ##     ##     ##         ########## |   
    |  #    #    #   ###########     ##     ##         ###    ### |   
    |   #   #   #    ##       ##     ##      ##        ##      ## |   
    |    #######     ##       ##     ##       ######## ##      ## |   
    ---------------------------------------------------------------   `;
    console.log( chalk.bgGreen.white.bold( str ) );
}
function logDevelopment() {
    let str = `
   --------------------------------------------------------------------------   
   |  ########  ######## ##     ##  ######## ##         #######  #########  |   
   |  ##     ## ##       ##     ##  ##       ##        ##     ## ##      ## |   
   |  ##     ## ##       ##     ##  ##       ##        ##     ## ##      ## |   
   |  ##     ## ######   ##     ##  ######   ##        ##     ## #########  |   
   |  ##     ## ##        ##   ##   ##       ##        ##     ## ##         |   
   |  ##     ## ##         ## ##    ##       ##     ## ##     ## ##         |   
   |  ########  ########    ###     ######## #########  #######  ##         |   
   --------------------------------------------------------------------------   `;
    console.log( chalk.black.bgYellow( str ) );
}
function logProduction() {
    let str = `
    ----------------------------------------------------------------------------   
    | ########  ########   #######   ########  ##     ##   ######## ########## |   
    | ##     ## ##     ## ##     ##  ##     ## ##     ##  ##        ########## |   
    | ##     ## ##     ## ##     ##  ##     ## ##     ## ##             ##     |   
    | ########  ########  ##     ##  ##     ## ##     ## ##             ##     |   
    | ##        ##   ##   ##     ##  ##     ## ##     ## ##             ##     |   
    | ##        ##    ##  ##     ##  ##     ## ##     ##  ##            ##     |   
    | ##        ##     ##  #######   ########   #######    ########     ##     |   
    ----------------------------------------------------------------------------   `;
    console.log( chalk.bgCyan.white.bold( str ) );
}
