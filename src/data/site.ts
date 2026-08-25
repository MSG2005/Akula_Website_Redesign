import attorneyHero from "@/assets/attorney-hero.jpg";
import officeImage from "@/assets/office.jpg";
import journeyImage from "@/assets/journey.jpg";
const kavithaPhoto = "/kavitha-akula.png";
const katrinaPhoto = "/katrina-d-moore.png";
const ashleyPhoto = "/ashley-dennis.png";
const renukaPhoto = "/renuka-anumandla.png";
const inellaPhoto = "/inella-coleman.png";
const susanPhoto = "/susan-basemera.png";
const tracyPhoto = "/tracy-bernal.png";
const christiePhoto = "/christie-sourivong.png";
const anitaPhoto = "/anita-gandavadi.png";
const abigailPhoto = "/abigail-obidike.png";
const suengjaiPhoto = "/suengjai-cegon.png";
const pravalikaPhoto = "/pravalika-balaram.png";

export const site = {
  brand: ["Akula", "& Associates"],
  legalName: "Akula & Associates P.C.",
  status: "Serving clients worldwide",
  tagline: "Elevating immigration solutions with experience, diversity, and cutting-edge technology",
  nav: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/immigration-services" },
    { label: "Why Akula", to: "/about-us/why-akula" },
    { label: "Our Team", to: "/our-team" },
    { label: "Blogs", to: "/news-blogs" },
    {
      label: "Client Portal",
      to: "/contact",
      href: "https://docs.google.com/forms/d/1AUvwHRwvMnk3NCvSG3JbU0EXLR3XATOtiZvbtid284U/viewform?edit_requested=true",
    },
  ],
  eyebrow: ["Dallas immigration law firm", "Serving individuals & businesses worldwide"],
  heroTitle: ["Immigration", "Counsel", "Without Compromise"],
  heroHighlightIndex: 1,
  heroDescription:
    "A full-service immigration law firm in Dallas, Texas. We guide businesses, families and individuals through employment-based and family-based immigration with 30+ years of combined experience.",
  primaryCTA: { label: "Request a consultation", to: "/contact" },
  secondaryCTA: { label: "Explore our services", to: "/immigration-services" },
  heroImage: attorneyHero,
  officeImage,
  journeyImage,
  phone: "(844) 299-5003",
  phoneHref: "tel:+18442995003",
  expeditedEmail: "inella.coleman@akulalaw.com",
  consultationUrl: "https://calendly.com/kavitha-akula-akulalaw",
  address: ["17400 Dallas Parkway", "Suite 216", "Dallas, TX 75287"],
  mapUrl: "https://www.google.com/maps?cid=14630413207123395027",
  languages: [
    "English",
    "Farsi",
    "Hindi",
    "Lao",
    "Portuguese",
    "Spanish",
    "Telugu",
    "Urdu",
    "Thai",
    "Russian",
  ],
};

export const stats = [
  { value: "30+", label: "Years of immigration experience" },
  { value: "10+", label: "Languages spoken in-house" },
  { value: "24/7", label: "Case tracking & updates" },
  { value: "27+", label: "Visa & petition practice areas" },
];

export const pillars = [
  {
    icon: "scale",
    title: "Experience",
    description:
      "Over 30 years of global business and industry-specific immigration law experience, led by a founder who lived the process herself.",
  },
  {
    icon: "globe",
    title: "Diversity",
    description:
      "A multilingual, multicultural legal team that understands your background, your language and your goals.",
  },
  {
    icon: "monitor",
    title: "Technology",
    description:
      "A secure immigration extranet with real-time status, document upload and 24/7 case management for every client.",
  },
  {
    icon: "users",
    title: "Our Style",
    description:
      "Cohesive legal teams working collaboratively so every matter receives 100% personalised attention.",
  },
  {
    icon: "chart",
    title: "Pricing",
    description:
      "Transparent, flexible pricing based on case volume. No hidden fees, ever.",
  },
];

export const principles = [
  "Unparalleled dedication and work ethic",
  "Efficiency, creativity, and practicality",
  "Transparency and flexibility in pricing",
  "Accessibility and one-on-one attention",
  "High level of cultural competency",
];

export const attorneyMeta: Record<
  string,
  { initials: string; photo: string; caseTypes?: string[] }
