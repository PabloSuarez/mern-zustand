import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../constants';
import { useAuthStore } from '../store/auth';

const instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
