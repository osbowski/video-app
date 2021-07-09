import React, { useState } from "react";
import getVideoId from "get-video-id";
import fetchYtApi from "../fetch-yt-api";
import isURL from 'validator/lib/isURL';

interface videoIdInterface{
    id:string;
    service:string| null;
}


const AddVideo:React.FC = ()=>{
    const [videoInfo,setVideoInfo] = useState<videoIdInterface>({id:'',service:null});
    
    

    const onSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchYtApi(videoInfo)
        console.log('ASYNC DATA:', data);
    }

    const checkVideoID =(value:string)=>{
        const checkIfURL = isURL(value);
        if(checkIfURL){
            const {id, service} = getVideoId(value)
            setVideoInfo({id:id!,service:service})
            
        }else{
            setVideoInfo({id:value, service:null})
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

export default AddVideo;