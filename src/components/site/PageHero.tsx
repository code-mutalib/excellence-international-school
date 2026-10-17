import type { ReactNode } from "react";
import { BrushStroke } from "./Brush";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="container-x grid items-end gap-10 pt-[clamp(3rem,7vw,6rem)] pb-[clamp(3rem,6vw,5rem)] lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-h1 mt-5 max-w-[14ch]">{title}</h1>
          <BrushStroke className="mt-3 h-5 w-40 text-primary" />
        </div>
        <div className="animate-rise lg:pb-3" style={{ animationDelay: "150ms" }}>
          {intro && <p className="text-lead max-w-xl">{intro}</p>}
          {children}
        </div>
      </div>
      {image && (
        <div className="container-x pb-[clamp(2rem,5vw,4rem)]">
          <div className="relative overflow-hidden rounded-lg">
            <img src={image} alt={imageAlt} className="aspect-[21/9] w-full object-cover" width={1600} height={686} />
          </div>
        </div>
      )}
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: ReactNode; intro?: ReactNode; align?: "left" | "split" }) {
  if (align === "split")
    return (
      <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-h2 mt-4 max-w-[16ch]">{title}</h2>
        </div>
        {intro && <p className="max-w-lg lg:justify-self-end">{intro}</p>}
      </div>
    );
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-h2 mt-4">{title}</h2>
      {intro && <p className="mt-5">{intro}</p>}
    </div>
  );
}
