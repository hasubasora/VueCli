<template>
  <div class="hello">
  <img src='../assets/logo.png' alt=""/>
  <img :src=arr alt="">
  
  </div> 

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      // arr: './assets/logo.png',
      arr: require('../assets/logo.png'),
      methods:{
        yd:function(){

        }
      }
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  
}
.hello{
  border: 1px red solid;
  background: #ccc;
}
li {
  display: inline-block;
  margin: 0 10px;
  @extend .hello;
}

a {
  color: #42b983;
}
</style>
