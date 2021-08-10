import { useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface paginationInterface{
    videosperpage:number;
    totalvideos:number;
    paginate: (pageNumber:number)=>void;

}
const VideoPagination:React.FC<paginationInterface> = ({ videosperpage, totalvideos, paginate }) => {
    let pageNumbers:number[];
    pageNumbers=[]
  
    for (let i = 1; i <= Math.ceil(totalvideos / videosperpage); i++) {
      pageNumbers.push(i);
    }

    useEffect(() => {
      paginate(pageNumbers[pageNumbers.length-1])
    }, [totalvideos])

    return (

        <Pagination className='d-flex justify-content-center'>
          {pageNumbers.map(number => (
            <PaginationItem key={number }>
              <PaginationLink onClick={() => paginate(number)} href='#'>
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>

    );
  };
  
  export default VideoPagination;


  