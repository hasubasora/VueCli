<template>
  <div class="hello">

   <li>   1 {{msg}}</li> <br><li>222222222</li>
  </div> 
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '移动11我11',
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
