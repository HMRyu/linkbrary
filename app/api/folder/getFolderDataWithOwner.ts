import axiosInstance from "../axiosInstance";

export const getFolderDataWithOwner = async (folderId: number) => {
  const data = await axiosInstance.get(`/folders/${folderId}`);

  return data;
};
