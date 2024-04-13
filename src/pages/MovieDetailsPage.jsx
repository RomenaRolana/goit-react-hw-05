import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import MovieCast from "../components/MovieCast/MovieCast";
import { MovieReviews } from "../components/MovieReviews/MovieReviews";
import { getMovieById } from "../servises/api";

import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
const IMG = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetail, setMovieDetail] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await getMovieById(movieId);
        setMovieDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Назад</Link>
      <h1>Деталі:{movieId}</h1>
      <img src={`${IMG}${movieDetail.poster_path}`} alt='' />
      <h2>{movieDetail.title}</h2>
      <p>Підрахунок:{movieDetail.vote_average}</p>
      <h3>Огляд</h3>
      <p>{movieDetail.overview}</p>

      <ul>
        <h3>Жанри</h3>
        {movieDetail.genres &&
          movieDetail.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
      </ul>
      <h3>Додаткова інформація</h3>
      <Link style={{ display: "flex" }} to='cast'>
        Актори
      </Link>
      <Link style={{ display: "flex" }} to='reviews'>
        Огляди
      </Link>
      <Routes>
        <Route path='cast' element={<MovieCast />} />
        <Route path='reviews' element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
