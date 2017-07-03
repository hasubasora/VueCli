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
        components: { //多视图 路由配置
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

// Vue.directive('runoob', function (el, binding) {
//     // 简写方式设置文本及背景颜色 v-runoob="{ color: 'green', text: '菜鸟教程!' }" 
//     el.innerHTML = binding.value.text
//     el.style.backgroundColor = binding.value.color
// })

// 注册一个全局自定义指令 v-focus
Vue.directive('drags', {
    acceptStatement: true,
    //只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
    bind: function(el, binding, vnode, oldVnode) {
        // console.log(el);
        // console.log(binding);
        // console.log(vnode);
        // console.log(oldVnode);
    },
    // 当绑定元素插入到 DOM 中。 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    inserted: function(el, binding, vnode, oldVnode) {
        // var s = JSON.stringify
        // console.log('name: ' + s(binding.name))
        // console.log('value: ' + s(binding.value))
        // console.log('expression: ' + s(binding.expression))
        // console.log('argument: ' + s(binding.arg))
        // console.log('modifiers: ' + s(binding.modifiers))
        // console.log('vnode keys: ' + Object.keys(vnode).join(', '))

        var self = el; //存下this，方便以后用 
        self.ondragenter = function(e) {
            // Vue.set(todos.fis, 0, true);
            binding.value.is = true;
            binding.value.fs();
            console.log(binding.value.fs)
            console.log('文件进来了')
        }
    },
    //被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
    update: function(el, binding, vnode, oldVnode) {

    },
    //被绑定元素所在模板完成一次更新周期时调用。
    componentUpdated: function() {},
    //只调用一次， 指令与元素解绑时调用。
    unbind: function() {}
})


Vue.directive('dragleave', {
    acceptStatement: true,
    inserted: function(el, binding, vnode, oldVnode) {
        var self = el; //存下this，方便以后用 
        self.ondragleave = function(e) {
            // Vue.set(todos.fis, 0, true);
            binding.value.is = true;
            binding.value.fs();
            // console.log(binding.value.fs)
            console.log('文件likai了')
        }
    },

})