<template>
  <div id="app">
  <!--这里是主要部分，父文件-->
    <img src="./assets/logo.png">
    <ul>
        <li v-for="item in types"><router-link v-bind:to="item.link">{{item.title}}</router-link></li>
    </ul>

    <router-view></router-view>
    <hello></hello>
  </div>
</template>

<script>
// import hello from './components/hello'
// data在这一定要是方法才能返回出去
export default {
  name: 'app',
  data:function(){
    return{
      types: [
              { "title": "主页", "link": "/" },
              { "title": "日志", "link": "rz" },
              { "title": "相册", "link": "xc" },
              { "title": "留言吧", "link": "lyb" },
              { "title": "说说", "link": "ss" },
              { "title": "个人的", "link": "grd" },
              { "title": "bzd", "link": "bzd" },
          ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
</style>
