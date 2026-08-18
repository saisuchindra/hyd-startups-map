import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default function LoginPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Login"
        title="Welcome back"
        description="Access your founder, admin, or operator dashboard."
      />
      <section className="mx-auto max-w-md px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="••••••••" />
            </div>
            <button className="w-full rounded-full bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-500">Login</button>
          </div>
          <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
            <Link href="/auth/register">Create account</Link>
            <Link href="/auth/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
