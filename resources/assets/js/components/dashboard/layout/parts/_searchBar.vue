<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
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
</template>
<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                //myData : 'xxx',
                //myArray: [],
                //myObj  : [{id: '1',name:'rob'},{id: '2',name:'tom'}]
                myMessage: 'Vue.js'
            }
        },
        components: {},
        methods   : {}
    }
</script>

<!-- style -->
<style lang="stylus" scoped>

</style>