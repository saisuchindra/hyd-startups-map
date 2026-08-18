import { NextResponse } from "next/server";
import { startups, founders, investors, jobs } from "@/lib/real-data";

type SearchRecord = {
  type: "startup" | "founder" | "investor" | "job";
  slug: string;
  name?: string;
  title?: string;
  company?: string;
  location?: string;
  industry?: string;
  role?: string;
  focus?: string;
  tags?: string[];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();

  const results: SearchRecord[] = [
    ...startups.map((item) => ({
      type: "startup" as const,
      slug: item.slug,
      name: item.name,
      location: item.location,
      industry: item.industry,
      company: item.name,
      tags: item.tags,
    })),
    ...founders.map((item) => ({
      type: "founder" as const,
      slug: item.slug,
      name: item.name,
      company: item.company,
      role: item.role,
      location: undefined,
    })),
    ...investors.map((item) => ({
      type: "investor" as const,
      slug: item.name.toLowerCase().replace(/\s+/g, "-"),
      name: item.name,
      focus: item.focus,
      location: item.location,
    })),
    ...jobs.map((item) => ({
      type: "job" as const,
      slug: item.slug,
      title: item.title,
      company: item.company,
      location: undefined,
      industry: undefined,
    })),
  ].filter((item) => {
    if (!q) return true;
    const text = JSON.stringify(item).toLowerCase();
    return text.includes(q);
  });

  return NextResponse.json({ data: results.slice(0, 20) });
}
