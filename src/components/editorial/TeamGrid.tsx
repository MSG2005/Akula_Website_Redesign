import { Link } from "@tanstack/react-router";
import { attorneys } from "@/data/content";
import { attorneyMeta } from "@/data/site";
import { Arrow, Reveal } from "./primitives";

export function TeamGrid() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {attorneys.map((attorney, i) => {
        const meta = attorneyMeta[attorney.slug];
        return (
          <Reveal as="li" key={attorney.slug} delay={i * 100}>
            <Link
              to="/our-team/$slug"
              params={{ slug: attorney.slug }}
              className="group flex h-full flex-col border border-border bg-background transition-colors hover:bg-secondary"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-dark">
                <img
                  src={meta?.photo}
                  alt={`${attorney.name}, ${attorney.role} at Akula & Associates`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="ed-card-title text-[clamp(16px,1.4vw,18px)]">{attorney.name}</h3>
                <p className="ed-label text-[11px] uppercase tracking-wide text-gray">{attorney.role}</p>
                {attorney.summary && (
                  <p className="ed-body mt-2 text-[14px] leading-[1.6] text-gray">
                    {attorney.summary}
                  </p>
                )}
                <span className="ed-nav mt-auto inline-flex items-center gap-2 pt-4 text-[12px] text-blue">
                  Read profile
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
