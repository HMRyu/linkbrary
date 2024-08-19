"use server";

import { getAccessToken } from "@/app/api/cookies";

const getCurrentUser = async () => {
  const accessToken = await getAccessToken();

  const res = await fetch("https://bootcamp-api.codeit.kr/api/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("유저를 불러오는 데 오류가 발생했습니다!!!");
  }

  return data.data[0];
};

export default getCurrentUser;
