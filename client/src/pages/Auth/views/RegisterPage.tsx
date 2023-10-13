import {
  Box,
  Text,
  Container,
  Heading,
  Link,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuthStore } from 'src/store/auth';
import { Logo } from 'src/assets';
import { PasswordFields } from '../components';
import { LoginPayload } from '../types';
import { getProfile, loginRequest } from 'src/api/auth';
import { ContentConter } from 'src/components';

const RegisterPage = () => {
  const { setToken } = useAuthStore();
  const { handleSubmit } = useForm<LoginPayload>();

  console.log('redenrder');

  const onSubmit: SubmitHandler<LoginPayload> = async (payload) => {
    const { email, password } = payload;
    const resLogin = await loginRequest(email, password);
    console.log('resLogin:', resLogin);
    setToken(resLogin.data.token);
    const profileRes = await getProfile();
    console.log('profileRes.data:', profileRes.data);
  };

  return (
    <ContentConter>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }} bgColor={'gray.900'}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Sign up</Heading>
              <Text color="fg.muted">
                have an account? <Link href="/auth/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" />
                  </FormControl>
                  <PasswordFields />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                </HStack>
                <Stack spacing="6">
                  <Button type="submit">Sign up</Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </ContentConter>
  );
};

export { RegisterPage };
