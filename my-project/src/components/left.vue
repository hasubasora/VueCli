

<template>
  <div class="left">
  
    <ul class="leftList">
      <li draggable="true">移動我過去</li>
      <li draggable="true">移動我過去</li>
    </ul>
  </div>
</template>

<script>



export default {
  name: 'left',
  data() {
    return {
      msg: '左边',
      methods: {
        drag: function (event) {
          // dom = event.currentTarget
        },

      }
    }
  }
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
