import { withIronSession, applySession } from "next-iron-session";

const options = {
  password: process.env.COOKIE_PASSWORD,
  cookieName: "iReaderCk",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
    maxAge: 14400,
  },
};

export default function withSession(handler) {
  return withIronSession(handler, options);
}

export const customApplySession = (req, res) => applySession(req, res, options);
