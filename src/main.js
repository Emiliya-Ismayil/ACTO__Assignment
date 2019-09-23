import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  store,
}).$mount('#app')
