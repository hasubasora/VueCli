<!--子文件部分-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="" role="form">
      <div class="form-group">
        <label for="username">名字</label>：
        <input type="text" id="username" v-model="username" class="form-control">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>：
        <input type="text" id="sex" v-model="sex" class="form-control">
      </div>
      <div class="form-group">
        <label for="age">年龄</label>：
        <input type="text" id="age" v-model="age" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" v-on:click="add()" class="btn btn-success btn-sm " value="确定">
        <input type="text" class="btn btn-info btn-sm " value="重置">
      </div>
    </form>
  
  </div>
</template>

<script>

  export default {
    name: 'hello',
    props: ['myData'],
    data() {
      return {
        username: '',
        sex: '',
        age: '',
        msg: '这里首页rz'
      }
    },
    methods: { //事件操作
      add() {
        if (this.username === "") {
          alert('不能为空');
        } else {
          this.myData.push({
            name: this.username,
            age: this.age,
            sex: this.sex
          });
          this.username = '';
          this.age = '';
          this.sex = '';
        }
      },
  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
