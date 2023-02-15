import * as React from 'react';

const Logo = ({ colorScheme }: { colorScheme: 'light' | 'dark' }) => (
  <svg width={50} height={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 2a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2H18Zm0 1.5H6.5a1 1 0 0 0-1 1V18H19V4.5a1 1 0 0 0-1-1ZM16 5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Zm-.5 1.5h-7v1h7v-1Z"
      fill={colorScheme === 'light' ? '#212121' : '#fff'}
      fillRule="nonzero"
    />
  </svg>
);

export default Logo;
