import { Link } from "@tanstack/react-router";
import { BarChart3, Globe2, Monitor, Scale, Users } from "lucide-react";
import { pillars } from "@/data/site";
import { Arrow, Eyebrow, Reveal } from "./primitives";

const icons = {
  scale: Scale,
  globe: Globe2,
  monitor: Monitor,
  users: Users,
  chart: BarChart3,
} as const;

export function Services() {
  return (
    <section id="why" className="py-20 md:py-[100px]">
      <div className="ed-container">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <Eyebrow lines={["Why Akula & Associates"]} />
            <h2 className="ed-section-title mt-6">
              A firm built
              <br />
              around clients
            </h2>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-6">
            <p className="ed-body max-w-[440px] text-[15px] leading-[1.7] text-gray">
              Our success is the result of a constant, unrelenting focus on our clients&rsquo; needs.
              We combine decades of experience with a team-based approach and technology that keeps
              you informed at every stage.
            </p>
            <Link
              to="/about-us/why-akula"
              className="ed-nav group inline-flex items-center gap-2 self-start text-blue"
            >
              Read why clients choose us
              <span className="transition-transform group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <Reveal as="li" key={pillar.title} delay={i * 80}>
                <div className="ed-card flex h-full min-h-[190px] flex-col gap-4 p-5">
                  <Icon className="size-7 stroke-[1.25] text-blue" aria-hidden />
                  <h3 className="ed-card-title">{pillar.title}</h3>
                  <p className="text-[13px] leading-[1.55] text-gray">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
