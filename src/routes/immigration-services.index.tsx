import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { ServiceIndex } from "@/components/editorial/ServiceIndex";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { SideRail } from "@/components/editorial/SideRail";
import { hubs } from "@/data/content";
import { site } from "@/data/site";

const title = "Immigration Services | Dallas Immigration Lawyer";
const description =
  "Comprehensive U.S. visa assistance in Dallas: employment-based visas, family-based petitions, green cards, waivers, adjustment of status and naturalization.";

export const Route = createFileRoute("/immigration-services/")({
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
  component: ServicesPage,
});

function ServicesPage() {
  const hub = hubs["services"]!;
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Immigration services"
          title={hub.title}
          subtitle={hub.subtitle}
          crumbs={[{ label: "Home", to: "/" }]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container">
            <ServiceIndex />
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={hub.blocks} />
            </div>
            <SideRail
              image={site.officeImage}
              imageAlt="Akula & Associates immigration practice"
              heading="Not sure which visa fits?"
              blurb="Share a few details about your goals and timeline. We will identify the categories you qualify for and the documents you need."
              links={[
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Meet the team", to: "/our-team" },
                { label: "Request a consultation", to: "/contact" },
              ]}
            />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
