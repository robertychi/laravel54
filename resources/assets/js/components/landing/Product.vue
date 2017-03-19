<!-- template -->
<template>
    <div>
        <h1>Product page</h1>
    </div>
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                titleName: '產品介紹'
            }
        },
        created(){
            console.log('2:page|Landing|product');
        },
        mounted(){
            document.title = this.titleName
        }
    }
</script>

