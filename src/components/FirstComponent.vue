<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    message: String
  }
}
</script>

<!--"scoped": Chỉ có tác dụng trong file.vue này -->
<style scoped>
 h1 {
   color: orange;
 }
</style>
