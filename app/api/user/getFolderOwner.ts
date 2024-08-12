import axiosInstance from "../axiosInstance";

export const getFolderOwner = async (userId: number) => {
  const data = await axiosInstance.get(`/users/${userId}`);

  return data;
};
