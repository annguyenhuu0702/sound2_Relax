import axios, { AxiosRequestConfig } from 'axios'

export const apiCallerWithToken = (
  token: string | null,
) => {
  const instance = axios.create({
    withCredentials: true,
  });
  instance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      if (config.headers) {     
        config.headers["Access-Control-Allow-Origin"] = "*";   
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance;
};