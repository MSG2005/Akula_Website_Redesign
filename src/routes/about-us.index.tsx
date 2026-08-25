import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { SideRail } from "@/components/editorial/SideRail";
import { TeamGrid } from "@/components/editorial/TeamGrid";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Arrow, Eyebrow } from "@/components/editorial/primitives";
import { hubs } from "@/data/content";
import { principles, site } from "@/data/site";

const title = "About Akula & Associates | Dallas Immigration Law Firm";
const description =
  "A full-service immigration law firm based in Dallas, Texas serving businesses, multinational corporations, families and high net worth individuals worldwide.";

export const Route = createFileRoute("/about-us/")({
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
  component: AboutPage,
});

function AboutPage() {
  const hub = hubs['about']!;
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About us"
          title={hub.title}
          subtitle={hub.subtitle}
          crumbs={[{ label: "Home", to: "/" }]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={hub.blocks} />
              <Link
                to="/about-us/why-akula"
                className="ed-nav group mt-10 inline-flex items-center gap-2 text-blue"
              >
                Why choose Akula & Associates
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </div>
            <SideRail
              image={site.officeImage}
              imageAlt="Akula & Associates office interior in Dallas, Texas"
              heading="A firm built on principle"
              blurb={principles.slice(0, 3).join(" · ")}
              facts={[]}
              links={[
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Immigration services", to: "/immigration-services" },
                { label: "Meet the team", to: "/our-team" },
              ]}
            />
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="ed-container">
            <Eyebrow lines={["Your immigration legal team"]} />
            <h2 className="ed-section-title mt-6 mb-10">Attorneys</h2>
            <TeamGrid />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
