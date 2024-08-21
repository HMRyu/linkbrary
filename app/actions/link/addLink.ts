"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const addLink = async (url: string, folderId: number | undefined) => {
  const accessToken = await getAccessToken();

  const res = await fetch("https://bootcamp-api.codeit.kr/api/links", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      folderId,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("링크 생성 시 에러가 발생했습니다.");
  }

  revalidatePath("/");
  revalidatePath("/folder");
};

export default addLink;
