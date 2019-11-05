<template>
  <div id="app">    
    <HelloWorld msg="Đây là các bài học Vue.js"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWordComponent.vue'
/**
 * Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    HelloWorld
  }
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
