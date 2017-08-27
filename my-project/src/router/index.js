import Vue from 'vue'
import Router from 'vue-router'
//引入模块
import home from '@/components/home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        // component: Hello
        components: { //多视图 路由配置
            // default: Foo, 没有就默认
            home: home,
        }
    }, {
        path: '/home',
        name: 'home',
        component: home
    }, {
        //重定向
        path: '/',
        redirect: '/'
    }]
})