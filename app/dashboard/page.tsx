import { PageIntro, PageShell } from "@/components/site-shell";

export default function DashboardPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Dashboard"
        title="Founder and admin dashboard"
        description="Track submissions, startup profiles, and ecosystem activity from one place."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Profiles", "12 active"],
            ["Submissions", "7 pending"],
            ["Jobs", "9 live"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">{label}</p>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">{value}</h3>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
