<!--子文件部分-->
<template>
   <table class="table text-center">
        <caption>信息表</caption>
        <tr>
            <th class="text-center">编号{{tablesDate}}</th>
            <th class="text-center">名字</th>
            <th class="text-center">岁数</th>
            <th class="text-center">性别</th>
            <th class="text-center">操作</th>
        </tr>
        <tbody>
            <tr v-for="(item,index) in myData">
                <td>{{index}}</td>
                <td v-bind:class='{ "completed":styles.completed}'>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
                <td><button type="button" class="btn btn-danger btn-sm" data-toggle='modal' data-target='#layer' v-on:click="tabindex=index">删除</button>
                    <!--改变按钮-->
                    <button class="btn btn-success btn-sm " type="button" v-bind:class='[ styles.completed? "btn-danger":"btn-success"]' v-on:click="tooggleComletion(styles)">{{styles.completed? '取消':'发送'}}</button>
                    <!--改变按钮-->
                </td>
            </tr>
            <tr v-show="myData.length!=0">
                <td colspan="5">
                    <button type="button" v-on:click class="btn btn-danger" data-toggle='modal' data-target='#layer'>删除全部</button>
                </td>
            </tr>
            <tr v-show="myData.length==0">
                <td colspan="5" class="text-muted text-center">
                    <p>没有任何数据....</p>
                </td>
            </tr>
        </tbody>
    </table>
    <!--弹出框 data-dismiss="modal"  关闭 -->
        <!--背景色-->
        <div class="modal fade" tabindex="-1" role="dialog" id="layer">
            <div class="modal-dialog" role="document">
                <!--弹出框的内容-->
                <div class="modal-content">
                    <!--头部-->
                    <div class="modal-header">
                        <!--关闭按钮-->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <!--标题-->
                        <h4 class="modal-title">确定删除吗？</h4>
                    </div>
                    <!--内容-->
                    <div class="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <!--确定取消按钮-->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="deleteMsg(tabindex)" data-dismiss="modal">Save </button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <!--弹出框-->
</template>

<script>
  export default {
    name: 'hello',
     props: ['myData'],
        data() {
            return {
                styles: {
                    "completed": false
                },
                tabindex: -100, //弹窗删除的属性赋值
            }
        },
        computed: { //页面展示数据直接处理数据放出来
            tablesDate: function() {
                return this.myData.length;
            }
        },
        methods: { //事件操作
            tooggleComletion: function(styles) { //改变按钮
                styles.completed = !styles.completed;

            },

        }
  
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
