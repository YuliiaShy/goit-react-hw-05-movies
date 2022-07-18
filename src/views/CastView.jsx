import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useFetchCastOfTheFilm } from 'hooks';
import CastCards from 'components/CastCards/CastCards';

function CastView() {
  const { cast, isLoading } = useFetchCastOfTheFilm();

  return (
    <>
      {!isLoading && (
        <SimpleGrid minChildWidth="250px" spacing="30px">
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <CastCards
              key={cast_id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default CastView;
