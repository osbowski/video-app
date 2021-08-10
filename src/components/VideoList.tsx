import { useContext, useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";

import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement";
import { fetchedVideo } from "../types";
import { Row, Button } from "reactstrap";
import { removeAllVideos } from "../store/action-creators/removeAllVIdeos";
import sortVideosByDate from "../utils/sort-video-by-date";
import { FaCaretUp, FaCaretDown  } from "react-icons/fa";
import Pagination from "./VideoPagination";

const VideoList: React.FC = () => {
  const { videos, dispatch } = useContext(GlobalContext);

  const [listLaoyut, setListLayout] = useState(false);
  const [favsOnly, setFavsOnly] = useState(false);
  const [oldestFirst,setOldestFirst]=useState(true)

  const [currentPage,setCurrentPage] = useState(1);
  const [videosPerPage]= useState(3);




  let videosToShow:fetchedVideo[];
  videosToShow = favsOnly ? videos.favs : videos.normalVideos;
  videosToShow=sortVideosByDate(oldestFirst,videosToShow)

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);


  


  return (
    <>
      <h1 className="text-center mb-5">Your Videos</h1>
      <nav className="d-flex justify-content-center mb-3 w-100">
      <Button className='rounded-0 mx-1 d-flex align-items-center' color='primary' onClick={() => setOldestFirst(!oldestFirst)}>
          Set by date{oldestFirst ? <FaCaretDown size={20}/> : <FaCaretUp size={20} />}
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
          .slice(indexOfFirstVideo, indexOfLastVideo)
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
      <Pagination
        videosperpage={videosPerPage}
        totalvideos = {videosToShow.length}
        paginate = {paginate} 
      />
    </>
  );
};

export default VideoList;

























// import ReactPaginate from "react-paginate";

// import { useContext, useState, useEffect } from "react";
// import { GlobalContext } from "../context/GlobalState";
// import VideoListElement from "./VideoListElement";
// import { fetchedVideo } from "../types";
// import { Row, Button } from "reactstrap";
// import { removeAllVideos } from "../store/action-creators/removeAllVIdeos";
// import sortVideosByDate from "../utils/sort-video-by-date";
// import { FaCaretUp, FaCaretDown  } from "react-icons/fa";

// const VideoList: React.FC = () => {
//   const { videos, dispatch } = useContext(GlobalContext);

//   const [pageNumber, setPageNumber] = useState(0);
//   const [listLaoyut, setListLayout] = useState(false);
//   const [favsOnly, setFavsOnly] = useState(false);
//   const [oldestFirst,setOldestFirst]=useState(true)

//   const videosPerPage = 6;
//   const visitedPages = pageNumber * videosPerPage;
//   const pageCount = Math.ceil(videos.normalVideos.length / videosPerPage);



//   const changePage = ({ selected }: any) => {
//     setPageNumber(selected);
//   };

//   let videosToShow:fetchedVideo[];
//   videosToShow = favsOnly ? videos.favs : videos.normalVideos;
//   videosToShow=sortVideosByDate(oldestFirst,videosToShow);


//   useEffect(() => {
//     setPageNumber(pageCount)
//   }, [videosToShow]) 


//   return (
//     <>
//       <h1 className="text-center mb-5">Your Videos</h1>
//       <nav className="d-flex justify-content-center mb-3 w-100">
//       <Button className='rounded-0 mx-1 d-flex align-items-center' color='primary' onClick={() => setOldestFirst(!oldestFirst)}>
//           Set by date{oldestFirst ? <FaCaretDown size={20}/> : <FaCaretUp size={20} />}
//         </Button>
//         <Button className='rounded-0 mx-1' color='primary' onClick={() => dispatch(removeAllVideos(videos))}>
//           Remove all videos
//         </Button>
//         <Button className='rounded-0 mx-1' color='primary' onClick={() => setFavsOnly(!favsOnly)}>
//           {favsOnly ? "Show all videos " : "Show only favorites"}
//         </Button>
//         <Button className='rounded-0 mx-1' color='primary' onClick={() => setListLayout(!listLaoyut)}>List/Grid</Button>
//       </nav>

//       <Row>
//         {videosToShow
//           .slice(visitedPages, visitedPages + videosPerPage)
//           .map((video: fetchedVideo) =>
//             listLaoyut ? (
//               <VideoListElement
//                 listLayout={listLaoyut}
//                 key={video.id}
//                 video={video}
//               />
//             ) : (
//               <VideoListElement
//                 listLayout={listLaoyut}
//                 key={video.id}
//                 video={video}
//               />
//             )
//           )}
//       </Row>

//       {videosToShow.length > 6 ? (
//         <ReactPaginate
//           previousLabel={"<<"}
//           nextLabel={">>"}
//           pageCount={pageCount}
//           onPageChange={changePage}
//           containerClassName={"paginationBttns"}
//           previousLinkClassName={"previousBttn"}
//           nextLinkClassName={"nextBttn"}
//           disabledClassName={"paginationDisabled"}
//           activeClassName={"paginationActive"}
//           pageRangeDisplayed={6}  
//           marginPagesDisplayed={1}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default VideoList;
