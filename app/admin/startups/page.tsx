import { PageIntro, PageShell } from "@/components/site-shell";
import { startups } from "@/lib/real-data";

export default function AdminStartupsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Admin • Startups"
        title="Startup management"
        description="Review, verify, and update startup listings across the city directory."
      />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Industry</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Stage</th>
              </tr>
            </thead>
            <tbody>
              {startups.map((startup) => (
                <tr key={startup.slug} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{startup.name}</td>
                  <td className="px-4 py-3 text-slate-600">{startup.industry}</td>
                  <td className="px-4 py-3 text-slate-600">{startup.location}</td>
                  <td className="px-4 py-3 text-slate-600">{startup.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
