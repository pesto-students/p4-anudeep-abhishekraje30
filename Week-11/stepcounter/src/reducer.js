import { ADD_STEP, RESET_STEP } from "./actions"

const initialState = {
    steps: 0
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STEP: return {
            ...state,
            steps: state.steps + 1
        }
        case RESET_STEP: return {
            ...state,
            steps: 0
        }
        default: return state
    }
}