import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/editorial/Header";
import { Footer } from "@/components/editorial/Footer";
import { PageHero } from "@/components/editorial/PageHero";
import { FinalCTA } from "@/components/editorial/FinalCTA";
import { Arrow, Eyebrow, Reveal } from "@/components/editorial/primitives";
import { jobs, applyEmail, type Job } from "@/data/careers";

const title = "Careers | Akula & Associates P.C.";
const description =
  "Current job openings at Akula & Associates P.C., a Dallas immigration law firm. View full job descriptions and apply online.";

export const Route = createFileRoute("/careers")({
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
  component: CareersPage,
});

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" className="ed-card p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="ed-card-title text-[20px]">{job.title}</h2>
          <p className="ed-label mt-2 text-gray">
            {job.location} &middot; {job.type}
          </p>
          <p className="ed-body mt-4 max-w-[60ch] text-[14px] leading-[1.7] text-gray">
            {job.summary}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="ed-nav inline-flex h-[42px] items-center gap-2 rounded-full border border-ink px-5 transition-colors hover:bg-secondary"
        >
          {open ? "View less" : "View more"}
          <span className={open ? "rotate-180 transition-transform" : "transition-transform"}>
            <Arrow direction="down" />
          </span>
        </button>

      </div>

      {open && (
        <div className="mt-8 border-t border-border pt-6">
          <p className="ed-label text-gray">Work schedule: {job.schedule}</p>
          {job.sections.map((section) => (
            <div key={section.heading} className="mt-8 first:mt-6">
              <h3 className="ed-card-title flex items-start gap-2 text-[16px] text-blue">
                <span className="mt-[7px] block size-[6px] shrink-0 rounded-full bg-blue" aria-hidden />
                {section.heading}
              </h3>
              {section.paragraphs?.map((p) => (
                <p key={p} className="ed-body mt-3 max-w-[70ch] text-[14px] leading-[1.7] text-gray">
                  {p}
                </p>
              ))}
              {section.items && (
                <ul className="mt-3 border-t border-border">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="ed-body border-b border-border/60 py-2.5 pl-5 text-[14px] leading-[1.7] text-ink before:absolute before:-ml-5 before:text-blue before:content-['/']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="ed-body mt-8 text-[13px] italic leading-[1.7] text-gray">
            Akula &amp; Associates, P.C. is an equal opportunity employer. We value diversity and are
            committed to creating an inclusive environment for all employees.
          </p>
        </div>
      )}
    </Reveal>
  );
}

const MAX_FILE_BYTES = 8 * 1024 * 1024;

function ApplicationForm({ position, setPosition }: { position: string; setPosition: (v: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const body = [
      `Full name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Position: ${position}`,
      "",
      "Message:",
      message || "Not provided",
      "",
      "Please attach the selected resume and cover letter files before sending.",
    ].join("\n");

    const mailto = `mailto:${applyEmail}?subject=${encodeURIComponent(
      `Job Application — ${position}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  };

  const field =
    "ed-body mt-1.5 h-[42px] w-full border border-border bg-background px-3 text-[14px] text-ink outline-none focus:border-blue";

  if (status === "sent") {
    return (
      <aside id="apply" className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
        <div className="ed-card p-8 text-center lg:sticky lg:top-28">
          <h2 className="ed-card-title text-blue">SUCCESSFULLY APPLIED</h2>
          <p className="ed-body mt-3 text-[13px] leading-[1.7] text-gray">
            Your email application window has been opened. Please attach your resume and cover letter before sending.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside id="apply" className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
      <div className="ed-card p-6 lg:sticky lg:top-28">
        <h2 className="ed-card-title">Apply now</h2>
        <p className="ed-body mt-2 text-[13px] leading-[1.7] text-gray">
          Enter your details, then your email application window will open. Attach your resume and cover letter before sending.
        </p>

        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-4">
          <label className="ed-label block text-gray">
            Full name
            <input
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
          </label>
          <label className="ed-label block text-gray">
            Email
            <input
              required
              type="email"
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </label>
          <label className="ed-label block text-gray">
            Phone
            <input
              maxLength={40}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={field}
            />
          </label>
          <label className="ed-label block text-gray">
            Position
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={field}
            >
              {jobs.map((job) => (
                <option key={job.slug} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </label>
          <label className="ed-label block text-gray">
            Message
            <textarea
              rows={4}
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="ed-body mt-1.5 w-full border border-border bg-background p-3 text-[14px] text-ink outline-none focus:border-blue"
            />
          </label>
          <label className="ed-label block text-gray">
            Resume (PDF or Word)
            <input
              required
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
              className="ed-body mt-1.5 w-full border border-border bg-background p-2 text-[13px] text-ink file:mr-3 file:rounded-full file:border file:border-ink file:bg-transparent file:px-3 file:py-1 file:text-[12px] file:text-ink"
            />
          </label>
          <label className="ed-label block text-gray">
            Cover letter (optional)
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCoverLetter(e.target.files?.[0] ?? null)}
              className="ed-body mt-1.5 w-full border border-border bg-background p-2 text-[13px] text-ink file:mr-3 file:rounded-full file:border file:border-ink file:bg-transparent file:px-3 file:py-1 file:text-[12px] file:text-ink"
            />
          </label>

          {error && (
            <p className="ed-body text-[13px] leading-[1.6] text-blue" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="ed-nav inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-blue px-6 text-primary-foreground transition-colors hover:bg-blue-dark disabled:opacity-60"
          >
            {status === "sending" ? "Submitting…" : "Submit application"}
            <Arrow />
          </button>
        </form>

        <p className="ed-body mt-4 text-[12px] leading-[1.6] text-gray">
          Or email your resume directly to{" "}
          <a href={`mailto:${applyEmail}`} className="text-blue">
            {applyEmail}
          </a>
        </p>
      </div>
    </aside>
  );
}

function CareersPage() {
  const [position, setPosition] = useState(jobs[0]!.title);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Current job openings"
          subtitle="Join a collaborative Dallas immigration firm where your work directly changes lives. Explore our open roles below."
          crumbs={[{ label: "Home", to: "/" }]}
        />

        <section className="py-16 md:py-24">
          <div className="ed-container grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-7">
              <Eyebrow lines={["Open positions"]} />
              <h2 className="ed-section-title mt-4">Work with us</h2>
              <div className="mt-8 flex flex-col gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>
            </div>

            <ApplicationForm position={position} setPosition={setPosition} />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
