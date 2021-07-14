import axios from 'axios';
import { fetchedVideo } from '../types';

const fetchDataFromApi= async (videoId:{id:string, service:string|null})=>{

    let fetchedVideo:fetchedVideo;
    const {id, service} = videoId;

    if(service==='youtube'){
        const endpoint =
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}
        &fields=items(id,snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics`;
        try{
            const response = await axios.get(endpoint);
            const data = await response.data.items[0];
            fetchedVideo={
                id,
                service,
                data:{
                    title:data.snippet.title,
                    views:data.statistics.viewCount,
                    likes:data.statistics.likeCount,
                    publishedAt:data.snippet.publishedAt,
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
            const data =await response.data;
            fetchedVideo={
                id,
                service,
                data:{
                    title:data.name,
                    views:data.stats.plays,
                    likes:data.metadata.connections.likes.total,
                    publishedAt:data.created_time,
                    link:`https://www.youtube.com/watch?v=${id}`
                }
            }

            return fetchedVideo;
        }catch(error){
            console.log('ERROR:',error)
        }
    }else{
       return null;
    }
}

export default fetchDataFromApi;