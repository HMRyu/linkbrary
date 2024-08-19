"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const getFolderData = async (userId: number) => {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error("폴더를 불러오는 데 실패했습니다.");
  }

  const data = await res.json();

  revalidatePath("/folder");

  return data.data;
};

export default getFolderData;
