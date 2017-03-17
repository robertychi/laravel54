<!-- 主要程式命名: FileName.vue-->
<!-- 副要程式命名: SubName.vue -->
<!-- template -->
<template>
    <li class="dropdown messages-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="有 4 個訊息">
            <i class="fa fa-envelope-o"></i>
            <span class="label label-success">4</span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">有 4 個訊息</li>
            <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                    <li><!-- start message -->
                        <a href="#">
                            <div class="pull-left">
                                <img src="/img/user2-160x160.jpg" class="img-circle"
                                     alt="User Image">
                            </div>
                            <h4>
                                Support Team
                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <!-- end message -->
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="/img/user4-128x128.jpg" class="img-circle"
                                     alt="User Image">
                            </div>
                            <h4>
                                AdminLTE Design Team
                                <small><i class="fa fa-clock-o"></i> 2 hours</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="/img/user4-128x128.jpg" class="img-circle"
                                     alt="User Image">
                            </div>
                            <h4>
                                Developers
                                <small><i class="fa fa-clock-o"></i> Today</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="/img/user3-128x128.jpg" class="img-circle"
                                     alt="User Image">
                            </div>
                            <h4>
                                Sales Department
                                <small><i class="fa fa-clock-o"></i> Yesterday</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="/img/user4-128x128.jpg" class="img-circle"
                                     alt="User Image">
                            </div>
                            <h4>
                                Reviewers
                                <small><i class="fa fa-clock-o"></i> 2 days</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="footer"><a href="#">See All Messages</a></li>
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