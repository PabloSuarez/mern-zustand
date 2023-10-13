import { Box, Text, Flex } from '@chakra-ui/react';
import { LinkCustom } from '../LinkCustom/LinkCustom';

const headerLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Plans',
    link: '/plans',
  },
  {
    name: 'Register',
    link: '/auth/register',
  },
];

const headerHeight = '120px'; // todo: use css root variables for header and footer
const headerMargin = '30px';

const Header = () => {
  return (
    <header>
      <Flex justifyContent={'center'} gap={40} paddingY={5} alignItems={'center'} mb={headerMargin} height={'90px'}>
        {headerLinks.map(({ name, link }) => (
          <LinkCustom key={name} to={link}>
            <Box>
              <Text color={'white'} fontWeight={'bold'} fontSize={'xx-large'}>
                {name.toUpperCase()}
              </Text>
            </Box>
          </LinkCustom>
        ))}

        <LinkCustom to={'/auth/login'}>
          <Box>
            <Text
              borderRadius={3}
              backgroundColor={'green.400'}
              color={'white'}
              px={5}
              py={1}
              fontWeight={'bold'}
              fontSize={'x-large'}
            >
              Login
            </Text>
          </Box>
        </LinkCustom>
      </Flex>
    </header>
  );
};

export { Header, headerHeight };
