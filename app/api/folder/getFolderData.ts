import axiosInstance from "../axiosInstance";

export const getFolderData = async (userId: number) => {
  const data = await axiosInstance.get(`/users/${userId}/folders`);

  return data;
};
