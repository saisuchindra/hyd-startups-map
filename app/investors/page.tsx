import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { investors } from "@/lib/real-data";

export default function InvestorsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Investors"
        title="Capital, conviction, and collaboration"
        description="A snapshot of investors supporting the next generation of Hyderabad startups."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {investors.map((investor) => (
            <Link key={investor.name} href={`/investors/${investor.name.toLowerCase().replace(/\s+/g, "-")}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700">
                {investor.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{investor.name}</h3>
              <p className="mt-3 text-sm text-sky-700">{investor.focus}</p>
              <p className="mt-4 text-sm text-slate-600">{investor.location}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
