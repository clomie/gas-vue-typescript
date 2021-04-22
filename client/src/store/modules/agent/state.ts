export interface AgentState {
    email: string
    isAdmin: boolean
}

export const state = () => ({
    email: '',
    isAdmin: false,
})
