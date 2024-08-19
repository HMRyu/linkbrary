"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const addFolder = async (name: string) => {
  const accessToken = await getAccessToken();

  const res = await fetch("https://bootcamp-api.codeit.kr/api/folders", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("폴더 생성 시 에러가 발생했습니다.");
  }

  revalidatePath("/folder");
};

export default addFolder;
