import { getAccessToken } from "../cookies";

const getCurrentUser = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch("https://bootcamp-api.codeit.kr/api/users", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "force-cache",
  });

  const data = await res.json();

  return data;
};

export default getCurrentUser;
