import { fetchedVideo } from "../types";
import VideoActions from "./VideoActions"
import VideoData from "./VideoData"

interface VideoListElementProps{
    video:fetchedVideo;
}

const VideoListElement:React.FC<VideoListElementProps> = ({video})=>{
    const {link, title} = video.data;
    return(
        <div className="video-list-element">
            <VideoData data={video.data}/>
            <h3>{title}</h3>
            <p>{video.service}</p>
            <div>{link}</div>
            <VideoActions id={video.id} />
            
        </div>
    )
}

export default VideoListElement;