import { videoData } from "../types";
import { ListGroup, ListGroupItem } from "reactstrap";

interface VideoDataProps {
  data: videoData;
}

const VideoData: React.FC<VideoDataProps> = ({ data }) => {
  const { likes, views, publishedAt } = data;
  return (
    <ListGroup flush className="video-data-container">
      <ListGroupItem className="bg-light">Views: {views}</ListGroupItem>
      <ListGroupItem className="bg-light">Likes: {likes}</ListGroupItem>
      <ListGroupItem className="bg-light">
        Published At: {new Date(publishedAt).toLocaleString().split(",")[0]}
      </ListGroupItem>
    </ListGroup>
  );
};

export default VideoData;
