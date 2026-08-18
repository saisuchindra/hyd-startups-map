import { NextResponse } from "next/server";
import { startups } from "@/lib/real-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const startup = startups.find((item) => item.slug === id);

  if (!startup) {
    return NextResponse.json({ error: "Startup not found" }, { status: 404 });
  }

  return NextResponse.json({ data: startup });
}
