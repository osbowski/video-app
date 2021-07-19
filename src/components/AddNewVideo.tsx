import React, { useState, useContext} from "react";
import getVideoId from "get-video-id";
import fetchVideoData from "../utils/fetch-from-api";
import isURL from 'validator/lib/isURL';
import { identifyVideoById } from '../utils/identify-video-by-id'
import { GlobalContext } from "../context/GlobalState";

interface videoIdInterface{
    id:string;
    service:string| null;
}


const AddNewVideo:React.FC = ()=>{
    const [videoInfo,setVideoInfo] = useState<videoIdInterface>({id:'',service:null});
    // const [videos, setVideos] = useState<fetchedVideo[]>([])
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
            dispatch({type:"ADD_VIDEO", payload:data})
            return data;

        }
    }

   

    return(
        <div>
            <h3>Dodaj nowy film do listy</h3>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e)=>checkVideoID(e.target.value)} />
            <button type='submit'>Dodaj</button>

        </form>
        </div>
    )
    }

export default AddNewVideo;