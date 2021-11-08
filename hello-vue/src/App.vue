<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test masg="Welcome to Your Test.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tests from './components/Test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test:Tests
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
