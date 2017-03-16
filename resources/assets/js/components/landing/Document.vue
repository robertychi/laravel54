<!-- template -->
<template>
    <div>
        <h1>Document page</h1>
    </div>
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                titleName: '技術資料'
            }
        },
        mounted(){
            document.title = this.titleName
        }
    }
</script>

