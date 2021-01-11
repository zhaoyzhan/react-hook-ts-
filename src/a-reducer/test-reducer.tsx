
import { actionTestT } from '../a-actions/test'

const initState = {
	title: 'default',
	acFlag: false
};

const actDefault = (state: any) => state;

const setTest = (state: any, action: any) => {
    return Object.assign({}, state, {});
}

const reducerFn = (state = initState, action: actionTestT) => {
	switch (action.type) {
    case 'test':
			return setTest(state, action);
		case 'TEST_actions':
			return {
				...state,
				title: action.value,
				acFlag: false
			};
		case 'TEST_flag':
			return {
				...state,
				acFlag: action.value
			}
		default:
			return actDefault(state);
	}
};

export default reducerFn;