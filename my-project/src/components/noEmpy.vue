<template>
    <div class="noEmpy">
        {{noEmpy}}
    </div>
</template>

<script>
export default {
    name: 'noEmpy',
    data: function () {
        return { noEmpy: ' 释放鼠标将模块添加到此处', }
    },
    methods: {}
}
</script>

<style scoped>
.noEmpy {
    border: 2px dashed rgba(245, 144, 11, 0.71);
    background: rgba(245, 144, 11, 0.3);
    padding: 15px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: #D43704;
}
</style>