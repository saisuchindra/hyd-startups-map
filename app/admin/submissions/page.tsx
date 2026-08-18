import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminSubmissionsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Submissions"
        title="Submitted startups"
        description="Review new submissions and verify that each entry is ready for publication."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">This page would include validation state, notes, and approval controls.</p>
        </div>
      </section>
    </PageShell>
  );
}
