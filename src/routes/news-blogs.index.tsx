import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { SideRail } from "@/components/editorial/SideRail";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Reveal, Arrow } from "@/components/editorial/primitives";
import { posts } from "@/data/blog";
import { site } from "@/data/site";

const title = "News & Blogs | Akula & Associates P.C.";
const description =
  "Immigration news, insights and practical guidance from the Dallas immigration attorneys at Akula & Associates P.C.";

export const Route = createFileRoute("/news-blogs/")({
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
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="News & Blogs"
          title="Immigration news, insights & guidance"
          subtitle="Practical writing from our Dallas immigration team on visas, naturalization, policy changes and life after approval."
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Why Akula", to: "/about-us/why-akula" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 60}>
                    <Link
                      to="/news-blogs/$slug"
                      params={{ slug: post.slug }}
                      className="ed-card group flex h-full flex-col p-6 transition-colors hover:border-blue"
                    >
                      <span className="ed-label text-blue">{post.date}</span>
                      <h2 className="ed-card-title mt-4 text-[19px] leading-[1.3]">{post.title}</h2>
                      <p className="ed-body mt-3 text-[14px] leading-[1.7] text-gray">
                        {post.excerpt}…
                      </p>
                      <span className="ed-label mt-auto flex items-center gap-2 pt-6 text-ink transition-colors group-hover:text-blue">
                        Read article
                        <span className="transition-transform group-hover:translate-x-1">
                          <Arrow />
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
            <SideRail
              image={site.officeImage}
              imageAlt="Akula & Associates P.C. office in Dallas"
              heading="Have a question about your case?"
              blurb={`Our attorneys answer questions in plain language. Call ${site.phone} to speak with our Dallas team.`}
              facts={[]}
              links={[
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Our services", to: "/immigration-services" },
                { label: "Contact us", to: "/contact" },
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
