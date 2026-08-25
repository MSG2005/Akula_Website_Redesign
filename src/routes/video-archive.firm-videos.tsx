import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { VideoCard } from "@/components/editorial/VideoCard";
import { Reveal } from "@/components/editorial/primitives";
import { firmVideos } from "@/data/videos";

const title = "Firm Videos | Akula & Associates P.C.";
const description =
  "The full firm video library from Akula & Associates P.C. — H-1B cap registration, EB-5, NIW, USCIS fee and processing updates, and every Talks with Toki episode.";

export const Route = createFileRoute("/video-archive/firm-videos")({
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
  component: FirmVideosPage,
});

function FirmVideosPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Firm videos"
          title="Firm Videos"
          subtitle={`All ${firmVideos.length} firm videos, newest first — immigration updates and practical guidance from our attorneys.`}
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Video Archive", to: "/video-archive" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {firmVideos.map((video) => (
              <Reveal key={video.slug} className="h-full">
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
