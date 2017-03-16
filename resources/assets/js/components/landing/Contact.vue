<!-- template -->
<template>
    <div>
        <h1>Contact page</h1>
    </div>
</template>

<!-- script -->
<script type="es6">
    export default{
        data(){
            return {
                titleName: '聯絡我們'
            }
        },
        mounted(){
            document.title = this.titleName
        }
    }
</script>

