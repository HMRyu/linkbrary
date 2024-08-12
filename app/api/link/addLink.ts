import axiosInstance from "../axiosInstance";

export const addLink = async (url: string, folderId: number | undefined) => {
  const res = await axiosInstance.post(`/links`, {
    url,
    folderId,
  });

  return res;
};
