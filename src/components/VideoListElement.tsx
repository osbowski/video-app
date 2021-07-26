import { useState } from "react";
import { fetchedVideo } from "../types";
import VideoActions from "./VideoActions";
import VideoData from "./VideoData";
import ReactPlayer from "react-player";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardImg,
  Modal,
  ModalBody,
  Col,
} from "reactstrap";
import { BsFillStarFill } from "react-icons/bs";

interface VideoListElementProps {
  video: fetchedVideo;
}

const VideoListElement: React.FC<VideoListElementProps> = ({ video }) => {
  const { link, title } = video.data;

  const [modal, setModal] = useState(false);


  const toggleModal = () => setModal(!modal);

  return (
    <Col sm="4">
      <Card
        className={`mb-3 rounded-0 "bg-light"`}
      >
          <div className="fav-icon-container">
          {video.favorite && <BsFillStarFill size={'1.5em'} className='fav-icon text-warning mb-1' />}
          </div>
        <CardImg
          className="video-thumbnail rounded-0"
          src={video.data.thumbnail}
          alt=""
          onClick={toggleModal}
        />
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalBody>
            <ReactPlayer
              url={link}
              playing={true}
              controls={true}
              width={"100%"}
            />
          </ModalBody>
        </Modal>
        <CardBody tag="h6" className="px-4 mt-4">
          <CardTitle className="video-title pb-1">
            {title}
          </CardTitle>
          <VideoData data={video.data} />
        </CardBody>
        <CardSubtitle className="pb-4 text-center">
          <VideoActions video={video} />
        </CardSubtitle>
      </Card>
    </Col>
  );
};

export default VideoListElement;
