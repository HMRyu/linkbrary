"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const deleteLink = async (linkId: number) => {
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

  // if (!res.ok) {
  //   throw new Error("링크를 삭제하는 데 실패했습니다.");
  // }

  revalidatePath("/folder");
};

export default deleteLink;
