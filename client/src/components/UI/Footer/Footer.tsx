import { Box, Flex, Text } from '@chakra-ui/react';
import { LinkCustom } from '../LinkCustom/LinkCustom';

const footerLinks = [
  {
    name: 'Contact',
    link: '#contact',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Privacy',
    link: '#privacy',
  },
];

const footerHeight = '90px'; // todo: use css root variables for header and footer

const Footer = () => {
  return (
    <footer>
      <Flex justifyContent={'center'} gap={10} height={footerHeight}>
        {footerLinks.map(({ name, link }) => (
          <LinkCustom key={name} to={link}>
            <Box pt={5} pb={5}>
              <Text color={'white'} fontWeight={'bold'} fontSize={'xx-large'}>
                {name.toUpperCase()}
              </Text>
            </Box>
          </LinkCustom>
        ))}
      </Flex>
    </footer>
  );
};

export { Footer, footerHeight };
