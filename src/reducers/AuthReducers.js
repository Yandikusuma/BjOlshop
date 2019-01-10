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
} from '../action/types'

const INITIAL_STATE = {
	errorLogin: '',
	errorCreating: '',
	errorLogout: '',
	success: false,
	loading: false,
	user: null
}


const auth = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case AUTH_LOGIN_USER:
			return {...state, ...INITIAL_STATE, loading: true, success: false, user: action.payload};
		case AUTH_LOGIN_USER_FAIL:
			return {...state, errorLogin: 'you email n password is not valid', loading: false};
		case AUTH_LOGIN_USER_SUCCESS:
			return {...state, loading: false, success: true, error: ''};
		case AUTH_CREATE_USER:
			return {...state, ...INITIAL_STATE, loading: true, success: false, user: action.payload};
		case AUTH_CREATE_USER_FAIL:
			return {...state, errorCreating: 'you email or password is wrong', loading: false};
		case AUTH_CREATE_USER_SUCCESS:
			return {...state, loading: false, success: true, error: ''};
		case AUTH_USER_LOGOUT:
		  alert('success logout')
			return {...state, ...INITIAL_STATE, loading: false, success: false,  user: action.payload}
		case AUTH_USER_LOGOUT_FAIL:
			return {...state, errorLogout: 'fail check you internet', loading: false}
		case AUTH_USER_LOGOUT_SUCCESS: 
		  return {...state, loading: false, success: false}
		default:
		  return state
	}
}

export default auth