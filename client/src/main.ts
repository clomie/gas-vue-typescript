import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import gasPlugin from './plugins/gas'
import App from './App.vue'
import Loading from './Loading.vue'
import router from './router'
import { syncRouterWithGas } from './router-gas-sync'
import store from './store'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: (h) => h(Loading),
}).$mount('#loading')

syncRouterWithGas(router)
;(async () => {
    await gasPlugin(process.env.VUE_APP_PICKER_DEVELOPER_KEY || '')

    new Vue({
        store,
        router,
        vuetify,
        render: (h) => h(App),
    }).$mount('#app')
})()
