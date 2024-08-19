"use server";

import { setAccessToken } from "../../api/cookies";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
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

  if (!data?.accessToken) {
    throw new Error("회원가입 시 에러가 발생했습니다.");
  }

  await setAccessToken(data?.accessToken);
}
