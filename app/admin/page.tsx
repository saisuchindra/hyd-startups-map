import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin"
        title="Ecosystem operations"
        description="Moderation, verification, and content management for the Hyderabad startup directory."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["Startups", "24"],
            ["Founders", "18"],
            ["Investors", "9"],
            ["Submissions", "13"],
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
