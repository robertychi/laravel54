<!-- template -->
<template>
    <div>
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
                <b>Version</b> 2.3.8
            </div>
            <strong>
                Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
                                                                                                             reserved.
        </footer>
    </div>
</template>

<!-- script -->
<script type="es6">
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
        components: {

        },

        created(){
            console.log('3:layout|Dashboard|mainFooter');
        }


    }
</script>
