import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Arrow } from "./primitives";
import { site, stats } from "@/data/site";

type RailProps = {
  image?: string;
  imageAlt?: string;
  heading?: string;
  blurb?: string;
  facts?: { label: string; value: string }[];
  links?: { label: string; to: string }[];
  showLanguages?: boolean;
  children?: ReactNode;
};

export function SideRail({
  image,
  imageAlt = "Akula & Associates",
  heading = "Talk to an attorney",
  blurb = "Every matter starts with a conversation. Tell us about your case and we will map out the fastest, most reliable path forward.",
  facts = stats.slice(0, 3).map((s) => ({ label: s.label, value: s.value })),
  links = [],
  showLanguages = true,
  children,
}: RailProps) {
  return (
    <aside className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
      <div className="lg:sticky lg:top-28">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            width={1400}
            height={1000}
            loading="lazy"
            className="mb-8 w-full border border-ink object-cover"
          />
        ) : null}

        <div className="ed-card p-6">
          <h3 className="ed-card-title">{heading}</h3>
          <p className="ed-body mt-3 text-[14px] leading-[1.7] text-gray">{blurb}</p>
          <a
            href={site.phoneHref}
            className="ed-nav mt-5 inline-flex h-[42px] items-center gap-2 rounded-full bg-blue px-5 text-primary-foreground transition-colors hover:bg-blue-dark"
          >
            {site.phone}
          </a>
        </div>

        {facts.length > 0 && (
          <dl className="mt-8 border-t border-border">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-4 border-b border-border/60 py-3">
                <dt className="ed-card-title text-[22px] text-blue">{fact.value}</dt>
                <dd className="ed-body text-[13px] leading-[1.5] text-gray">{fact.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {showLanguages && (
          <>
            <p className="ed-label mt-8 text-gray">Language support</p>
            <p className="ed-body mt-3 text-[14px] leading-[1.7]">{site.languages.join(" · ")}</p>
          </>
        )}

        <p className="ed-label mt-8 text-gray">Office</p>
        <p className="ed-body mt-3 text-[14px] leading-[1.7] text-gray">{site.address.join(", ")}</p>

        {children}

        {links.length > 0 && (
          <ul className="mt-8 border-t border-border">
            {links.map((link) => (
              <li key={link.to} className="border-b border-border/60">
                <Link
                  to={link.to}
                  className="ed-nav group flex items-center justify-between gap-3 py-3 transition-colors hover:text-blue"
                >
                  {link.label}
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
