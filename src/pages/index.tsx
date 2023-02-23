import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Anchor, Stack, Text, Title } from '@mantine/core';
import { Dictionary } from '@/components/Dictionary';
import SearchInput from '@/components/SearchInput';
import { DictionaryResult } from '@/types/dictionary';

const HomePage: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('');

  const { data, isInitialLoading, isError } = useQuery<DictionaryResult[], Error>({
    queryKey: ['word', searchWord],
    enabled: !!searchWord,
  });

  return (
    <>
      <SearchInput isLoading={isInitialLoading} setSearchWord={setSearchWord} />

      {isInitialLoading ? <div>Loading...</div> : data && <Dictionary result={data[0]} />}

      {isError && (
        <Stack mt="xl" spacing={4}>
          <Title order={4}>No Definitions Found</Title>
          <Text>
            Sorry pal, we couldn&apos;t find definitions for the word you were looking for you can
            try the search again at later time or head to the{' '}
            <Anchor href="https://www.dictionary.com/" target="_blank">
              https://www.dictionary.com/
            </Anchor>
          </Text>
        </Stack>
      )}
    </>
  );
};
export default HomePage;
