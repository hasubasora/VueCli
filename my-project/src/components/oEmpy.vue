<template>
    <div class="oEmpy">
        {{oEmpy}}
    </div>
</template>

<script>
export default {
    name: 'oEmpy',
    data: function () {
        return { oEmpy: ' 亲，您还没添加任何模块，请将侧边的模块拖动到这里开始装修！', }
    },
    methods: {}
}
</script>

<style scoped>
.oEmpy {
    border: 2px dashed rgb(172, 178, 190);
    padding: 30px;
    line-height: 20px;
    font-size: 14px;
}
</style>