import { AxiosError } from "axios";
import axiosInstance from "../axiosInstance";

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 401) {
        return null;
      }
    }

    throw error;
  }
};
