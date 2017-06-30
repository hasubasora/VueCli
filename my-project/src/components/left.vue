

<template>
  <div class="left">
  
    <ul class="leftList">
      <li v-dragstart="set()" draggable="true">移動我過去</li>
      <li draggable="true" @click="set()" :class="[cla, cls,{'red':tt}]">移動我過去</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

// Vue.directive('runoob', function (el, binding) {
//     // 简写方式设置文本及背景颜色 v-runoob="{ color: 'green', text: '菜鸟教程!' }" 
//     el.innerHTML = binding.value.text
//     el.style.backgroundColor = binding.value.color
// })




export default {
  name: 'left',
  data() {
    return {
      cls: 'act',
      cla: 'arr',
      tt: true,
      msg: false,

    }
  },
  mounted() {//自定义生命周期钩子
    // this.axios.get(this.url).then((response) => {
    //   this.toods=response,data;
    //   console.log(response.data)
    // })
  },
  methods: {
    set() {


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
    display: -webkit-inline-box;
    li {
      border: 1px solid red;
      height: 90px;
      width: 90px;
    }
  }
}
</style>
