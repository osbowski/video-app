import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement";
import { fetchedVideo } from "../types";
import { Row, Button } from "reactstrap";
import { removeAllVideos } from "../store/action-creators/removeAllVIdeos";
import sortVideosByDate from "../utils/sort-video-by-date";
import { FaCaretUp, FaCaretDown  } from "react-icons/fa";

const VideoList: React.FC = () => {
  const { videos, dispatch } = useContext(GlobalContext);

  const [pageNumber, setPageNumber] = useState(0);
  const [listLaoyut, setListLayout] = useState(false);
  const [favsOnly, setFavsOnly] = useState(false);
  const [oldestFirst,setOldestFirst]=useState(false)

  const videosPerPage = 6;
  const visitedPages = pageNumber * videosPerPage;
  const pageCount = Math.ceil(videos.normalVideos.length / videosPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  let videosToShow:fetchedVideo[];
  videosToShow = favsOnly ? videos.favs : videos.normalVideos;
  videosToShow=sortVideosByDate(oldestFirst,videosToShow);


  

  return (
    <>
      <h1 className="text-center mb-5">Your Videos</h1>
      <nav className="d-flex justify-content-center mb-3 w-100">
      <Button className='rounded-0 mx-1 d-flex align-items-center' color='primary' onClick={() => setOldestFirst(!oldestFirst)}>
          Set by date{oldestFirst ? <FaCaretUp size={20} /> : <FaCaretDown size={20}/>}
        </Button>
        <Button className='rounded-0 mx-1' color='primary' onClick={() => dispatch(removeAllVideos(videos))}>
          Remove all videos
        </Button>
        <Button className='rounded-0 mx-1' color='primary' onClick={() => setFavsOnly(!favsOnly)}>
          {favsOnly ? "Show all videos " : "Show only favorites"}
        </Button>
        <Button className='rounded-0 mx-1' color='primary' onClick={() => setListLayout(!listLaoyut)}>List/Grid</Button>
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
