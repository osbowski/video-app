import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { addToFavorites } from '../store/action-creators/addToFavorites';
import { removeVideo } from '../store/action-creators/removeVideo';
import { fetchedVideo } from '../types';

interface VideoActionsProps{
    video:fetchedVideo;
}

const VideoActions:React.FC<VideoActionsProps> = ({video})=>{
    const {id, favorite} = video;
    const {dispatch} = useContext(GlobalContext);
    const handleRemove = ()=>{
        dispatch(removeVideo(id));
    }

    const handleFavorite = ()=>{
        dispatch(addToFavorites(id));
    }
    
    return(
        <div>
            <a href={video.data.link}>Watch</a>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleFavorite}>{favorite? 'Remove from favorites': 'Add to favorites'}</button>
        </div>
    )
}

export default VideoActions;