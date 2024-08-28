"use server";

import { redirect } from "next/navigation";
import { getAccessToken } from "@/app/api/cookies";

const getCurrentUser = async () => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    redirect("/signin");
  }

  try {
    const res = await fetch("https://bootcamp-api.codeit.kr/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return data.data[0];
  } catch (error) {
    return {
      message: "유저를 불러오는 데 실패했습니다.",
    };
  }
};

export default getCurrentUser;
