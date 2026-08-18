import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminUsersPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Users"
        title="User access"
        description="View account roles, permissions, and platform access for the startup directory."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">User management and permissions controls would live here.</p>
        </div>
      </section>
    </PageShell>
  );
}
