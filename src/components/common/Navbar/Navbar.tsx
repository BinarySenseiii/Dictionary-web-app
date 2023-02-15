import { Button, Container, Flex, Group, Header, Menu, Text, useMantineTheme } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';
import { useFont, useFontActions } from '@/context/store';
import { Logo } from '@/components/Icons';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { fonts } from './Navbar.mock';
import { useNavStyles } from './Navbar.styles';

const Navigation: React.FC = () => {
  const { colorScheme } = useMantineTheme();
  const { classes } = useNavStyles();
  const { text: currentFont, value } = useFont();
  const { setFont } = useFontActions();

  return (
    <Header height={56} mt="md" className={classes.wrapper}>
      <Container size="md">
        <Flex justify="space-between">
          <Link href="/">
            <Logo colorScheme={colorScheme} />
          </Link>
          <Group spacing="xs">
            <Menu
              shadow="md"
              withArrow
              classNames={{
                dropdown: classes.dropdown,
              }}
              trigger="hover"
              transition="scale"
              transitionDuration={150}
              withinPortal
            >
              <Menu.Target>
                <Button
                  style={{ background: 'transparent' }}
                  size="sm"
                  compact
                  rightIcon={
                    <IconArrowDown size="14" color={colorScheme === 'dark' ? 'white' : 'black'} />
                  }
                  styles={{ rightIcon: { marginLeft: '3px' } }}
                >
                  <Text color={colorScheme === 'dark' ? 'white' : 'black'}>{currentFont}</Text>
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                {fonts.map((font) => (
                  <Menu.Item
                    key={font.id}
                    onClick={() => setFont({ text: font.text, value: font.value })}
                    className={font.value === value ? classes.active : classes.item}
                  >
                    {font.text}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
            <ColorSchemeToggle />
          </Group>
        </Flex>
      </Container>
    </Header>
  );
};
export default Navigation;
