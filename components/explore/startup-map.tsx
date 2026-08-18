"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/components/explore/map-tiles.css";
import type { Startup } from "@/lib/real-data";

type StartupMapProps = {
  startups: Startup[];
  selectedStartupSlug: string;
  onSelect: (slug: string) => void;
};

const hyderabadCenter: [number, number] = [17.385, 78.4867];

const startupCoordinateMap: Record<string, [number, number]> = {
  mygate: [17.4401, 78.3812],
  uniphore: [17.4516, 78.3869],
  gupshup: [17.456, 78.3741],
  mivi: [17.4399, 78.3916],
  cloud4c: [17.4438, 78.3893],
  nxtwave: [17.4403, 78.3526],
  bharatx: [17.4525, 78.3831],
  "qnu-labs": [17.4358, 78.3886],
  "asteria-aerospace": [17.412, 78.4439],
  hyperverge: [17.451, 78.3857],
  "crest-data-systems": [17.4408, 78.3937],
  aarogya: [17.369, 78.4941],
  "ml-cubes": [17.4411, 78.356],
};

const markerPalette = ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b", "#f43f5e", "#06b6d4"] as const;

const defaultIcon = L.divIcon({
  className: "custom-map-marker",
  html: `<span style="display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:9999px;border:2px solid white;background:#0ea5e9;color:white;font-size:10px;font-weight:700;box-shadow:0 8px 18px rgba(15,23,42,0.2);">•</span>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export function StartupMap({ startups, selectedStartupSlug, onSelect }: StartupMapProps) {
  const [isClientReady, setIsClientReady] = useState(false);

  const markers = useMemo(
    () =>
      startups.map((startup, index) => ({
        ...startup,
        position: startupCoordinateMap[startup.slug] ?? hyderabadCenter,
        color: markerPalette[index % markerPalette.length],
      })),
    [startups],
  );

  useEffect(() => {
    setIsClientReady(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  if (!isClientReady) {
    return (
      <section className="bg-[#edf2f5] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[18px] font-semibold uppercase tracking-[0.12em] text-slate-500">Hyderabad Startup Map</div>
        </div>
        <div className="flex h-[700px] items-center justify-center rounded-[18px] border border-slate-200 bg-[#edf2f5] text-sm text-slate-500">
          Loading map...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#edf2f5] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[18px] font-semibold uppercase tracking-[0.12em] text-slate-500">Hyderabad Startup Map</div>
        <div className="flex items-center gap-3 text-slate-600">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-lg leading-none">＋</button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-lg leading-none">−</button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-lg leading-none">◎</button>
        </div>
      </div>

      <div className="h-[700px] overflow-hidden rounded-[18px] border border-slate-200 bg-slate-100">
        <MapContainer
          key="hyderabad-startup-map"
          center={hyderabadCenter}
          zoom={11}
          scrollWheelZoom
          zoomControl={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />

          {markers.map((startup) => {
            const isSelected = selectedStartupSlug === startup.slug;

            return (
              <Marker
                key={startup.slug}
                position={startup.position}
                icon={L.divIcon({
                  className: "custom-map-marker",
                  html: `<span style="display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:9999px;border:2px solid white;background:${startup.color};color:white;font-size:10px;font-weight:700;box-shadow:0 8px 18px rgba(15,23,42,0.2);transform:${isSelected ? "scale(1.2)" : "scale(1)"};">•</span>`,
                  iconSize: [18, 18],
                  iconAnchor: [9, 9],
                })}
                eventHandlers={{
                  click: () => onSelect(startup.slug),
                }}
              >
                <Popup closeButton={false} className="startup-map-popup">
                  <div className="min-w-[180px] space-y-2 rounded-xl bg-white p-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-bold text-slate-900">{startup.name}</div>
                      <span className="rounded-full bg-sky-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                        {startup.stage}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600">{startup.industry}</div>
                    <div className="text-[11px] text-slate-500">{startup.location}</div>
                    <Link
                      href={`/startups/${startup.slug}`}
                      className="block w-full rounded-lg bg-slate-900 px-2 py-1.5 text-center text-[11px] font-medium text-white transition hover:bg-slate-700"
                    >
                      View details
                    </Link>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}
