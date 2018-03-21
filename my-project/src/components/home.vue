<template lang="pug">
 .home 
  section.facelook 左边
  section.facelook 中间
   aside.ip7.margin 
    section.phoneItem.goodsOne
     img(src="../assets/top.png")
     p 标题标题标题标题标题标题标题标题标题标题标题标题标题标题
     span.prices 1999.00￥
     span.discount  456456￥
  section.facelook 右边
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
  mounted () {
  
  }
};
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
  .ip7 {
    width: 320px;
    height: 568px;
    border: 1px solid red;
  }
  .margin {
    margin: 20px auto;
    background: #fff;
  }
  .goodsOne {
    border: 1px solid red;
    padding: 20px;
    img {
      border: 1px solid red;
      width: 100%;
    }
  }
  .phoneItem {
    p {
      padding: 10px;
      text-align: left;
      line-height: 18px;
    }
    .prices {
      color: red;
      font-size: 20px;
    }
    .discount {
      text-decoration: line-through;
      color: #888;
    }
  }
}
</style>
