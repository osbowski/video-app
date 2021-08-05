import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { addToFavorites } from "../store/action-creators/addToFavorites";
import { removeFromFavorites } from "../store/action-creators/removeFromFavorites";
import { removeVideo } from "../store/action-creators/removeVideo";
import { fetchedVideo } from "../types";

import { Button, ButtonGroup } from "reactstrap";
import { FaPlay, FaThumbsUp, FaThumbsDown, FaTrashAlt } from "react-icons/fa";

interface VideoActionsProps {
  video: fetchedVideo;
  listLayout: boolean;
}

const VideoActions: React.FC<VideoActionsProps> = ({ video, listLayout }) => {
  const { id, favorite } = video;
  const { dispatch } = useContext(GlobalContext);
  const handleRemove = () => {
    dispatch(removeVideo(id));
  };

  const handleFavorite = () => {
    if(!favorite){
      dispatch(addToFavorites(video));
    }else{
      dispatch(removeFromFavorites(id))
    }
    
  };

  return (
    <ButtonGroup vertical={listLayout}>
      <Button
        className="bg-primary rounded-0"
        href={video.data.link}
      >
        <FaPlay />
      </Button>
      <Button
        className="bg-warning rounded-0"
        onClick={handleFavorite}
      >
        {favorite ? <FaThumbsDown /> : <FaThumbsUp />}
      </Button>
      <Button
        className="bg-danger rounded-0"
        onClick={handleRemove}
      >
        <FaTrashAlt />
      </Button>
    </ButtonGroup>
  );
};

export default VideoActions;
