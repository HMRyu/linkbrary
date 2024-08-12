import axiosInstance from "../axiosInstance";

export const getUserFolder = async (userId: number, folderId: number) => {
  const data = await axiosInstance.get(`/users/${userId}/folders/${folderId}`);

  return data;
};
