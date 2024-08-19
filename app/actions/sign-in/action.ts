"use server";

import { redirect } from "next/navigation";
import { setAccessToken } from "../../api/cookies";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
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

  if (!data?.accessToken) {
    throw new Error("로그인 시 에러가 발생했습니다.");
  }

  await setAccessToken(data?.accessToken);

  redirect("/");
}
