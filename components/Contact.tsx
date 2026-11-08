import Image from "next/image";
import { contact, services } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { BrandName, Eyebrow, ringCircle, sectionTitle } from "./ui";

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[18px]">
      <span className={`${ringCircle} size-14`}>{icon}</span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-muted">{label}</span>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  const value = "text-[17px] font-bold text-navy no-underline";
  return (
    <section id="contact" className="bg-white">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap gap-x-[72px] gap-y-14 py-[clamp(72px,9vw,120px)]">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className={sectionTitle}>Book a consultation</h2>
          <p className="m-0 max-w-[460px] text-[17px] leading-[1.7]">
            Call us, send an email or fill in the form and we will contact you to arrange a time that suits you.
          </p>
          <div className="flex flex-col gap-[22px] pt-2">
            <ContactRow icon={<PhoneIcon size={22} />} label="Telephone">
              <a href={contact.phoneHref} className="text-xl font-bold text-navy no-underline">
                {contact.phone}
              </a>
            </ContactRow>
            <ContactRow icon={<MailIcon size={22} />} label="Email">
              <a href={`mailto:${contact.email}`} className={value}>
                {contact.email}
              </a>
            </ContactRow>
            <ContactRow icon={<PinIcon size={22} />} label="Office">
              <span className={value}>{contact.address}</span>
              <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="text-[14.5px] font-semibold">
                Get directions
              </a>
            </ContactRow>
            <ContactRow icon={<ClockIcon size={22} />} label="Office hours">
              <span className={value}>{contact.hours}</span>
            </ContactRow>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  const link = "text-on-navy-muted no-underline hover:text-gold-light";
  const heading = "font-display-sc text-[17px] tracking-[0.06em] text-white";
  return (
    <footer className="bg-navy-deep text-[15px] text-on-navy-muted">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-col gap-12 pt-16 pb-7">
        <div className="flex flex-wrap justify-between gap-x-14 gap-y-10">
          <div className="flex max-w-[360px] flex-[1_1_280px] flex-col gap-[18px]">
            <div className="flex items-center gap-3.5">
              <Image src="/logo.png" alt="" width={564} height={550} className="block h-auto w-[54px]" />
              <BrandName size="footer" />
            </div>
            <p className="m-0 leading-[1.65]">
              Professional. Dedicated. Results driven. Expert legal solutions with integrity and a client-centred
              approach.
            </p>
          </div>
          <div className="flex flex-col gap-[11px]">
            <span className={heading}>Our Services</span>
            {services.map((s) => (
              <a key={s.title} href="#services" className={link}>
                {s.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-[11px]">
            <span className={heading}>Get in Touch</span>
            <a href={contact.phoneHref} className={link}>
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className={link}>
              {contact.email}
            </a>
            <span>
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-gold/30 pt-[22px] text-[13.5px]">
          <span>© 2026 DB Tsamaesi Attorneys Incorporated. All rights reserved.</span>
          <span>Reg. No. [Company reg. no.] · LPC No. [Number]</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-[22px] bottom-[22px] z-40 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-navy pr-5 pl-4 text-[15px] font-bold text-white no-underline shadow-[0_10px_26px_-12px_rgba(11,21,36,0.55),inset_0_0_0_2px_#C89B4A] transition duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_16px_30px_-12px_rgba(11,21,36,0.55),inset_0_0_0_2px_#C89B4A]"
    >
      <WhatsAppIcon className="text-gold-light" />
      WhatsApp us
    </a>
  );
}
