import { useEffect, useState } from "react";
import axios from "axios";
import { getApi } from "../servises/api";
import MovieList from "../components/MovieList/MovieList";

// import { Link, useParams } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await getApi();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Домашня сторінка</h1>
      <h2>Популярні сьогодні</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

