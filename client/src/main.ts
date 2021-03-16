import Vue from 'vue'
import vuetify from './plugins/vuetify'
import gasPlugin from './plugins/gas'
import App from './App.vue'
import Loading from './Loading.vue'
import router from './router'
import { syncRouterWithGas } from './router-gas-sync'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: (h) => h(Loading),
}).$mount('#loading')

syncRouterWithGas(router)
;(async () => {
  await gasPlugin(process.env.VUE_APP_PICKER_DEVELOPER_KEY || '')

  new Vue({
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app')
})()
