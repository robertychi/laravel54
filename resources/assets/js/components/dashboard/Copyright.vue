<!-- 主要組件命名: FileName.vue-->
<!-- 副要組件命名: SubName.vue -->
<!-- 零件組件命名: _dropdownName.vue -->
<!-- template -->
<template>
    <div>
        <h1> Hi {{myMessage}}</h1>
    </div>
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