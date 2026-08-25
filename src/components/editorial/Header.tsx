import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Arrow } from "./primitives";
const logoDark = "/akula-logo-dark-transparent.png";

const submenus: Record<string, { label: string; to: string }[]> = {
  "/our-team": [{ label: "Meet the Full Team", to: "/our-team/full-team" }],
  "/immigration-services": [
    { label: "Employment-Based Visas", to: "/immigration-services/employment-based-visas" },
    { label: "Family-Based Visas", to: "/immigration-services/family-based-visas" },
  ],
};


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="ed-container flex items-center justify-between gap-4 px-4 py-4 md:px-5 lg:px-6">
        <Link to="/" aria-label={site.legalName} className="shrink-0">
          <img
            src={logoDark}
            alt={`${site.legalName} — Attorneys at Law`}
            width={376}
            height={140}
            className="h-10 w-auto md:h-12"
          />
        </Link>


        <div className="hidden flex-1 items-center justify-end gap-8 lg:flex xl:gap-10">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-5 xl:gap-7">
              {site.nav.map((item) => {
                const children = submenus[item.to];
                const external = (item as { href?: string }).href;
                if (external) {
                  return (
                    <li key={item.label} className="shrink-0">
                      <a
                        href={external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ed-nav inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] text-ink transition-colors hover:text-blue lg:text-[12px]"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.label}
                        <Arrow direction="up-right" />
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item.label} className={children ? "group relative shrink-0" : "shrink-0"}>
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-blue" }}
                      inactiveProps={{ className: "text-ink" }}
                      className="ed-nav inline-flex items-center gap-1.5 whitespace-nowrap text-[10px] transition-colors hover:text-blue lg:text-[11px]"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {item.label}
                      {children && (
                        <span className="transition-transform group-hover:rotate-180">
                          <Arrow direction="down" />
                        </span>
                      )}
                    </Link>

                    {children && (
                      <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="ed-card w-[240px] bg-background p-2">
                          {children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="ed-nav group/item flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-secondary hover:text-blue"
                            >
                              {child.label}
                              <span className="transition-transform group-hover/item:translate-x-1">
                                <Arrow />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="ed-nav inline-flex h-[44px] w-[190px] items-center justify-center rounded-full bg-dark px-5 text-xs font-bold tracking-[0.08em] text-dark-foreground transition-colors hover:bg-dark/90"
            >
              {site.phone}
            </a>
            <a
              href={site.consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ed-nav group inline-flex h-[44px] w-[190px] items-center justify-center gap-2 rounded-full bg-blue px-5 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-blue-dark"
            >
              Book Consultation
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow direction="up-right" />
              </span>
            </a>
          </div>
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ed-nav lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border lg:hidden">
          <ul className="ed-container flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.label} className="border-b border-border/60 last:border-0">
                {(item as { href?: string }).href ? (
                  <a
                    href={(item as { href?: string }).href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="ed-nav block py-3.5"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.to} onClick={() => setOpen(false)} className="ed-nav block py-3.5">
                    {item.label}
                  </Link>
                )}
                {submenus[item.to]?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="ed-nav block pb-3.5 pl-4 text-blue"
                  >
                    {child.label}
                  </Link>
                ))}
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-3 py-3">
              <a
                href={site.phoneHref}
                className="ed-nav inline-flex h-[38px] items-center rounded-full bg-dark px-4 text-dark-foreground"
              >
                {site.phone}
              </a>
              <a
                href={site.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="ed-nav inline-flex h-[38px] items-center rounded-full bg-blue px-4 text-primary-foreground"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

