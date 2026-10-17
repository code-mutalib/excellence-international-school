import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SCHOOL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex min-w-0 items-center gap-3", className)} aria-label={`${SCHOOL.name} home`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display text-xl font-semibold text-primary-foreground">
        E
      </span>
      <span className="min-w-0 leading-none">
        <span className="block truncate font-display text-xl font-semibold text-ink">Excellence</span>
        <span className="block truncate text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          International School
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="bg-ink text-surface">
        <div className="container-x flex items-center justify-between gap-4 py-2 text-xs">
          <p className="truncate">
            <span className="mr-2 font-semibold text-primary">●</span>
            Admissions open for 2027–28 —{" "}
            <Link to="/admissions" className="underline underline-offset-4 hover:text-primary">
              book a campus tour
            </Link>
          </p>
          <a href={`tel:${SCHOOL.phone}`} className="hidden shrink-0 items-center gap-2 sm:flex">
            <Phone className="h-3 w-3" /> {SCHOOL.phone}
          </a>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled ? "border-border bg-surface/90 backdrop-blur-md" : "border-transparent bg-background",
        )}
      >
        <div className={cn("container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 transition-all lg:flex lg:justify-between", scrolled ? "py-3" : "py-5")}>
          <Logo />
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    className="group relative px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink data-[status=active]:text-ink"
                  >
                    {n.label}
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/admissions" hash="apply" className="btn btn-primary hidden sm:inline-flex !min-h-11 !px-5">
              Apply Now
            </Link>
            <Sheet>
              <SheetTrigger className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-ink xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="flex w-full flex-col gap-0 border-l bg-surface p-0 sm:max-w-md [&>button]:hidden">
                <div className="flex items-center justify-between border-b p-5">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Logo />
                  <SheetClose className="grid h-11 w-11 place-items-center rounded-full border" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </SheetClose>
                </div>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
                  <ul>
                    {NAV.map((n, i) => (
                      <li key={n.to} className="border-b border-border/70">
                        <SheetClose asChild>
                          <Link
                            to={n.to}
                            activeOptions={{ exact: n.to === "/" }}
                            className="flex items-baseline justify-between py-4 font-display text-3xl text-ink data-[status=active]:text-primary"
                          >
                            {n.label}
                            <span className="font-sans text-xs text-muted-foreground">0{i + 1}</span>
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t p-5">
                  <SheetClose asChild>
                    <Link to="/admissions" hash="apply" className="btn btn-primary w-full">
                      Apply Now
                    </Link>
                  </SheetClose>
                  <p className="mt-4 text-center text-xs">{SCHOOL.email}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
