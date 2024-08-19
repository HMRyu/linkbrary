"use server";

import { revalidatePath } from "next/cache";

const getFolderOwner = async (userId: number) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("유저를 불러오는 데 오류가 발생했습니다.");
  }

  revalidatePath("/shared/[folderId]", "page");

  return data.data[0];
};

export default getFolderOwner;