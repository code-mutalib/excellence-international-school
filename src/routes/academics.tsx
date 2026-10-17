import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import lab from "@/assets/lab.jpg";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PROGRAMS } from "@/lib/site-data";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Curriculum — Excellence International School" },
      { name: "description", content: "Early Years to Senior Secondary programs, curriculum, methodology and assessment at Excellence." },
      { property: "og:title", content: "Academics at Excellence International School" },
      { property: "og:description", content: "Five connected stages from Early Years to Senior Secondary." },
    ],
  }),
  component: Academics,
});

const CURRICULUM = [
  { title: "Languages & literature", text: "English, Hindi and a choice of French, German or Spanish, with reading and writing workshops at every stage." },
  { title: "Mathematics", text: "Concept-first mathematics with hands-on modelling, problem solving and optional advanced tracks." },
  { title: "Sciences", text: "Laboratory-based physics, chemistry and biology, plus environmental science and research projects." },
  { title: "Humanities", text: "History, geography, economics and civics taught through debate, primary sources and fieldwork." },
  { title: "Technology & design", text: "Coding, robotics, digital literacy and design thinking integrated across subjects." },
  { title: "Arts, sport & life skills", text: "Music, visual art, drama, physical education, wellbeing and financial literacy for every learner." },
];

const METHOD = [
  { k: "Inquiry", v: "Students ask real questions and investigate them, building understanding rather than memorising." },
  { k: "Mentorship", v: "Every student has an advisor who meets them weekly to set goals and reflect." },
  { k: "Assessment", v: "Continuous, formative feedback combined with term examinations and portfolio reviews." },
  { k: "Enrichment", v: "Olympiads, Model UN, research internships and exchange programmes with partner schools." },
];

function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={<>Rigour, with <span className="italic text-primary">room to wonder.</span></>}
        intro="A coherent journey from Nursery to Grade 12, guided by specialist teachers and a curriculum that rewards deep thinking."
        image={lab}
        imageAlt="Students conducting a chemistry experiment"
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Programs" title="Five stages, one continuous story." />
          <Tabs defaultValue="early" className="mt-12">
            <TabsList className="no-scrollbar flex h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b bg-transparent p-0">
              {PROGRAMS.map((p) => (
                <TabsTrigger
                  key={p.id}
                  value={p.id}
                  className="shrink-0 rounded-none border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none"
                >
                  {p.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {PROGRAMS.map((p) => (
              <TabsContent key={p.id} value={p.id} className="mt-0 animate-rise">
                <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] lg:gap-20">
                  <div>
                    <p className="eyebrow">{p.grades} · {p.ages}</p>
                    <h3 className="text-h2 mt-4">{p.name}</h3>
                    <p className="text-lead mt-6 max-w-xl">{p.summary}</p>
                  </div>
                  <ul className="surface divide-y self-start">
                    {p.focus.map((f) => (
                      <li key={f} className="flex items-center gap-3 px-6 py-4 text-ink">
                        <Check className="h-4 w-4 shrink-0 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="curriculum" className="section-y border-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHead eyebrow="Curriculum" title="A broad and balanced curriculum." intro="Aligned with CBSE and enriched with international best practice. Open a subject group to learn more." />
          <Accordion type="single" collapsible defaultValue="0" className="border-t">
            {CURRICULUM.map((c, i) => (
              <AccordionItem key={c.title} value={String(i)}>
                <AccordionTrigger className="py-6 font-display text-2xl font-medium text-ink hover:no-underline">{c.title}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">{c.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="How we teach" title="Methodology & assessment" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
            {METHOD.map((m, i) => (
              <div key={m.k} className="bg-background p-8 lg:p-12">
                <p className="font-display text-xl text-primary">0{i + 1}</p>
                <h3 className="text-h3 mt-3">{m.k}</h3>
                <p className="mt-3">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
