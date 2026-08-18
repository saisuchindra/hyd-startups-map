import { PageIntro, PageShell } from "@/components/site-shell";

export default function DashboardJobsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Jobs"
        title="Published roles"
        description="Review active opportunities and manage customer-facing listings."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">This dashboard would include active positions, applicants, and analytics.</p>
        </div>
      </section>
    </PageShell>
  );
}
