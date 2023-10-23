import { User } from 'src/types';
import axios from '../libs/axios';

const loginRequest = async (email: string, password: string) => {
  return await axios.post('/auth/login', {
    email,
    password,
  });
};

type RegisterPayload = {
  access_token: string;
};

const registerRequest = async (email: string, password: string): Promise<RegisterPayload> => {
  const { data } = await axios.post('/auth/register', {
    email,
    password,
  });
  return data;
};

const getProfile = async (): Promise<User> => {
  const { data } = await axios.get('/auth/profile');
  return data;
};

export { getProfile, loginRequest, registerRequest };
