import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyderabad Startup Map",
  description: "Explore Hyderabad’s startup ecosystem with filters, locations, and company discovery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
