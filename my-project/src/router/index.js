import Vue from 'vue'
import Router from 'vue-router'
//引入模块
import hello from '@/components/hello'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            // component: Hello
            components: { //多视图 路由配置
                // default: Foo, 没有就默认
                hello: hello,
            }
        },
        //  {
        //     path: '/hello',
        //     name: 'hello',
        //     component: hello
        // },
        {
            //重定向
            path: '/',
            redirect: '/'
        }
    ]
})

// var config = {
//     type: Phaser.AUTO,
//     width: 20 * 32,
//     height: 20 * 32,
//     parent: 'game',
//     // scene: [Game]
// };

// var game = new Phaser.Game(config);