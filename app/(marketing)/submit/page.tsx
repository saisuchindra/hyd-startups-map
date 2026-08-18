import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default function SubmitPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Submit"
        title="List your startup"
        description="Fill out a few details and help the broader Hyderabad ecosystem discover your company, team, and traction."
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Startup name</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-sky-500" placeholder="Example: Orbit Ops" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Website</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-sky-500" placeholder="https://" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Industry</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-sky-500" placeholder="AI, Climate Tech, etc." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-sky-500" placeholder="HITEC City" />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-700">Short description</label>
            <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-sky-500" placeholder="What problem are you solving?" />
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Back to home
            </Link>
            <button type="button" className="rounded-full bg-sky-600 px-5 py-2.5 font-semibold text-white hover:bg-sky-500">
              Submit startup
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
