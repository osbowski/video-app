import { Video } from "../types";
import VideoActions from "./VideoActions"
import VideoData from "./VideoData"

interface VideoListElementProps{
    data:Video;
}

const VideoListElement:React.FC<VideoListElementProps> = ({data})=>{
    const {link, title} = data;

    return(
        <div className="video-list-element">
            <VideoData data={data}/>
            <h3>{title}</h3>
            <div>{link}</div>
            <VideoActions />
            
        </div>
    )
}

export default VideoListElement;