import { parse, serialize } from "cookie";
import jscookie from "js-cookie";
import { NextApiResponse } from "next";
import { TOKEN_NAME } from "./constants";

export const MAX_AGE = 60 * 60 * 8;

export const setToken = (res: NextApiResponse, token: string): void => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE),
    httpOnly: process.env.NODE_ENV === "production",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
  res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res: any): void => {
  if (res) {
    const cookie = serialize(TOKEN_NAME, "", {
      maxAge: -1,
      path: "/",
    });

    res?.setHeader("Set-Cookie", cookie);
  } else {
    jscookie.remove(TOKEN_NAME);
  }
};

export const parseCookies = (req: any): any | string => {
  // For API Routes we don't need to parse the cookies.

  if (req?.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req?.headers?.cookie;
  return parse(cookie || "");
};

export const getTokenCookie = (req: unknown): string => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
};
