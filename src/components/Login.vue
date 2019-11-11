<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <h5 class="text-center">Login to your account</h5>
        <div class="form-group">
          <input type="text" id="inputEmail"                 
                 name="email"
                 v-model="email"
                 v-validate="'required|email'"
                 :class="{'form-control':true,
                          'border-danger': errors.has('email')}"
                 placeholder="Email address" autofocus
                 >
          <span v-show="errors.has('email')" class="text-danger">
            {{errors.first('email')}}
          </span>
        </div>

        <div class="form-group">
          <input type="password"                                  
                 name="password"
                 v-model="password"
                 v-validate="'required'"
                 :class="{'form-control':true,
                          'border-danger': errors.has('password')}"
                 placeholder="Password"
                 >
          <span v-show="errors.has('password')" class="text-danger">
            {{errors.first('password')}}
          </span>                 
        </div>
        <!-- checkbox ? -->
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input"
                 id="customCheck1">
          <label class="custom-control-label"
                 for="customCheck1">Remember password</label>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block text-uppercase"
            @click="login">
            Login
        </button>
        <button type="button" class="btn btn-google btn-lg btn-block text-uppercase"
            @click="loginGoogle">
            <i class="fab fa-google mr-2"></i>
            Sign in with google
        </button>  
        <button type="button" class="btn btn-facebook btn-lg btn-block text-uppercase"
            @click="loginFacebook">
            <i class="fab fa-facebook-f mr-2"></i>
            Sign in with facebook
        </button> 
        <h5 class="text-center mx-auto mt-1">OR</h5>
        <Register></Register>        
      </div>
    </div>
  </div>
</template>

<script>
import Register from './Register.vue'
export default {
  name: 'Login',
  components: {
    Register
  },
  props: {
    
  },

  data() {
    return {

    }
  },
  methods: {
    async login() {
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
      alert(`Bạn bấm đăng nhập. Email: ${this.email}, password: ${this.password}`)
    },

    async loginFacebook() {
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
      alert('Bạn bấm đăng nhập Facebook')
    },

    async loginGoogle() {
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
      alert('Bạn bấm đăng nhập Google')
    }
  }
}
</script>

<!--"scoped": Chỉ có tác dụng trong file.vue này -->
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
