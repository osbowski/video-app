import { fetchedVideo } from "../types";
import VideoActions from "./VideoActions"
import VideoData from "./VideoData"
import ReactPlayer from 'react-player';
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

interface VideoListElementProps{
    video:fetchedVideo;
}

const VideoListElement:React.FC<VideoListElementProps> = ({video})=>{
    const {link, title} = video.data;
    return(
        <Card className={`w-75 my-5 rounded-0 ${video.favorite ? 'bg-warning' : 'bg-light' }`}>
            <CardTitle tag='h5' className='text-center py-3 mb-0'>{title}</CardTitle>
            <ReactPlayer url={link} light={true} playing={true} controls={true} width={'100%'}/>
            <CardBody tag='h6' className='px-4 mt-4'>
                <VideoData data={video.data} />
            </CardBody>
            <CardSubtitle className='pb-4 text-center'>
                    <VideoActions video={video}/>
            </CardSubtitle>
        </Card>
    )
}

export default VideoListElement;