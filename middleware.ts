import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getAccessToken } from "./app/api/cookies";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/folder", "/shared"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected) {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      const loginUrl = new URL("/signin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/folder"],
};
