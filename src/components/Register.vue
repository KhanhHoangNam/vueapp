<template>
    <div>
        <div class="form-group">
            <input type="text"
                v-model="fullName"
                name="fullName"
                v-validate="'required'"
                :class="{'form-control':true,
                            'border-danger': errors.has('fullName')}"
                    placeholder="Enter your full name" autofocus>
            <span v-show="errors.has('fullName')" class="text-danger">        
                {{errors.first('fullName')}}
            </span>
        </div>

        <div class="form-group">
          <input type="text"                 
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
                 ref="password"
                 >
          <span v-show="errors.has('password')" class="text-danger">
            {{errors.first('password')}}
          </span>                 
        </div>

        <div class="form-group">
          <input type="password"                                  
                 name="retypePassword"                 
                 v-validate="'required|confirmed:password'"
                 :class="{'form-control':true,
                          'border-danger': errors.has('retypePassword')}"
                 placeholder="Type password again"
                 data-vv-as="password"
                 >
          <span v-show="errors.has('retypePassword')" class="text-danger">
            {{errors.first('retypePassword')}}
          </span>                          
        </div>
        <button type="button" class="btn btn-lg btn-success btn-block text-uppercase"
                  @click="createAccount">
                  Create account
         </button>          
    </div>
    
</template>

<script>
export default {
    name: 'Register',
    props: {},
    data() {
        return {
            fullName: "",
            email: "",
            password: "",
            retypePassword: "",
        }
    },
    methods: {
        async createAccount() {
            let reseult = await this.$validator.validateAll()
            if(!reseult) {
                return
            }
            alert(`Gửi thông tin API tới Nodejs Server`)
        }
    }
}
</script>

<style scoped>

</style>