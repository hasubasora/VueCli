import Vue from 'vue'
import Router from 'vue-router'
import right from '@/components/right'
import left from '@/components/left'
import phone from '@/components/phone'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'phone',
        // component: Hello
        components: { //多视图
            // default: Foo, 没有就默认
            right: right,
            left: left,
            phone: phone
        }
    }, {
        path: '/left',
        name: 'left',
        component: left
    }, {
        path: '/right',
        name: 'right',
        component: right
    }]
})