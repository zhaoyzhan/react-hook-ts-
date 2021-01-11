import { Dispatch } from 'redux';
// import { message } from 'antd';

export interface TestActionTF {
    type: string,
    value: boolean
}

export type actionTestT = TestActionTF | StringObject

const says: string[] = ['hi', 'hello', '你好', '您好', 'hai']

// let testF : boolean = false;
export const testAsync = (): AnyAction => (dispatch: Dispatch): void => {
    // if(testF) return;
    // message.loading('请稍后', 0)
    // testF = true;
    dispatch(testT('TEST_flag', true))
    setTimeout(() => {
        const num: number = parseInt(String(5 * Math.random()))
        dispatch(testT('TEST_actions', says[num]))
        // message.destroy()
        // testF = false;
    }, 3000);
}

export const testT = (type: string, value: any): actionTestT => ({
    type,
    value
})
