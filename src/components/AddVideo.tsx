import React, { useState } from "react";
import getVideoId from "get-video-id";
import fetchYtApi from "../fetch-yt-api";
import isURL from 'validator/lib/isURL';

const AddVideo:React.FC = ()=>{
    const [videoID,setVideoID] = useState('');
    
    

    const onSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchYtApi(videoID)
        console.log('Log from submit',data)
    }

    const checkVideoID =(value:string)=>{
        const checkIfURL = isURL(value);
        if(checkIfURL){
            const {id, service} = getVideoId(value)
            console.log(service)
            setVideoID(id!)
        }else{
            setVideoID(value)
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