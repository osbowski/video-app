import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement";
import { fetchedVideo } from "../types";
import { Row, Button } from "reactstrap";

const VideoList: React.FC = () => {
  const { videos } = useContext(GlobalContext);
  const [pageNumber, setPageNumber] = useState(0);
  const videosPerPage = 6;
  const visitedPages = pageNumber * videosPerPage;

  const [listLaoyut, setListLayout] = useState(false);

  const pageCount = Math.ceil(videos.length / videosPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <>
      <h1 className="text-center mb-5">Your Videos</h1>
      <nav className="d-flex justify-content-end">
        <Button onClick={() => setListLayout(!listLaoyut)}>List/Grid</Button>
      </nav>

      {listLaoyut ? (
        <>
          {videos
            .slice(visitedPages, visitedPages + videosPerPage)
            .map((video: fetchedVideo) => (
              <VideoListElement
                listLayout={listLaoyut}
                key={video.id}
                video={video}
              />
            ))}
        </>
      ) : (
        <Row>
          {videos
            .slice(visitedPages, visitedPages + videosPerPage)
            .map((video: fetchedVideo) => (
              <VideoListElement
                listLayout={listLaoyut}
                key={video.id}
                video={video}
              />
            ))}
        </Row>
      )}

      {videos.length > 6 ? (
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
