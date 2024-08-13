"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAccessToken(data: string) {
  cookies().set("accessToken", data);
}

export async function getAccessToken() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  return accessToken?.value;
}

export async function deleteAccessToken() {
  const cookieStore = cookies();
  cookieStore.delete("accessToken");

  return redirect("/signin");
}
