import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import principal from "@/assets/principal.jpg";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/lab.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Excellence International School" },
      { name: "description", content: "Moments from classrooms, campus, events and student life at Excellence." },
      { property: "og:title", content: "Gallery — Excellence International School" },
      { property: "og:description", content: "Moments from across our campus." },
    ],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: campus, alt: "Main courtyard in afternoon light", cls: "sm:col-span-2 aspect-[16/10]" },
  { src: hero, alt: "Students reading on the steps", cls: "sm:row-span-2 aspect-[4/5] sm:aspect-auto" },
  { src: lab, alt: "Chemistry practical in the science lab", cls: "aspect-[4/3]" },
  { src: principal, alt: "Principal in the library", cls: "aspect-[4/3]" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Moments, <span className="italic text-primary">kept.</span></>} intro="A glimpse into daily life across our classrooms, studios and courtyards." />
      <section className="section-y">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          {ITEMS.map((it, i) => (
            <button key={i} onClick={() => setOpen(i)} className={`group overflow-hidden rounded-lg ${it.cls}`} aria-label={`View: ${it.alt}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl border-0 bg-surface p-2">
          <DialogTitle className="sr-only">{open !== null ? ITEMS[open].alt : "Image"}</DialogTitle>
          {open !== null && <img src={ITEMS[open].src} alt={ITEMS[open].alt} className="max-h-[80vh] w-full rounded object-contain" />}
          {open !== null && <p className="px-3 pb-2 text-sm">{ITEMS[open].alt}</p>}
        </DialogContent>
      </Dialog>
    </>
  );
}
