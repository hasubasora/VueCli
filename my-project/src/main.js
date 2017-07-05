// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 全局注册组件
// Vue.component('my-header', [definition定义])
Vue.use(VueAxios, axios) //告诉vue 要用这个插件
Vue.use(Vuex)

// 实例化
const store = new Vuex.Store({
    state: { //需要储存的数据
        counts: 1
    },
    //getters
    getters: { //获取状态及里面的数据
        getTotal(state) { //拿状态集里面的数据
            return state.counts
        }
    },
    // commit
    mutations: { //动作 只能同步操作数据 不能做接口
        // this.$store.commit('increment', this.price) //触发
        increment(state, price) { //state 来改变 cound
            // 变更状态
            state.counts += price
        },
        decrement() {
            state.counts -= price
        }
    },
    //dispatch
    actions: { //能在这里进行异步的操作 跟后端API接口放这里
        //  this.$store.dispatch('increase', this.price) //触发
        increase(context, price) { //做个中介再去执行
            context.commit('increment', price)
        }
    }
})


/* eslint-disable no-new */
new Vue({ //實例對象
    el: '#app', //裝載到什麼位置，標籤 ID CLASS
    router, //用来渲染 外部引入的App组件  router：h=>h(App) 内置方法
    store, //全局使用
    template: '<App/>', //裝載 什麼樣的東西 HTML代碼 片段 模板
    components: { App }
})