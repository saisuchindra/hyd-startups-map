"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { ExplorerHeader } from "@/components/explore/explorer-header";
import { ExplorerSidebar } from "@/components/explore/explorer-sidebar";
import { StartupDetailDrawer } from "@/components/explore/startup-detail-drawer";
import { startups } from "@/lib/real-data";

const StartupMap = dynamic(
  () => import("@/components/explore/startup-map").then((mod) => mod.StartupMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[700px] items-center justify-center rounded-[18px] border border-slate-200 bg-[#edf2f5] text-sm text-slate-500">
        Loading map...
      </div>
    ),
  },
);

const stageOptions = ["All", "Idea", "Pre-Seed", "Seed", "Series A", "Series B+"];
const industryOptions = ["AI", "SaaS", "FinTech", "HealthTech", "EdTech", "EV", "E-commerce"];
const locationOptions = ["Madhapur", "HITECH City", "Gachibowli", "Kondapur", "Banjara Hills"];
const fundingOptions = ["Bootstrapped", "Angel", "VC Funded"];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedStartupSlug, setSelectedStartupSlug] = useState("");

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStage =
        selectedStage === "All" ||
        startup.stage.toLowerCase() === selectedStage.toLowerCase() ||
        (selectedStage === "Pre-Seed" && startup.stage.toLowerCase() === "pre-series a");

      return matchesSearch && matchesStage;
    });
  }, [searchQuery, selectedStage]);

  const selectedStartup =
    filteredStartups.find((startup) => startup.slug === selectedStartupSlug) ?? null;

  const nearbyStartups = useMemo(() => {
    if (!selectedStartup) return [];
    return startups
      .filter((startup) => startup.slug !== selectedStartup.slug)
      .slice(0, 3);
  }, [selectedStartup]);

  return (
    <div className="min-h-screen bg-[#eef1f4] text-slate-900">
      <div className="mx-auto max-w-[1500px] px-3 py-3 lg:px-5">
        <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-[#f6f7f9] shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
          <ExplorerHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <main className="grid grid-cols-1 xl:grid-cols-[300px_minmax(0,1fr)]">
            <ExplorerSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              stageOptions={stageOptions}
              industryOptions={industryOptions}
              locationOptions={locationOptions}
              selectedStage={selectedStage}
              onStageChange={setSelectedStage}
              fundingOptions={fundingOptions}
            />

            <div className="relative">
              <StartupMap
                startups={filteredStartups}
                selectedStartupSlug={selectedStartup?.slug ?? ""}
                onSelect={setSelectedStartupSlug}
              />

              {selectedStartup && viewMode === "map" ? (
                <StartupDetailDrawer
                  startup={selectedStartup}
                  nearbyStartups={nearbyStartups}
                  onClose={() => setSelectedStartupSlug("")}
                />
              ) : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
