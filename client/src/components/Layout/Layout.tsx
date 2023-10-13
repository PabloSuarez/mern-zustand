import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Header, Footer } from 'src/components';
import { Content } from './Content';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
};

export { Layout };
