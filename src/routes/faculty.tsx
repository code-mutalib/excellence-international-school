import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FACULTY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Staff — Excellence International School" },
      { name: "description", content: "Meet the experienced educators and leaders of Excellence International School." },
      { property: "og:title", content: "Faculty & Staff — Excellence" },
      { property: "og:description", content: "Experienced educators focused on academic and personal growth." },
    ],
  }),
  component: Faculty,
});

const DEPTS = ["All", ...Array.from(new Set(FACULTY.map((f) => f.dept)))];

function Faculty() {
  const [dept, setDept] = useState("All");
  const list = dept === "All" ? FACULTY : FACULTY.filter((f) => f.dept === dept);
  return (
    <>
      <PageHero eyebrow="Faculty & staff" title={<>Teachers who <span className="italic text-primary">know</span> their students.</>} intro="180 educators, 40% with postgraduate degrees, and a culture of continuous professional learning." />
      <section className="section-y">
        <div className="container-x">
          <div role="group" aria-label="Filter by department" className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {DEPTS.map((d) => (
              <button key={d} onClick={() => setDept(d)} aria-pressed={dept === d} className={cn("shrink-0 rounded-full border px-4 py-2 text-sm transition-colors", dept === d ? "border-ink bg-ink text-surface" : "bg-surface hover:border-ink")}>
                {d}
              </button>
            ))}
          </div>
          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((f, i) => (
              <Reveal as="li" key={f.name} delay={(i % 4) * 70} className={i % 4 === 1 ? "lg:mt-10" : i % 4 === 3 ? "lg:mt-5" : ""}>
                <div className="grid aspect-[4/5] place-items-center rounded-lg border bg-surface">
                  <span className="font-display text-7xl text-primary/80">{f.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("")}</span>
                </div>
                <h3 className="text-h3 mt-5">{f.name}</h3>
                <p className="text-sm font-medium text-accent-text">{f.role}</p>
                <p className="mt-1 text-sm">{f.qual}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
