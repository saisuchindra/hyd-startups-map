import hyderabadData from "@/data/hyderabad-startups.json";

export type Startup = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  stage: string;
  location: string;
  foundedYear: number;
  funding: string;
  employees: string;
  description: string;
  tags: string[];
  website: string;
  linkedin?: string;
  founders: string[];
};

export type Founder = {
  slug: string;
  name: string;
  company: string;
  role: string;
  linkedin?: string;
};

export type Investor = {
  name: string;
  focus: string;
  location: string;
};

export type Job = {
  slug: string;
  title: string;
  company: string;
};

const data = hyderabadData as {
  startups: Startup[];
  founders: Founder[];
  investors: Investor[];
  jobs: Job[];
  industryHighlights: string[];
  popularLocations: string[];
};

export const startups: Startup[] = data.startups;
export const founders: Founder[] = data.founders;
export const investors: Investor[] = data.investors;
export const jobs: Job[] = data.jobs;
export const industryHighlights = data.industryHighlights;
export const popularLocations = data.popularLocations;

export function getStartupBySlug(slug: string) {
  return startups.find((startup) => startup.slug === slug);
}

export function getFeaturedStartups() {
  return startups.slice(0, 3);
}
