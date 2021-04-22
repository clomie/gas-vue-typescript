export interface SettingsState {
    someState: boolean
}

export const state = (): SettingsState => ({
    someState: false,
})
