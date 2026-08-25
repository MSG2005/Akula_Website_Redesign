import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Arrow } from "@/components/editorial/primitives";
import { servicePages } from "@/data/content";
import { site } from "@/data/site";
import { categoryBySlug, serviceLabel } from "@/lib/labels";

export const Route = createFileRoute("/immigration-services/$category/$slug")({
  loader: ({ params }) => {
    const category = categoryBySlug(params.category);
    const page = servicePages.find(
      (item) => item.slug === params.slug && item.category === category?.key,
    );
    if (!category || !page) throw notFound();
    const siblings = servicePages.filter(
      (item) => item.category === category.key && item.slug !== page.slug,
    );
    return { category, page, siblings };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.page.title} | Akula & Associates`;
    const description =
      loaderData.page.blocks.find((block) => block.type === "p")?.text.slice(0, 155) ??
      loaderData.page.subtitle ??
      loaderData.category.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
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

function ServiceDetail() {
  const { category, page, siblings } = Route.useLoaderData();

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={serviceLabel(page)}
          title={page.title}
          subtitle={page.subtitle}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/immigration-services" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-8">
              <Prose blocks={page.blocks} />
            </div>

            <aside className="col-span-4 md:col-span-8 lg:col-span-3 lg:col-start-10">
              <div className="border border-border p-6">
                <p className="ed-label text-gray">Speak with an attorney</p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-[22px] font-medium tracking-[-0.04em] transition-colors hover:text-blue"
                >
                  {site.phone}
                </a>
                <Link
                  to="/contact"
                  className="ed-nav group mt-6 inline-flex h-[42px] w-full items-center justify-center gap-2 bg-blue px-4 text-primary-foreground transition-colors hover:bg-blue-dark"
                >
                  Request a consultation
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </Link>
              </div>

              <p className="ed-label mt-10 text-gray">{category.title}</p>
              <ul className="mt-4 border-t border-border">
                {siblings.map((sibling) => (
                  <li key={sibling.slug} className="border-b border-border/60">
                    <Link
                      to="/immigration-services/$category/$slug"
                      params={{ category: category.slug, slug: sibling.slug }}
                      className="ed-body block py-2.5 transition-colors hover:text-blue"
                    >
                      {serviceLabel(sibling)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/immigration-services/$category"
                params={{ category: category.slug }}
                className="ed-nav group mt-6 inline-flex items-center gap-2 text-blue"
              >
                Category overview
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </aside>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
