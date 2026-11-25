import { contact, faqs, firm, services, siteUrl, socials } from "@/lib/site";

// Schema.org data that tells search engines who the firm is, where it is,
// when it is open and what it does. Built from lib/site.ts so it never drifts
// from the visible page. Check it at https://search.google.com/test/rich-results

const firmId = `${siteUrl}/#firm`;
const websiteId = `${siteUrl}/#website`;

const graph = [
  {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${siteUrl}/`,
    name: firm.shortName,
    alternateName: firm.name,
    inLanguage: "en-ZA",
    publisher: { "@id": firmId },
  },
  {
    "@type": "LegalService",
    "@id": firmId,
    name: firm.name,
    alternateName: firm.shortName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/opengraph-image`,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    address: { "@type": "PostalAddress", ...contact.postal },
    hasMap: contact.mapsHref,
    areaServed: { "@type": "City", name: contact.postal.addressLocality },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: contact.openingHours.days,
      opens: contact.openingHours.opens,
      closes: contact.openingHours.closes,
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.body },
      })),
    },
  },
  {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
