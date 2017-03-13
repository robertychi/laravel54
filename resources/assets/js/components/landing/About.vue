<!-- template -->
<template lang="pug">
	div.test
		h1 {{ msg }}
			a(href="http://www.google.com/").test google
</template>

<!-- script -->
<script type="es6">
export default {
    data() {
        return {
            msg: 'hello vue1'
        }
    },
    components: {

    }
}
</script>
<style lang="stylus" scoped>


</style>
