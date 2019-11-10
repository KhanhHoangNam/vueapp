<template>
  <div id="container">    
    <meta name= "viewport" content= "width=device-width, initial-scale=1">
    <link rel="stylesheet"  
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.css"        
    crossorigin="anonymous">        
    <Login/>
  </div>
</template>

<script>
// import BlogPostsComponent from './components/BlogPostsComponent'
import Login from './components/Login'
/**
 * Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    // BlogPostsComponent,
    Login
  }
}
</script>

<style scoped>
.btn-google {
  color: white;
  background-color: #ea4335;
}
.btn-facebook {
  color: white;
  background-color: #3b5998;
}
</style>
