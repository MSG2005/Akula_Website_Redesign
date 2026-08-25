import { Link } from "@tanstack/react-router";
import { servicePages } from "@/data/content";
import { categories } from "@/data/site";
import { serviceLabel } from "@/lib/labels";
import { Arrow, Reveal } from "./primitives";

export function ServiceIndex({
  only,
  compact = false,
}: {
  only?: "employment" | "family";
  compact?: boolean;
}) {
  const shown = only ? categories.filter((c) => c.key === only) : categories;

  return (
    <div className="flex flex-col gap-16">
      {shown.map((category) => {
        const pages = servicePages.filter((page) => page.category === category.key);
        return (
          <div key={category.key}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <h2 className="ed-section-title text-[clamp(28px,3.4vw,44px)]">{category.title}</h2>
                {!compact && (
                  <p className="ed-body mt-3 max-w-[520px] text-gray">{category.description}</p>
                )}
              </div>
              <Link
                to="/immigration-services/$category"
                params={{ category: category.slug }}
                className="ed-nav group inline-flex items-center gap-2 text-blue"
              >
                Category overview
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page, i) => (
                <Reveal as="li" key={page.slug} delay={Math.min(i, 8) * 40}>
                  <Link
                    to="/immigration-services/$category/$slug"
                    params={{ category: category.slug, slug: page.slug }}
                    className="ed-card group flex h-full flex-col gap-2 p-5"
                  >
                    <span className="ed-label text-gray">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ed-card-title flex items-start justify-between gap-3 text-[17px]">
                      {serviceLabel(page)}
                      <span className="text-blue opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                        <Arrow direction="up-right" />
                      </span>
                    </span>
                    <span className="text-[13px] leading-[1.5] text-gray">{page.title}</span>
                  </Link>
                </Reveal>
              ))}
              <Reveal as="li" delay={Math.min(pages.length, 8) * 40}>
                <Link
                  to="/contact"
                  className="ed-card group flex h-full flex-col justify-between gap-3 bg-dark p-5 text-dark-foreground"
                >
                  <span className="ed-label text-dark-foreground/50">Not sure which one?</span>
                  <span className="ed-card-title text-[17px] text-dark-foreground">
                    Tell us about your case and we&rsquo;ll match you to the right petition.
                  </span>
                  <span className="ed-nav inline-flex items-center gap-2 text-blue">
                    Request a consultation
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow direction="up-right" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
