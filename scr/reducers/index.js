import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeReducer from './EmployeeReducer'
import InputReducer from './InputReducer'

export default combineReducers({
    auth: AuthReducer,
    emp: EmployeeReducer,
    input: InputReducer
})