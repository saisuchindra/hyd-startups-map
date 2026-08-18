import { PageIntro, PageShell } from "@/components/site-shell";

export default function DashboardStartupPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Startup"
        title="Manage startup profile"
        description="Update your startup overview, traction details, and public listing." 
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">Startup profile management tools would live here.</p>
        </div>
      </section>
    </PageShell>
  );
}
