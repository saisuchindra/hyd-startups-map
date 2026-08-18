import type { Startup } from "@/lib/real-data";

type StartupDetailDrawerProps = {
  startup: Startup;
  nearbyStartups: Startup[];
  onClose?: () => void;
};

export function StartupDetailDrawer({ startup, nearbyStartups, onClose }: StartupDetailDrawerProps) {
  return (
    <aside className="absolute bottom-4 right-4 z-20 w-[340px] rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-sm font-bold text-slate-700">
            {startup.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{startup.name}</h2>
            <p className="text-sm text-slate-500">{startup.location}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-500 transition hover:bg-slate-100"
        >
          Close
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">{startup.industry}</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{startup.stage}</span>
      </div>

      <p className="text-sm leading-6 text-slate-600">{startup.tagline}</p>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-slate-500">Founded</div>
          <div className="mt-1 font-semibold text-slate-900">{startup.foundedYear}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-slate-500">Funding</div>
          <div className="mt-1 font-semibold text-slate-900">{startup.funding}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-slate-500">Employees</div>
          <div className="mt-1 font-semibold text-slate-900">{startup.employees}</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-slate-500">Website</div>
          <div className="mt-1 truncate font-semibold text-slate-900">{startup.website.replace("https://", "")}</div>
        </div>
        {startup.linkedin ? (
          <div className="col-span-2 rounded-xl bg-sky-50 p-3">
            <div className="text-slate-500">LinkedIn</div>
            <a href={startup.linkedin} target="_blank" rel="noreferrer" className="mt-1 inline-block font-semibold text-sky-700 underline decoration-sky-400 underline-offset-2">
              Open company profile
            </a>
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Startup Details</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• {startup.description}</li>
          <li>• Founders: {startup.founders.join(", ")}</li>
          <li>• Tags: {startup.tags.join(" · ")}</li>
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Nearby Startups</h3>
        <div className="space-y-2">
          {nearbyStartups.map((item) => (
            <div key={item.slug} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
              <div>
                <div className="font-medium text-slate-800">{item.name}</div>
                <div className="text-xs text-slate-500">{item.industry}</div>
              </div>
              <span className="text-xs text-slate-500">{item.stage}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
