import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React, { ReactNode } from 'react';
import { customColors } from './Colors';
import { fonts } from '@/theme/Fonts';
import { useFont } from '@/context/store';

type ThemeProviderProps = {
  children: ReactNode;
  colorScheme: 'light' | 'dark';
  toggleColorScheme: (value?: ColorScheme) => void;
};

const MantineThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  colorScheme,
  toggleColorScheme,
}) => {
  const { value } = useFont();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            ...customColors,
          },
          fontFamily: fonts[value],
          headings: { fontFamily: fonts[value] },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
export default MantineThemeProvider;
