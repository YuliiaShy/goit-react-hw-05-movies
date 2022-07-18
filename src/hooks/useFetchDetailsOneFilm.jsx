import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieDetails } from 'services/API';

export function useFetchDetailsOneFilm() {
  const [filmDetails, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(movieId) || movieId.length > 6) {
      navigate('/');
    } else {
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
    }
  }, [movieId, navigate]);
  return { filmDetails, isLoading };
}
