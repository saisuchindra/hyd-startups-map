import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { startups } from "@/lib/real-data";

export default function StartupsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Startups"
        title="The companies building Hyderabad’s next chapter"
        description="A curated list of startups across AI, climate, enterprise tools, health, and more."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {startups.map((startup) => (
            <Link key={startup.slug} href={`/startups/${startup.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">{startup.industry}</span>
                <span className="text-slate-500">{startup.location}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">{startup.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{startup.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {startup.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-600">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
