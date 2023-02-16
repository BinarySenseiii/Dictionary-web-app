import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Text } from '@mantine/core';
import SearchInput from '@/components/SearchInput';
import { DictionaryResult } from '@/types/dictionary';

const HomePage: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('keyboard');
  const { data, isLoading } = useQuery<DictionaryResult[]>({
    queryKey: [searchWord],
    enabled: !!searchWord,
  });

  return (
    <>
      <SearchInput isLoading={isLoading} setSearchWord={setSearchWord} />

      {isLoading ? 'loading...' : <Text>{data && data[0].word}</Text>}
    </>
  );
};
export default HomePage;
