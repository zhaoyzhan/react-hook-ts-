
const initState = {};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state: any) => state;

const setTest = (state: any, action: any) => {
    console.log(state, 'lkjhg', action)
    return Object.assign({}, state, {});
}

const reducerFn = (state = initState, action: any) => {
	switch (action.type) {
        case 'test':
			return setTest(state, action);
		default:
			return actDefault(state);
	}
};

export default reducerFn;