<template>
  <div id="app">    
    <HelloWorld message="Đây là các bài học Vue.js"/>
    <FirstComponent message="This is First Component"/>
    <SecondComponent message="This is Second Component"/>
    <ThirdComponent message="This is Third Component"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWordComponent.vue'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
/**
 * Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    HelloWorld,
    FirstComponent,
    SecondComponent,
    ThirdComponent
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
