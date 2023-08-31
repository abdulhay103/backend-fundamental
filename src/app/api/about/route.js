import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  const headerList = headers();
  let apiKey = headerList.get("apiKey");

  return NextResponse.json({ APIKey: apiKey });
}
