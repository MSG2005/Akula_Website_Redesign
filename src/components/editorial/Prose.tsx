import type { Block } from "@/data/content";
import { Reveal } from "./primitives";

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-[760px]">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <Reveal key={i}>
              <h2 className="ed-section-title mt-14 mb-5 text-[clamp(26px,3.2vw,38px)] first:mt-0">
                {block.text}
              </h2>
            </Reveal>
          );
        }
        if (block.type === "h3") {
          return (
            <Reveal key={i}>
              <h3 className="ed-card-title mt-10 mb-3 flex items-start gap-2 text-blue">
                <span className="mt-[6px] block size-[6px] shrink-0 rounded-full bg-blue" aria-hidden />
                {block.text}
              </h3>
            </Reveal>
          );
        }
        if (block.type === "list") {
          return (
            <Reveal key={i}>
              <ul className="mt-4 mb-4 border-t border-border">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="ed-body border-b border-border/60 py-2.5 pl-5 text-ink before:absolute before:-ml-5 before:text-blue before:content-['/']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        }
        return (
          <Reveal key={i}>
            <p className="ed-body mb-4 text-[15px] leading-[1.7] text-gray">{block.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
