import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Excellence International School" },
      { name: "description", content: "How Excellence International School collects and protects personal information." },
      { property: "og:title", content: "Privacy Policy — Excellence" },
      { property: "og:description", content: "How we handle your information." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy policy"
      sections={[
        { h: "Information we collect", p: "We collect information you provide through enquiry and application forms, such as names, contact details and student information." },
        { h: "How we use it", p: "Information is used only to respond to enquiries, process admissions and communicate with families." },
        { h: "Sharing", p: "We never sell personal data. Information is shared only with service providers who help us operate, under strict confidentiality." },
        { h: "Your rights", p: "You may request access to, correction of, or deletion of your data by contacting our office." },
      ]}
    />
  ),
});
