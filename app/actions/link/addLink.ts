"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const addLink = async (url: string, folderId: number | undefined) => {
  try {
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

    revalidatePath("/");
    revalidatePath("/folder");

    return {
      success: true,
      message: "링크를 추가했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message: "링크 추가 시 에러가 발생했습니다.",
    };
  }
};

export default addLink;
