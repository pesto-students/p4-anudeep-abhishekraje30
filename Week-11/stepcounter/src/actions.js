export const ADD_STEP = 'ADD_STEP'
export const RESET_STEP = 'RESET_STEP'

export const addStep = () => {
    return {
        type: ADD_STEP
    }
};

export const resetStep = () => {
    return {
        type: RESET_STEP
    }
};