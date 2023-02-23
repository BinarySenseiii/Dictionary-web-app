import { Box, Loader, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconSearch } from '@tabler/icons';
import React, { memo } from 'react';
import { z } from 'zod';

const schema = z.object({
  query: z.string().min(1, 'Word is required for search'),
});

type formValues = z.infer<typeof schema>;

interface ISearchInputProps {
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const SearchInput: React.FC<ISearchInputProps> = ({ setSearchWord, isLoading }) => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      query: '',
    },
  });

  const handleSubmit = ({ query }: formValues) => {
    setSearchWord(query);
    form.reset();
  };

  return (
    <Box component="form" mt="xl" onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        placeholder="Search for a word"
        autoComplete="off"
        size="md"
        rightSection={
          isLoading ? (
            <Loader size="sm" variant="oval" />
          ) : (
            <IconSearch color="#9856d6" size={20} type="submit" role="button" />
          )
        }
        withAsterisk
        {...form.getInputProps('query')}
      />
    </Box>
  );
};
export default memo(SearchInput);
