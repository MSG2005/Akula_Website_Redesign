import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { SideRail } from "@/components/editorial/SideRail";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Eyebrow, Reveal, Arrow } from "@/components/editorial/primitives";
import { posts, getPost } from "@/data/blog";
import { site } from "@/data/site";

export const Route = createFileRoute("/news-blogs/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Akula & Associates P.C." }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.post.title} | Akula & Associates P.C.`;
    const description = loaderData.post.excerpt.slice(0, 155);
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
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <>
      <Header />
      <main className="ed-container py-32 text-center">
        <h1 className="ed-section-title">Article not found</h1>
        <Link to="/news-blogs" className="ed-label mt-6 inline-block text-blue">
          Back to News & Blogs
        </Link>
      </main>
      <Footer />
    </>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={post.date}
          title={post.title}
          subtitle={`Published ${post.date} by ${site.legalName}`}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "News & Blogs", to: "/news-blogs" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={post.blocks} />
            </div>
            <SideRail
              image={site.journeyImage}
              imageAlt="Akula & Associates P.C. attorneys"
              heading="Talk to our team"
              blurb={`Questions about your own case? Call ${site.phone} to speak with a Dallas immigration attorney.`}
              facts={[]}
              links={[
                { label: "All articles", to: "/news-blogs" },
                { label: "Our services", to: "/immigration-services" },
                { label: "Contact us", to: "/contact" },
              ]}
            />
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-16 md:py-24">
          <div className="ed-container">
            <Eyebrow lines={["Keep reading"]} />
            <h2 className="ed-section-title mt-6 mb-10">More articles</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    to="/news-blogs/$slug"
                    params={{ slug: p.slug }}
                    className="ed-card group flex h-full flex-col bg-background p-6 transition-colors hover:border-blue"
                  >
                    <span className="ed-label text-blue">{p.date}</span>
                    <h3 className="ed-card-title mt-4 text-[17px] leading-[1.3]">{p.title}</h3>
                    <span className="ed-label mt-auto flex items-center gap-2 pt-6 transition-colors group-hover:text-blue">
                      Read
                      <span className="transition-transform group-hover:translate-x-1">
                        <Arrow />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
