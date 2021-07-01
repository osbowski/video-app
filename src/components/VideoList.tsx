import VideoListElement from "./VideoListElement"

const VideoList:React.FC = ()=>{
    return(
        <div className="video-list">
            <h1>Twoje filmy</h1>
            <VideoListElement />
        </div>
    )
}

export default VideoList;