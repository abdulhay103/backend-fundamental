import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.formData();
  let brand = formData.get("brand");
  let origin = formData.get("origin");
  let importer = formData.get("importer");

  return NextResponse.json(
    {
      Brand: brand,
      Origin: origin,
      Importer: importer,
    },
    { status: 202 }
  );
}
