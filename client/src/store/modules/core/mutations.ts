import { CoreState } from './state'

export const mutations = {
    setCore(state: CoreState, core: boolean) {
        state.core = core
    },
}
