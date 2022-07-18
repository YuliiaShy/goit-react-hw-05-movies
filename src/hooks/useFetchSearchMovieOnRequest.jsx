import { useState, useEffect } from 'react';
import { searchMovies } from 'services/API';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export function useFetchSearchMovieOnRequest(searchQuery) {
  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      setIsLoading(true);
      try {
        const films = await searchMovies(searchQuery);
        if (films.results.length === 0) {
          return toast.error(
            `Nothing was found for the query "${searchQuery}", please specify your query)`
          );
        }
        setFilmsBySearch(films.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [searchQuery]);
  return { filmsBySearch, isLoading };
}

useFetchSearchMovieOnRequest.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
