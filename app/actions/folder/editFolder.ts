"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const editFolder = async (folderId: number, name: string) => {
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

  if (!res.ok) {
    throw new Error("폴더 이름 변경 시 에러가 발생했습니다.");
  }

  revalidatePath("/folder");
};

export default editFolder;
