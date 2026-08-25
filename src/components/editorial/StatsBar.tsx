import { stats } from "@/data/site";

export function StatsBar() {
  const items = [...stats, ...stats];

  return (
    <section aria-label="Studio in numbers" className="bg-dark text-dark-foreground">
      <div className="ed-marquee-mask relative">
        <ul className="ed-marquee-track list-none" aria-hidden="false">
          {items.map((stat, i) => (
            <li
              key={`${stat.label}-${i}`}
              className="flex h-[220px] w-[320px] shrink-0 flex-col justify-center gap-3 border-l border-dark-border px-8 md:h-[260px] md:w-[380px] md:px-12"
            >
              <span className="text-[52px] font-medium leading-none tracking-[-0.04em] text-blue md:text-[68px]">
                {stat.value}
              </span>
              <span className="ed-label text-dark-foreground">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
