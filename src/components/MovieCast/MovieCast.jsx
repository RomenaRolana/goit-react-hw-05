import { getMovieByCredits } from "../../servises/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IMG = "https://image.tmdb.org/t/p/w500";
const MovieCast = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCasts() {
      try {
        const response = await getMovieByCredits(movieId);
        console.log(response.data);
        setMovieCasts(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCasts();
  }, [movieId]);
  return (
    <div>
      <ul>
        {movieCasts.map((cast) => (
          <li key={cast.id}>
            <img
              style={{ width: "150px" }}
              src={`${IMG}${cast.profile_path}`}
              alt=''
            />
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
