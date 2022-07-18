import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/API';

export function useFetchCastOfTheFilm() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { movieId } = useParams();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const cast = await movieCredits(movieId);
        setCast(cast.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);

  return { cast, isLoading };
}
