import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Reveal } from "@/components/editorial/primitives";
import { attorneys } from "@/data/content";
import { attorneyMeta, staff, caseManagers } from "@/data/site";

type Person = { name: string; role: string; photo: string; summary?: string };

function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {people.map((person, i) => (
        <Reveal as="li" key={person.name} delay={i * 80}>
          <div className="group flex h-full flex-col border border-border bg-background transition-colors hover:bg-secondary">
            <div className="relative aspect-square overflow-hidden bg-dark">
              <img
                src={person.photo}
                alt={`${person.name}, ${person.role} at Akula & Associates`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-3">
              <h3 className="ed-card-title text-[13px]">{person.name}</h3>
              <p className="ed-label text-[10px] text-gray">{person.role}</p>
              {person.summary && (
                <p className="ed-body mt-1.5 text-[12px] leading-[1.5] text-gray">
                  {person.summary}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

const title = "Meet the Full Team | Akula & Associates Immigration Law Firm";
const description =
  "Meet the full Akula & Associates P.C. team — our immigration attorneys and the professional staff who support every client matter in Dallas, Texas.";

export const Route = createFileRoute("/our-team/full-team")({
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
  component: FullTeamPage,
});

function FullTeamPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Meet the full team"
          title="Everyone behind your case"
          subtitle="Attorneys and professional staff working together on every immigration matter — from first consultation to final approval."
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Our Team", to: "/our-team" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container">
            <h2 className="ed-section-title mb-8 text-[clamp(22px,2.6vw,30px)]">Our Attorneys</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {attorneys.map((attorney, i) => {
                const meta = attorneyMeta[attorney.slug];
                return (
                  <Reveal as="li" key={attorney.slug} delay={i * 80}>
                    <Link
                      to="/our-team/$slug"
                      params={{ slug: attorney.slug }}
                      className="group flex h-full flex-col border border-border bg-background transition-colors hover:bg-secondary"
                    >
                      <div className="relative aspect-square overflow-hidden bg-dark">
                        <img
                          src={meta?.photo}
                          alt={`${attorney.name}, ${attorney.role} at Akula & Associates`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1 p-3">
                        <h3 className="ed-card-title text-[13px]">{attorney.name}</h3>
                        <p className="ed-label text-[10px] text-gray">{attorney.role}</p>
                        {attorney.summary && (
                          <p className="ed-body mt-1.5 text-[12px] leading-[1.5] text-gray">
                            {attorney.summary}
                          </p>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>

            <h2 className="ed-section-title mt-20 mb-8 text-[clamp(22px,2.6vw,30px)]">
              Our Professional Staff
            </h2>
            <PeopleGrid people={staff} />

            <h2 className="ed-section-title mt-20 mb-8 text-[clamp(22px,2.6vw,30px)]">
              Case Managers
            </h2>
            <PeopleGrid people={caseManagers} />
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
