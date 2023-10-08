import axios from "axios";
import { API_LOGIN_URL } from "../constants";

const loginRequest = async(email: string, password: string) => {
  return axios.post(  API_LOGIN_URL, {
    email,
    password
  });
};

export {loginRequest};
