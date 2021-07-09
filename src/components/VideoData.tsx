import { videoData } from "../types";

interface VideoDataProps{
    data:videoData;
}

const VideoData:React.FC<VideoDataProps> = ({data})=>{
    const {likes, views, publishedAt} = data;
    return(
        <div className="video-data-container">
            <p>Odtworzenia: {views}</p>
            <p>Polubienia: {likes}</p>
            <p>Data dodania: {publishedAt}</p>
        </div>
    )
}

export default VideoData;