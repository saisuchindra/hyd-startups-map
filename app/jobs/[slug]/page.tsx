import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, PageShell } from "@/components/site-shell";
import { jobs } from "@/lib/real-data";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <PageShell>
      <PageIntro
        eyebrow="Role"
        title={job.title}
        description={`Opportunity at ${job.company}`}
        actions={
          <Link href="/jobs" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
            Back to jobs
          </Link>
        }
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Role overview</h3>
          <p className="mt-4 text-slate-600">
            This opportunity is part of Hyderabad’s startup recruiting landscape and is designed to surface active hiring needs across emerging and scaling businesses.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
