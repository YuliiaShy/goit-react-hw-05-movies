import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'services/API';

export function useFetchReviewsOfTheFilm() {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const review = await movieReviews(movieId);
        setReview(review.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  return { review, isLoading };
}
