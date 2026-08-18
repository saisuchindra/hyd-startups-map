type ExplorerHeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  viewMode: "map" | "list";
  onViewModeChange: (value: "map" | "list") => void;
};

export function ExplorerHeader({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
}: ExplorerHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-[10px] font-bold text-white">
            LOGO
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <a href="/explore" className="text-slate-900">Explore</a>
            <a href="/startups">Startups</a>
            <a href="/founders">Founders</a>
            <a href="/investors">Investors</a>
            <a href="/industries">Industries</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 shadow-sm">
            <span aria-hidden="true">🔍</span>
            <input
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search startups"
              className="w-44 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            {(["map", "list"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => onViewModeChange(mode)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition ${
                  viewMode === mode
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
