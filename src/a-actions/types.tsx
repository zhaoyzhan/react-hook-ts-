import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../a-constants';
import { VisibilityFilters } from '../a-types';
import { Dispatch } from 'redux';
import { message } from 'antd';

let nextTodoId = 0;

const says: string[] = ['hi', 'hello', '你好', '您好', 'hai']

export interface IAddTodoAction {
    id: number;
    text: string;
    type: ADD_TODO;
}

export interface IToggleTodoAction {
    id: number;
    type: TOGGLE_TODO;
}


export interface ISetVisibilityFilterAction {
    filter: VisibilityFilters;
    type: SET_VISIBILITY_FILTER;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction;

export const addTodo = (text: string): IAddTodoAction => ({
    id: nextTodoId++,
    text,
    type: ADD_TODO,
})

export const toggleTodo = (id: number): IToggleTodoAction => ({
    id,
    type: TOGGLE_TODO
})


export const setVisibilityFilter = (filter: string) => ({
    filter: filter || 'SHOW_ALL',
    type: SET_VISIBILITY_FILTER
})

export const testAsync = (v: string): any => (dispatch: Dispatch) => {
    message.loading('请稍后', 0)
    setTimeout(() => {
        const num: number = parseInt(String(5 * Math.random()))
        dispatch({
            type: 'TEST_actions',
            value: says[num]
        })
        message.destroy()
    }, 3000);
}


