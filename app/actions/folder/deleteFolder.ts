"use server";

import { revalidatePath } from "next/cache";
import { getAccessToken } from "@/app/api/cookies";

const deleteFolder = async (folderId: number) => {
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

  // if (!res.ok) {
  //   throw new Error("폴더를 삭제하는 데 실패했습니다.");
  // }

  revalidatePath("/folder");
};

export default deleteFolder;
