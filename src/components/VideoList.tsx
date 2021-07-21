import { useContext, useState } from "react";


import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement"
import { fetchedVideo } from "../types";


const VideoList:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);



    return(
        <div className='d-flex flex-column align-items-center'>
            <h1>Your videos</h1>
            {videos.map((video:fetchedVideo)=>(
                <VideoListElement key={video.id} video={video} />
            ))}
        </div>
    )
}

export default VideoList;