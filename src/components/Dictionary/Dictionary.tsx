import { Anchor, Box, Center, Divider, Group, List, Stack, Text, Title } from '@mantine/core';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons';
import { Howl } from 'howler';
import React, { useState } from 'react';
import { DictionaryResult } from '@/types/dictionary';
import { useDictionaryStyles } from '@/components/Dictionary/Dictionary.styles';

type DictionaryProps = {
  result: DictionaryResult;
};

const Dictionary: React.FC<DictionaryProps> = ({ result }) => {
  const { classes } = useDictionaryStyles();
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = new Howl({
    src: result.phonetics
      .filter((phonetic) => phonetic.audio !== '')
      .map((phonetic) => phonetic.audio),
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });

  return (
    <Stack spacing="lg">
      <Group mt="xl" position="apart">
        <Stack spacing={8}>
          <Title tt="capitalize" order={1}>
            {result.word}
          </Title>

          <Text color="brand.4">{result.phonetic}</Text>
        </Stack>

        <Box onClick={() => sound.play()} className={classes.playerControl}>
          <Center h="100%">{isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}</Center>
        </Box>
      </Group>

      {result.meanings.map((meaning, i) => (
        <Stack key={i} mb="xl">
          <Divider label={meaning.partOfSpeech} />
          <List>
            <Text fw={600} fs="italic" mb="xs">
              Meaning:
            </Text>

            {meaning.definitions.map((definition, idx) => (
              <React.Fragment key={idx}>
                <List.Item key={idx}>{definition.definition}</List.Item>

                {definition.example && (
                  <>
                    {idx === 0 && (
                      <Text fw={700} fs="italic" mb="xs" mt="xl">
                        Examples:
                      </Text>
                    )}
                    <List.Item>{definition.example}</List.Item>
                  </>
                )}

                {definition.synonyms.length > 0 && (
                  <>
                    {definition.example && idx === 0 && (
                      <Text fw={700} fs="italic" mb="xs" mt="xl">
                        Synonyms:
                      </Text>
                    )}
                    {definition.synonyms.map((synonym, j) => (
                      <List.Item key={j}>{synonym}</List.Item>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </List>
        </Stack>
      ))}

      <Text fw={700} fs="italic" mt="xl" mb="xl">
        Source:{' '}
        <Anchor href={result.sourceUrls[0]} target="_blank">
          {result.sourceUrls[0]}
        </Anchor>
      </Text>
    </Stack>
  );
};
export default Dictionary;
