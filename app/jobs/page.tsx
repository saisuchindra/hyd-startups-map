import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { jobs } from "@/lib/real-data";

export default function JobsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Jobs"
        title="Find traction-building roles in Hyderabad"
        description="Explore hiring opportunities across the city’s fastest-growing startups."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-sky-700">{job.company}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{job.title}</h3>
              <div className="mt-6 flex gap-3">
                <Link href={`/jobs/${job.slug}`} className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">
                  View role
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
