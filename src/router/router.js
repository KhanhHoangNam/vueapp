import Login from '@/components/Login'
import Home from '@/components/Home'
import VueRouter from 'vue-router'
const routes = [
    { path: '/Login', component: Login},
    { path: '/', component: Home}
]
export default new VueRouter({routes})