import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { addToFavorites } from "../store/action-creators/addToFavorites";
import { removeVideo } from "../store/action-creators/removeVideo";
import { fetchedVideo } from "../types";

import { Button } from "reactstrap";

interface VideoActionsProps {
  video: fetchedVideo;
}

const VideoActions: React.FC<VideoActionsProps> = ({ video }) => {
  const { id, favorite } = video;
  const { dispatch } = useContext(GlobalContext);
  const handleRemove = () => {
    dispatch(removeVideo(id));
  };

  const handleFavorite = () => {
    dispatch(addToFavorites(id));
  };

  return (
    <div>
      <Button className="bg-primary rounded-0" href={video.data.link}>
        Watch
      </Button>
      <Button className="mx-2 bg-danger rounded-0" onClick={handleRemove}>
        Remove
      </Button>
      <Button className="bg-warning rounded-0" onClick={handleFavorite}>
        {favorite ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </div>
  );
};

export default VideoActions;
