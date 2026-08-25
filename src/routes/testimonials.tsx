import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Eyebrow, Reveal } from "@/components/editorial/primitives";
import { site } from "@/data/site";
import { reviews } from "@/data/reviews";
const logoDark = "/akula-logo-dark-transparent.png";

const title = "Client Reviews & Testimonials | Akula & Associates P.C.";
const description =
  "Read reviews from businesses and families who worked with Akula & Associates P.C., a Dallas immigration law firm serving clients worldwide.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border bg-background py-16 md:py-24">
          <div className="ed-container">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow lines={["Testimonials"]} />
                <h1 className="ed-section-title mt-4">
                  Client success
                  <br />
                  stories
                </h1>
              </div>
              <img
                src={logoDark}
                alt={site.legalName}
                width={376}
                height={140}
                className="h-8 w-auto max-w-full object-contain opacity-90 sm:h-9 md:h-10 lg:h-12"
                loading="eager"
              />
            </div>

            <p className="ed-body mt-6 max-w-[620px] text-gray">
              {reviews.length} reviews from businesses, families and individuals we have represented.
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((item, i) => (
                <Reveal as="li" key={`${item.author}-${i}`} delay={Math.min(i, 8) * 60}>
                  <figure className="ed-card flex h-full flex-col gap-4 p-6">
                    <span className="text-4xl leading-none text-blue" aria-hidden>
                      &ldquo;
                    </span>
                    <p className="ed-card-title text-[16px] leading-[1.35]">{item.headline}</p>
                    {item.quote !== item.headline && (
                      <blockquote className="ed-body text-[14px] leading-[1.65] text-gray">
                        {item.quote}
                      </blockquote>
                    )}
                    <figcaption className="mt-auto pt-4">
                      <p className="ed-label">— {item.author}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>

          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
