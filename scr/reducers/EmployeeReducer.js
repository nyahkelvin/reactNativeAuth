import {
    EMMPLOYEE_SAVE
} from '../actions/types/types'

const INITIAL_STATE = {
    employee: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMMPLOYEE_SAVE: {
            return { ...state, employee: action.payload }
        }
        default:
            return state

    }
}