import {
    INPUT_CHANGED,
    EMMPLOYEE_SAVE
} from '../actions/types/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_CHANGED: {
            return { ...state, [action.payload.prop]: action.payload.value }
        }
        default:
            return state
    }
}