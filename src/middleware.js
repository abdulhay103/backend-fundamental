import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/about")) {
    const res = NextResponse.next();
    res.headers.set("key1", "123");
    res.headers.set("key2", "1234");
    return res;
  } else if (req.nextUrl.pathname.startsWith("/about")) {
    console.log("about Middle ware");
  }
}
