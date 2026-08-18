import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, PageShell } from "@/components/site-shell";
import { getStartupBySlug } from "@/lib/real-data";

export default async function StartupDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const startup = getStartupBySlug(slug);

  if (!startup) {
    notFound();
  }

  return (
    <PageShell>
      <PageIntro
        eyebrow="Startup profile"
        title={startup.name}
        description={startup.tagline}
        actions={
          <>
            <Link href="/startups" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
              Back to startups
            </Link>
            <a href={startup.website} target="_blank" rel="noreferrer" className="rounded-full bg-sky-600 px-5 py-2.5 font-semibold text-white hover:bg-sky-500">
              Visit website
            </a>
            {startup.linkedin ? (
              <a href={startup.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
                LinkedIn
              </a>
            ) : null}
          </>
        }
      />
      <section className="mx-auto max-w-5xl space-y-8 px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-sky-600">Overview</p>
              <p className="mt-3 text-slate-600">{startup.description}</p>
            </div>
            <div className="grid gap-3 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
              <div><span className="font-semibold text-slate-900">Industry:</span> {startup.industry}</div>
              <div><span className="font-semibold text-slate-900">Stage:</span> {startup.stage}</div>
              <div><span className="font-semibold text-slate-900">Location:</span> {startup.location}</div>
              <div><span className="font-semibold text-slate-900">Funding:</span> {startup.funding}</div>
              <div><span className="font-semibold text-slate-900">Employees:</span> {startup.employees}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Founders</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {startup.founders.map((founder) => (
                <li key={founder}>• {founder}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Tags</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {startup.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
