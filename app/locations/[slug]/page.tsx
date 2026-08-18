import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, PageShell } from "@/components/site-shell";
import { popularLocations, startups } from "@/lib/real-data";

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = popularLocations.find(
    (item) => item.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!location) {
    notFound();
  }

  const filtered = startups.filter((startup) => startup.location === location);

  return (
    <PageShell>
      <PageIntro
        eyebrow="Location"
        title={location}
        description={`Startups and operators in ${location} contributing to the city’s broader ecosystem.`}
        actions={
          <Link href="/locations" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
            Back to locations
          </Link>
        }
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((startup) => (
            <Link key={startup.slug} href={`/startups/${startup.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900">{startup.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{startup.tagline}</p>
              <div className="mt-4 text-sm text-slate-500">{startup.industry}</div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
