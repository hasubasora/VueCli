<template>
  <div id="app">
  
    <div class="leftBox">
      <router-view :todos="todos" name="left"></router-view>
    </div>
    <div class="helloBox">
      <router-view :todos="todos" name="phone"></router-view>
    </div>
    <div class="rightBox">
      <router-view :todos="todos" name="right"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      todos: {
        fis: false
      }
    }
  }
}


</script>

<style lang="scss">
%box {
  position: absolute;
  top: 0;
  z-index: 2;
  border: 1px solid red;
}

.leftBox {
  left: 0;
  @extend %box;
}

.rightBox {
  right: 0;
  @extend %box;
}

.helloBox {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  background: #ccc;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
