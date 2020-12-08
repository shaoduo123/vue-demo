<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyBottom></MyBottom>
    <router-view/>
  </div>
</template>

<script>
  //App.vue 其实就是一个vue对象
 // export default  暴露出当前的vue对象
export default {  // 暴露出默认的vue 对象
  name: 'App',
  data () {
    return {
      msg: 'Welecome to yourt vue.js app'
  }
  },
  methods:{} ,
  computed:{} ,
  watch:{}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
