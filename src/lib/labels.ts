import { labelOverrides, categories } from "@/data/site";
import type { ServicePage } from "@/data/content";

export function serviceLabel(page: Pick<ServicePage, "slug" | "label">) {
  return labelOverrides[page.slug] ?? page.label;
}

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function categoryByKey(key: "employment" | "family") {
  return categories.find((category) => category.key === key)!;
}
