import { FLIP_LIGHT } from "./actions"
const initialState = {
    isLightOn: true
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FLIP_LIGHT: return {
            ...state,
            isLightOn: !state.isLightOn
        }
        default: return state
    }
}