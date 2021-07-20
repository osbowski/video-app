import { fetchedVideo } from "../types";
import VideoActions from "./VideoActions"
import VideoData from "./VideoData"
import ReactPlayer from 'react-player';

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
            <p>Favorite: {video.favorite ? 'yes' : 'no'}</p>
            <ReactPlayer url={link} light={true} playing={true} controls={true} width={'100%'}/>
            <VideoActions video={video} />
            
        </div>
    )
}

export default VideoListElement;