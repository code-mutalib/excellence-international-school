import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Excellence International School" },
      { name: "description", content: "Terms governing use of the Excellence International School website." },
      { property: "og:title", content: "Terms & Conditions — Excellence" },
      { property: "og:description", content: "Website terms of use." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & conditions"
      sections={[
        { h: "Use of this website", p: "Content on this site is provided for general information about the school and may change without notice." },
        { h: "Admissions", p: "Submitting an application does not guarantee a place. Offers are subject to assessment and seat availability." },
        { h: "Intellectual property", p: "All text, images and branding are the property of Excellence International School." },
        { h: "Contact", p: "Questions about these terms can be sent to our school office." },
      ]}
    />
  ),
});
