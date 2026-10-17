import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SCHOOL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Campus Tours — Excellence International School" },
      { name: "description", content: "Get in touch with admissions or book a Saturday campus tour." },
      { property: "og:title", content: "Contact Excellence International School" },
      { property: "og:description", content: "Questions, visits and campus tours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    form.reset();
    toast.success("Thank you — we’ll reply within one working day.");
  }
  const info = [
    { icon: MapPin, k: "Visit", v: SCHOOL.address },
    { icon: Phone, k: "Call", v: SCHOOL.phone },
    { icon: Mail, k: "Email", v: SCHOOL.email },
    { icon: Clock, k: "Office hours", v: SCHOOL.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>We’d love to <span className="italic text-primary">hear from you.</span></>} intro="Questions about admissions, a campus visit, or anything else — our team is here to help." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <dl className="divide-y border-y">
              {info.map((i) => (
                <div key={i.k} className="flex gap-4 py-6">
                  <i.icon className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <div><dt className="eyebrow">{i.k}</dt><dd className="mt-1 text-ink">{i.v}</dd></div>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm">Looking for quick answers? Visit our <Link to="/faq" className="text-primary underline underline-offset-4">FAQ</Link>.</p>
          </div>
          <form onSubmit={submit} className="surface shadow-soft grid gap-5 p-[clamp(1.5rem,4vw,3rem)] sm:grid-cols-2">
            <div><label htmlFor="c-name" className="mb-2 block text-sm font-medium text-ink">Name</label><input id="c-name" name="name" required minLength={2} className="field" autoComplete="name" /></div>
            <div><label htmlFor="c-email" className="mb-2 block text-sm font-medium text-ink">Email</label><input id="c-email" name="email" type="email" required className="field" autoComplete="email" /></div>
            <div className="sm:col-span-2">
              <label htmlFor="c-topic" className="mb-2 block text-sm font-medium text-ink">Topic</label>
              <select id="c-topic" name="topic" className="field"><option>Admissions enquiry</option><option>Book a campus tour</option><option>General question</option><option>Careers</option></select>
            </div>
            <div className="sm:col-span-2"><label htmlFor="c-msg" className="mb-2 block text-sm font-medium text-ink">Message</label><textarea id="c-msg" name="message" required minLength={10} maxLength={1000} rows={5} className="field" /></div>
            <button type="submit" disabled={sending} className="btn btn-primary sm:col-span-2 disabled:opacity-60">{sending ? "Sending…" : "Send message"}</button>
          </form>
        </div>
      </section>
    </>
  );
}
