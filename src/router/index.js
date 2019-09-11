import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/Login.vue'
import RecoverPassword from '../view/RecoverPassword.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
    {
      path: '/recover_password',
      name: 'RecoverPassword',
      component: RecoverPassword
    },
  ]
})

