import { useEffect, useRef, useState, type ReactNode } from "react";

export function Eyebrow({ lines, tone = "light" }: { lines: string[]; tone?: "light" | "dark" }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-[5px] block size-[6px] shrink-0 rounded-full bg-blue" aria-hidden />
      <p className={`ed-label ${tone === "dark" ? "text-dark-foreground/70" : "text-ink"}`}>
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

export function Arrow({ direction = "right" }: { direction?: "right" | "up-right" | "down" }) {
  const rotation =
    direction === "up-right" ? "-rotate-45" : direction === "down" ? "rotate-90" : "";
  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-[1em] shrink-0 ${rotation}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`ed-reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
