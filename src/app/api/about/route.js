import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  const allHeader = headers();
  let connection = allHeader.get("Connection");
  return NextResponse.json({ msg: connection }, { status: 402 });
}
