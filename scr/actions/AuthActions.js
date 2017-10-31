import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from './types/types'


export const loginUser = ({ email, password }) => {
    return (dispatch) => {

        dispatch({ type: LOGIN_USER_START })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFailure(dispatch))
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })

    Actions.main()
}

const loginUserFailure = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: 'Athentication Failed'
    })
}