> = {
  "kavitha-akula": {
    initials: "KA",
    photo: kavithaPhoto,
    caseTypes: ["EB-5", "Employment-based visas"],
  },
  "katrina-d-moore": {
    initials: "KM",
    photo: katrinaPhoto,
    caseTypes: ["EB-5", "Family-based", "Waivers"],
  },
  "ashley-dennis": {
    initials: "AD",
    photo: ashleyPhoto,
    caseTypes: ["Family-based", "Waivers", "U visa / VAWA"],
  },
};

export const labelOverrides: Record<string, string> = {
  "i-212-permission-to-reapply-for-admission-into-t": "I-212 Permission to Reapply",
  "temporary-protected-status-tps-": "Temporary Protected Status",
  "citizenship-naturalization": "Citizenship & Naturalization",
};

export const categories = [
  {
    key: "employment" as const,
    slug: "employment-based-visas",
    title: "Employment-Based Visas",
    description:
      "Work visas, labor certification and permanent residence for companies hiring global talent.",
  },
  {
    key: "family" as const,
    slug: "family-based-visas",
    title: "Family-Based Visas",
    description:
      "Petitions, waivers, adjustment of status and citizenship for families and individuals.",
  },
];

export const testimonials = [
  {
    quote:
      "Akula and associates helped me get my green card in EB-1A category. I highly recommend them for any immigration needs.",
    author: "Sandhya CS.",
    company: "Green card client",
  },
  {
    quote:
      "Their expertise and diligence have been instrumental in navigating our complex case with efficiency and effectiveness.",
    author: "The \u201cT\u201d Family",
    company: "Family-based client",
  },
  {
    quote:
      "Through honest and direct communication Ms. Akula and her staff are very thorough; we have comfort that all immigration matters are handled effectively.",
    author: "Vijay Seri",
    company: "President, CCIT",
  },
  {
    quote:
      "We are grateful to Akula & Associates for helping me obtain a K-1 fianc\u00e9 visa and now, a green card in a very short time. Attentive and kind service.",
    author: "Anais & Christian L.",
    company: "K-1 visa clients",
  },
  {
    quote:
      "I recommend Akula & Associates to information technology companies needing diligent immigration services. I am consistently impressed by Ms. Akula\u2019s knowledge of immigration law.",
    author: "Satish Eleti",
    company: "President, Enternet Business Systems",
  },
  {
    quote:
      "It has been a pleasure to work with the Akula & Associates team. They are now our go-to company for employee immigration processing.",
    author: "Karen B.",
    company: "Corporate client",
  },
];

export const staff = [
  {
    name: "Renuka Anumandla",
    role: "Lead Administrative Assistant",
    photo: renukaPhoto,
    summary:
      "Keeps every case file organised and moving, coordinating documents, deadlines and filings across the firm.",
  },
  {
    name: "Inella Coleman",
    role: "Client Relations Manager",
    photo: inellaPhoto,
    summary:
      "The first friendly voice for new and existing clients, guiding consultations, updates and expedited requests.",
  },
  {
    name: "Susan Basemera",
    role: "Office Manager",
    photo: susanPhoto,
    summary:
      "Runs day-to-day operations so attorneys can focus on strategy, from billing and scheduling to office logistics.",
  },
];

export const caseManagers = [
  {
    name: "Tracy Bernal",
    role: "Senior Paralegal",
    photo: tracyPhoto,
    summary: "Manages complex employment-based filings from intake through approval.",
  },
  {
    name: "Christie Sourivong",
    role: "Senior Paralegal",
    photo: christiePhoto,
    summary: "Prepares petitions and evidence packages with meticulous attention to detail.",
  },
  {
    name: "Anita Gandavadi",
    role: "Senior Paralegal",
    photo: anitaPhoto,
    summary: "Coordinates case documentation and client communication across matters.",
  },
  {
    name: "Abigail Obidike",
    role: "Paralegal",
    photo: abigailPhoto,
    summary: "Supports family-based and humanitarian filings at every stage.",
  },
  {
    name: "Suengjai Cegon",
    role: "Paralegal",
    photo: suengjaiPhoto,
    summary: "Tracks deadlines, RFEs and government correspondence for active cases.",
  },
  {
    name: "Pravalika Balaram",
    role: "Law Clerk",
    photo: pravalikaPhoto,
    summary: "Researches immigration issues and assists attorneys with case strategy.",
  },
];
