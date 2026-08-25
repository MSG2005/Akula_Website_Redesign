import { Link } from "@tanstack/react-router";
import { site, categories } from "@/data/site";
const logoLight = "/akula-logo-light.png";

const footerNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Why Akula", to: "/about-us/why-akula" },
  { label: "Services", to: "/immigration-services" },
  { label: "Our Team", to: "/our-team" },
  { label: "Contact", to: "/contact" },
];

const resourceNav = [
  { label: "Community Involvement", to: "/about-us/community-involvement" },
  { label: "Video Archive", to: "/video-archive" },
  { label: "Immigration Links", to: "/immigration-links" },
  { label: "Reviews", to: "/testimonials" },
  { label: "Careers", to: "/careers" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/AkulaLaw",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.28 3.5c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.73v8h3.27Z",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/akulalaw",
    path: "M17.3 3h3.1l-6.77 7.74L21.7 21h-6.23l-4.88-6.38L4.99 21H1.87l7.24-8.28L2.1 3h6.39l4.41 5.83L17.3 3Zm-1.09 16.13h1.72L7.86 4.78H6.02l10.19 14.35Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akulalaw/",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.1a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4Zm0 11.05a4.35 4.35 0 1 1 0-8.7 4.35 4.35 0 0 1 0 8.7Zm8.53-11.32a1.56 1.56 0 1 1-3.13 0 1.56 1.56 0 0 1 3.13 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kavitha-akula-36a2597",
    path: "M6.94 8.5v12H3.2v-12h3.74Zm.25-3.62c0 1.08-.81 1.94-2.12 1.94h-.02C3.79 6.82 3 5.96 3 4.88 3 3.78 3.83 2.94 5.1 2.94c1.28 0 2.07.84 2.09 1.94ZM21 13.62V20.5h-3.73v-6.45c0-1.62-.58-2.73-2.03-2.73-1.11 0-1.77.75-2.06 1.47-.1.26-.13.62-.13.98v6.73H9.3s.05-10.92 0-12.05h3.74v1.71c.5-.77 1.38-1.87 3.37-1.87 2.46 0 4.3 1.61 4.3 5.07Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@akulaassociatesp.c.5105",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z",
  },
];


export function Footer() {
  return (
    <footer className="border-t border-border bg-dark text-dark-foreground">
        <div className="ed-container grid grid-cols-1 gap-10 py-12 md:grid-cols-8 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-4">
          <img
            src={logoLight}
            alt={`${site.legalName} — Attorneys at Law`}
            width={376}
            height={140}
            className="h-10 w-auto"
            loading="lazy"
          />
          <p className="ed-body mt-4 max-w-[280px] text-dark-foreground/60">
            {site.legalName} &mdash; Dallas immigration lawyers serving clients worldwide.
          </p>
          <address className="ed-body mt-4 not-italic text-dark-foreground/60">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={site.phoneHref} className="ed-nav mt-3 block text-blue">
            {site.phone}
          </a>

          <p className="ed-label mt-6 text-dark-foreground/50">Follow us</p>
          <ul className="mt-3 flex flex-wrap items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-dark-border text-dark-foreground/70 transition-colors hover:border-blue hover:bg-blue hover:text-dark"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.google.com/maps/place/Akula+%26+Associates+P.C/@32.9873174,-96.8297969,17z/data=!3m1!4b1!4m5!3m4!1s0x864c23fc7acd4d1d:0xcb09ab4befc601d3!8m2!3d32.9873174!4d-96.8276082?rlz=1C1CHBF_enUS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Google Maps"
                title="Find us on Google Maps"
                className="flex h-10 w-10 items-center justify-center border border-dark-border text-dark-foreground/70 transition-colors hover:border-blue hover:bg-blue hover:text-dark"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>


        <div className="md:col-span-2 lg:col-span-2">
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="ed-body text-dark-foreground/70 transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <p className="ed-label text-dark-foreground/50">Resources</p>
          <ul className="mt-4 space-y-2">
            {resourceNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="ed-body text-dark-foreground/70 transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <p className="ed-label text-dark-foreground/50">Practice areas</p>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.key}>
                <Link
                  to="/immigration-services/$category"
                  params={{ category: category.slug }}
                  className="ed-body text-dark-foreground/70 transition-colors hover:text-blue"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ed-container flex flex-wrap items-center justify-between gap-3 border-t border-dark-border py-6">
        <p className="ed-label text-dark-foreground/50">
          &copy; {new Date().getFullYear()} {site.legalName}
        </p>
        <p className="ed-label text-dark-foreground/50">
          Attorney advertising. Prior results do not guarantee a similar outcome.
        </p>
      </div>
    </footer>
  );
}
