import { NextResponse } from "next/server";

export async function GET(req, res) {
  const myCookie = req.cookies.get("myCookie");
  //   const myCookie = req.cookies.get("myCookie")["name"];
  //   const myCookie = req.cookies.get("myCookie")["value"];
  return NextResponse.json({
    Cookie: myCookie,
  });
}
