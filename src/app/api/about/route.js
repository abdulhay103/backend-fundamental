import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let token = searchParams.get("token");
  let city = searchParams.get("city");
  return NextResponse.json({
    Token: token,
    City: city,
  });
}
