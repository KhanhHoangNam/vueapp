<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p1>{{this.currentDateTime}}</p1>
    <div v-if="isShow">Dòng này sẽ ẩn/hiển</div>
    <!-- v-if là 1 "directive" -->
    <!-- Nhập thông tin blog post mới, dùng thẻ input" -->
    <div>
      <input type="text" v-model="newBlogPost.title" placeholder="Tiêu đề Blog">
      <p>{{this.newBlogPost.title}}</p>
      <input type="text" v-model="newBlogPost.content" placeholder="Nội dung Blog">
      <p>{{this.newBlogPost.content}}</p>
      <button v-on:click="addBlogPost()">Add blogPost</button>
    </div>
    <!-- Đưa danh sách các blogPosts data vào 1 "list" -->
    <ol>
      <li v-for="blogPost in blogPosts" v-bind:key="blogPost.title">
        <p class="bold">{{blogPost.title}}</p>
        <p>{{blogPost.content}}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  props: {
    message: String
  },
  //Hàm data chứa các thuộc tính "private" của 1 Component
  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React!
      currentDateTime: `Thời gian hiện tại: ${new Date().toLocaleDateString()}`,
      //data có thể  là kiểu boolean
      isShow: false,
      //data là "mảng object"
      blogPosts: [
        {
          title: 'Học Vuejs để làm gì',
          content: 'Vue dùng để viết giao diện web phía Front-end, từ Vue có thể tương tác với server Nodejs(back-end)'
        },
        {
          title: 'React hay Vuejs giống nhau điểm gì',
          content: 'Cả 2 đều viết bằng Javascript, đều dùng để viết Web front-end '
        },
        {
          title: 'Tương tác giữa Vue và Nodejs',
          content: 'Vue gửi các Request lên Nodejs để CRUD dữ liệu trên server, qua axios hoặc fetch'
        }
      ],
      //Thêm mới BlogPost, cần data: "newBlogPost"
      newBlogPost: {title:'', content:''},
    }
  },
  //Các phương thức "private"
  methods: {
    addBlogPost() {
      this.blogPosts.push(this.newBlogPost)
      this.newBlogPost = {title:'', content:''}
    }
  }
}

</script>

<!--"scoped": Chỉ có tác dụng trong file.vue này -->
<style scoped>
 h1 {
   color: orange;
 }
p.bold {
  font-weight: bold;
}
</style>
