import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { VideoCard } from "@/components/editorial/VideoCard";
import { Arrow, Eyebrow, Reveal } from "@/components/editorial/primitives";
import { firmVideos } from "@/data/videos";

const title = "Video Archive | Akula & Associates P.C.";
const description =
  "Watch firm videos from Akula & Associates P.C. — H-1B cap registration tips, EB-5, national interest waivers, USCIS updates and Talks with Toki.";

export const Route = createFileRoute("/video-archive/")({
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
  component: VideoArchivePage,
});

function VideoArchivePage() {
  const featured = firmVideos.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Video archive"
          title="Video Archive"
          subtitle="Stay up to date — immigration news, policy changes and practical filing guidance, explained by our attorneys."
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Why Akula", to: "/about-us/why-akula" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container">
            <Eyebrow lines={["View our firm videos below"]} />
            <h2 className="ed-section-title mt-6 mb-10 max-w-[760px]">Firm Videos</h2>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((video) => (
                <Reveal key={video.slug} className="h-full">
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>

            {firmVideos.length > featured.length && (
              <div className="mt-10 flex justify-center">
                <Link
                  to="/video-archive/firm-videos"
                  className="ed-nav group inline-flex items-center gap-3 rounded-full bg-blue px-7 py-3.5 text-background transition-transform hover:-translate-y-0.5"
                >
                  See more
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
