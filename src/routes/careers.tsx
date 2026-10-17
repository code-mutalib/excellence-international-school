import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CAREERS } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Excellence International School" },
      { name: "description", content: "Open teaching and staff positions at Excellence International School." },
      { property: "og:title", content: "Careers at Excellence" },
      { property: "og:description", content: "Join a community of passionate educators." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Careers" title={<>Teach with <span className="italic text-primary">purpose.</span></>} intro="We look for educators who are generous with their knowledge and curious about how children learn." />
      <section className="section-y">
        <div className="container-x">
          <ul className="border-t">
            {CAREERS.map((c) => (
              <li key={c.title}>
                <Link to="/contact" className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-b py-7 sm:px-4 hover:bg-surface">
                  <div className="min-w-0">
                    <h2 className="text-h3 group-hover:text-primary">{c.title}</h2>
                    <p className="mt-1 text-sm">{c.dept} · {c.type}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  ),
});
