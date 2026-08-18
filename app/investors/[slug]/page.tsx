import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, PageShell } from "@/components/site-shell";
import { investors } from "@/lib/real-data";

export default async function InvestorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const investor = investors.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!investor) {
    notFound();
  }

  return (
    <PageShell>
      <PageIntro
        eyebrow="Investor profile"
        title={investor.name}
        description={investor.focus}
        actions={
          <Link href="/investors" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
            Back to investors
          </Link>
        }
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Investment focus</h3>
          <p className="mt-4 text-slate-600">
            {investor.name} focuses on {investor.focus.toLowerCase()} and supports companies in {investor.location} and surrounding startup clusters across the region.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
