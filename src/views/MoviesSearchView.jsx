
import {  Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useFetchSearchMovieOnRequest } from 'hooks';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';

function MoviesSearchView() {
  const { filmsBySearch, isLoading, query, setSearch,} =
    useFetchSearchMovieOnRequest();
 


  return (
    <Box p={5}>
      <SearchBar onSearch={setSearch} query={query}/>
      {isLoading && '...Loading'}
      {!isLoading && <MoviesList films={filmsBySearch} />}
      <Outlet />
    </Box>
  );
}
export default MoviesSearchView;
