import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/about")) {
    const reqHeader = new Headers(req.headers);
    let token = reqHeader.get("token");

    if (token === "123") {
      reqHeader.set("user", "Abdul Hay");
      reqHeader.set("password", "1234");
      return NextResponse.next({ request: { headers: reqHeader } });
    } else {
      return NextResponse.json({ msg: "Fail" }, { status: 401 });
    }
  } else if (req.nextUrl.pathname.startsWith("/about")) {
    console.log("about Middle ware");
  }
}
