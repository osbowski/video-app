import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement"

const VideoList:React.FC = ()=>{

    const { videos } = useContext(GlobalContext);
    return(
        <div className="video-list">
            <h1>Twoje filmy</h1>
            {videos.map(video=>(
                <VideoListElement key={video.id} data={video} />
            ))}
        </div>
    )
}

export default VideoList;