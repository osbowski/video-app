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
            <p>Published At: {new Date(publishedAt).toLocaleString().split(',')[0]}</p>
        </div>
    )
}

export default VideoData;