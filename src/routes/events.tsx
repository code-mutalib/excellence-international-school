import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarX, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EVENTS, formatDate } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Calendar — Excellence International School" },
      { name: "description", content: "Upcoming exhibitions, concerts, sports meets and open houses at Excellence." },
      { property: "og:title", content: "Events at Excellence International School" },
      { property: "og:description", content: "What’s on across the school year." },
    ],
  }),
  component: Events,
});

const CATS = ["All", ...Array.from(new Set(EVENTS.map((e) => e.category)))];

function Events() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? EVENTS : EVENTS.filter((e) => e.category === cat);
  return (
    <>
      <PageHero eyebrow="Events" title={<>What’s <span className="italic text-primary">on.</span></>} intro="Exhibitions, performances, competitions and open days — all families are warmly welcome." />
      <section className="section-y">
        <div className="container-x">
          <div role="group" aria-label="Filter events" className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={cn("shrink-0 rounded-full border px-4 py-2 text-sm transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-surface hover:border-ink")}>{c}</button>
            ))}
          </div>
          {list.length === 0 ? (
            <div className="mt-16 grid place-items-center text-center"><CalendarX className="h-10 w-10 text-primary" /><p className="mt-4">No events in this category yet.</p></div>
          ) : (
            <ul className="mt-10 border-t">
              {list.map((e) => (
                <li key={e.title} className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-6 border-b py-8 md:grid-cols-[7rem_minmax(0,1fr)_auto]">
                  <div>
                    <p className="font-display text-6xl leading-none text-primary">{formatDate(e.date, { day: "2-digit" })}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest">{formatDate(e.date, { month: "short", year: "numeric" })}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="eyebrow !text-accent-text">{e.category}</p>
                    <h2 className="text-h3 mt-2">{e.title}</h2>
                    <p className="mt-2 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> {e.place} · {e.time}</p>
                  </div>
                  <span className="col-span-2 md:col-span-1"><span className="btn btn-outline !min-h-10 text-sm">Add to calendar</span></span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
