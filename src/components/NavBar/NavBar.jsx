import React from 'react';
import { useLocation } from 'react-router-dom';
import {NavLinkk} from 'components/NavBar/NavLinkk';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLinkk
                link={'/'}
                isDisabled={location.pathname === '/' ? true : false}
              >
                Home{' '}
              </NavLinkk>
              <NavLinkk
                link={'/movies'}
                isDisabled={location.pathname === '/movies' ? true : false}
              >
                Movies
              </NavLinkk>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLinkk
                link={'/'}
                isDisabled={location.pathname === '/' ? true : false}
              >
                Home{' '}
              </NavLinkk>
              <NavLinkk
                link={'/movies'}
                isDisabled={location.pathname === '/movies' ? true : false}
              >
                Movies
              </NavLinkk>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
