import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { footerHeight, headerHeight } from '../UI';

interface ContentProps {
  children: React.ReactNode;
}

// todo: use css root variables for header and footer
const Content: FC<ContentProps> = ({ children }) => (
  <Box height={`calc(100vh - (${footerHeight} + ${headerHeight}))`} minWidth={'100vw'}>
    {children}
  </Box>
);

export { Content };
