
import { initT, types } from './types';
export const reducer = (state: initT, action: any) => {
    switch (action.type) {
        case types.NAME: 
            return {
                ...state,
                name: action.value
            }
        default:
            throw new Error();
    }
}