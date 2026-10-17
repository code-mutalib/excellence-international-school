import { createFileRoute } from "@tanstack/react-router";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/lab.jpg";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FACILITIES } from "@/lib/site-data";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities — Excellence International School" },
      { name: "description", content: "Twelve acres of labs, studios, sports fields and learning spaces." },
      { property: "og:title", content: "Campus & Facilities — Excellence" },
      { property: "og:description", content: "Twelve acres built for curiosity." },
    ],
  }),
  component: Campus,
});

function Campus() {
  return (
    <>
      <PageHero eyebrow="Campus & facilities" title={<>Twelve acres built for <span className="italic text-primary">curiosity.</span></>} intro="Light-filled classrooms, specialist labs and green courtyards designed to make learning visible." image={campus} imageAlt="Campus courtyard" />
      <section className="section-y">
        <div className="container-x">
          <SectionHead align="split" eyebrow="Facilities" title="Spaces that invite discovery." intro="Every facility is designed with teachers, so it serves real learning — not just brochures." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.name} delay={(i % 3) * 80} className="bg-background p-8 lg:p-10">
                <p className="font-display text-lg text-primary">0{i + 1}</p>
                <h3 className="text-h3 mt-4">{f.name}</h3>
                <p className="mt-3 text-sm">{f.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-20 grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <img src={lab} alt="Students in the science lab" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <div>
              <p className="eyebrow">Safety & wellbeing</p>
              <h3 className="text-h2 mt-4">A campus where families feel at ease.</h3>
              <p className="mt-5">CCTV-monitored entrances, trained security staff, a full-time medical team and GPS-tracked transport across 32 routes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
