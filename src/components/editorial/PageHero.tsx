import { Link } from "@tanstack/react-router";
import { Arrow, Eyebrow } from "./primitives";
import { site, stats } from "@/data/site";

export type Crumb = { label: string; to: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  subtitle?: string | null;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-border bg-dark text-dark-foreground">
      <div className="ed-container grid grid-cols-4 gap-10 py-16 md:grid-cols-8 md:py-24 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
        <Eyebrow lines={[eyebrow]} tone="dark" />

        <h1 className="ed-display mt-6 max-w-[16ch]">{title}</h1>

        {subtitle ? (
          <p className="ed-body mt-6 max-w-[620px] text-[15px] leading-[1.7] text-dark-foreground/70">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to="/contact"
            className="ed-nav group inline-flex h-[46px] items-center rounded-full gap-2 bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark"
          >
            Contact our team today
            <span className="transition-transform group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
          <a href={site.phoneHref} className="ed-nav text-dark-foreground/70 transition-colors hover:text-dark-foreground">
            {site.phone}
          </a>
        </div>

        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-12 border-t border-dark-border pt-4">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((crumb) => (
                <li key={crumb.to} className="ed-label flex items-center gap-2 text-dark-foreground/50">
                  <Link to={crumb.to} className="transition-colors hover:text-blue">
                    {crumb.label}
                  </Link>
                  <span aria-hidden>/</span>
                </li>
              ))}
              <li className="ed-label text-dark-foreground/80">{title}</li>
            </ol>
          </nav>
        )}
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="ed-label text-dark-foreground/50">By the numbers</p>
          <dl className="mt-4 border-t border-dark-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-4 border-b border-dark-border py-3">
                <dt className="ed-card-title text-[24px] text-blue">{stat.value}</dt>
                <dd className="ed-body text-[13px] leading-[1.5] text-dark-foreground/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <p className="ed-body mt-6 text-[13px] leading-[1.7] text-dark-foreground/60">
            {site.address.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
