import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

Vue.config.productionTip = false


import('./router/index.js').then(module => {
  const router = module.default
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
