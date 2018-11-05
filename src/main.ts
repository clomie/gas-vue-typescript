import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { syncRouterWithGas } from './router-gas-sync'

Vue.config.productionTip = false

syncRouterWithGas(router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
