import React, { ReactNode } from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import { Navigation } from '@/components/common/Navbar';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <>
    <Navigation />
    <ScrollToTop />
    {children}
  </>
);
export default BaseLayout;
