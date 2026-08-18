import { PageIntro, PageShell } from "@/components/site-shell";

export default function DashboardProfilePage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Profile"
        title="Account settings"
        description="Update your profile, company details, and visibility settings."
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="Riya Nair" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" defaultValue="Founder" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
