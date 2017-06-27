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
        <o-noEmpy></o-noEmpy>
    
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
        <!--身体-->
    </div>
</template>

<script>

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
            }
        }
    },
    methods: {},
    components: {
        'o-Empy': require('../components/oEmpy.vue'),
        'o-noEmpy': require('../components/noEmpy.vue'),
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