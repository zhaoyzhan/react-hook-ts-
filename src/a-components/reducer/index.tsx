import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './state';

export const countText = createContext({})

export const reduceState = (Component: any) =>  (() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <countText.Provider value={{state, dispatch}}>
            <Component />
        </countText.Provider>
    )
})
