import React, { useState } from "react";
import getVideoId from "get-video-id";
import fetchYtApi from "../fetch-yt-api";

const AddVideo:React.FC = ()=>{
    const [videoID,setVideoID] = useState('');
    
    

    const onSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchYtApi(videoID)
        console.log('Log from submit',data)
    }

    const getVideoID =(value:string)=>{
        const {id} = getVideoId(value)
        console.log(id)
        setVideoID(id!)
    }

    return(
        <div>
            <h3>Dodaj nowy film do listy</h3>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e)=>getVideoID(e.target.value)} />
            <button type='submit'>Dodaj</button>

        </form>
        </div>
    )
}

export default AddVideo;