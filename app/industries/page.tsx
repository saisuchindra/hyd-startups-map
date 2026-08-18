import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { industryHighlights } from "@/lib/real-data";

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Industries"
        title="The sectors powering Hyderabad"
        description="A view into the city’s most active technology and business domains."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {industryHighlights.map((industry) => (
            <Link key={industry} href={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-2xl font-bold text-slate-900">{industry}</h3>
              <p className="mt-3 text-sm text-slate-600">Strong momentum, rising operators, and growing investor attention.</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
