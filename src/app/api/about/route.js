import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json({ msg: "This is ok!" });
}
