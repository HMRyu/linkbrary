"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const deleteFolder = async (folderId: number) => {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch(
      `https://bootcamp-api.codeit.kr/api/folders/${folderId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/folder");

    return {
      success: true,
      message: "폴더를 삭제했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message: "폴더를 삭제하는 데 실패했습니다.",
    };
  }
};

export default deleteFolder;
