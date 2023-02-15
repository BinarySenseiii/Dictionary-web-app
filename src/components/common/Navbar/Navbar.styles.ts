import { createStyles } from '@mantine/core';

export const useNavStyles = createStyles((theme) => ({
  wrapper: {
    borderBottom: 0,
  },

  dropdown: {
    width: '140px!important',
  },

  item: {
    '&[data-hovered]': {
      backgroundColor: 'transparent',
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark,
    },
  },

  active: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
  },
}));
