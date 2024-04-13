import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDJmY2Y2MjAwMWVmNDI5ZTRkNWZhMGY0Y2JkMzNlMCIsInN1YiI6IjYyYmYwMTQ4MTIxOTdlMDA0ZmIxMGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5YY80ZB3__aSPOOMoQwYTSQ6ikkP8RyzVfptpsj0rY",
  },
};
export const getApi = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=842fcf62001ef429e4d5fa0f4cbd33e0",
    options
  );
  console.log("Trending movies", response.data.results);
  return response;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=%D1%82%D1%82%D1%82%D1%82%D1%82&language=en-US`,
    options
  );
  console.log("Movie details:", response.data);
  return response;
};

export const getMovieByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log("Search movie by query:", response.data);
  return response;
};

export const getMovieByCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  console.log("Movie credits:", response.data);
  return response;
};

export const getMovieByReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  console.log("Movie reviews:", response.data);
  return response;
};
