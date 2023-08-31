import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  return NextResponse.json(
    {},
    {
      status: 202,
      headers: {
        Token: "123-ABC",
        "Set-Cookie": "resCookie=Res-123; path=/; httpOnly",
      },
    }
  );
}
