import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

interface ContentConterProps {
  children: React.ReactNode;
}

const ContentConter: FC<ContentConterProps> = ({ children }) => (
  <Flex alignItems={'center'} height={'100%'}>
    {children}
  </Flex>
);

export { ContentConter };
