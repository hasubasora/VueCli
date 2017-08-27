

<template>
  <div class="left">
  
    <ul class="leftList"  v-for="(item,index) in uiList" :key="index">
      <li v-mouse="{is:todos._move,fn:move,xt:storeText}" draggable="true" class="oli1"></li>
{{storeText}}
      <!-- <li draggable="true" @click="set()" :class="[cla, cls,{'red':tt}]">2</li> -->
      <li>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left',
  props: ['todos'], //传递参数
  data() {
    return {
      cls: 'act',
      cla: 'arr',
      tt: true,
      msg: false,
      uiList:[{
        name:'组件',
        src:'',
        num:1
      },{
        name:'组件1',
        src:'',
        num:1
      },{
        name:'组件2',
        src:'',
        num:1
      },{
        name:'组件',
        src:'',
        num:1
      },{
        name:'组件',
        src:'',
        num:1
      },{
        name:'组件',
        src:'',
        num:1
      },{
        name:'组件',
        src:'',
        num:1
      },{
        name:'组件',
        src:'',
        num:1
      }]

    }
  },
  mounted() { //自定义生命周期钩子
    // this.axios.get(this.url).then((response) => {
    //   this.toods=response,data;
    //   console.log(response.data)
    // })
  },
  computed: {
    storeText() {//计算 返回数据中心的数据 1 
      return this.$store.state.phoneSizeId
    },
  },
  methods: {
    move(x, y) {
      // console.log(x + '-1-' + y)
      this.todos._x = x;
      this.todos._y = y;
      // console.log(this.todos._x + '-2-' + this.todos._y)
    },
  
  },


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left {
  width: 180px;
  height: 1360px;
  background: #fff;
  .leftList {
    // display: -webkit-inline-box;
    position: relative;
    top: 0;
    left: 0;
    li {
      position: absolute;
      border: 1px solid red;
      height: 90px;
      width: 90px;
      float: left;
    }
  }
}
</style>
