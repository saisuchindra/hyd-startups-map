import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default function RegisterPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Register"
        title="Create your account"
        description="Join the directory as a founder, operator, or ecosystem contributor."
      />
      <section className="mx-auto max-w-md px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="you@example.com" />
            </div>
            <button className="w-full rounded-full bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-500">Create account</button>
          </div>
          <div className="mt-5 text-sm text-slate-600">
            Already have an account? <Link href="/auth/login" className="font-medium text-sky-700">Login</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
