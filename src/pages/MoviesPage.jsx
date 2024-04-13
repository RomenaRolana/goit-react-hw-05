import MovieList from "../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { getMovieByQuery } from "../servises/api";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function getMovies() {
      if (query === null) return;
      try {
        const response = await getMovieByQuery(query);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const handleSubmit = (values) => {
    setSearchParams({ query: values.searchMovie });
  };

  return (
    <>
      <Link to='/'>Додому</Link>
      <Formik initialValues={{ searchMovie: "" }} onSubmit={handleSubmit}>
        <Form>
          <h2>Пощук фільму по імені</h2>
          <label>
            <Field
              type='текст'
              name='пошук'
              placeholder='Введіть пошук...'
            />
          </label>
          <button type='submit' aria-label='Search'>
            🔍
          </button>
        </Form>
      </Formik>

      <div>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>Введіть чергу пошуку &#128579;</p>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
