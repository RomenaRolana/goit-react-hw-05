import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
              <h4>Опис:</h4>
              <p>{movie.overview}</p>
              <h4>Популярність: </h4>
              <p>{movie.vote_average}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
