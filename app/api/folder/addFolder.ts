import axiosInstance from "../axiosInstance";

export const addFolder = async (name: string) => {
  const res = await axiosInstance.post(`/folders`, {
    name,
  });

  return res;
};
