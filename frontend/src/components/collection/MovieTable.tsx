function MovieTable(props: any) {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {props.pageData.map((movie: any) => (
            <tr>
              <td>{movie.Category}</td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Director}</td>
              <td>{movie.Rating}</td>
              <td>{movie.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieTable;
