import { useContext, useState } from "react";
import ReactPaginate from 'react-paginate';


import { GlobalContext } from "../context/GlobalState";
import VideoListElement from "./VideoListElement"
import { fetchedVideo } from "../types";
import { Row } from "reactstrap";


const VideoList:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);
    const [pageNumber,setPageNumber] = useState(0);
    const videosPerPage = 10;
    const visitedPages = pageNumber * videosPerPage;

    const pageCount = Math.ceil(videos.length/videosPerPage);

    const changePage = ({selected}:any)=>{
        setPageNumber(selected)
    }


    return(
        <>
        <h1 className='text-center mb-5'>Your Videos</h1>
        <Row>
            {videos.slice(visitedPages, visitedPages + videosPerPage).map((video:fetchedVideo)=>(
                <VideoListElement key={video.id} video={video} />
            ))}
        </Row>

        {videos.length>6 ? (
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
        ) : ''}
        </>
    )
}

export default VideoList;