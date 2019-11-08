<template>
  <div id="container">    
    <meta name= "viewport" content= "width=device-width, initial-scale=1">
    <BlogPostsComponent message="Danh sách các BlogPosts"/>
  </div>
</template>

<script>
import BlogPostsComponent from './components/BlogPostsComponent'
/**
 * Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    BlogPostsComponent,
  }
}
</script>

<style>

</style>
