import { combineReducers } from 'redux';
import cartItem from './cartItem';
import auth from './AuthReducers';


export default combineReducers({
	cartItem: cartItem,
	auth: auth
})