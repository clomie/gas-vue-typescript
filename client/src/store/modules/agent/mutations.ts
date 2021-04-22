import { AgentState } from './state'

export const mutations = {
    setEmail(state: AgentState, email: string) {
        state.email = email
    },
}
