import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";
import { founders } from "@/lib/real-data";

export default function FoundersPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Founders"
        title="The people behind the momentum"
        description="Meet the operators building category-defining companies across Hyderabad."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {founders.map((founder) => (
            <Link key={founder.slug} href={`/founders/${founder.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                {founder.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
              <p className="mt-2 text-sm text-sky-700">{founder.role}</p>
              <p className="mt-4 text-slate-600">{founder.company}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
