import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { Arrow, Eyebrow } from "./primitives";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-[100px]">
      <div className="ed-container">
        <div className="grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-5 lg:col-span-6">
            <Eyebrow lines={["Start your case"]} />
            <h2 className="ed-display mt-6">
              Let&rsquo;s discuss
              <br />
              <span className="text-blue">your options</span>
            </h2>
            <p className="ed-body mt-8 max-w-[460px] text-[15px] leading-[1.7] text-gray">
              Reach out to our experienced Dallas immigration attorneys for an initial consultation.
              We serve individuals and businesses across the United States and around the world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="ed-nav group inline-flex h-[46px] items-center rounded-full gap-2 bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark"
              >
                Contact the firm
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
              <a
                href={site.consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="ed-nav group inline-flex h-[46px] items-center rounded-full gap-2 border border-border px-6 transition-colors hover:border-blue hover:text-blue"
              >
                Schedule a consultation
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow direction="up-right" />
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-6 border-t border-border pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <div>
              <p className="ed-label text-gray">Call the firm</p>
              <a
                href={site.phoneHref}
                className="mt-2 block text-[26px] font-medium tracking-[-0.04em] transition-colors hover:text-blue"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="ed-label text-gray">Expedited / emergency requests</p>
              <a
                href={`mailto:${site.expeditedEmail}`}
                className="ed-body mt-2 block transition-colors hover:text-blue"
              >
                {site.expeditedEmail}
              </a>
            </div>
            <div>
              <p className="ed-label text-gray">Principal office</p>
              <address className="ed-body mt-2 not-italic text-ink">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div>
              <p className="ed-label text-gray">Language support</p>
              <p className="ed-body mt-2 text-ink">{site.languages.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
