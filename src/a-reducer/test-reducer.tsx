
const initState = {
	title: 'default'
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state: any) => state;

const setTest = (state: any, action: any) => {
    return Object.assign({}, state, {});
}

const reducerFn = (state = initState, action: { type: string, value: any }) => {
	switch (action.type) {
    case 'test':
			return setTest(state, action);
		case 'TEST_actions':
			return {
				...state,
				title: action.value
			};
		default:
			return actDefault(state);
	}
};

export default reducerFn;