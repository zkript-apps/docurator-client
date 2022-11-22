import { NextResponse } from "next/server";
import { useEffect } from "react";
import toast from "react-hot-toast";

const middleware = (req: any) => {
  const { origin } = req.nextUrl;
  const verify = req.cookies.get("l_auth");
  const url = req.url;

  if (
    !verify &&
    (url.includes("/students") ||
      url.includes("/schools") ||
      url.includes("/form137") ||
      url.includes("/form138") ||
      url.includes("/good-moral-certificates") ||
      url.includes("/birth-certificates") ||
      url.includes("/developer") ||
      url.includes("/settings"))
  ) {
    return NextResponse.redirect(`${origin}/`);
  }
};

export default middleware;
