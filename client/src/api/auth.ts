import { LOGIN_URL, PROFILE_URL } from "../constants";
import axios from "../libs/axios";

const loginRequest = async(email: string, password: string) => {
  return await axios.post(  LOGIN_URL, {
    email,
    password
  });
};

const getProfile = async() => {
  return await axios.get(PROFILE_URL);
};

export { getProfile, loginRequest };
