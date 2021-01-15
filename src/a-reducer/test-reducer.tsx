
import { actionTestT } from '../a-actions/test'
import { actionT } from '../a-actions/check'

const initState = {
	title: 'default',
	acFlag: false
};

const actDefault = (state: any) => state;

const setTest = (state: any, action: any) => {
    return Object.assign({}, state, {});
}

const reducerFn = (state = initState, { type, value }: actionTestT | actionT) => {
	switch (type) {
    case 'test':
			return setTest(state, { type, value });
		case 'TEST_actions':
			return {
				...state,
				title: value,
				acFlag: false
			};
		case 'TEST_flag':
			return {
				...state,
				acFlag: value
			}
		case 'kkkkk':
			console.log(value, 'kkkkk')
			return actDefault(state);
		case 'check_one':
			console.log(value, 'check_one')
			return actDefault(state);
		default:
			return actDefault(state);
	}
};

export default reducerFn;