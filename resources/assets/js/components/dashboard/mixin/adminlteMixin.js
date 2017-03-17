export const adminlteMixin = {
    data(){
        return {
            /* 容器高度 初始值*/
            windowsHeight       : 0,
            bodyHeight          : 0,
            mainHeaderHeight    : 0,
            mainSidebarHeight   : 0,
            contentWrapperHeight: 0,
            wrapperHeight       : 0
        }
    },
    mounted(){
        this.getDomVal();
        this.fixRouterLink();
    },
    methods: {
        /* 取得 Dom 值*/
        getDomVal(){
            this.windowsHeight = $(window).height();
            this.bodyHeight = $('body').height();
            this.wrapperHeight = $('.wrapper').height();
            this.mainHeaderHeight = $('.main-header').height();
            this.mainSidebarHeight = $('.main-sidebar').height();
            this.contentWrapperHeight = $('.content-wrapper').height();
//            console.log('-----------------------');
//            console.log('window:' + this.windowsHeight);
//            console.log('body:' + this.bodyHeight);
//            console.log('.wrapper:' + this.wrapperHeight);
//            console.log('.main-header:' + this.mainHeaderHeight);
//            console.log('.main-sidebar:' + this.mainSidebarHeight);
//            console.log('.content-wrapper:' + this.contentWrapperHeight);
        },
        /* 修正當使用 <router-link> 連結時，.content-wrapper 高度錯誤問題*/
        fixRouterLink(){
            if (this.mainSidebarHeight > this.windowsHeight) {
//                console.log('mainSider big than windows');
                $('.content-wrapper').css('min-height', this.mainSidebarHeight + 'px');
            } else {
//                console.log('mainSider small than windows');
                $('.content-wrapper').css('min-height', (this.windowsHeight - this.mainHeaderHeight) + 'px');
            }
        }
    }
};
