import axios, { AxiosInstance, AxiosResponse, } from "axios";
import { getCookie } from "cookies-next";

export type APISuccessResponse<T = undefined> = {
  error: boolean;
  message: string;
  data: T;
  response: AxiosResponse<T>;
};


const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = getCookie('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {

      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosClient = createAxiosInstance();

export default axiosClient;
