import { navItems } from "@/content/site";
import { services } from "@/content/services";
import { products } from "@/content/products";
import { downloads } from "@/content/downloads";

export interface SearchEntry {
  title: string;
  description: string;
  to: string;
  group: string;
}

/** Lightweight client-side index used by the site-wide search overlay. */
export const searchIndex: SearchEntry[] = [
  ...navItems.map((item) => ({
    title: item.label,
    description: `Navigate to the ${item.label} page`,
    to: item.to,
    group: "Pages",
  })),
  { title: "Get a Quote", description: "Request a quotation for your project", to: "/contact#quote", group: "Pages" },
  ...services.map((service) => ({
    title: service.title,
    description: service.summary,
    to: `/services/${service.slug}`,
    group: "Services",
  })),
  ...products.map((product) => ({
    title: product.name,
    description: product.description,
    to: `/products?category=${product.category}&q=${encodeURIComponent(product.name)}`,
    group: "Products",
  })),
  ...downloads.map((doc) => ({
    title: doc.title,
    description: doc.description,
    to: "/downloads",
    group: "Downloads",
  })),
];

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = searchIndex
    .map((entry) => {
      const haystack = `${entry.title} ${entry.description} ${entry.group}`.toLowerCase();
      const titleHit = entry.title.toLowerCase().includes(q);
      const descHit = haystack.includes(q);
      let score = 0;
      if (entry.title.toLowerCase().startsWith(q)) score += 6;
      if (titleHit) score += 4;
      if (descHit) score += 1;
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.entry);
}
