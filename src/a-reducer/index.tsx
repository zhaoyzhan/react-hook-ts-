import {
	combineReducers
}
from 'redux';

import roote from './root-reducer';
import test from './test-reducer';
import typesType from './types-reducer';
import todos from './todo-reducer';
import newTest from './new-reducer';

const RootReducer = combineReducers({
	roote,
	test,
	typesType,
	todos,
	newTest
});

export default RootReducer;