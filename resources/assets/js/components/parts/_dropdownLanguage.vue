<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
    <li class="dropdown notifications-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="語言">
            <i class="fa fa-language"></i>
            <!--<span class="label label-warning">10</span>-->
        </a>
        <ul class="dropdown-menu">
            <li class="header">語言</li>
            <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                    <li>
                        <a href="#">
                            <i class="fa fa-users text-aqua"></i> TW 繁體中文
                        </a>
                    </li>

                </ul>
            </li>
            <!--<li class="footer"><a href="#">View all</a></li>-->
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
                myMessage: 'Vue.js'
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