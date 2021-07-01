import VideoActions from "./VideoActions"
import VideoData from "./VideoData"

const VideoListElement:React.FC = ()=>{
    return(
        <div className="video-list-element">
            <VideoData />
            <h3>Video Title</h3>
            <div>Video</div>
            <VideoActions />
            
        </div>
    )
}

export default VideoListElement;