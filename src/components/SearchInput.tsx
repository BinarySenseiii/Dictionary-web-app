import { Box, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React from 'react';

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => (
  <Box mt="xl">
    <TextInput
      placeholder="Search for a word"
      size="md"
      rightSection={<IconSearch color="#9856d6" size={16} />}
    />
  </Box>
);
export default SearchInput;
