import mem from "mem";
import Cookies from "universal-cookie";
import { TRefreshResponse } from "@/models/Login";
import { axiosInstance } from "./api";
import { links } from "@/components/constants/links";

const refresh = async() => {
  const axios = axiosInstance(links.auth_service, false);

  const cookie = new Cookies();
  axios.interceptors.request.use((config) => {
    const token = cookie.get("refresh_token");
    if(token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  const response = await axios.get<TRefreshResponse>('refresh');
  return response.data;
}

const refreshTokenFn = async () => {
  const response = await refresh();
  const cookie = new Cookies();
  cookie.set("access_token", response.data.access_token, { maxAge: response.data.access_token_age });
  return response;
}

const maxAge = 10000;

export const memorizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
