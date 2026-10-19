import { createFileRoute } from "@tanstack/react-router";
import lab from "@/assets/lab.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { NEWS, formatDate } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Announcements — Excellence International School" },
      { name: "description", content: "Achievements, announcements and stories from the Excellence community." },
      { property: "og:title", content: "News from Excellence International School" },
      { property: "og:description", content: "Achievements, announcements and stories." },
    ],
  }),
  component: News,
});

function News() {
  const lead = NEWS[0]!;
  const rest = NEWS.slice(1);
  return (
    <>
      <PageHero eyebrow="News & announcements" title={<>Stories from <span className="italic text-primary">our school.</span></>} />
      <section className="section-y">
        <div className="container-x">
          <article className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <img src={lab} alt="" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <div>
              <p className="eyebrow">{lead.category} · {formatDate(lead.date)}</p>
              <h2 className="text-h2 mt-4">{lead.title}</h2>
              <p className="text-lead mt-5">{lead.excerpt}</p>
            </div>
          </article>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 90} className={i === 1 ? "md:mt-12" : ""}>
                <article className="surface h-full p-7 transition-shadow hover:shadow-lift">
                  <p className="eyebrow">{n.category}</p>
                  <h3 className="text-h3 mt-4">{n.title}</h3>
                  <p className="mt-4 text-sm">{n.excerpt}</p>
                  <p className="mt-6 text-xs">{formatDate(n.date)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
