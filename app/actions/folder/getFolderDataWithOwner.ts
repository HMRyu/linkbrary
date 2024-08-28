"use server";

import { revalidatePath } from "next/cache";

const getFolderDataWithOwner = async (folderId: string | number) => {
  try {
    const res = await fetch(
      `https://bootcamp-api.codeit.kr/api/folders/${folderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await res.json();

    revalidatePath("/");
    revalidatePath("/shared/[folderId]", "page");

    return data.data[0];
  } catch (error) {
    throw new Error("폴더를 불러오는 데 에러가 발생했습니다.");
  }
};

export default getFolderDataWithOwner;
