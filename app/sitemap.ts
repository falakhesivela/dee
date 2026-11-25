import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// One page for now. Add an entry here for every new page (e.g. one per service).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }];
}
