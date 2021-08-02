import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.COOKIE_PASSWORD,
    cookieName: "iReaderCk",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
      maxAge: 14400,
    },
  });
}
