<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <form class="col-lg-6">
      <div class="form-group">
        <label>Tiêu đề Blog</label>
        <input type="text" v-model="newBlogPost.title" class="form-control">
      </div>
      <div class="form-group">
        <label>Nội dung BlogPost</label>
        <textarea rows="5" type="text" v-model="newBlogPost.content" 
                  class="form-control"></textarea>
      </div>
      <div v-if="errors.length" class="alert alert-danger">
        <b >Lỗi không thêm được BlogPost:</b>
        <ul>
          <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
      </div>
      <button type="button" class="btn btn-success" 
              @click="addBlogPost">Add blogPost
      </button>
    </form>    
    <!-- v-if là 1 "directive" -->
    <!-- Nhập thông tin blog post mới, dùng thẻ input" -->     
      
    <!-- Đưa danh sách các blogPosts data vào 1 "list" -->
    <div>
      <ol class="col-lg-6">
        <li v-for="blogPost in blogPosts" v-bind:key="blogPost.title">
          <p class="font-weight-bold">{{blogPost.title}}</p>
          <p>{{blogPost.content}}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostsComponent',
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
      errors: []
    }
  },
  //Các phương thức "private"
  methods: {
    addBlogPost() {
      this.checkForm()
      if(this.errors.length > 0) {
        return
      }
      this.blogPosts.push(this.newBlogPost)
      this.newBlogPost = {title:'', content:''}
    },
      //Cần 1 hàm validate thông tin đầu vào
    checkForm() {
      this.errors = []
      if(!this.newBlogPost.title) {
        this.errors.push("Thiếu tiêu đề blogPost")
      }
      if(!this.newBlogPost.content) {
        this.errors.push("Thiếu nội dung blogPost")
      }
    },
  }  
}

</script>

<!--"scoped": Chỉ có tác dụng trong file.vue này -->
<style scoped>  
</style>
