import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SCHOOL } from "@/lib/site-data";
import { BrushStroke } from "./Brush";

const COLS = [
  {
    title: "School",
    links: [
      { to: "/about", label: "About us" },
      { to: "/faculty", label: "Faculty & staff" },
      { to: "/campus", label: "Campus & facilities" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Learning",
    links: [
      { to: "/academics", label: "Academic programs" },
      { to: "/admissions", label: "Admissions & fees" },
      { to: "/student-life", label: "Student life" },
      { to: "/events", label: "Events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { to: "/news", label: "News" },
      { to: "/gallery", label: "Gallery" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-surface/70">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 border-b border-surface/10 pb-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-h1 text-surface">
              Begin a story of <span className="italic text-primary">excellence.</span>
            </h2>
            <BrushStroke className="mt-2 h-6 w-56 text-primary" animate={false} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" hash="apply" className="btn btn-primary">
                Apply for 2027–28 <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn border border-surface/25 text-surface hover:bg-surface hover:text-ink">
                Book a campus tour
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="eyebrow !text-surface/50">{c.title}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="transition-colors hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 py-10 text-sm md:grid-cols-3">
          <p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-primary" /> {SCHOOL.address}</p>
          <a href={`tel:${SCHOOL.phone}`} className="flex gap-3 hover:text-surface"><Phone className="h-4 w-4 shrink-0 text-primary" /> {SCHOOL.phone}</a>
          <a href={`mailto:${SCHOOL.email}`} className="flex gap-3 hover:text-surface"><Mail className="h-4 w-4 shrink-0 text-primary" /> {SCHOOL.email}</a>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-surface/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-surface">Privacy policy</Link>
            <Link to="/terms" className="hover:text-surface">Terms & conditions</Link>
          </div>
        </div>
      </div>
      <p aria-hidden className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[18vw] leading-[0.75] text-surface/[0.04]">
        Excellence
      </p>
    </footer>
  );
}
