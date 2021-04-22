import { AgentState } from "./state"

export const getters = {
    getEmail: (state: AgentState) => {
        return state.email
    },
}
