import React, { useState } from "react";
import data from "../../data/MovieData.json";
import MovieTable from "./MovieTable";

function PaginationHandler() {
  //set up constants
  const PageSize = 15;
  const MovieData = data.MovieData;
  const NumPages = Math.ceil(MovieData.length / PageSize);

  //update functions
  const ChangePage = (newPage: any) => {
    setPage(newPage);
    setPageData(CalcPageData());
  };

  const CalcPageData = () => {
    let first = PageSize * (page - 1);
    let last = first + PageSize;
    if (last > MovieData.length) {
      last = MovieData.length;
    }

    let subPageData = MovieData.slice(first, last);

    return subPageData;
  };

  //state variables
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(CalcPageData());

  return (
    <>
      <h2>{page}</h2>
      <MovieTable pageData={pageData}></MovieTable>
    </>
  );
}

export default PaginationHandler;
