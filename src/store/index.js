import { createStore,applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import {cartItem} from '../reducers/cartItem';
import reducer from '../reducers';

export default store = createStore(
	reducer,
	compose(
		applyMiddleware(ReduxThunk),
	)
)