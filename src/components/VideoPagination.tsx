import { useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useIsMount } from "../hooks/useIsMount";

interface paginationInterface {
  videosperpage: number;
  totalvideos: number;
  paginate: (pageNumber: number) => void;
  paginateNext: (pageNumbers: number[]) => void;
  paginatePrev: (pageNumbers: number[]) => void;
}
const VideoPagination: React.FC<paginationInterface> = ({
  videosperpage,
  totalvideos,
  paginate,
  paginateNext,
  paginatePrev,
}) => {
  let pageNumbers: number[];
  pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalvideos / videosperpage); i++) {
    pageNumbers.push(i);
  }

  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      return;
    } else {
      paginate(pageNumbers[pageNumbers.length - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalvideos]);

  return (
    <Pagination className="d-flex justify-content-center">
      <PaginationLink previous onClick={() => paginatePrev(pageNumbers)} />
      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink onClick={() => paginate(number)}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationLink next onClick={() => paginateNext(pageNumbers)} />
    </Pagination>
  );
};

export default VideoPagination;
