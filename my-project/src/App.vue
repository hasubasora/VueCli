<template>
  <div id="app">
  
    <div class="leftBox">
      <transition>
        <router-view :todos="todos" name="left"></router-view>
      </transition>
    </div>
    <div class="helloBox">
{{storeText}}
      <keep-alive>
        <router-view :todos="todos" @my-event="onMyEvent" name="phone"></router-view>
      </keep-alive>
    </div>
    <div class="rightBox">
      <router-view :todos="todos" name="right"></router-view>
    </div>
  
  </div>
</template>

<script>
import { bus } from './assets/js/bus.js'
export default {
  name: 'app',
  data() {
    return {
      todos: {
        fis: false, _move: false, _x: '', _y: ''
      },
      phoneSize: {}
    }
  },
  computed: {
    storeText() {//计算 返回数据中心的数据 1 
      // return this.$store.state.counts
      // 设置了getters 就可以直接用
       return this.$store.getters.getTotal
    },
  },
  methods: {
    onMyEvent() {
      //从phone 触发事件 监听到 @my-event="onMyEvent" 执行以下
      this.$on('my-event', function (phoneSize) {
        this.phoneSize = phoneSize;
        console.log(phoneSize)
      })
      console.log('怎么没反应')
    },
    // onMyEvent() {
    //   bus.$on('my-event', function (phoneSize) {
    //     this.phoneSize = e;
    //     console.log(phoneSize + '888')
    //   })
    //   console.log('更加怎么没反应')
    // }
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
