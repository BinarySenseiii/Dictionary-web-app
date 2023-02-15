import { createStyles } from '@mantine/core';

export const useNavStyles = createStyles((theme) => ({
  wrapper: {
    borderBottom: 0,
  },

  dropdown: {
    width: '140px!important',
  },

  active: {
    backgroundColor: theme.colors.brand[4],
    color: theme.white,

    '&:hover': {
      backgroundColor: theme.colors.brand[4],
    },
  },
}));
