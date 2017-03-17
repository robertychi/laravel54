<!-- 主要程式命名: FileName.vue-->
<!-- 副要程式命名: SubName.vue -->
<!-- template -->
<template>
    <li class="dropdown notifications-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="有 10 個通知">
            <i class="fa fa-bell-o"></i>
            <span class="label label-warning">10</span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">有 10 個通知</li>
            <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                    <li>
                        <a href="#">
                            <i class="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-warning text-yellow"></i> Very long description here
                                                                      that may not fit into the
                                                                      page and may cause design
                                                                      problems
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-users text-red"></i> 5 new members joined
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-user text-red"></i> You changed your username
                        </a>
                    </li>
                </ul>
            </li>
            <li class="footer"><a href="#">View all</a></li>
        </ul>
    </li>
</template>
<!-- script -->
<script type="es6">
    export default{
        data(){
            return{
                //myData : 'xxx',
                //myArray: [],
                //myObj  : [{id: '1',name:'rob'},{id: '2',name:'tom'}]
            }
        },
        components: {
         
        },
        methods:{
        
        }
    }
</script>

<!-- style -->
<style lang="stylus" scoped>

</style>