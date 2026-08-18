import Link from "next/link";
import { PageIntro, PageShell } from "@/components/site-shell";

export default function ForgotPasswordPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Reset"
        title="Forgot your password?"
        description="We’ll send a recovery link to the email on file."
      />
      <section className="mx-auto max-w-md px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="you@example.com" />
          </div>
          <button className="mt-5 w-full rounded-full bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-500">Send reset link</button>
          <div className="mt-5 text-sm text-slate-600">
            <Link href="/auth/login" className="font-medium text-sky-700">Back to login</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
