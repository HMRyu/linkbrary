import axiosInstance from "../axiosInstance";
import { AxiosError } from "axios";

const getCurrentUser = async () => {
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

export default getCurrentUser;
