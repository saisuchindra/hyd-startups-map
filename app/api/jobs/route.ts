import { NextResponse } from "next/server";
import { jobs } from "@/lib/real-data";

export async function GET() {
  return NextResponse.json({ data: jobs });
}
