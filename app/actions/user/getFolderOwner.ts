"use server";

const getFolderOwner = async (userId: number) => {
  try {
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

    return data.data[0];
  } catch (error) {
    return {
      message: "유저를 불러오는 데 오류가 발생했습니다.",
    };
  }
};

export default getFolderOwner;
