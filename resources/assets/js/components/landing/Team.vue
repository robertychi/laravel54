<!-- template -->
<template>
	<div class="test">
		<h1>Team</h1>
	</div>
</template>

<!-- script -->
<script type="es6">
	export default{
		data(){
			return {
				titleName: '關於我們'
			}
		},
		created(){
			console.log('2:page|Landing|Team');
		},
		mounted(){
			document.title = this.titleName
		}
	}

</script>
<style lang="stylus" scoped>


</style>
