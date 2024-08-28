"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const editFolder = async (folderId: number, name: string) => {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch(
      `https://bootcamp-api.codeit.kr/api/folders/${folderId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      },
    );

    revalidatePath("/");
    revalidatePath("/folder");

    return {
      success: true,
      message: "폴더 이름을 변경했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message: "폴더 이름 변경 시 에러가 발생했습니다.",
    };
  }
};

export default editFolder;
