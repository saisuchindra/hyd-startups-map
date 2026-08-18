import { PageIntro, PageShell } from "@/components/site-shell";

export default function AdminNewStartupPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • New"
        title="Add a startup"
        description="Create a new verified listing from a submitted or internal company record."
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">The form to create a new startup entry would live here.</p>
        </div>
      </section>
    </PageShell>
  );
}
