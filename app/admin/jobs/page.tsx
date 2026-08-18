import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminJobsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Jobs"
        title="Hiring listings"
        description="Moderate and publish startup roles across the broader job board."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">This page would show all roles, applications, and moderation state.</p>
        </div>
      </section>
    </PageShell>
  );
}
