import Vue from 'vue'
import Vuex from 'vuex'
import agent from './modules/agent'
import settings from './modules/settings'
import createLogger from './../helpers/logger'
import { state } from './modules/core/state'
import { getters } from './modules/core/getters'
import { mutations } from './modules/core/mutations'
import { actions } from './modules/core/actions'

Vue.use(Vuex)

// https://vuex.vuejs.org/guide/

const debug = true //process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        agent,
        settings,
    },
    state,
    getters,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})
