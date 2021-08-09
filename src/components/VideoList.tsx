import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement";
import { fetchedVideo } from "../types";
import { Row, Button } from "reactstrap";
import { removeAllVideos } from "../store/action-creators/removeAllVIdeos";

const VideoList: React.FC = () => {
  const { videos, dispatch } = useContext(GlobalContext);
  const [pageNumber, setPageNumber] = useState(0);
  const videosPerPage = 6;
  const visitedPages = pageNumber * videosPerPage;

  const [listLaoyut, setListLayout] = useState(false);
  const [favsOnly, setFavsOnly] = useState(false);

  const pageCount = Math.ceil(videos.normalVideos.length / videosPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const videosToShow = favsOnly ? videos.favs : videos.normalVideos;

  return (
    <>
      <h1 className="text-center mb-5">Your Videos</h1>
      <nav className="d-flex justify-content-end">
        <Button onClick={() => dispatch(removeAllVideos(videos.normalVideos))}>
          Remove all videos
        </Button>
        <Button onClick={() => setFavsOnly(!favsOnly)}>
          {favsOnly ? "Show all videos " : "Show only favorites"}
        </Button>
        <Button onClick={() => setListLayout(!listLaoyut)}>List/Grid</Button>
      </nav>

      <Row>
      {videosToShow
        .slice(visitedPages, visitedPages + videosPerPage)
        .map((video: fetchedVideo) =>
          listLaoyut ? (
            
              <VideoListElement
                listLayout={listLaoyut}
                key={video.id}
                video={video}
              />
          
          ) : (
            
            
              <VideoListElement
                listLayout={listLaoyut}
                key={video.id}
                video={video}
              />
          )
          
        )}
        </Row>
       

      {videosToShow.length > 6 ? (
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          pageRangeDisplayed={6}
          marginPagesDisplayed={1}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default VideoList;
