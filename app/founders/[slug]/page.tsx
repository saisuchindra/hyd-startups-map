import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { founders } from "@/lib/real-data";

export default async function FounderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const founder = founders.find((person) => person.slug === slug);

  if (!founder) {
    notFound();
  }

  return (
    <PageShell>
      <PageIntro
        eyebrow="Founder profile"
        title={founder.name}
        description={`${founder.role} at ${founder.company}`}
        actions={
          <>
            <Link href="/founders" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
              Back to founders
            </Link>
            {founder.linkedin ? (
              <a href={founder.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-600">
                LinkedIn
              </a>
            ) : null}
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">About this operator</h3>
          <p className="mt-4 text-slate-600">
            This founder is part of the broader Hyderabad startup ecosystem and contributes to building category-defining products with strong operating focus and a real-world customer lens.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
