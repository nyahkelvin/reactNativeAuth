import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from '../actions/types/types'

INITIAL_STATE = {
    isLoading: false,
    error: null,
    user: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_START: {
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        }
        case LOGIN_USER_SUCCESS: {
            return { ...state, ...INITIAL_STATE, user: action.payload }
        }
        case LOGIN_USER_FAIL: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default:
            return state
    }
}