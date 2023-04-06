import PaginationHandler from "../components/collection/PaginationHandler";
import React, { useEffect } from "react";

function Collection() {
  useEffect(() => {
    document.title = "Mission13 - Collection";
  });

  return (
    <>
      <h1>Welcome to the Joel Hilton Movie Collection</h1>
      <PaginationHandler></PaginationHandler>
    </>
  );
}

export default Collection;
