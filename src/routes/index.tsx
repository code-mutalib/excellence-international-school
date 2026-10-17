import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Globe2, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import principal from "@/assets/principal.jpg";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/lab.jpg";
import { BrushCircle, BrushStroke, Highlight } from "@/components/site/Brush";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/PageHero";
import { EVENTS, NEWS, PROGRAMS, STATS, TESTIMONIALS, formatDate } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Excellence International School — Inspiring Minds, Shaping Futures" },
      { name: "description", content: "Nursery to Grade 12 international education blending academic rigour, creativity and character. Admissions open for 2027–28." },
      { property: "og:title", content: "Excellence International School" },
      { property: "og:description", content: "Inspiring minds, shaping futures. Admissions open for 2027–28." },
    ],
  }),
  component: Home,
});

const VALUES = [
  { icon: GraduationCap, title: "Expert faculty", text: "Experienced educators focused on academic and personal growth." },
  { icon: Globe2, title: "Global outlook", text: "Education designed to prepare students for an interconnected world." },
  { icon: Sparkles, title: "Holistic development", text: "Academics, creativity, leadership, sports and character." },
  { icon: HeartHandshake, title: "Vibrant community", text: "A supportive environment where students belong and thrive." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-10 pt-6 pb-16 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-[clamp(2rem,5vw,5rem)] lg:pb-24">
          <div className="relative animate-rise">
            <div className="relative overflow-hidden rounded-lg shadow-lift">
              <img src={hero} alt="Two students reading together on the school steps" width={1200} height={1504} className="aspect-[4/5] w-full object-cover md:aspect-[4/5]" />
            </div>
            <BrushCircle className="absolute -top-6 -right-6 hidden h-32 w-32 text-primary md:block lg:-right-10 lg:h-44 lg:w-44" />
            <div className="absolute -bottom-6 left-5 surface shadow-lift max-w-[15rem] p-5 sm:left-auto sm:-right-8 md:-right-10">
              <p className="font-display text-4xl text-primary">Est. 1998</p>
              <p className="mt-1 text-sm">Twenty-eight years of shaping thoughtful global citizens.</p>
            </div>
          </div>

          <div className="relative pt-6 md:pt-0">
            <p className="eyebrow animate-rise" style={{ animationDelay: "100ms" }}>
              Inspiring minds · Shaping futures
            </p>
            <h1 className="text-display mt-6 animate-rise" style={{ animationDelay: "180ms" }}>
              <Highlight>Excellence</Highlight>
              <br />
              International
              <br />
              School
            </h1>
            <p className="text-lead mt-8 max-w-md animate-rise" style={{ animationDelay: "260ms" }}>
              A Nursery to Grade 12 community where rigorous academics, creativity and character grow together.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "340ms" }}>
              <Link to="/admissions" hash="apply" className="btn btn-primary">
                Apply for admission <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Discover our story
              </Link>
            </div>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t pt-6 animate-rise" style={{ animationDelay: "420ms" }}>
              <div><dt className="text-xs">Ratio</dt><dd className="font-display text-3xl text-ink">13:1</dd></div>
              <div><dt className="text-xs">Board results</dt><dd className="font-display text-3xl text-ink">100%</dd></div>
              <div><dt className="text-xs">Nationalities</dt><dd className="font-display text-3xl text-ink">24</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y bg-surface">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="border-border py-10 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:first:pl-0 lg:py-14 max-sm:border-b max-sm:last:border-b-0">
              <v.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-h3 mt-6">{v.title}</h3>
              <p className="mt-3 text-sm">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">About the school</p>
            <h2 className="text-h1 mt-5">
              Designed for <br /> <span className="italic text-primary">the future.</span>
            </h2>
            <p className="text-lead mt-8 max-w-lg">
              Founded in 1998, Excellence began with a simple belief: every child deserves to be known, challenged and
              celebrated.
            </p>
            <p className="mt-5 max-w-lg">
              Today our learners explore ideas across disciplines, lead with empathy and graduate ready for the world’s
              best universities — and for the questions no exam can anticipate.
            </p>
            <Link to="/about" className="link-arrow mt-8">
              Our philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="relative grid grid-cols-6 gap-4">
            <Reveal className="col-span-4 col-start-1">
              <img src={campus} alt="School courtyard and buildings" loading="lazy" width={1600} height={1008} className="aspect-[4/3] w-full rounded-lg object-cover" />
            </Reveal>
            <Reveal delay={150} className="col-span-3 col-start-4 -mt-24 sm:-mt-32">
              <img src={lab} alt="Students in a science lab" loading="lazy" width={1408} height={1008} className="aspect-square w-full rounded-lg border-8 border-background object-cover" />
            </Reveal>
          </div>
        </div>

        <div className="container-x mt-[clamp(4rem,8vw,7rem)]">
          <dl className="grid grid-cols-2 border-t lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`pt-8 pb-2 ${i % 2 === 1 ? "pl-6" : ""} lg:pl-0 ${i > 0 ? "lg:pl-8 lg:border-l" : ""}`}>
                <dd className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-ink">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="section-y bg-surface border-y">
        <div className="container-x grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal className="relative">
            <img src={principal} alt="Dr. Eleanor Hart, Principal" loading="lazy" width={1008} height={1264} className="aspect-[4/5] w-full rounded-lg object-cover" />
            <span aria-hidden className="absolute -left-3 top-10 h-24 w-1.5 rounded-full bg-primary" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Principal’s message</p>
            <blockquote className="mt-6 font-display text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1.1] text-ink">
              <span className="text-primary">“</span>Education is not only about preparing students for examinations. It is
              about preparing them for <span className="italic text-primary">life.</span>”
            </blockquote>
            <p className="mt-8 max-w-xl">
              Our teachers walk alongside every learner — encouraging curiosity, nurturing resilience, and helping each
              child discover the quiet confidence that comes from doing meaningful work well.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <p className="font-display text-4xl italic text-primary-hover">Eleanor Hart</p>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="mt-2 text-sm"><span className="font-semibold text-ink">Dr. Eleanor Hart</span> · Principal</p>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-y">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="Academic programs"
            title={<>A journey from first words to <span className="italic text-primary">world stages.</span></>}
            intro="Five connected stages, each designed around how children learn best at that age."
          />
          <ol className="mt-14 border-t">
            {PROGRAMS.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 60}>
                <Link to="/academics" className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 border-b py-7 transition-colors hover:bg-surface sm:gap-10 sm:px-4 md:grid-cols-[4rem_1.2fr_1fr_auto]">
                  <span className="font-display text-xl text-primary">0{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className="text-h3 transition-colors group-hover:text-primary">{p.name}</h3>
                    <p className="mt-1 text-sm">{p.grades} · {p.ages}</p>
                  </div>
                  <p className="hidden text-sm md:block">{p.summary}</p>
                  <ArrowUpRight className="h-5 w-5 text-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CAMPUS BAND */}
      <section className="relative">
        <img src={campus} alt="" loading="lazy" width={1600} height={1008} className="h-[clamp(26rem,60vw,42rem)] w-full object-cover" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-[clamp(2.5rem,6vw,5rem)]">
            <p className="eyebrow !text-surface/80">Campus & facilities</p>
            <h2 className="text-h1 mt-4 max-w-[16ch] text-surface">Twelve acres built for curiosity.</h2>
            <Link to="/campus" className="btn mt-8 bg-surface text-ink hover:bg-primary hover:text-primary-foreground">
              Explore the campus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS + NEWS */}
      <section className="section-y">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Upcoming events" title="On the calendar" />
            <ul className="mt-10 space-y-0 border-t">
              {EVENTS.slice(0, 4).map((e) => (
                <li key={e.title} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-5 border-b py-5">
                  <div className="text-center">
                    <p className="font-display text-4xl leading-none text-primary">{formatDate(e.date, { day: "2-digit" })}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest">{formatDate(e.date, { month: "short" })}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{e.title}</p>
                    <p className="text-sm">{e.place} · {e.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/events" className="link-arrow mt-8">All events <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <SectionHead eyebrow="News & announcements" title="From the school" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {NEWS.slice(0, 2).map((n, i) => (
                <Reveal key={n.slug} delay={i * 120} className={i === 1 ? "sm:mt-16" : ""}>
                  <article className="surface h-full p-7 transition-shadow hover:shadow-lift">
                    <p className="eyebrow">{n.category}</p>
                    <h3 className="text-h3 mt-4">{n.title}</h3>
                    <p className="mt-4 text-sm">{n.excerpt}</p>
                    <p className="mt-6 text-xs">{formatDate(n.date)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Link to="/news" className="link-arrow mt-8">All news <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y border-t bg-surface">
        <div className="container-x">
          <p className="eyebrow">In their words</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-0">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className={`md:px-8 md:first:pl-0 ${i > 0 ? "md:border-l" : ""} ${i === 1 ? "md:pt-12" : ""}`}>
                <p className="font-display text-[clamp(1.4rem,2vw,1.75rem)] leading-snug text-ink">“{t.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-sm">{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-lg bg-primary px-[clamp(1.5rem,5vw,5rem)] py-[clamp(3rem,7vw,6rem)] text-primary-foreground">
            <BrushStroke className="absolute -right-10 -top-4 h-40 w-[34rem] text-primary-hover" />
            <div className="relative grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="eyebrow !text-primary-foreground/80">Admissions 2027–28</p>
                <h2 className="text-h1 mt-4 !text-primary-foreground">Your child’s next chapter starts here.</h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/admissions" hash="apply" className="btn btn-ink">Start application</Link>
                <Link to="/contact" className="btn border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">Book a visit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
