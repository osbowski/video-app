import React, { useState } from "react";
import getVideoId from "get-video-id";
import fetchYtApi from "../utils/fetch-from-api";
import isURL from 'validator/lib/isURL';
<<<<<<< HEAD
import { identifyVideoById } from '../utils/identify-video-by-id'
=======
>>>>>>> parent of 1b1f99e... 'idenfiy-video-by-id-to-CLEAN'

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
<<<<<<< HEAD
            const data = await identifyVideoById(value);
            console.log("DATA:",data);
=======
            setVideoInfo({id:value, service:null})
>>>>>>> parent of 1b1f99e... 'idenfiy-video-by-id-to-CLEAN'
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