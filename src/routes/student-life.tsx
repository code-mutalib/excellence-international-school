import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student Life, Clubs & Sports — Excellence International School" },
      { name: "description", content: "45+ clubs, competitive sports, arts, leadership and service at Excellence." },
      { property: "og:title", content: "Student Life at Excellence" },
      { property: "og:description", content: "Clubs, sports, arts, leadership and service." },
    ],
  }),
  component: StudentLife,
});

const CLUBS = ["Robotics", "Model UN", "Debate", "Astronomy", "Theatre", "Orchestra", "Photography", "Eco Club", "Coding", "Creative Writing", "Chess", "Entrepreneurship"];
const SPORTS = [
  { s: "Football", n: "U-14 & U-17 state champions" },
  { s: "Swimming", n: "Olympic-length pool, 6 coaches" },
  { s: "Athletics", n: "400m synthetic track" },
  { s: "Basketball", n: "Indoor and outdoor courts" },
  { s: "Tennis", n: "Four floodlit courts" },
  { s: "Cricket", n: "Full turf ground & nets" },
];

function StudentLife() {
  return (
    <>
      <PageHero eyebrow="Campus life" title={<>Where students find <span className="italic text-primary">their people.</span></>} intro="Life at Excellence extends well beyond the classroom — into studios, stages, playing fields and the wider community." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionHead eyebrow="Clubs & activities" title="45+ ways to belong." intro="Student-led and teacher-mentored, every club meets weekly." />
            <ul className="mt-10 flex flex-wrap gap-2">
              {CLUBS.map((c) => (
                <li key={c} className="rounded-full border bg-surface px-4 py-2 text-sm text-ink">{c}</li>
              ))}
            </ul>
          </div>
          <img src={hero} alt="Students reading together" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full rounded-lg object-cover lg:mt-20" />
        </div>
      </section>
      <section id="sports" className="section-y border-y bg-surface">
        <div className="container-x">
          <SectionHead eyebrow="Sports" title="Play hard. Play fair." />
          <ul className="mt-12 grid border-t sm:grid-cols-2 lg:grid-cols-3">
            {SPORTS.map((s, i) => (
              <Reveal as="li" key={s.s} delay={(i % 3) * 80} className="border-b py-8 sm:pr-8">
                <h3 className="text-h3">{s.s}</h3>
                <p className="mt-2 text-sm">{s.n}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow">Testimonials</p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name}>
                <blockquote className="font-display text-2xl leading-snug text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm"><span className="font-semibold text-ink">{t.name}</span> — {t.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
