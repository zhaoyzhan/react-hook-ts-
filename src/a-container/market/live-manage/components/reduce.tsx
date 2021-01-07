import React, { createContext, useReducer } from 'react';

export const countText = createContext({})

export const types = {
    NAME: 'NAME',
    SETNAME: 'SETNAME'
}

export interface initT {
    name: string,
    setName: string
}

export const initialState: initT = {
	name: '',
    setName: ''
}


export const reducer = (state: initT, action: any) => {
    switch (action.type) {
        case types.NAME: 
            return {
                ...state,
                name: action.value
            }
        case types.SETNAME: 
            return {
                ...state,
                setName: action.value
            }
        default:
            throw new Error();
    }
}

export const StepState = ({children}: {children: any}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <countText.Provider value={{state, dispatch}}>
            {children}
        </countText.Provider>
    )
}