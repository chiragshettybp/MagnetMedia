import { PageLayout } from "@/components/ui/page-layout";
import { PageHero, Section } from "@/components/ui/site-sections";
import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const legalDocs: Record<
  string,
  { title: string; intro: string; sections: { h: string; p: string }[] }
> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "We keep things simple: we collect only what we need to respond to you and run this site, and we don't sell your data.",
    sections: [
      {
        h: "Information we collect",
        p: "Contact forms and project enquiries collect the details you choose to share — like your name, email, company, and the message you send us.",
      },
      {
        h: "Cookies",
        p: "We may use cookies and basic analytics to understand how the site is used. You can control cookie preferences in your browser.",
      },
      {
        h: "Data storage",
        p: "Information you submit through our forms is stored securely and used only to respond to your enquiry or provide a project.",
      },
      {
        h: "Third-party services",
        p: "We may use third-party hosting, analytics, or infrastructure services. Each provider is used only where necessary to run the site.",
      },
      {
        h: "Data retention",
        p: "We keep enquiry data only as long as needed to handle your request, and delete it when it's no longer necessary.",
      },
      {
        h: "Your rights",
        p: "You can contact us to request access to, correction of, or deletion of your personal information at magnetmedia@gmail.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro: "The simple version: this site is our home on the internet, and if you use it, here's what you're agreeing to.",
    sections: [
      {
        h: "Website usage",
        p: "By using this site you agree to use it lawfully and not interfere with its operation or misuse its content.",
      },
      {
        h: "Services",
        p: "Details of any project or service engagement are agreed separately between you and Magnet Media.",
      },
      {
        h: "Project agreements",
        p: "Specific projects are governed by a separate agreement, which will define scope, deliverables, and responsibilities.",
      },
      {
        h: "Intellectual property",
        p: "Content on this site belongs to Magnet Media unless stated otherwise. Any work we build for you transfers per your agreement.",
      },
      {
        h: "Liability",
        p: "We build carefully, but the site is provided as-is. Nothing here limits liability that cannot be limited by law.",
      },
      {
        h: "Changes to terms",
        p: "We may update these terms as the company grows. Material changes will be reflected here.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "What's on this site, what's not, and how to control it.",
    sections: [
      {
        h: "Necessary cookies",
        p: "Core cookies required for the site to work correctly.",
      },
      {
        h: "Analytics",
        p: "We may use basic analytics to understand aggregate usage — never to track you across the web.",
      },
      {
        h: "Preferences",
        p: "Any preference choices you make may be stored locally in your browser.",
      },
      {
        h: "Third-party services",
        p: "Embedded services may set their own cookies. We only use those necessary to the site's function.",
      },
      {
        h: "Cookie controls",
        p: "You can disable or clear cookies through your browser settings at any time.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    intro: "We build with accessibility in mind, and we're committed to improving it as we go.",
    sections: [
      {
        h: "Keyboard navigation",
        p: "All interactive elements are reachable and usable via keyboard.",
      },
      {
        h: "Screen readers",
        p: "We use semantic HTML and descriptive labels to support assistive technology.",
      },
      {
        h: "Contrast",
        p: "Text and UI colors are chosen with contrast in mind.",
      },
      {
        h: "Accessible forms",
        p: "Forms have clear labels and feedback states.",
      },
      {
        h: "Feedback",
        p: "If something makes the site hard to use, email magnetmedia@gmail.com and we'll fix it.",
      },
    ],
  },
};

export default function LegalPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug ?? params.slug;
  const doc = slug ? legalDocs[slug] : undefined;

  if (!doc) return <Navigate to="/404" replace />;

  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title={doc.title} text={doc.intro} />

      <Section className="pb-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {doc.sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-medium tracking-tight" style={{ color: "#C0C0C0" }}>
                {s.h}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(192, 192, 192, 0.7)" }}>
                {s.p}
              </p>
            </div>
          ))}
          <p className="text-xs" style={{ color: "rgba(192, 192, 192, 0.4)" }}>
            Questions? Email{" "}
            <a href="mailto:magnetmedia@gmail.com" className="hover:text-white">
              magnetmedia@gmail.com
            </a>
            . Other pages:{" "}
            <Link to="/sitemap" className="hover:text-white">
              sitemap
            </Link>
            .
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}