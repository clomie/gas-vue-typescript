import { CoreState } from './state'

export const getters = {
    getCore: (state: CoreState) => {
        return state.core
    },
}
