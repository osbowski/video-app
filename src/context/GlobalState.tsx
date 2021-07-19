import { createContext,useEffect, useState} from 'react';
import { getFromStorage } from '../storage/getFromStorage';
import { initialState } from './initialState';

// const state = getFromStorage('videos',initialState);

export const GlobalContext = createContext(initialState);


export const GlobalProvider:React.FC = ({children})=>{
    const [state, setState] = useState([]);

    useEffect(() => {
        setState(getFromStorage('videos',initialState))
        console.log('Set state!',state)
    }, [])

return(
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}