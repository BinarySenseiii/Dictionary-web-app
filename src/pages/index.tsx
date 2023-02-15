import { Stack, Text, Title } from '@mantine/core';
import React from 'react';
import SearchInput from '@/components/SearchInput';

const HomePage: React.FC = () => (
  <>
    <SearchInput />

    <Stack mt="xl">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, obcaecati, magni doloremque
        cum quod rem, officia repellendus maxime magnam quasi ducimus atque illum? Dolore fugit
        repellat et quasi ipsa quidem?
      </Text>

      <Title>Hello world</Title>
    </Stack>
  </>
);
export default HomePage;
