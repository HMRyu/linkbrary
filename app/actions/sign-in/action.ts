"use server";

import { setAccessToken } from "../../api/cookies";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { data } = await res.json();

    await setAccessToken(data?.accessToken);
  } catch (error) {
    return {
      message: "로그인 시 에러가 발생했습니다.",
    };
  }
}
