import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { ServiceIndex } from "@/components/editorial/ServiceIndex";
import { Testimonials } from "@/components/editorial/Testimonials";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Arrow } from "@/components/editorial/primitives";
import { SideRail } from "@/components/editorial/SideRail";
import { hubs } from "@/data/content";
import { site } from "@/data/site";
import { categoryBySlug } from "@/lib/labels";

export const Route = createFileRoute("/immigration-services/$category/")({
  loader: ({ params }) => {
    const category = categoryBySlug(params.category);
    if (!category) throw notFound();
    return { category, hub: hubs[category.key]! };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.hub.title} | Akula & Associates`;
    const description = loaderData.hub.subtitle ?? loaderData.category.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <>
      <Header />
      <main className="ed-container py-28">
        <h1 className="ed-section-title">Page not found</h1>
        <Link to="/immigration-services" className="ed-nav mt-6 inline-flex items-center gap-2 text-blue">
          All immigration services <Arrow />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function CategoryPage() {
  const { category, hub } = Route.useLoaderData();
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={category.title}
          title={hub.title}
          subtitle={hub.subtitle}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Immigration services", to: "/immigration-services" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container">
            <ServiceIndex only={category.key} compact />
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={hub.blocks} />
            </div>
            <SideRail
              image={category.key === "family" ? site.journeyImage : site.officeImage}
              imageAlt={`${category.title} — Akula & Associates`}
              heading="Questions about this category?"
              blurb="Tell us about your goals and timeline. We will confirm which petitions you qualify for and what documents to gather first."
              links={[
                { label: "All immigration services", to: "/immigration-services" },
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Request a consultation", to: "/contact" },
              ]}
            >
              <div className="mt-8 border-t border-border pt-6">
                <p className="ed-label text-gray">How the process works</p>
                <ol className="mt-4">
                  {[
                    "Case review — we map your eligibility and timeline.",
                    "Strategy — we select the strongest petition route.",
                    "Filing — documents prepared, reviewed and submitted.",
                    "Follow-through — updates until a decision is issued.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 border-b border-border/60 py-3">
                      <span className="ed-label text-blue">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ed-body text-[13px] leading-[1.6] text-gray">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="ed-card mt-8 bg-dark p-6 text-dark-foreground">
                <p className="ed-label text-dark-foreground/50">Client promise</p>
                <p className="ed-body mt-3 text-[13px] leading-[1.7] text-dark-foreground/80">
                  A named attorney on every matter, plain-language updates, and 24/7 case tracking
                  so you always know where your petition stands.
                </p>
              </div>
            </SideRail>
          </div>
        </section>

        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
