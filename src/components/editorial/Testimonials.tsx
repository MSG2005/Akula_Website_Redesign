import { Link } from "@tanstack/react-router";
import { testimonials, site } from "@/data/site";
const logoLight = "/akula-logo-light.png";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal } from "./primitives";
import { Arrow } from "./primitives";

export function Testimonials() {
  return (
    <section className="bg-dark py-20 text-dark-foreground md:py-[100px]">
      <div className="ed-container">
        <div className="flex flex-col gap-10 border-b border-dark-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow lines={["Testimonials"]} tone="dark" />
            <h2 className="ed-section-title mt-4">
              Clients on
              <br />
              the work
            </h2>
          </div>
          <img
            src={logoLight}
            alt={site.legalName}
            width={376}
            height={140}
            className="h-8 w-auto max-w-full object-contain opacity-90 sm:h-9 md:h-10 lg:h-12"
            loading="lazy"
          />
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.author} delay={i * 100}>
              <figure className="flex h-full flex-col gap-5">
                <span className="text-4xl leading-none text-blue" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="text-[13px] leading-[1.45] text-dark-foreground/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="ed-label">— {item.author}</p>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.06em] text-dark-foreground/50">
                    {item.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex justify-center border-t border-dark-border pt-8">
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-dark-border bg-transparent px-6 text-dark-foreground shadow-none hover:bg-dark-foreground hover:text-dark"
          >
            <Link to="/testimonials">
              See more reviews
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
