"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const deleteLink = async (linkId: number) => {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch(
      `https://bootcamp-api.codeit.kr/api/links/${linkId}`,
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
      message: "링크를 삭제했습니다.",
    };
  } catch (error) {
    return {
      success: false,
      message: "링크를 삭제하는 데 실패했습니다.",
    };
  }
};

export default deleteLink;
