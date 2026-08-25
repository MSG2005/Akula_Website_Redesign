import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Hero } from "@/components/editorial/Hero";
import { StatsBar } from "@/components/editorial/StatsBar";
import { Services } from "@/components/editorial/Services";
import { FeaturedServices } from "@/components/editorial/FeaturedServices";
import { TeamGrid } from "@/components/editorial/TeamGrid";
import { Testimonials } from "@/components/editorial/Testimonials";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Footer } from "@/components/editorial/Footer";
import { Arrow, Eyebrow, Reveal } from "@/components/editorial/primitives";
import { site } from "@/data/site";

const title = "Dallas Immigration Lawyer | Akula & Associates P.C.";
const description =
  "Akula & Associates P.C. is a full-service Dallas immigration law firm handling employment-based and family-based visas, green cards and citizenship worldwide.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />

        <section className="py-20 md:py-[100px]">
          <div className="ed-container">
            <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow lines={["Immigration services"]} />
                <h2 className="ed-section-title mt-4">
                  Featured visa
                  <br />
                  services
                </h2>
              </div>
              <p className="ed-body max-w-[480px] text-[15px] leading-[1.7] text-gray">
                From H-1B and EB-5 to K-1 fianc&eacute; visas &mdash; a sample of how we help
                businesses, families and investors navigate U.S. immigration.
              </p>
            </div>

            <div className="mt-10">
              <FeaturedServices />
            </div>
          </div>
        </section>

        <Services />

        <section className="border-y border-border bg-secondary py-20 md:py-[100px]">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-3">
              <Eyebrow lines={["Our team"]} />
              <h2 className="ed-section-title mt-6">
                Your legal
                <br />
                team
              </h2>
              <p className="ed-body mt-8 max-w-[420px] text-[15px] leading-[1.7] text-gray">
                Over 30 years of global business and industry-specific immigration law experience,
                delivered by a multilingual team that treats every case as its own.
              </p>
              <img
                src={site.journeyImage}
                alt="Families and professionals arriving in the United States"
                width={1400}
                height={1000}
                loading="lazy"
                className="mt-10 w-full object-cover"
              />
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4">
              <TeamGrid />
              <div className="mt-8 border-t border-border pt-6">
                <p className="ed-body max-w-[520px] text-[15px] leading-[1.7] text-gray">
                  Together we combine decades of experience in employment, family and investor
                  immigration — supported by a multilingual staff dedicated to clear communication
                  at every step.
                </p>
                <Link
                  to="/our-team"
                  className="ed-nav mt-4 inline-flex items-center gap-2 text-blue"
                >
                  Meet the full team
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <Testimonials />
        </Reveal>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
