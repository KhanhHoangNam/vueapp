import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import  VeeValidate from 'vee-validate';
Vue.use(VeeValidate)
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueSession from 'vue-session'
Vue.use(VueSession)
import router from '@/router/router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
