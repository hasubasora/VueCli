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


Vue.directive('mouse', function(el, binding) {
    // console.log(el);
    // console.log(binding);
    // console.log(vnode);
    // console.log(oldVnode);
    el.addEventListener('click', function(e) {
        //     console.log(1243)
        var _xx, _yy;
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
                var x = e.pageX - _xx; //移动时根据鼠标位置计算控件左上角的绝对位置
                var y = e.pageY - _yy;
                console.log(x + '-4-' + y)
                el.style.top = y + 'px'
                el.style.left = x + 'px'
                document.title = x + '-' + y;
            }
            el.addEventListener('mouseup', function(params) {
                binding.value.is = false;
                el.style.top = '0px'
                el.style.left = '0px'
            })
        })
    })

})