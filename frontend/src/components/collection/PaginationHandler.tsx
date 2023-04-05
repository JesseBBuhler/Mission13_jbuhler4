import React, { useState } from "react";
import data from "../../data/MovieData.json";
import MovieTable from "./MovieTable";
import PageButtons from "./PageButtons";

function PaginationHandler() {
  //set up constants
  const PageSize = 25;
  const MovieData = data.MovieData;
  const NumPages = Math.ceil(MovieData.length / PageSize);

  //update functions
  const ChangePage = (newPage: any) => {
    setPage(newPage);
    setPageData(CalcPageData(newPage));
  };

  const CalcPageData = (newPage: any) => {
    let first = PageSize * (newPage - 1);
    let last = first + PageSize;
    if (last > MovieData.length) {
      last = MovieData.length;
    }

    let subPageData = MovieData.slice(first, last);

    return subPageData;
  };

  //state variables
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(CalcPageData(1));

  return (
    <div className="row">
      <div className="col-1">
        <PageButtons
          NumPages={NumPages}
          page={page}
          ChangePage={ChangePage}
        ></PageButtons>{" "}
      </div>
      <div className="col-11">
        <MovieTable pageData={pageData}></MovieTable>
      </div>
    </div>
  );
}

export default PaginationHandler;
