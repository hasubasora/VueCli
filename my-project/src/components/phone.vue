<template>
    <div class="phone">
        <!--header-->
        <div class="oHeader">
            <div class="otitle">
                <img src="../assets/top.png">
            </div>
    
            头部
        </div>
    
        <div class="oWrite" data-name='one'>
            <ul>
                <li v-for="values in list">
                    {{values}}
                </li>
            </ul>
        </div>
        <!--header-->
    
        <!--身体-->
        <div v-dragenter style="height:100px;border:1px solid red">
            <o-noEmpy :msg="msg" v-if="darg!=false"></o-noEmpy>
            <div class="picOne">
                <div class="goodsOne">
                    <img src="..\assets\logo.png">
                    <div class="goodsTitle">
                        <p>{{goodsJson.title}}</p>
                        <strong>￥{{goodsJson.price}}</strong>
                        <span>銷售量{{goodsJson.amount}}</span>
                    </div>
                </div>
            </div>
        </div>
    
        <!--身体-->
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'phone',
    data: function () {
        return {
            list: ['店铺首页', '全部宝贝', '新品上架', '新动态'],
            goodsJson: {
                title: '買的東西很多就是一個都用不上，怎麼辦啊',
                id: 102,
                price: '120.00',
                amount: 999
            },
            darg: false
        }
    },
    props: ['msg'],//传递参数
    methods: {
        show() {
            this.darg = true;
            console.log(356374839)
        }
    },
    components: {
        'o-Empy': require('../components/oEmpy.vue'),
        'o-noEmpy': require('../components/noEmpy.vue'),
    },
    directives: {//自定义指令
        dragenter: {
            // 指令的定义
            inserted: function (el, binding) {
                // 聚焦元素
                el.ondragenter = function(e) {
                    // console.info(JSON.stringify(binding.expression));
                    // console.info(JSON.stringify(binding.value));
                    console.info('进来了！');
                }
                el.ondragover = function (e) {
                    //阻止冒泡的默认事件ondrop才能促发
                    var e = e || window.event;
                    e.preventDefault();
                    console.info('文件在里面动');
                }
                el.ondragleave = function (e) {
                    console.info('文件离开了');
                }
                el.ondrop = function (e) {
                    //获取到上面设置的数据，进行修改
                    //e.dataTransfer.getData("data");
                    e.dataTransfer.getData("data");
                    console.info('在里面放手了' + e.dataTransfer.getData("data"));
                    //要在ondragover添加阻止默认时间这个才促发
                }

            }
        }
    }

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


.picOne {
    background: #fff;
    padding: 16px;
    margin-bottom: 20px;
    .goodsOne {
        margin: 16px;

        img {
            display: block;
        }
        .goodsTitle {
            @include clearfix;
            p {
                height: rem(40);
                line-height: rem(16);
                text-align: left;
            }
            strong {
                float: left;
                color: red;
            }
            span {
                float: right;
                color: #6e6e6e;
                font-size: 14px;
            }
        }
    }
}
</style>