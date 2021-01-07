import {
	createStore,
	applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';

import RootReducer from '../a-reducer/index';

const store: any = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;