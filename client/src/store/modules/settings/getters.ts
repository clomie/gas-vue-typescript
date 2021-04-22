import { SettingsState } from './state'

export const getters = {
    getSome: (state: SettingsState) => {
        return state.someState
    },
}
