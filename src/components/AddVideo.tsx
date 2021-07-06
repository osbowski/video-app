import React, { useState } from "react";
import fetchYtApi from "../fetch-yt-api";

const AddVideo:React.FC = ()=>{
    const [link,setLink] = useState('');
    
    

    const onSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        const data = await fetchYtApi(link)
        console.log('Log from submit',data)
    }

    return(
        <div>
            <h3>Dodaj nowy film do listy</h3>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e)=>setLink(e.target.value)} />
            <button type='submit'>Dodaj</button>

        </form>
        </div>
    )
}

export default AddVideo;