import axiosInstance from "../axiosInstance";

export const getLinkData = async (userId: number, folderId?: number) => {
  const data = await axiosInstance.get(`/users/${userId}/links`, {
    params: {
      folderId,
    },
  });

  return data;
};
