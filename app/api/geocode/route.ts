import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      status: "mock",
      message: "Geocoding endpoint ready for integration with a real map provider.",
    },
  });
}
