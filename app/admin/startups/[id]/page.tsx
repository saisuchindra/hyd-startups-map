import { notFound } from "next/navigation";
import { PageIntro, PageShell } from "@/components/site-shell";

export default async function AdminStartupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Startup"
        title={`Startup ${id}`}
        description="Manage verification, metadata, and moderation details for this listing."
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">This page would show a specific startup’s admin controls and moderation data.</p>
        </div>
      </section>
    </PageShell>
  );
}
