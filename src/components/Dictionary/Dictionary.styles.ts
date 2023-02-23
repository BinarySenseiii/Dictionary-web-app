import { createStyles } from '@mantine/core';

export const useDictionaryStyles = createStyles((theme) => ({
  playerControl: {
    cursor: 'pointer',
    height: 50,
    width: 50,
    borderRadius: theme.radius.xl,
    background: theme.fn.lighten(theme.colors.brand[4], 0.1),
    color: theme.white,
  },
}));
