type ExplorerSidebarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  stageOptions: string[];
  industryOptions: string[];
  locationOptions: string[];
  selectedStage: string;
  onStageChange: (value: string) => void;
  fundingOptions: string[];
};

export function ExplorerSidebar({
  searchQuery,
  onSearchChange,
  stageOptions,
  industryOptions,
  locationOptions,
  selectedStage,
  onStageChange,
  fundingOptions,
}: ExplorerSidebarProps) {
  return (
    <aside className="border-b border-slate-200 bg-[#f7f8fa] p-5 xl:border-b-0 xl:border-r">
      <div className="mb-5 flex items-center gap-2 text-[15px] font-semibold text-slate-900">
        <span aria-hidden="true">🔎</span>
        <span>Search</span>
      </div>

      <div className="mb-5">
        <input
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search startups, founders, industries..."
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-500"
        />
      </div>

      <div className="space-y-7">
        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Startup Stage</h3>
          <div className="space-y-2 text-sm text-slate-700">
            {stageOptions.map((stage) => (
              <label key={stage} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="stage"
                  checked={selectedStage === stage}
                  onChange={() => onStageChange(stage)}
                  className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span>{stage}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Industry</h3>
          <div className="space-y-2 text-sm text-slate-700">
            {industryOptions.map((industry) => (
              <label key={industry} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span>{industry}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Founded</h3>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <input type="text" defaultValue="2020" className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-center outline-none focus:border-sky-500" />
            <span>→</span>
            <input type="text" defaultValue="2026" className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-center outline-none focus:border-sky-500" />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Location</h3>
          <div className="space-y-2 text-sm text-slate-700">
            {locationOptions.map((location) => (
              <label key={location} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span>{location}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Funding</h3>
          <div className="space-y-2 text-sm text-slate-700">
            {fundingOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
          Clear Filters
        </button>
      </div>
    </aside>
  );
}
