import Axios from 'axios';
import { memorizedRefreshToken } from './refresh';
import Cookies from 'universal-cookie';
import { ServiceUnavailableError } from '@/utils/error/ServiceUnavailable.error';

export const axiosInstance = (baseURL: string, withJwt = true) => {
  const axios = Axios.create({
    baseURL: `${baseURL}/api/`,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(withJwt) {
    axios.interceptors.request.use((config) => {
      const cookie = new Cookies();
      const token = cookie.get("access_token");
      if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  } 
  
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response } = error;
      const status = response?.status;
      if (status === 401 && !config?.sent && !config._retry) {
        config._retry = true;
        config.sent = true;
        await memorizedRefreshToken();
        return axios(config);
      } else if(status === 503 || error.code === "ERR_NETWORK") {
        return Promise.reject(new ServiceUnavailableError());
      }
      if(response.data) return Promise.reject(response.data)
    }
  );


  return axios;
} 