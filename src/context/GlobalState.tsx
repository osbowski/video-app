import { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '../storage/getFromStorage';

import { initialState } from './initialState';

const state = {...localStorage};
console.log(state);

export const GlobalContext = createContext(initialState);

export const GlobalProvider:React.FC = ({children})=>{
    // const [videos,setVideos] = useState(()=>getLocalStorage(state,initialState))

    // useEffect(() => {
    //     setLolcalStorageState(state)
    // }, [videos])
    return(
        <GlobalContext.Provider value={initialState}>
            {children}
        </GlobalContext.Provider>
    )
}