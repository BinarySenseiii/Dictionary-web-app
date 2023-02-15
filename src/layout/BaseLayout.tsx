import React, { ReactNode } from 'react';
import { Container } from '@mantine/core';
import ScrollToTop from '@/components/ScrollToTop';
import { Navigation } from '@/components/common/Navbar';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <>
    <ScrollToTop />
    <Container size="sm">
      <Navigation />
      {children}
    </Container>
  </>
);
export default BaseLayout;
