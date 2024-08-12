import axios from "axios";
import { getAccessToken } from "./cookies";

const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
