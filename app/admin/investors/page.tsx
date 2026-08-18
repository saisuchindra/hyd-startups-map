import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminInvestorsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Investors"
        title="Investor directory"
        description="Manage investor profiles, focus areas, and listing visibility."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">Investor records and verification workflows would live here.</p>
        </div>
      </section>
    </PageShell>
  );
}
