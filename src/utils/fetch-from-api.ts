import axios from 'axios';
import { fetchedVideo } from '../types';

const fetchVideoData= async (videoId:{id:string, service:string|null})=>{

    let fetchedVideo:fetchedVideo;

    const {id, service} = videoId;

    if(service==='youtube'){
        const endpoint =
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}
        &fields=items(id,snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics`;
        try{
            const response = await axios.get(endpoint);
            const fetchedData = await response.data.items[0]
            const {title,publishedAt} = fetchedData.snippet;
            const {likeCount, viewCount} = fetchedData.statistics;
            fetchedVideo = {
                id,
                service,
                data:{
                    title,
                    publishedAt,
                    views:viewCount,
                    likes:likeCount,
                    link:`https://www.youtube.com/watch?v=${id}`
                }
            }
            return fetchedVideo;
        }catch(error){
            console.log('ERROR:',error)
        }
    }else if(service==='vimeo'){

        const endpoint =
        `https://api.vimeo.com/videos/${id}`;
        
        try{
            const response = await axios.get(endpoint,{
                headers:{
                    Authorization: `Bearer ${process.env.REACT_APP_VIMEO_TOKEN}`,
                }
            });
            const fetchedData =await response.data;
            fetchedVideo = {
                id,
                service,
                data:{
                    title:fetchedData.name,
                    publishedAt:fetchedData.created_time,
                    views:fetchedData.stats.plays,
                    likes:fetchedData.metadata.connections.likes.total,
                    link:fetchedData.link
                }
            }
            return fetchedVideo;
        }catch(error){
            console.log('ERROR:',error)
        }
    }else{
       return 'WRONG URL'
    }
}

export default fetchVideoData;