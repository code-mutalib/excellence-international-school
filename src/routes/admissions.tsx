import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FEES } from "@/lib/site-data";
import { GRADES, validateAdmission, type AdmissionForm } from "@/lib/admission";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2027–28 — Excellence International School" },
      { name: "description", content: "Admission process, eligibility, fee structure and online application for Nursery to Grade 11." },
      { property: "og:title", content: "Admissions open — Excellence International School" },
      { property: "og:description", content: "Apply online for 2027–28. Campus tours every Saturday." },
    ],
  }),
  component: Admissions,
});

const STEPS = [
  { t: "Enquire", d: "Submit the online form or visit the admissions office." },
  { t: "Campus visit", d: "Tour the school and meet our admissions team." },
  { t: "Assessment", d: "An age-appropriate interaction or entrance assessment." },
  { t: "Offer", d: "Receive your offer letter within ten working days." },
  { t: "Enrolment", d: "Submit documents and fees to confirm your seat." },
];

const EMPTY: AdmissionForm = { studentName: "", dob: "", grade: "", parentName: "", email: "", phone: "", message: "" };

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs text-primary-hover">{error}</p>}
    </div>
  );
}

function Admissions() {
  const [form, setForm] = useState<AdmissionForm>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionForm, string>>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof AdmissionForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  const a = (k: keyof AdmissionForm) => ({ id: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  async function submit(e: FormEvent) {
    e.preventDefault();
    const errs = validateAdmission(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setDone(true);
    toast.success("Application received — we’ll be in touch within two working days.");
  }

  return (
    <>
      <PageHero
        eyebrow="Admissions 2027–28"
        title={<>Join a community of <span className="italic text-primary">curious minds.</span></>}
        intro="Applications are open for Nursery to Grade 11. Our admissions team will guide your family through every step."
      >
        <a href="#apply" className="btn btn-primary mt-8">Start application <ArrowRight className="h-4 w-4" /></a>
      </PageHero>

      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Process" title="Five simple steps." />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 80} className="relative lg:pr-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary font-display text-xl text-primary">{i + 1}</span>
                  {i < STEPS.length - 1 && <span className="hidden h-px flex-1 bg-border lg:block" />}
                </div>
                <h3 className="text-h3 mt-6">{s.t}</h3>
                <p className="mt-2 text-sm">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="fees" className="section-y border-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="Fee structure" title="Transparent fees." intro="Annual tuition is payable in three instalments. Sibling and merit concessions available." />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-widest">
                  <th className="py-4 font-semibold">Level</th>
                  <th className="py-4 font-semibold">Grades</th>
                  <th className="py-4 font-semibold">Admission</th>
                  <th className="py-4 text-right font-semibold">Annual tuition</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((f) => (
                  <tr key={f.level} className="border-b">
                    <td className="py-5 font-display text-xl text-ink">{f.level}</td>
                    <td className="py-5">{f.grades}</td>
                    <td className="py-5">{f.admission}</td>
                    <td className="py-5 text-right font-semibold text-ink">{f.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs">Indicative fees for 2027–28; transport and meals charged separately.</p>
          </div>
        </div>
      </section>

      <section id="apply" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="Apply online" title="Begin your application." intro="It takes about five minutes. You can upload documents later." />
            <ul className="mt-8 space-y-2 text-sm">
              <li>• Birth certificate</li><li>• Previous school report</li><li>• Passport-size photographs</li><li>• Address proof</li>
            </ul>
          </div>
          {done ? (
            <div className="surface shadow-soft grid place-items-center p-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
              <h3 className="text-h2 mt-6">Thank you, {form.parentName.split(" ")[0]}.</h3>
              <p className="mt-4 max-w-sm">We’ve received the application for {form.studentName} ({form.grade}). Our team will contact you at {form.email}.</p>
              <button className="btn btn-outline mt-8" onClick={() => { setForm(EMPTY); setDone(false); }}>Submit another</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="surface shadow-soft grid gap-5 p-[clamp(1.5rem,4vw,3rem)] sm:grid-cols-2">
              <Field id="studentName" label="Student’s full name" error={errors.studentName}><input className="field" {...a("studentName")} value={form.studentName} onChange={set("studentName")} autoComplete="off" /></Field>
              <Field id="dob" label="Date of birth" error={errors.dob}><input type="date" className="field" {...a("dob")} value={form.dob} onChange={set("dob")} /></Field>
              <Field id="grade" label="Applying for" error={errors.grade}>
                <select className="field" {...a("grade")} value={form.grade} onChange={set("grade")}>
                  <option value="">Select a grade</option>
                  {GRADES.map((g) => <option key={g}>{g}</option>)}
                </select>
              </Field>
              <Field id="parentName" label="Parent / guardian name" error={errors.parentName}><input className="field" {...a("parentName")} value={form.parentName} onChange={set("parentName")} autoComplete="name" /></Field>
              <Field id="email" label="Email" error={errors.email}><input type="email" className="field" {...a("email")} value={form.email} onChange={set("email")} autoComplete="email" /></Field>
              <Field id="phone" label="Phone" error={errors.phone}><input type="tel" className="field" {...a("phone")} value={form.phone} onChange={set("phone")} autoComplete="tel" /></Field>
              <div className="sm:col-span-2">
                <Field id="message" label="Anything we should know? (optional)" error={errors.message}><textarea rows={4} className="field" {...a("message")} value={form.message} onChange={set("message")} /></Field>
              </div>
              <button type="submit" disabled={sending} className="btn btn-primary sm:col-span-2 disabled:opacity-60">
                {sending ? "Submitting…" : "Submit application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
