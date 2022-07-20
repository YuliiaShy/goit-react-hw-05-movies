import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from 'services/API';

export function useFetchDetailsOneFilm() {
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() =>  {
      async function getMovie() {
        setIsLoading(true);
        try {
          const movieData = await movieDetails(movieId);
          setFilm(movieData);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovie();
  }, [movieId]);
  
  return { film, isLoading };
}
