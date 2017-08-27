<template lang="pug">
 .home 
  .facelook 左边
  .facelook 中间
  .facelook 右边
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {}
}
</script>


<style lang="scss">
.home {
    background: #ccc;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    .facelook {
        border: 1px solid red;
        flex: 1;
        min-width: 300px;
    }
}
</style>
