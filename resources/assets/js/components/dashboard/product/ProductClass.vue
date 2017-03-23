<!-- template -->
<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    {{ titleName }}
                    <small>it all starts here</small>
                </h1>
                <ol class="breadcrumb">
                    <router-link to="/dashboard" tag="li" active-class="active" exact>
                        <a><i class="fa fa-dashboard"></i> 儀表板</a>
                    </router-link>
                    <router-link to="/dashboard/product" tag="li" active-class="active" exact>
                        <a><i class="fa fa-cubes"></i> {{ titleName }}</a>
                    </router-link>

                </ol>
            </section>

            <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="box animated fadeInRight">
                    <div class="box-header with-border">
                        <h3 class="box-title">列表</h3>

                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                    title="Collapse">
                                <i class="fa fa-minus"></i></button>
                            <!--<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip"-->
                            <!--title="Remove">-->
                            <!--<i class="fa fa-times"></i></button>-->
                        </div>
                    </div>
                    <div class="box-body">
                        <table class="table table-hover table-striped table-condensed">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>編號</th>
                                <th>名稱</th>
                                <th>價格</th>
                                <th><i class="fa fa-pencil"></i> <span class="hidden-xs">修改</span></th>
                                <th><i class="fa fa-trash-o"></i> <span class="hidden-xs">刪除</span></th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="product in products">
                                <td>{{product.id}}</td>
                                <td>{{product.number}}</td>
                                <td>{{product.name}}</td>
                                <td>{{product.price}}</td>
                                <td class="table-button">
                                    <a class="btn btn-info btn-sm">
                                        <i class="fa fa-pencil"></i> <span class="hidden-xs">修改</span>
                                    </a>
                                </td>
                                <td class="table-button">
                                    <a class="btn btn-danger btn-sm">
                                        <i class="fa fa-trash-o"></i> <span class="hidden-xs">刪除</span>
                                    </a>
                                </td>
                            </tr>
                            </tbody>

                        </table>


                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        Footer
                    </div>
                    <!-- /.box-footer-->
                </div>
                <!-- /.box -->

            </section>
            <!-- /.content -->
        </div>


    </div>
</template>

<!-- script -->
<script type="es6">
    /* adminlteMixin 主要導入修正 adminlte 的問題 */
    import { adminlteMixin } from '../mixin/adminlteMixin'

    export default {
        mixins : [adminlteMixin],
        data() {
            return {
                titleName: '產品類別',
                products : {}
            }
        },
        mounted() {
            document.title = this.titleName
        },
        methods: {
            getProducts(){
                axios.get('/api/product')
                        .then(response => {
                            console.log(response.data);
                            this.products = response.data.products;
                        })
                        .catch(error => {
                            console.log('error');
                        });
            }
        },
        created(){
            this.getProducts()
        }
    }
</script>
<style lang="stylus" scoped>
    .table-button
        width 60px

</style>
