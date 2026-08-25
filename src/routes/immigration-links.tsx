import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { SideRail } from "@/components/editorial/SideRail";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Arrow, Eyebrow, Reveal } from "@/components/editorial/primitives";
import { site } from "@/data/site";

const title = "Immigration Links | Akula & Associates P.C.";
const description =
  "Official USCIS, Department of Labor, Department of State, ICE, embassy and immigration association resources, forms and case-status tools, curated by Akula & Associates P.C.";

export const Route = createFileRoute("/immigration-links")({
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
  component: ImmigrationLinksPage,
});

type Group = { title: string; note?: string; links: { label: string; href: string }[] };

const groups: Group[] = [
  {
    title: "USCIS News and Updates",
    links: [
      {
        label: "USCIS Will Temporarily Suspend Premium Processing for All H-1B Petitions",
        href: "https://www.uscis.gov/archive-alerts/uscis-will-temporarily-suspend-premium-processing-for-all-h-1b-petitions",
      },
      {
        label: "DHS Publishes Final International Entrepreneur Rule",
        href: "https://www.uscis.gov/archive/dhs-publishes-final-international-entrepreneur-rule",
      },
    ],
  },
  {
    title: "Form I-9 Resources",
    links: [
      {
        label: "Form I-9, Employment Eligibility Verification",
        href: "https://www.uscis.gov/sites/default/files/document/forms/i-9.pdf",
      },
      {
        label: "M-274, Handbook for Employers: Instructions on Completing Form I-9",
        href: "https://www.uscis.gov/i-9-central/form-i-9-resources/handbook-for-employers-m-274",
      },
      {
        label: "M-584: I Am an Employer: How Do I…Complete Form I-9, Employment Verification?",
        href: "https://www.uscis.gov/sites/default/files/document/guides/E3en.pdf",
      },
    ],
  },
  {
    title: "Common Immigration Forms and Information",
    note: "USCIS and U.S. Department of State. Forms are available in PDF.",
    links: [
      { label: "USCIS Website with Forms", href: "https://www.uscis.gov/forms/all-forms" },
      {
        label: "Medical Exam / Civil Surgeons List",
        href: "https://www.uscis.gov/tools/designated-civil-surgeons",
      },
    ],
  },
  {
    title: "USCIS Processing Times",
    links: [
      { label: "Check USCIS Online Processing Times", href: "https://egov.uscis.gov/processing-times/" },
      { label: "USCIS Case Status Service Online", href: "https://egov.uscis.gov/" },
    ],
  },
  {
    title: "U.S. Citizenship and Immigration Services (USCIS)",
    links: [
      { label: "USCIS Homepage", href: "https://www.uscis.gov/" },
      { label: "USCIS Case Status System", href: "https://egov.uscis.gov/" },
      { label: "USCIS Change of Address Online", href: "https://egov.uscis.gov/coa/displayCOAForm.do" },
      { label: "USCIS Service and Office Locator", href: "https://egov.uscis.gov/office-locator/#/" },
      {
        label: "USCIS Federal Regulations (Title 8 of Code of Federal Regulations)",
        href: "https://www.ecfr.gov/current/title-8",
      },
      { label: "USCIS Official Interpretations of the Laws", href: "https://www.uscis.gov/laws-and-policy" },
      { label: "USCIS Website with Forms", href: "https://www.uscis.gov/forms/all-forms" },
      {
        label: "Board of Immigration Appeals (BIA) Decisions",
        href: "https://www.justice.gov/eoir/ag-bia-decisions",
      },
      {
        label: "EOIR Virtual Library and Immigration Research Center",
        href: "https://www.justice.gov/eoir/virtual-law-library",
      },
      {
        label: "Immigration and Nationality Act",
        href: "https://www.uscis.gov/laws-and-policy/legislation/immigration-and-nationality-act",
      },
    ],
  },
  {
    title: "U.S. Department of Labor (DOL)",
    links: [
      { label: "Regional Offices", href: "https://www.dol.gov/agencies/wb/contact/regions" },
      { label: "Occupational Outlook Handbook", href: "https://www.bls.gov/ooh/" },
      { label: "Dictionary of Occupational Titles", href: "http://www.oalj.dol.gov/libdot.htm" },
      {
        label: "Alien Labor Certification Office of the Administrative Law Judges",
        href: "http://www.oalj.dol.gov/",
      },
      {
        label: "Board of Alien Labor Certification Appeals (BALCA) Decisions",
        href: "http://www.oalj.dol.gov/libina.htm",
      },
      {
        label: "Code of Federal Regulations — Title 20 C.F.R. (Employment and Training Administration)",
        href: "https://www.dol.gov/general/cfr/title_20",
      },
      {
        label: "Wage and Hour Division Regulatory Library",
        href: "https://www.dol.gov/agencies/whd/laws-and-regulations",
      },
      { label: "Foreign Labor Certification", href: "https://www.foreignlaborcert.doleta.gov/about.cfm" },
    ],
  },
  {
    title: "U.S. Department of State (DOS)",
    links: [
      { label: "Department of State Homepage", href: "https://www.state.gov/" },
      {
        label: "Department of State Federal Regulations (Title 22 of Code of Federal Regulations)",
        href: "https://www.govinfo.gov/app/details/CFR-2002-title22-vol1",
      },
      { label: "U.S. Passport Services", href: "https://travel.state.gov/content/travel/en/passports.html" },
      { label: "Federal Register", href: "https://www.archives.gov/federal-register" },
    ],
  },
  {
    title: "U.S. Immigration and Customs Enforcement (ICE)",
    links: [
      { label: "U.S. Immigration and Customs Enforcement (ICE)", href: "https://www.ice.gov/" },
      {
        label: "Student and Exchange Visitor Information System (SEVIS) — F, M, J Visas",
        href: "https://www.ice.gov/sevis",
      },
    ],
  },
  {
    title: "Embassies & Consulates",
    links: [
      {
        label: "Websites of U.S. Embassies and Other Diplomatic Missions",
        href: "https://www.usembassy.gov/",
      },
      { label: "List of Foreign Embassies & Consulates in D.C.", href: "https://www.embassy.org/embassies/" },
    ],
  },
  {
    title: "Immigration Related Associations",
    links: [
      { label: "American Immigration Lawyers Association (AILA)", href: "https://www.aila.org/" },
      { label: "American Immigration Council (AIC)", href: "https://www.americanimmigrationcouncil.org/" },
      { label: "Essential Worker Immigration Coalition (EWIC)", href: "https://ewic.org/" },
      { label: "National Immigration Forum", href: "https://immigrationforum.org/" },
      { label: "U.S. Committee for Refugees and Immigrants", href: "https://refugees.org/" },
    ],
  },
];

function ImmigrationLinksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Immigration links"
          title="Immigration Links"
          subtitle="Official government resources, forms, case-status tools and immigration associations — gathered in one place."
          crumbs={[
            { label: "Home", to: "/" },
            { label: "Why Akula", to: "/about-us/why-akula" },
          ]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 flex flex-col gap-12 md:col-span-8 lg:col-span-8">
              {groups.map((group, gi) => (
                <Reveal key={group.title + gi}>
                  <div>
                    <div className="border-b border-border pb-3">
                      <h2 className="ed-section-title text-[clamp(22px,2.4vw,30px)]">{group.title}</h2>
                      {group.note && <p className="ed-body mt-2 text-[14px] text-gray">{group.note}</p>}
                    </div>
                    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {group.links.map((link) => (
                        <li key={link.label + link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ed-card group flex h-full items-start justify-between gap-3 p-4 text-[14px] leading-[1.5]"
                          >
                            <span>{link.label}</span>
                            <span className="mt-0.5 shrink-0 text-blue opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                              <Arrow direction="up-right" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <SideRail
              image={site.officeImage}
              imageAlt="Akula & Associates P.C. office in Dallas, Texas"
              heading="Need help using these?"
              blurb={`Government sites change often. Call ${site.phone} and our team will point you to the right form and current processing timeline.`}
              facts={[]}
              links={[
                { label: "Immigration services", to: "/immigration-services" },
                { label: "News blogs", to: "/news-blogs" },
                { label: "Contact us", to: "/contact" },
              ]}
            />
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-16 md:py-24">
          <div className="ed-container">
            <Eyebrow lines={["A note on external resources"]} />
            <h2 className="ed-section-title mt-6 mb-6 max-w-[760px]">
              Official sources first — then a conversation with your attorney.
            </h2>
            <p className="ed-body max-w-[720px] text-gray">
              These links lead to government agencies and independent organisations. Their content, forms and
              processing times are updated on their own schedule, and nothing on those sites is legal advice
              for your specific matter. If anything is unclear, we are happy to walk through it with you.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
