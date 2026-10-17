import { cn } from "@/lib/utils";

/** Selective brand motif: a hand-painted red stroke. */
export function BrushStroke({ className, animate = true }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 600 120" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <path
        d="M8 78C90 40 190 28 300 44c90 12 170 30 286 4"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
        className={animate ? "animate-draw" : undefined}
        opacity="0.92"
      />
      <path
        d="M40 96c120-26 260-30 420-10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
        className={animate ? "animate-draw" : undefined}
      />
    </svg>
  );
}

export function BrushCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <path
        d="M150 38C120 14 60 18 34 60c-24 40-6 96 44 112 52 16 100-14 108-62 6-34-12-58-30-70"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        className="animate-draw"
      />
    </svg>
  );
}

/** Highlighted word with a painted underline. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="brush">
      {children}
      <BrushStroke className="absolute -bottom-[0.18em] left-0 h-[0.32em] w-full text-primary/25" />
    </span>
  );
}
