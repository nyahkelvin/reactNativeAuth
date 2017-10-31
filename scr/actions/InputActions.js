import { INPUT_CHANGED } from './types/types'

export const inputChanged = ({ prop, value }) => {
    return {
        type: INPUT_CHANGED,
        payload: { prop, value }
    }
}