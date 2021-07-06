import axios from 'axios';

const fetchYtApi= async (videoId:string)=>{
    // const endpoint =
    // `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API}
    // &fields=items(id,snippet(title,publishedAt),statistics(viewCount,likeCount))&part=snippet,statistics`;
    const endpoint =
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API}
    &part=snippet,statistics`;
   
    try{
        const response = await axios.get(endpoint);
        const fetchedMovieData = await response.data.items[0]
        return fetchedMovieData;
    }catch(error){
        console.log('ERROR:',error)
    }
}

export default fetchYtApi