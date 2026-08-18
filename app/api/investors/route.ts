import { NextResponse } from "next/server";
import { investors } from "@/lib/real-data";

export async function GET() {
  return NextResponse.json({ data: investors });
}
