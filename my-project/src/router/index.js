import Vue from 'vue'
import Router from 'vue-router'
import right from '@/components/right'
import left from '@/components/left'
import phone from '@/components/phone'
import RedApple from '@/components/RedApple'
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
        path: '/left:color',
        name: 'left',
        component: left
    }, {
        path: '/right',
        name: 'right',
        component: right,
        cheildren: [ //子子组件页面
            {
                path: 'red',
                component: RedApple
            }
        ]
    }, {
        //重定向
        path: '/',
        redirect: 'RedApple'
    }]
})


Vue.directive('mouse', function(el, binding) {
    // console.log(el);
    // console.log(binding);
    // console.log(vnode);
    // console.log(oldVnode);
    el.addEventListener('click', function(e) {
        //     console.log(1243)
        let _xx, _yy;
        el.addEventListener('mousedown', function(e) {
            var e = e || event;
            binding.value.is = true;
            _xx = e.pageX - parseInt(el.offsetLeft);
            _yy = e.pageY - parseInt(el.offsetTop);
            console.log(el.offsetTop)
        })
        document.addEventListener('mousemove', function(e) {
            var e = e || event;
            if (binding.value.is) {
                let x = e.pageX - _xx; //移动时根据鼠标位置计算控件左上角的绝对位置
                let y = e.pageY - _yy;
                console.log(x + '-4-' + y) //x
                el.style.top = y + 'px'
                el.style.left = x + 'px'
                binding.value.ph(x);
            }
            el.addEventListener('mouseup', function(params) {
                binding.value.is = false;
                el.style.top = '0px'
                el.style.left = '0px'
            })
        })
    })

})

Vue.directive('dragenter', function(el, binding) {
    let self = el; //存下this，方便以后用 
    self.ondragenter = function(e) {
        binding.value.fs();
        // console.log(binding.value.fs)
        // console.log('文件进来了')
    }
    self.ondragover = function(e) {
        var e = e || window.event;
        e.preventDefault();
        binding.value.bl();
        // console.log('在动')
    }
    self.ondragleave = function(e) {
        binding.value.fh();
        // console.log(binding.value.balance)
        // console.log('出去了')
    }

})