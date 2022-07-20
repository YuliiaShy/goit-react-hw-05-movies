import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const NavLinkk = ({ children, link, isDisabled }) => (
  <Button
    mr={50}
    px={2}
    py={1}
    rounded={'md'}
    as={NavLink}
    to={link}
    color="#4b4f56"
    _hover={{
      bg: 'teal',
      transform: 'scale(1.2)',
      color: 'white',
    }}
    _disabled={{
      bg: 'teal',
      transform: 'scale(0.98)',
      color: 'white',
    }}
    isDisabled={isDisabled}
  >
    {children}
  </Button>
);


NavLinkk.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
