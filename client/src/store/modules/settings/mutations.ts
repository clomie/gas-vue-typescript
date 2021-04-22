import { SettingsState } from './state'

export const mutations = {
    setSome: (state: SettingsState, payload: boolean) => {
        state.someState = payload
    },
}
