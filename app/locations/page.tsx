import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { popularLocations } from "@/lib/real-data";

export default function LocationsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Locations"
        title="Where Hyderabad’s startup energy clusters"
        description="Explore the areas, corridors, and campuses driving growth across the city."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {popularLocations.map((location) => (
            <Link key={location} href={`/locations/${location.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900">{location}</h3>
              <p className="mt-3 text-sm text-slate-600">Growing startup density, talent access, and active founder communities.</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
