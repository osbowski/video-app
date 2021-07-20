import { videoData } from "../types";

interface VideoDataProps{
    data:videoData;
}

const VideoData:React.FC<VideoDataProps> = ({data})=>{
    const {likes, views, publishedAt} = data;
    return(
        <div className="video-data-container">
            <p>Views: {views}</p>
            <p>Likes: {likes}</p>
            <p>Published At: {publishedAt}</p>
        </div>
    )
}

export default VideoData;