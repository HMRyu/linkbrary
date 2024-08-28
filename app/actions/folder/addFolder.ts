"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const addFolder = async (name: string) => {
  try {
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

    revalidatePath("/");
    revalidatePath("/folder");

    return {
      success: true,
      message: "폴더를 생성했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message: "폴더 생성 시 에러가 발생했습니다.",
    };
  }
};

export default addFolder;
