import Vue from 'vue'
import Router from 'vue-router'
import zy from '@/components/zy'
import rz from '@/components/rz'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '这里设置路由,這裡是首頁',
        component: zy
    }, {
        path: '/rz',
        name: '这里日誌',
        component: rz
    }]
})