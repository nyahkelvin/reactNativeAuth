import {
    INPUT_CHANGED,
    EMMPLOYEE_SAVE
} from './types/types'


export const createEmployee = ({ name, phone }) => {
    return {
        type: EMMPLOYEE_SAVE,
        payload: { name, phone }
    }
}