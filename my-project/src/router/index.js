import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import left from '@/components/left'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/left',
        name: 'left',
        component: left
    }]
})