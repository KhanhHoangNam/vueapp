<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWord',
  props: {
    msg: String
  }
}
</script>

<!--"scoped": Chỉ có tác dụng trong file.vue này -->
<style scoped>
 h1 {
   color: red;
 }
</style>
