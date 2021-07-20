import React, { useState, useContext} from "react";
import getVideoId from "get-video-id";
import fetchVideoData from "../utils/fetch-from-api";
import isURL from 'validator/lib/isURL';
import { identifyVideoById } from '../utils/identify-video-by-id'
import { GlobalContext } from "../context/GlobalState";
import { addVideo } from '../store/action-creators/addVideo';

interface videoIdInterface{
    id:string;
    service:string| null;
}


const AddNewVideo:React.FC = ()=>{
    const [videoInfo,setVideoInfo] = useState<videoIdInterface>({id:'',service:null});
    const [inputValue, setInputValue] =useState('');
    const {dispatch} = useContext(GlobalContext);


    const checkVideoID =async (value:string)=>{
        const checkIfURL = isURL(value);
        if(checkIfURL){
            const {id, service} = getVideoId(value)
            setVideoInfo({id:id!,service:service})
            
        }else{
            const data = await identifyVideoById(value);
            if(data){
                const {id, service} = data;
                setVideoInfo({id:id!,service});
            }
            
        }
    }
    const onSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchVideoData(videoInfo)
        if(data){
            dispatch(addVideo(data))
        }
        setInputValue('');
    }

   

    return(
        <div>
            <h3>Add new video to list.</h3>
        <form onSubmit={onSubmit}>
            <input type="text" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value);
                checkVideoID(e.target.value)
                }} />
            <button type='submit'>Add video</button>

        </form>
        </div>
    )
    }

export default AddNewVideo;