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

<style scoped>

</style>