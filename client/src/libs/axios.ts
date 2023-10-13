import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants";
import { useAuthStore } from "../store/auth";

const authApi: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

authApi.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token;
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

export default authApi;
