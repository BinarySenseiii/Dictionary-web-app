import { Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export default function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Switch
      aria-label="Change color scheme"
      size="md"
      color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
      onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
      onChange={() => toggleColorScheme()}
    />
  );
}
