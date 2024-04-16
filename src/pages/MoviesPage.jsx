import MovieList from "../components/MovieList/MovieList";
import { Formik, Form, Field } from "formik";
import { getMovieByQuery } from "../servises/api";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || '';

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    setLoading(true);
    async function getMovies() {
      try {
        const response = await getMovieByQuery(trimmedQuery);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies.');
        setLoading(false);
      }
    }
    getMovies();
  }, [query]);

  const handleSubmit = (values) => {
    setSearchParams({ query: values.searchMovie });
  };

  return (
    <>
      <Link to='/'>Home</Link>
      <Formik initialValues={{ searchMovie: "" }} onSubmit={handleSubmit}>
        <Form>
          <h2>Search for a movie by name</h2>
          <label>
            <Field
              type='text'
              name='searchMovie'
              placeholder='Enter search...'
            />
          </label>
          <button type='submit' aria-label='Search'>
            🔍
          </button>
        </Form>
      </Formik>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          movies.length > 0 ? (
            <MovieList movies={movies} />
          ) : (
            <p>Enter a search query &#128579;</p>
          )
        )}
      </div>
    </>
  );
};

export default MoviesPage;


