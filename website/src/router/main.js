import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //引入导出的router
  router
}).$mount('#app')
