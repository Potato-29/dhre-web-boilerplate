import axios from "axios";
import { retrieveToken } from "../services/tokenServices";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    }
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config) => {
    const token = retrieveToken("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
