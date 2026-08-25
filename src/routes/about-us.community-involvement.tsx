import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Prose } from "@/components/editorial/Prose";
import { SideRail } from "@/components/editorial/SideRail";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Eyebrow, Reveal } from "@/components/editorial/primitives";
import type { Block } from "@/data/content";
import { site } from "@/data/site";

const title = "Community Involvement | Akula & Associates P.C.";
const description =
  "Free immigration paperwork clinics, workshops, speaking engagements and cultural association sponsorships from Akula & Associates P.C. in Dallas, Texas.";

export const Route = createFileRoute("/about-us/community-involvement")({
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
  component: CommunityPage,
});

const blocks: Block[] = [
  {
    type: "p",
    text: "At Akula & Associates P.C., we view immigration law as a service to people and to the community we share. Our work does not end at the office door. We meet people where they are, listen to their stories, and stay present in the same neighborhoods, cultural centers and gathering spaces that our clients call home.",
  },
  {
    type: "p",
    text: "Our attorneys and staff bring the same care and attention to our community involvement that we bring to each case. We sit across the table from individuals and families, help them with immigration paperwork at no charge, and answer questions in plain language.",
  },
  { type: "h2", text: "Meeting People Where They Are" },
  {
    type: "p",
    text: "We take part in community events where people need clear, direct help with immigration forms and procedures. Our attorneys attend in person and walk participants through paperwork for free — explaining what each document means, what information it asks for, and how it fits into a larger process.",
  },
  {
    type: "p",
    text: "These meetings also give us a deeper understanding of the concerns, hopes and pressures that shape people's decisions. We see firsthand how policy changes and backlogs affect real lives, and that insight guides how we prepare clients for every step.",
  },
  { type: "h2", text: "Staying Connected With Cultural Associations" },
  {
    type: "p",
    text: "We belong to cultural associations that play a central role in the community we serve. Our team participates in events, listens to community feedback and shows up consistently so people know they can approach us with questions about immigration.",
  },
  {
    type: "p",
    text: "As part of this support, we offer sponsorship to cultural and community groups so local organisations can continue their programs, events and outreach. Our goal is to stand alongside the networks that already welcome immigrants.",
  },
  { type: "h2", text: "Free Workshops and Speaking Engagements" },
  {
    type: "p",
    text: "We regularly hold free workshops and speaking sessions on immigration topics, walking through current processes, recent changes and practical considerations for families, students, workers and employers — with time set aside for questions.",
  },
  {
    type: "p",
    text: "Offering these sessions at no cost opens the door for people who may not yet be ready to schedule a formal consultation. Education plays a central role in our community work because immigration rules change often.",
  },
  { type: "h2", text: "Lawyers as Counselors of People" },
  {
    type: "p",
    text: "Lawyers serve as counselors, not just technicians. When we sit with someone to review paperwork or answer a question at a workshop, we recognise that they bring more than documents — they bring fear, hope, memories and plans for the future.",
  },
  {
    type: "p",
    text: "We respond with patience, clarity and respect. By acknowledging the emotional side of immigration, we help build a setting where individuals feel seen and heard, not just processed.",
  },
  { type: "h2", text: "Creating a Sense of Safety and Belonging" },
  {
    type: "p",
    text: "When people know they can approach us at events, cultural gatherings or educational sessions, they often feel more confident asking difficult questions. We treat that trust as a responsibility — how we speak, listen and show up reflects our commitment to ethics, integrity and professionalism.",
  },
  { type: "h2", text: "How Community Work Shapes Our Firm Today" },
  {
    type: "p",
    text: "What we hear at free paperwork clinics and local events sharpens how we explain the process to clients, and it reinforces our focus on cultural awareness and multilingual support. Whether we assist with a form at a free clinic or guide a complex matter in our office, we carry the same values into every interaction.",
  },
];

const initiatives = [
  {
    number: "01",
    title: "Free paperwork clinics",
    text: "Attorneys attend community events in person and complete immigration forms with participants at no charge.",
  },
  {
    number: "02",
    title: "Cultural association membership",
    text: "Ongoing relationships and sponsorships with the cultural groups our clients gather around.",
  },
  {
    number: "03",
    title: "Workshops & speaking",
    text: "Free sessions on current immigration processes, recent changes and practical next steps.",
  },
  {
    number: "04",
    title: "Multilingual outreach",
    text: "Ten languages spoken in-house so questions can be asked and answered in a familiar language.",
  },
];

function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Community involvement"
          title="Community Involvement at Akula & Associates P.C."
          subtitle="Immigration law as a service to people — and to the community we share."
          crumbs={[
            { label: "Home", to: "/" },
            { label: "About", to: "/about-us" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Prose blocks={blocks.slice(0, 2)} />
              <Reveal>
                <figure className="ed-card mt-10 mb-10 overflow-hidden bg-secondary p-2">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/community-involvement-poster.jpg"
                    >
                      <source src="/community-involvement.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <figcaption className="ed-label px-3 py-3 text-gray">
                    Inside our community work
                  </figcaption>
                </figure>
              </Reveal>
              <Prose blocks={blocks.slice(2)} />
            </div>
            <SideRail
              image={site.journeyImage}
              imageAlt="Akula & Associates attorneys with community members"
              heading="Staying accessible"
              blurb={`Call ${site.phone} to learn more about our community participation or upcoming free educational events.`}
              facts={[]}
              links={[
                { label: "About the firm", to: "/about-us" },
                { label: "Why Akula", to: "/about-us/why-akula" },
                { label: "Contact us", to: "/contact" },
              ]}
            />
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-16 md:py-24">
          <div className="ed-container">
            <Eyebrow lines={["How we show up"]} />
            <h2 className="ed-section-title mt-6 mb-10">Community initiatives</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {initiatives.map((item, i) => (
                <Reveal key={item.number} delay={i * 80}>
                  <div className="ed-card h-full bg-background p-6">
                    <span className="ed-label text-blue">{item.number}</span>
                    <h3 className="ed-card-title mt-4 text-[17px]">{item.title}</h3>
                    <p className="ed-body mt-3 text-[14px] leading-[1.7] text-gray">{item.text}</p>
                  </div>
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
