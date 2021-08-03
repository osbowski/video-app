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
  Row,
} from "reactstrap";
import { BsFillStarFill} from "react-icons/bs";

interface VideoListElementProps {
  video: fetchedVideo;
  listLayout: boolean;
  favsOnly:boolean;
}

const VideoListElement: React.FC<VideoListElementProps> = ({
  video,
  listLayout,
}) => {
  const { link, title } = video.data;

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      {listLayout ? (
        <Card body className="mb-3 rounded-0 bg-light">
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
          <Row>
            <Col>
              <CardTitle tag="h6" className="video-title pb-1">
                {title}
              </CardTitle>
            </Col>
            <Col xs="2" >
              <div className="fav-icon-container">
                {video.favorite && (
                  <BsFillStarFill
                    size={"1.5em"}
                    className="fav-icon text-warning mb-1"
                  />
                )}
              </div>
            </Col>
          </Row>
          <CardBody className="d-flex align-items-center">
            <Col xs='5' md='3' lg='2'>
              <CardImg
                className="video-thumbnail rounded-0"
                src={video.data.thumbnail}
                alt=""
                onClick={toggleModal}
              />
            </Col>
            <Col xs='5' md='7' lg='8' >
              <VideoData data={video.data} />
            </Col>

            <Col className='text-center'>
            <VideoActions video={video} listLayout={listLayout} />
            </Col>
          </CardBody>
          
        </Card>
      ) : (
        <Col lg="4" md="6" sm="12">
          <Card body className={`mb-3 rounded-0 bg-light`}>
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
              <div className="fav-icon-container">
                {video.favorite && (
                  <BsFillStarFill
                    size={"1.5em"}
                    className="fav-icon text-warning mb-1"
                  />
                )}
              </div>
              <CardTitle className="video-title pb-1">{title}</CardTitle>
              <VideoData data={video.data} />
            </CardBody>
            <CardSubtitle className="pb-4 text-center">
              <VideoActions video={video} listLayout={listLayout} />
            </CardSubtitle>
          </Card>
        </Col>
      )}
    </>
  );
};

export default VideoListElement;
