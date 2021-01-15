import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from '../a-constants';
import { VisibilityFilters } from '../a-types';

let nextTodoId = 0;

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

// export const addTodo = (text: string): any => (dispatch: Dispatch, getState: any): void => {
//     dispatch({
//         id: nextTodoId++,
//         text,
//         type: ADD_TODO
//     })
// }

export const toggleTodo = (id: number): IToggleTodoAction => ({
    id,
    type: TOGGLE_TODO
})

// export const toggleTodo = (id: number): any => (dispatch: Dispatch, getState: any): void => {

//     dispatch({
//         id,
//         type: TOGGLE_TODO
//     })
// }


export const setVisibilityFilter = (filter: string) => ({
    filter: filter || 'SHOW_ALL',
    type: SET_VISIBILITY_FILTER
})



