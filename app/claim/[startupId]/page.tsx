import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default async function ClaimStartupPage({
  params,
}: {
  params: Promise<{ startupId: string }>;
}) {
  const { startupId } = await params;

  return (
    <PageShell>
      <PageIntro
        eyebrow="Claim"
        title={`Claim startup ${startupId}`}
        description="Verify ownership and update your company listing."
        actions={
          <Link href="/startups" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
            Back to startups
          </Link>
        }
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">This flow would let founders verify ownership of a company profile and manage public data.</p>
        </div>
      </section>
    </PageShell>
  );
}
