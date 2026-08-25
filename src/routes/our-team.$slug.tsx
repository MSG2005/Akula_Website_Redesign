import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { Prose } from "@/components/editorial/Prose";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { SideRail } from "@/components/editorial/SideRail";
import { Arrow, Eyebrow } from "@/components/editorial/primitives";
import { attorneys } from "@/data/content";
import { attorneyMeta, site } from "@/data/site";

export const Route = createFileRoute("/our-team/$slug")({
  loader: ({ params }) => {
    const attorney = attorneys.find((item) => item.slug === params.slug);
    if (!attorney) throw notFound();
    return { attorney };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Attorney not found" }, { name: "robots", content: "noindex" }] };
    }
    const { attorney } = loaderData;
    const title = `${attorney.name} | ${attorney.role} | Akula & Associates`;
    const description = `${attorney.name}, ${attorney.role} at Akula & Associates P.C., a full-service immigration law firm in Dallas, Texas.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: AttorneyNotFound,
  component: AttorneyPage,
});

function AttorneyNotFound() {
  return (
    <>
      <Header />
      <main className="ed-container py-28">
        <h1 className="ed-section-title">Attorney not found</h1>
        <Link to="/our-team" className="ed-nav mt-6 inline-flex items-center gap-2 text-blue">
          Back to our team <Arrow />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function AttorneyPage() {
  const { attorney } = Route.useLoaderData();
  const meta = attorneyMeta[attorney.slug];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border bg-dark text-dark-foreground">
          <div className="ed-container grid grid-cols-4 gap-10 py-16 md:grid-cols-8 md:py-24 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-5 lg:col-span-7">
              <Eyebrow lines={["Attorney profile"]} tone="dark" />
              <h1 className="ed-display mt-6">{attorney.name}</h1>
              <p className="ed-label mt-5 text-blue">{attorney.role}</p>
              {meta?.caseTypes && (
                <div className="mt-10">
                  <p className="ed-label text-dark-foreground/50">Case types</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {meta.caseTypes.map((type) => (
                      <li key={type} className="ed-nav border border-dark-border px-3 py-2">
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={site.consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="ed-nav group mt-10 inline-flex h-[46px] items-center gap-2 bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark"
              >
                Schedule a consultation
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow direction="up-right" />
                </span>
              </a>
              <p className="ed-body mt-6 max-w-[520px] text-dark-foreground/60">
                Expedited or emergency appointment requests, please email{" "}
                <a href={`mailto:${site.expeditedEmail}`} className="text-blue">
                  {site.expeditedEmail}
                </a>
                .
              </p>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:col-start-9 flex items-start">
              <img
                src={meta?.photo}
                alt={`${attorney.name}, ${attorney.role}`}
                className="w-full max-w-[380px] border border-dark-border object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              {attorney.summary && (
                <p className="ed-body mb-10 border-l-2 border-blue pl-6 text-[17px] leading-[1.7]">
                  {attorney.summary}
                </p>
              )}
              <Prose blocks={attorney.blocks} />

              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { t: "Direct attorney access", d: "You work with your attorney, not a call queue — clear answers at every stage." },
                  { t: "Strategy first", d: "Every case starts with an honest assessment of the strongest available path." },
                  { t: "Global reach", d: "Clients across the U.S. and abroad, served in more than ten languages." },
                ].map((item) => (
                  <div key={item.t} className="ed-card p-5">
                    <h3 className="ed-card-title text-[16px]">{item.t}</h3>
                    <p className="ed-body mt-2 text-[13px] leading-[1.6] text-gray">{item.d}</p>
                  </div>
                ))}
              </div>

              <Link to="/our-team" className="ed-nav mt-12 inline-flex items-center gap-2 text-blue">
                All attorneys <Arrow />
              </Link>
            </div>

            <SideRail
              image={site.officeImage}
              imageAlt="Akula & Associates office"
              heading={`Work with ${attorney.name.split(" ")[0]}`}
              blurb={`Schedule a consultation to discuss your matter directly with ${attorney.name}, ${attorney.role.toLowerCase()}.`}
              links={[
                { label: "Immigration services", to: "/immigration-services" },
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Contact", to: "/contact" },
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
