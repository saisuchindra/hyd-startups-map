import { PageIntro, PageShell } from "@/components/site-shell";

export default function SearchPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Search"
        title="Search the ecosystem"
        description="Find the right startup, founder, market, or location across the city."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <input
            placeholder="Search by startup, founder, industry, or area"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-500"
          />
        </div>
      </section>
    </PageShell>
  );
}
