import axiosInstance from "../axiosInstance";

export const deleteFolder = async (folderId: number) => {
  const res = await axiosInstance.delete(`/folders/${folderId}`);

  return res;
};
