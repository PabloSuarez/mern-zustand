import { FC, ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

interface LinkCustomProps {
  children: ReactNode;
  to: string;
}
const LinkCustom: FC<LinkCustomProps> = ({ children, to }) => {
  return (
    <Link to={to} as={ReactRouterLink}>
      {children}
    </Link>
  );
};

export { LinkCustom };
