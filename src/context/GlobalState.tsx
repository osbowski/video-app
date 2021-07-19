import { createContext, useReducer, useEffect} from 'react';
import { getFromStorage } from '../store/localStorage/getFromStorage';
import VideoReducer from '../store/reducers/videoReducer';
import { initialState } from './initialState';

const state = getFromStorage('videos',initialState);
export const GlobalContext = createContext(state);  

export const GlobalProvider:React.FC = ({children})=>{
    const [videos,dispatch] = useReducer(VideoReducer,state);

    useEffect(() => {
        getFromStorage('videos',videos)
    }, [videos])

return(
        <GlobalContext.Provider value={{videos,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

