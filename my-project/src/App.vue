<template>
  <div id="app">
     <router-view name="hello"></router-view>
     
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
