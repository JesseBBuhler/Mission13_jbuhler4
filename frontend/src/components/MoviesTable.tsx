import { useState } from "react";
import { Movie } from "../data/Movie";
import { useEffect } from "react";

function MoviesTable(props: any) {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    document.title = "Mission14 - Collection";
    const fetchMovies = async () => {
      const rsp = await fetch("https://localhost:4000/Movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Rating</th>
          <th>Edited</th>
          <th>Lent To</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {movieData.map((movie: any) => (
          <tr key={movie.movieid}>
            <td>{movie.category}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td>{movie.edited}</td>
            <td>{movie.lentto}</td>
            <td>{movie.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
