import { useContext, useState } from "react";
import ReactPaginate from 'react-paginate';


import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement"
import { fetchedVideo } from "../types";


const VideoList:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);
    const [pageNumber,setPageNumber] = useState(0);
    const videosPerPage = 5;
    const visitedPages = pageNumber * videosPerPage;

    const pageCount = Math.ceil(videos.length/videosPerPage);

    const changePage = ({selected}:any)=>{
        setPageNumber(selected)
    }


    return(
        <div className='d-flex flex-column align-items-center'>
            <h1>Your videos</h1>
            {videos.slice(visitedPages, visitedPages + videosPerPage).map((video:fetchedVideo)=>(
                <VideoListElement key={video.id} video={video} />
            ))}
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
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}

      />
        </div>
    )
}

export default VideoList;