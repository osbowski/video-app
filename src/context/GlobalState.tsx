import { createContext } from 'react';

import { initialState } from './initialState';


export const GlobalContext = createContext(initialState);

export const GlobalProvider:React.FC = ({children})=>{
    return(
        <GlobalContext.Provider value={initialState}>
            {children}
        </GlobalContext.Provider>
    )
}