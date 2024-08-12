import axiosInstance from "../axiosInstance";

export const deleteLink = async (linkId: number) => {
  const res = await axiosInstance.delete(`/links/${linkId}`);

  return res;
};
