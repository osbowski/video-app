import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { removeVideo } from '../store/action-creators/removeVideo';

interface VideoActionsProps{
    id:string;
}

const VideoActions:React.FC<VideoActionsProps> = ({id})=>{
    const {dispatch} = useContext(GlobalContext);
    const handleRemove = ()=>{
        dispatch(removeVideo(id))
    }
    return(
        <div>
            <button>Watch</button>
            <button onClick={handleRemove}>Remove</button>
            <button>Add to favorites</button>
        </div>
    )
}

export default VideoActions;