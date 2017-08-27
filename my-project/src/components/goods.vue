<template>
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
</template>

<script>
export default {
    name: 'goods',
    props: ['todos'], //传递参数
    data: function () {
        return {
            goodsJson: {
                title: '買的東西很多就是一個都用不上，怎麼辦啊',
                id: 102,
                price: '120.00',
                amount: 999
            },
        }
    },
    methods: {}
}
</script>

<style scoped lang='scss'>
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
.picOne {
    background: #fff;
    padding: 16px;
    margin-bottom: 20px;
    .goodsOne {
        margin: 16px;
        img {
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