import { Video } from "../types";

interface VideoDataProps{
    data:Video;
}

const VideoData:React.FC<VideoDataProps> = ({data})=>{
    const {likes, views, date} = data;
    return(
        <div className="video-data-container">
            <p>Odtworzenia: {views}</p>
            <p>Polubienia: {likes}</p>
            <p>Data dodania: {date}</p>
        </div>
    )
}

export default VideoData;