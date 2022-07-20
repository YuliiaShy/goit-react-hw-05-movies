import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export function useFetchSearchMovieOnRequest() {
  const [search, setSearch] = useSearchParams();
  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = search.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      setIsLoading(true);
      try {
        const films = await searchMovies(query);
        if (films.results.length === 0) {
          return toast.error(
            `Nothing was found for the query "${query}", please specify your query)`
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
  }, [query, search]);
  return { query, setSearch, filmsBySearch, isLoading };
}

useFetchSearchMovieOnRequest.propTypes = {
  query: PropTypes.string.isRequired,
};
