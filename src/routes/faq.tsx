import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Excellence International School" },
      { name: "description", content: "Answers to common questions about curriculum, admissions, transport and scholarships." },
      { property: "og:title", content: "Frequently asked questions — Excellence" },
      { property: "og:description", content: "Curriculum, admissions, transport and more." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title={<>Good <span className="italic text-primary">questions.</span></>} intro="The answers families ask for most often." />
      <section className="section-y">
        <div className="container-x max-w-4xl">
          <Accordion type="single" collapsible className="border-t">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={String(i)}>
                <AccordionTrigger className="py-6 text-left font-display text-2xl font-medium text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  ),
});
