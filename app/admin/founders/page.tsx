import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminFoundersPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Founders"
        title="Founder management"
        description="Review founder profiles and ensure data quality across the directory."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">Founder verification and profile controls would live here.</p>
        </div>
      </section>
    </PageShell>
  );
}
