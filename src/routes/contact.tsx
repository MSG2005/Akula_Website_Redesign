import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { Arrow } from "@/components/editorial/primitives";
import { site } from "@/data/site";

const title = "Contact a Dallas Immigration Lawyer | Akula & Associates";
const description =
  "Contact Akula & Associates P.C. in Dallas, Texas. Call (844) 299-5003 or send a message to request an initial immigration consultation.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const fieldClass =
  "ed-body h-[46px] w-full border border-border bg-background px-3 outline-none transition-colors focus:border-blue";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Contact our team today"
          subtitle={site.tagline}
          crumbs={[{ label: "Home", to: "/" }]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <h2 className="ed-section-title text-[clamp(28px,3.4vw,44px)]">Send a message</h2>
              <form
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <label className="flex flex-col gap-2">
                  <span className="ed-label text-gray">First name</span>
                  <input required name="firstName" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="ed-label text-gray">Last name</span>
                  <input required name="lastName" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="ed-label text-gray">Phone</span>
                  <input required type="tel" name="phone" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="ed-label text-gray">Email</span>
                  <input required type="email" name="email" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="ed-label text-gray">Are you a new client?</span>
                  <select name="clientType" className={fieldClass} defaultValue="new">
                    <option value="new">Yes, I am a potential new client</option>
                    <option value="existing">No, I&rsquo;m a current existing client</option>
                    <option value="neither">I&rsquo;m neither</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="ed-label text-gray">How can we help you?</span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="ed-body w-full border border-border bg-background p-3 outline-none transition-colors focus:border-blue"
                  />
                </label>

                <p className="ed-body sm:col-span-2 text-[12px] leading-[1.6] text-gray">
                  By submitting, you agree to receive text messages from {site.legalName} at the
                  number provided, including those related to your inquiry, follow-ups and review
                  requests, via automated technology. Consent is not a condition of purchase. Msg &
                  data rates may apply.
                </p>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="ed-nav group inline-flex h-[46px] items-center rounded-full gap-2 bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark"
                  >
                    Send message
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </button>
                  {sent && (
                    <p className="ed-body mt-4 text-blue" role="status">
                      Thank you — your message has been recorded. For urgent matters please call{" "}
                      {site.phone}.
                    </p>
                  )}
                </div>
              </form>
            </div>

            <aside className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
              <div className="border-t border-border pt-6">
                <p className="ed-label text-gray">Our location</p>
                <address className="mt-3 not-italic text-[18px] leading-[1.5]">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-nav mt-4 inline-flex items-center gap-2 text-blue"
                >
                  Map &amp; directions <Arrow direction="up-right" />
                </a>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <p className="ed-label text-gray">Phone</p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-[26px] font-medium tracking-[-0.04em] transition-colors hover:text-blue"
                >
                  {site.phone}
                </a>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <p className="ed-label text-gray">Expedited / emergency requests</p>
                <a
                  href={`mailto:${site.expeditedEmail}`}
                  className="ed-body mt-2 block transition-colors hover:text-blue"
                >
                  {site.expeditedEmail}
                </a>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <p className="ed-label text-gray">Schedule directly</p>
                <a
                  href={site.consultationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-nav mt-3 inline-flex items-center gap-2 text-blue"
                >
                  Book with Kavitha Akula <Arrow direction="up-right" />
                </a>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <p className="ed-label text-gray">Languages</p>
                <p className="ed-body mt-2">{site.languages.join(" · ")}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
