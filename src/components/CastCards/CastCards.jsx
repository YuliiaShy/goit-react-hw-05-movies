import React from 'react';
import { IMAGE_URL } from 'services/API';
import { Box, Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CastIconDefault from 'images/castIconDefault.jpg';

function CastCards({ profile_path, name, character }) {
  return (
    <Box>
      <Box>
        <Image
          height="250px"
          src={
            profile_path
              ? `${IMAGE_URL + profile_path}`
              : CastIconDefault
          }
          alt={name}
        />
      </Box>
      <Text fontWeight="700">{name}</Text>
      <Text>{character}</Text>
    </Box>
  );
}

export default CastCards;

CastCards.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
