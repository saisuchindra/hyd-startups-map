import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="About"
        title="Why this map matters"
        description="We’re building a living directory of the founders, startups, and operators shaping Hyderabad’s innovation economy."
        actions={
          <Link href="/submit" className="rounded-full bg-sky-600 px-5 py-2.5 font-semibold text-white hover:bg-sky-500">
            Submit your startup
          </Link>
        }
      />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Citywide visibility", "A central place for startups, talent, and capital to discover what is happening across the city."],
            ["Founders-first", "We help early-stage operators surface their work, traction, and network in one place."],
            ["Actionable ecosystem", "From neighborhoods to investors, the map is meant to enable real opportunities and partnerships."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
