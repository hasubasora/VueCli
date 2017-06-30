// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局注册组件
// Vue.component('my-header', [definition定义])
Vue.use(VueAxios, axios) //告诉vue 要用这个插件

/* eslint-disable no-new */
new Vue({ //實例對象
    el: '#app', //裝載到什麼位置，標籤 ID CLASS
    router, //用来渲染 外部引入的App组件  router：h=>h(App) 内置方法
    template: '<App/>', //裝載 什麼樣的東西 HTML代碼 片段 模板
    components: { App }
})