export const contact = {
  phone: "071 965 4906",
  phoneHref: "tel:+27719654906",
  email: "info@tsamaesiinc.co.za",
  addressLine1: "15 James Watt Crescent",
  addressLine2: "Industrial Site",
  address: "15 James Watt Crescent, Industrial Site",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=15+James+Watt+Crescent+Industrial+Site",
  whatsappHref: "https://wa.me/27719654906",
  hours: "[Monday to Friday, 08:00 to 16:30]",
};

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export type ServiceIcon = "gavel" | "document" | "briefcase" | "people" | "pillars" | "building";

export const services: { title: string; body: string; points: string[]; icon: ServiceIcon }[] = [
  {
    title: "Civil and Criminal Litigation",
    body: "Representation in civil disputes and criminal cases, from the first consultation through to court.",
    points: ["Bail applications and criminal trials", "Contract and debt disputes", "Urgent court applications"],
    icon: "gavel",
  },
  {
    title: "Personal Injury Claims",
    body: "Claims for compensation when you have been injured through someone else's negligence.",
    points: ["Road Accident Fund claims", "Medical negligence", "Public liability claims"],
    icon: "document",
  },
  {
    title: "Administration of Estates",
    body: "Helping families with wills and deceased estates, handled with care and in line with the Master's requirements.",
    points: ["Drafting of wills", "Reporting estates to the Master", "Executor services"],
    icon: "briefcase",
  },
  {
    title: "Employment and Labour Law",
    body: "Advice and representation for employees and employers when there is a problem at work.",
    points: ["Unfair dismissal", "CCMA and bargaining council matters", "Disciplinary hearings"],
    icon: "people",
  },
  {
    title: "Administrative Law",
    body: "Challenging decisions by government departments and public bodies that are unlawful or unfair.",
    points: ["Review of administrative decisions", "Licence and permit disputes", "Tender challenges"],
    icon: "pillars",
  },
  {
    title: "Corporate and Commercial Law",
    body: "Practical legal support for businesses, from setting up a company to contracts and disputes.",
    points: ["Company registration", "Commercial contracts", "Shareholder agreements"],
    icon: "building",
  },
];

export const steps = [
  { title: "Get in touch", body: "Call, email or send us the form. Tell us briefly what has happened." },
  {
    title: "Consultation",
    body: "We meet with you, look at your documents and explain your legal position and options.",
  },
  {
    title: "We act for you",
    body: "Once you instruct us, we handle your matter and keep you updated until it is resolved.",
  },
];

export const faqs = [
  {
    q: "What should I bring to my first consultation?",
    a: "Bring your ID and any documents related to your matter, such as letters, contracts, court papers, medical records or accident reports. If you are unsure, bring what you have and we will tell you what else is needed.",
  },
  {
    q: "How much does a consultation cost?",
    a: "[Consultation fee and payment options, to be confirmed by the firm.]",
  },
  {
    q: "I was injured in a car accident. Can I claim?",
    a: "You may be able to claim from the Road Accident Fund if another driver was wholly or partly to blame. Strict time limits apply, so speak to us as soon as possible.",
  },
  {
    q: "A family member has passed away. What happens to their estate?",
    a: "The estate must be reported to the Master of the High Court and an executor appointed to pay debts and distribute the assets, according to the will or, if there is none, the law of intestate succession. We can guide you through each step.",
  },
  {
    q: "I was dismissed from work. What can I do?",
    a: "If you believe your dismissal was unfair, you can refer a dispute to the CCMA or the relevant bargaining council, generally within 30 days of the dismissal. Contact us early so we can assess your case.",
  },
];
