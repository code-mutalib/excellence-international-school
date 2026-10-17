import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import principal from "@/assets/principal.jpg";
import campus from "@/assets/campus.jpg";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Excellence International School" },
      { name: "description", content: "Our story, vision, mission and values since 1998, plus a message from the Principal." },
      { property: "og:title", content: "About Excellence International School" },
      { property: "og:description", content: "Our story, vision, mission and the values that guide us." },
    ],
  }),
  component: About,
});

const MILESTONES = [
  { year: "1998", text: "Founded with 120 students and 14 teachers." },
  { year: "2006", text: "Senior Secondary wing and first graduating class." },
  { year: "2014", text: "Sports complex and Performing Arts Centre open." },
  { year: "2021", text: "Recognised among the region’s top ten day schools." },
  { year: "2026", text: "New Learning Commons and robotics labs." },
];

const VALUES = ["Integrity", "Curiosity", "Respect", "Resilience", "Service", "Joy"];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Rooted in values, <span className="italic text-primary">open to the world.</span></>}
        intro="For nearly three decades we have built a school where academic ambition and kindness are never in competition."
        image={campus}
        imageAlt="The Excellence campus courtyard"
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHead eyebrow="Our story" title="A school built around the learner." />
          <div className="space-y-5 text-lead">
            <p>Excellence International School was founded in 1998 by a group of educators and parents who wanted something rare: a school with genuine academic rigour that never lost sight of the child.</p>
            <p className="text-base">Our philosophy draws on inquiry-based learning, close mentorship and a broad curriculum. We measure success not only in results — though those are outstanding — but in the confident, compassionate young people who leave our gates.</p>
          </div>
        </div>
      </section>

      <section id="vision" className="border-y bg-surface">
        <div className="container-x grid md:grid-cols-2">
          <Reveal className="py-16 md:border-r md:pr-12 lg:py-24">
            <p className="eyebrow">Vision</p>
            <p className="text-h2 mt-6">To nurture curious minds who lead with integrity in a changing world.</p>
          </Reveal>
          <Reveal delay={120} className="border-t py-16 md:border-t-0 md:pl-12 md:pt-32 lg:py-24 lg:pt-36">
            <p className="eyebrow">Mission</p>
            <p className="text-lead mt-6">To offer a rigorous, joyful and inclusive education that develops every student’s intellect, character and creativity — preparing them for university, career and citizenship.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Our values" title="Six words we live by." />
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {VALUES.map((v, i) => (
              <li key={v} className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-none text-ink">
                {v}
                {i < VALUES.length - 1 && <span className="ml-10 text-primary">·</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="principal" className="section-y border-t bg-surface">
        <div className="container-x grid items-start gap-12 md:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <img src={principal} alt="Dr. Eleanor Hart, Principal" loading="lazy" width={1008} height={1264} className="aspect-[4/5] w-full rounded-lg object-cover md:sticky md:top-28" />
          <div>
            <p className="eyebrow">Principal’s message</p>
            <blockquote className="mt-6 font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.1] text-ink">
              “Every child arrives with a spark. Our work is to protect it, feed it, and help it <span className="italic text-primary">become a light</span> for others.”
            </blockquote>
            <div className="mt-10 space-y-5">
              <p>Dear families, welcome. Choosing a school is one of the most important decisions you will make for your child, and I am grateful you are considering Excellence.</p>
              <p>Our classrooms are places of high expectation and deep care. Teachers here know their students well; they notice when someone is ready for more challenge, and when someone needs a quiet word of encouragement.</p>
              <p>Beyond academics, we invest in the arts, sport, service and leadership — because the qualities that matter most in life are rarely learned from textbooks alone. I warmly invite you to visit and see our community for yourself.</p>
            </div>
            <p className="mt-10 font-display text-4xl italic text-primary-hover">Eleanor Hart</p>
            <p className="mt-1 text-sm"><span className="font-semibold text-ink">Dr. Eleanor Hart</span> · Principal, Ed.D Columbia University</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Milestones" title="Twenty-eight years, in brief." />
          <ol className="mt-12 grid gap-0 border-t sm:grid-cols-2 lg:grid-cols-5">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 80} className="border-b py-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0">
                <p className="font-display text-5xl text-primary">{m.year}</p>
                <p className="mt-3 text-sm">{m.text}</p>
              </Reveal>
            ))}
          </ol>
          <dl className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-6xl text-ink"><CountUp value={s.value} suffix={s.suffix} /></dd>
                <dt className="mt-2 text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
          <Link to="/faculty" className="link-arrow mt-14">Meet our faculty <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
