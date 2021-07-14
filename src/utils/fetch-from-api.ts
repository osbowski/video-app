import axios from 'axios';
import { fetchedVideo } from '../types';

const fetchYtApi= async (videoId:{id:string, service:string|null})=>{

    let fetchedVideo:fetchedVideo;
    const {id, service} = videoId;

    if(service==='youtube'){
        const endpoint =
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}
        &fields=items(id,snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics`;
        try{
            const response = await axios.get(endpoint);
            const data = await response.data.items[0]
            console.log(data);
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
            const fetchedMovieData =await response.data;
            return fetchedMovieData;
        }catch(error){
            console.log('ERROR:',error)
        }
    }else{
       return 'WRONG URL'
    }
}

export default fetchYtApi