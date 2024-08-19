"use server";

import { revalidatePath } from "next/cache";

const getLinkData = async (userId: number, folderId?: number) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  // if (!res.ok) {
  //   throw new Error("링크를 불러오는 데 실패했습니다.");
  // }

  const data = await res.json();

  revalidatePath("/folder");

  return data.data;
};

export default getLinkData;
