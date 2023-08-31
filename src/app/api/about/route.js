import { NextResponse } from "next/server";

export async function POST(req, res) {
  const requestBody = await req.json();
  let name = requestBody["name"];
  let age = requestBody["age"];
  let color = requestBody["color"];

  return NextResponse.json(
    { Name: name, Age: age, Color: color },
    { status: 202 }
  );
}
