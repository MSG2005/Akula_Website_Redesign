import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { SideRail } from "@/components/editorial/SideRail";
import { Services } from "@/components/editorial/Services";
import { Testimonials } from "@/components/editorial/Testimonials";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { hubs } from "@/data/content";
import { site } from "@/data/site";

const title = "Why Akula & Associates P.C. | Dallas Immigration Attorneys";
const description =
  "Experience, diversity, advanced technology and transparent pricing: why businesses and families choose Akula & Associates for their immigration matters.";

export const Route = createFileRoute("/about-us/why-akula")({
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
  component: WhyPage,
});

function WhyPage() {
  const hub = hubs['why']!;
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Why Akula"
          title={hub.title}
          subtitle={site.tagline}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "About", to: "/about-us" },
          ]}
        />
        <Services />
        <section className="border-t border-border py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={hub.blocks} />
            </div>
            <SideRail
              image={site.journeyImage}
              imageAlt="Akula & Associates attorneys at work"
              heading="Transparent from day one"
              blurb="Flat-fee options, direct attorney access and real-time case tracking — so you always know where your matter stands."
              links={[
                { label: "About the firm", to: "/about-us" },
                { label: "Client reviews", to: "/testimonials" },
                { label: "Contact us", to: "/contact" },
              ]}
            />
          </div>
        </section>
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
