import Link from "next/link";
import { PageShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Hyderabad startup map</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              HYDERABAD&apos;S STARTUP ECOSYSTEM, ON ONE MAP.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Discover startups, founders, investors, industries and opportunities across Hyderabad.
            </p>
            <div className="mt-8">
              <Link
                href="/explore"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Explore Startup Map
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-10 text-sm text-slate-700 md:text-base">
              <div>
                <span className="block text-2xl font-black text-slate-900 md:text-3xl">2,400+</span>
                <span>Startups</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 md:text-3xl">18</span>
                <span>Industries</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900 md:text-3xl">32</span>
                <span>Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[28px] border border-slate-200 bg-[#edf2f5] p-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)] md:p-5">
          <div className="relative h-[420px] overflow-hidden rounded-[22px] border border-slate-200 bg-[radial-gradient(circle_at_center,_#eef2f5_0%,_#dfe7ec_48%,_#d2dfe6_100%)]">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/90 bg-white/10" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/80 bg-white/5" />

            {[
              { left: "18%", top: "24%" },
              { left: "29%", top: "42%" },
              { left: "42%", top: "58%" },
              { left: "60%", top: "27%" },
              { left: "70%", top: "54%" },
              { left: "82%", top: "68%" },
            ].map((pin, index) => (
              <div key={index} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: pin.left, top: pin.top }}>
                <span className="inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
