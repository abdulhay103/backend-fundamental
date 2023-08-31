import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  const allHeaders = headers();
  let user = allHeaders.get("user");
  let password = allHeaders.get("password");
  return NextResponse.json({ user: user, Password: password });
}
