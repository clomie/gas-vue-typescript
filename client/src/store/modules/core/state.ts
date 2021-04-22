export interface CoreState {
    core: boolean
}

export const state = (): CoreState => ({
    core: true,
})
