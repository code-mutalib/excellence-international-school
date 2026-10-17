import { PageHero } from "./PageHero";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro="Last updated October 2026." />
      <section className="section-y">
        <div className="container-x max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-h3">{s.h}</h2>
              <p className="mt-3">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
