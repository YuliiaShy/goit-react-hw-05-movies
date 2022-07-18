import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieIconDefault from 'images/movieIconDefault.jpg';

import { Box, Text, Image, Center } from '@chakra-ui/react';
import { IMAGE_URL } from 'services/API';

function MovieCards({ film: { poster_path, name, title, id }, route = '' }) {
  const location = useLocation();

  return (
    <Box width="300px">
      <NavLink to={`${route}${id}`} state={{ from: location }}>
        <Box height="450px">
          <Image
            width="100%"
            src={
              poster_path
                ? `${IMAGE_URL + poster_path}`
                : MovieIconDefault
            }
            alt={title ?? name}
            borderRadius="lg"
          />
        </Box>
        <Box>
          <Center>
            <Text fontWeight={500}>{title ?? name}</Text>
          </Center>
        </Box>
      </NavLink>
    </Box>
  );
}

export default MovieCards;

MovieCards.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
  }),
  route: PropTypes.string,
};
