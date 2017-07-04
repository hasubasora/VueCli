<template>
    <div class="phone">
        <!--header-->
        <div class="oHeader">
            <div class="otitle">
                <img src="../assets/top.png">
            </div>
    
        </div>
    
        <div class="oWrite" data-name='one'>
            <ul>
                <li v-for="values in list">
                    {{values}}
                </li>
            </ul>
        </div>
        <!--header-->
        {{todos.fis}}1
        <!--身体-->
        <div class="todosBox" v-dragenter="{fs:show,fh:hide,bl:balance}" style="border:1px solid blue;background:skyblue;min-height:400px;">
            <o-noEmpy :todos="todos" v-show="todos.fis"></o-noEmpy>
            <o-goods :todos="todos" v-show="todos.fis"></o-goods>
    
        </div>
    
        <!--身体-->
    </div>
</template>

<script>
export default {
    name: 'phone',
    props: ['todos'], //传递参数
    data: function () {
        return {
            list: ['店铺首页', '全部宝贝', '新品上架', '新动态'],

            darg: false
        }
    },
    computed: {
        normalizedSize: function () {
            return this.todos.trim().toLowerCase()
        }
    },
    methods: {
        show() {
            this.todos.fis = true;
        },
        balance() {
            this.todos.fis = true;
        },
        hide() {
            this.todos.fis = false;
        },
        phoneList(x) {
            // 获取距离左边与上面的距离 获取右边与下面的距离
            if (x > this.$el.offsetLeft) {
                console.info(x + '111')
            }

            console.info(this.$el.offsetTop)
            console.info(this.$el.offsetLeft)
            console.info(this.$el.offsetRight)

        }
    },
    components: {
        'o-Empy': require('../components/oEmpy.vue'),
        'o-noEmpy': require('../components/noEmpy.vue'),
        'o-goods': require('../components/goods.vue'),
    },


}
</script>

<style scoped lang="scss">
@function rem($se, $base:16) {
    @return ($se/$base)*1rem;
}

$legacy-support-for-ie:true;
@mixin clearfix {
    @if $legacy-support-for-ie {
        *zoom: 1;
    }
    &:before,
    &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
        overflow: hidden;
    }
}

%border {
    border: 1px solid red;
}

.phone {
    width: 320px;
    min-height: 535px;
    border: 1px red solid;
    margin: 0 auto;
    background: #f7f7f7;
    img {
        display: block;
        width: 100%;
    }
    .oHeader {
        height: 100px;
        background: black;
        .otitle {
            height: 20px;
        }
    }
    .oWrite {
        width: 100%;
        background: #fff;
        margin-bottom: 16px;
        ul {
            display: -webkit-box;
            width: 100%;
            li {
                width: 25%;
                height: 40px;
                line-height: 40px;
            }
        }
    }
}
</style>