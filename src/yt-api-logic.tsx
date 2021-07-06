import {useState,useEffect} from 'react';
import axios from 'axios';
import { YTmovieData } from './types';

const YTApiTest:React.FC = ()=>{



    const [movieData,setMovieData] = useState<YTmovieData>({
        id:'',
        snippet:{
            publishedAt:'',
            title:''
        },
        statistics:{
            likeCount:'',
            viewCount:''
        }
    });

    const getData = async ()=>{
        const videoId = 'vrc4vxQzVao';
        const endpoint =
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API}
        &fields=items(id,snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics`;

        
        try{
            const response = await axios.get(endpoint);
            const fetchedMovieData = await response.data.items[0]
            setMovieData(fetchedMovieData)
        }catch(error){
            console.log('ERROR:',error)
        }
    }

    
     useEffect(() => {
         getData()
     }, []);

     const {publishedAt, title} = movieData.snippet;
     const {viewCount,likeCount} = movieData.statistics;
     return(
         <div>
             <p>Title: {title}</p>
             <p>Date: {new Date(publishedAt).toString()}</p>
             <p>Views: {viewCount}</p>
             <p>Likes: {likeCount}</p>
            
         </div>
     )


}

export default YTApiTest;