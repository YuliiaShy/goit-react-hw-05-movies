import { useState, useEffect } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

function SearchBar({ onSearch, query }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => setInputValue(evt.target.value);

  const submitHandler = evt => {
    evt.preventDefault();

    if (inputValue.trim() === '') {
      return toast.warn('Enter your request, please');
    }
    onSearch({ query: inputValue });
  };

  useEffect(() => {
    if (query) {
      setInputValue(query);
    }
  }, [query]);

  return (
    <Box as="form" mb="5" onSubmit={submitHandler}>
      <InputGroup>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="Search Movies"
          _placeholder={{ opacity: 0.5, color: 'teal' }}
          size="md"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            type="submit"
            aria-label="Search database"
            size="sm"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
};
