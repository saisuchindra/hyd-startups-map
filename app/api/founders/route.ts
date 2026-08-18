import { NextResponse } from "next/server";
import { founders } from "@/lib/real-data";

export async function GET() {
  return NextResponse.json({ data: founders });
}
