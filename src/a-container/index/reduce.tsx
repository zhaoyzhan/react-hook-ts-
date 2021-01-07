import React, { createContext, useReducer } from 'react';

export const countText = createContext({})

export const types = {
    NAME: 'name',
    AGE: 'age'
}

export interface initT {
    name: string,
    age: number
}

export const initialState: initT = {
	name: '',
    age: 0
}


export const reducer = (state: initT, action: any) => {
    if(action.type) {
        
        return {
            ...state,
            [action.type]: action.value
        }
    } else {
        return state;
    }
}

export default (Main: any) => {
	return () => {
		const [state, dispatch] = useReducer(reducer, initialState)
        return (
            <countText.Provider value={{state, dispatch}}>
                <Main />
            </countText.Provider>
        )
	}
}