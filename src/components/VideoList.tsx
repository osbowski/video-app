import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement"
import { fetchedVideo } from "../types";


const VideoList:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);
    return(
        <div className="video-list">
            <h1>Twoje filmy</h1>
            {videos.map((video:fetchedVideo)=>(
                <VideoListElement key={video.id} video={video} />
            ))}
        </div>
    )
}

export default VideoList;