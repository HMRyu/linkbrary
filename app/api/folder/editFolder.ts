import axiosInstance from "../axiosInstance";

export const editFolder = async (folderId: number, name: string) => {
  const res = await axiosInstance.put(`/folders/${folderId}`, {
    name,
  });

  return res;
};
