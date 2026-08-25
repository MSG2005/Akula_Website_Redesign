import { Link } from "@tanstack/react-router";
import { servicePages } from "@/data/content";
import { serviceLabel } from "@/lib/labels";
import { Arrow, Reveal } from "./primitives";

const featuredSlugs = [
  "h-1b-visa",
  "eb-5-visa",
  "k-1-visas",
  "l-visas",
  "o-visas-p-visas",
  "citizenship-naturalization",
];

export function FeaturedServices() {
  const featured = featuredSlugs
    .map((slug) => servicePages.find((page) => page.slug === slug))
    .filter(Boolean);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((page, i) => {
          if (!page) return null;
          const category = page.category === "employment" ? "employment-based-visas" : "family-based-visas";
          return (
            <Reveal as="li" key={page.slug} delay={Math.min(i, 8) * 80}>
              <Link
                to="/immigration-services/$category/$slug"
                params={{ category, slug: page.slug }}
                className="ed-card group flex h-full flex-col gap-3 p-5"
              >
                <span className="ed-card-title flex items-start justify-between gap-3 text-[15px]">
                  {serviceLabel(page)}
                  <span className="text-blue opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    <Arrow direction="up-right" />
                  </span>
                </span>
                <span className="text-[13px] leading-[1.5] text-gray">{page.title}</span>
              </Link>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-10 flex justify-center">
        <Link
          to="/immigration-services"
          className="ed-nav group inline-flex items-center gap-2 rounded-full border border-ink bg-background px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-background"
        >
          See more
          <span className="transition-transform group-hover:translate-x-1">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
}
