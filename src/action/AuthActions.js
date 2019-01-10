import {
	AUTH_LOGIN_USER,
	AUTH_LOGIN_USER_FAIL,
	AUTH_LOGIN_USER_SUCCESS,
	AUTH_CREATE_USER,
	AUTH_CREATE_USER_FAIL,
	AUTH_CREATE_USER_SUCCESS,
	AUTH_USER_LOGOUT,
	AUTH_USER_LOGOUT_FAIL,
	AUTH_USER_LOGOUT_SUCCESS
} from './types'

import firebase from '../firebase/firebase';
import auth from '../reducers/AuthReducers'


export const createUser = (email, password) => {
	return dispatch => {
		dispatch({ type: AUTH_CREATE_USER });

		firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(user => createUserSucces(dispatch, user))
		.catch(() => createUserFail(dispatch))
	}
}

const createUserFail = dispatch => {
	dispatch({ type: AUTH_CREATE_USER_FAIL })
}

const createUserSucces = (dispatch, user) => {
	dispatch({
		type: AUTH_CREATE_USER_SUCCESS,
		payload: user
	})
	alert("success")
}

export const loginUser = (email, password) => {
	return dispatch => {
		dispatch({ type: AUTH_LOGIN_USER })
		firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => loginUserFail(dispatch))
	}
}


const loginUserFail = dispatch => {
	dispatch({ type: AUTH_LOGIN_USER_FAIL})
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: AUTH_LOGIN_USER_SUCCESS,
		payload: user
	})
	alert('success')
}

export const logoutUser = () => {
 return dispatch => {
	dispatch({ type: AUTH_USER_LOGOUT})
	
	firebase.auth().signOut().then(() => {
		console.log('salah bego')
	})
}
}