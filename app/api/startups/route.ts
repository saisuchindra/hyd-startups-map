import { NextResponse } from "next/server";
import { startups } from "@/lib/real-data";

export async function GET() {
  return NextResponse.json({ data: startups });
}
