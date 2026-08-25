import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Arrow, Eyebrow } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="ed-container">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-4">
          <div className="col-span-4 md:col-span-4 lg:col-span-6 flex flex-col justify-center">
            <div className="ed-enter">
              <Eyebrow lines={site.eyebrow} />
            </div>

            <h1 className="ed-hero ed-enter mt-8 [animation-delay:120ms]">
              {site.heroTitle.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === site.heroHighlightIndex ? "text-blue" : ""}`}
                  style={
                    i === site.heroHighlightIndex
                      ? { fontFamily: "'Playfair Display', serif", textTransform: "none", fontStyle: "italic" }
                      : undefined
                  }
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="ed-body ed-enter mt-8 max-w-[460px] text-[15px] leading-[1.7] text-gray [animation-delay:240ms]">
              {site.heroDescription}
            </p>

            <div className="ed-enter mt-10 flex flex-wrap items-center gap-3 [animation-delay:340ms]">
              <Link
                to={site.primaryCTA.to}
                className="ed-nav group inline-flex h-[46px] items-center rounded-full gap-2 bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark"
              >
                {site.primaryCTA.label}
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
              <Link
                to={site.secondaryCTA.to}
                className="ed-btn-outline group"
              >
                {site.secondaryCTA.label}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <Arrow direction="up-right" />
                </span>
              </Link>
            </div>

            <a
              href={site.phoneHref}
              className="ed-enter mt-8 inline-flex items-baseline gap-3 [animation-delay:420ms]"
            >
              <span className="ed-label text-gray">Speak with an attorney</span>
              <span className="text-[22px] font-medium tracking-[-0.04em] text-ink transition-colors hover:text-blue">
                {site.phone}
              </span>
            </a>
          </div>

          <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-8 relative mt-12 md:mt-0">
            <div className="relative mx-auto flex aspect-4/5 max-w-[520px] items-end justify-center">
              <div
                className="ed-pop-in absolute bottom-[10%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-blue [animation-delay:200ms]"
                aria-hidden
              />
              <img
                src={site.heroImage}
                alt="Immigration attorney at Akula & Associates in Dallas, Texas"
                width={1024}
                height={1280}
                fetchPriority="high"
                className="ed-enter relative h-full w-auto object-cover object-bottom [animation-delay:120ms]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
