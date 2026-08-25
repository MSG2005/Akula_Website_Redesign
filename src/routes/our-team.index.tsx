import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { TeamGrid } from "@/components/editorial/TeamGrid";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { SideRail } from "@/components/editorial/SideRail";
import { hubs } from "@/data/content";
import { site } from "@/data/site";

const title = "Our Team | Akula & Associates Immigration Attorneys in Dallas";
const description =
  "Meet the attorneys of Akula & Associates P.C. — over 30 years of global business and industry-specific immigration law experience in Dallas, Texas.";

export const Route = createFileRoute("/our-team/")({
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
  component: TeamPage,
});

function TeamPage() {
  const hub = hubs['team']!;
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our team"
          title="People"
          subtitle="Excellent legal representation and superb communication, from a multilingual team."
          crumbs={[{ label: "Home", to: "/" }]}
        />
        <section className="py-16 md:py-24">
          <div className="ed-container">
            <TeamGrid />
            <div className="mt-12 grid gap-8 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="ed-card-title mb-3">Collaborative approach</h3>
                <p className="ed-body text-[15px] leading-[1.7] text-gray">
                  Our attorneys work side-by-side across employment, family and investor immigration,
                  sharing insight so every petition benefits from the firm&apos;s full collective experience.
                </p>
              </div>
              <div>
                <h3 className="ed-card-title mb-3">Multilingual service</h3>
                <p className="ed-body text-[15px] leading-[1.7] text-gray">
                  We communicate clearly in English, Spanish, Hindi and Telugu, making complex immigration
                  processes easier to understand for clients and their families around the world.
                </p>
              </div>
              <div>
                <h3 className="ed-card-title mb-3">Client-first focus</h3>
                <p className="ed-body text-[15px] leading-[1.7] text-gray">
                  From start-ups to multinational companies, and from fianc&eacute; visas to citizenship,
                  we treat each matter with the personal attention it deserves.
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-7">
                <Prose blocks={hub.blocks} />

                <h3 className="ed-section-title mt-16 mb-6 text-[clamp(22px,2.6vw,30px)]">
                  How we work with you
                </h3>
                <ol className="border-t border-border">
                  {[
                    {
                      step: "01",
                      title: "Case assessment",
                      body: "We review your history, goals and timeline, then identify every category you realistically qualify for — including alternatives you may not have considered.",
                    },
                    {
                      step: "02",
                      title: "Strategy & documentation",
                      body: "Your attorney builds the filing strategy and a document checklist, coordinating with employers, family members and overseas counsel where needed.",
                    },
                    {
                      step: "03",
                      title: "Filing & tracking",
                      body: "Petitions are prepared in-house and tracked with modern case-management technology, so you receive real-time updates at every milestone.",
                    },
                    {
                      step: "04",
                      title: "Beyond approval",
                      body: "From extensions and adjustment of status to naturalisation, we stay with families and companies long after the first approval notice.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-6 border-b border-border/60 py-6">
                      <span className="ed-label pt-1 text-blue">{item.step}</span>
                      <div>
                        <h4 className="ed-card-title mb-2">{item.title}</h4>
                        <p className="ed-body text-[15px] leading-[1.7] text-gray">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

              </div>
              <SideRail
                image={site.journeyImage}
                imageAlt="Akula & Associates team"
                heading="Work with our attorneys"
                blurb="Each matter is handled personally by an attorney — no hand-offs, no call centres, and clear updates at every milestone."
                links={[
                  { label: "About the firm", to: "/about-us" },
                  { label: "Immigration services", to: "/immigration-services" },
                  { label: "Client reviews", to: "/testimonials" },
                ]}
              />
              <div className="ed-card col-span-4 grid md:col-span-8 md:grid-cols-3 lg:col-span-12">
                <div className="border-b border-border p-7 md:border-r md:border-b-0 lg:p-8">
                  <p className="ed-label text-gray">Our promise</p>
                  <p className="ed-body mt-4 text-[17px] leading-[1.6]">
                    Unparalleled dedication, transparent pricing and one-on-one attention.
                  </p>
                </div>
                <div className="border-b border-border p-7 md:border-r md:border-b-0 lg:p-8">
                  <p className="ed-label text-gray">Attorney-led service</p>
                  <p className="ed-body mt-4 text-[17px] leading-[1.6]">
                    Every strategy is shaped around your goals and guided by an experienced immigration attorney.
                  </p>
                </div>
                <div className="p-7 lg:p-8">
                  <p className="ed-label text-gray">Built on trust</p>
                  <p className="ed-body mt-4 text-[17px] leading-[1.6]">
                    Clear communication, ethical counsel and dependable support from consultation through decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
