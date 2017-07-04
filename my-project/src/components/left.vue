

<template>
<div class="left">

  <ul class="leftList">
    <li v-mouse="{is:todos._move,fn:move}" class="oli1"></li>

    <!--<li draggable="true" @click="set()" :class="[cla, cls,{'red':tt}]">2</li>-->
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

    }
  },
  mounted() { //自定义生命周期钩子
    // this.axios.get(this.url).then((response) => {
    //   this.toods=response,data;
    //   console.log(response.data)
    // })
  },
  methods: {
    move(x, y) {
      // console.log(x + '-1-' + y)
      this.todos._x = x;
      this.todos._y = y;
      // console.log(this.todos._x + '-2-' + this.todos._y)
      

    }
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
      top: 3px;
      left:5px;
      border: 1px solid red;
      height: 90px;
      width: 90px;
    
      
    }
  }
}
</style>
