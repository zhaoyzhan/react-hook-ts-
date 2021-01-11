import { TodoAction } from '../a-actions/types';
import { ADD_TODO, TOGGLE_TODO } from '../a-constants';
import {todo} from '../a-types'

const initState: todo[] = []

const todos = (state: todo[] = initState, action: TodoAction) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo: any) =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
}
  
export default todos;
