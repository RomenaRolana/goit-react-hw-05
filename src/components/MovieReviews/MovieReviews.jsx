import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieByReviews } from "../../servises/api";
export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const response = await getMovieByReviews(movieId);
        setMovieReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);
  return (
    <div>
      {" "}
      <ul>
        {Array.isArray(movieReviews) &&
          movieReviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
